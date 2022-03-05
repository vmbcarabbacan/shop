<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\CheckoutController;
use App\Events\eventTransactionStatus;
use App\Http\Controllers\Controller;
use App\Events\eventInvoice;
use Illuminate\Http\Request;
use TelrGateway\Transaction;
use App\Traits\Sales;
use App\Traits\Pos;

class SaleController extends Controller
{
    use Sales, Pos;

    public function sales(Request $request) {
        $data = $this->saleQuery()
        ->where($this->filterTypeWhere($request->type), "LIKE", "%".$request->search."%");
        if($request->type == 'User ID') {
            $data->whereIn('sales.status', ['Completed', 'Pending', 'Cancelled', 'Refund']);
        }
        return $data->paginate($request->perPage);
    }

    public function filterTypeWhere($type) {
        switch ($type) {
            case 'Sale ID': return 'sales.id'; break;
            case 'User ID': return 'sales.user_id'; break;
            default: return 'fullName.meta_value'; break;
        }
    }

    public function searchSaleById($id) {
        return $this->saleByIdQuery($id);
    }

    public function saleUpdateTransaction(Request $request) {
        $browser = $request->header('User-Agent');
        $ip = $_SERVER['REMOTE_ADDR'];
        $this->updateSales($request->id, $request->status, null, $browser, $ip); 
    }

    public function updateSaleTransactionOnline(Request $request) {
        $browser = $request->header('User-Agent');
        $ip = $_SERVER['REMOTE_ADDR'];
        return $this->updateSales($request->transactionNumber, $request->status, null, $browser, $ip); 
    }

    public function updateSaleTransactionTelr(Request $request) {
        $transaction = Transaction::find($request->cart_id);
            if($request->status == 'Completed') {
                $transaction->approved = true;
            } else {
                $transaction->approved = false;
            }
            $browser = $request->header('User-Agent');
            $ip = $_SERVER['REMOTE_ADDR'];
            return $this->updateSales($transaction->order_id, $request->status, null, $browser, $ip); 
        
    }

    public function updateSales($saleId, $status, $notes, $browser, $ip) {
        $items = $this->saleByIdQuery($saleId);
        
        $checkout = new CheckoutController();

        $products = array();
    
        $sale = $checkout->updateSale($items['id'], $items['total'], $items['mom'], $status);
        $checkout->deleteSaleItem($sale->id);
        foreach($items['item'] AS $value) {

            $value['item']['status'] = $status;
            $item = $checkout->updateCart($value, $items['mom'], $status, $browser, $ip);
            $checkout->createSaleItem($sale->id, $value['id'], $value['item']['quantity'], $value['item']['total_price_excl'], $value['item']['total_tax'], $value['item']['discount'], $value['item']['total_price']);

            if($item['status'] == 'Completed') {
                $checkout->deduction($value);
            } else {
                $checkout->increment($value);
            }

            array_push($products, $item);
        }
        

        $metas = array(
            'payment' => $items['payment'],
            'items' => $products,
            'total' => $items['total'],
            'address' => $items['address'],
            'notes' => $notes,
            'link' => $items['link']
        );
        
        foreach($metas AS $key => $item) {
            $this->updateItem($sale->id, $item, $key);
        }

        if($status == 'Completed') {
            event(new eventInvoice($items['mom'], $products, $items['total'], $sale->id, ''));
        } else {
            $accounts = $this->getUsersByArray(['Accounts']);
            foreach($accounts AS $value) {
                event(new eventTransactionStatus($value['email'], $sale->id, $status));
            }
        }

        return $items;
    }
}
