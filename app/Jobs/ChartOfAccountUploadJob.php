<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\Chart_of_account;

class ChartOfAccountUploadJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $xero;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($xero)
    {
        $this->xero = $xero;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $exist = Chart_of_account::where('code', $this->xero[0])->first();
        if(!$exist) {
            $data = new Chart_of_account();
            $data->code = $this->xero[0];
            $data->name = $this->xero[1];
            $data->type = $this->xero[2];
            $data->description = $this->xero[4];
            $data->save();
        } else {
            $exist->name = $this->xero[1];
            $exist->type = $this->xero[2];
            $exist->description = $this->xero[4];
            $exist->save();
        }
    }
}
