<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\DatabaseBackUp::class,
        Commands\DaysQuantityPerWeek::class,
        Commands\PendingSalesToCancelled::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('sale:cancelled')
        ->timezone('Asia/Dubai')
        ->dailyAt('23:59');
        
        $schedule->command('quantity:day')
        ->timezone('Asia/Dubai')
        ->dailyAt('21:00');

        $schedule->command('database:backup')
        ->timezone('Asia/Dubai')
        ->dailyAt('21:00');
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
