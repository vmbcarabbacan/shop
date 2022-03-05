<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\DateRangeController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\ScheduleList;
use App\Models\Enrollment;
use App\Models\Attendance;
use App\Traits\setDates;
use App\Traits\Carts;

class EnrollmentController extends Controller
{
    use setDates, ScheduleList, Carts;

    public function enrollment(Request $request) {
        $dates = new DateRangeController();

        foreach($request->schedules AS $schedule) {
            $dateRange = $dates->get($schedule['date_range_id']);

            $exist = $this->checkEnrollment($schedule['id'], $request->id);

            if(!$exist) {

                $data = $this->storeEnrollment($schedule, $request->id, true);

                $this->attendance($data->id, $dateRange->start, $dateRange->end, $schedule['day_id'], $schedule['trial_date']);
                if($schedule['is_permanent']) {
                    $this->scheduleDecrement($schedule['id']);
                }
            }
        }
    }

    public function makePermanent($id) {
        $data = Enrollment::find($id);
        $data->is_permanent = 1;
        $data->save();

        $this->scheduleDecrement($data->schedule_id);
    }

    public function get($id, $is_end) {
        return Enrollment::select(
            'enrollments.id AS id',
            'enrollments.is_permanent AS is_permanent',
            'schedules.time_start AS time_start',
            'schedules.time_end AS time_end',
            'products.name AS product',
            'locations.name AS location',
            'weekdays.name AS weekday',
            'studios.name AS studio',
            'user_metas.meta_value AS teacher'
        )
        ->leftJoin('schedules', 'schedules.id', '=', 'enrollments.schedule_id')
        ->leftJoin('products', 'products.id', '=', 'schedules.product_id')
        ->leftJoin('locations', 'locations.id', '=', 'schedules.location_id')
        ->leftJoin('weekdays', 'weekdays.id', '=', 'schedules.weekday_id')
        ->leftJoin('users', 'users.id', '=', 'schedules.user_id')
        ->leftJoin('user_metas', 'user_metas.user_id', '=', 'users.id')
        ->leftJoin('date_ranges', 'date_ranges.id', '=', 'schedules.date_range_id')
        ->leftJoin('studios', 'studios.id', '=', 'schedules.studio_id')
        ->where([
            'enrollments.student_id' => $id,
            'enrollments.is_end' => $is_end,
            'user_metas.meta_key' => 'momFullName'
        ])
        ->get();
    }

    public function delete($id) {
        $data = Enrollment::find($id);
        Attendance::where('enrollment_id', $data->id)->delete();
        if($data->is_permanent) {
            $this->scheduleIncrement($data->schedule_id);
        }
        $data->delete();
    }

    private function attendance($id, $start, $end, $weekid, $trial_date) {

        $weeknames = $this->scheduleDates($start, $end, $weekid);

        foreach($weeknames AS $week) {
            $this->storeAttendance($week, $trial_date, $id);
        }
    }
}
