// Header - the site's header, containing a logo and the cart
'use client';

import CartIcon from '@/public/icons/cart.svg';
import Logo from '@/public/icons/cyclone.svg';
import { useState } from 'react';
import Cart from './cart';
import Link from 'next/link';

export default function Header() {
    const [cartOpen, setCartOpen] = useState(false);
    
    function toggleCartOpen() {
        setCartOpen(!cartOpen);
    }

    return (
    <header className="fixed z-50 top-0 w-full bg-gray-950 text-slate-400 fill-slate-400 border-b border-slate-400">
        <div className="h-14 grid grid-cols-[repeat(6, 1fr)] items-center max-w-[1640px] mx-auto">
            <Link href="/" className="flex flex-nowrap items-center gap-x-2 text-lg no-underline text-slate-400 hover:text-slate-400"><Logo width="32" height="32"></Logo><span>React Games</span></Link>
            <div className="relative col-start-6 justify-self-end">
                <button onClick={toggleCartOpen}><CartIcon width="32" height="32" /></button>
                { cartOpen && (
                    <div className="absolute right-0 top-full rounded bg-gray-950 outline outline-2 outline-slate-400 w-max p-2">
                        <Cart></Cart>
                    </div>
                )}
            </div>
        </div>
    </header>
    )
}