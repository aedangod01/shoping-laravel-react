import React from 'react'
import ImageItem from '../../asssets/Img/pexels-max-fischer-5868120.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from './ProductCard';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity : number

    // اگر فیلدهای بیشتری در دیتابیس داری اضافه کن
};
// interface ProductSliderProps {
//   items: Product[]
// }
interface ProductSliderProps {
  items: Product[];
}
export default function ProductSlider({ items  }: ProductSliderProps) {
  return (
    <Swiper
      spaceBetween={50}
      breakpoints={{
        // وقتی صفحه 640px یا بزرگتر باشد
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // وقتی صفحه 768px یا بزرگتر باشد
        768: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        // وقتی صفحه 1024px یا بزرگتر باشد
        1024: {
          slidesPerView: 5,
          spaceBetween: 50
        }
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <ProductCard
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
          />
        </SwiperSlide>

      ))}
    </Swiper>
  );
};
