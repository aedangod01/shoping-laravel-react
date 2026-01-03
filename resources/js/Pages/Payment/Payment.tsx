import React, { useState } from "react";
import Header from "@/Pages/Layouts/Header";
import { useForm } from "@inertiajs/react";
import { FaCreditCard, FaMoneyBillWave, FaWallet, FaUniversity } from "react-icons/fa";
// interface Carts {
//     id: number;
//     total: number;
//     carts: string;
// }
type Props = {
  order_id: number;
  total: number;
};

export default function PaymentPage({ order_id, total }: Props) {
  const { data, setData, post, processing } = useForm({
    order_id,
    amount: total,
    method: "gateway",
  });

  const methods = [
    { id: "gateway", label: "درگاه آنلاین", icon: <FaUniversity /> },
    { id: "card", label: "کارت بانکی", icon: <FaCreditCard /> },
    { id: "wallet", label: "کیف پول", icon: <FaWallet /> },
    { id: "cash", label: "پرداخت در محل", icon: <FaMoneyBillWave /> },
  ];

  const handleSubmit = () => {
    post(route("payments.store"));
  };

  return (
    <>
      <Header />

      <div className="min-h-screen w-full bg-stone-900 text-white p-6 md:p-12">
        <h1 className="text-3xl font-extrabold mb-8">پرداخت نهایی</h1>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* انتخاب روش پرداخت */}
          <div className="flex-1 p-6 bg-stone-800/50 backdrop-blur-lg rounded-2xl border border-stone-700 shadow-xl">
            <h2 className="text-xl font-bold mb-6">نحوه پرداخت</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {methods.map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setData("method", item.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all
                    ${
                      data.method === item.id
                        ? "border-yellow-400 bg-yellow-400/10"
                        : "border-stone-700 bg-stone-900 hover:border-yellow-400"
                    }
                  `}
                >
                  <span className="text-xl text-yellow-400">{item.icon}</span>
                  <span className="font-semibold">{item.label}</span>
                </button>
              ))}
            </div>

            {/* فقط برای کارت (فعلاً نمایشی – ارسال نمی‌شود) */}
            {data.method === "card" && (
              <div className="mt-6 flex flex-col gap-4">
                <input name="card_name" placeholder="نام دارنده کارت" className="input" />
                <input name="card_number" placeholder="شماره کارت" className="input" />
                <div className="flex gap-4">
                  <input name="card_exp" placeholder="MM / YY" className="input w-1/2" />
                  <input name="card_cvv" placeholder="CVV2" className="input w-1/2" />
                </div>
              </div>
            )}
          </div>

          {/* خلاصه پرداخت */}
          <div className="w-full lg:w-1/3 p-6 bg-stone-900/60 backdrop-blur-lg rounded-2xl border border-stone-700 shadow-xl flex flex-col gap-6">
            <h2 className="text-xl font-bold">خلاصه پرداخت</h2>

            <div className="flex justify-between text-gray-400">
              <span>مبلغ قابل پرداخت:</span>
              <span className="text-yellow-400 font-bold">
                {total} تومان
              </span>
            </div>

            <button
              onClick={handleSubmit}
              disabled={processing}
              className="mt-4 w-full py-4 rounded-xl font-bold bg-yellow-400 text-stone-900 hover:bg-yellow-500 transition-all disabled:opacity-50"
            >
              ادامه پرداخت
            </button>
          </div>
        </div>
      </div>

      <style>
        {`
          .input {
            padding: 1rem;
            border-radius: 0.75rem;
            background: #0c0a09;
            border: 1px solid #44403c;
            outline: none;
            color: white;
          }
          .input:focus {
            border-color: #facc15;
          }
        `}
      </style>
    </>
  );
}
