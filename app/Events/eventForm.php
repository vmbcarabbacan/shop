<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class eventForm
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $student, $mom, $date, $form;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($student, $mom, $date, $form)
    {
        $this->student = $student;
        $this->mom = $mom;
        $this->date = $date;
        $this->form = $form;
    }
}
