"use client";
import React, { useState } from "react";
import { Lightbulb, HelpCircle, DollarSign } from "lucide-react";


// Generic dropdown for mobile
const MobileDropdown = ({ id, label, icon, items, openDropdown, setOpenDropdown }) => {
  const isOpen = openDropdown === id;

  return (

     
    <div className="relative">
      {/* Icon / Label as toggle */}
      <div
        className="flex items-center cursor-pointer p-1"
        onClick={() => setOpenDropdown(isOpen ? null : id)}
      >
        {icon}
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <ul className="   absolute
    left-1/2 -translate-x-1/2
    mt-2 w-64 max-h-100 overflow-y-hidden
    bg-[#2f2f2f] text-[#ccc]
    shadow-lg rounded-sm z-50 min-[400px]:left-auto
    min-[400px]:right-0
    min-[400px]:translate-x-0 right-0 max-h-100">
          {items.map((item, index) => (
            <li
              key={index}
              className={`px-4 py-2 ${index !== items.length - 1 ? "border-b border-gray-300" : ""}`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Navbar = () => {
  // State for mobile dropdowns
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <>
  
      {/* ===== Desktop Navbar (860px+) ===== */}
     

      {/* ===== Mobile Navbar (Below 860px) ===== */}
      <nav className="flex md:hidden items-center justify-between bg-[#333333] px-3 py-2 text-white font-sans">
        {/* Left Logo */}
        <div className="flex items-center">
          <div className="bg-white px-2 py-0.5 rounded-sm">
            <span className="text-[#333333] font-bold text-xl tracking-tighter">uspto</span>
          </div>
          <span className="reg text-[18px] pt-[20px] pr-[5px] pb-0 pl-[5px] ">®</span>
        </div>

        {/* Right Side: Mobile Dropdowns */}
        <div className="flex items-center gap-1 xs-gap-4">
          <MobileDropdown
            id="patents"
            label=""
            icon={<Lightbulb size={20} className="text-blue-300 divide-y-2 divide-gray-600" />}
            items={[
              "Patent Center",
              "Search with Patent Public Search",
              "Check filing status",
              "Search assignment",
              "Record assignment",
              "Order certified Patent documents",
              "Patent Trial and Appeal Case Tracking System",
              "Manual of Patent Examining Procedure",
            ]}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />

          <MobileDropdown
            id="trademarks"
            label=""
            icon={
              <div className="bg-[#222] px-1 rounded border divide-y-2 divide-gray-600 flex items-center">
                <span className="text-[10px] font-bold text-white">TM</span>
              </div>
            }
            items={[
              "Search trademarks",
              "File trademark forms",
              "View status, documents, and registration certificates",
              "File Trademark Trial and Appeal Board forms",
              "View Trademark Trial and Appeal Board proceedings",
              "Search the Trademark Official Gazette",
              "Record assignment",
              "Search assignment",
              "Order certified trademark documents",
              "View the Trademark Manual of Examining Procedure",
              "Search the ID Manual",
            ]}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />

          <MobileDropdown
            id="fees"
            label=""
            icon={<DollarSign size={18} className="text-white divide-y-2 divide-gray-600" />}
            items={[
              "Fees Self-Service",
              "Financial Manager",
              "Patent Maintenance Fees Storefront",
            ]}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />

          <MobileDropdown
            id="contact"
            label=""
            icon={<HelpCircle size={18} className="text-white divide-y-2 divide-gray-600" />}
            items={["Contact Us", "Learning and resources"]}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />

          {/* My Section */}
          <div className="bg-white px-1 rounded-sm">
            <span className="text-[#333333] text-[10px] font-bold">My</span>
          </div>

          {/* Sign In */}
          <button className="text-[#ffb703] font-semibold text-sm">Sign in</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
