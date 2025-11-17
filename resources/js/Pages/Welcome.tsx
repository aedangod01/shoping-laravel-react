import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import Header from './Layouts/Header';
import Sidebar from './Layouts/Sidebar';
import ImageItem from '../asssets/Img/pexels-max-fischer-5868120.png'
import Boxs from './Boxs';
import Items from '@/Components/App/ProductCard';
import Itemsimage from '../asssets/Img/pexels-max-fischer-5868120.png'
import ProductSlider from '@/Components/App/ProductSlider';
import { useState } from 'react';
import { CartProvider } from '@/Context/CartContext';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity : number

    // اگر فیلدهای بیشتری در دیتابیس داری اضافه کن
};
type Paginated<T> = {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
};
// import ProductSlider from '@/Components/App/ProductSlider';
// const products = [
//     { name : "test", price:20, image:Itemsimage },
//     { name : "test", price:20, image:Itemsimage },
//     { name : "test", price:20, image:Itemsimage },
//     { name : "test", price:20, image:Itemsimage },
//     { name : "test", price:20, image:Itemsimage },
//     { name : "test", price:20, image:Itemsimage },
//     { name : "test", price:20, image:Itemsimage },
//     { name : "test", price:20, image:Itemsimage },
// ]
interface WelcomePageProps extends PageProps {
    laravelVersion: string;
    phpVersion: string;
    products: Paginated<Product>;
}
export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    products
}: WelcomePageProps) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };
    const items = products.data;
    const [cart, setCart] = useState<Product[]>([]);
