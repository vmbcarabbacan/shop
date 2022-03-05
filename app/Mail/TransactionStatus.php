<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TransactionStatus extends Mailable
{
    use Queueable, SerializesModels;
    public $transactionNumber, $status;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($transactionNumber, $status)
    {
        $this->transactionNumber = $transactionNumber;
        $this->status = $status;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("{$this->status}: Transaction#{$this->transactionNumber}")
            ->view("emails.transactionStatus");
    }
}
 