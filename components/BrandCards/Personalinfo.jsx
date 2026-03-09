"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function Personalinfo() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.phone ||
      !form.consent
    ) {
      alert("Please fill in all fields and give consent.");
      return;
    }

    alert("Redirecting to secure payment...");

    setTimeout(() => {
      window.location.href =
        "https://www.linkedin.com/in/jahanzaib-sarwar-a58b9a24a/";
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-700/80 p-2 font-sans">

      {/* Main Card */}
      <div className="flex flex-col sm:flex-row w-full max-w-5xl bg-[#f0f0f0] rounded-[2rem] shadow-xl overflow-hidden min-h-[600px]">

        {/* LEFT SECTION */}
        <div className="w-full sm:w-2/5 flex flex-col justify-center py-6 px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1D3557] leading-tight mb-6">
            Who will be the <br /> primary contact?
          </h1>

          <div className="h-2 w-32 bg-[#004c82] rounded-full"></div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full sm:w-3/5 px-4 py-6 md:p-10 flex flex-col justify-center">

          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6 md:p-10">

            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* GRID INPUTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* First Name */}
                <div>
                  <label className="block text-sm font-bold text-[#1D3557] mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="e.g., Bob"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#004c82] outline-none"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-bold text-[#1D3557] mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="e.g., Smith"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#004c82] outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-[#1D3557] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g., bobsmith@example.com"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#004c82] outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-bold text-[#1D3557] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(888) 888-8888"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#004c82] outline-none"
                  />
                </div>

              </div>

              {/* CONSENT */}
              <div className="pt-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-gray-300"
                    id="consent"
                  />

                  <label
                    htmlFor="consent"
                    className="text-sm text-gray-600 leading-relaxed"
                  >
                    I consent to receiving SMS text messages and phone calls
                    from Trademark Engine.
                  </label>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-6">

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-[#004c82] text-white font-semibold hover:bg-yellow-400 hover:text-[#008139] transition"
                >
                  Complete Your Secure Payment
                  <ChevronRight size={22} />
                </button>

              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}