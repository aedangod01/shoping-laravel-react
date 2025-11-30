import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import NavLink from '@/Components/Core/NavLink';
import { router } from '@inertiajs/react';

type Order = {
    id: number;
    order_number: string;
    status: string;
    payment_status: string;
    total: number;
    user_name?: string;
    created_at: string;
};

type Props = {
    orders: Order[];
};

export default function AllOrder({ orders }: Props) {
    const {
        delete: destroy,
    } = useForm({});

    const deleteOrder = (id: number) => (e: React.MouseEvent) => {
        e.preventDefault();

        destroy(route('order.destroy', id), {
            preserveScroll: true,
        });
    };

    const editOrder = (id: number) => (e: React.MouseEvent) => {
        e.preventDefault();

        router.visit(route('order.edit', id), {
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="سفارش ها" />

            <div className="w-full flex justify-center px-4 py-6">
                <div className="dark:bg-stone-900 p-4 shadow-md rounded-xl overflow-hidden w-full max-w-6xl">
                    <div className='flex justify-between'>
                        <h1 className='text-white text-lg font-bold'>تمامی سفارش‌ها</h1>

                        <div className='relative'>
                            <input
                                type="text"
                                className='px-6 py-1 dark:bg-stone-800 rounded-full w-full pr-10'
                                placeholder='سفارش را جستجو کنید'
                            />
                            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition">
                                🔍
                            </button>
                        </div>
                    </div>

                    <button className='bg-yellow-400 py-2 rounded-full font-semibold text-sm px-4'>
                        <NavLink
                            href={route('order.create')}
                            active={route().current('order')}
                        >
                            اضافه کردن سفارش
                        </NavLink>
                    </button>

                    <table className="w-full mt-4">
                        <thead>
                            <tr>
                                <th className="p-4">شماره سفارش</th>
                                <th className="p-4">کاربر</th>
                                <th className="p-4">وضعیت سفارش</th>
                                <th className="p-4">وضعیت پرداخت</th>
                                <th className="p-4">مبلغ</th>
                                <th className="p-4">تاریخ ایجاد</th>
                                <th className="p-4">عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td className="p-4 border-b text-gray-300">
                                        {order.order_number}
                                    </td>

                                    <td className="p-4 border-b text-gray-300">
                                        {order.user_name ?? '---'}
                                    </td>

                                    <td className="p-4 border-b text-gray-300">
                                        {order.status}
                                    </td>

                                    <td className="p-4 border-b text-gray-300">
                                        {order.payment_status}
                                    </td>

                                    <td className="p-4 border-b text-gray-300">
                                        {order.total} تومان
                                    </td>

                                    <td className="p-4 border-b text-gray-300">
                                        {order.created_at}
                                    </td>

                                    <td className="p-4 border-b text-gray-300">
                                        <div className='flex gap-2'>
                                            {/* حذف */}
                                            <a onClick={deleteOrder(order.id)}>
                                                🗑️
                                            </a>

                                            {/* ویرایش */}
                                            <a onClick={editOrder(order.id)}>
                                                ✏️
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
