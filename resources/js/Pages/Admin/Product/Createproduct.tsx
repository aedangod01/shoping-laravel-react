import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Createproduct() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        slug: '',
        description: '',
        quantity: '',
        price: '',
        rate: '',
        brand: '',
        product_code: ''
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('product.store'));
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    ایجاد محصول جدید
                </h2>
            }
        >
            <Head title="ایجاد محصول" />

            <div className="w-full flex justify-center px-24 sm:px-6 lg:px-96 py-6">
                <div className="flex flex-col items-center justify-center min-h-screen py-4 sm:py-8 dark:text-white w-full max-w-7xl">
                    <h1 className="font-bold text-xl sm:text-2xl mb-6 sm:mb-8 text-center">اضافه کردن محصول</h1>

                    <form className="flex flex-col bg-stone-900 
                    rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mx-auto w-full max-w-2xl lg:max-w-4xl" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {/* نام محصول */}
                            <div className="flex flex-col">
                                <label className="font-semibold text-xs sm:text-sm text-gray-300 mb-2">
                                    نام محصول
                                </label>
                                <input
                                    className="flex items-center h-10 sm:h-12 px-3 sm:px-4 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 w-full text-sm sm:text-base"
                                    type="text" value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                />
                                {errors.name && (
                                    <div className="text-red-500 text-xs mt-1">{errors.name}</div>
                                )}
                            </div>

                            {/* اسلاگ */}
                            <div className="flex flex-col">
                                <label className="font-semibold text-xs sm:text-sm text-gray-300 mb-2">
                                    اسلاگ
                                </label>
                                <input
                                    className="flex items-center h-10 sm:h-12 px-3 sm:px-4 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 w-full text-sm sm:text-base"
                                    type="text"
                                    value={data.slug}
                                    onChange={e => setData('slug', e.target.value)}
                                />
                                {errors.slug && (
                                    <div className="text-red-500 text-xs mt-1">{errors.slug}</div>
                                )}
                            </div>

                            {/* توضیحات */}
                            <div className="flex flex-col md:col-span-2">
                                <label className="font-semibold text-xs sm:text-sm text-gray-300 mb-2">
                                    توضیحات
                                </label>
                                <textarea
                                    className="flex items-center h-20 sm:h-24 px-3 sm:px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 resize-none w-full text-sm sm:text-base"
                                    rows="3" value={data.description}
                                    onChange={e => setData('description', e.target.value)}
                                />
                                {errors.description && (
                                    <div className="text-red-500 text-xs mt-1">{errors.description}</div>
                                )}
                            </div>

                            {/* موجودی */}
                            <div className="flex flex-col">
                                <label className="font-semibold text-xs sm:text-sm text-gray-300 mb-2">
                                    موجودی
                                </label>
                                <input
                                    className="flex items-center h-10 sm:h-12 px-3 sm:px-4 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 w-full text-sm sm:text-base"
                                    type="number" value={data.quantity}
                                    onChange={e => setData('quantity', e.target.value)}

                                />
                                {errors.quantity && (
                                    <div className="text-red-500 text-xs mt-1">{errors.quantity}</div>
                                )}
                            </div>

                            {/* قیمت */}
                            <div className="flex flex-col">
                                <label className="font-semibold text-xs sm:text-sm text-gray-300 mb-2">
                                    قیمت
                                </label>
                                <input
                                    className="flex items-center h-10 sm:h-12 px-3 sm:px-4 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 w-full text-sm sm:text-base"
                                    type="number" value={data.price}
                                    onChange={e => setData('price', e.target.value)}
                                />
                                {errors.price && (
                                    <div className="text-red-500 text-xs mt-1">{errors.price}</div>
                                )}
                            </div>

                            {/* ریت */}
                            <div className="flex flex-col">
                                <label className="font-semibold text-xs sm:text-sm text-gray-300 mb-2">
                                    ریت
                                </label>
                                <input
                                    className="flex items-center h-10 sm:h-12 px-3 sm:px-4 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 w-full text-sm sm:text-base"
                                    type="number"
                                    step="0.1"
                                    value={data.rate}
                                    onChange={e => setData('rate', e.target.value)}
                                />
                                {errors.rate && (
                                    <div className="text-red-500 text-xs mt-1">{errors.rate}</div>
                                )}
                            </div>

                            {/* برند */}
                            <div className="flex flex-col">
                                <label className="font-semibold text-xs sm:text-sm text-gray-300 mb-2">
                                    برند
                                </label>
                                <input
                                    className="flex items-center h-10 sm:h-12 px-3 sm:px-4 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 w-full text-sm sm:text-base"
                                    type="text"
                                    value={data.brand}
                                    onChange={e => setData('brand', e.target.value)}
                                />
                                {errors.brand && (
                                    <div className="text-red-500 text-xs mt-1">{errors.brand}</div>
                                )}
                            </div>


                            {/* کد محصول */}
                            <div className="flex flex-col md:col-span-2">
                                <label className="font-semibold text-xs sm:text-sm text-gray-300 mb-2">
                                    کد محصول
                                </label>
                                <input
                                    className="flex items-center h-10 sm:h-12 px-3 sm:px-4 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 w-full text-sm sm:text-base"
                                    type="text"
                                    value={data.product_code}
                                    onChange={e => setData('product_code', e.target.value)}
                                />
                                {errors.product_code && (
                                    <div className="text-red-500 text-xs mt-1">{errors.product_code}</div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col items-center mt-6 sm:mt-8">
                            <button
                                type="submit"
                                className="flex items-center justify-center h-10 sm:h-12 px-4 sm:px-6 w-full sm:w-64 bg-yellow-400 rounded font-semibold text-sm text-yellow-100 hover:bg-yellow-500 transition-colors text-sm sm:text-base"
                            >
                                ایجاد محصول
                            </button>

                            <div className="flex mt-4 sm:mt-6 justify-center text-xs">
                                <a
                                    className="text-yellow-400 hover:text-yellow-500 transition-colors"
                                    href="#"
                                >
                                    بازگشت به صفحه قبلی
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}