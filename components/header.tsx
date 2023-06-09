// Header - the site's header, containing a logo and the cart

import Cart from '@/public/icons/cart.svg';

export default function Header() {
    return (
    <header className="fixed z-50 top-0 w-full px-12 h-14 grid grid-cols-6 items-center justify-items-end bg-gray-950 text-slate-400 border-b border-slate-400">
        <button className="col-start-6 text-slate-400 fill-slate-400"><Cart width="32" height="32" /></button>
    </header>
    )
}