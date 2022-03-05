<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class eventAgreementTrial
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $student, $mom, $dad, $date;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($student, $mom, $dad, $date)
    {
        $this->student = $student;
        $this->mom = $mom;
        $this->dad = $dad;
        $this->date = $date;
    }
}
