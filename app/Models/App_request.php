<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class App_request extends Model
{
    use HasFactory;

    protected $casts = [
        'item' => 'array',
    ];
}
