<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class eventAgreement
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $student, $mom, $dad, $location, $date;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($student, $mom, $dad, $location, $date)
    {
        $this->student = $student;
        $this->mom = $mom;
        $this->dad = $dad;
        $this->location = $location;
        $this->date = $date;
    }

}
