import React from 'react'

export default function Header() {
    return (
        <header className="bg-stone-700 text-white shadow-sm sticky  top-0 z-50">
            <div className="container  mx-auto px-4 py-3" dir='rtl'>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4 space-x-reverse">
                        <h1 className="text-2xl font-bold text-primary p-4">فروشگاه ما</h1>
                        <nav className="hidden md:hidden lg:flex space-x-6 space-x-reverse">
                            <a href="#" className="text-white hover:text-primary transition">خانه</a>
                            <a href="#" className="text-whitehover:text-primary transition">محصولات</a>
                            <a href="#" className="text-white hover:text-primary transition">درباره ما</a>
                            <a href="#" className="text-white hover:text-primary transition">تماس با ما</a>
                        </nav>
                    </div>
                    
                    <div className="flex items-center space-x-4 space-x-reverse">
                        
                        <div className="relative">
                            <input type="text" placeholder="جستجوی محصولات..." className="bg-gray-500 text-white rounded-full py-2 px-4 pr-10 w-40 md:w-64 focus:outline-none focus:ring-2 focus:ring-primary" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi md:absolute md:block md:left-3 top-3 hidden bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </div>
                        <div>
                            <button className='bg-yellow-400 py-3 px-6 text-xl rounded-2xl'><a href="{route('login')}">ورود</a></button>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}
