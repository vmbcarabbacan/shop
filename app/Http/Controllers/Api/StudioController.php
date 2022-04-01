<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\SanitizeController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Studio;

class StudioController extends Controller
{
    public function studios(Request $request) {
        return Studio::orderBy('id', 'DESC')
        ->where("name", "LIKE", "%".$request->search."%")
        ->paginate($request->perPage);
    }

    public function store(Request $request) {
        $exist = Studio::where('name', $request->name)->first();

        if($exist && $request->id == 0) {
            return response()->json('Sorry the name was already used!', 401);
        }

        $this->save(
            $request->id,
            $request->name,
            $request->color
        );

        return response()->json('Studio save!', 200);
    }

    private function save($id, $name, $color) {
        $data = $id > 0 ? Studio::find($id) : new Studio();
        $data->name = $name;
        $data->color = $color;
        $data->save();
    }

    public function get($id) {
        return Studio::find($id);
    }

    public function getByName($name) {
        return Studio::where('name', $name)->first();
    }

    public function getAll() {
        return Studio::orderBy('id', 'ASC')->get();
    }
}
