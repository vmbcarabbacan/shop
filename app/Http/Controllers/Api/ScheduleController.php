<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\DateRangeController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\LocationController;
use App\Http\Controllers\Api\WeekdayController;
use App\Http\Controllers\Api\StudioController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Controller;
use App\Models\Schedule_import;
use Illuminate\Http\Request;
use App\Traits\ScheduleList;
use App\Models\Schedule;
use App\Traits\setDates;
use Excel;
use DateTime;
use App\Jobs\ScheduleJob;

class ScheduleController extends Controller
{
    use ScheduleList, setDates;

    public function getAllDetails($id) {
        $product = new ProductController();
        $location = new LocationController();
        $user = new UserController();
        $studio = new StudioController();
        $dateRange = new DateRangeController();
        return [
            'lessons' => $product->getAllLessons(["Lessons"]),
            'locations' => $location->getAll(),
            'teachers' => $user->getAllTeachers(),
            'studios' => $studio->getAll(),
            'dateranges' => $dateRange->getDateIfExist($id)
        ];
    }

    public function schedules(Request $request) {
        

        $data = $this->scheduleQuery()
        ->orderBy('schedules.id', 'DESC')
        ->where('date_ranges.is_end', 0)
        ->where($this->key($request->type), "LIKE", "%".$request->search."%")
        ->paginate($request->perPage);

        $data->getCollection()->transform(function ($data) {
            $date = array();
            $weeknames = $this->scheduleDates($data->start, $data->end, $data->day_id);
            foreach($weeknames AS $week) {
                array_push($date, $week->format("Y-m-d"));
            }
            $data->dates = $date;
            

            return $data;
        });

        return $data;
    }

    private function key($type) {
        switch ($type) {
            case 'Lesson':
                return "products.name";
                break;
    
            case 'Location':
                return "locations.name";
                break;
            
    
            case 'Teacher':
                return "user_metas.meta_value";
                break;
            
    
            case 'Day':
                return "weekdays.name";
                break;
            default: break;
        };
    }

    public function store(Request $request) {
        $dateRange = new DateRangeController();
        $exist = $dateRange->getDateIfExist($request->location_id);
        if(!$exist) {
            return response()->json('Please set date range first', 401);
        }
        $updated = $dateRange->getDateById($request->date_range_id);
        $duration = $this->getDuration($request->time_start, $request->time_end);
        $dateRange = $request->id > 0 ? $request->date_range_id : $exist->id;
        $start = $request->id > 0 ? $updated->start : $exist->start;
        $end = $request->id > 0 ? $updated->end : $exist->end;

        $data = $request->id > 0 ? Schedule::find($request->id) : new Schedule();
        $data->product_id = $request->product_id;
        $data->location_id = $request->location_id;
        $data->weekday_id = $request->weekday_id;
        $data->user_id = $request->user_id;
        $data->studio_id = $request->studio_id;
        $data->date_range_id = $dateRange;
        $data->time_start = $request->time_start;
        $data->time_end = $request->time_end;
        $data->price = $request->price;
        $data->quantity = $request->id > 0 ? $request->quantity : $request->limit;
        $data->limit = $request->limit;
        $data->duration = $duration;
        $data->isVisible = $request->isVisible;
        $data->save();

        return response()->json('Schedule save start date is ' . $start . ' and end date will be on ' . $end  , 200);
    }

    public function get($id) {
        return Schedule::find($id);
    }

    public function getAllActiveTimeStart() {
        return Schedule::select('time_start')->orderBy('time_start', 'ASC')->distinct('time_start')->pluck('time_start');
    }

    protected function getDuration($starting, $ending)
    {
        $start = strtotime($starting);
        $end = strtotime($ending);
        if ($end < $start) {
            $end += 86400;
        }
        return (($end - $start) / 3600) * 60;
    }

    public function getScheduleByDateRangeId(Request $request) {
        $data = $this->scheduleQuery()->where('schedules.date_range_id', $request->dateRangeId);
        if($request->search) {
            $data->where("products.name", "LIKE", "%".$request->search."%");
        }
        return $data->get();
    }

