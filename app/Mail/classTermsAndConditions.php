<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class classTermsAndConditions extends Mailable
{
    use Queueable, SerializesModels;
    public $student, $mom, $date;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($student, $mom, $date)
    {
        $this->student = $student;
        $this->mom = $mom;
        $this->date = $date;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("Class Terms & Conditions - {$this->student['firstName']} {$this->student['familyName']}")
            ->view("emails.classTermsAndConditions");
    }
}
