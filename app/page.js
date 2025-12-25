import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Items from "@/Components/Items";
import Navbar from "@/Components/Navbar";
import Cart from "@/Components/Cart";
import React from "react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Items />
      <Footer />
      <Cart />
    </div>
  );
}
