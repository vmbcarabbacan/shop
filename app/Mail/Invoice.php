<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Invoice extends Mailable
{
    use Queueable, SerializesModels;
    public $customer, $items, $total, $receipt, $terms;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($customer, $items, $total, $receipt, $terms)
    {
        $this->customer = $customer;
        $this->items = $items;
        $this->total = $total;
        $this->receipt = $receipt;
        $this->terms = $terms;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("Invoice")
            ->view("emails.invoice");
    }
}
