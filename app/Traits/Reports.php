<?php

    namespace App\Traits;

    use Illuminate\Support\Facades\DB;
    use App\Models\Date_range;
    use App\Models\Enrollment;
    use App\Models\Sale_item;
    use App\Models\Schedule;
    use App\Models\Sale;
    use App\Models\Cart;

    trait Reports {
        
        public function getAllTerm() {
            return Date_range::orderBy('id', 'DESC')->take(20)->get();
        }

        public function classInformationQuery() {
            return Enrollment::select(
                    'student_metas.meta_value AS studentFullName',
                    'students.date_of_birth AS dateOfBirth',
                    'momFullName.meta_value AS momFullName',
                    DB::raw('RIGHT(momMobileNumber.meta_value, 9) AS momMobileNumber'),
                    'mom.email AS momEmail',
                    'teacherFullName.meta_value AS teacherFullName',
                    'products.name AS lesson',
                    'locations.name AS location',
                    'studios.name AS studio',
                    'date_ranges.name AS term',
                    'schedules.time_start AS time_start',
                    'schedules.time_end AS time_end',
                    'weekdays.name AS weekName'
                )
                ->leftJoin('schedules', 'schedules.id', '=', 'enrollments.schedule_id')
                ->leftJoin('products', 'products.id', '=', 'schedules.product_id')
                ->leftJoin('locations', 'locations.id', '=', 'schedules.location_id')
                ->leftJoin('weekdays', 'weekdays.id', '=', 'schedules.weekday_id')
                ->leftJoin('users AS teacher', 'teacher.id', '=', 'schedules.user_id')
                ->leftJoin('user_metas AS teacherFullName', 'teacherFullName.user_id', '=', 'teacher.id')
                ->leftJoin('studios', 'studios.id', '=', 'schedules.studio_id')
                ->leftJoin('date_ranges', 'date_ranges.id', '=', 'schedules.date_range_id')
                ->leftJoin('students', 'students.id', '=', 'enrollments.student_id')
                ->leftJoin('student_metas', 'student_metas.student_id', '=', 'students.id')
                ->leftJoin('users AS mom', 'mom.id', '=', 'students.user_id')
                ->leftJoin('user_metas AS momFullName', 'momFullName.user_id', '=', 'mom.id')
                ->leftJoin('user_metas AS momMobileNumber', 'momMobileNumber.user_id', '=', 'mom.id')
                ->where([
                    "student_metas.meta_key" => "full_name",
                    "momFullName.meta_key" => "momFullName",
                    "teacherFullName.meta_key" => "momFullName",
                    "momMobileNumber.meta_key" => "momMobileNumber"
                ]);
        }

        public function numberOfStudentsQuery() {
            return Schedule::select(
                    'schedules.id AS id',
                    'products.name AS lesson',
                    'locations.name AS location',
                    'teacherFullName.meta_value AS teacherFullName',
                    'schedules.time_start AS time_start',
                    'schedules.time_end AS time_end',
                    'weekdays.name AS weekName'
                )
                ->leftJoin('products', 'products.id', '=', 'schedules.product_id')
                ->leftJoin('locations', 'locations.id', '=', 'schedules.location_id')
                ->leftJoin('weekdays', 'weekdays.id', '=', 'schedules.weekday_id')
                ->leftJoin('users AS teacher', 'teacher.id', '=', 'schedules.user_id')
                ->leftJoin('user_metas AS teacherFullName', 'teacherFullName.user_id', '=', 'teacher.id')
                ->where([
                    "teacherFullName.meta_key" => "momFullName",
                ]);
        }

        public function transactionReport() {
            return Sale_item::select(
                    'sale_items.sale_id AS transactionNumber',
                    'carts.item AS item',
                    'sales.updated_at AS datePurchase',
                    'total.meta_value AS total',
                    'sales.status AS status',
                    'payment.meta_value AS payment',
                    'customer.meta_value AS customer',
                    'processBy.meta_value AS tentered'
                )
                ->leftJoin('sales', 'sales.id', '=', 'sale_items.sale_id')
                ->leftJoin('carts', 'carts.id', '=', 'sale_items.cart_id')
                ->leftJoin('sale_metas AS total', 'total.sale_id', '=', 'sales.id')
                ->leftJoin('sale_metas AS payment', 'payment.sale_id', '=', 'sales.id')
                ->leftJoin('sale_metas AS customer', 'customer.sale_id', '=', 'sales.id')
                ->leftJoin('sale_metas AS processBy', 'processBy.sale_id', '=', 'sales.id')
                ->where([
                    'total.meta_key' => 'total',
                    'payment.meta_key' => 'payment',
                    'customer.meta_key' => 'customer',
                    'processBy.meta_key' => 'processBy',
                    'carts.status' => 'Completed'
                ])
                ->orderBy('sale_items.sale_id', 'DESC');
        }

        public function cancelledTransaction() {
            return Sale::select(
                    'sales.id AS transactionNumber',
                    'notes.meta_value AS notes',
                    'sales.status AS status',
                    'sales.updated_at AS dateCancelled'
                )
                ->leftJoin('sale_metas AS notes', 'notes.sale_id', '=', 'sales.id')
                ->where('notes.meta_key', 'notes')
                ->whereIn('sales.status', ['Cancelled', 'Refund']);
        }

        public function xeroImport($dates) {
            $date_1 = $dates[0] . ' 00:00:00';
            $date_2 = $dates[1] . ' 23:59:59';
            $data = Sale::select(
                'sales.id AS transactionNumber',
                'sales.updated_at AS datePurchase',
                'sales.total AS total',
                'sales.status AS status',
                'payment.meta_value AS payment',
                'customer.meta_value AS customer'
            )
            
            ->leftJoin('sale_metas AS payment', 'payment.sale_id', '=', 'sales.id')
            ->leftJoin('sale_metas AS customer', 'customer.sale_id', '=', 'sales.id')
            ->where([
                'payment.meta_key' => 'payment',
                'customer.meta_key' => 'customer',
                'sales.status' => 'Completed'
            ])
            ->whereBetween('sales.updated_at', [$date_1, $date_2])
            ->orderBy('sales.id', 'DESC');

            $datas = $data->get()->transform(function ($data) {
                $data->carts = Cart::select('item')
                                ->leftJoin('sale_items', 'sale_items.cart_id', '=', 'carts.id')
                                ->where('sale_items.sale_id', $data->transactionNumber)
                                ->get();
                return $data;
            });

            return $datas;
        }

        public function dayOfMonth() {
            $month_number = date('m');
            $current_year = date('Y');
            $number_of_days = cal_days_in_month(CAL_GREGORIAN, $month_number , $current_year);
            $result_sum = array();
            $result_day = array();
            for($i=1;$i<=$number_of_days;$i++ ){
                $date = $current_year.'-'.$month_number.'-'.$i;
                $sum_per_day= Sale::where('status', 'Completed')->whereDate('updated_at',$date)->sum('total'); // counting number of sales per day
                $result_sum[]= array('sales' => $sum_per_day); // adding into array
                $result_day[]= array('day' => $i); // adding into array
                // array_push($result, $sum_per_day);
            }
            $result_sum = array_column($result_sum, 'sales');
            $result_day = array_column($result_day, 'day');

            return ['sum' => $result_sum, 'day' => $result_day];
        }

        public function mostEnrolledStudents() {

        }

    }

?>