<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'name',
        'description',
        'slug',
        'rating',
        'quantity',
        'price',
        'image',
        'updated_at',
        'category_id',
        'product_code',
        'brand'
    ];

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }
}
