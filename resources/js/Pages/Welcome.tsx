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
import Footer from './Layouts/Footer';
import CartHoverMenu from '@/Components/App/CartHoverMenu';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number

    // اگر فیلدهای بیشتری در دیتابیس داری اضافه کن
};
type Paginated<T> = {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
};

interface WelcomePageProps extends PageProps {
    laravelVersion: string;
    phpVersion: string;
    products: Paginated<Product>;
    thshirts: Paginated<Product>;
}
export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    products,
    thshirts
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
    const tshirt = thshirts.data;
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

                    <ProductSlider items={items} />
                    <Boxs />
                    <div>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-white py-4 mb-2">محصولات برتر</h2>
                            <p className="text-white">برترین محصولات با بهترین قیمت</p>
                        </div>

                        <ProductSlider items={items} />


                    </div>


                    <div>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-white py-4 mb-2">تی شرت مردانه</h2>
                            <p className="text-white">برترین محصولات با بهترین قیمت</p>
                        </div>

                        <ProductSlider items={tshirt} />

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
