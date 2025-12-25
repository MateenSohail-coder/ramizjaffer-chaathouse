"use client";

import React, { useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShoppingBag,
  Trash2,
  MessageCircle,
  ChevronRight,
  Zap,
} from "lucide-react";
import AppContext from "../Context/context";

export default function Cart() {
  const { cart, isCartOpen, toggleCart, removeFromCart, clearCart } =
    useContext(AppContext);

  // 🔊 Persistent Audio (Mobile Safe)
  const clickSoundRef = useRef(null);
  const purchaseSoundRef = useRef(null);

  if (typeof window !== "undefined") {
    if (!clickSoundRef.current) clickSoundRef.current = new Audio("/Order.mp3");

    if (!purchaseSoundRef.current)
      purchaseSoundRef.current = new Audio("/Checkout.mpeg");
  }

  const totalPrice = cart.reduce((total, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ""));
    return total + price;
  }, 0);

  const handleOrder = () => {
    purchaseSoundRef.current?.play();

    const message = cart
      .map((item) => `*${item.title}*\n${item.label} → ${item.price}`)
      .join("\n\n");

    const fullMessage = `✨ *New Order Request* ✨

${message}

━━━━━━━━━━━━━━
💰 *Total: Rs. ${totalPrice}*
━━━━━━━━━━━━━━

Please confirm my order 🙌`;

    const whatsappUrl = `https://wa.me/923700959829?text=${encodeURIComponent(
      fullMessage
    )}`;

    window.open(whatsappUrl, "_blank");
    clearCart();
    toggleCart();
  };

  const handleRemove = (index) => {
    clickSoundRef.current?.play();
    removeFromCart(index);
  };

  const handleClose = () => {
    clickSoundRef.current?.play();
    toggleCart();
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={handleClose}
            className=" fixed inset-0 z-[100] bg-black/40 md:bg-black/30 backdrop-blur-xs backdrop-saturate-100"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "tween",
              duration: 0.32,
              ease: "easeOut",
            }}
            className="
              fixed bottom-0 left-0 right-0 z-[101] cartbg flex flex-col
              h-[85vh] rounded-t-[2.5rem] overflow-hidden
              md:top-0 md:right-0 md:left-auto md:h-screen md:w-[420px]
              md:rounded-l-[2rem] md:rounded-tr-none
              shadow-xl md:shadow-[-20px_0_50px_rgba(0,0,0,0.15)]
            "
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-br from-orange-50 to-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <ShoppingBag size={22} />
                  </div>
                  <div>
                    <h2 className="text-xl text-slate-800 sigmar">Your Cart</h2>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-orange-600 uppercase">
                      <Zap size={10} fill="currentColor" /> Express
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-14 h-14 text-slate-200 mb-3" />
                  <p className="text-slate-500">Your cart is empty</p>
                </div>
              ) : (
                cart.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-3xl"
                  >
                    <div className="w-14 h-14 bg-slate-50 sigmar rounded-2xl flex items-center justify-center text-orange-400 font-bold">
                      {item.title.charAt(0)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-extralight text-slate-800 truncate sigmar">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400">{item.label}</p>
                      <p className="text-sm font-bold text-orange-500">
                        {item.price}
                      </p>
                    </div>

                    <button
                      onClick={() => handleRemove(index)}
                      className="p-2 text-slate-300 hover:text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 bg-white border-t-4 border-slate-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-slate-600">Total</span>
                  <span className="text-2xl font-black sigmar text-slate-900">
                    Rs. {totalPrice}
                  </span>
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={handleOrder}
                  className="w-full bg-slate-900 text-white py-4 rounded-[2rem]
                             sigmar text-lg shadow-xl flex items-center
                             justify-center gap-3"
                >
                  <MessageCircle size={20} />
                  Checkout via WhatsApp
                  <ChevronRight size={18} />
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
