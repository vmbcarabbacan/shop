<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use App\Events\eventVerifyEmail;
use App\Listeners\listenerVerifyEmail;
use App\Events\eventAgreement;
use App\Listeners\listenerClassTermsAndConditions;
use App\Listeners\listenerRegistrationForm;
use App\Listeners\listenerWaiver;
use App\Events\eventAgreementTrial;
use App\Listeners\listenerTrialForm;
use App\Events\eventResetPassword;
use App\Listeners\listenerResetPassword;
use App\Events\eventInvoice;
use App\Listeners\listenerInvoice;
use App\Events\eventRequest;
use App\Listeners\listenerRequest;
use App\Events\eventTransactionStatus;
use App\Listeners\listenerTransactionStatus;
use App\Events\eventForm;
use App\Listeners\listenerForm;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        // Registered::class => [
        //     SendEmailVerificationNotification::class,
        // ],
        eventVerifyEmail::class => [
            listenerVerifyEmail::class,
        ],
        eventResetPassword::class => [
            listenerResetPassword::class,
        ],
        eventInvoice::class => [
            listenerInvoice::class,
        ],
        eventRequest::class => [
            listenerRequest::class,
        ],
        eventTransactionStatus::class => [
            listenerTransactionStatus::class,
        ],
        eventForm::class => [
            listenerForm::class,
        ],
        eventAgreement::class => [
            listenerRegistrationForm::class,
            // listenerClassTermsAndConditions::class,
            // listenerWaiver::class
        ],
        eventAgreementTrial::class => [
            listenerTrialForm::class,
            // listenerClassTermsAndConditions::class,
            // listenerWaiver::class
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