const addToCart = (product: Product) => {
    setCart(prev => {
       
        const existing = prev.find(p => p.id === product.id);
        if (existing) {
            return prev.map(p =>
                p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
            );
        } else {
            // محصول جدید را اضافه کن
            return [...prev, { ...product, quantity: 1 }];
        }
    });
};
    return (
        <>

            <Head title="Welcome" />
            <Header />
            <Sidebar />

            <section className="py-12 bg-stone-700">
                <div className="container mx-auto px-4">

                    <ProductSlider items={items}  />
                    <Boxs />
                    <div>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-white py-4 mb-2">محصولات برتر</h2>
                            <p className="text-white">برترین محصولات با بهترین قیمت</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            <div className="product-card bg-stone-800 rounded-lg shadow-md overflow-hidden">
                                <div className="relative">
                                    <img src={ImageItem} alt="محصول 1" className="w-full h-48 object-contain" />
                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">15% تخفیف</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-white text-lg mb-2">هدفون بی‌سیم</h3>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-400 line-through">250,000 تومان</span>
                                        <span className="font-bold text-gray-300">212,500 تومان</span>
                                    </div>
                                    <button className="w-full bg-gradient-to-l from-yellow-400 to-yellow-400 text-stone-800 font-bold py-2 rounded-lg hover:bg-yellow-500 transition">افزودن به سبد خرید</button>
                                </div>
                            </div>


                            <div className="product-card bg-stone-800 rounded-lg shadow-md overflow-hidden">
                                <div className="relative">
                                    <img src={ImageItem} alt="محصول 1" className="w-full h-48 object-contain" />
                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">15% تخفیف</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-white text-lg mb-2">هدفون بی‌سیم</h3>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-400 line-through">250,000 تومان</span>
                                        <span className="font-bold text-gray-300">212,500 تومان</span>
                                    </div>
                                    <button className="w-full bg-gradient-to-l from-yellow-400 to-yellow-400 text-stone-800 font-bold py-2 rounded-lg hover:bg-yellow-500 transition">افزودن به سبد خرید</button>
                                </div>
                            </div>


                            <div className="product-card bg-stone-800 rounded-lg shadow-md overflow-hidden">
                                <div className="relative">
                                    <img src={ImageItem} alt="محصول 1" className="w-full h-48 object-contain" />
                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">15% تخفیف</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-white text-lg mb-2">هدفون بی‌سیم</h3>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-400 line-through">250,000 تومان</span>
                                        <span className="font-bold text-gray-300">212,500 تومان</span>
                                    </div>
                                    <button className="w-full bg-gradient-to-l from-yellow-400 to-yellow-400 text-stone-800 font-bold py-2 rounded-lg hover:bg-yellow-500 transition">افزودن به سبد خرید</button>
                                </div>
                            </div>


                            <div className="product-card bg-stone-800 rounded-lg shadow-md overflow-hidden">
                                <div className="relative">
                                    <img src={ImageItem} alt="محصول 1" className="w-full h-48 object-contain" />
                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">15% تخفیف</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-white text-lg mb-2">هدفون بی‌سیم</h3>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-400 line-through">250,000 تومان</span>
                                        <span className="font-bold text-gray-300">212,500 تومان</span>
                                    </div>
                                    <button className="w-full bg-gradient-to-l from-yellow-400 to-yellow-400 text-stone-800 font-bold py-2 rounded-lg hover:bg-yellow-500 transition">افزودن به سبد خرید</button>
                                </div>
                            </div>


                            <div className="product-card bg-stone-800 rounded-lg shadow-md overflow-hidden">
                                <div className="relative">
                                    <img src={ImageItem} alt="محصول 1" className="w-full h-48 object-contain" />
                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">15% تخفیف</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-white text-lg mb-2">هدفون بی‌سیم</h3>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-400 line-through">250,000 تومان</span>
                                        <span className="font-bold text-gray-300">212,500 تومان</span>
                                    </div>
                                    <button className="w-full bg-gradient-to-l from-yellow-400 to-yellow-400 text-stone-800 font-bold py-2 rounded-lg hover:bg-yellow-500 transition">افزودن به سبد خرید</button>
                                </div>
                            </div>


                        </div>

                    </div>


                    <div>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-white py-4 mb-2">تی شرت مردانه</h2>
                            <p className="text-white">برترین محصولات با بهترین قیمت</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="product-card bg-stone-800 rounded-lg shadow-md overflow-hidden">
                                <div className="relative">
                                    <img src={ImageItem} alt="محصول 1" className="w-full h-48 object-contain" />
                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">15% تخفیف</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-white text-lg mb-2">هدفون بی‌سیم</h3>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-400 line-through">250,000 تومان</span>
                                        <span className="font-bold text-gray-300">212,500 تومان</span>
                                    </div>
                                    <button className="w-full bg-gradient-to-l from-yellow-400 to-yellow-400 text-stone-800 font-bold py-2 rounded-lg hover:bg-yellow-500 transition">افزودن به سبد خرید</button>
                                </div>
                            </div>


                            <div className="product-card bg-stone-800 rounded-lg shadow-md overflow-hidden">
                                <div className="relative">
                                    <img src={ImageItem} alt="محصول 1" className="w-full h-48 object-contain" />
                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">15% تخفیف</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-white text-lg mb-2">هدفون بی‌سیم</h3>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-400 line-through">250,000 تومان</span>
                                        <span className="font-bold text-gray-300">212,500 تومان</span>
                                    </div>
                                    <button className="w-full bg-gradient-to-l from-yellow-400 to-yellow-400 text-stone-800 font-bold py-2 rounded-lg hover:bg-yellow-500 transition">افزودن به سبد خرید</button>
                                </div>
                            </div>


                            <div className="product-card bg-stone-800 rounded-lg shadow-md overflow-hidden">
                                <div className="relative">
                                    <img src={ImageItem} alt="محصول 1" className="w-full h-48 object-contain" />
                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">15% تخفیف</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-white text-lg mb-2">هدفون بی‌سیم</h3>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-400 line-through">250,000 تومان</span>
                                        <span className="font-bold text-gray-300">212,500 تومان</span>
                                    </div>
                                    <button className="w-full bg-gradient-to-l from-yellow-400 to-yellow-400 text-stone-800 font-bold py-2 rounded-lg hover:bg-yellow-500 transition">افزودن به سبد خرید</button>
                                </div>
                            </div>





                            <div className="product-card bg-stone-800 rounded-lg shadow-md overflow-hidden">
                                <div className="relative">
                                    <img src={ImageItem} alt="محصول 1" className="w-full h-48 object-contain" />
                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">15% تخفیف</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-white text-lg mb-2">هدفون بی‌سیم</h3>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-400 line-through">250,000 تومان</span>
                                        <span className="font-bold text-gray-300">212,500 تومان</span>
                                    </div>
                                    <button className="w-full bg-gradient-to-l from-yellow-400 to-yellow-400 text-stone-800 font-bold py-2 rounded-lg hover:bg-yellow-500 transition">افزودن به سبد خرید</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
