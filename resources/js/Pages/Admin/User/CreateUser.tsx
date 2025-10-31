import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function CreateUser() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        address: '',
        gender: '',
        city: '',
        password: '',
        repassword: ''
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('user.store'));
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    ایجاد کاربر جدید
                </h2>
            }
        >
            <Head title="ایجاد محصول" />

            <div className="w-full flex justify-center px-24 sm:px-6 lg:px-96 py-6">
                <div className="flex flex-col items-center justify-center min-h-screen py-4 sm:py-8 dark:text-white w-full max-w-7xl">
                    <h1 className="font-bold text-xl sm:text-2xl mb-6 sm:mb-8 text-center">اضافه کردن کاربر</h1>

                    <form className="flex flex-col bg-stone-900 
                    rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mx-auto w-full max-w-2xl lg:max-w-4xl" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="flex flex-col">
                                <label className="font-semibold text-xs sm:text-sm text-gray-300 mb-2">
                                    نام
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

                            <div className="flex flex-col">
                                <label className="font-semibold text-xs sm:text-sm text-gray-300 mb-2">
                                    ایمیل
                                </label>
                                <input
                                    className="flex items-center h-10 sm:h-12 px-3 sm:px-4 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 w-full text-sm sm:text-base"
                                    type="text"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                />
                                {errors.email && (
                                    <div className="text-red-500 text-xs mt-1">{errors.email}</div>
                                )}
                            </div>

                            {/* توضیحات */}
                            <div className="flex flex-col md:col-span-2">
                                <label className="font-semibold text-xs sm:text-sm text-gray-300 mb-2">
                                    آدرس
                                </label>
                                <textarea
                                    className="flex items-center h-20 sm:h-24 px-3 sm:px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 resize-none w-full text-sm sm:text-base"
                                    rows="3" value={data.address}
                                    onChange={e => setData('address', e.target.value)}
                                />
                                {errors.address && (
                                    <div className="text-red-500 text-xs mt-1">{errors.address}</div>
                                )}
                            </div>

                            {/* موجودی */}
                            <div className="flex flex-col">
                                <label className="font-semibold text-xs sm:text-sm text-gray-300 mb-2">
                                    شماره تلفن
                                </label>
                                <input
                                    className="flex items-center h-10 sm:h-12 px-3 sm:px-4 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 w-full text-sm sm:text-base"
                                    type="number" value={data.phone}
                                    onChange={e => setData('phone', e.target.value)}

                                />
                                {errors.phone && (
                                    <div className="text-red-500 text-xs mt-1">{errors.phone}</div>
                                )}
                            </div>

                            {/* قیمت */}
                            <div className="flex flex-col">
                                <label className="font-semibold text-xs sm:text-sm text-gray-300 mb-2">
                                    شهر
                                </label>
                                <input
                                    className="flex items-center h-10 sm:h-12 px-3 sm:px-4 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 w-full text-sm sm:text-base"
                                    type="text" value={data.city}
                                    onChange={e => setData('city', e.target.value)}
                                />
                                {errors.city && (
                                    <div className="text-red-500 text-xs mt-1">{errors.city}</div>
                                )}
                            </div>
                            <div className="flex flex-col md:col-span-2">
                                <label className="font-semibold text-xs sm:text-sm text-gray-300 mb-2">
                                    جنسیت
                                </label>

                                <select name="" className='flex items-center h-10 font-bold sm:h-12 px-3 sm:px-4 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 w-full text-sm sm:text-base' id="">
                                    <option className='font-bold' value="">مرد</option>
                                    <option className='font-bold' value="">زن</option>
                                    <option className='font-bold' value="">دیگری</option>
                                </select>
                                {errors.gender && (
                                    <div className="text-red-500 text-xs mt-1">{errors.gender}</div>
                                )}
                            </div>
                            {/* ریت */}
                            <div className="flex flex-col">
                                <label className="font-semibold text-xs sm:text-sm text-gray-300 mb-2">
                                    رمز عبور
                                </label>
                                <input
                                    className="flex items-center h-10 sm:h-12 px-3 sm:px-4 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 w-full text-sm sm:text-base"
                                    type="text"
                                    step="0.1"
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                />
                                {errors.password && (
                                    <div className="text-red-500 text-xs mt-1">{errors.password}</div>
                                )}
                            </div>

                            {/* برند */}
                            <div className="flex flex-col">
                                <label className="font-semibold text-xs sm:text-sm text-gray-300 mb-2">
                                    تکرار رمز عبور
                                </label>
                                <input
                                    className="flex items-center h-10 sm:h-12 px-3 sm:px-4 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 w-full text-sm sm:text-base"
                                    type="text"
                                    value={data.repassword}
                                    onChange={e => setData('repassword', e.target.value)}
                                />
                                {errors.repassword && (
                                    <div className="text-red-500 text-xs mt-1">{errors.repassword}</div>
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