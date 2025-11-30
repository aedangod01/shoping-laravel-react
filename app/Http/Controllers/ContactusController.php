<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\contactus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactusController extends Controller
{
    public function index()
    {
        return Inertia::render(
            'ContactWithUs',
        );
    }
    public function store(ContactRequest $request)
    {
        contactus::create([
            'name' => $request->name,
            'email' => $request->email,
            'text' => $request->text
        ]);
        return redirect()->route('contact-us');
    }
    public function message()
    {
        $contacts = contactus::all();
        return Inertia::render('Admin/Messages/AllMessage', [
            'contacts' => $contacts
        ]);
    }
      public function destroy($id)
    {
        $category = contactus::findOrFail($id);

        $category->delete();
        return redirect()->route('message')->with('success', 'محصول با موفقیت حذف شد.');
    }
}
