<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->foreign('product_id')->references('id')->on('products')->constrained();
            $table->unsignedBigInteger('location_id');
            $table->foreign('location_id')->references('id')->on('locations')->constrained();
            $table->unsignedBigInteger('weekday_id');
            $table->foreign('weekday_id')->references('id')->on('weekdays')->constrained();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->constrained();
            $table->unsignedBigInteger('studio_id');
            $table->foreign('studio_id')->references('id')->on('studios')->constrained();
            $table->unsignedBigInteger('date_range_id');
            $table->foreign('date_range_id')->references('id')->on('date_ranges')->constrained();
            $table->string("time_start");
            $table->string("time_end");
            $table->decimal("price", 8, 2)->default(0.00); 
            $table->bigInteger("quantity")->default(0);
            $table->bigInteger("limit")->default(0);
            $table->string("duration");
            $table->boolean("isVisible")->default(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedules');
    }
}