    public function scheduleCopySave(Request $request) {
        foreach($request->schedules AS $schedule) {

            $exist = $this->checkScheduleIfExist(
                $schedule["product_id"],
                $schedule["location_id"],
                $schedule["weekday_id"],
                $schedule["user_id"],
                $schedule["studio_id"],
                $request->toTermId,
                $schedule["time_start"],
                $schedule["time_end"]
            );

            if(!$exist) {
                $this->storeSchedule(
                    $schedule["product_id"],
                    $schedule["location_id"],
                    $schedule["weekday_id"],
                    $schedule["user_id"],
                    $schedule["studio_id"],
                    $request->toTermId,
                    $schedule["time_start"],
                    $schedule["time_end"],
                    $schedule["price"],
                    $schedule["quantity"],
                    $schedule["limit"],
                    $schedule["duration"],
                    $schedule["isVisible"],
                );
            }

            $checkLocationifExist = $this->checkDateRangeLocationIdExist($request->toTermId, $schedule['location_id']);

            if(!$checkLocationifExist) {
                $this->storeSetup($request->toTermId, $schedule['location_id']);
            }
        }
    }

    public function getDates($id) {
        $dateRange = new DateRangeController();
        $schedule = $this->get($id);
        $date_range = $dateRange->get($schedule['date_range_id']);
        $weekday = $this->checkWeekdayQuantity($schedule['weekday_id']);
                
        $dates = $this->scheduleDates($date_range['start'], $date_range['end'], $weekday['day_id']);
        $date = array();
        foreach($dates AS $value) {
            array_push($date, $value->format("Y-m-d"));
        }
        
        return ['schedule_id'=> (int)$id,'enrolled' => $this->enrolledStudent($id), 'dates' => $date, "notes" => $this->scheduleNotes($id), "schedule" => $this->scheduleQuery()->where('schedules.id', $id)->first()];
    }

    public function changeVisible(Request $request) {
        $data = Schedule::find($request->item['id']);
        $data->isVisible = $request->item['isVisible'];
        $data->save();
    }

    public function getTime($time) {
        $sec = intval($time * (24 * 60 * 60));
        $date = new DateTime("today +$sec seconds");
        return $date->format('H:i');
    }
    
    public function import(Request $request) {
        $schedules = Excel::toArray(new Schedule_import, $request->file('file'));

        $product = new ProductController();
        $location = new LocationController();
        $user = new UserController();
        $studio = new StudioController();
        $dateRange = new DateRangeController();
        $weekday = new WeekdayController();

        $data = array();
        $missing = array();
        foreach($schedules[0] As $key => $schedule) {
            if($key > 0) {
                if(    $schedule[0]
                    && $schedule[2]
                    && $schedule[3]
                    && $schedule[4]
                    && $schedule[5]
                    && $schedule[6]
                    && $schedule[7]
                    && $schedule[8]
                    && $schedule[9]
                ) {
                    $data[] = array(
                        'date_range_id' => $dateRange->getByName($schedule[0])->id,
                        'location_id' => $location->getByName($schedule[1])->id,
                        'product_id' => $product->getByName($schedule[2])->id,
                        'user_id' => $user->getByName($schedule[3])->user_id,
                        'weekday_id' => $weekday->getByNameAndLocationId($location->getByName($schedule[1])->id, $schedule[4])->id,
                        'studio_id' => $studio->getByName($schedule[5])->id,
                        'time_start' => $this->getTime($schedule[6]),
                        'time_end' => $this->getTime($schedule[7]),
                        'quantity' => $schedule[8],
                        'limit' => $schedule[8],
                        'duration' => $this->getDuration($this->getTime($schedule[6]), $this->getTime($schedule[7])),
                        'price' => $schedule[9],
                        'isVisible' => true
                    );
                } else {
                    if(
                        $schedule[0]
                        || $schedule[1]
                        || $schedule[2]
                        || $schedule[3]
                        || $schedule[4]
                        || $schedule[5]
                        || $schedule[6]
                        || $schedule[7]
                        || $schedule[8]
                        || $schedule[9]
                    ) {
                        $missing[] = array(
                            'term' => $schedule[0],
                            'location' => $schedule[1],
                            'lesson' => $schedule[2],
                            'teacher' => $schedule[3],
                            'day' => $schedule[4],
                            'studio' => $schedule[5],
                            'time_start' => $schedule[6],
                            'time_end' => $schedule[7],
                            'limit' => $schedule[8],
                            'price' => $schedule[9]
                        );
                    }
                    
                }
            }            
        }
        dispatch(new ScheduleJob($data))->delay(now()->addSecond(5));
        return ['success' => $data, 'failed' => $missing]; 
    }
}
