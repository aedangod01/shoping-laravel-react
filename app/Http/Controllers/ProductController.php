<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return Inertia::render('Admin/Product/Allproduct', [
            'products' => $products
        ]);
    }
    public function create()
    {
        return Inertia::render('Admin/Product/Createproduct');
    }
    public function store(ProductRequest $request)
    {

        Product::create([
            'name'  => $request->name,
            'slug'  => $request->slug,
            'description'  => $request->description,
            'brand'  => $request->brand,
            'quantity' => $request->quantity,
            'price' => $request->price,

        ]);
        // $reminning = $customer->calculatePrice($request->fee);

        return redirect()->route('product');
    }
    public function destroy($id)
    {
        $product = Product::findOrFail($id);

        // حذف محصول
        $product->delete();

        // ریدایرکت به صفحه لیست محصولات با پیام موفقیت
        return redirect()->route('product')->with('success', 'محصول با موفقیت حذف شد.');
    }
    public function edit($id)
    {
        $product = Product::findOrFail($id);

        return Inertia::render('Admin/Product/Editproduct', [
            'product' => $product
        ]);
    }
    public function update(Product $product, ProductRequest $request)
    {
        $product->update([
            'name'  => $request->name,
            'slug'  => $request->slug,
            'description'  => $request->description,
            'brand'  => $request->brand,
            'quantity' => $request->quantity,
            'price' => $request->price,

        ]);
        return redirect()->route('product');
    }
    public function show($id)
    {
        $product = Product::findOrFail($id);

        return Inertia::render('Admin/Product/ShowProduct', [
            'product' => $product,
        ]);
    } 
   
}
