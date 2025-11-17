import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import ImageItem from '../../../asssets/Img/pexels-max-fischer-5868120.png'
import Header from "@/Pages/Layouts/Header";
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  view_count: number;
  brand?: string | null;
  rating?: "1" | "2" | "3" | "4" | "5" | null;
}

interface Props {
  product: Product;
}

export default function ProductPage({ product }: Props) {
  const rate = product.rating ? parseInt(product.rating) : 0;

  return (
    <>
        <Header />

    <div className="min-h-screen w-full bg-stone-900 text-white flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
      {/* بخش تصویر */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center p-4">
        <img
          src={ImageItem}
          alt={product.name}
          className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute top-6 left-6 bg-red-600 text-white text-xs md:text-sm px-3 py-1 rounded-md shadow-md">
          15٪ تخفیف
        </span>
      </div>

      {/* بخش اطلاعات */}
      <div className="w-full md:w-1/2 flex flex-col justify-center bg-stone-900/60 backdrop-blur-lg rounded-2xl border border-stone-700 p-6 md:p-10 shadow-xl">
        {/* نام و برند */}
        <div className="text-center md:text-right mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-2 leading-tight">
            {product.name}
          </h1>
          {product.brand && (
            <p className="text-gray-400 text-sm">برند: {product.brand}</p>
          )}
        </div>

        {/* امتیاز */}
        <div className="flex justify-center md:justify-start items-center mb-4 space-x-1 space-x-reverse">
          {Array.from({ length: 5 }).map((_, i) =>
            i < rate ? (
              <FaStar key={i} className="text-yellow-400 text-lg" />
            ) : (
              <FaRegStar key={i} className="text-gray-600 text-lg" />
            )
          )}
          {rate > 0 && (
            <span className="text-gray-400 text-xs mr-2">({rate}/5)</span>
          )}
        </div>

        {/* قیمت */}
        <div className="mb-6">
          <span className="text-gray-500 line-through text-sm block mb-1">
            250,000 تومان
          </span>
          <span className="text-yellow-400 font-extrabold text-3xl">
            {product.price.toLocaleString()} تومان
          </span>
        </div>

        {/* موجودی و بازدید */}
        <div className="flex justify-between items-center text-gray-400 text-sm mb-6 border-t border-stone-700 pt-4">
          <span
            className={`${
              product.quantity === 0 ? "text-red-400" : "text-green-400"
            }`}
          >
            {product.quantity > 0
              ? `موجودی: ${product.quantity}`
              : "ناموجود"}
          </span>
          <span className="flex items-center gap-1">
            👁 {product.view_count.toLocaleString()} بازدید
          </span>
        </div>

        {/* دکمه خرید */}
        <button
          disabled={product.quantity === 0}
          className={`
            w-full py-4 rounded-xl font-bold text-base transition-all duration-300
            disabled:bg-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed
            enabled:bg-yellow-400 enabled:text-stone-900 enabled:hover:bg-yellow-500 
            enabled:hover:shadow-lg enabled:hover:-translate-y-1
          `}
        >
          {product.quantity === 0 ? "ناموجود" : "افزودن به سبد خرید"}
        </button>
      </div>
    </div>

    </>
  );
}
