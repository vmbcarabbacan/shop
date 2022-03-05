<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Mail\Request;

class listenerRequest implements ShouldQueue
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
            ->send(new Request($event->type, $event->name));
    }
}
