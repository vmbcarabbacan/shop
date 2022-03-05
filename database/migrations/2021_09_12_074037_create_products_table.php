<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("slug");
            $table->text("categoryIds")->nullable();
            $table->string("type", 10)->comment("uniforms, services, others");
            $table->boolean("isVisible")->default(true);
            $table->boolean("soos")->default(false)->comment("sell out of stock");
            $table->text("imageIds")->nullable();
            $table->text("relatedUniforms")->nullable();
            $table->text("relatedLessons")->nullable();
            $table->text("body")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
