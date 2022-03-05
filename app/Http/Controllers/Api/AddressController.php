<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User_address;

class AddressController extends Controller
{

    public function store($id, $user_id, $street, $building, $city, $area, $country, $zip) {
        $address_1 = $building . ' ' . $street;
        $data = $id > 0 ? User_address::find($id) : new User_address();
        $data->address_1 = $address_1;
        $data->user_id = $user_id;
        $data->street = $street;
        $data->building = $building;
        $data->city = $city;
        $data->area = $area;
        $data->country = $country;
        $data->zip = $zip;
        $data->save();
    }

    public function getAddress($id) {
        return User_address::where('user_id', $id)->first();
    }
}
