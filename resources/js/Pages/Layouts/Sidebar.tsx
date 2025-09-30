import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HeroPNG from '../../asssets/Img/pexels-max-fischer-5868120.png'

export default function Sidebar() {
    const swiperRef = useRef(null)

    return (
        <section className="relative overflow-hidden">
            <div id="slider" className="relative h-96 md:h-[500px]">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    className='slider-item absolute inset-0 w-full h-full flex items-center bg-gradient-to-l from-stone-700 to-stone-800'

                >
                    <SwiperSlide>
                        <div className="slider-item absolute inset-0 w-full h-full flex items-center bg-gradient-to-l from-stone-700 to-stone-800">
                            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 text-white text-center md:text-right mb-8 md:mb-0">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-4">تخفیف ویژه تابستانه</h2>
                                    <p className="text-lg md:text-xl mb-6">تا 50% تخفیف روی محصولات منتخب</p>
                                    <button className="bg-yellow-400 text-stone-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">همین حالا خرید کنید</button>
                                </div>
                                <div className="md:w-1/2 flex justify-center">
                                    <img src={HeroPNG} alt="تخفیف تابستانه" className="rounded-lg top-2 shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slider-item absolute inset-0 w-full h-full flex items-center bg-gradient-to-l from-stone-700 to-stone-800">
                            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 text-white text-center md:text-right mb-8 md:mb-0">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-4">تخفیف ویژه تابستانه</h2>
                                    <p className="text-lg md:text-xl mb-6">تا 50% تخفیف روی محصولات منتخب</p>
                                    <button className="bg-yellow-400 text-stone-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">همین حالا خرید کنید</button>
                                </div>
                                <div className="md:w-1/2 flex justify-center">
                                    <img src={HeroPNG} alt="تخفیف تابستانه" className="rounded-lg top-2 shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>

                {/* دکمه‌های next/prev بیرون از Swiper */}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 text-gray-800 p-2 rounded-full hover:bg-opacity-100 transition z-10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                    </svg>
                </button>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 text-gray-800 p-2 rounded-full hover:bg-opacity-100 transition z-10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                    </svg>
                </button>

            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse">
                <button className="slider-dot w-3 h-3 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition slider-dot-active"></button>
                <button className="slider-dot w-3 h-3 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition"></button>
                <button className="slider-dot w-3 h-3 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition"></button>
            </div>
        </section>
    )
}