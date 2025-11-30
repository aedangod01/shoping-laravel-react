<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{


    public function index()
    {
        $products = Product::with('images')->get();
        return Inertia::render('Admin/Product/Allproduct', [
            'products' => $products
        ]);
    }
    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Admin/Product/Createproduct', [
            'categories' => $categories
        ]);
    }
    public function store(ProductRequest $request)
    {

        $product = Product::create([
            'name'  => $request->name,
            'slug'  => $request->slug,
            'description'  => $request->description,
            'brand'  => $request->brand,
            'quantity' => $request->quantity,
            'price' => $request->price,
            'category_id' => $request->category_id,
            'rating' => $request->rate,
            'product_code' => $request->product_code

        ]);
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('products', 'public'); // ذخیره در storage/app/public/products
                $product->images()->create(['path' => $path]);
            }
        }
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
    public function search(Request $request)
    {
        $q = $request->query('q'); // گرفتن پارامتر ?q=
        // dd($q);
        if (!$q) {
            return response()->json([]);
        }

        $products = Product::where('name', 'like', "%{$q}%")
            ->take(10)
            ->get();

        return response()->json($products);
    }
}
