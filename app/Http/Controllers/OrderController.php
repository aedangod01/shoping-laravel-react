<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\Payment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Payment::with('user:id,name')
            ->latest()
            ->get()
            ->map(function ($order) {
                return [
                    'id' => $order->id,
                    'ref_id' => $order->ref_id,
                    'method' => $order->method,
                    'status' => $order->status,
                    'amount' => $order->amount,
                    'created_at' => $order->created_at->format('Y/m/d H:i'),
                    'user' => $order->user,
                ];
            });

        return Inertia::render('Admin/Orders/AllOrder', [
            'orders' => $orders,
        ]);
    }

    public function edit($id)
    {
        // $order = Payment::findOrFail($id);

        // return Inertia::render('Admin/Orders/EditOrder', [
        //     'order' => $order
        // ]);

        $order = Payment::with('user')->findOrFail($id); // یا Order
        return Inertia::render('Admin/Orders/EditOrder', [
            'order' => [
                'id' => $order->id,
                'ref_id' => $order->ref_id,
                'method' => $order->method,
                'status' => $order->status,
                'amount' => $order->amount,
                'user' => $order->user,
                'created_at' => $order->created_at->format('Y/m/d H:i'),
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Payment $payment)
    {
        $request->validate([
            'ref_id' => 'required|string|max:255',
            'method' => 'nullable|string|max:255',
            'status' => 'required|string|max:50',
            'amount' => 'required|numeric',
        ]);

        // آپدیت سفارش
        $payment->update([
            'ref_id' => $request->ref_id,
            'method' => $request->method,
            'status' => $request->status,
            'amount' => $request->amount
        ]);

        return redirect()->route('order')->with('success', 'سفارش با موفقیت ویرایش شد.');
    }
}
