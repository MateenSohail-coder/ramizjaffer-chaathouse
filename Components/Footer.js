"use client";
import React from "react";
import { motion } from "framer-motion";
import { Bean, Leaf, Salad, Carrot, Apple, Soup } from "lucide-react";
import { PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden px-6 py-16 md:px-16 md:py-24 ">
      {/* FLOATING FOOD ICONS - Exact Hero Style */}
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

      {/* SIMPLE FOOTER CONTENT - Center aligned */}
      <div className="mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Brand Badge */}
          <span className="inline-block rounded-full bg-amber-100 px-6 py-3 text-sm font-semibold text-amber-900 border border-amber-200">
            Ramiz Jaffer Chaat House
          </span>

          {/* Footer Title */}
          <h2 className="text-5xl sigmar md:text-7xl font-black text-gray-900 leading-tight">
            Still Hungry? <br />
            <span className="text-amber-700">Order Again!</span>
          </h2>

          {/* Contact & Hours */}
          <div className="space-y-4 text-lg text-amber-800 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-6 bg-amber-50/50 rounded-3xl backdrop-blur-sm border border-amber-100">
              <div className="text-2xl font-bold sigmar flex items-center gap-2">
                <PhoneCall /> 0322 4610522
              </div>
              <div className="text-xl">1:00 PM - 10:30 PM Daily</div>
            </div>

            <p className="text-base text-gray-700 leading-relaxed">
              Fresh chaat made with love in Lahore. Your favorite flavors,
              anytime!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+923700959829"
              className="rounded-full bg-amber-900 px-10 py-4 text-white font-semibold text-lg hover:bg-amber-800 transition-all shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="pt-12 border-t border-amber-200/50">
            <p className="text-xl font-semibold text-gray-700">
              © 2025 Made with ❤️ in Lahore, Pakistan
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
