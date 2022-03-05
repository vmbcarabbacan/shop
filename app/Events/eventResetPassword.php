<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class eventResetPassword
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $name, $id, $code, $emailAddress;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($name, $id, $code, $emailAddress)
    {
        $this->name = $name;
        $this->id = $id;
        $this->code = $code;
        $this->emailAddress = $emailAddress;
    }

}
