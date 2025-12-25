"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppContext from "../Context/context";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { cart, toggleCart } = useContext(AppContext);

  return (
    <>
      <nav className="p-5 flex justify-center">
        <motion.div
          className="logo flex items-center gap-1 text-3xl md:text-4xl text-amber-950 border-2 border-amber-950 px-4 py-2 md:px-5 md:py-3 rounded-full"
          animate={{
            y: [0, -8, 0],
            rotate: [0, 1.5, -1.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* STATIC IMAGE (no animation) */}
          <div className="sm:h-20 sm:w-30 h-17 w-25 relative">
            <Image src="/rmlogo.png" alt="logo" fill />
          </div>

          {/* TEXT STILL ANIMATES */}
          <motion.div
            className="sigmar tracking-tighter"
            animate={{ opacity: [0.85, 1, 0.85] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Chaat House
          </motion.div>
        </motion.div>
      </nav>

      {/* Fixed Cart Icon */}
      {cart.length > 0 && (
        <motion.button
          onClick={toggleCart}
          initial={{ scale: 0, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-6 md:right-10 z-50 flex items-center gap-3 bg-slate-900 text-white p-4 md:px-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/10 backdrop-blur-md overflow-hidden"
        >
          {/* Shimmer Effect overlay */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full hover:animate-[shimmer_2s_infinite]" />

          <div className="relative">
            <ShoppingCart
              size={28}
              strokeWidth={2.5}
              className="text-orange-500"
            />

            <AnimatePresence>
              {cart.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-black h-6 w-6 rounded-full flex items-center justify-center border-2 border-slate-900 shadow-lg"
                >
                  {/* Subtle pulse for the badge */}
                  <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-25"></span>
                  {cart.length}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <span className="hidden md:block font-extralight sigmar tracking-tight text-sm">
            My Basket
          </span>

          {/* Only show total price on button if cart is not empty (Optional) */}
          {cart.length > 0 && (
            <div className="hidden md:block h-4 w-[1px] bg-white/20 mx-1" />
          )}

          {cart.length > 0 && (
            <span className="hidden md:block font-black text-orange-500 sigmar">
              Rs.{" "}
              {cart.reduce(
                (total, item) =>
                  total + parseInt(item.price.replace(/[^\d]/g, "")),
                0
              )}
            </span>
          )}
        </motion.button>
      )}
    </>
  );
}
