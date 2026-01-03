<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Payment extends Model
{

    protected $fillable = ['amount' , 'method','status' ,'user_id' , 'order_id'];
    public static function generateTrackingCode(): string
    {
        do {
            $code = 'TRK-' . strtoupper(Str::random(10));
        } while (self::where('ref_id', $code)->exists());

        return $code;
    }

    protected static function booted()
    {
        static::creating(function ($payment) {
            $payment->ref_id = self::generateTrackingCode();
        });
    }
      public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
