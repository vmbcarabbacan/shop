<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Mail\classTermsAndConditions;

class listenerClassTermsAndConditions implements ShouldQueue
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
            ->send(new classTermsAndConditions($event->student, $event->mom, $event->date));
    }
}
