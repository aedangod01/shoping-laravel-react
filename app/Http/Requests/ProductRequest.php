<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // 'name' => 'required|string|max:255',
            // 'slug' => 'required|string|max:255',
            // 'description' => 'required|string',
            // 'price' => 'required|integer|min:0',
            // 'quantity' => 'required|integer|min:0',
            // 'image' => 'nullable|string|max:255',
            // 'discount' => 'nullable|integer|min:0|max:100',
            // 'view_count' => 'nullable|integer|min:0',
            // 'brand' => 'nullable|string|max:255',
            // 'sku' => 'nullable|string|unique:table_name,sku|max:255',  // به جای table_name نام جدول خودت رو بذار
            // 'rating' => 'nullable|in:1,2,3,4,5',
            'name'        => 'required|string|max:255',
            'slug'        => 'required|string|max:255|unique:products,slug',
            'description' => 'required|string',
            'price'       => 'required|integer|min:0',
            'quantity'    => 'required|integer|min:0',
            'image'       => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'discount'    => 'nullable|integer|min:0|max:100',
            'view_count'  => 'nullable|integer|min:0',
            'brand'       => 'nullable|string|max:255',
            'sku'         => 'nullable|string|max:255|unique:products,sku',
            'rating'      => 'nullable|in:1,2,3,4,5',
        ];
    }
}
