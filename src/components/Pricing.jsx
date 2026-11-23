import React, { useState } from 'react';
import { 
  Check, 
  HelpCircle, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Building, 
  HardHat, 
  Zap,
  Tag
} from 'lucide-react';

export default function Pricing({ onOpenScanModal }) {
  const [billingCycle, setBillingCycle] = useState('perScan'); // 'perScan' or 'annualSaaS'

  const tiers = [
    {
      name: "Field Scanner",
      tagline: "For regional demolition contractors & local salvage operators.",
      perScanPrice: "$1,499",
      perScanSubtext: "per single site audit",
      saasPrice: "$499",
      saasSubtext: "/month billed annually",
      takeRate: "10% Marketplace Take-Rate",
      popular: false,
      badge: "STARTER DECONSTRUCTION",
      buttonText: "Schedule Field Scan",
      features: [
        "Up to 25,000 sq ft building scan scope",
        "Mobile LiDAR & photogrammetry capture",
        "Automated material classification (Steel, Timber, Copper)",
        "Standard Bill of Materials (BOM) export (CSV / PDF)",
        "Marketplace listing in 50-mile radius",
        "72-hour regulatory waste diversion report",
        "Standard email & field support"
      ]
    },
    {
      name: "Commercial Pro",
      tagline: "For commercial demolition firms, general contractors & developers.",
      perScanPrice: "$3,999",
      perScanSubtext: "per commercial site audit",
      saasPrice: "$1,299",
      saasSubtext: "/month billed annually",
      takeRate: "7% Marketplace Take-Rate",
      popular: true,
      badge: "MOST POPULAR FOR GC TEAMS",
      buttonText: "Request Pro Site Audit",
      features: [
        "Up to 150,000 sq ft complex building scope",
        "Automated AISC 360-16 & ASTM tolerance verification",
        "Official LEED v4.1 & BREEAM diversion dossier",
        "Ultrasonic & dimensional camber deflection checks",
        "Procore & Autodesk Construction Cloud integration",
        "Direct buyer matching & escrow-backed logistics coordination",
        "Fast 24-hour turnaround on verified manifests",
        "Priority field engineer technical support"
      ]
    },
    {
      name: "Enterprise Circular",
      tagline: "For multi-site industrial portfolios, REITs & infrastructure projects.",
      perScanPrice: "Custom Quote",
      perScanSubtext: "volume portfolio pricing",
      saasPrice: "$3,499+",
      saasSubtext: "/month customized SLA",
      takeRate: "5% Preferred Volume Take-Rate",
      popular: false,
      badge: "ENTERPRISE & REITS",
      buttonText: "Contact Enterprise Solutions",
      features: [
        "Unlimited square footage across national portfolio",
        "Custom structural tolerances & PE engineering stamp sign-off",
        "Corporate Scope 3 embodied carbon offset certification",
        "Dedicated Circular Economy compliance advisor",
        "Enterprise API & webhook sync (SAP, Oracle, Trimble)",
        "On-site mobile scanning hardware dispatch option",
        "Guaranteed 12-hour audit processing SLA",
        "Custom master service agreement (MSA) & compliance indemnity"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white dark:bg-[#090d16] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-500/5 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/80 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-mono">
            <Tag className="w-3.5 h-3.5" />
            <span>TRANSPARENT VALUE-BASED PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Predictable Audits.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-laser-400">
              High-Yield Salvage.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Choose between per-scan pre-demolition audit packages or an ongoing SaaS membership with preferred marketplace transaction rates.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium mt-4">
            <button
              onClick={() => setBillingCycle('perScan')}
              className={`px-5 py-2 rounded-xl transition-all duration-200 ${
                billingCycle === 'perScan'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow font-semibold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Per-Site Scan Audits
            </button>
            <button
              onClick={() => setBillingCycle('annualSaaS')}
              className={`px-5 py-2 rounded-xl transition-all duration-200 flex items-center space-x-1.5 ${
                billingCycle === 'annualSaaS'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow font-semibold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Annual SaaS License</span>
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                tier.popular
                  ? 'glass-panel border-2 border-laser-400 dark:border-laser-400 shadow-2xl shadow-laser-500/10 scale-100 lg:-translate-y-2'
                  : 'glass-panel border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
              }`}
            >
              {/* Popular Ribbon */}
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-laser-500 to-brand-500 text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-md">
                  {tier.badge}
                </div>
              )}

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                    {tier.name}
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 min-h-[32px]">
                    {tier.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-extrabold font-mono text-slate-900 dark:text-white">
                      {billingCycle === 'perScan' ? tier.perScanPrice : tier.saasPrice}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {billingCycle === 'perScan' ? tier.perScanSubtext : tier.saasSubtext}
                    </span>
                  </div>

                  {/* Marketplace Commission Pill */}
                  <div className="mt-3 inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs font-mono">
                    <Zap className="w-3.5 h-3.5 text-laser-400" />
                    <span className="font-semibold">{tier.takeRate}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block">
                    What is included:
                  </span>
                  <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={onOpenScanModal}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase font-mono tracking-wider transition-all duration-200 flex items-center justify-center space-x-2 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-brand-600 to-laser-600 hover:from-brand-500 hover:to-laser-500 text-white shadow-lg shadow-brand-500/25'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                  }`}
                >
                  <span>{tier.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Regulatory Waste Audit Guarantee */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-6 h-6 text-brand-500 shrink-0" />
            <p className="text-slate-600 dark:text-slate-300">
              <strong className="text-slate-900 dark:text-white">Regulatory Audit Compliance Guaranteed:</strong> All CirculaTech pre-demolition scans generate certified waste-diversion documentation compliant with US Federal Buy Clean standards and EU Directive 2008/98/EC.
            </p>
          </div>
          <a href="#contact" className="text-brand-600 dark:text-brand-400 font-bold whitespace-nowrap hover:underline">
            Talk to an Audit Specialist &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
