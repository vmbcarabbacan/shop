<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Form extends Mailable
{
    use Queueable, SerializesModels;
    public $student, $mom, $date, $form;
    /**
     * Create a new message instance.
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

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("{$this->form['name']} - {$this->student['firstName']} {$this->student['familyName']}")
            ->view("emails.form");
    }
}
 