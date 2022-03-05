<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserImportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_imports', function (Blueprint $table) {
            $table->id();
            $table->string('mFirstName');
            $table->string('mFamilyName');
            $table->string('mNationality');
            $table->string('mEmail');
            $table->string('mMobileNumber');
            $table->string('fFirstName');
            $table->string('fFamilyName');
            $table->string('fNationality');
            $table->string('fEmail');
            $table->string('fMobileNumber');
            $table->string('childFirstName');
            $table->string('childFamilyName');
            $table->string('childGender');
            $table->string('childNationality');
            $table->date('childDateOfBirth');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_imports');
    }
}
