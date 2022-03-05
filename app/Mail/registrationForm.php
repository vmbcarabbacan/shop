<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class registrationForm extends Mailable
{
    use Queueable, SerializesModels;
    public $student, $mom, $dad, $location;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($student, $mom, $dad, $location)
    {
        $this->student = $student;
        $this->mom = $mom;
        $this->dad = $dad;
        $this->location = $location;
    }
 
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("Registration Form - {$this->student['firstName']} {$this->student['familyName']}")
            ->view("emails.registrationForm");
    }
}
