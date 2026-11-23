import React, { useState, useId } from 'react';
import { 
  Calculator, 
  Leaf, 
  DollarSign, 
  TrendingUp, 
  Building2, 
  Trash2, 
  FileCheck, 
  ArrowRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

export default function CarbonCalculator({ onOpenScanModal }) {
  const [buildingType, setBuildingType] = useState('industrial');
  const [sqft, setSqft] = useState(45000);
  const [scope, setScope] = useState('full');

  const buildingTypes = [
    { id: 'industrial', name: 'Industrial Warehouse', baseTonFactor: 0.055, carbonFactor: 0.72, valPerTon: 110, icon: '🏭' },
    { id: 'commercial', name: 'Commercial Office Tower', baseTonFactor: 0.045, carbonFactor: 0.65, valPerTon: 135, icon: '🏢' },
    { id: 'historic', name: 'Historic Masonry & Timber', baseTonFactor: 0.065, carbonFactor: 0.85, valPerTon: 160, icon: '🏛️' },
    { id: 'residential', name: 'Multi-Family Residential', baseTonFactor: 0.038, carbonFactor: 0.58, valPerTon: 95, icon: '🏘️' },
  ];

  const scopes = [
    { id: 'full', name: 'Full Structural Deconstruction', multiplier: 1.0 },
    { id: 'shell', name: 'Core & Shell Structural Strip', multiplier: 0.75 },
    { id: 'interior', name: 'Selective Interior Salvage', multiplier: 0.45 },
  ];

  const currentType = buildingTypes.find(t => t.id === buildingType) || buildingTypes[0];
  const currentScope = scopes.find(s => s.id === scope) || scopes[0];

  // Calculations
  const divertedTons = Math.round(sqft * currentType.baseTonFactor * currentScope.multiplier);
  const carbonAvoidedMT = Math.round(divertedTons * currentType.carbonFactor);
  const carsEquivalent = Math.round(carbonAvoidedMT / 4.6); // EPA 4.6 MT CO2e per passenger car / year
  const grossSalvageValue = Math.round(divertedTons * currentType.valPerTon);
  const savedTippingFees = Math.round(divertedTons * 82); // ~$82 per ton average landfill tipping fee in US
  const totalFinancialBenefit = grossSalvageValue + savedTippingFees;

  const buildingTypeSelectId = useId();
  const squareFootageSliderId = useId();

  return (
    <section id="roi-calculator" className="py-20 lg:py-28 bg-white dark:bg-[#090d16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/80 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-mono">
            <Calculator className="w-3.5 h-3.5" />
            <span>ESTIMATE YOUR SITE YIELD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Embodied Carbon &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-laser-400">
              Salvage Value
            </span>{' '}
            Calculator
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Quantify the tons of construction waste you can divert from landfills, your avoided disposal tipping fees, and projected resale revenue.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Controls */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
            
            {/* Input 1: Building Type */}
            <div>
              <label htmlFor={buildingTypeSelectId} className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3 font-semibold">
                1. Select Asset Archetype
              </label>
              <select
                id={buildingTypeSelectId}
                value={buildingType}
                onChange={(e) => setBuildingType(e.target.value)}
                aria-label="Select Asset Archetype"
                className="sr-only"
              >
                {buildingTypes.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
              <div className="grid grid-cols-2 gap-3">
                {buildingTypes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setBuildingType(t.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all duration-200 flex items-center space-x-3 ${
                      buildingType === t.id
                        ? 'border-brand-500 bg-brand-50/50 dark:bg-brand-950/40 text-brand-900 dark:text-white shadow-sm ring-1 ring-brand-500'
                        : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <span className="text-2xl">{t.icon}</span>
                    <div className="truncate">
                      <p className="text-xs font-bold truncate">{t.name}</p>
                      <p className="text-[10px] text-slate-600 dark:text-slate-400 font-mono">Yield: ~{t.baseTonFactor * 1000} tons/M sf</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Input 2: Square Footage Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={squareFootageSliderId} className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold">
                  2. Building Gross Square Footage
                </label>
                <span className="font-mono text-base font-extrabold text-brand-600 dark:text-brand-400">
                  {sqft.toLocaleString()} sq ft
                </span>
              </div>
              <input
                id={squareFootageSliderId}
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                aria-label="Building Gross Square Footage in square feet"
                className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-600 dark:text-slate-400 mt-1">
                <span>5k sq ft (Small)</span>
                <span>100k sq ft</span>
                <span>250k+ sq ft (Major Complex)</span>
              </div>
            </div>

            {/* Input 3: Scope */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3 font-semibold">
                3. Decommissioning & Demolition Scope
              </label>
              <div className="space-y-2">
                {scopes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setScope(s.id)}
                    className={`w-full p-3 rounded-xl text-left border text-xs font-medium transition-all duration-200 flex items-center justify-between ${
                      scope === s.id
                        ? 'border-laser-400 bg-laser-50/50 dark:bg-laser-950/40 text-slate-900 dark:text-white font-bold'
                        : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    <span>{s.name}</span>
                    <span className="font-mono text-[11px] text-slate-600 dark:text-slate-400">
                      {Math.round(s.multiplier * 100)}% Max Recovery
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
              <span className="text-brand-500 font-bold">&bull; COMPLIANCE NOTE:</span> Calculations derived from EPA WARM v15 and AISC structural carbon coefficient standards for recycled and reused heavy metals and structural timber.
            </div>

          </div>

          {/* Right: Output Telemetry & Financial Return */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Total Financial Benefit Card */}
            <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-brand-950 border border-brand-500/30 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <DollarSign className="w-36 h-36 text-brand-400" />
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-300 font-semibold">
                    PROJECTED NET FINANCIAL RECOVERY
                  </span>
                  <span className="px-2.5 py-1 rounded bg-brand-500/20 text-brand-300 text-xs font-mono font-bold">
                    ESTIMATED
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
                  ${totalFinancialBenefit.toLocaleString()}
                </div>

                <p className="text-xs text-slate-300">
                  Combined projected reclaimed material marketplace gross sales + direct savings on avoided municipal landfill disposal tipping fees.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                  <div>
                    <span className="text-[11px] text-slate-400 font-mono uppercase block">Gross Reclaimed Resale</span>
                    <span className="text-xl font-bold font-mono text-emerald-400">
                      ${grossSalvageValue.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-mono uppercase block">Avoided Landfill Tipping</span>
                    <span className="text-xl font-bold font-mono text-laser-400">
                      ${savedTippingFees.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Environmental & Carbon Metrics Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Metric 1 */}
              <div className="glass-panel rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-brand-600 dark:text-brand-400 text-xs font-mono font-semibold">
                  <Trash2 className="w-4 h-4" />
                  <span>C&D WASTE DIVERTED</span>
                </div>
                <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
                  {divertedTons.toLocaleString()} <span className="text-sm font-sans font-normal text-slate-600 dark:text-slate-400">Tons</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Structural steel, clean framing timber, and masonry spared from landfills.
                </p>
              </div>

              {/* Metric 2 */}
              <div className="glass-panel rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-laser-500 dark:text-laser-400 text-xs font-mono font-semibold">
                  <Leaf className="w-4 h-4" />
                  <span>EMBODIED CO2e AVOIDED</span>
                </div>
                <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
                  {carbonAvoidedMT.toLocaleString()} <span className="text-sm font-sans font-normal text-slate-600 dark:text-slate-400">MT CO2e</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Equivalent to taking <span className="font-semibold text-slate-900 dark:text-white">{carsEquivalent.toLocaleString()}</span> gas cars off the road for a year.
                </p>
              </div>

            </div>

            {/* CTA Callout */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-center sm:text-left">
                <p className="text-xs font-semibold text-slate-900 dark:text-white">Need a Certified Pre-Demolition Audit?</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Receive an official stamped waste-diversion plan in 48 hours.</p>
              </div>
              <button
                onClick={onOpenScanModal}
                className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 transition-colors shrink-0 flex items-center justify-center space-x-1.5"
              >
                <span>Book Site Scan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
