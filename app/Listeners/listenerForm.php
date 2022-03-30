<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Mail\Form;

class listenerForm implements ShouldQueue
{
    
    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        \Mail::to("info@stepup.ae")
            ->send(new Form($event->student, $event->mom, $event->date, $event->form));
    } 
}
