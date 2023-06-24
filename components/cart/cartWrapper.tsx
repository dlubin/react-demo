"use client";

import { useState } from "react";
import CartIcon from "@/public/icons/cart.svg";
import Cart from "./cart";

export default function HeaderWrapper() {
  const [cartOpen, setCartOpen] = useState(false);

  function toggleCartOpen() {
    setCartOpen(!cartOpen);
  }

  return (
    <div className="relative col-start-10 justify-self-end">
      <button onClick={toggleCartOpen}>
        <CartIcon width="32" height="32" />
      </button>
      {cartOpen && (
        <div className="absolute right-0 top-full rounded bg-gray-950 outline outline-2 outline-slate-400 w-max p-2">
          <Cart></Cart>
        </div>
      )}
    </div>
  );
}
