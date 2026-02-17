import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import "./Footer.modules.css";

const UsptoFooter = () => {
  return (
    <footer className="FooterMainContainer w-full font-sans text-gray-800">
      {/* Top Section: Links and Subscription */}
      <div className="FooterContainer bg-[#f0f0f0] px-6 py-10 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          
          {/* Left Side: Navigation Links */}
          <div className="FooterSection1  flex-1">
            <div className="flex flex-wrap gap-4 mb-6 text-sm font-medium border-b border-gray-300 pb-4">
              <a href="#" className="hover:underline">About the USPTO</a>
              <span>•</span>
              <a href="#" className="hover:underline">Search for patents</a>
              <span>•</span>
              <a href="#" className="hover:underline">Search for trademarks</a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
              <div className="flex flex-col gap-2">
                <a href="#" className="hover:underline">US Department of Commerce</a>
                <a href="#" className="hover:underline">Accessibility</a>
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Financial and Performance Data</a>
                <a href="#" className="hover:underline">Vulnerability Disclosure Policy</a>
              </div>
              <div className="flex flex-col gap-2">
                <a href="#" className="hover:underline">Freedom of Information Act</a>
                <a href="#" className="hover:underline">Inspector General</a>
                <a href="#" className="hover:underline">NoFEAR Act</a>
                <a href="#" className="hover:underline">USA.gov</a>
              </div>
            </div>
          </div>

          {/* Right Side: Subscribe Box */}
          <div className="FooterSection2 md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Receive updates from the USPTO</h3>
            <p className="text-sm mb-4">Enter your email to subscribe or update your preferences</p>
            <div className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-[#0066b2] text-white px-6 py-2 font-bold hover:bg-blue-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Black Bar */}
      <div className="FooterSection3 bg-black text-white px-6 py-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="border-2 bg-[#ffff] text-[#2f2f2f] rounded-lg px-2 py-1 text-2xl font-black tracking-tighter ">
              uspto
            </div>
            <div className="text-[10px] leading-tight font-bold uppercase tracking-widest">
              United States <br /> Patent and Trademark Office
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <span className="text-sm mr-2">Follow us</span>
            <FaFacebook size={24} className="cursor-pointer hover:text-gray-400" />
            <FaInstagram size={24} className="cursor-pointer hover:text-gray-400" />
            <FaLinkedin size={24} className="cursor-pointer hover:text-gray-400" />
            <FaXTwitter size={24} className="cursor-pointer hover:text-gray-400" />
            <FaYoutube size={24} className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UsptoFooter;