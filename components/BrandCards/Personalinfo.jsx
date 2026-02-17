import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Personalinfo = () => {
  // Form state
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    consent: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty required fields
    if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.consent) {
      alert('Please fill in all fields and give consent before continuing.');
      return;
    }

    // If all fields filled
    alert(`Form submitted successfully! \nName: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}`);
  };

  return (
      <div className="flex items-center justify-center min-h-screen bg-[#005ea233] p-2 font-sans">
      {/* Main Card Container */}
      <div className="flex flex-col sm:flex-row w-full max-w-5xl bg-[#f0f0f0] rounded-[2rem] shadow-xl overflow-hidden min-h-[600px]">
      {/* Left Sidebar - Title Section */}
      <div className="w-full sm:w-2/5  relative flex flex-col justify-center py-2 px-4 xs:px-12">
        <h1 className="text-4xl font-bold text-[#1D3557] leading-tight mb-6">
          Who will be the <br /> primary contact?
        </h1>
       <div className="h-2 w-32 bg-[#004c82] rounded-full mt-4"></div>
      </div>

      {/* Right Section - Form Card */}
      <div className="w-full sm:w-3/5 px-1 py-4 xs:p-12 flex flex-col justify-center">
        <div className=" rounded-2xl shadow-xl w-full max-w-2xl p-8 lg:p-12">
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#1D3557]">First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="e.g., Bob" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#004c82]  outline-none"
                />
              </div>
              {/* Last Name */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#1D3557]">Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="e.g., Smith" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#004c82]  outline-none"
                />
              </div>
              {/* Email Address */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#1D3557]">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g., bobsmith@example.com" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#004c82] outline-none"
                />
              </div>
              {/* Phone Number */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#1D3557]">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(888) 888-8888" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#004c82]  outline-none"
                />
              </div>
            </div>

            {/* Consent Section */}
            <div className="pt-4 pl-[50%]">
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-gray-300" 
                  id="consent" 
                />
                <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                  I consent to receiving SMS text messages and phone calls from Trademark Engine.
                </label>
              </div>
            </div>

        
         

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between pt-6 gap-4">
              <button type="button" className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition">
                <ChevronLeft size={20} /> Back
              </button>
              
             
                <button type="submit" className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#004c82] text-white font-bold hover:bg-[#004c82] transition-colors w-2/3 shadow-lg shadow-orange-100">
                  Continue <ChevronRight size={18} />
                </button>
            
            </div>
          </form>

        </div>
      </div>
      </div>
    </div>
  );
};

export default Personalinfo;
