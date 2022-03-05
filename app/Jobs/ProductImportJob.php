<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use App\Http\Controllers\Api\SanitizeController;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\Product_option;

class ProductImportJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $product;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($product)
    {
        $this->product = $product;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $sanitizer = new SanitizeController();
        $data = Product_option::find($this->product[0]);
        $data->name = $sanitizer->string($this->product[2]);
        $data->price = $this->product[3];
        $data->quantity = $this->product[4];
        $data->save();

        if($this->product[5] > 0) {
            $data->quantity = $this->product[5];
            $data->save();
        }

        if($this->product[6] > 0) {
            $data->increment('quantity', $this->product[6]);
        }

    }
}
