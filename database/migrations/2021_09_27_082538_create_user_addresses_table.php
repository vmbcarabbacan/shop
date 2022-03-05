<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_addresses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->constrained();
            $table->string('address_1')->nullable()->comment('street and building');
            $table->string('street')->nullable();
            $table->string('building')->nullable();
            $table->string('city')->comment('Dubai, Abu Dhabi, Umm Al Quwain, Al Ain, Fujairah, Ajman, Ras Al Khaimah');
            $table->string('area')->nullable();
            $table->string('country')->default('AE');
            $table->string('zip')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_addresses');
    }
}
