import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PaymentProcess = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#005ea233] p-2 font-sans">
      <div className="flex flex-col sm:flex-row w-full max-w-5xl bg-[#f0f0f0] rounded-[2rem] shadow-xl overflow-hidden min-h-[600px]">

        {/* LEFT INFO */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#0b2b4c] mb-4">
            Secure Payment
          </h2>
          <p className="text-gray-600 mb-6">
            Enter your debit or credit card details below. All payments are
            encrypted and processed securely.
          </p>

          {/* Card Brands */}
          <div className="flex gap-3 mt-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Chase_logo_2007.svg" className="h-6" />
          </div>
        </div>

        {/* RIGHT PAYMENT FORM */}
        <div className="p-8">
          <form className="space-y-5">

            {/* Cardholder Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Cardholder Name
              </label>
              <input
                type="text"
                placeholder="John Smith"
                className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* Card Number */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Card Number
              </label>

              <div className="relative mt-1">
                <input
                  type={showCard ? "text" : "password"}
                  placeholder="1234 5678 9012 3456"
                  className="w-full border rounded-md px-3 py-2 pr-10 focus:ring-2 focus:ring-blue-600 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowCard(!showCard)}
                  className="absolute right-3 top-2.5 text-gray-500"
                >
                  {showCard ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Expiry & CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Expiry (MM / YY)
                </label>
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Security Code (CVV)
                </label>
                <input
                  type="password"
                  placeholder="123"
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
            </div>

            {/* ZIP Code */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Billing ZIP Code
              </label>
              <input
                type="text"
                placeholder="90210"
                className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* Secure Notice */}
            <div className="text-xs text-gray-500 flex items-center gap-2">
              🔒 Payments are secured with 256-bit SSL encryption
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center pt-6">
              <button
                type="button"
                className="text-gray-600 hover:text-black"
              >
                ← Back
              </button>

              <button
                type="submit"
                className="bg-[#0b5cab] text-white px-6 py-2 rounded-md hover:bg-[#094a8f] transition"
              >
                Next
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcess;
