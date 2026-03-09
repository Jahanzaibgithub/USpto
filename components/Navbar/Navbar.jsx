"use client";
import React, { useState } from "react";
import { 
  MagnifyingGlassIcon, 
  Bars3Icon, 
  LinkIcon, 
  ChevronRightIcon, 
  ChevronLeftIcon, 
  XMarkIcon 
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(null); // 'menu' | 'links' | 'search' | null

  // --- Menu Data Structure ---
  const menuData = {
    patents: {
      title: "Patents",
      mobileList: ["Patents Home", "Get started", "Apply for patent", "Maintain your patent", "More Patents", "Patent practitioners", "Search Patents", "Patent Fees"],
    },
    trademarks: {
      title: "Trademarks",
      mobileList: ["Trademarks Home", "Get started", "Apply to register", "Maintain your trademark", "More Trademarks", "Trademark practitioners", "Search Trademarks", "Trademark Fees"],
    },
    ipPolicy: {
      title: "IP Policy",
      mobileList: ["IP Policy Home", "Patent policy", "Trademark policy", "Copyright policy", "Enforcement policy", "International affairs", "IP research", "Legislative resources"],
    },
    learning: {
      title: "Learning and Resources",
      mobileList: ["Resources Home", "By audience", "Getting started", "Publications & data", "Fees", "Training", "Operational status", "Glossary"],
    }
  };

  const linksData = ["About Us", "Jobs", "Contact Us", "MyUSPTO"];

  return (
    <nav className="w-full font-sans antialiased relative">
      {/* --- TOP SECTION (USPTO Logo & Desktop Search) --- */}
      <div className="bg-[#333333]">
        <div className="max-w-[1400px] mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
          {/* Logo Group */}
          <div className="flex items-center">
            <div className="bg-white px-2 py-1 md:px-3 md:py-2 rounded-md flex items-center shadow-sm">
              <span className="text-[#333333] font-bold text-3xl md:text-5xl tracking-tighter leading-none">uspto</span>
            </div>
            <div className="hidden md:block ml-4 text-white pr-4">
              <h3 className="font-bold text-lg lg:text-xl uppercase tracking-tight leading-tight">
                United States <br /> Patent and Trademark Office
              </h3>
            </div>
            <span className="text-white text-[20px] self-start mt-1 ml-1 opacity-80 pt-7">®</span>
          </div>

          {/* Desktop Links & Search */}
          <div className="flex flex-col items-end text-white">
            <div className="hidden lg:flex items-center space-x-4 text-[15px] font-semibold mb-3">
              {linksData.map(link => (
                <a key={link} href="#" className="hover:text-gray-300">{link}</a>
              ))}
            </div>
            <div className="hidden lg:flex w-[400px]">
              <input type="text" placeholder="Search uspto.gov" className="w-full px-4 py-2 text-black text-sm focus:outline-none" />
              <button className="bg-[#007196] px-4 text-white hover:bg-[#005a78]"><MagnifyingGlassIcon className="h-5 w-5" /></button>
            </div>

            {/* Mobile Icon Buttons */}
            <div className="relative flex lg:hidden space-x-6 items-center">
              {/* MENU Button */}
              <div className="relative">
                <button 
                  onClick={() => setIsMobileMenuOpen(isMobileMenuOpen === 'menu' ? null : 'menu')} 
                  className="flex flex-col items-center"
                >
                  <Bars3Icon className="w-6 h-6 mb-1" />
                  <span className="text-[10px] font-black tracking-widest">MENU</span>
                </button>

                {/* Dropdown */}
                {isMobileMenuOpen === 'menu' && (
                  <div className="absolute top-full  transform -translate-x-1/2 w-64 max-w-[860px] bg-white border border-gray-300 rounded-md shadow-lg mt-2 z-50">
                    {menuData.patents.mobileList.map((item, idx) => (
                      <a 
                        key={idx} 
                        href="#" 
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* LINKS Button */}
              <div className="relative">
                <button 
                  onClick={() => setIsMobileMenuOpen(isMobileMenuOpen === 'links' ? null : 'links')} 
                  className="flex flex-col items-center"
                >
                  <LinkIcon className="w-6 h-6 mb-1" />
                  <span className="text-[10px] font-black tracking-widest">LINKS</span>
                </button>

                {isMobileMenuOpen === 'links' && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-48 bg-white border border-gray-300 rounded-md shadow-lg mt-2 z-50">
                    {linksData.map((item, idx) => (
                      <a key={idx} href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{item}</a>
                    ))}
                  </div>
                )}
              </div>

              {/* SEARCH Button */}
              <div className="relative">
                <button 
                  onClick={() => setIsMobileMenuOpen(isMobileMenuOpen === 'search' ? null : 'search')} 
                  className="flex flex-col items-center"
                >
                  <MagnifyingGlassIcon className="w-6 h-6 mb-1" />
                  <span className="text-[10px] font-black tracking-widest">SEARCH</span>
                </button>

                {isMobileMenuOpen === 'search' && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-64 bg-white border border-gray-300 rounded-md shadow-lg mt-2 z-50 p-2">
                    <input 
                      type="text" 
                      placeholder="Search uspto.gov" 
                      className="w-full px-3 py-2 border rounded-md focus:outline-none"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;