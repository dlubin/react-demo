// Cart - The shopping cart located in the site header
"use client";

import React, { useContext, useState } from "react";
import { CartContext } from "./cartProvider";
import items from "../../public/items";
import { Toast, ToastContainer } from "react-bootstrap";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext) as {
    cart: any;
    setCart: (cart: string[]) => void;
  };
  const [showToast, setShowToast] = useState(false);

  if (cart.length > 0) {
    return (
      <section className="flex flex-col flex-nowrap gap-y-2">
        <ul className="list-none pl-0 border-b border-slate-400 pb-2 mb-0">
          {cart.map((id, index) => (
            <li key={index}>{items.games[id].title}</li>
          ))}
        </ul>
        <span>
          Subtotal: $
          {cart
            .reduce(
              (acc, current) => acc + parseFloat(items.games[current].price),
              0
            )
            .toFixed(2)}
        </span>
        <button
          className="rounded p-2 bg-yellow-600 text-slate-900"
          onClick={() => setShowToast(true)}
        >
          Checkout
        </button>
        <ToastContainer position="bottom-center" className="position-fixed">
          <Toast
            onClose={() => setShowToast(false)}
            show={showToast}
            bg="info"
            className="!text-gray-950 !text-md"
          >
            <Toast.Header className="justify-between">
              This is just a demo!
            </Toast.Header>
            <Toast.Body>You cannot complete this purchase</Toast.Body>
          </Toast>
        </ToastContainer>
      </section>
    );
  }
  return <section> Your cart is empty </section>;
}
