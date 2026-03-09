'use client';
import React, { useState } from "react";
import Image from 'next/image';

export default function HeroSection() {
  // Track which dropdown is being hovered
  const [hoveredTab, setHoveredTab] = useState(null);

  return (
    <div className="w-full bg-[#0b5ea6] pb-6 pl-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 items-start">

        {/* LEFT IMAGE SECTION */}
        <div className="md:col-span-2 relative overflow-hidden rounded-lg">
          <img
            src="/assets/Herosection.png"
            alt="Lincoln"
            className="w-full h-full object-cover"
          />

          {/* BLUE OVERLAY */}
          <div className="absolute bottom-0 left-0 w-full bg-blue-700/80 text-white p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              A guide through troubled waters
            </h2>
            <p className="text-sm md:text-base">
              As we celebrate America's 250th year, join us as we delve into a
              lesser-known aspect of our 16th president’s story: that of
              Abraham Lincoln, the inventor.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="pr-2">
          <div className="pt-20 pl-10 gap-3 flex flex-row relative">
            
            {/* PUBLIC EVENTS TRIGGER */}
            <div 
              className="relative"
              onMouseEnter={() => setHoveredTab('events')}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <span className={`text-white border-white border-2 px-4 py-4 font-[600] text-sm inline-block cursor-pointer transition-colors ${hoveredTab === 'events' ? 'bg-white text-[#0b5ea6]' : ''}`}>
                Public Events ▾
              </span>

              {/* PUBLIC EVENTS DROPDOWN */}
              {hoveredTab === 'events' && (
                <div className="absolute left-[-43px] top-full w-[380px] bg-white p-6 shadow-2xl z-50 border-t border-gray-100">
                  <div className="space-y-6 text-left">
                    <div>
                      <p className="text-gray-500 font-bold text-[11px] uppercase tracking-wide">MAR 10, 2026 - ALEXANDRIA, VA</p>
                      <a href="#" className="text-[#005EA5] font-bold text-base hover:underline leading-tight block mt-1">
                        The role of a USPTO patent examiner
                      </a>
                    </div>
                    <div>
                      <p className="text-gray-500 font-bold text-[11px] uppercase tracking-wide">MAR 11, 2026 - VIRTUAL</p>
                      <a href="#" className="text-[#005EA5] font-bold text-base hover:underline leading-tight block mt-1">
                        USPTO Hour: IT and innovation
                      </a>
                    </div>
                    <div>
                      <p className="text-gray-500 font-bold text-[11px] uppercase tracking-wide">APR 16, 2026 - ALEXANDRIA, VA</p>
                      <a href="#" className="text-[#005EA5] font-bold text-base hover:underline leading-tight block mt-1">
                        Strategies for protecting and enforcing intellectual property in China: What Mid-Atlantic businesses need to know
                      </a>
                    </div>
                    <div className="pt-4 border-t border-gray-100 flex items-center text-sm font-bold text-black">
                      <span className="mr-2">📅</span>
                      <p>View all <a href="#" className="text-[#005EA5] hover:underline">7 upcoming events.</a></p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* INITIATIVES TRIGGER */}
            <div 
              className="relative"
              onMouseEnter={() => setHoveredTab('initiatives')}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <span className={`text-white border-white border-2 px-4 py-4 font-[600] text-sm inline-block cursor-pointer transition-colors ${hoveredTab === 'initiatives' ? 'bg-white text-[#0b5ea6]' : ''}`}>
                Initiatives ▾
              </span>

              {/* INITIATIVES DROPDOWN */}
              {hoveredTab === 'initiatives' && (
                <div className="absolute right-[42px] top-full w-[280px] h-64 bg-white p-6 shadow-2xl z-50 border-t border-gray-100">
                  <ul className="space-y-4 text-left">
                    <li>
                      <a href="#" className="text-[#005EA5] font-bold text-base hover:underline flex items-center">
                        Artificial intelligence &gt;
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[#005EA5] font-bold text-base hover:underline flex items-center">
                        Engage with the Director &gt;
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* MAIN SIDEBAR CONTENT */}
          <div className="bg-white py-6 pl-8 shadow-md">
            <h3 className="text-2xl font-[800] mb-4">
              New to Intellectual Property?
            </h3>

            <ul className="space-y-3 text-[#005EA5] font-[600]">
              <li className="hover:underline cursor-pointer">Patent basics</li>
              <li className="hover:underline cursor-pointer">Trademark basics</li>
              <li className="hover:underline cursor-pointer">Identify what kind of IP you have</li>
              <li className="hover:underline cursor-pointer">Inventor & entrepreneur resources</li>
              <li className="hover:underline cursor-pointer">Access our free services</li>
              <li className="hover:underline cursor-pointer">Training and education events</li>
              <li className="hover:underline cursor-pointer">USPTO in your region</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}