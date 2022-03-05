<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\SanitizeController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ImageController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\Product_related;
use App\Models\Product_option;
use Illuminate\Http\Request;
use App\Traits\ScheduleList;
use App\Models\Product_seo;
use App\Models\Product;
use App\Traits\Carts;
use App\Traits\Web;
use Excel;
use App\Imports\ProductImport;
use App\Jobs\ProductImportJob;

class ProductController extends Controller
{

    use Carts, Web, ScheduleList;

    public function products(Request $request) {
        $image = new ImageController();
        $product = Product::orderBy('name', 'ASC')
        ->where("name", "LIKE", "%".$request->search."%")
        ->where("type", "LIKE", "%".$request->type."%")
        ->paginate($request->perPage);


        $product->getCollection()->transform(function ($product) use ($image) {
            $product->image = $image->imageFilterByIdsGetFirstElemet($product->imageIds);
            $product->pdo = $this->productOptionByProductIdWithQuantity($product->id);
            return $product;
        });

        return $product;
    }

    public function search(Request $request) {
        return Product::where('name', $request->search)->get();
    }

    public function productCartCheckIfAvailable(Request $request) {
        $carts = new CartController();

        $app_vat = $carts->findKey('vat');
        $vat = (int)$app_vat['meta_value'];
        $app_ebd = $carts->findKey('ebd');
        $ebd = $app_ebd['meta_value'];
        foreach($request->carts AS $cart) {
            
            switch ($cart['type']) {
                case 'Uniforms' :
                case 'Camps' :
                        $pdo = $this->productOptionCheckQuantity($cart['item']['pdoId']);
                        $quantities = $this->toArrayQuantity($pdo->quantity);
                        if($pdo->quantity == 0) {
                            $carts->deleteById($cart['id']);
                        }
                        if($pdo->quantity <= $cart['item']['quantity']) {
                            $cart['item']['quantity'] = $pdo->quantity;
                            $cart['item'] = $carts->updateCartItemTotal($cart['item'], $cart['item']['quantity'], $pdo->price);
                        }
                        if($pdo->price <> $cart['item']['price']) {
                            $cart['item'] = $carts->updateCartItemTotal($cart['item'], $cart['item']['quantity'], $pdo->price);
                        }
                        if($vat <> $cart['item']['vat'])
                        {
                            $cart['item'] = $carts->updateCartItemTotal($cart['item'], $cart['item']['quantity'], $pdo->price);
                        }
        
                        $cart['item']['quantities'] = $quantities;
                        $carts->storeCart(
                            $cart['browser'],
                            $cart['ip'],
                            $cart['status'],
                            $cart['type'],
                            $cart['isCart'],
                            $cart['isWeb'],
                            $cart['productId'],
                            $cart,
                            $cart['user_id']
                        );
                        break;
                case 'Lessons':
                        $pdo = $this->checkSchedule($cart['item']['pdoId']);
                        $weekday = $this->checkWeekdayQuantity($pdo->weekday_id);
                        $quantities = $this->toArrayQuantity($weekday->value);
                        if($weekday->value == 0) {
                            $carts->deleteById($cart['id']);
                        }
                        if(!$pdo) {
                            $carts->deleteById($cart['id']);
                        }
                        if($weekday->value <> $cart['item']['quantity']) {
                            $cart['item']['quantity'] = $weekday->value;
                            $cart['item'] = $carts->updateCartItemTotal($cart['item'], $cart['item']['quantity'], $pdo->price);
                        }
                        if($pdo->price <> $cart['item']['price']) {
                            $cart['item'] = $carts->updateCartItemTotal($cart['item'], $cart['item']['quantity'], $pdo->price);
                        }
                        if($vat <> $cart['item']['vat'])
                        {
                            $cart['item'] = $carts->updateCartItemTotal($cart['item'], $cart['item']['quantity'], $pdo->price);
                        }
                        $cart['item']['quantities'] = $quantities;
                        $carts->storeCart(
                            $cart['browser'],
                            $cart['ip'],
                            $cart['status'],
                            $cart['type'],
                            $cart['isCart'],
                            $cart['isWeb'],
                            $cart['productId'],
                            $cart,
                            $cart['user_id']
                        );
                        break;
            }
            // if($cart['type'] === 'Uniforms') {
                
            // }

            // if($cart['type'] === 'Lessons') {
                
            // }
            
        }

        return [
            "carts" => $this->getCart(true, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], $request->user_id), 
            "wishlist" => $this->getCart(false, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], $request->user_id)
        ];
    }

    public function productfilterByslug($slug) {
        $image = new ImageController();
        $data = Product::where('slug', $slug)->first();
        $data['images'] = $image->imageFilterIds($data->imageIds);
        $data['pdo'] = $this->productOptionByProductIdWithQuantity($data->id);
        $data['variants'] = $this->productOptionByProductId($data->id);
        $data['relatedUniformsValue'] = $this->productRelated($data->relatedUniforms);
        $data['relatedLessonsValue'] = $this->productRelated($data->relatedLessons);
        $data['seo'] = Product_seo::where('productId', $data->id)->first();
        return $data;
    }

    public function productfilterBySlugAndPdo($slug, $pdo) {
        $image = new ImageController();
        $data = Product::where('slug', $slug)->first();
        $data['images'] = $image->imageFilterIds($data->imageIds);
        $data['pdo'] = $this->checkVariantIfAvailable($data->id, $data->type)->firstWhere("id", $pdo);
        $data['variants'] = $this->checkVariantIfAvailable($data->id, $data->type);
        $data['relatedUniformsValue'] = $this->productRelated($data->relatedUniforms);
        $data['relatedLessonsValue'] = $this->productRelated($data->relatedLessons);
        $data['seo'] = Product_seo::where('productId', $data->id)->first();

        return $data;
    }

    public function productRelatedUniforms(Request $request) {
        return $this->productRelated($request->ids);
    }

    public function productRelatedLessons(Request $request) {
        return $this->productRelated($request->ids);
    }

    public function productRelated($ids) {
        $image = new ImageController();
        $my_ids = collect($ids);
        $products = Product::whereIn("id", $my_ids)->get();
        $products->transform(function ($products) use ($image) {
            $products->image = $image->imageFilterByIdsGetFirstElemet($products->imageIds);
            $products->pdo = $this->productOptionByProductIdWithQuantity($products->id);
            return $products;
        });
        $sorted = $my_ids->map(function ($id) use ($products) {
            return $products->where('id', $id)->first();
        });
        return $sorted;
    }

    public function store(Request $request) {
        $sanitize = new SanitizeController();
        $category = new CategoryController();
        $exist = Product::where([
            "name" => $sanitize->string($request->form['name']),
            "type" => $request->form['type']
        ])
        ->first();

        if($exist) {
            return response()->json("Product name with the same type already exist", 401);
        }

        $product = $this->productStore(
            $request->form['id'],
            $request->form['name'],
            $request->form['categoryIds'],
            $request->form['type'],
            $request->form['isVisible'],
            $request->form['soos'],
            $request->form['imageIds'],
            $request->form['relatedUniforms'],
            $request->form['relatedLessons'],
            $request->form['body']
        );
        $this->productOption($product->id, $request->form['variants']);
        $category->storeProductCategorySetup($product->id, $request->form['categoryIds']);
        $this->storeRelatedProduct($product->id, $request->form['relatedUniforms'], 'Uniforms');
        $this->storeRelatedProduct($product->id, $request->form['relatedLessons'], 'Schedules');
        $this->storeSeo($product->id, $request->form['seo']['keywords'], $request->form['seo']['description']);
        return response()->json("Product saved", 200);

    }

    public function update(Request $request) {
        $category = new CategoryController();
        $product = $this->productStore(
            $request->form['id'],
            $request->form['name'],
            $request->form['categoryIds'],
            $request->form['type'],
            $request->form['isVisible'],
            $request->form['soos'],
            $request->form['imageIds'],
            $request->form['relatedUniforms'],
            $request->form['relatedLessons'],
            $request->form['body']
        );
        $this->productOption($product->id, $request->form['variants']);
        $category->updateProductCategorySetup($product->id, $request->form['categoryIds']);
        $this->storeRelatedProduct($product->id, $request->form['relatedUniforms'], 'Uniforms');
        $this->storeRelatedProduct($product->id, $request->form['relatedLessons'], 'Schedules');
        $this->storeSeo($product->id, $request->form['seo']['keywords'], $request->form['seo']['description']);
        return response()->json("Product saved", 200);
    }

    public function copy(Request $request) {
        $category = new CategoryController();
        $product = $this->productStore(
            $request->form['id'],
            $request->form['name'],
            $request->form['categoryIds'],
            $request->form['type'],
            $request->form['isVisible'],
            $request->form['soos'],
            $request->form['imageIds'],
            $request->form['relatedUniforms'],
            $request->form['relatedLessons'],
            $request->form['body']
        );
        $this->copyProductOption($product->id, $request->form['variants']);
        $category->storeProductCategorySetup($product->id, $request->form['categoryIds']);
        $this->storeRelatedProduct($product->id, $request->form['relatedUniforms'], 'Uniforms');
        $this->storeRelatedProduct($product->id, $request->form['relatedLessons'], 'Schedules');
        $this->storeSeo($product->id, $request->form['seo']['keywords'], $request->form['seo']['description']);
        return response()->json("Product saved", 200);
    }

    private function productStore($id, $productName, $categoryIds, $type, $isVisible, $soos, $imageIds, $relatedUniforms, $relatedLessons, $body) {
        $sanitize = new SanitizeController();
        $name = $sanitize->string($productName);
        $slug = str_replace(' ', '-', $name);

        $data = $id > 0 ? Product::find($id) : new Product();
        $data->name = $name;
        $data->slug = $slug;
        $data->categoryIds = $categoryIds;
        $data->type = $type;
        $data->isVisible = $isVisible;
        $data->soos = $soos;
        $data->imageIds = $imageIds;
        $data->relatedUniforms = $relatedUniforms;
        $data->relatedLessons = $relatedLessons;
        $data->body = $body;
        $data->save();

        return $data;
    }

    private function productOption($id, $productOptions) {
        $sanitize = new SanitizeController();
        foreach ($productOptions AS $product) {
            if(!empty($product['name'])) {
                $data = $product['id'] > 0 ? Product_option::find($product['id']) : new Product_option();
                $data->productId  = $id;
                $data->name = $sanitize->string($product['name']);
                $data->price = $product['price'];
                $data->quantity = $product['quantity'];
                $data->isVisible = $product['isVisible'];
                $data->save();
            }
        }
    }

    private function copyProductOption($id, $productOptions) {
        $sanitize = new SanitizeController();
        foreach ($productOptions AS $product) {
            if(!empty($product['name'])) {
                $data = new Product_option();
                $data->productId  = $id;
                $data->name = $sanitize->string($product['name']);
                $data->price = $product['price'];
                $data->quantity = $product['quantity'];
                $data->isVisible = $product['isVisible'];
                $data->save();
            }
        }
    }

    private function storeRelatedProduct($productId, $productRelatedIds, $type) {
        foreach($productRelatedIds AS $productRelatedId) {
            $data = new Product_related();
            $data->productId = $productId;
            $data->productRelatedId = $productRelatedId;
            $data->type = $type;
        }
    }

    private function productOptionByProductId($id) {
        return Product_option::where('productId', $id)->get();
    }

    private function productOptionByProductIdIsVisible($id) {
        return Product_option::where(['productId' => $id, 'isVisible' => 1])->get();
    }

    private function productOptionByProductIdWithQuantity($id) {
        return Product_option::where(['productId' => $id, 'isVisible' => 1])->where("quantity", ">", "0")->first();
    }

    private function storeSeo($productId, $keywords, $description) {
        $exist = Product_seo::where("productId", $productId)->first();
        
        $data = !$exist ? new Product_seo() : Product_seo::find($exist->id);
        $data->productId = $productId;
        $data->keywords = $keywords;
        $data->description = $description;
        $data->save();
    }

    private function productOptionCheckQuantity($id) {
        return Product_option::find($id);
    }

    private function toArrayQuantity($qtys) {
        $data = array();
        for($i = 1; $i <= $qtys; $i++){
            array_push($data, $i);
        }
        
        return $data;
    }

    public function changeVisible(Request $request) {
        $data = Product::find($request->item['id']);
        $data->isVisible = $request->item['isVisible'];
        $data->save();
    }

    public function getAllLessons($type) {
        return Product::whereIn('type', $type)
        ->orderBy('name', 'ASC')
        ->get();
    }

    public function getItemsByType($type) {
        return $this->getProductByTypes($type);
    }

    public function getVariantByProductIdAndType($id, $type) {
        return $this->checkVariantIfAvailable($id, $type);
    }

    public function getItemsBySearch($search) {
        return $this->getProductBySearch($search);
    }

    public function getRandItems() {
        return [
            'uniforms' => $this->randomProducts('Uniforms', 6),
            'lessons' => $this->randomProducts('Lessons', 6),
            'camps' => $this->randomProducts('Camps', 6),
        ];
    }

    public function getItems(Request $request) {
        $items = $this->getAllProductsBySearch($request->search);
        $item_ids = $items->pluck('id');
        return [
            'items' => $this->getProducts($request->search, $request->filter, $request->perPage),
            'categories' => $this->getCategoriesByItemIds($item_ids)
        ];
    }

    public function getTypeUniform(Request $request) {
        return [
            'items' => $this->getProductByType($request->type, $request->filter, $request->perPage),
            'categories' => $this->getCategoryByType($request->type)
        ];
    }

    public function getTypeLessons(Request $request) {
        return [
            'items' => $this->getProductByType($request->type, $request->filter, $request->perPage),
            'categories' => $this->getCategoryByType($request->type)
        ];
    }

    public function getTypeCamps(Request $request) {
        return [
            'items' => $this->getProductByType($request->type, $request->filter, $request->perPage),
            'categories' => $this->getCategoryByType($request->type)
        ];
    }

    public function getAllTypeByCategoryId(Request $request) {
        return $this->getAllTypeByCategory($request->type, $request->id, $request->perPage);
    }

    public function getProductDetails($id) {
        $data = Product_option::find($id);
        $data['product'] = Product::find($data->productId);
        return $data;
    }

    public function updateProductQuantity($id, $value, $type) {
        $data = Product_option::find($id);
        $type == 'add quantity' ? $data->increment('quantity', $value) : $data->decrement('quantity', $value);
    }
    public function updateProductPrice($id, $value) {
        $data = Product_option::find($id);
        $data->price = $value;
        $data->save();
    }

    public function export() {
        return Product::select(
                        'product_options.id AS id',
                        'products.name AS product',
                        'product_options.name AS option',
                        'product_options.quantity AS availableStocksInPOS',
                        DB::raw('0 AS availableStocksInActual'),
                        'product_options.price AS price',
                        DB::raw('0 AS newStocks')
                    )
                ->leftJoin('product_options', 'product_options.productId', '=', 'products.id')
                ->where('products.type', 'Uniforms')->get();
    }

    public function import(Request $request) {
        $products = Excel::toArray(new ProductImport, $request->file('file'));
        
        foreach($products[0] AS $product) {
            dispatch(new ProductImportJob($product))->delay(now()->addSecond(1));
        }
    }
}
