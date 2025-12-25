"use client";
import React from "react";
import Card from "./Cards"; // Fixed import name
import { motion } from "framer-motion";
import { Bean, Leaf, Salad, Carrot, Apple, Soup } from "lucide-react";

// Updated card data with MULTIPLE PRICES! 🍽️💰
const cardData = [
  {
    title: "Chana Chaat",
    des: "Tangy chickpeas with onions, tomatoes, yogurt & imli chutney. Street food perfection!",
    src: "/Chaat.jpg",
    alt: "Chana Chaat",
    prices: [
      { label: "Regular", value: "Rs. 150" },
      { label: "With Papdi", value: "Rs. 170" },
    ],
    originalPrices: ["Rs. 170", "Rs. 200"],
    discount: "10%",
    color: "#f97316",
    type: "premium",
  },
  {
    title: "Dahi Bhalla",
    des: "Crispy bhallas drowning in chilled yogurt with sweet & spicy chutneys!",
    src: "/dahibhala.jpg",
    alt: "Dahi Bhalla",
    prices: [
      { label: "Regular", value: "Rs. 150" },
      { label: "With Papdi", value: "Rs. 170" },
    ],
    originalPrices: ["Rs. 170", "Rs. 200"],
    discount: "10%",
    color: "#3b82f6",
    type: "signature",
  },
  {
    title: "Potato Sticks",
    des: "Ultra-crispy fries with chaat masala magic & chutney dip! Crunch heaven! ",
    src: "/potato.jpg",
    alt: "Potato Sticks",
    prices: [
      { label: "Small", value: "Rs. 170" },
      { label: "Large", value: "Rs. 240" },
    ],
    originalPrices: ["Rs. 210", "Rs. 290"],
    color: "#10b981",
  },
  {
    title: "Cool Drinks",
    des: "Ice-cold Pepsi, 7Up, Mirinda or juices to wash down the chaat feast! ",
    src: "/drink.jpg",
    alt: "Cool Drinks",
    prices: [
      { label: "Regular", value: "Rs. 60" },
      { label: "0.5 L Bottle", value: "Rs. 120" },
    ],
    color: "#ec4899",
  },
  {
    title: "Juices",
    des: "Fresh mango, orange, or mixed fruit juices to quench your thirst! ",
    src: "/juice.jpg",
    alt: "Juices",
    prices: [{ label: "Regular", value: "Rs. 60" }],
    originalPrices: ["Rs. 80"],
    discount: "10%",
    type: "premium",
    color: "#8b5cf6",
  },
];

export default function Items() {
  return (
    <section id="menu" className="w-full py-24 px-2 md:px-8 lg:px-16 relative">
      {/* FLOATING FOOD ICONS */}
      <motion.div
        className="absolute bottom-70 left-10 text-amber-700 opacity-25"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Bean size={32} />
      </motion.div>

      <motion.div
        className="absolute bottom-100 right-16 text-amber-600 opacity-25"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Salad size={36} />
      </motion.div>

      <motion.div
        className="absolute top-90 left-1/5 text-green-700 opacity-25"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf size={30} />
      </motion.div>

      <motion.div
        className="absolute bottom-80 right-1/4 text-orange-600 opacity-25"
        animate={{ y: [0, -18, 0], rotate: [0, 12, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Carrot size={36} />
      </motion.div>

      <motion.div
        className="absolute top-70 right-12 text-red-600 opacity-25"
        animate={{ y: [0, 25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Soup size={32} />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-1/3 text-purple-600 opacity-25"
        animate={{ y: [0, -28, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Bean size={28} />
      </motion.div>

      <motion.div
        className="absolute top-20 left-1/2 text-amber-800 opacity-25"
        animate={{ y: [0, 20, 0], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Soup size={36} />
      </motion.div>

      <motion.div
        className="absolute bottom-90 right-1/2 text-red-500 opacity-25"
        animate={{ y: [0, -24, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Apple size={30} />
      </motion.div>

      <motion.div
        className="absolute top-18 right-1/4 text-green-600 opacity-25"
        animate={{ y: [0, 22, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf size={28} />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-1/2 text-orange-700 opacity-25"
        animate={{ y: [0, -20, 0], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Carrot size={34} />
      </motion.div>
      {/* FOODY HERO HEADER 🍛✨ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-24 text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            rotate: [-1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-block mb-8"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl pb-3 sigmar font-black bg-gradient-to-r from-gray-900 via-orange-600/80 to-amber-600 bg-clip-text text-transparent mb-8 drop-shadow-2xl leading-none">
            CHAAT CRAZE
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-xl lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-semibold tracking-wide"
        >
          Lahore's spiciest street food! Fresh daily, made with ❤️.
          <span className="block text-amber-600 font-black text-xs md:text-sm mt-4">
            Tap size → Order via WhatsApp! 📱
          </span>
        </motion.p>
      </motion.div>

      {/* RESPONSIVE CARDS GRID - PERFECT LAYOUT! 🎉 */}
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-10 px-4">
        {cardData.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 60, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.15,
            }}
            whileHover={{ y: -10 }}
          >
            <Card
              title={card.title}
              des={card.des}
              src={card.src}
              alt={card.alt}
              prices={card.prices}
              originalPrices={card.originalPrices}
              discount={card.discount}
              color={card.color}
              type={card.type}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
