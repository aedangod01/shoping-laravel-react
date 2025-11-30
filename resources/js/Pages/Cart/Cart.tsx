import React from "react";
import { FaTrash } from "react-icons/fa";
import Header from "@/Pages/Layouts/Header";
import ImageItem from '../../asssets/Img/pexels-max-fischer-5868120.png'
type Carts = {
  id: number;
  quantity: number;
  unit_price: number;
  total: number;
}
type Summary = {
  total: number; // جمع کل همه آیتم‌ها
};
type Props = {
  carts: Carts[];
  summary: Summary;

}
export default function CartPageStatic({ carts,summary }: Props) {
  
  return (
    <>
      <Header />

      <div className="min-h-screen w-full bg-stone-900 text-white p-6 md:p-12 flex flex-col">
        <h1 className="text-3xl font-extrabold mb-8 text-center md:text-left">
          سبد خرید شما
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* لیست آیتم‌ها */}
          <div className="flex-1 flex flex-col gap-6">
            {/* آیتم ۱ */}
            {carts.map(cart => (
              <div key={cart.id} className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 bg-stone-800/50 backdrop-blur-lg rounded-2xl border border-stone-700 shadow-lg">
                <img
                  src={ImageItem}
                  alt="محصول ۱"
                  className="w-20 h-20 object-contain rounded-xl"
                />
                <div className="">
                  <p className="block">نام</p>
                  <p className="text-yellow-500">{cart.unit_price}</p>
                </div>

              </div>
            ))}





          </div>

          {/* خلاصه سبد */}
          <div className="w-full md:w-1/3 p-6 bg-stone-900/60 backdrop-blur-lg rounded-2xl border border-stone-700 shadow-xl flex flex-col gap-6">
            <h2 className="text-xl font-bold mb-4">خلاصه سفارش</h2>
            <div className="flex justify-between text-gray-400">
              <span>تعداد آیتم‌ها:</span>
              <span>3</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>جمع کل:</span>
              <span>{summary.total} : تومان</span>
            </div>

            <button className="mt-4 w-full py-4 rounded-xl font-bold text-base bg-yellow-400 text-stone-900 hover:bg-yellow-500 hover:shadow-lg transition-all">
              پرداخت
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
