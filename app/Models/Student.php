<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use App\Models\Student_meta;
use App\Models\User;

class Student extends Model
{
    use HasFactory, SoftDeletes;

    public $timestamps = false;

    public function magulang() {
        return $this->belongsTo(User::class);
    }

    public function meta() {
        return $this->hasMany(Student_meta::class);
    }

    /**
     * The attributes that should be mutated to dates.
     * 
     * @var array
     */
    protected $dates = [ 'deleted_at' ];
}
