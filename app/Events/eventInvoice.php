<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class eventInvoice
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $customer, $items, $total, $receipt, $terms, $forms;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($customer, $items, $total, $receipt, $terms, $forms)
    {
        $this->customer = $customer;
        $this->items = $items;
        $this->total = $total;
        $this->receipt = $receipt;
        $this->terms = $terms;
        $this->forms = $forms;
    }
}
