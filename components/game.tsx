"use client";

import Screenshots from "@/components/screenshots";
import Keyboard from "@/public/icons/keyboard.svg";
import Controller from "@/public/icons/controller.svg";
import { formatDate } from "@/util/helpers";
import { useContext, useState } from "react";
import { CartContext } from "@/components/cart/cartProvider";

import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Toast from "react-bootstrap/Toast";
import { ToastContainer } from "react-bootstrap";

export default function Game({ game, id }) {
  // We use context here to simplify a shared cart state across different pages and components
  const { cart, setCart } = useContext(CartContext) as {
    cart: any;
    setCart: (cart: string[]) => void;
  };
  const [showToast, setShowToast] = useState(false);

  // When adding an item to the cart, push it to the context provider's state
  function addToCart() {
    if (!(cart as string[]).includes(id)) {
      setCart([...cart, id]);
      setShowToast(true);
    }
  }

  return (
    <div className="mx-auto w-full max-w-[1640px] mt-14">
      <h1 className="mb-4">{game.title}</h1>
      <div className="flex flex-nowrap gap-x-4">
        <div className="min-w-[1080px]">
          <Screenshots screenshots={game.screenshots} />
        </div>
        <section className="flex flex-col flex-nowrap items-center gap-y-8">
          <div className="bg-gray-950 rounded-lg p-8 h-max">
            <div className="border-b border-slate-400 pb-4">
              {game.description}
            </div>
            <div className="flex flex-nowrap gap-x-4 text-slate-400 fill-slate-400 my-4">
              {game.controller && <Controller width="48" height="48" />}
              <Keyboard width="48" height="48" />
            </div>
            {game.release && <div>Released: {formatDate(game.release)}</div>}
            {game.developer && <div>Developer: {game.developer}</div>}
            {game.publisher && <div>Publisher: {game.publisher}</div>}
          </div>
          <div className="flex flex-nowrap items-center gap-x-8">
            <div className="text-xl flex flex-col flex-nowrap">
              {game.discountPercent && (
                <span className="text-green-600">
                  %{game.discountPercent} off
                </span>
              )}
              <span>{game.price ? `$${game.price}` : ""}</span>
            </div>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="Reminder">
                  You won&apos;t actually be asked to buy anything or provide
                  any info
                </Tooltip>
              }
            >
              <button
                disabled={cart.includes(id)}
                className="w-fit rounded bg-gray-950 border border-slate-400 px-8 py-4 text-xl"
                onClick={addToCart}
              >
                {cart.includes(id) ? "Already in cart" : "Add to cart"}
              </button>
            </OverlayTrigger>
          </div>
        </section>
      </div>
      <ToastContainer position="bottom-center" className="position-fixed mb-8">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={2500}
          autohide
          bg="success"
          className="!text-gray-950 !text-lg"
        >
          <Toast.Body>Added to Cart</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
