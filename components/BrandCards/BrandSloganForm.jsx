'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';

const BrandSloganForm = ({ onBack, onContinue }) => {
  const [formData, setFormData] = useState({ slogan: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContinue = () => {
    if (!formData.slogan.trim() || !formData.description.trim()) {
      alert('Please fill all fields before continuing.');
      return;
    }

    console.log('Slogan submitted:', formData);

    // Move to Personalinfo
    if (onContinue) onContinue();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#005ea233] p-2 font-sans">
      <div className="flex flex-col sm:flex-row w-full max-w-5xl bg-[#f0f0f0] rounded-[2rem] shadow-xl overflow-hidden min-h-[600px]">
        
        {/* Left Side - Hero Section */}
        <div className="w-full sm:w-2/5 flex flex-col justify-center px-12">
          <h1 className="text-5xl font-bold text-[#1a2b4b] leading-tight mb-2">
            Great! We can help protect your Slogan
          </h1>
          <div className="h-2 w-32 bg-[#004c82] rounded-full mt-4"></div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full sm:w-3/5 px-12 flex flex-col justify-center">
          <div className="rounded-2xl shadow-xl w-full max-w-2xl p-8 lg:p-12">
            
            {/* Input 1 */}
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-gray-700 font-bold">
                Enter the Slogan you want to protect
              </label>
              <input
                name="slogan"
                value={formData.slogan}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-[#004c82] outline-none"
                placeholder="e.g., IMPOSSIBLE IS NOTHING"
              />
            </div>

            {/* Input 2 */}
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-gray-700 font-bold">
                Describe the Slogan
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-[#004c82] outline-none resize-none"
                placeholder="A brief description of your slogan"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4 mt-8">
              {/* Back button */}
              <button
                onClick={onBack} // <-- Calls parent to go back to BrandSelectionForm
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors w-1/3"
              >
                <ChevronLeft size={18} /> Back
              </button>
              
              <button
                onClick={handleContinue}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#004c82] text-white font-bold hover:bg-[#003766] transition-colors w-2/3 shadow-lg shadow-orange-100"
              >
                Continue <ChevronRight size={18} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSloganForm;
