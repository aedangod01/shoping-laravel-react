import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import { useCart } from "../../Context/CartContext"; // اینو اضافه کن
import { Inertia } from '@inertiajs/inertia';
import AddItem from './AddItem';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
// تعریف interface برای props
interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number

}

export default function ProductCard({ name, price, image, quantity, id }: ProductCardProps) {
 



  return (
    <div className="product-card bg-stone-800   rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <Link href={route('product.show', { id })} preserveScroll>

          <img src={image} alt={name} className="w-full h-48 object-contain" />
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            15% تخفیف
          </span>
        </Link>

      </div>
      <div className="lg:p-4 p-2 flex items-center justify-between flex-col">
        <h3 className="font-bold text-white text-lg mb-2">{name}</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400 line-through hidden lg:block pr-3">250,000 تومان</span>
          <span className="font-bold text-gray-300">{price} تومان</span>
        </div>
      <AddItem name={name} price={price} quantity={quantity} id={id} image={image}  />
      </div>
    </div>
  );
}