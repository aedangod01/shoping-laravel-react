import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

type User = {
    id: number;
    name: string;
};

type Order = {
    id: number;
    ref_id: string;
    method?: string;
    status: string;
    amount: number;
    user?: User;
    created_at: string;
};

type Props = {
    order: Order;
};

export default function EditOrder({ order }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        ref_id: order.ref_id || '',
        method: order.method || '',
        status: order.status || '',
        amount: order.amount || '',
        user_name: order.user?.name || '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('order.update', order.id));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    ویرایش سفارش
                </h2>
            }
        >
            <Head title="ویرایش سفارش" />

            <div className="w-full flex justify-center px-4 py-6">
                <div className="flex flex-col items-center w-full max-w-4xl">
                    <h1 className="text-2xl font-bold mb-6 text-center text-white">
                        ویرایش سفارش
                    </h1>

                    <form
                        className="flex flex-col bg-stone-900 rounded-lg shadow-lg p-6 w-full"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* شماره سفارش */}
                            <div className="flex flex-col">
                                <label className="text-gray-300 font-semibold mb-2">
                                    شماره سفارش
                                </label>
                                <input
                                    type="text"
                                    className="px-3 py-2 rounded bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    value={data.ref_id}
                                    onChange={e => setData('ref_id', e.target.value)}
                                />
                                {errors.ref_id && <div className="text-red-500 text-xs mt-1">{errors.ref_id}</div>}
                            </div>

                            {/* نوع پرداخت */}
                            <div className="flex flex-col">
                                <label className="text-gray-300 font-semibold mb-2">
                                    نوع پرداخت
                                </label>
                                <input
                                    type="text"
                                    className="px-3 py-2 rounded bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    value={data.method}
                                    onChange={e => setData('method', e.target.value)}
                                />
                                {errors.method && <div className="text-red-500 text-xs mt-1">{errors.method}</div>}
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-300 font-semibold mb-2">
                                    وضعیت سفارش
                                </label>
                                <select
                                    className="px-3 py-2 rounded bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    value={data.status}
                                    onChange={e => setData('status', e.target.value)}
                                >
                                    <option value="pending">در انتظار</option>
                                    <option value="paid">پرداخت شده</option>
                                    <option value="failed">ناموفق</option>
                                    <option value="canceled">لغو شده</option>
                                </select>
                                {errors.status && <div className="text-red-500 text-xs mt-1">{errors.status}</div>}
                            </div>

                            {/* مبلغ */}
                            <div className="flex flex-col">
                                <label className="text-gray-300 font-semibold mb-2">
                                    مبلغ
                                </label>
                                <input
                                    type="number"
                                    className="px-3 py-2 rounded bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    value={data.amount}
                                    onChange={e => setData('amount', e.target.value)}
                                />
                                {errors.amount && <div className="text-red-500 text-xs mt-1">{errors.total}</div>}
                            </div>

                            {/* سفارش‌دهنده */}
                            <div className="flex flex-col md:col-span-2">
                                <label className="text-gray-300 font-semibold mb-2">
                                    سفارش‌دهنده
                                </label>
                                <input
                                    type="text"
                                    className="px-3 py-2 rounded bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    value={data.user_name}
                                    onChange={e => setData('user_name', e.target.value)}
                                    disabled
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center mt-6">
                            <button
                                type="submit"
                                className="w-full sm:w-64 px-4 py-2 bg-yellow-400 rounded font-semibold text-white hover:bg-yellow-500 transition-colors"
                                disabled={processing}
                            >
                                ذخیره تغییرات
                            </button>

                            <div className="mt-4 text-sm">
                                <a href="#" className="text-yellow-400 hover:text-yellow-500 transition-colors">
                                    بازگشت به صفحه قبلی
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
