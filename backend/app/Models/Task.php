<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends Model
{
    use HasFactory;

    protected $table = 'tasks';


    protected $fillable = [
        'title',
        'description',
        'status',
        'due_date'
    ];

    protected $attributes = [
        'status' => 'pending',
    ];
}
