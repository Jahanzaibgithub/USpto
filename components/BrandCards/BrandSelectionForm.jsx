'use client';
import React, { useState } from 'react';
import { ChevronRight, HelpCircle } from 'lucide-react';

const BrandSelectionForm = ({ onContinue }) => {
  const [selected, setSelected] = useState('');

  const AdidasLogo = () => (
    <svg viewBox="0 0 100 66" className="w-12 h-8 fill-black">
      <path d="M70 66L90 30L100 37L82.5 66H70ZM47.5 66L72.5 21L82.5 28L60 66H47.5ZM25 66L55 12L65 19L37.5 66H25Z" />
    </svg>
  );

  const options = [
    { id: 'name', title: 'Name', description: 'Protects the words used to identify your brand.', example: <span className="font-bold text-xl tracking-tight">adidas</span> },
    { id: 'slogan', title: 'Slogan', description: 'Protects a phrase or tagline tied to your brand.', example: <span className="font-bold font-sans text-sm tracking-tighter leading-tight text-right block w-24">IMPOSSIBLE IS NOTHING</span> },
    { id: 'logo', title: 'Logo', description: 'Protects your visual design or symbol.', example: <AdidasLogo /> },
  ];

  const handleContinue = () => {
    if (!selected) return;
    onContinue(selected); // call parent to go to the next step
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-[#005ea233] p-2 font-sans">
      {/* Main Card Container */}
      <div className="flex flex-col sm:flex-row w-full max-w-5xl bg-[#f0f0f0] rounded-[2rem] shadow-xl overflow-hidden min-h-[600px]">
        
        {/* Left Side - Hero/Title */}
        <div className="Section4BrandCardformRightSide w-full sm:w-2/5  relative flex flex-col justify-center px-12">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-[#1a2b4b] leading-tight mb-2">
              Let's get started!
            </h1>
            {/* Orange underline decoration */}
            <div className="h-2 w-32 bg-[#004c82] rounded-full mt-4"></div>
          </div>
          
          {/* Subtle background decoration (optional, adds polish) */}
          <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
             {/* You could add a faint pattern here if desired */}
          </div>
        </div>

        {/* Right Side - Form */}
           <div className="w-full sm:w-3/5 px-1 py-4 xs:p-12 flex flex-col justify-center">
          <div className="rounded-2xl shadow-xl w-full max-w-2xl p-8 lg:p-12">
            <h2 className="text-gray-800 font-semibold mb-6">What are you trying to protect?</h2>
            
            <div className="space-y-4">
              {options.map((option) => {
                const isSelected = selected === option.id;
                return (
                  <div
                    key={option.id}
                    onClick={() => setSelected(option.id)}
                    className={`cursor-pointer relative flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 ${isSelected ? 'border-[#004c82] bg-orange-50/10' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className="flex sm-items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-[#004c82]' : 'border-gray-400'}`}>
                        {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#004c82]" />}
                      </div>
                      <div className="flex flex-col">
                        <span className={`font-bold text-lg ${isSelected ? 'text-[#004c82]' : 'text-gray-700'}`}>{option.title}</span>
                        <span className="text-gray-500 text-xs sm:text-sm">{option.description}</span>
                      </div>
                    </div>
                    <div className="text-black opacity-90 pl-4">{option.example}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex items-center gap-2 text-[#004c82] cursor-pointer hover:underline w-fit">
              <HelpCircle size={18} />
              <span className="text-xs font-medium">What is the difference between a Name, Slogan and Logo?</span>
            </div>

            <div className="mt-8 flex justify-end">
              <button 
                onClick={handleContinue}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold w-1/3 shadow-lg transition-colors
                  ${selected ? 'bg-[#004c82] text-white hover:bg-[#003766] shadow-orange-100' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}
                `}
                disabled={!selected}
              >
                Continue <ChevronRight size={20} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSelectionForm;