"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Bean, Leaf, Salad, Carrot, Apple, Soup } from "lucide-react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { ArrowBigDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-16 md:px-16 md:py-24">
      {/* FLOATING FOOD ICONS */}
      <motion.div
        className="absolute top-16 left-10 text-amber-700 opacity-25"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Bean size={32} />
      </motion.div>

      <motion.div
        className="absolute top-32 right-16 text-amber-600 opacity-25"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Salad size={36} />
      </motion.div>

      <motion.div
        className="absolute bottom-28 left-1/5 text-green-700 opacity-25"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf size={30} />
      </motion.div>

      <motion.div
        className="absolute top-20 right-1/4 text-orange-600 opacity-25"
        animate={{ y: [0, -18, 0], rotate: [0, 12, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Carrot size={36} />
      </motion.div>

      <motion.div
        className="absolute bottom-36 right-12 text-red-600 opacity-25"
        animate={{ y: [0, 25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Soup size={32} />
      </motion.div>

      <motion.div
        className="absolute top-40 left-1/3 text-purple-600 opacity-25"
        animate={{ y: [0, -28, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Bean size={28} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/2 text-amber-800 opacity-25"
        animate={{ y: [0, 20, 0], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Soup size={36} />
      </motion.div>

      <motion.div
        className="absolute top-90 right-1/2 text-red-500 opacity-25"
        animate={{ y: [0, -24, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Apple size={30} />
      </motion.div>

      <motion.div
        className="absolute bottom-12 right-1/4 text-green-600 opacity-25"
        animate={{ y: [0, 22, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf size={28} />
      </motion.div>

      <motion.div
        className="absolute top-10 left-1/2 text-orange-700 opacity-25"
        animate={{ y: [0, -20, 0], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Carrot size={34} />
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center gap-0 md:gap-16 md:gap-24">
        {/* TEXT */}
        <motion.div
          className="w-full md:w-1/2 text-center relative z-50 md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-900">
            Ramiz Jaffer Chaat House
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-amber-950 sigmar">
            Taste the <br />
            <span className="text-amber-700">Delicious Chana Chaat</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-amber-800 max-w-xl mx-auto md:mx-0">
            Freshly prepared chaat with authentic spices and hand-picked
            ingredients. A perfect balance of taste, freshness, and tradition.
          </p>

          {/* Parent container controls the alignment */}
          <div className="mt-8 flex flex-col items-center md:items-start justify-center md:justify-start">
            <Link href="#menu" scroll={true} className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, gap: "12px" }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center justify-center gap-2 bg-amber-950 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-800/60 sigmar transition-all overflow-hidden w-full sm:w-auto"
              >
                {/* Subtle Shine Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

                <span className="relative z-10">Order Now</span>

                <motion.div
                  className="relative z-10 bg-orange-500 rounded-full p-1 group-hover:bg-orange-400 transition-colors"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowBigDown size={20} strokeWidth={3} />
                </motion.div>
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: [0.95, 1.05, 0.95], // gentle pulsating scale
            y: [0, -10, 0], // vertical floating effect
            rotate: [0, 3, -3, 0], // small rotation for liveliness
          }}
          transition={{
            duration: 6, // total duration for full loop
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="md:relative absolute h-[300px] w-[800px] -z-30 md:h-[500px] md:w-[1000px] opacity-50 md:opacity-100">
            <Image
              src="/Hero.jpg"
              alt="Delicious Chana Chaat"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
