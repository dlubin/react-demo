// Cart - The shopping cart located in the site header
'use client';

import React, { useContext } from 'react';
import { CartContext } from './cartProvider';

export default function Cart() {
    const { cart, setCart } = useContext(CartContext) as { cart: any, setCart: (cart: string[]) => void};

    return (
    <section>
        { cart.map((id, index) =>(
            <div>{ id }</div>
        ))}
    </section>
    )
}