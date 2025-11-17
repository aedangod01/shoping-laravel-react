<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Application;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/products/{id}', [ProductController::class, 'show'])
    ->name('product.show');
    // Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::get('admin/products' ,[ProductController::class , 'index'] )->name('product');
    Route::get('admin/products/create' ,[ProductController::class , 'create'] )->name('product.create');
    Route::post('admin/products/store' ,[ProductController::class , 'store'] )->name('product.store');
    Route::delete('admin/product/delete/{id}' ,  [ProductController::class, 'destroy'])->name('product.destroy');
    Route::get('admin/product/edit/{id}' ,  [ProductController::class, 'edit'])->name('product.edit');
    Route::post('admin/product/edit/{product}' ,  [ProductController::class, 'update'])->name('product.update');


    Route::get('admin/users' ,[UserController::class , 'index'] )->name('users');
    Route::get('admin/users/create' ,[UserController::class , 'create'] )->name('user.create');
    Route::post('admin/users/store' ,[UserController::class , 'store'] )->name('user.store');
    Route::delete('admin/users/delete/{id}' ,  [UserController::class, 'destroy'])->name('user.destroy');
    Route::get('admin/users/edit/{id}' ,  [UserController::class, 'edit'])->name('user.edit');
    Route::post('admin/product/edit/{product}' ,  [ProductController::class, 'update'])->name('product.update');


    Route::get('admin/category' ,[CategoryController::class , 'index'] )->name('category');
    Route::get('admin/category/create' ,[CategoryController::class , 'create'] )->name('category.create');
    Route::post('admin/category/store' ,[CategoryController::class , 'store'] )->name('category.store');
    Route::delete('admin/category/delete/{id}' ,  [CategoryController::class, 'destroy'])->name('category.destroy');
    Route::get('admin/category/edit/{id}' ,  [CategoryController::class, 'edit'])->name('category.edit');
    Route::post('admin/category/edit/{category}' ,  [CategoryController::class, 'update'])->name('category.update');


    Route::get('checkout/cart', [CartController::class, 'index'])->name('checkout/cart');
    Route::post('cart/add', [CartController::class, 'add'])->name('cart/add');
});

// Route::get('/' , action: [HomeController::class, 'index'])->name('home');
require __DIR__.'/auth.php';
