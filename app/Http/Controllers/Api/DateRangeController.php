<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Date_setting;
use App\Models\Date_range;
use App\Traits\ScheduleList;
use App\Traits\Reports;

class DateRangeController extends Controller
{

    use ScheduleList, Reports;

    public function dateRanges(Request $request) 
    {
        return Date_range::orderBy('id', 'DESC')
        ->where("name", "LIKE", "%".$request->search."%")
        ->paginate($request->perPage);
    }

    public function store(Request $request) {
        $exist = Date_range::where('name', $request->name)->first();

        if($exist && $request->id == 0) {
            return response()->json('Sorry the name was already used!', 401);
        }

        $this->save($request->id, 
                    $request->name, 
                    $request->start, 
                    $request->end, 
                    $request->is_end);
        return response()->json('Successfully save!', 200);
    } 

    public function save($id, $name, $start, $end, $is_end) {
        $sanitize = new SanitizeController();
        $data = $id > 0 ? Date_range::find($id) : new Date_range();
        $data->name = $sanitize->string($name);
        $data->start = $start;
        $data->end = $end;
        $data->is_end = $is_end;
        $data->save();

        $schedules = $this->changevisible($id, $is_end ? false : true);
        foreach($schedules AS $schedule) {
            $this->enrollmentEnd($schedule, $is_end);
        }
    }

    public function get($id) {
        return Date_range::find($id);
    }

    public function setup(Request $request) {
        $data['location_id'] = Date_setting::where('date_range_id', $request->id)->pluck('location_id');
        $data['id'] = $request->id;

        return $data;
    }

    public function setupSave(Request $request) {
        $this->deleteSetup($request->dateRangeId);
        foreach($request->locationIds AS $locationId) {
            $this->storeSetup($request->dateRangeId, $locationId);
        }
    }

    private function deleteSetup($dateRangeId) {
        Date_setting::where('date_range_id', $dateRangeId)->delete();
    }

    public function getAll($locationId) {
        $data = Date_setting::leftJoin('date_ranges', 'date_ranges.id', '=', 'date_settings.date_range_id')
            ->where('date_settings.location_id', $locationId)
            ->orderBy('date_ranges.id', 'DESC')
            ->get();

        return $data;
    }

    public function getDateIfExist($locationId) {
        return Date_setting::leftJoin('date_ranges', 'date_ranges.id', '=', 'date_settings.date_range_id')
            ->where('date_settings.location_id', $locationId)
            ->orderBy('date_ranges.id', 'DESC')
            ->where('date_ranges.is_end', 0)
            ->first();
    }

    public function getDateById($id) {
        $data = Date_range::find($id);

        return $data;
    }

    public function getVisibleTerms() {
        return Date_range::where('is_end', 0)->get();
    }

    public function getTerms() {
        return $this->getAllTerm();
    }

}
