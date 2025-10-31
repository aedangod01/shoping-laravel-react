import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import productImage from '../../../asssets/Img/pexels-max-fischer-5868120.png'
import NavLink from '@/Components/Core/NavLink';
import { FormEventHandler } from 'react';
import { router } from '@inertiajs/react'

type User = {
    id: number;
    name: string;
    email: string;
    phone : string;
    address : string;
    gender : string;
    city : string;
    password: number;
   
}
type Props = {
    users: User[];
}
 
export default function AllUser({ users }: Props) {
    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({});

    const deleteItem = (id: number) => (e: React.MouseEvent) => {
        e.preventDefault();

        destroy(route('user.destroy', id), {
            preserveScroll: true,
            onSuccess: () => {
                // میتونی بعد حذف کاری انجام بدی مثل رفرش کردن داده‌ها یا پیام موفقیت
            },
        });
         }
    const editItem = (id: number) => (e: React.MouseEvent) => {
        e.preventDefault();

        router.visit(route('user.edit', id), {
        preserveScroll: true,
    });
         }
    return (
        <AuthenticatedLayout>
            <Head title="کاربران" />

            <div className="w-full flex justify-center px-4 py-6">
                <div className="dark:bg-stone-900 p-4  shadow-md rounded-xl overflow-hidden w-full max-w-6xl">
                    <div className='flex justify-between'>
                        <h1 className='text-white text-lg font-bold'>تمامی محصولات</h1>
                        <div className='relative'>
                            <input
                                type="text"
                                className='px-6 py-1 dark:bg-stone-800  rounded-full w-full pr-10'
                                placeholder='محصول را سرج کنید'
                            />
                            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-search"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </button>
                        </div>

                    </div>
                    <button className='bg-yellow-400 py-2 
                    rounded-full font-semibold text-sm px-4'>

                        <NavLink
                            href={route('user.create')}
                            active={route().current('user')}
                        >
                            اضافه کردن کاربر
                        </NavLink> </button>

                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                    <p className="block font-sans text-sm antialiased leading-none text-gray-300 font-bold opacity-70">
                                        نام محصول
                                    </p>
                                </th>
                                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                    <p className="block font-sans text-sm antialiased font-normal leading-none text-gray-300 opacity-70">
                                        ایمیل
                                    </p>
                                </th>
                                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                    <p className="block font-sans text-sm antialiased font-normal leading-none text-gray-300 opacity-70">
                                        شماره تلفن
                                    </p>
                                </th>
                                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                    <p className="block font-sans text-sm antialiased font-normal leading-none text-gray-300 opacity-70">
                                        آدرس
                                    </p>
                                </th>
                                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                    <p className="block font-sans text-sm antialiased font-normal leading-none text-gray-300 opacity-70">
                                        جنسیت
                                    </p>
                                </th>
                                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                    <p className="block font-sans text-sm antialiased font-normal leading-none text-gray-300 opacity-70">
                                        شهر
                                    </p>
                                </th>
                                
                               
                                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                    <p className="block font-sans text-sm antialiased font-normal leading-none text-gray-300 opacity-70">
                                        تاریخ ایجاد
                                    </p>
                                </th>
                                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                    <p className="block font-sans text-sm antialiased font-normal leading-none text-gray-300 opacity-70">
                                        عملیات
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (

                                <tr key={user.id}>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-300">
                                            {user.name}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-300">
                                            {user.email}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-300">
                                            {user.phone}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-300">
                                            {user.address}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-300">
                                            {user.gender}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-300">
                                            {user.city}
                                        </p>
                                    </td>
                                   
                                   
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-300">
                                            23/04/18
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-300">
                                            <div className='flex gap-2'>
                                                <a href=""
                                                    onClick={deleteItem(user.id)} >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg></a>
                                                <a
                                                    href="#"
                                                    onClick={editItem(user.id)}
                                                > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                                    </svg></a>

                                            </div>
                                        </p>
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