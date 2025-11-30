import React from 'react'
import CartHoverMenu from "../../Components/App/CartHoverMenu";
import { useCart } from "../../Context/CartContext";
import NavLink from '@/Components/Core/NavLink';
import SearchBar from '../../Components/App/SearchBar';

export default function Header() {

    return (
        <header className="bg-stone-700 text-white shadow-sm sticky  top-0 z-50">
            <div className="container  mx-auto px-4 py-3" dir='rtl'>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4 space-x-reverse">
                        <h1 className="text-2xl font-bold text-primary p-4">فروشگاه ما</h1>
                        <nav className="hidden md:hidden lg:flex space-x-6 space-x-reverse">
                            <a href="#" className="text-white hover:text-primary transition">خانه</a>
                            {/* <a href="#" className="text-whitehover:text-primary transition">محصولات</a> */}
                            <a href="#" className="text-whitehover:text-primary transition"> <NavLink
                                href={route('about-us')}
                                active={route().current('about-us')}
                            >
                         محصولات 
                                </NavLink>
                            </a>
                            {/* <a href="#" className="text-whitehover:text-primary transition">محصولات</a> */}
                            <a href="#" className="text-whitehover:text-primary transition"> <NavLink
                                href={route('about-us')}
                                active={route().current('about-us')}
                            >
                                درباره ما
                                </NavLink>
                            </a>
                            <a href="#" className="text-white hover:text-primary transition">تماس با ما</a>
                        </nav>
                    </div>

                    <div className="flex items-center space-x-4 space-x-reverse">
                        <CartHoverMenu />
                        <SearchBar />

                        <div>
                            <NavLink
                                href={route('login')}
                                active={route().current('login')}
                            >
                                <button className='bg-yellow-400 py-3 px-6 text-xl rounded-2xl'>ورود</button>

                            </NavLink>

                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}
