import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-stone-800 text-white py-12">
            <div className="container mx-auto px-4">
                {/* بخش بالایی فوتر */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* درباره ما */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-yellow-400 mb-4">درباره ما</h3>
                        <p className="text-gray-300 leading-relaxed">
                            ما با ارائه بهترین محصولات با کیفیت و قیمت مناسب، 
                            در خدمت شما مشتریان عزیز هستیم. 
                            تضمین کیفیت و رضایت شما اولویت اصلی ماست.
                        </p>
                        <div className="flex space-x-4 space-x-reverse">
                            <a href="#" className="text-gray-300 hover:text-yellow-400 transition">
                                <i className="fab fa-telegram text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-yellow-400 transition">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-yellow-400 transition">
                                <i className="fab fa-whatsapp text-xl"></i>
                            </a>
                        </div>
                    </div>

                    {/* لینک های سریع */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-yellow-400 mb-4">لینک های سریع</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition">
                                    صفحه اصلی
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-gray-300 hover:text-yellow-400 transition">
                                    محصولات
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition">
                                    درباره ما
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition">
                                    تماس با ما
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* دسته بندی محصولات */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-yellow-400 mb-4">دسته بندی ها</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/category/electronics" className="text-gray-300 hover:text-yellow-400 transition">
                                    لوازم الکترونیکی
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/fashion" className="text-gray-300 hover:text-yellow-400 transition">
                                    پوشاک
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/accessories" className="text-gray-300 hover:text-yellow-400 transition">
                                    اکسسوری
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/special" className="text-gray-300 hover:text-yellow-400 transition">
                                    محصولات ویژه
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* اطلاعات تماس */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-yellow-400 mb-4">تماس با ما</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2 space-x-reverse">
                                <i className="fas fa-phone text-yellow-400"></i>
                                <span className="text-gray-300">۰۲۱-۱۲۳۴۵۶۷۸</span>
                            </div>
                            <div className="flex items-center space-x-2 space-x-reverse">
                                <i className="fas fa-envelope text-yellow-400"></i>
                                <span className="text-gray-300">info@example.com</span>
                            </div>
                            <div className="flex items-center space-x-2 space-x-reverse">
                                <i className="fas fa-map-marker-alt text-yellow-400"></i>
                                <span className="text-gray-300">تهران، خیابان نمونه</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* خط جداکننده */}
                <div className="border-t border-stone-600 my-8"></div>

                {/* بخش پایینی فوتر */}
                <div className="flex flex-col md:flex-row justify-center  items-center space-y-4 md:space-y-0">
                    <div className="text-center md:text-right">
                        <p className="text-gray-300">
                            ©<span className='text-yellow-500'> ۲۰۲۴ </span> فروشگاه آنلاین. تمام حقوق محفوظ است.
                        </p>
                    </div>
                   
                </div>
            </div>
        </footer>
    );
}