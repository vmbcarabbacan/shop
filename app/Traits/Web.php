<?php
    namespace App\Traits;

    use App\Http\Controllers\Api\ImageController;
    use Illuminate\Support\Facades\DB;
    use App\Models\Product_option;
    use App\Models\Category;
    use App\Models\Category_setup;
    use App\Models\Schedule;
    use App\Models\Product;
    use App\Models\User;
    use App\Traits\Pos;

trait Web {

        use Pos;


        public function getProducts($search, $filter, $perPage) {
            $image = new ImageController();
            $myFilter = array();
           if($filter) {
               $myFilter = $this->getCategoryById($filter);
           }
            $data = Product::where('isVisible', 1)
            ->where('name', 'LIKE', '%'.$search.'%')
            ->orderBy("name", "ASC");
            

            if(count($myFilter) > 0) {
                $data->whereIn('id', $myFilter);
            }

            $datas = $data->paginate($perPage);
            
            $datas->getCollection()->transform(function ($datas) use ($image) {
                $datas->image = $image->imageFilterIds($datas->imageIds)->first();
                $datas->totalQty = $this->checkVariantIfAvailable($datas->id, $datas->type)->sum('quantity');
                $datas->pdo = $this->checkVariantIfAvailable($datas->id, $datas->type)->first();
                return $datas;
            });

            return $datas;
        }

        public function getProductByType($type, $filter, $perPage) {
            $image = new ImageController();
            $myFilter = array();
           if($filter) {
               $myFilter = $this->getCategoryById($filter);
           }
            $data = Product::where('isVisible', 1)
            ->where('type', 'LIKE', $type)
            ->orderBy("name", "ASC");
            

            if(count($myFilter) > 0) {
                $data->whereIn('id', $myFilter);
            }

            $datas = $data->paginate($perPage);
            
            $datas->getCollection()->transform(function ($datas) use ($image) {
                $datas->image = $image->imageFilterIds($datas->imageIds)->first();
                $datas->totalQty = $this->checkVariantIfAvailable($datas->id, $datas->type)->sum('quantity');
                $datas->pdo = $this->checkVariantIfAvailable($datas->id, $datas->type)->first();
                return $datas;
            });

            return $datas;
        }

        public function getAllProductsBySearch($search) {
            return Product::where('isVisible', 1)
            ->where('name', 'LIKE', '%'.$search.'%')
            ->orderBy("name", "ASC")
            ->get();
        }

        public function getCategoriesByItemIds($ids) {
            $data = Category::select(
                'categories.type AS name'
            )
            ->leftJoin('category_setups', 'category_setups.categoryId', '=', 'categories.id')
            ->whereIn('category_setups.productId', $ids)
            ->where('isVisible', 1)
            ->orderBy('type', 'ASC')
            ->distinct()
            ->get();

            $data->transform(function ($data) use ($ids) {
                $data->children = Category::select(
                    'categories.id AS id',
                    'categories.name AS name',
                    'categories.type AS type'
                )
                ->leftJoin('category_setups', 'category_setups.categoryId', '=', 'categories.id')
                ->whereIn('category_setups.productId', $ids)
                ->where('isVisible', 1)
                ->orderBy('type', 'ASC')
                ->distinct()
                ->get();

                return $data;
            });

            return $data;
        }

        public function getAllCategories() {
            $data = Category::select(
                'categories.type AS name'
            )
            ->leftJoin('category_setups', 'category_setups.categoryId', '=', 'categories.id')
            ->where('isVisible', 1)
            ->orderBy('type', 'DESC')
            ->distinct()
            ->get();

            $data->transform(function ($data) {
                $data->children = Category::select(
                    'categories.id AS id',
                    'categories.name AS name',
                    'categories.type AS type'
                )
                ->leftJoin('category_setups', 'category_setups.categoryId', '=', 'categories.id')
                ->where('isVisible', 1)
                ->orderBy('name', 'ASC')
                ->distinct()
                ->get();

                return $data;
            });

            return $data;
        }

        public function getCategoryByType($type) {
            return Category::select(
                'categories.id AS id',
                'categories.name AS name'
            )
            ->where('type', $type)
            ->where('isVisible', 1)
            ->orderBy('name', 'ASC')
            ->get();
        }

        public function getAllTypeByCategory($type, $id, $perPage) {
            $image = new ImageController();
            $filter = array();
            array_push($filter, $id);
            $myProductIds = $this->getCategoryById($filter);

            $data = Product::where('isVisible', 1)
            ->where('type', 'LIKE', $type)
            ->whereIn('id', $myProductIds)
            ->orderBy("name", "ASC")
            ->paginate($perPage);
            
            $data->getCollection()->transform(function ($data) use ($image) {
                $data->image = $image->imageFilterIds($data->imageIds)->first();
                $data->totalQty = $this->checkVariantIfAvailable($data->id, $data->type)->sum('quantity');
                $data->pdo = $this->checkVariantIfAvailable($data->id, $data->type)->first();
                return $data;
            });

            return $data;

        }

        private function getCategoryById($ids) {
            return Category_setup::whereIn('categoryId', $ids)->distinct('productId')->pluck('productId');
        }

    }

?>