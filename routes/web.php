<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Date_range;
use App\Models\Location;
use App\Models\User_meta;
use App\Models\Studio;

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

Route::get('/product-lessons', function() {
    return Product::where('type', 'Lessons')->orderBy('name')->pluck('name');
});

Route::get('/terms', function() {
    return Date_range::where('is_end', 0)->orderBy('name')->pluck('name');
});

Route::get('/locations', function() {
    return Location::where('is_visible', 1)->orderBy('name')->pluck('name');
});

Route::get('/studios', function() {
    return Studio::pluck('name');
});

Route::get('/teachers', function() {
    return User_meta::select('user_metas.meta_value AS name')
        ->leftJoin('user_metas AS role', 'role.user_id', '=', 'user_metas.user_id')
        ->where([
            'user_metas.meta_key' => 'momFullName',
            'role.meta_key' => 'role'
        ])
        ->whereIn('role.meta_value', ['Teacher', 'Manager'])
        ->orderBy('name')
        ->pluck('name');
});

Route::get('/downloadTemplate', function() {
    $filename = 'ScheduleImport.xlsm';
    return response()->download(public_path() . "/files/". $filename);
});

Route::get('/test', function (Request $request) {
    $x = 0.3958333333333333;
    $sec = intval($x * (24 * 60 * 60));
    $date = new DateTime("today +$sec seconds");
    return $date->format('H:i');
// return date('H:i:s', $unixTimestamp);

    // return preg_match("#([0-1]{1}[0-9]{1}|[2]{1}[0-3]{1}):[0-5]{1}[0-9]{1}#", $myTime);

    $start = strtotime("9:00");
        $end = strtotime("9:30");
        if ($end < $start) {
            $end += 86400;
        }
        return (($end - $start) / 3600) * 60;
    
        // $collections = array(
        //     [
        //         "id" => 0,
        //         "name" => "ebd",
        //         "value" => 0
        //     ],
        //     [
        //         "id" => 0,
        //         "name" => "credits",
        //         "value" => 0
        //     ],
        // );
        // $discounts = collect(Discount::get());
        // foreach($discounts AS $discount) {
        //     $collections[] = $discount;
        // }
        // return $collections;


        // $ip = exec('getmac');
        // $browser = $request->header('User-Agent');
        // $data = Cart::where('item->status', 'Completed')->get();
        // $collection = collect($data);
        // $filtered = $collection->filter(function ($value) {
        //     return collect($value['item']['discounts'])->whereIn('name', ["2 package", "credits"])->all();
        // });
        // return $filtered->all();
        // return $collection;
        // $filtered = $data->where("item->status", "Completed");
        // return $filtered;
        // ->where('item->discounts->name', '2 package')->get();
        // return ['ip' => $ip, 'browser' => $browser];
});

Route::get('{path}', function() {
    return view('welcome');
})->where('path', '.*');