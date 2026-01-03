<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactusController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PaymentController;
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


    Route::get('admin/products', [ProductController::class, 'index'])->name('product');
    Route::get('admin/products/create', [ProductController::class, 'create'])->name('product.create');
    Route::post('admin/products/store', [ProductController::class, 'store'])->name('product.store');
    Route::delete('admin/product/delete/{id}',  [ProductController::class, 'destroy'])->name('product.destroy');
    Route::get('admin/product/edit/{id}',  [ProductController::class, 'edit'])->name('product.edit');
    Route::post('admin/product/edit/{product}',  [ProductController::class, 'update'])->name('product.update');


    Route::get('admin/users', [UserController::class, 'index'])->name('users');
    Route::get('admin/users/create', [UserController::class, 'create'])->name('user.create');
    Route::post('admin/users/store', [UserController::class, 'store'])->name('user.store');
    Route::delete('admin/users/delete/{id}',  [UserController::class, 'destroy'])->name('user.destroy');
    Route::get('admin/users/edit/{id}',  [UserController::class, 'edit'])->name('user.edit');
    Route::post('admin/product/edit/{product}',  [ProductController::class, 'update'])->name('product.update');
    Route::get('product/search', [ProductController::class, 'search'])->name('products.search');


    Route::get('admin/category', [CategoryController::class, 'index'])->name('category');
    Route::get('admin/category/create', [CategoryController::class, 'create'])->name('category.create');
    Route::post('admin/category/store', [CategoryController::class, 'store'])->name('category.store');
    Route::delete('admin/category/delete/{id}',  [CategoryController::class, 'destroy'])->name('category.destroy');
    Route::get('admin/category/edit/{id}',  [CategoryController::class, 'edit'])->name('category.edit');
    Route::post('admin/category/edit/{category}',  [CategoryController::class, 'update'])->name('category.update');

    Route::get('admin/orders', [OrderController::class, 'index'])->name('order');
    Route::get('admin/order/create', [OrderController::class, 'create'])->name('order.create');
    // Route::post('admin/category/store', [CategoryController::class, 'store'])->name('category.store');
    Route::delete('admin/order/delete/{id}',  [OrderController::class, 'destroy'])->name('order.destroy');
    Route::get('admin/order/edit/{id}',  [OrderController::class, 'edit'])->name('order.edit');
    Route::post('admin/order/edit/{payment}',  [OrderController::class, 'update'])->name('order.update');


    Route::get('checkout/cart', [CartController::class, 'index'])->name('checkout/cart');
    Route::post('cart/add', [CartController::class, 'add'])->name('cart/add');
    Route::delete('cart/delete/{id}', [CartController::class, 'destroy'])->name('cart.delete');

    Route::get('admin/message', [ContactusController::class, 'message'])->name('message');
    Route::delete('admin/message/{id}',  [ContactusController::class, 'destroy'])->name('message.destroy');


    Route::get('user-profile', [UserController::class, 'profile'])->name('user-profile');


    Route::get('/pay', [PaymentController::class, 'index'])->name('payment');
    Route::post('/pay', [PaymentController::class, 'store'])->name('payments.store');
});

Route::get('/about-us', function () {
    return Inertia::render('AboutUs');
})->name('about-us');
Route::get('contact-us', [ContactusController::class, 'index'])->name('contact-us');
Route::post('contact-us', [ContactusController::class, 'store'])->name('contactUs.store');

Route::get('products', [ProductController::class, 'all'])->name('product.all');
// Route::get('/products/filter', [ProductController::class, 'filter'])->name('products.filter');
Route::get('product/filter', [ProductController::class, 'filter'])->name('product.filter');
Route::get('/products/search', [ProductController::class, 'search'])->name('products.search');


// Route::get('/' , action: [HomeController::class, 'index'])->name('home');
require __DIR__ . '/auth.php';
