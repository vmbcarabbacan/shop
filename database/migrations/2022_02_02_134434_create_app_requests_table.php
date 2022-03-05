<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('app_requests', function (Blueprint $table) {
            $table->id();
            $table->enum('type', ['complete transaction', 'cancelled transaction', 'refund transaction', 'change payment option', 'add quantity', 'deduct quantity', 'amend price']);
            $table->bigInteger('unique_id');
            $table->text('item');
            $table->text('comment')->nullable();
            $table->unsignedBigInteger('requestedBy');
            $table->foreign('requestedBy')->references('id')->on('users')->constrained();
            $table->unsignedBigInteger('approvedBy')->nullable();
            $table->enum('status', ['Pending', 'Completed', 'Cancelled']);
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('app_requests');
    }
}
