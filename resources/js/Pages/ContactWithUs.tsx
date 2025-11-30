import { Head, useForm } from '@inertiajs/react';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';

export default function Contact() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        text: ''
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('contactUs.store'));
    };
    return (
        <>
            <Head title="تماس با ما" />
            <Header />

            <section className="py-16 p-5 bg-stone-800 min-h-screen" dir="rtl">
                <div className="container mx-auto px-6 max-w-5xl">

                    {/* --- Title --- */}
                    <div className="text-center mb-14">
                        <h1 className="text-4xl font-extrabold text-white tracking-wide mb-4">
                            تماس با ما
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                            اگر سوال، پیشنهاد یا نیاز به پشتیبانی دارید، خوشحال می‌شویم با ما در ارتباط باشید.
                        </p>
                    </div>

                    {/* --- Contact Info --- */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">

                        <div className="p-6 rounded-xl bg-stone-900 border border-stone-700 shadow-md text-center">
                            <h4 className="text-white text-xl mb-3 font-semibold">آدرس</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                تهران، خیابان مثال، پلاک ۱۰
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-stone-900 border border-stone-700 shadow-md text-center">
                            <h4 className="text-white text-xl mb-3 font-semibold">ایمیل</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                example@email.com
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-stone-900 border border-stone-700 shadow-md text-center">
                            <h4 className="text-white text-xl mb-3 font-semibold">شماره تماس</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                021-12345678
                            </p>
                        </div>

                    </div>

                    {/* --- Contact Form --- */}
                        <div className="bg-stone-900/70 backdrop-blur p-8 rounded-2xl shadow-xl border border-stone-700">
                            <h2 className="text-2xl font-bold text-white mb-6">
                                فرم تماس با ما
                            </h2>

                            <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>

                                <div>
                                    <label className="text-gray-300 text-sm mb-2 block">
                                        نام و نام خانوادگی
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-stone-800 border border-stone-600 w-full rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-yellow-500 outline-none"
                                        placeholder="نام خود را وارد کنید"
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                    />
                                     {errors.name && (
                                    <div className="text-red-500 text-xs mt-1">{errors.name}</div>
                                )}
                                </div>

                                <div>
                                    <label className="text-gray-300 text-sm mb-2 block">
                                        ایمیل
                                    </label>
                                    <input
                                        type="email"
                                        className="bg-stone-800 border border-stone-600 w-full rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-yellow-500 outline-none"
                                        placeholder="example@mail.com"
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                    />
                                     {errors.email && (
                                    <div className="text-red-500 text-xs mt-1">{errors.email}</div>
                                )}
                                </div>

                                <div>
                                    <label className="text-gray-300 text-sm mb-2 block">
                                        پیام شما
                                    </label>
                                    <textarea
                                        rows="5"
                                        className="bg-stone-800 border border-stone-600 w-full rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-yellow-500 outline-none"
                                        placeholder="متن پیام شما..."
                                        value={data.text}
                                        onChange={e => setData('text', e.target.value)}
                                    ></textarea>
                                     {errors.text && (
                                    <div className="text-red-500 text-xs mt-1">{errors.text}</div>
                                )}
                                </div>

                                <button
                                    type="submit"
                                    className="bg-yellow-400 text-stone-900 px-8 py-3 rounded-full font-semibold text-sm hover:bg-yellow-500 transition"
                                >
                                    ارسال پیام
                                </button>

                            </form>
                        </div>

                </div>
            </section>

            <Footer />
        </>
    );
}
