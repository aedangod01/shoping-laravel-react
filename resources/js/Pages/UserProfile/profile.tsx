import Dropdown from '@/Components/Core/Dropdown';
import NavLink from '@/Components/Core/NavLink';
import ResponsiveNavLink from '@/Components/Core/ResponsiveNavLink';
import { usePage } from '@inertiajs/react';
import React from 'react';
import { PropsWithChildren, ReactNode, useState } from 'react';

export default function UserDashboard({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-stone-800 flex  flex-row-reverse">
            <nav className="border-b border-gray-100 bg-white dark:border-gray-700 flex  dark:bg-stone-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="p-5 h-16 justify-between ">

                        <div className="hidden sm:ms-6 sm:flex py-5 sm:items-center">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-lg font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-yellow-400 dark:text-black  dark:hover:text-white"
                                            >
                                                <span className='pr-2'>   خوش آمدید   </span>      {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                        >
                                            پروفایل کاربری شما
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            <div className='flex '>
                                                خروج از حساب کاربری
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-door-closed-fill pl-2" viewBox="0 0 16 16">
                                                    <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                                </svg>
                                            </div>
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                        <div className=" flex flex-col">


                            <div className="hidden  space-x-8 p-5 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route('profile.edit')}
                                    active={route().current('profile.edit')}
                                >
                                    پروفایل 
                                </NavLink>
                            </div>
                            <div className="hidden space-x-8 p-5 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route('product')}
                                    active={route().current('product')}
                                >
                                    سفارشات
                                </NavLink>
                            </div>
                            <div className="hidden bg-red-700  space-x-8 p-3 rounded-full sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route('users')}
                                    active={route().current('users')}
                                >
                                    خروج از حساب کاربر
                                </NavLink>
                            </div>
                            
                        </div>



                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState,
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? 'block' : 'hidden') +
                        ' sm:hidden'
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink
                            href={route('dashboard')}
                            active={route().current('dashboard')}
                        >
                            داشبورد
                        </ResponsiveNavLink>
                    </div>

                    <div className="border-t border-gray-200 pb-1 pt-4 dark:border-gray-600">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800 dark:text-gray-200">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>
                                پروفایل کاربری شما
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                            >
                                خروج
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>



            <main>
                <div className='pr-24 flex justify-center'>

                <div className="overflow-x-auto bg-stone-900  text-white rounded-xl shadow p-6 max-w-3xl mx-auto mt-6">
                    <h2 className="text-2xl font-semibold mb-4 text-white"> کالاها سفارش داده شده</h2>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-300">
                                <th className="py-3 px-2">کد کالا</th>
                                <th className="py-3 px-2">نام کالا</th>
                                <th className="py-3 px-2">موجودی</th>
                                <th className="py-3 px-2">وضعیت</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="py-3 px-2 font-medium">#101</td>
                                <td className="py-3 px-2">تی‌شرت مردانه</td>
                                <td className="py-3 px-2">25</td>
                                <td className="py-3 px-2 font-semibold text-green-500">موجود</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="py-3 px-2 font-medium">#102</td>
                                <td className="py-3 px-2">کفش ورزشی</td>
                                <td className="py-3 px-2">5</td>
                                <td className="py-3 px-2 font-semibold text-yellow-500">در حال اتمام</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="py-3 px-2 font-medium">#103</td>
                                <td className="py-3 px-2">کلاه</td>
                                <td className="py-3 px-2">0</td>
                                <td className="py-3 px-2 font-semibold text-red-500">ناموجود</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="py-3 px-2 font-medium">#104</td>
                                <td className="py-3 px-2">کت مردانه</td>
                                <td className="py-3 px-2">12</td>
                                <td className="py-3 px-2 font-semibold text-green-500">موجود</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </main>
        </div>



    )
}
