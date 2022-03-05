<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class App_setup extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $casts = [
        'meta_value' => 'array',
    ];
}
