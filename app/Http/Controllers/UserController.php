<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function profile(){

        return Inertia::render('UserProfile/profile');

    }
      public function index()
    {
        $Users = User::all();
        return Inertia::render('Admin/User/AllUser', [
            'users' => $Users
        ]);
    }
    public function create()
    {
        return Inertia::render('Admin/User/CreateUser');
    }
    public function store(UserRequest $request)
    {
        // dd($request->all());
        User::create([
            'name'  => $request->name,
            'email'  => $request->email,
            'phone'  => $request->phone,
            'address'  => $request->address,
            'city' => $request->city,
            'password' => $request->password,

        ]);
        // $reminning = $customer->calculatePrice($request->fee);

        return redirect()->route('users');
    }
    public function destroy($id)
    {
        $User = User::findOrFail($id);

        // حذف محصول
        $User->delete();

        // ریدایرکت به صفحه لیست محصولات با پیام موفقیت
        return redirect()->route('users')->with('success', 'محصول با موفقیت حذف شد.');
    }
    public function edit($id)
    {
        $User = User::findOrFail($id);

        return Inertia::render('Admin/User/EditUser', [
            'users' => $User
        ]);
    }
    public function update(User $User, UserRequest $request)
    {
        $User->update([
            'name'  => $request->name,
            'slug'  => $request->slug,
            'description'  => $request->description,
            'brand'  => $request->brand,
            'quantity' => $request->quantity,
            'price' => $request->price,

        ]);
        return redirect()->route('User');
    }
    public function show($id)
    {
        $User = User::findOrFail($id);

        return Inertia::render('Admin/User/ShowUser', [
            'User' => $User,
        ]);
    }
}
