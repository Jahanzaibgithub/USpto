"use client";
import React, { useState } from "react";
import "./dropdown.css"; // Optional: if you want extra custom styles

function DropDown() {
  const [isOpen, setIsOpen] = useState(false); // Track if menu is open

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden text-white bg-[#0066b2] ">
      {/* Header with Hamburger */}
      <div className="Section3Dropdownmain flex justify-between items-center  ">
       <div className="Section3Dropdown px-3 border-r  border-r-gray-100">
        <button
          onClick={toggleDropdown}
          className="focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 32"
          >
            <path
              d="M4 8h32M4 16h32M4 24h32"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        } bg-[#0066b2] `}
      >
        <a
          href="#"
          className="block font-medium text-base md-text-lg text-white py-1 px-5 hover:bg-blue-900"
        >
          Home
        </a>
        <a
          href="#"
          className="block font-medium text-base md-text-lg text-white py-1 px-5 hover:bg-blue-900 "
        >
          Start application
        </a>
        <a
          href="#"
          className="block font-medium text-base md-text-lg text-white py-1 px-5  hover:bg-blue-900"
        >
          Drafts and docket 
        </a>
        <a
          href="#"
          className="block font-medium text-base md-text-lg text-white py-1 px-5 hover:bg-blue-900 "
        >
          Sponsorship tool
        </a>
        <a
          href="#"
          className="block font-medium text-base md-text-lg text-white py-1 px-5 hover:bg-blue-900"
        >
          Manage trademarks ▾
        </a>
        <a
          href="#"
          className="block font-medium text-base md-text-lg text-white py-1 px-5 hover:bg-blue-900"
        >
          Help ▾
        </a>
      </div>
    </div>
  );
}

export default DropDown;
