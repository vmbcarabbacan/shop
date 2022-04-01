<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScheduleImportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedule_imports', function (Blueprint $table) {
            $table->id();
            $table->string('term');
            $table->string('location');
            $table->string('lesson');
            $table->string('teacher');
            $table->string('day');
            $table->string('studio');
            $table->string('time_start');
            $table->string('time_end');
            $table->string('limit');
            $table->string('price');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedule_imports');
    }
}
