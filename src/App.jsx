import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import CarbonCalculator from './components/CarbonCalculator';
import MarketplacePreview from './components/MarketplacePreview';
import Pricing from './components/Pricing';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import DemoScannerModal from './components/DemoScannerModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      
      {/* Sticky Navigation HUD */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenScanModal={() => setIsScanModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero & Overview */}
        <Hero 
          onOpenScanModal={() => setIsScanModalOpen(true)} 
        />

        {/* Section 2: How It Works (Animation/Visual Heavy 3-Stage Simulator) */}
        <HowItWorks 
          onOpenScanModal={() => setIsScanModalOpen(true)} 
        />

        {/* Section 3: Interactive Embodied Carbon & Reclaimed Salvage Value Calculator */}
        <CarbonCalculator 
          onOpenScanModal={() => setIsScanModalOpen(true)} 
        />

        {/* Section 4: Live Reclaimed Material Catalog Feed & Dossier Inspection */}
        <MarketplacePreview 
          onOpenScanModal={() => setIsScanModalOpen(true)} 
        />

        {/* Section 5: 3-Tier Pricing (Field Scanner, Commercial Pro, Enterprise Circular) */}
        <Pricing 
          onOpenScanModal={() => setIsScanModalOpen(true)} 
        />

        {/* Section 6: About Us (Mission, Objective, Single Founder/CEO Spotlight) */}
        <AboutUs />

        {/* Section 7: Contact Us (Dedicated 1 Email, 1 Phone Placeholder, Interactive Form) */}
        <ContactUs />
      </main>

      {/* Footer & Engineering Standards */}
      <Footer />

      {/* Interactive Mobile LiDAR Scanner Simulation Modal */}
      <DemoScannerModal 
        isOpen={isScanModalOpen} 
        onClose={() => setIsScanModalOpen(false)} 
      />

    </div>
  );
}
