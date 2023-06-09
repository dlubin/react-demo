// CartProvider - supplies shopping cart context to the header and "add to cart" buttons

'use client'

import { createContext, useState } from 'react';

//@ts-ignore
export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const value = { cart, setCart };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}