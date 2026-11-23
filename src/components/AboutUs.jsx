import React from 'react';
import { 
  Building2, 
  Target, 
  ShieldCheck, 
  Compass, 
  Layers, 
  Award, 
  UserCheck, 
  FileText,
  Boxes,
  Cpu
} from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
      
      {/* Background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-laser-50 dark:bg-laser-950/80 border border-laser-200 dark:border-laser-800 text-laser-700 dark:text-laser-300 text-xs font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>ABOUT CIRCULATECH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering the Bridge Between{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-laser-400">
              Demolition & Regeneration.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Construction and demolition waste accounts for over one-third of all global refuse. We build spatial technology to give structural assets a second lifecycle.
          </p>
        </div>

        {/* Mission Statement & Objective Block */}
        <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-lg mb-16 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-600 dark:text-brand-400 font-bold flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span>Our Core Mission & Objective</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
                Eliminating structural waste by turning pre-demolition buildings into verified, low-carbon material reservoirs.
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                CirculaTech was established to address the massive economic and environmental inefficiencies in the demolition and real estate sectors. While virgin material extraction generates enormous carbon emissions, millions of tons of structurally sound steel beams, virgin hardwoods, and industrial fixtures are landfilled simply because manual inspection, dimensional certification, and resale logistics have historically taken too long.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                By equipping field crews with high-speed LiDAR point-cloud scanners and automated building code compliance algorithms, we make reclaimed procurement as fast, transparent, and auditable as ordering virgin materials from a steel mill or lumber distributor.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-500 flex items-center justify-center font-bold">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase font-mono">Spatial Vision</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Hardware-agnostic mobile LiDAR & photogrammetry capture that dimensions structures with sub-centimeter accuracy.</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-laser-500/10 text-laser-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase font-mono">Engineering Trust</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Automated structural tolerance verification against AISC, ASTM, and municipal building codes for liability-free reuse.</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                  <Boxes className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase font-mono">Circular B2B Trade</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Direct matching engine connecting demolition sites with general contractors and architects seeking low-carbon supplies.</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                  <FileText className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase font-mono">Certified ESG Passports</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Auditable digital material dossiers and carbon diversion reports recognized by LEED v4.1 and BREEAM authorities.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Single Founder / Leadership Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-600 dark:text-slate-400 font-semibold">
              FOUNDERSHIP & LEADERSHIP
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Executive Leadership
            </h3>
          </div>

          {/* Dedicated Single Founder Profile Card */}
          <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Founder Photo Space */}
              <div className="md:col-span-5 flex flex-col items-center text-center">
                <div className="relative group">
                  
                  {/* Outer laser frame ring */}
                  <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-2xl p-1 bg-gradient-to-tr from-brand-500 via-laser-500 to-blue-600 shadow-xl shadow-brand-500/10">
                    <div className="w-full h-full rounded-[14px] bg-slate-900 overflow-hidden relative border border-slate-800">
                      <img 
                        src="/juliet.jpg" 
                        alt="Juliet - Founder & CEO of CirculaTech" 
                        className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* HUD Corner Accents */}
                      <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-laser-400"></span>
                      <span className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-laser-400"></span>
                      <span className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-laser-400"></span>
                      <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-laser-400"></span>
                    </div>
                  </div>

                </div>

                <div className="mt-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 text-xs font-mono font-bold border border-brand-200 dark:border-brand-800">
                    FOUNDER & CHIEF EXECUTIVE OFFICER
                  </span>
                </div>
              </div>

              {/* Biography Space */}
              <div className="md:col-span-7 space-y-4 text-center md:text-left">
                <div>
                  <h4 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                    Juliet
                  </h4>
                  <p className="text-xs font-mono text-laser-500 dark:text-laser-400 font-semibold mt-0.5">
                    Founder & CEO &bull; CirculaTech
                  </p>
                </div>

                {/* Founder Bio */}
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    Juliet is the Founder & CEO of CirculaTech, pioneering the convergence of autonomous spatial computing, computer vision, and industrial waste management. Driven by the mission to eliminate structural demolition waste, she architects solutions that transform buildings slated for teardown into certified, low-embodied-carbon material inventories.
                  </p>
                  <p>
                    With deep conviction in physical-world AI and regenerative infrastructure, Juliet guides CirculaTech’s development of on-site mobile LiDAR classification systems that cross-reference physical salvage against AISC and ASTM engineering tolerances. Her leadership bridges the gap between field demolition contractors and high-demand circular procurement for developers worldwide.
                  </p>
                </div>

                {/* Direct Founder Focus Pillars */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-3 text-left">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] uppercase font-mono text-slate-600 dark:text-slate-400 block font-semibold">Leadership Focus</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Applied Vision & Field Systems</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] uppercase font-mono text-slate-600 dark:text-slate-400 block font-semibold">Industry Stance</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Circular Industrial Tech</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
