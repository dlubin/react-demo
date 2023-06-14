// Header - the site's header, containing a logo and the cart
'use client';

import CartIcon from '@/public/icons/cart.svg';
import { useState } from 'react';
import Cart from './cart';

export default function Header() {
    const [cartOpen, setCartOpen] = useState(false);
    
    function toggleCartOpen() {
        setCartOpen(!cartOpen);
    }

    return (
    <header className="fixed z-50 top-0 w-full px-12 h-14 grid grid-cols-6 items-center justify-items-end bg-gray-950 text-slate-400 border-b border-slate-400">
        <div className="relative col-start-6">
            <button onClick={toggleCartOpen} className="text-slate-400 fill-slate-400"><CartIcon width="32" height="32" /></button>
            { cartOpen && (
                <div className="absolute right-0 top-full rounded bg-gray-950 outline outline-2 outline-slate-400 w-max p-2">
                    <Cart></Cart>
                </div>
            )}
        </div>
    </header>
    )
}