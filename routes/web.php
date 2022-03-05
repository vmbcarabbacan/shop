<?php

use Illuminate\Support\Facades\Route;
use App\Models\Sale_meta;
use App\Models\Sale;
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
    $data = Sale::where('status', 'Pending')->get();
        
        $datas = $data->transform(function ($data) {
            $data->items = Sale_meta::where([
                'meta_key' => 'items',
                'sale_id' => $data->id
            ])
            ->pluck('meta_value')
            ->first();
            return $data;
        });

        // return $datas;
        $ip = exec('getmac');
        $browser = $request->header('User-Agent');
        return ['ip' => $ip, 'browser' => $browser];
});

Route::get('{path}', function() {
    return view('welcome');
})->where('path', '.*');