<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Weekday;

class WeekdayController extends Controller
{
    public function store($weekdays, $id) {
        foreach($weekdays AS $weekday) {
            $this->save(
                $weekday['id'],
                $id,
                $weekday['day_id'],
                $weekday['name'],
                $weekday['value']
            );
        }
    }

    public function get($id) {
        return Weekday::where('location_id', $id)->get();
    }

    private function save($id, $location_id, $day_id, $name, $value) {
        $data = $id > 0 ? Weekday::find($id) : new Weekday();
        $data->location_id = $location_id;
        $data->day_id = $day_id;
        $data->name = $name;
        $data->value = $value;
        $data->save();
    }
}
