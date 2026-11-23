import React from 'react';
import { 
  Scan, 
  ArrowUp, 
  ShieldCheck, 
  Building2, 
  CheckCircle2,
  Mail,
  Phone
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs font-sans relative overflow-hidden">
      
      {/* Top accent border line */}
      <div className="h-1 bg-gradient-to-r from-brand-500 via-laser-500 to-emerald-400"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-laser-500 p-0.5">
                <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
                  <Scan className="w-5 h-5 text-brand-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Circula<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-laser-400">Tech</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The autonomous spatial computing and B2B circular marketplace platform transforming building deconstruction sites into verified low-carbon supply inventories.
            </p>

            <div className="pt-2 text-slate-400 font-mono text-[11px] space-y-1">
              <div>Direct Email: <a href="mailto:juliet@circulatech.site" className="text-brand-400 hover:underline">juliet@circulatech.site</a></div>
              <div>Direct Phone: <a href="tel:+2349032360732" className="text-laser-400 hover:underline">+234 903 236 0732</a></div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Platform Overview</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#roi-calculator" className="hover:text-white transition-colors">Carbon & ROI Calculator</a></li>
              <li><a href="#marketplace" className="hover:text-white transition-colors">Reclaimed Stock Feed</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Audit & SaaS Pricing</a></li>
            </ul>
          </div>

          {/* Corporate Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">Organization</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About Us & Mission</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Leadership & Founder</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Schedule Site Audit</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Procurement Inquiries</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Support & Contact</a></li>
            </ul>
          </div>

          {/* Engineering Standards */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">Compliance & Codes</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                <span>AISC 360-16 Structural Steel</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                <span>ASTM A6 / A992 Standards</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-laser-400 shrink-0" />
                <span>USGBC LEED v4.1 Credits</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-laser-400 shrink-0" />
                <span>EU Waste Directive 2008/98</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>&copy; {new Date().getFullYear()} CirculaTech Inc. All rights reserved. Built for circular construction & physical-world deconstruction.</p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors flex items-center space-x-1.5"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
