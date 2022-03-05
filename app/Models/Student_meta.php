<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Student;

class Student_meta extends Model
{
    use HasFactory;

    public $timestamps = false;

    public function student() {
        return $this->belongsTo(Student::class);
    }
}
