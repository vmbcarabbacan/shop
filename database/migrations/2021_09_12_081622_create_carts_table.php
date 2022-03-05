<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->integer("user_id")->default(0);
            $table->string("browser");
            $table->string("ip");
            $table->string("status")->comment("completed, cancelled, refunded");
            $table->string("type");
            $table->boolean("isCart")->default(true);
            $table->boolean("isWeb")->default(true);
            $table->unsignedBigInteger('productId');
            $table->foreign('productId')->references('id')->on('products')->constrained();
            $table->text("item");
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations. 
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carts');
    }
}
