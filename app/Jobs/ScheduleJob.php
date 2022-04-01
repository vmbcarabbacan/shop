<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Traits\ScheduleList;

class ScheduleJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $items;

    use ScheduleList;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($items = [])
    {
        $this->items = $items;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        foreach($this->items AS $item) {

            $exist = $this->checkScheduleIfExist(
                $item['product_id'],
                $item['location_id'],
                $item['weekday_id'],
                $item['user_id'],
                $item['studio_id'],
                $item['date_range_id'],
                $item['time_start'],
                $item['time_end']
            );

            if(!$exist) {
                $this->storeSchedule(
                    $item['product_id'],
                    $item['location_id'],
                    $item['weekday_id'],
                    $item['user_id'],
                    $item['studio_id'],
                    $item['date_range_id'],
                    $item['time_start'],
                    $item['time_end'],
                    $item['price'],
                    $item['quantity'],
                    $item['limit'],
                    $item['duration'],
                    true
                );
            }

            $checkLocationExist = $this->checkDateRangeLocationIdExist($item['date_range_id'], $item['location_id']);

            if(!$checkLocationExist) {
                $this->storeSetup($item['date_range_id'], $item['location_id']);
            }
        }
    }
}
