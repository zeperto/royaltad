<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class products extends Model{
    use HasFactory;

    protected $fillable = ['productNameEnglish', 'amount'];

    protected $table = 'products';
    public $timestamps = false;
    protected $primaryKey = 'id';

}
