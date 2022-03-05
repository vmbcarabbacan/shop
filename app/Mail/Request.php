<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Request extends Mailable
{
    use Queueable, SerializesModels;
    public $type, $name;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($type, $name)
    {
        $this->type = $type;
        $this->name = $name;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("Request: {$this->type}")
            ->view("emails.Request");
    }
}
