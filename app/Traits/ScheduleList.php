<?php
    namespace App\Traits;

    use App\Models\Weekday;
    use App\Models\Schedule;
    use App\Models\Enrollment;
    use App\Models\Attendance;
    use App\Models\Date_setting;
    use App\Models\Schedule_note;
    use Illuminate\Support\Facades\DB;

    trait ScheduleList {

        public function storeEnrollment($schedule, $student_id, $is_permanent) {
            $data = new Enrollment();
            $data->schedule_id = $schedule['id'];
            $data->student_id = $student_id;
            $data->is_permanent = $is_permanent;
            $data->is_end = false;
            $data->save();

            return $data;
        }

        public function storeAttendance($week, $trial_date, $enrollment_id) {
            $weekname = $week->format("Y-m-d");
            $trial = $weekname === $trial_date ? $trial_date : null; 
            $data = new Attendance();
            $data->enrollment_id = $enrollment_id;
            $data->date = $weekname;
            $data->trial_date = $trial;
            $data->status = null;
            $data->save();
        }

        public function deleteAttendance($enrollment_id) {
            Attendance::where('enrollment_id', $enrollment_id)->delete();
        }

        public function checkEnrollment($schedule_id, $student_id) {
            return Enrollment::where(['schedule_id' => $schedule_id, 'student_id' => $student_id])->first();
        }

        public function getSchedule($id) {
            return Schedule::find($id);
        }

        public function changevisible($id, $visible) {
            Schedule::where('date_range_id', $id)
                ->update(['isVisible' => $visible]);

            return Schedule::where('date_range_id', $id)->pluck('id');
        }

        public static function scheduleQuery() {
            return Schedule::select(
                'schedules.id AS id',
                'schedules.product_id AS product_id',
                'schedules.location_id AS location_id',
                'schedules.weekday_id AS weekday_id',
                'schedules.user_id AS user_id',
                'schedules.studio_id AS studio_id',
                'schedules.time_start AS time_start',
                'schedules.time_end AS time_end',
                'schedules.date_range_id AS date_range_id',
                'schedules.price AS price',
                'schedules.limit AS limit',
                'schedules.quantity AS quantity',
                'schedules.duration AS duration',
                'schedules.isVisible AS isVisible',
                'products.name AS product',
                'locations.name AS location',
                'weekdays.name AS weekday',
                'weekdays.day_id AS day_id',
                'studios.name AS studio',
                'studios.color AS color',
                'user_metas.meta_value AS teacher',
                'date_ranges.start AS start',
                'date_ranges.end AS end',
                DB::raw('1 AS is_permanent'),
                DB::raw('"" AS trial_date')
                
            )
            ->leftJoin('products', 'products.id', '=', 'schedules.product_id')
            ->leftJoin('locations', 'locations.id', '=', 'schedules.location_id')
            ->leftJoin('weekdays', 'weekdays.id', '=', 'schedules.weekday_id')
            ->leftJoin('users', 'users.id', '=', 'schedules.user_id')
            ->leftJoin('user_metas', 'user_metas.user_id', '=', 'users.id')
            ->leftJoin('date_ranges', 'date_ranges.id', '=', 'schedules.date_range_id')
            ->leftJoin('studios', 'studios.id', '=', 'schedules.studio_id')
            ->where([
                'user_metas.meta_key' => 'momFullName'
            ]);
        }

        public function enrollmentEnd($id, $status) {
            Enrollment::where('schedule_id', $id)
            ->update(['is_end' => $status]);
        }

        public function enrolledStudent($schedule_id) {
            $datas = Enrollment::select('enrollments.id AS id','fullname.meta_value AS fullname')->where('schedule_id', $schedule_id)
                ->leftJoin("students", "students.id", "=", "enrollments.student_id")
                ->leftJoin("student_metas AS fullname", "fullname.student_id", "=", "students.id")
                ->where("fullname.meta_key", "full_name");
            $data = $datas->get()->transform(function($datas) {
                $datas->attendance = Attendance::where('enrollment_id', $datas->id)->get();
                return $datas;
            });

            return $data;
        }
        
        public function scheduleNotes($schedule_id) {
            return Schedule_note::where('schedule_id', $schedule_id)->orderBy('id', "DESC")->get();
        }

        public function checkSchedule($id) {
            return Schedule::find($id);
        }

        public function checkWeekdayQuantity($id) {
            return Weekday::find($id);
        }

        public function checkDateRangeLocationIdExist($dateRangeId, $locationId) {
            return Date_setting::where([
                "date_range_id" => $dateRangeId,
                "location_id" => $locationId
            ])
            ->first();
        }

        public function storeSetup($dateRangeId, $locationId) {
            $data = new Date_setting();
            $data->date_range_id = $dateRangeId;
            $data->location_id = $locationId;
            $data->save();
        }

        public function updateAttendances($id, $status) {
            $data = Attendance::find($id);
            $data->status = $status;
            $data->save();
        }

        public function scheduleNoteSave($id, $date, $notes) {
            if(!empty($notes)) {
                $data = new Schedule_note();
                $data->schedule_id = $id;
                $data->date = $date;
                $data->notes = $notes;
                $data->save();
            }
        }

    }

?>