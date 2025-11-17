<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index(){
        $carts = CartItem::all();
        return Inertia::render('Cart/Cart', [
            'carts' => $carts ,
            'summary' => [
            'total' => $carts->sum('total'),
        ],
        ]);
    }
    public function add(Request $request){
            CartItem::create([
            'product_id' => $request->product_id,
            'quantity' => $request->quantity,
            'unit_price' => $request->price,

        ]);
        // $reminning = $customer->calculatePrice($request->fee);

        return redirect()->route('product');
    }
}
