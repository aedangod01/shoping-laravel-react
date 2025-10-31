<?php


return [
    'required' => 'فیلد :attribute الزامی است.',
    'integer' => 'فیلد :attribute باید عدد صحیح باشد.',
     'string' => 'فیلد :attribute باید از نوع رشته (متن) باشد.',
    'email' => 'فیلد :attribute باید یک آدرس ایمیل معتبر باشد.',
   
    'unique' => 'فیلد :attribute قبلاً استفاده شده است.',
    'in' => 'مقدار انتخاب شده برای فیلد :attribute معتبر نیست.',
    'nullable' => '',
    'max' => [
        'string' => 'فیلد :attribute نباید بیشتر از :max کاراکتر باشد.',
        'numeric' => 'فیلد :attribute نباید بیشتر از :max باشد.',
    ],
    
    'attributes' => [
        'name' => 'نام محصول',
        'slug' => 'اسلاگ',
        'description' => 'توضیحات',
        'price' => 'قیمت',
        'quantity' => 'موجودی',
        'rate' => 'رتبه',
        'brand' => 'برند',
        'product_code' => 'کد محصول',
        'phone' => 'شماره تلفن',
        'address' => 'آدرس',
        'city' => 'شهر',
        'gender' => 'جنسیت',
    ],
];
