<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
 protected $fillable = [
        'product_id',
        'unit_price',
        'quantity',
        'cart_id'
    ];

protected $appends = ['total'];
public function cart()
{
    return $this->belongsTo(Cart::class);
}

    public function getTotalAttribute()
    {
        return $this->quantity * $this->unit_price;
    }
}
