import React from 'react'
import { Inertia } from '@inertiajs/inertia';
import { useCart } from '@/Context/CartContext';

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
export default function AddItem({ name, price, image, quantity, id }: ProductCardProps) {
  const { addToCart } = useCart(); // گرفتن تابع افزودن
  const handleAddToCart = async () => {
    try {
      console.log('Button clicked with product:', { id, name, price }); // و این خط

      // ارسال درخواست به سرور
      await Inertia.post(route('cart/add'), {
        product_id: id,
        quantity: 1,
        price: price
      });

      // آپدیت سریع Context برای رابط کاربری بدون تاخیر
      addToCart({ id, name, price, image, quantity: 1 });
    } catch (error) {
      console.error('خطا در افزودن به سبد خرید:', error);
    }
  };
  return (
    <button
      // onClick={() => addToCart({ id, name, price, image, quantity: 1 })}
      onClick={handleAddToCart}
      className="w-full bg-gradient-to-l from-yellow-400 to-yellow-400 text-stone-800 text-sm lg:text-lg font-bold py-2 rounded-lg hover:bg-yellow-500 transition">
      افزودن به سبد خرید

    </button>
  )
}
