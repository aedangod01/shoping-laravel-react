import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-2 px-2 pt-1 text-base leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 p-2 text-gray-900 focus:border-yellow-400 dark:border-yellow-400 dark:text-gray-100'
                    : 'border-transparent  focus:border-gray-300 focus:text-gray-700  dark:text-white  ') +
                className
            }
        >
            {children}
        </Link>
    );
}
