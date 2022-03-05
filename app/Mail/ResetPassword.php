<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ResetPassword extends Mailable
{
    use Queueable, SerializesModels;
    public $name, $id, $code;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $id, $code)
    {
        $this->name = $name;
        $this->id = $id;
        $this->code = $code;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("Reset Password")
            ->view("emails.forgotPassword");
    }
}
