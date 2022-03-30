<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\SanitizeController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Discount;

class DiscountController extends Controller
{
    public function get() {
        return Discount::orderBy("name")->get();
    }

    public function filters() {
        $collections = array(
            [
                "id" => 0,
                "name" => "ebd",
                "value" => 0
            ],
            [
                "id" => 0,
                "name" => "pos",
                "value" => 0
            ],
            [
                "id" => 0,
                "name" => "credits",
                "value" => 0
            ],
        );
        $discounts = collect($this->get());
        foreach($discounts AS $discount) {
            $collections[] = $discount;
        }
        return $collections;

    }

    public function save(Request $request) {
        $sani = new SanitizeController();
        $data = $request->id > 0 ? Discount::find($request->id) : new Discount();
        $data->name = $sani->string($request->name);
        $data->value = $request->value;
        $data->save();
    }
}
