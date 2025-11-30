import { Head } from '@inertiajs/react';
import Header from './Layouts/Header';
import Sidebar from './Layouts/Sidebar';
import Footer from './Layouts/Footer';

export default function About() {
    return (
        <>
            <Head title="درباره ما" />
            <Header />
            <section className="py-16 p-5 bg-stone-800 min-h-screen" dir="rtl">
                <div className="container mx-auto px-6 max-w-6xl">

                    {/* --- Title --- */}
                    <div className="text-center mb-14">
                        <h1 className="text-4xl font-extrabold text-white tracking-wide mb-4">
                            درباره ما
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                            ما تلاش می‌کنیم بهترین تجربه خرید اینترنتی را برای شما فراهم کنیم.
                        </p>
                    </div>

                    {/* --- Mission Section --- */}
                    <div className="bg-stone-900/70 backdrop-blur p-4 rounded-2xl shadow-xl border border-stone-700 mb-14">
                        <h2 className="text-3xl font-bold text-white mb-4">هدف ما</h2>
                        <p className="text-gray-300 leading-8 text-lg text-justify">
                            فروشگاه اینترنتی ما با هدف ایجاد تجربه‌ای نو و مطمئن از خرید آنلاین فعالیت خود را آغاز کرده است. ما باور داریم که خرید اینترنتی باید ساده، سریع، قابل اعتماد و لذت‌بخش باشد؛ به همین دلیل تلاش کرده‌ایم مجموعه‌ای کامل از محصولات باکیفیت را با قیمت مناسب و پشتیبانی حرفه‌ای فراهم کنیم.

                            در فروشگاه ما، انتخاب‌های متنوع، اطلاعات کامل محصول و فرآیند خرید آسان در کنار ارسال سریع و پشتیبانی واقعی، تجربه‌ای متفاوت برای مشتریان رقم می‌زند. ما همواره تلاش می‌کنیم با بهبود خدمات، تنوع بیشتر کالاها و احترام به حقوق مشتری، تجربه‌ای بی‌نقص از خرید آنلاین ارائه دهیم.

                            با ما همراه باشید و با خیالی آسوده خرید کنید؛ رضایت شما، هدف و افتخار ماست.
                        </p>
                    </div>

                    {/* --- Values --- */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold p-2  text-white mb-8">ارزش‌های ما</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="p-6 rounded-xl bg-stone-900 border border-stone-700 shadow-md hover:shadow-lg transition-shadow">
                                <h4 className="text-white font-semibold mb-3 text-lg">کیفیت</h4>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    ما محصولاتی ارائه می‌دهیم که خودمان از آن‌ها اطمینان داریم.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl bg-stone-900 border border-stone-700 shadow-md hover:shadow-lg transition-shadow">
                                <h4 className="text-white font-semibold mb-3 text-lg">مشتری‌مداری</h4>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    رضایت شما مهم‌ترین دستاورد ماست.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl bg-stone-900 border border-stone-700 shadow-md hover:shadow-lg transition-shadow">
                                <h4 className="text-white font-semibold mb-3 text-lg">شفافیت</h4>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    همه چیز روشن، دقیق و بدون هزینه‌های پنهان است.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* --- Team Section --- */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-10">تیم ما</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

                            <div className="p-6 bg-stone-900 rounded-xl border border-stone-700 shadow-md hover:shadow-xl transition">
                                <div className="w-24 h-24 bg-stone-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-200">
                                    ع
                                </div>
                                <h4 className="text-white font-semibold text-lg">علی رضایی</h4>
                                <p className="text-yellow-400 text-sm mt-1">مدیرعامل</p>
                            </div>

                            <div className="p-6 bg-stone-900 rounded-xl border border-stone-700 shadow-md hover:shadow-xl transition">
                                <div className="w-24 h-24 bg-stone-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-200">
                                    س
                                </div>
                                <h4 className="text-white font-semibold text-lg">سارا موسوی</h4>
                                <p className="text-yellow-400 text-sm mt-1">طراح ارشد</p>
                            </div>

                            <div className="p-6 bg-stone-900 rounded-xl border border-stone-700 shadow-md hover:shadow-xl transition">
                                <div className="w-24 h-24 bg-stone-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-200">
                                    م
                                </div>
                                <h4 className="text-white font-semibold text-lg">مهدی کاظمی</h4>
                                <p className="text-yellow-400 text-sm mt-1">توسعه‌دهنده</p>
                            </div>

                        </div>
                    </div>

                    {/* --- CTA --- */}
                    <div className="bg-yellow-400 mt-4 pt-4 p-8 rounded-2xl shadow-lg text-center">
                        <h3 className="text-stone-900 font-extrabold text-xl mb-2">مایل به همکاری هستید؟</h3>
                        <p className="text-stone-900 mb-4 text-sm">
                            خوشحال می‌شویم پیام شما را در صفحه تماس با ما دریافت کنیم
                        </p>
                        <button className="bg-stone-900 text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-stone-800 p-4  transition">
                            تماس با ما
                        </button>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}
