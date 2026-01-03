import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, router } from '@inertiajs/react';
import NavLink from '@/Components/Core/NavLink';

/* =======================
   Types
======================= */

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
    created_at: string;
    user?: User;
};

type Props = {
    orders: Order[];
};

/* =======================
   Component
======================= */

export default function AllOrder({ orders }: Props) {
    const { delete: destroy } = useForm({});

    const deleteOrder = (id: number) => (e: React.MouseEvent) => {
        e.preventDefault();
        destroy(route('order.destroy', id), { preserveScroll: true });
    };

    const editOrder = (id: number) => (e: React.MouseEvent) => {
        e.preventDefault();
        router.visit(route('order.edit', id), { preserveScroll: true });
    };

    return (
        <AuthenticatedLayout>
            <Head title="سفارش‌ها" />

            <div className="w-full flex justify-center px-4 py-6">
                <div className="w-full max-w-6xl dark:bg-stone-900 p-4 rounded-xl shadow-md">

                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-white text-lg font-bold">
                            تمامی سفارش‌ها
                        </h1>

                        <button className="bg-yellow-400 px-4 py-2 rounded-full text-sm font-semibold">
                            <NavLink href={route('order.create')}>
                                اضافه کردن سفارش
                            </NavLink>
                        </button>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-stone-800 text-gray-200">
                                    <th className="p-3 text-right">شماره سفارش</th>
                                    <th className="p-3 text-right">نوع پرداخت</th>
                                    <th className="p-3 text-right">وضعیت سفارش</th>
                                    <th className="p-3 text-right">سفارش‌دهنده</th>
                                    <th className="p-3 text-right">مبلغ</th>
                                    <th className="p-3 text-right">تاریخ</th>
                                    <th className="p-3 text-center">عملیات</th>
                                </tr>
                            </thead>

                            <tbody>
                                {orders.map(order => (
                                    <tr
                                        key={order.id}
                                        className="border-b border-stone-800 hover:bg-stone-800 transition"
                                    >
                                        <td className="p-3 text-gray-300">
                                            {order.ref_id}
                                        </td>

                                        <td className="p-3 text-gray-400">
                                            {order.method ?? '---'}
                                        </td>

                                        <td className="p-3 text-gray-300">
                                            {order.status}
                                        </td>

                                        <td className="p-3 text-gray-300 font-medium">
                                            {order.user?.name || '---'}
                                        </td>

                                        <td className="p-3 text-gray-300">
                                            {order.amount.toLocaleString()} تومان
                                        </td>

                                        <td className="p-3 text-gray-400 text-xs">
                                            {order.created_at}
                                        </td>

                                        <td className="p-3 text-center">
                                            <div className="flex justify-center gap-3 text-lg">
                                                <button
                                                    onClick={deleteOrder(order.id)}
                                                    title="حذف"
                                                >
                                                    🗑️
                                                </button>
                                                <button
                                                    onClick={editOrder(order.id)}
                                                    title="ویرایش"
                                                >
                                                    ✏️
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
