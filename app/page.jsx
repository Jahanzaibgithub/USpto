'use client';
import React from "react";

import Header from "../components/Header/header";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Header/Herosection";
import UsptoFooter from "../components/Footer/Footer";
import Personalinfo from "../components/BrandCards/Personalinfo";

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* HERO BACKGROUND SECTION */}
 <div
  className="bg-white lg:bg-[url('/assets/BackgroundImage.1.png')] 
             bg-cover bg-center bg-no-repeat"
>

  {/* NAVBAR SECTION */}
  <div className="bg-white/30  lg:px-16">
    <Navbar />
  </div>

  {/* HEADER SECTION */}
  <div className="bg-white/80  lg:px-16 border-t-2 border-t-[#008139]">
    <Header />
  </div>

</div>

      {/* HERO SECTION */}
      <HeroSection />

      {/* FORM SECTION */}
      <Personalinfo />

      {/* FOOTER */}
      <UsptoFooter />

    </main>
  );
}