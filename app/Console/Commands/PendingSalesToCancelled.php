<?php

namespace App\Console\Commands;

use App\Http\Controllers\Api\CheckoutController;
use Illuminate\Console\Command;
use App\Traits\Sales;
use App\Models\Sale;


class PendingSalesToCancelled extends Command
{
    use Sales;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sale:cancelled';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Cancelled Pending Sales within every 23:59';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $data = Sale::where('status', 'Pending')->get();
        
        $datas = $data->transform(function ($data) {
            $payment = $this->getMeta($data->id, 'payment');

            $data->link = $this->getMeta($data->id, 'link');
            $data->item = $this->getMeta($data->id, 'items');
            $data->payment = $payment;
            $data->mom = $this->getMeta($data->id, 'customer');
            $data->total = $this->getMeta($data->id, 'total');
            $data->address = $this->getMeta($data->id, 'address');
            $data->pay = collect($payment)->pluck('payment');
            return $data;
        });

        $status = 'Cancelled';
        $browser = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36";
        $ip = "0A-00-27-00-00-05   \\Device\\Tcpip_{3FA6B837-A34F-4B94-816C-2A0EEB2B6BC2}";

        $checkout = new CheckoutController();
        $products = array();

        if($datas) {
            foreach($datas AS $pending) {
                $sale = $checkout->updateSale($pending['id'], $pending['total'], $pending['mom'], $status);
                $checkout->deleteSaleItem($sale->id);
    
                foreach($pending['item'] AS $value) {
                    $value['item']['status'] = $status;
                    $products[] = $checkout->updateCart($value, $pending['mom'], $status, $browser, $ip);
                    $checkout->createSaleItem($sale->id, $value['id'], $value['item']['quantity'], $value['item']['total_price_excl'], $value['item']['total_tax'], $value['item']['discount'], $value['item']['total_price']);
                }
    
                $metas = array(
                    'items' => $products,
                    'notes' => 'Auto cancel by the system every 23:59 everyday',
                );
    
                foreach($metas AS $key => $item) {
                    $this->updateItem($sale->id, $item, $key);
                }
            }
        }
        

    }
}
