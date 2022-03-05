<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $casts = [
        'categoryIds' => 'array',
        'imageIds' => 'array',
        'relatedUniforms' => 'array',
        'relatedLessons' => 'array',
    ];
}
