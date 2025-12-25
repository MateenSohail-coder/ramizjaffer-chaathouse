"use client";
import React, { useContext } from "react";
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

  const totalPrice = cart.reduce((total, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ""));
    return total + price;
  }, 0);

  const handleOrder = () => {
    const message = cart
      .map((item) => `*${item.title}*\n   ${item.label} → ${item.price}`)
      .join("\n\n");

    const fullMessage = `✨ *New Order Request* ✨\n\n${message}\n\n━━━━━━━━━━━━━━\n💰 *Total Amount: Rs. ${totalPrice}*\n━━━━━━━━━━━━━━\n\nPlease confirm my order! 🍔`;
    const whatsappUrl = `https://wa.me/03700959829?text=${encodeURIComponent(
      fullMessage
    )}`;

    window.open(whatsappUrl, "_blank");
    clearCart();
    toggleCart();
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Elite Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
          />

          {/* Premium Panel */}
          <motion.div
            initial={{ y: "100%", x: "0%" }}
            animate={{ y: 0, x: 0 }}
            exit={{ y: "100%", x: "0%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 md:top-0 md:left-auto md:w-[450px] 
                       bg-white z-[101] flex flex-col rounded-t-[2.5rem] md:rounded-l-[2rem] md:rounded-tr-none
                       h-[85vh] md:h-screen shadow-[-20px_0_50px_rgba(0,0,0,0.15)] overflow-hidden"
          >
            {/* Glossy Header Area */}
            <div className="relative p-6 pb-8 bg-gradient-to-br from-orange-50 to-white overflow-hidden">
              {/* Decorative Blur Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-200/40 rounded-full blur-3xl" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200 text-white">
                    <ShoppingBag size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extralight text-slate-800 sigmar">
                      Your Orders
                    </h2>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-orange-600 uppercase tracking-widest">
                      <Zap size={10} fill="currentColor" /> Express Delivery
                    </span>
                  </div>
                </div>
                <button
                  onClick={toggleCart}
                  className="p-3 bg-slate-100 hover:bg-slate-200 rounded-full transition-all text-slate-500 active:scale-90"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Main Content List */}
            <div className="flex-1 overflow-y-auto px-6 py-2 space-y-4 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                  <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-12 h-12 text-slate-200" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    Your bag is empty
                  </h3>
                  <p className="text-slate-400 text-sm max-w-[200px] mt-1">
                    Looks like you haven't added anything yet!
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-3xl hover:border-orange-200 hover:shadow-md transition-all"
                    >
                      {/* Placeholder for item image if needed, or colored initials */}
                      <div className="w-16 h-16 bg-slate-50 rounded-2xl overflow-hidden flex-shrink-0">
                        <div className="w-full h-full flex items-center justify-center text-orange-300 font-bold">
                          {item.title.charAt(0)}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-extralight text-slate-800 truncate sigmar">
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold text-slate-400">
                          {item.label}
                        </p>
                        <p className="text-base font-black text-orange-500 mt-0.5 sigmar">
                          {item.price}
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(index)}
                        className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Floating Checkout Section */}
            {cart.length > 0 && (
              <div className="p-8 bg-white border-t border-slate-50">
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center text-slate-400 text-sm font-medium">
                    <span>Subtotal</span>
                    <span>Rs. {totalPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400 text-sm font-medium">
                    <span>Delivery Fee</span>
                    <span className="text-green-500 font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                    <span className="text-lg font-bold text-slate-800">
                      Total
                    </span>
                    <span className="text-3xl font-black text-slate-900 tracking-tight sigmar">
                      <span className="text-sm font-bold text-orange-500 mr-1">
                        Rs.
                      </span>
                      {totalPrice}
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleOrder}
                  className="w-full relative group bg-slate-900 text-white py-5 rounded-[2rem] font-bold text-lg 
                             shadow-2xl shadow-slate-200 overflow-hidden transition-all hover:bg-slate-800"
                >
                  <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-1000" />

                  <div className="flex items-center justify-center gap-3">
                    <MessageCircle
                      size={22}
                      fill="white"
                      className="text-slate-900"
                    />
                    <span className="sigmar font-extralight">
                      Checkout via WhatsApp
                    </span>
                    <ChevronRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </motion.button>

                <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  Orders are processed instantly
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
