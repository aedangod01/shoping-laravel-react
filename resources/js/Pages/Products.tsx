import React, { useState } from 'react'
import { PageProps } from '@/types';

import Header from './Layouts/Header'
import Sidebar from './Layouts/Sidebar'
import Footer from './Layouts/Footer'
import ProductSlider from '@/Components/App/ProductSlider';
import { useForm } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
interface Category {
  id: number;
  name: string;
  slug?: string;
}
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number
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
  categories: Category[];
  brands: string[];
}
export default function Products({ products, categories, brands }: WelcomePageProps) {
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
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };
  const { data, setData, get, processing, errors, reset } = useForm({

    category_id: '',
    brand: '',

  });
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   Inertia.get(route('product.filter'), {
  //     brand: data.brand,
  //     category_id: data.category_id,
  //   });
  // };
     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  get(route('product.filter'), {
    preserveState: true,
    replace: true,
  });
};
  return (
    <>

      <Header />

      <section className="py-12 bg-stone-700 flex ">
        <div className="container mx-auto px-4">

          <ProductSlider items={items} />

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

            <ProductSlider items={items} />

          </div>
        </div>
        <div >
          <form onSubmit={handleSubmit}>
            <div dir='rtl' className="w-64 bg-stone-900 text-white  p-6 rounded-xl shadow">
              <h3 className="text-lg  font-bold mb-4">فیلتر محصولات</h3>


              {/* Brand Filter */}
              <select
                id="brand"
                value={data.brand}
                onChange={e => setData('brand', e.target.value)}
                className="p-2 border px-12 bg-stone-800 border-gray-300 rounded"
              >
                <option value="">همه</option>
                {brands.map((brand, index) => (
                  <option key={index} value={brand}>{brand}</option>
                ))}
              </select>

              {/* Category Filter */}
              <select
                id="category"
                value={data.category_id}
                onChange={e => setData('category_id', e.target.value)}
                className="w-full p-2 bg-stone-800 border border-gray-300 rounded"
              >
                <option value="">همه</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <button className='bg-yellow-500 rounded-2xl py-4 px-4 mt-5 text-white'>جستجو</button>

            </div>

          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}
