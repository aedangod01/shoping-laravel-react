import ApplicationLogo from '@/Components/Core/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0  dark:bg-stone-800">
       
            <div className="mt-6 w-full text-right
             overflow-hidden bg-white px-6 py-4 shadow-md
              sm:max-w-md sm:rounded-lg  dark:bg-stone-900">
                {children}
            </div>
        </div>
    );
}
