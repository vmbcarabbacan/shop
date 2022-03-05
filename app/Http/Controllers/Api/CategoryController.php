<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\SanitizeController;
use App\Http\Controllers\Controller;
use App\Models\Category_setup;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Traits\Logs;

class CategoryController extends Controller
{
    use Logs;

    public function cateogries(Request $request)
    {
        $categories = Category::orderBy("name", "ASC");
        if ($request->filter <> '' || $request->filter <> 'null') {
            $categories->where('name', 'LIKE', '%' . $request->filter . '%');
        }
        return $categories->paginate($request->perPage);
    }

    public function store(Request $request) {
        $sanitize = new SanitizeController();
        $name = $sanitize->string($request->name);
        $exist = Category::where([
            'name' => $name,
            'type' => $request->type
        ])
        ->first();

        if($exist && $request->id === 0) {
            return response()->json("Name with same data type already exist", 401);
        }

        $data = $request->id > 0 ? Category::find($request->id) : new Category();
        $data->name = $name;
        $data->type = $request->type;
        $data->isVisible = $request->isVisible;
        $data->save();

        $status = $request->id > 0 ? 'Edit' : 'Created new';
        $this->saveLog(auth('api')->user()->id, "${status} Category name: ${name} with type: " . $request->type);
    }

    public function filterCategoryByType($type) {
        return Category::where("type", $type)->orderBy('name', 'ASC')->get();
    }

    public function storeProductCategorySetup($productId, $categoryIds) {
        foreach($categoryIds AS $categoryId) {
            $data = new Category_setup();
            $data->productId = $productId;
            $data->categoryId = $categoryId;
            $data->save();
        }
    }

    public function updateProductCategorySetup($productId, $categoryIds) {
        $this->removeProductCategorySetup($productId);
        $this->storeProductCategorySetup($productId, $categoryIds);
    }

    private function removeProductCategorySetup($productId) {
        Category_setup::where("productId", $productId)->delete();
    }
}
