<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class productsModel extends Model{

    use HasFactory;

    protected $fillable = [
        
        'productNamePersian',
        'productNameEnglish',
        'persianDescription',
        'englishDescription',
        'amount',
        'weight',
        'dimension'
        
    ];

    protected $table = 'products';
    protected $primaryKey = 'id';
    public $timestamps = false;

}