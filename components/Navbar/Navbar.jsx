"use client";
import React from "react";
import MobileDropdown from "./MobileDropdown.jsx";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* ===== Top Main Navbar (Desktop) ===== */}
     <div className="SectionNavbarContainer1 hidden md:flex items-center justify-between bg-[#333333] px-6 py-3 text-white font-sans">
  {/* Left Logo */}
  <div className="flex items-center">
    <div className="bg-white px-3 py-1 rounded-sm">
      <span className="text-[#333333] font-bold text-2xl tracking-tighter">
        uspto
      </span>
    </div>
    <span className="text-sm pt-[20px] pr-[5px] pb-0 pl-[5px]">®</span>
  </div>

  {/* Right Menu */}
 <ul className="navbar-right">
  {/* Patents */}
  <li className="dropdown">
    Patents ▾
    <ul className="dropdown-menu divide-y-2 divide-gray-600  absolute
    left-1/2 -translate-x-1/2
    mt-2 overflow-y-hidden
    bg-[#2f2f2f] text-[#ccc]
    shadow-lg rounded-sm z-50 min-[900px]:left-auto
    min-[900px]:right-0
    min-[860px]:translate-x-0 right-0 max-h-100">
      <li>Patent Center</li>
      <li>Search with Patent Public Search</li>
      <li>Check filing status</li>
      <li>Search assignment</li>
      <li>Record assignment</li>
      <li>Order certified Patent documents</li>
      <li>Patent Trial and Appeal Case Tracking System</li>
      <li>Manual of Patent Examining Procedure</li>
    </ul>
  </li>

  {/* Trademarks */}
  <li className="dropdown">
    Trademarks ▾
    <ul className="dropdown-menu divide-y-2 divide-gray-600
     left-1/2 -translate-x-1/2
    mt-2 overflow-y-hidden
    bg-[#2f2f2f] text-[#ccc]
    shadow-lg rounded-sm z-50 min-[900px]:left-auto
    min-[900px]:right-0
    min-[860px]:translate-x-0 right-0 max-h-100">
      <li>Search trademarks</li>
      <li>File trademark forms</li>
      <li>View status, documents, and registration certificates</li>
      <li>File Trademark Trial and Appeal Board forms</li>
      <li>View Trademark Trial and Appeal Board proceedings</li>
      <li>Search the Trademark Official Gazette</li>
      <li>Record assignment</li>
      <li>Search assignment</li>
      <li>Order certified trademark documents</li>
      <li>View the Trademark Manual of Examining Procedure</li>
      <li>Search the ID Manual</li>
    </ul>
  </li>
{/* Fees and payment  */}
 <li className="dropdown">
    Fees and payment  ▾
    <ul className="dropdown-menu divide-y-2 divide-gray-600">
      <li>Fees Self-Service</li>
      <li>Financial Manager</li>
      <li>Patent Maintenance Fees Storefront</li>
    </ul>
  </li>
  
  {/*  Contact Us */}
 <li className="dropdown">
    Contact Us  ▾
    <ul className="dropdown-menu divide-y-2 divide-gray-600">
      <li>Contact Us</li>
      <li>Learning and resources</li>
    </ul>
  </li>
  <li>MyUSPTO</li>

  <li style={{ color: "#f2a900", fontWeight: 600 }}>
    Sign in
  </li>
</ul>

</div>

      {/* ===== Mobile Navbar ===== */}
   

    {/* Trademark Center */}
    
          <div className="SectionNavbarContainer2 hidden lg:block bg-[#eeeeee] py-4  px-3 md-px-6 border-b border-gray-300">
      <h1 className="text-[ #1b1b1b] text-lg md-text-2xl font-bold tracking-tight">
        Trademark Center
      </h1>
      </div>
      {/* ===== Blue Sub-Navbar (The Image You Uploaded) ===== */}
      <div className="SectionNavbarContainer3">
     
         <div className="md:hidden">
        <MobileDropdown />
      </div>
       <div className="sub-nav-container hidden lg:block px-2 xlg:p-0">
        <div className="sub-nav-content">
          <ul className="sub-nav-list">
            <li className="sub-nav-item active">Home</li>
            <li className="sub-nav-item">Start application</li>
            <li className="sub-nav-item">Drafts and docket</li>
            <li className="sub-nav-item">Sponsorship tool</li>
            <li className="sub-nav-item dropdown">
              Manage trademarks <span className="arrow">▾</span>
            </li>
          </ul>
          <div className="sub-nav-right">
            <span className="sub-nav-item dropdown">
              Help <span className="arrow">▾</span>
            </span>
          </div>
        </div>
      </div>
          <div className="SectionNavbarContainer2 block lg:hidden bg-[#eeeeee] py-4  px-3 md-px-6 border-b border-gray-300">
      <h1 className="text-[ #1b1b1b] text-lg md-text-2xl font-bold tracking-tight">
        Trademark Center
      </h1>
      </div>
      </div>
    </>
  );
};

export default Navbar;