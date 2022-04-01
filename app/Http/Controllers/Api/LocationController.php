<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\SanitizeController;
use App\Http\Controllers\Api\WeekdayController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Location;

class LocationController extends Controller
{

    public function locations(Request $request) {
        return Location::orderBy('id', 'DESC')
        ->where("name", "LIKE", "%".$request->search."%")
        ->paginate($request->perPage);
    }

    public function store(Request $request) {
        $exist = Location::where('name', $request->name)->first();

        if($exist && $request->id == 0) {
            return response()->json('Sorry the name was already used!', 401);
        }

        $this->save(
            $request->id,
            $request->name,
            $request->is_visible,
            $request->weekdays
        );

        return response()->json('Location save!', 200);
    }

    public function save($id, $name, $is_visible, $weekdays) {
        $weekday = new WeekdayController();
        $sanitize = new SanitizeController();
        $data = $id > 0 ? Location::find($id) : new Location();
        $data->name = $sanitize->string($name);
        $data->is_visible = $is_visible;
        $data->save();

        $weekday->store($weekdays, $data->id);
    }

    public function get($id) {
        $weekday = new WeekdayController();
        $data = Location::find($id);
        $data['weekdays'] = $weekday->get($id);

        return $data;
    }

    public function getAll() {
        return Location::orderBy('name', 'ASC')->where('is_visible', 1)->get();
    }

    public function getByName($name) {
        return Location::where('name', $name)->first();
    }
}
