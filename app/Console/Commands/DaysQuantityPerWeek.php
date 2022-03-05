<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Weekday;
use App\Traits\Setups;

class DaysQuantityPerWeek extends Command
{
    use Setups;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'quantity:day';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Subtract quantity of weekdays based on day id';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $is_start_term = $this->loadSetup('is_start_term');
        $day = date('l');

        if($is_start_term == "true") {
            $data = Weekday::where('name', $day);
            $data->decrement("value", 1);
        }
    }
}
