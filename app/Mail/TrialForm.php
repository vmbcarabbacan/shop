<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TrialForm extends Mailable
{
    use Queueable, SerializesModels;
    public $student, $mom, $dad;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($student, $mom, $dad)
    {
        $this->student = $student;
        $this->mom = $mom;
        $this->dad = $dad;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("Trial Form - {$this->student['firstName']} {$this->student['familyName']}")
            ->view("emails.trialForm");
    }
}
