<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Payment;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function index(Request $request)
    {
        $carts = $request->input('carts', []);
        $total = $request->input('total', 0);
        return Inertia::render('Payment/Payment', [
        'total' => $request->input('total', 0),
    ]);
    }
    public function store(Request $request)
    {
        $order_id = Cart::where('user_id', Auth::id())->first()->id;
        // dd($order_id);
       
         $payment = Payment::create([
            'method'  => $request->method,
            'amount'  => $request->amount,
            'status'  => 'pending',
            'user_id' => Auth::id(), 
            'order_id' => $order_id,
            

        ]);
    }
}
