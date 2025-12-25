"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AppContext from "../Context/context";
import { Plus } from "lucide-react";

export default function Card({
  title,
  des,
  src,
  alt,
  prices = [
    { label: "Regular", value: "Rs. 1299" },
    { label: "Large", value: "Rs. 1599" },
  ],
  originalPrices = ["Rs. 1699", "Rs. 1999"],
  color = "#f59e0b",
  discount = "20%",
  type = null,
}) {
  const [selectedPriceIndex, setSelectedPriceIndex] = useState(0);
  const { addToCart } = useContext(AppContext);

  const handleOrder = () => {
    const selectedPrice = prices[selectedPriceIndex];
    const item = {
      title,
      price: selectedPrice.value,
      label: selectedPrice.label,
      quantity: 1,
    };
    addToCart(item);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="group relative w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 active:scale-[0.98] transition-transform duration-200"
      style={{ border: `4px solid ${color}70` }}
    >
      {/* Badge - Simplified for Mobile */}
      {type && (
        <div
          className="absolute top-3 left-1/2 sigmar -translate-x-1/2 z-30 px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-white shadow-lg"
          style={{ backgroundColor: color }}
        >
          {type === "premium" ? "Premium" : "Signature"}
        </div>
      )}

      {/* Image Container - Fixed Aspect Ratio for stability */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {discount && (
          <div
            className="absolute top-3 left-3 z-30 px-3 py-1 rounded-lg text-xs font-bold text-white shadow-md"
            style={{ backgroundColor: color }}
          >
            {discount} OFF
          </div>
        )}

        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Quick Add Overlay - Only visible on Hover (Desktop) or via Button (Mobile) */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center">
          <button className="bg-white text-black px-6 py-2 rounded-full font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Quick Add +
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-extralight sigmar text-gray-900 line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2 mt-1 font-medium">
            {des}
          </p>
        </div>

        {/* Price Selector - Mobile Optimized Tabs */}
        <div className="flex gap-2 p-1 bg-gray-50 rounded-xl">
          {prices.map((priceItem, index) => (
            <button
              key={index}
              onClick={() => setSelectedPriceIndex(index)}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                selectedPriceIndex === index
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              style={{
                border:
                  selectedPriceIndex === index
                    ? `1px solid ${color}40`
                    : "1px solid transparent",
              }}
            >
              {priceItem.label}
            </button>
          ))}
        </div>

        {/* Pricing & CTA */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col sigmar">
            <span className="text-2xl font-black text-gray-900 leading-none ">
              {prices[selectedPriceIndex]?.value}
            </span>
            {originalPrices[selectedPriceIndex] && (
              <span className="text-xs text-gray-400 line-through">
                {originalPrices[selectedPriceIndex]}
              </span>
            )}
          </div>

          <motion.button
            onClick={handleOrder}
            whileTap={{ scale: 0.95 }}
            className="flex-1 max-w-[160px] py-3 px-4 rounded-xl text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: color }}
          >
            <span>Order</span>
            <Plus size={16} strokeWidth={2} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
