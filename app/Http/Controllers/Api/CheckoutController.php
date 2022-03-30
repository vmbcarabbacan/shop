<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\DateRangeController;
use App\Http\Controllers\Api\AddressController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\FormController;
use App\Http\Controllers\Controller;
use App\Events\eventInvoice;
use Illuminate\Http\Request;
use App\Traits\ScheduleList;
use App\Models\Sale_item;
use App\Models\Sale_meta;
use App\Models\Cart;
use App\Models\Sale;
use App\Traits\Carts;
use App\Traits\Sales;
use App\Traits\setDates;

class CheckoutController extends Controller
{
    use Carts, Sales, ScheduleList, setDates;

    public function checkoutPOS(Request $request) {
        // return $request->all();
        $user = new UserController();
        $form = new FormController();
        $payment = collect($request->payment);
        $telr = $payment->firstWhere('payment', 'Telr');

        $items = array();
        $browser = $request->header('User-Agent');
        $ip = $_SERVER['REMOTE_ADDR'];
        
        if($request->isCredit) {
            $credits = $user->findUserMeta($request->mom['id'], 'credits');
            $credits->decrement('meta_value', $request->credit);
        }

        $status = !$request->link ? 'Completed' : 'Pending';
        if($request->total['total'] == 0){
            $status = 'Completed';
        }
        $sale = $this->createSale($request->total, $request->mom, $status);
        foreach($request->item AS $value) {

            $value['item']['status'] = $status;
            
            $item = $this->updateCart($value, $request->mom, $status, $browser, $ip);

            $this->createSaleItem($sale->id, $value['id'], $value['item']['quantity'], $value['item']['total_price_excl'], $value['item']['total_tax'], $value['item']['discount'], $value['item']['total_price']);

            array_push($items, $item);

            if($item['status'] == 'Completed') {
                $this->deduction($value);
            }
        }

        $link = null;

        if($request->total['total'] > 0) {
            if($request->link) {
                $link = $this->telr($sale->id, $telr['value'], $request->mom['fullName']);
            }
        }

        $this->createSaleMeta($sale->id, $request->mom, $request->payment, $items, $request->total, $request->address, $request->notes, $link, $user->getMomMeta(auth()->user()->id), $request->isCredit, $request->credit);

        if(!$request->link || $request->total['total'] == 0) {
            event(new eventInvoice($request->mom, $items, $request->total, $sale->id, '', $form->active()));
        }
        
        return [
            "carts" => $this->getCart(true, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], auth('api')->user()->id), 
            "pos" => $this->getCart(true, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], auth('api')->user()->id, false), 
            "wishlist" => $this->getCart(false, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], auth('api')->user()->id),
            "telr" => $link,
            "transactionNumber" => $sale->id
        ];
    }

    public function deduction($item) {
        switch ($item['type']) {
            case 'Camps':
            case 'Uniforms':
                $this->uniformDecrement($item['item']['pdoId'], $item['item']['quantity']);
                break;
            case 'Lessons': 
                $this->enrollment($item['item']['pdoId'], $item['item']['student']['id'], $item['item']['is_permanent']);
                break;
            default:break;
        }
    }

    public function increment($item) {
        switch ($item['type']) {
            case 'Camps':
            case 'Uniforms':
                $this->uniformIncrement($item['item']['pdoId'], $item['item']['quantity']);
                break;
            case 'Lessons':
                $this->removeEnrollment($item['item']['pdoId'], $item['item']['student']['id']);
        }
    }

    private function removeEnrollment($schedule_id, $student_id) {
        $enrollment = $this->checkEnrollment($schedule_id, $student_id);
        $this->deleteAttendance($enrollment->id);
        $enrollment->delete();
        $this->scheduleIncrement($schedule_id);
    }

    private function enrollment($schedule_id, $student_id, $is_permanent) {
        $dates = new DateRangeController();

        $schedule = $this->getSchedule($schedule_id);

        $dateRange = $dates->get($schedule['date_range_id']);
        $exist = $this->checkEnrollment($schedule_id, $student_id);
        if(!$exist) {

            $data = $this->storeEnrollment($schedule, $student_id, $is_permanent);

            $weeknames = $this->scheduleDates($dateRange->start, $dateRange->end, $schedule['weekday_id']);
            foreach($weeknames AS $week) {
                $this->storeAttendance($week, "2021-01-01", $data->id);
            }
                $this->scheduleDecrement($schedule_id);
        }
    }

    public function checkoutOnline(Request $request) {
        $user = new UserController();
        $payment = collect($request->payment);
        $telr = $payment->firstWhere('payment', 'Telr');

        $items = array();
        $browser = $request->header('User-Agent');
        $ip = $_SERVER['REMOTE_ADDR'];
        $status = 'Pending';

        $sale = null;
        $link = null;

        if($request->isCredit) {
            $credits = $user->findUserMeta($request->mom['id'], 'credits');
            $credits->decrement('meta_value', $request->credit);
        }

        if($this->getCollection($request->item)->count() > 0) {
            $sales = $this->getCollection($request->item)->first();
            $sale = $this->updateSale($sales->sale_id, $request->total, $request->mom, $status);
            $this->deleteSaleItem($sale->id);
            foreach($request->item AS $value) {
            
                $value['item']['status'] = $status;
                $item = $this->updateCart($value, $request->mom, $status, $browser, $ip);
                $this->createSaleItem($sale->id, $value['id'], $value['item']['quantity'], $value['item']['total_price_excl'], $value['item']['total_tax'], $value['item']['discount'], $value['item']['total_price']);
    
                if($item['status'] == 'Completed') {
                    $this->deduction($value);
                }
    
                array_push($items, $item);
            }
            if($request->total['total'] > 0) {
                $link = $this->telr($sale->id, 
                $telr['value'], 
                $request->mom['fullName'],
                $request->mom['firstName'],
                $request->mom['familyName'],
                $request->address['address_1'],
                null,
                $request->address['city'],
                $request->address['area'],
                $request->address['zip'],
                $request->address['country'],
                $request->mom['emailAddress']);
            }

            $metas = array(
                'payment' => $request->payment,
                'items' => $items,
                'total' => $request->total,
                'address' => $request->address,
                'notes' => $request->notes,
                'link' => $link,
                "isCredit" => $request->isCredit,
                "credit" => $request->credit,
                "processBy" => $user->getMomMeta(auth()->user()->id)
            );
            
            foreach($metas AS $key => $item) {
                $this->updateItem($sale->id, $item, $key);
            }
        } else {
            
            $sale = $this->createSale($request->total, $request->mom, $status);
            
            foreach($request->item AS $value) {

                $value['item']['status'] = $status;
                
                $item = $this->updateCart($value, $request->mom, $status, $browser, $ip);
    
                $this->createSaleItem($sale->id, $value['id'], $value['item']['quantity'], $value['item']['total_price_excl'], $value['item']['total_tax'], $value['item']['discount'], $value['item']['total_price']);
    
                array_push($items, $item);
            }
            if($request->total['total'] > 0) {
                $link = $this->telr($sale->id, 
                $telr['value'], 
                $request->mom['fullName'],
                $request->mom['firstName'],
                $request->mom['familyName'],
                $request->address['address_1'],
                null,
                $request->address['city'],
                $request->address['area'],
                $request->address['zip'],
                $request->address['country'],
                $request->mom['emailAddress']);
            }

            $this->createSaleMeta($sale->id, $request->mom, $request->payment, $items, $request->total, $request->address, $request->notes, $link, $user->getMomMeta(auth()->user()->id), $request->isCredit, $request->credit);
        }

            if($request->address) {
                $address = new AddressController();
                $address->store($request->address['id'],
                $request->address['user_id'],
                $request->address['street'],
                $request->address['building'],
                $request->address['city'],
                $request->address['area'],
                $request->address['country'],
                $request->address['zip']);
            } 
           
            return [
                "carts" => $this->getCart(true, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], auth('api')->user()->id), 
                "pos" => $this->getCart(true, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], auth('api')->user()->id, false), 
                "wishlist" => $this->getCart(false, $request->header('User-Agent'), $_SERVER['REMOTE_ADDR'], auth('api')->user()->id),
                "telr" => $link,
                "transactionNumber" => $sale->id
            ];

    }

    public function checkoutPOSUpdate(Request $request) {
        // return $request->all();
        $user = new UserController();
        $form = new FormController();
        $payment = collect($request->payment);
        $telr = $payment->firstWhere('payment', 'Telr');

        $items = array();
        $browser = $request->header('User-Agent');
        $ip = $_SERVER['REMOTE_ADDR'];

        $status = !$request->link ? 'Completed': 'Pending';
    
        $sale = $this->updateSale($request->id, $request->total, $request->mom, $status);
        $this->deleteSaleItem($sale->id);
        foreach($request->item AS $value) {
            
            $value['item']['status'] = $status;
            $item = $this->updateCart($value, $request->mom, $status, $browser, $ip);
            $this->createSaleItem($sale->id, $value['id'], $value['item']['quantity'], $value['item']['total_price_excl'], $value['item']['total_tax'], $value['item']['discount'], $value['item']['total_price']);

            if($item['status'] == 'Completed') {
                $this->deduction($value);
            }

            array_push($items, $item);
        }
        
        $link = null;

        if($request->total['total'] > 0) {
            if($request->link) {
                $link = $this->telr($sale->id, $telr['value'], $request->mom['fullName']);
            }
        }

        $metas = array(
            'payment' => $request->payment,
            'items' => $items,
            'total' => $request->total,
            'address' => $request->address,
            'notes' => $request->notes,
            'link' => $link,
            "isCredit" => $request->isCredit,
            "credit" => $request->credit,
            "processBy" => $user->getMomMeta(auth()->user()->id)
        );
        
        foreach($metas AS $key => $item) {
            $this->updateItem($sale->id, $item, $key);
        }

        if($status == 'Completed') {
            event(new eventInvoice($request->mom, $items, $request->total, $sale->id, '', $form->active()));
        }
        
        return $this->saleByIdQuery($sale->id);
    }

    private function checkIfPaymentTelr($payment) {
        return array_search("Telr", array_column($payment, 'payment'));
    }

    private function getCollection($items) {
        $cart_ids = collect($items);
        return $this->getSaleItems($cart_ids->pluck('id'));
    }

    public function updateCart($item, $user, $status, $browser, $ip) {
        $data = Cart::find($item['id']);
        $data->user_id = $user['id'];
        $data->browser = $browser;
        $data->ip = $ip;
        $data->item = $item['item'];
        $data->status = $status;
        $data->save();

        return $data;
    }

    private function createSale($total, $user, $status) {
        $data = new Sale();
        $data->user_id = $user['id'];
        $data->total = $total['total'];
        $data->status = $status;
        $data->save();

        return $data;
    }

    public function updateSale($id, $total, $user, $status) {
        return $this->amendSales($id, $total['total'], $user['id'], $status);
    }

    private function amendSales($id, $total, $user, $status) {
        $data = Sale::find($id);
        $data->user_id = $user;
        $data->total = $total;
        $data->status = $status;
        $data->save();

        return $data;
    }

    public function createSaleItem($sale_id, $cart_id, $quantity, $taxable, $tax, $discount, $total) {
        $data = new Sale_item();
        $data->sale_id = $sale_id;
        $data->cart_id = $cart_id;
        $data->quantity = $quantity;
        $data->taxable = $taxable;
        $data->tax = $tax;
        $data->discount = $discount;
        $data->total = $total;
        $data->save();
    }

    public function deleteSaleItem($sale_id) {
        Sale_item::where('sale_id', $sale_id)->delete();
    }

    private function createSaleMeta($sale_id, $customer, $payment, $items, $total, $address, $notes, $link, $processBy, $isCredit, $credit) {
        $items = array(
            "customer" => $customer,
            "payment" => $payment,
            "items" => $items,
            "total" => $total,
            "address" => $address,
            "notes" => $notes,
            "link" => $link,
            "isCredit" => $isCredit,
            "credit" => $credit,
            "processBy" => $processBy
        );

        foreach($items AS $key => $value) {
            $data = new Sale_meta();
            $data->sale_id = $sale_id;
            $data->meta_key = $key;
            $data->meta_value = $value;
            $data->save();
        }
    }

    private function telr(
        $orderId,
        $total,
        $description,
        $firstName = null,
        $familyName = null,
        $address_1 = null,
        $address_2 = null,
        $city = null,
        $region = null,
        $zip = null,
        $country = null,
        $email = null
    ) {
        $telrManager = new \TelrGateway\TelrManager();

        $billingParams = [
                'first_name' => $firstName,
                'sur_name' => $familyName,
                'address_1' => $address_1,
                'address_2' => $address_2,
                'city' => $city,
                'region' => $region,
                'zip' => $zip,
                'country' => $country,
                'email' => $email
            ];

        return $telrManager->pay($orderId, $total, "transaction#: $orderId; name: $description", $billingParams);
    }
}
