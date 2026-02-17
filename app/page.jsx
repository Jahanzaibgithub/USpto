'use client';
import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import DropDown from "../components/Navbar/Dropdown";
import UsptoFooter from "../components/Footer/Footer";

import BrandSelectionForm from "../components/BrandCards/BrandSelectionForm";
import BrandNameForm from "../components/BrandCards/BrandNameForm";
import BrandSloganForm from "../components/BrandCards/BrandSloganForm";
import BrandLogoForm from "../components/BrandCards/BrandLogoForm";
import Personalinfo from "../components/BrandCards/Personalinfo";
import PaymentPage from "../components/BrandCards/PayementPage";

export default function Home() {
  const [step, setStep] = useState('selection'); // tracks which form to show
  const [selectedOption, setSelectedOption] = useState(''); // Name, Slogan, Logo

  // Step 1 → selection
  const handleContinueFromSelection = (option) => {
    setSelectedOption(option);
    if (option === 'name') setStep('name');
    if (option === 'slogan') setStep('slogan');
    if (option === 'logo') setStep('logo');
  };

  // Back to selection
  const handleBackToSelection = () => {
    setStep('selection');
  };

  // Step 2 → after completing Name/Slogan/Logo
  const handleContinueToPersonalInfo = () => {
    setStep('personalInfo');
  };

  // Step 3 → after Personalinfo, move to PaymentPage
  const handleContinueToPayment = () => {
    setStep('payment');
  };

  return (
    <main className="flex flex-col">
      <Navbar />
      <DropDown />

      {/* Wizard Step */}
      {step === 'selection' && (
        <BrandSelectionForm onContinue={handleContinueFromSelection} />
      )}
      {step === 'name' && (
        <BrandNameForm 
          onBack={handleBackToSelection} 
          onContinue={handleContinueToPersonalInfo} 
        />
      )}
      {step === 'slogan' && (
        <BrandSloganForm 
          onBack={handleBackToSelection} 
          onContinue={handleContinueToPersonalInfo} 
        />
      )}
      {step === 'logo' && (
        <BrandLogoForm 
          onBack={handleBackToSelection} 
          onContinue={handleContinueToPersonalInfo} 
        />
      )}
      {step === 'personalInfo' && (
        <Personalinfo onContinue={handleContinueToPayment} />
      )}
      {step === 'payment' && (
        <PaymentPage />
      )}

      <UsptoFooter />
    </main>
  );
}
