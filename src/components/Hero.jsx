import React, { useState, useEffect } from 'react';
import { 
  Scan, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  TrendingUp, 
  Building, 
  Compass, 
  FileCheck2,
  Box,
  Eye
} from 'lucide-react';

export default function Hero({ onOpenScanModal }) {
  const [activeScanItem, setActiveScanItem] = useState(0);

  const scannedObjects = [
    {
      id: 1,
      title: "W14×90 Structural Steel Beam",
      material: "Structural Carbon Steel (ASTM A992)",
      dimensions: "36.2 ft × 14.1 in × 8.7 in",
      condition: "Certified Structural Grade A",
      confidence: "99.2%",
      carbonAvoided: "4.8 Tons CO2e",
      estimatedValue: "$3,450",
      codeCheck: "AISC 360-16 Tolerances Verified",
      color: "emerald"
    },
    {
      id: 2,
      title: "Structural Heart Pine Joists",
      material: "Virgin Longleaf Heart Pine (Old Growth)",
      dimensions: "24 ft × 2.8 in × 11.5 in (Qty: 18)",
      condition: "Sound Core / Kiln Ready",
      confidence: "97.8%",
      carbonAvoided: "3.2 Tons CO2e",
      estimatedValue: "$2,880",
      codeCheck: "NDS Timber Grade #1 Compliant",
      color: "amber"
    },
    {
      id: 3,
      title: "Commercial Chiller & Copper Conduit",
      material: "Heavy Copper 4\" + Carrier 60-Ton Unit",
      dimensions: "Modular Skid 12 ft × 6 ft",
      condition: "Functional Re-Commissionable",
      confidence: "96.4%",
      carbonAvoided: "11.5 Tons CO2e",
      estimatedValue: "$8,900",
      codeCheck: "ASHRAE Standard 15 Certified",
      color: "cyan"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScanItem((prev) => (prev + 1) % scannedObjects.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [scannedObjects.length]);

  const current = scannedObjects[activeScanItem];

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-28 overflow-hidden tech-grid-bg">
      {/* Radial glow background effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-brand-500/10 via-laser-500/15 to-blue-500/10 blur-[130px] pointer-events-none rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition, Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tech Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-mono tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping"></span>
              <span className="font-semibold">Autonomous Spatial LiDAR v2.4</span>
              <span className="text-slate-400 dark:text-slate-600">|</span>
              <span>AISC & ASTM Compliant</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Turn Demolition Sites Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-laser-400 to-teal-300">
                Certified Reclaimed
              </span>{' '}
              Material Stores.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Demolition contractors scan buildings with mobile LiDAR and computer vision. CirculaTech automatically dimensions, structural-grades, and lists certified low-embodied-carbon supplies to general contractors and architects.
            </p>

            {/* Regulatory Bullet Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs font-medium text-slate-700 dark:text-slate-300">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                <span>US Federal Buy Clean Compliant</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                <span>LEED v4.1 & BREEAM Certified</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-laser-400" />
                <span>Automated ASTM Tolerances</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onOpenScanModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-600 to-laser-600 hover:from-brand-500 hover:to-laser-500 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all duration-200 flex items-center justify-center space-x-3 text-base group"
              >
                <Scan className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                <span>Launch Interactive Scan Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center space-x-2 text-base"
              >
                <span>How The 3D Vision Works</span>
              </a>
            </div>

            {/* High-level stats bar */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">600M+</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Tons US C&D Waste Divertible</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-brand-600 dark:text-brand-400 font-mono">82%</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Embodied CO2e Saved Per Ton</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-laser-500 dark:text-laser-400 font-mono">48 Hr</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Full Structural Audit & Listing</p>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive LiDAR Point-Cloud HUD Telemetry */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glowing Border HUD Container */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-brand-500/40 via-laser-500/30 to-slate-800/80 shadow-2xl shadow-brand-500/10">
                <div className="relative rounded-[14px] bg-[#090d16] border border-slate-800 overflow-hidden text-slate-200 p-5">
                  
                  {/* Top HUD Status Bar */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-xs font-mono">
                    <div className="flex items-center space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="text-slate-300 font-semibold tracking-wider">LIVE LiDAR SCANNER FEED</span>
                    </div>
                    <span className="text-laser-400 bg-laser-950/80 px-2 py-0.5 rounded border border-laser-800">
                      POINT_CLOUD: 2.8M PTS
                    </span>
                  </div>

                  {/* Simulated 3D Vision Viewport */}
                  <div className="relative h-64 sm:h-72 w-full rounded-xl bg-slate-950 border border-slate-800/80 overflow-hidden flex items-center justify-center">
                    
                    {/* Animated Horizontal Laser Scan Sweep */}
                    <div className="scan-beam z-20"></div>

                    {/* Voxel & Coordinate Matrix Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.08)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

                    {/* Reticle / Crosshair Center */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-32 h-32 rounded-full border border-dashed border-laser-500/30 animate-radar"></div>
                      <div className="w-16 h-16 rounded-full border border-laser-400/40"></div>
                      <div className="w-1.5 h-1.5 bg-brand-400 rounded-full shadow-[0_0_8px_#34d399]"></div>
                    </div>

                    {/* Active AI Detected Bounding Box */}
                    <div className="relative z-10 w-4/5 p-4 rounded-lg border-2 border-laser-400 bg-laser-950/70 backdrop-blur-md shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all duration-500">
                      
                      {/* Bounding Box Corner Brackets */}
                      <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-brand-400"></span>
                      <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-brand-400"></span>
                      <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-brand-400"></span>
                      <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-brand-400"></span>

                      {/* Header inside bounding box */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-laser-300 mb-2">
                        <span className="flex items-center space-x-1">
                          <Eye className="w-3.5 h-3.5 text-laser-400" />
                          <span>OBJ_CLASSIFY_AI</span>
                        </span>
                        <span className="bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-bold">
                          {current.confidence}
                        </span>
                      </div>

                      {/* Item Title & Dimensions */}
                      <p className="text-base font-bold text-white truncate">{current.title}</p>
                      <p className="text-xs text-slate-300 font-mono mt-0.5">{current.dimensions}</p>

                      {/* Live Inspection Badges */}
                      <div className="mt-3 pt-2.5 border-t border-slate-700/80 flex items-center justify-between text-[11px]">
                        <div>
                          <span className="text-slate-400 block text-[10px] font-mono">SPECIFICATION</span>
                          <span className="text-emerald-300 font-medium">{current.condition}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-slate-400 block text-[10px] font-mono">EST. RECLAIM VALUE</span>
                          <span className="text-white font-mono font-bold">{current.estimatedValue}</span>
                        </div>
                      </div>

                    </div>

                    {/* Corner coordinates telemetry */}
                    <div className="absolute bottom-2 left-2 text-[9px] font-mono text-slate-500">
                      FOV: 84.6° | DEPTH: 4.82m | GPS: 37.7749° N, 122.4194° W
                    </div>
                    <div className="absolute top-2 right-2 text-[9px] font-mono text-slate-500 flex items-center space-x-1">
                      <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                      <span>CODE: AISC / LEED OK</span>
                    </div>

                  </div>

                  {/* Item Selector Ticker */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-slate-400 uppercase">Classified In Site Pass:</span>
                      <span className="text-xs font-mono text-brand-400">{activeScanItem + 1} of {scannedObjects.length}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {scannedObjects.map((obj, idx) => (
                        <button
                          key={obj.id}
                          onClick={() => setActiveScanItem(idx)}
                          className={`text-left p-2 rounded-lg text-xs font-mono transition-all duration-200 border ${
                            activeScanItem === idx
                              ? 'bg-slate-800 border-laser-400 text-white shadow-sm'
                              : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <div className="truncate font-semibold">{obj.title.split(' ')[0]}</div>
                          <div className="text-[10px] text-emerald-400 font-bold truncate">{obj.estimatedValue}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Footnote Compliance Pass */}
                  <div className="mt-4 p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>{current.codeCheck}</span>
                    </span>
                    <span className="text-brand-400 font-mono font-semibold">
                      {current.carbonAvoided} SAVED
                    </span>
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
