<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User_import extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'firstName',
        'familyName',
        'email',
        'mobileNumber',
        'childFirstName',
        'childFamilyName',
        'Gender',
        'DateOfBirth'
    ];
}
