<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index()
    {
        $carts = CartItem::all();
        return Inertia::render('Cart/Cart', [
            'carts' => $carts,
            'summary' => [
                'total' => $carts->sum('total'),
            ],
        ]);
    }
    public function add(Request $request)
    {
        $cart = Cart::firstOrCreate([
            'user_id' => auth()->id()
        ]);
        CartItem::create([
            'product_id' => $request->product_id,
            'quantity' => $request->quantity,
            'unit_price' => $request->price,
            'cart_id' => $cart->id
        ]);
        // $reminning = $customer->calculatePrice($request->fee);

        return redirect()->route('product');
    }
    public function destroy($id)
    {
        $cart = CartItem::findOrFail($id);

        $cart->delete();
        return redirect()->route('checkout/cart')->with('success', 'محصول با موفقیت حذف شد.');
    }
}
