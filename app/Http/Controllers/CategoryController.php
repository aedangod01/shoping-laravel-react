<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('Admin/Category/AllCategory', [
            'categories' => $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Category/CreateCategory');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Category::create([
            'name'  => $request->name,
            'slug'  => $request->slug,

        ]);
        // $reminning = $customer->calculatePrice($request->fee);

        return redirect()->route('category');
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $category = Category::findOrFail($id);

        return Inertia::render('Admin/Category/EditCategory', [
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
         $category->update([
            'name'  => $request->name,
            'slug'  => $request->slug,
           

        ]);
        return redirect()->route('category');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $category = Category::findOrFail($id);

        $category->delete();
        return redirect()->route('category')->with('success', 'محصول با موفقیت حذف شد.');
    }
}
