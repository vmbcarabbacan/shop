<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale_meta extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $casts = [
        'meta_value' => 'array',
    ];
}
