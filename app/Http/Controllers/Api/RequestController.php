<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\SaleController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Events\eventRequest;
use App\Models\App_request;
use App\Traits\Setups;

class RequestController extends Controller
{
    use Setups;

    public function get(Request $request) {
        $data = App_request::where('status', $request->status)
            ->orderBy("updated_at", "DESC")
            // ->where($this->key($request->type), "LIKE", "%".$request->search."%")
            ->paginate($request->perPage);

        $data->getCollection()->transform(function ($data) {
            $user = new UserController();
            $data->requestedBy = $user->getMomMeta($data->requestedBy);
            $data->approvedBy = $user->getMomMeta($data->approvedBy);
            return $data;
        });

        return $data;
    }

    private function key($type) {
        switch($type) {
            case 'Type': return 'type'; break;
            case 'Full Name': return 'requestedBy'; break;
            default: break;
        }
    }

    public function save(Request $request) {
        
        switch($request->filter['type']) {
            case 'complete transaction':
                $item = $this->changeTransactionStatus($request->filter['transactionNumber'], 'Completed');
                $this->store($request->filter['type'], $request->filter['transactionNumber'], $item, $request->filter['comment'], auth()->user()->id, 'Pending');
            break;
            case 'cancelled transaction':
                $item = $this->changeTransactionStatus($request->filter['transactionNumber'], 'Cancelled');
                $this->store($request->filter['type'], $request->filter['transactionNumber'], $item, $request->filter['comment'], auth()->user()->id, 'Pending');
            break;
            case 'refund transaction':
                $item = $this->changeTransactionStatus($request->filter['transactionNumber'], 'Refund');
                $this->store($request->filter['type'], $request->filter['transactionNumber'], $item, $request->filter['comment'], auth()->user()->id, 'Pending');
                break;
            case 'change payment option':
                $item = $this->changeTransactionStatus($request->filter['transactionNumber']);
                $item['payments'] = $request->filter['pays'];
                $this->store($request->filter['type'], $request->filter['transactionNumber'], $item, $request->filter['comment'], auth()->user()->id, 'Pending');
            break;
            case 'amend price':
            case 'deduct quantity':
            case 'add quantity':
                $product = new ProductController();
                $prod = $product->getProductDetails($request->filter['option_id']);
                $prod['value'] = $request->filter['value'];
                $this->store($request->filter['type'], $request->filter['option_id'], $prod, $request->filter['comment'], auth()->user()->id, 'Pending');
            break;
            default:break;
        }

        $user = new UserController();
        $currentUser = $user->getMomMeta(auth()->user()->id);
        
        $emails = $this->findKey('emails');
        foreach($emails['meta_value'] AS $value) {
            event(new eventRequest($value,$request->filter['type'], $currentUser['fullName']));
        }

    }

    public function processTransaction(Request $request) {
        $browser = $request->header('User-Agent');
        $ip = $_SERVER['REMOTE_ADDR'];
        $sales = new SaleController();
        if($request->status == 'Completed'){
            $sales->updateSales($request->filter['unique_id'], $request->filter['item']['status'], $request->filter['type'] . ': ' . $request->filter['comment'], $browser, $ip);
        }
        $this->updateRequest($request->filter['id'], auth()->user()->id, $request->status);

    }

    public function processChangePaymentOption(Request $request) {
        $sales = new SaleController();
        if($request->status == 'Completed'){
            $sale = $sales->findMeta($request->filter['item']['id'], 'payment');
            $sale->meta_value = $request->filter['item']['payments'];
            $sale->save();
        }
        $this->updateRequest($request->filter['id'], auth()->user()->id, $request->status);
    }

    private function changeTransactionStatus($id, $status = null) {
        $sales = new SaleController();
        $transactions = $sales->saleByIdQuery($id);

        $products = array();
        foreach($transactions['item'] as $value) {
            if(!empty($status)) {
                $value['item']['status'] = $status;
            }
            array_push($products, $value);
        }
        if(!empty($status)) {
            $transactions['status'] = $status;
        }
        return $transactions;
    }

    public function processProductOption(Request $request) {
        $product = new ProductController();
        if($request->status == 'Completed'){
            if($request->filter['type'] == 'amend price') {
                $product->updateProductPrice($request->filter['item']['id'], $request->filter['item']['value']);
            } else {
                $product->updateProductQuantity($request->filter['item']['id'], $request->filter['item']['value'], $request->filter['type']);
            }
        }
        $this->updateRequest($request->filter['id'], auth()->user()->id, $request->status);
        
    }

    private function store($type, $uniqueId, $item, $comment, $requested, $status) {
        $data = new App_request();
        $data->type = $type;
        $data->unique_id = $uniqueId;
        $data->item = $item;
        $data->comment = $comment;
        $data->requestedBy = $requested;
        $data->status = $status;
        $data->save();
    }

    private function updateRequest($id, $approved, $status) {
        $data = App_request::find($id);
        $data->approvedBy = $approved;
        $data->status = $status;
        $data->save();
    }

    public function pendingRequest() {
        return App_request::where('status', 'Pending')->count();
    }
}
