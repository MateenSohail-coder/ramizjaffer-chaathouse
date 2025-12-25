"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppContext from "../Context/context";
// At the top of Components/Navbar.js
import { ShoppingCart, ChevronRight, Menu, X } from "lucide-react";
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
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.button
            onClick={toggleCart}
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 100, x: "-50%", opacity: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] 
                 flex items-center gap-3 bg-slate-900/90 backdrop-blur-xl 
                 text-white p-2 pl-5 pr-2 rounded-[2.5rem] 
                 shadow-[0_20px_50px_rgba(0,0,0,0.4)] 
                 border border-white/10 overflow-hidden 
                 md:left-auto md:right-10 md:translate-x-0 md:bottom-10 md:p-4 md:px-6"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingCart
                  size={24}
                  strokeWidth={2.5}
                  className="text-orange-500"
                />
                <motion.span
                  key={cart.length}
                  initial={{ scale: 1.5, rotate: 15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] 
                       font-black h-5 w-5 rounded-full flex items-center justify-center 
                       border-2 border-slate-900 shadow-lg"
                >
                  {cart.length}
                </motion.span>
              </div>

              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter md:hidden">
                  Basket
                </span>
                <span className="hidden md:block font-extralight sigmar tracking-tight text-sm">
                  My Basket
                </span>
                <span className="font-black text-orange-500 sigmar text-sm md:text-base">
                  Rs.{" "}
                  {cart.reduce(
                    (t, i) => t + parseInt(i.price.replace(/[^\d]/g, "")),
                    0
                  )}
                </span>
              </div>
            </div>

            {/* This is the part that caused the error - ensured it's imported now! */}
            <div className="bg-orange-500 p-3 rounded-full ml-2 shadow-inner">
              <ChevronRight size={20} strokeWidth={3} className="text-white" />
            </div>

            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
                repeatDelay: 1,
              }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
