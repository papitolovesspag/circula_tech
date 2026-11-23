import React, { useState } from 'react';
import { 
  Scan, 
  ShieldCheck, 
  Store, 
  Layers, 
  Cpu, 
  FileSpreadsheet, 
  ArrowRight, 
  Check, 
  RotateCw, 
  Boxes, 
  Sparkles, 
  Flame, 
  HardHat, 
  Activity,
  Award,
  TrendingUp,
  FileCheck2,
  ChevronRight
} from 'lucide-react';

export default function HowItWorks({ onOpenScanModal }) {
  const [activeStep, setActiveStep] = useState(1);
  const [inspectionAngle, setInspectionAngle] = useState('front');
  const [toleranceFilter, setToleranceFilter] = useState('all');

  const steps = [
    {
      step: 1,
      tag: "PHASE 01: CAPTURE",
      title: "Spatial LiDAR & Multimodal 3D Vision",
      shortDesc: "Contractors walk through pre-demolition sites with mobile LiDAR & video. AI classifies & dimensions reusable elements in real time.",
      icon: Scan,
      color: "from-cyan-500 to-blue-600",
      accent: "text-laser-400",
      border: "border-laser-500/40"
    },
    {
      step: 2,
      tag: "PHASE 02: VERIFICATION",
      title: "Automated Structural & Code Compliance",
      shortDesc: "Machine learning cross-references scans with AISC, ASTM, and municipal building codes to certify structural integrity and deflection.",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-600",
      accent: "text-brand-400",
      border: "border-brand-500/40"
    },
    {
      step: 3,
      tag: "PHASE 03: MONETIZATION",
      title: "Automated B2B Circular Marketplace",
      shortDesc: "Certified inventories are instantly listed to architects and GCs seeking low-embodied-carbon supplies to fulfill LEED & ESG mandates.",
      icon: Store,
      color: "from-blue-500 to-emerald-500",
      accent: "text-blue-400",
      border: "border-blue-500/40"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-slate-100/60 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800 relative overflow-hidden">
      
      {/* Background Tech Elements */}
      <div className="absolute inset-0 tech-grid-bg opacity-70 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-laser-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-laser-50 dark:bg-laser-950/80 border border-laser-200 dark:border-laser-800 text-laser-700 dark:text-laser-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>HOW CIRCULATECH WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            From Wrecking Ball to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-laser-400 to-emerald-400">
              Certified Inventory
            </span>{' '}
            in 3 Steps.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A comprehensive hardware-agnostic platform transforming demolition debris into verified, engineered assets before mechanical tear-down begins.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {steps.map((s) => {
            const Icon = s.icon;
            const isActive = activeStep === s.step;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`relative text-left p-6 rounded-2xl transition-all duration-300 border ${
                  isActive
                    ? 'bg-white dark:bg-slate-800/90 shadow-xl shadow-brand-500/5 border-laser-400 dark:border-laser-400 ring-2 ring-laser-400/20'
                    : 'bg-white/70 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-800/60 border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold tracking-wider ${isActive ? s.accent : 'text-slate-600 dark:text-slate-400'}`}>
                    {s.tag}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isActive ? `bg-gradient-to-br ${s.color} text-white shadow-md` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">{s.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{s.shortDesc}</p>

                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-laser-400 to-brand-400 rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive 3-Stage Animated Visualizer Screen */}
        <div className="rounded-2xl p-1 bg-gradient-to-r from-slate-200 via-laser-500/20 to-brand-500/20 dark:from-slate-800 dark:via-laser-500/30 dark:to-brand-500/30 shadow-2xl">
          <div className="rounded-[14px] bg-[#090d16] text-slate-100 p-6 sm:p-8 overflow-hidden relative">
            
            {/* Stage Indicator Toolbar */}
            <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-3">
              <div className="flex items-center space-x-3">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-laser-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-laser-500"></span>
                </span>
                <span className="text-sm font-mono font-semibold text-slate-200">
                  SIMULATOR MODE: {steps[activeStep - 1].title.toUpperCase()}
                </span>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono">
                <button
                  onClick={() => setInspectionAngle(inspectionAngle === 'front' ? 'iso' : 'front')}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center space-x-1.5 border border-slate-700"
                >
                  <RotateCw className="w-3.5 h-3.5 text-laser-400" />
                  <span>VIEW: {inspectionAngle.toUpperCase()}</span>
                </button>
                <button
                  onClick={onOpenScanModal}
                  className="px-3 py-1.5 rounded-lg bg-brand-500/20 hover:bg-brand-500/30 text-brand-300 flex items-center space-x-1.5 border border-brand-500/40 font-semibold"
                >
                  <Scan className="w-3.5 h-3.5 text-brand-400" />
                  <span>TEST SCANNER LIVE</span>
                </button>
              </div>
            </div>

            {/* STAGE 1 VISUALIZER: SPATIAL LIDAR & MULTIMODAL 3D VISION */}
            {activeStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left: Interactive Simulated Room Sweep Viewport */}
                  <div className="lg:col-span-7 relative h-80 sm:h-96 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col justify-between p-4">
                    {/* Sweeping Laser Line */}
                    <div className="scan-beam"></div>

                    {/* Laser point grid background */}
                    <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

                    {/* Simulated 3D Demolition Site Mesh Items */}
                    <div className="relative z-10 w-full h-full flex items-center justify-around">
                      
                      {/* Item 1: Steel Beam */}
                      <div className="relative p-3 rounded-lg border-2 border-laser-400 bg-laser-950/80 shadow-[0_0_20px_rgba(6,182,212,0.4)] text-center animate-pulse">
                        <span className="text-[10px] font-mono text-laser-300 uppercase block font-bold">W18×35 BEAM</span>
                        <span className="text-xs font-mono text-emerald-400 font-semibold">CONF: 99.1%</span>
                        <div className="text-[9px] text-slate-400 font-mono mt-1">L: 28.4ft | FLANGE: 6.0in</div>
                      </div>

                      {/* Item 2: Timber Joists */}
                      <div className="relative p-3 rounded-lg border-2 border-amber-400/80 bg-amber-950/70 shadow-[0_0_20px_rgba(245,158,11,0.25)] text-center">
                        <span className="text-[10px] font-mono text-amber-300 uppercase block font-bold">DOUGLAS FIR TIMBER</span>
                        <span className="text-xs font-mono text-emerald-400 font-semibold">CONF: 97.4%</span>
                        <div className="text-[9px] text-slate-400 font-mono mt-1">QTY: 34 EA | 16ft 2×10</div>
                      </div>

                      {/* Item 3: Copper Conduit */}
                      <div className="hidden sm:block relative p-3 rounded-lg border-2 border-emerald-400/80 bg-emerald-950/70 shadow-[0_0_20px_rgba(16,185,129,0.25)] text-center">
                        <span className="text-[10px] font-mono text-emerald-300 uppercase block font-bold">COPPER BUSBAR</span>
                        <span className="text-xs font-mono text-emerald-400 font-semibold">CONF: 98.7%</span>
                        <div className="text-[9px] text-slate-400 font-mono mt-1">WEIGHT: 1,420 LBS</div>
                      </div>

                    </div>

                    {/* Bottom Telemetry Ticker */}
                    <div className="relative z-10 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>RADIAL DEPTH SENSORS: 64-BEAM LIDAR</span>
                      <span className="text-laser-400">POINT CLOUD RESOLUTION: 0.5MM</span>
                      <span>FPS: 60.0 STABLE</span>
                    </div>
                  </div>

                  {/* Right: Technical Explanation & Live Classification List */}
                  <div className="lg:col-span-5 space-y-4">
                    <h4 className="text-xl font-bold text-white flex items-center space-x-2">
                      <Cpu className="w-5 h-5 text-laser-400" />
                      <span>Multimodal Computer Vision Engine</span>
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      While standard demolition software relies on slow manual clipboard audits, CirculaTech ingests raw spatial point clouds, photogrammetry, and ultrasonic density scans to automatically isolate and catalog elements.
                    </p>

                    <div className="space-y-2.5 pt-2">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-md bg-laser-500/20 text-laser-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">1</div>
                        <div>
                          <p className="text-xs font-semibold text-white">Sub-Centimeter Dimensional Extraction</p>
                          <p className="text-xs text-slate-400">Computes true length, web thickness, camber, and volumetric density without destructive removal.</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-md bg-laser-500/20 text-laser-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">2</div>
                        <div>
                          <p className="text-xs font-semibold text-white">Neural Material Segmentation</p>
                          <p className="text-xs text-slate-400">Differentiates high-purity copper, austenitic stainless steel, and reclaimed timber species from painted rubble.</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-md bg-laser-500/20 text-laser-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">3</div>
                        <div>
                          <p className="text-xs font-semibold text-white">Autonomous Manifest Generation</p>
                          <p className="text-xs text-slate-400">Generates instant digital bills of materials (BOM) exportable directly to Procore, Autodesk Revit, and IFC models.</p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveStep(2)}
                      className="w-full py-2.5 rounded-xl font-semibold text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 flex items-center justify-center space-x-2 transition-colors"
                    >
                      <span>PROCEED TO STAGE 02: CODE COMPLIANCE</span>
                      <ChevronRight className="w-4 h-4 text-laser-400" />
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* STAGE 2 VISUALIZER: AUTOMATED STRUCTURAL COMPLIANCE CHECK */}
            {activeStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left: Interactive Engineering Stress & Deflection Tester */}
                  <div className="lg:col-span-7 relative h-80 sm:h-96 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col justify-between p-5">
                    
                    {/* Top Code Status Header */}
                    <div className="flex items-center justify-between text-xs font-mono border-b border-slate-800/80 pb-3">
                      <span className="text-emerald-400 flex items-center space-x-1.5 font-bold">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>AISC 360-16 / ASTM A6 VERIFIED</span>
                      </span>
                      <span className="text-slate-400">TOLERANCE DEFLECTION: &lt; L/360 PASS</span>
                    </div>

                    {/* Stress Analysis Graphic Mockup */}
                    <div className="my-auto space-y-4">
                      
                      {/* Simulated Finite Element Analysis (FEA) Stress Gradient Bar */}
                      <div>
                        <div className="flex justify-between text-xs font-mono text-slate-400 mb-1.5">
                          <span>STRUCTURAL STRESS DISTRIBUTION (FEA)</span>
                          <span className="text-emerald-400 font-bold">32.4 KSI / 50.0 KSI YIELD</span>
                        </div>
                        <div className="h-4 rounded-full bg-slate-800 overflow-hidden p-0.5 border border-slate-700">
                          <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-500 w-3/5"></div>
                        </div>
                      </div>

                      {/* Tolerance checklist table */}
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                          <div className="text-slate-400 text-[10px] font-mono">FLANGE WARP & CAMBER</div>
                          <div className="text-emerald-400 font-bold font-mono mt-1 flex items-center space-x-1">
                            <Check className="w-3.5 h-3.5" />
                            <span>0.12 in (Within 0.25 in limit)</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                          <div className="text-slate-400 text-[10px] font-mono">CORROSION / SECTION LOSS</div>
                          <div className="text-emerald-400 font-bold font-mono mt-1 flex items-center space-x-1">
                            <Check className="w-3.5 h-3.5" />
                            <span>0.8% (&lt; 5% Code Max)</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                          <div className="text-slate-400 text-[10px] font-mono">TIMBER FIBER INTEGRITY</div>
                          <div className="text-emerald-400 font-bold font-mono mt-1 flex items-center space-x-1">
                            <Check className="w-3.5 h-3.5" />
                            <span>No Rot / Core Density 100%</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                          <div className="text-slate-400 text-[10px] font-mono">ASBESTOS / LEAD ALERT</div>
                          <div className="text-emerald-400 font-bold font-mono mt-1 flex items-center space-x-1">
                            <Check className="w-3.5 h-3.5" />
                            <span>CLEARED (XRF Spectral Match)</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="text-[11px] font-mono text-slate-500 border-t border-slate-800/80 pt-2 flex justify-between">
                      <span>AUTOMATED PE-STAMP DIGITAL RECORD</span>
                      <span className="text-brand-400">HASH: 0x9f4a...e12d</span>
                    </div>

                  </div>

                  {/* Right: Technical Explanation */}
                  <div className="lg:col-span-5 space-y-4">
                    <h4 className="text-xl font-bold text-white flex items-center space-x-2">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      <span>Automated Structural Engineering Logic</span>
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Reclaimed structural members are historically rejected by conservative general contractors due to liability fears. CirculaTech eliminates this friction by automating structural tolerance verification.
                    </p>

                    <div className="space-y-3 pt-1">
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="flex items-center space-x-2 font-semibold text-xs text-white mb-1">
                          <HardHat className="w-4 h-4 text-emerald-400" />
                          <span>AISC, NDS & Eurocode Tolerance Mapping</span>
                        </div>
                        <p className="text-xs text-slate-400">
                          Cross-checks cross-sectional flange measurements and bolt hole geometries against ASTM standard specification tables.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="flex items-center space-x-2 font-semibold text-xs text-white mb-1">
                          <FileCheck2 className="w-4 h-4 text-emerald-400" />
                          <span>Digital Material Passport & PE Stamp Readiness</span>
                        </div>
                        <p className="text-xs text-slate-400">
                          Generates auditable structural engineering compliance dossiers that professional engineers (PEs) and building inspectors can sign off on with one click.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveStep(3)}
                      className="w-full py-2.5 rounded-xl font-semibold text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 flex items-center justify-center space-x-2 transition-colors"
                    >
                      <span>PROCEED TO STAGE 03: CIRCULAR MARKETPLACE</span>
                      <ChevronRight className="w-4 h-4 text-brand-400" />
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* STAGE 3 VISUALIZER: AUTOMATED B2B CIRCULAR MARKETPLACE */}
            {activeStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left: Reclaimed Material Listing Card in Marketplace */}
                  <div className="lg:col-span-7 relative h-80 sm:h-96 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col justify-between p-5">
                    
                    {/* Marketplace Header */}
                    <div className="flex items-center justify-between text-xs font-mono border-b border-slate-800 pb-3">
                      <span className="text-laser-400 font-bold flex items-center space-x-1.5">
                        <Store className="w-4 h-4" />
                        <span>LIVE B2B BUYER MATCH FEED</span>
                      </span>
                      <span className="text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                        3 BIDDERS MATCHED IN RADIUS (45 MI)
                      </span>
                    </div>

                    {/* Listing Card Preview */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 my-auto space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="inline-block px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 text-[10px] font-mono font-bold uppercase mb-1">
                            CERTIFIED RECLAIMED STRUCTURAL STEEL
                          </div>
                          <h5 className="text-base font-bold text-white">Lot #CT-8924: 18x AISC W18×35 Beams (511 Total LF)</h5>
                          <p className="text-xs text-slate-400 font-mono">Location: Bay Area Commercial Tear-down | Demolition Date: Oct 2026</p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-mono font-bold text-white block">$14,250</span>
                          <span className="text-[10px] text-emerald-400 font-mono">40% Below Virgin Steel</span>
                        </div>
                      </div>

                      {/* Carbon Offsetting Badges */}
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <Sparkles className="w-4 h-4 text-emerald-400" />
                          <span className="text-slate-300 font-medium">Embodied Carbon Offset:</span>
                        </div>
                        <span className="text-emerald-400 font-mono font-bold">28.4 MT CO2e Saved</span>
                      </div>

                      {/* Match Candidates */}
                      <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between pt-1">
                        <span>Matched Buyer: Skanska Commercial / LEED Platinum Target</span>
                        <span className="text-laser-400 font-semibold">Procurement PO Ready</span>
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-slate-500 border-t border-slate-800/80 pt-2 flex justify-between">
                      <span>TRANSACTION COMMISSION: 7.0%</span>
                      <span className="text-emerald-400">LOGISTICS & FLATBED ESCROW INCLUDED</span>
                    </div>

                  </div>

                  {/* Right: Business Model & Architecture Explanation */}
                  <div className="lg:col-span-5 space-y-4">
                    <h4 className="text-xl font-bold text-white flex items-center space-x-2">
                      <Store className="w-5 h-5 text-blue-400" />
                      <span>Direct B2B Procurement Liquidity</span>
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Instead of paying tipping fees to haul pristine steel and rare hardwoods to landfills, demolition contractors generate pure salvage revenue while developers satisfy mandatory low-carbon procurement quotas.
                    </p>

                    <div className="space-y-3 pt-1">
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                        <p className="text-xs font-semibold text-white">Algorithmic Buyer-to-Site Matching</p>
                        <p className="text-xs text-slate-400 mt-1">
                          Automatically notifies local architects, framing contractors, and structural engineers who have active spec sheets requesting reclaimed materials.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                        <p className="text-xs font-semibold text-white">Automated Chain of Custody & ESG Auditing</p>
                        <p className="text-xs text-slate-400 mt-1">
                          Issues cryptographically signed diversion receipts recognized by municipal building departments for LEED v4.1 and EU Waste Framework compliance.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveStep(1)}
                      className="w-full py-2.5 rounded-xl font-semibold text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 flex items-center justify-center space-x-2 transition-colors"
                    >
                      <RotateCw className="w-3.5 h-3.5 text-laser-400" />
                      <span>RESTART 3-STEP WALKTHROUGH</span>
                    </button>
                  </div>

                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
