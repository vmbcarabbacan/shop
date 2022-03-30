<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\SanitizeController;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Form;

class FormController extends Controller
{
    public function get(Request $request) {
        return Form::where('name', 'LIKE', '%'.$request->search.'%')->paginate($request->perPage);
    }

    public function getBySlug($slug) {
        return Form::where('slug', $slug)->first();
    }

    public function save(Request $request) {
        $sanitize = new SanitizeController();
        $name = $sanitize->string($request->name);
        $slug = str_replace(' ', '-', $name);

        $data = $request->id > 0 ? Form::find($request->id) : new Form();
        $data->name = $name;
        $data->slug = $slug;
        $data->body = $request->body;
        $data->isShow = $request->isShow;
        $data->save();

    }

    public function active() {
        return Form::select(
            'id',
            'name',
            'slug',
            'body',
            DB::raw('0 AS isCheck')
        )
        ->where('isShow', 1)->get();
    }

}
