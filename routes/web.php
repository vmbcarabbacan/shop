<?php

use Illuminate\Support\Facades\Route;
use App\Models\Sale_meta;
use App\Models\Sale;
use App\Models\Cart;
use App\Models\Discount;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/test', function (Request $request) {
    // $data = Sale::where('status', 'Pending')->get();
        
        // $datas = $data->transform(function ($data) {
        //     $data->items = Sale_meta::where([
        //         'meta_key' => 'items',
        //         'sale_id' => $data->id
        //     ])
        //     ->pluck('meta_value')
        //     ->first();
        //     return $data;
        // });

        // return $datas;

        $collections = array(
            [
                "id" => 0,
                "name" => "ebd",
                "value" => 0
            ],
            [
                "id" => 0,
                "name" => "credits",
                "value" => 0
            ],
        );
        $discounts = collect(Discount::get());
        foreach($discounts AS $discount) {
            $collections[] = $discount;
        }
        return $collections;


        $ip = exec('getmac');
        $browser = $request->header('User-Agent');
        $data = Cart::where('item->status', 'Completed')->get();
        $collection = collect($data);
        $filtered = $collection->filter(function ($value) {
            return collect($value['item']['discounts'])->whereIn('name', ["2 package", "credits"])->all();
        });
        return $filtered->all();
        // return $collection;
        // $filtered = $data->where("item->status", "Completed");
        // return $filtered;
        // ->where('item->discounts->name', '2 package')->get();
        // return ['ip' => $ip, 'browser' => $browser];
});

Route::get('{path}', function() {
    return view('welcome');
})->where('path', '.*');