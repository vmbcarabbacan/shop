<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\DateRangeController;
use App\Http\Controllers\Api\DiscountController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Date_setting;
use App\Models\Enrollment;
use App\Models\Schedule;
use App\Traits\Reports;
use App\Models\Cart;
use App\Traits\Sams;

class ReportController extends Controller
{
    use Reports, Sams;

    public function getFilters() {
        $terms = new DateRangeController();
        $teachers = new UserController();
        $terms = new DateRangeController();
        $product = new ProductController();
        $discount = new DiscountController();
        return [
            "terms" => $terms->getTerms(),
            "products" => $product->getAllLessons(["Uniforms"]),
            "lessons" => $product->getAllLessons(["Lessons"]),
            "allProducts" => $product->getAllLessons(["Uniforms","Lessons","Camps", "Others"]),
            "teachers" => $teachers->getAllTeachers(),
            "students" => $this->samsGetStudent()->get(),
            "receptions" => $teachers->getReceptions(),
            "discounts" => $discount->filters()
        ];
    }

    public function getLocationByTerm(Request $request) {
        return Date_setting::select(
            'locations.id AS id',
            'locations.name AS name'
        )
            ->leftJoin('locations', 'locations.id', '=', 'date_settings.location_id')
            ->whereIn('date_settings.date_range_id', $request->id)
            ->get();
    }

    public function filterClassInformation(Request $request) {
        $data = $this->classInformationQuery();

        if($request->termIds) {
            $data->whereIn('schedules.date_range_id', $request->termIds);
        }

        if($request->locationIds) {
            $data->whereIn('schedules.location_id', $request->locationIds);
        }

        if($request->lessonIds) {
            $data->whereIn('schedules.product_id', $request->lessonIds);
        }

        if($request->teacherIds) {
            $data->whereIn('schedules.user_id', $request->teacherIds);
        }

        return $data->get();
    }

    public function filterStudentsPerLessons(Request $request) {
        $data = $this->numberOfStudentsQuery();

        if($request->termIds) {
            $data->whereIn('schedules.date_range_id', $request->termIds);
        }

        if($request->locationIds) {
            $data->whereIn('schedules.location_id', $request->locationIds);
        }

        if($request->lessonIds) {
            $data->whereIn('schedules.product_id', $request->lessonIds);
        }

        if($request->teacherIds) {
            $data->whereIn('schedules.user_id', $request->teacherIds);
        }

        $datas = $data->get()->transform(function($data) {
            $data->students = Enrollment::where('schedule_id', $data->id)->count('student_id');
            return $data;
        });

        $collection = collect($datas);
        
        $sorted = $collection->sortBy([
            ['location', "asc"],
            ['students', 'desc']
        ]);

        return $sorted->values()->all();
    }

    public function filterEndOfDay(Request $request) {
        $user = new UserController();
        $date_1 = $request->dates[0] . ' 00:00:00';
        $date_2 = $request->dates[1] . ' 23:59:59';
        $users = array();
        foreach($request->receptionIds AS $id) {
            $mom = $user->getMomMeta($id);
            array_push($users, json_encode($mom));
        }
        $data = $this->transactionReport()
            ->whereBetween('sales.updated_at', [$date_1, $date_2]);
        if(count($request->receptionIds) > 0) {
            $data->whereIn('processBy.meta_value', $users);
        }

        $cancelled = $this->cancelledTransaction()
            ->whereBetween('sales.updated_at', [$date_1, $date_2]);
        return ['endOfDay' => $data->get(), 'cancelled' => $cancelled->get()];

    }

    public function filterSales(Request $request) {
        
        $date_1 = $request->dates[0] . ' 00:00:00';
        $date_2 = $request->dates[1] . ' 23:59:59';
        
        $data = $this->transactionReport()
            ->whereBetween('sales.updated_at', [$date_1, $date_2]);
        if(count($request->types) > 0) {
            $data->whereIn('carts.type', $request->types);
        }
        return $data->get();
    }

    public function filterSalesRecieptsByProductId(Request $request) {
        $date_1 = $request->dates[0] . ' 00:00:00';
        $date_2 = $request->dates[1] . ' 23:59:59';

        return $this->transactionReport()
            ->where('item->productId', $request->productId)
            ->whereBetween('sales.updated_at', [$date_1, $date_2])
            ->get();
    }

    public function filterLessonByTerm(Request $request) {
        $data = $this->transactionReport()
        ->leftJoin('schedules', 'schedules.id', '=', 'carts.item->pdoId')
        ->whereIn('schedules.date_range_id', $request->termIds);
        
        if(!empty($request->teacherIds)) {
            $data->whereIn('schedules.user_id', $request->teacherIds);
        }
        
        if(!empty($request->lessonIds)) {
            $data->whereIn('schedules.product_id', $request->lessonIds);
        }
        
        if(!empty($request->locationIds)) {
            $data->whereIn('schedules.location_id', $request->locationIds);
        }

        return $data->get();
    }

    public function filterSalesRecieptsByTermIds(Request $request) {
        $data = $this->transactionReport()
        ->addSelect('schedules.duration AS duration')
        ->leftJoin('schedules', 'schedules.id', '=', 'carts.item->pdoId')
        ->where('item->productId', $request->productId)
        ->whereIn('schedules.date_range_id', $request->termIds);
        
        if(!empty($request->teacherIds)) {
            $data->whereIn('schedules.user_id', $request->teacherIds);
        }
        
        if(!empty($request->lessonIds)) {
            $data->whereIn('schedules.product_id', $request->lessonIds);
        }
        
        if(!empty($request->locationIds)) {
            $data->whereIn('schedules.location_id', $request->locationIds);
        }

        return $data->get();
    }

    public function filterDayOfMonth() {
        return $this->dayOfMonth();
    }

    public function filterStudentsPurchased(Request $request) {
        
        $data = Cart::where('status', 'Completed');
        if($request->studentIds) {
            $data->whereIn('item->student->id', $request->studentIds);
        }
        if($request->allProdIds) {
            $data->whereIn('productId', $request->allProdIds);
        }
        if($request->status) {
            $data->whereIn('item->status', $request->status);
        }
        return $data->orderBy('updated_at', 'DESC')->get();
    }

    public function filterDiscounts(Request $request) {
        $date_1 = $request->dates[0] . ' 00:00:00';
        $date_2 = $request->dates[1] . ' 23:59:59';
        
        $discounts = $request->discounts;
        $data = Cart::where('item->status', $request->status)
            ->whereBetween('updated_at', [$date_1, $date_2])->get();
        $collection = collect($data);
        $filtered = $collection->filter(function ($value) use($discounts) {
            return collect($value['item']['discounts'])->whereIn('name', $discounts)->all();
        });
        return $filtered;
    }

    
}
