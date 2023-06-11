// Header - the site's header, containing a logo and the cart
'use client';

import Cart from '@/public/icons/cart.svg';
import { useState } from 'react';

export default function Header() {
    const [cartOpen, setCartOpen] = useState(false);
    
    function toggleCartOpen() {
        setCartOpen(!cartOpen);
    }

    return (
    <header className="fixed z-50 top-0 w-full px-12 h-14 grid grid-cols-6 items-center justify-items-end bg-gray-950 text-slate-400 border-b border-slate-400">
        <button onClick={toggleCartOpen} className="col-start-6 text-slate-400 fill-slate-400"><Cart width="32" height="32" /></button>
    </header>
    )
}