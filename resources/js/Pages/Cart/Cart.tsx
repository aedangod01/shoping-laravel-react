import React from "react";
import { FaTrash } from "react-icons/fa";
import Header from "@/Pages/Layouts/Header";
import ImageItem from '../../asssets/Img/pexels-max-fischer-5868120.png'
import { router, useForm } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

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

export default function CartPageStatic({ carts, summary }: Props) {
      const {
          data,
          setData,
          delete: destroy,
          processing,
          reset,
          errors,
          clearErrors,
      } = useForm({});
  const handleSubmit = () => {
    router.get(route('payment'), {
      carts: carts,
      total: summary.total,
    });
  };
 
  const deleteitem = (id: number) => (e: React.MouseEvent) => {
        e.preventDefault();

        destroy(route('cart.delete', id), {
            preserveScroll: true,
            onSuccess: () => {
                // میتونی بعد حذف کاری انجام بدی مثل رفرش کردن داده‌ها یا پیام موفقیت
            },
        });
         }
    return (
      <>
        <Header />

        <div className="min-h-screen w-full bg-gradient-to-br from-stone-900 to-stone-800 text-white p-6 md:p-12 flex flex-col">
          <h1 className="text-4xl font-extrabold mb-10 text-center md:text-left tracking-wide">
            سبد خرید شما
          </h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* لیست آیتم‌ها */}
            <div className="flex-1 flex flex-col gap-6">
              {carts.map(cart => (
                <div
                  key={cart.id}
                  className="flex flex-col md:flex-row items-center md:items-start gap-4 p-5 bg-stone-800/60 backdrop-blur-md rounded-3xl border border-stone-700 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <img
                    src={ImageItem}
                    alt="محصول"
                    className="w-24 h-24 object-cover rounded-xl shadow-md"
                  />
                  <div className="flex-1 flex flex-col justify-between ml-2 md:ml-4">
                    <p className="text-lg font-semibold mb-1">نام محصول</p>
                    <p className="text-yellow-400 font-bold text-lg">{cart.unit_price} تومان</p>
                    <p className="text-gray-400 text-sm mt-1">تعداد: {cart.quantity}</p>
                  </div>
                  <button className="text-red-500 hover:text-red-400 ml-auto md:ml-0 mt-2 md:mt-0"  onClick={deleteitem(cart.id)} >
                    <FaTrash size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* خلاصه سبد */}
            <div className="w-full md:w-1/3 p-6 bg-stone-900/70 backdrop-blur-md rounded-3xl border border-stone-700 shadow-xl flex flex-col gap-6">
              <h2 className="text-2xl font-bold mb-4 tracking-wide">خلاصه سفارش</h2>
              <div className="flex justify-between text-gray-300 text-lg">
                <span>تعداد آیتم‌ها:</span>
                <span>{carts.length}</span>
              </div>
              <div className="flex justify-between text-gray-300 text-lg">
                <span>جمع کل:</span>
                <span>{summary.total} تومان</span>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="mt-6 w-full py-4 rounded-2xl font-bold text-lg bg-yellow-400 text-stone-900 hover:bg-yellow-500 hover:shadow-2xl transition-all duration-300"
              >
                پرداخت
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
