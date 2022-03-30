<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Mail\Invoice;

class listenerInvoice implements ShouldQueue
{

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        \Mail::to($event->customer['emailAddress'])
            ->send(new Invoice($event->customer, 
                                $event->items,
                                $event->total,
                                $event->receipt,
                                $event->terms,
                                $event->forms
                            ));
    }
}
