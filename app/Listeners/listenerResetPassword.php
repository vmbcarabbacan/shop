<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Mail\ResetPassword;

class listenerResetPassword implements ShouldQueue
{

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        \Mail::to($event->emailAddress)
            ->send(new ResetPassword($event->name, 
                                        $event->id, 
                                        $event->code));
    }
}
