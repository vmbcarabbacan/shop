<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Xero_import extends Model
{
    use HasFactory;

    protected $casts = [
        'details' => 'array',
    ];
}
