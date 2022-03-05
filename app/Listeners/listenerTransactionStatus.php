<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Mail\TransactionStatus;

class listenerTransactionStatus implements ShouldQueue
{
    

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        \Mail::to($event->email)
            ->send(new TransactionStatus($event->transactionNumber, $event->status));
    }
}
