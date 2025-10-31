import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  view_count: number;
  brand?: string | null;
  rating?: '1' | '2' | '3' | '4' | '5' | null;
}

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const rate = product.rating ? parseInt(product.rating) : 0;

  return (
    
    <div className="bg-stone-900 rounded-xl border  border-stone-700 shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-all duration-300">
      {/* تصویر */}
      <div className="relative bg-stone-800 min-h-48 md:h-52 flex justify-center items-center p-4 md:w-2/5">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain max-h-40 md:max-h-44 w-auto transition-transform duration-300 hover:scale-110"
        />
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md shadow-md">
          15٪ تخفیف
        </span>
      </div>

      {/* اطلاعات */}
      <div className="flex flex-col flex-grow p-4 md:p-5 justify-between md:w-3/5">
        {/* نام و برند */}
        <div className="text-center mb-3">
          <h3 className="text-white font-bold text-lg mb-1 line-clamp-2 leading-tight">
            {product.name}
          </h3>
          {product.brand && (
            <p className="text-gray-400 text-sm truncate">برند: {product.brand}</p>
          )}
        </div>

        {/* ستاره‌ها */}
        <div className="flex justify-center items-center mb-3 space-x-1">
          {Array.from({ length: 5 }).map((_, i) =>
            i < rate ? (
              <FaStar key={i} className="text-yellow-400 text-sm md:text-base" />
            ) : (
              <FaRegStar key={i} className="text-gray-600 text-sm md:text-base" />
            )
          )}
          {rate > 0 && (
            <span className="text-gray-400 text-xs mr-2">({rate}/5)</span>
          )}
        </div>

        {/* قیمت */}
        <div className="text-center mb-4">
          <span className="text-gray-400 line-through text-sm block mb-1">
            250,000 تومان
          </span>
          <span className="text-yellow-400 font-extrabold text-xl md:text-2xl">
            {product.price.toLocaleString()} تومان
          </span>
        </div>

        {/* موجودی و بازدید */}
        <div className="flex justify-between text-gray-400 text-xs mb-4 border-t border-stone-700 pt-3">
          <span className={`${product.quantity === 0 ? 'text-red-400' : 'text-green-400'}`}>
            {product.quantity > 0 ? `موجودی: ${product.quantity}` : 'ناموجود'}
          </span>
          <span className="flex items-center gap-1">
            <span>👁</span>
            {product.view_count.toLocaleString()} بازدید
          </span>
        </div>

        {/* دکمه */}
        <button
          disabled={product.quantity === 0}
          className={`
            w-full py-3 rounded-lg font-bold text-sm transition-all duration-300
            disabled:bg-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed
            enabled:bg-yellow-400 enabled:text-stone-900 enabled:hover:bg-yellow-500 
            enabled:hover:shadow-lg enabled:transform enabled:hover:-translate-y-0.5
          `}
        >
          {product.quantity === 0 ? 'ناموجود' : 'افزودن به سبد خرید'}
        </button>
      </div>
    </div>
    
  );
}