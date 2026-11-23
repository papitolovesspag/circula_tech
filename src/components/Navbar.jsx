import React, { useState, useEffect } from 'react';
import { 
  Scan, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ChevronRight, 
  Building2, 
  Cpu, 
  Calculator, 
  Layers, 
  Tag, 
  ShieldCheck 
} from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, onOpenScanModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'how-it-works', 'roi-calculator', 'marketplace', 'pricing', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#home', id: 'home' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'ROI Calculator', href: '#roi-calculator', id: 'roi-calculator' },
    { name: 'Reclaimed Stock', href: '#marketplace', id: 'marketplace' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-panel shadow-lg shadow-black/5 dark:shadow-black/40 py-3 border-b border-slate-200/80 dark:border-slate-800/80' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Favicon representation */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 via-laser-500 to-blue-600 p-0.5 shadow-md shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-shadow">
              <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                {/* Embedded SVG icon */}
                <svg className="w-6 h-6 text-brand-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                  <circle cx="12" cy="12" r="3" stroke="#22d3ee" strokeWidth="2" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 to-laser-500/10 pointer-events-none"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white flex items-center">
                Circula<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-laser-400">Tech</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-700 dark:text-slate-400 -mt-1 font-semibold">
                LiDAR &bull; AI Compliance &bull; B2B
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 p-1 rounded-full bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-sm font-medium">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm font-semibold' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Launch Scanner Interactive Modal CTA */}
            <button
              onClick={onOpenScanModal}
              className="relative group overflow-hidden px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-laser-600 hover:from-brand-500 hover:to-laser-500 shadow-md shadow-brand-500/25 hover:shadow-brand-500/40 transition-all duration-200 flex items-center space-x-2"
            >
              <Scan className="w-4 h-4 animate-pulse" />
              <span>Simulate Site Scan</span>
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-panel border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2 animate-fadeIn">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-500"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenScanModal();
              }}
              className="w-full py-3 rounded-xl text-center font-semibold text-white bg-gradient-to-r from-brand-600 to-laser-600 flex items-center justify-center space-x-2 shadow-lg shadow-brand-500/20"
            >
              <Scan className="w-4 h-4" />
              <span>Simulate Site Scan</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
