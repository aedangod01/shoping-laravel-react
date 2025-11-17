import React, { useState, useRef, useEffect } from "react";
import { useCart } from "../../Context/CartContext";
import NavLink from "../Core/NavLink";

export default function CartHoverMenu() {
    const [open, setOpen] = useState(false); // آیا منو باز است؟
    const timeoutRef = useRef(null); // برای تاخیر در بستن منو
    const menuRef = useRef(null); // برای تشخیص کلیک بیرون از منو
    const { cartItems } = useCart();

    const openMenu = () => {
        clearTimeout(timeoutRef.current);
        setOpen(true);
    };

    const closeMenu = (delay = 150) => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setOpen(false), delay);
    };
    return (
        <div className="hidden md:block">

            <div ref={menuRef}>
                <NavLink
                    href={route('checkout/cart')}
                    active={route().current('checkout/cart')}
                >
                     <button onMouseEnter={openMenu} onMouseLeave={closeMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                    </svg>
                </button>
                </NavLink>
               
                {open && (
                    <div
                        onMouseEnter={openMenu}
                        onMouseLeave={closeMenu}
                        style={{
                            position: "absolute",
                            top: "70px",
                            right: "80vhs",
                            width: "300px",
                            background: "white",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                            padding: "10px",
                            background: "#292524",
                        }}
                    >
                        <p className="font-bold p-4">🛒 محصولات در سبد:</p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {cartItems.map((item) => (
                                <li key={item.id} className="border-b py-2">
                                    {item.name} - {item.price} تومان × {item.quantity}
                                </li>
                            ))}

                            <li className="p-2 text-yellow-400">مجموع قیمت €9.99</li>
                            <li className="">جهت رفتن به سبد خرید روی آیکن کلیک کنید</li>
                        </ul>
                    </div>
                )}


            </div>
        </div>
    );
}