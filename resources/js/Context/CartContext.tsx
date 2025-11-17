import React, { createContext, useContext, useState } from "react";

// نوع محصول
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity:number
}

// نوع اطلاعاتی که می‌خوای در Context داشته باشی
interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
}

// ساخت Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider برای پوشش کل برنامه
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // تابع افزودن محصول
  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// تابع کمکی برای استفاده راحت‌تر
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart باید داخل CartProvider استفاده شود");
  return context;
};
