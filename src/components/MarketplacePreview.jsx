import React, { useState } from 'react';
import { 
  Store, 
  Tag, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Filter, 
  ExternalLink, 
  Check, 
  X, 
  Layers, 
  ArrowUpRight 
} from 'lucide-react';

export default function MarketplacePreview({ onOpenScanModal }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    { id: 'all', label: 'All Certified Materials' },
    { id: 'steel', label: 'Structural Steel (AISC)' },
    { id: 'timber', label: 'Reclaimed Timber (NDS)' },
    { id: 'masonry', label: 'Architectural Brick & Stone' },
    { id: 'mep', label: 'MEP & Industrial Chillers' },
  ];

  const inventory = [
    {
      id: "LOT-901",
      category: "steel",
      title: "AISC W12×53 Wide Flange Beams",
      specs: "Grade ASTM A992 | 840 Total Linear Ft (14 beams @ 60ft)",
      dimensions: "Depth: 12.06\" | Web: 0.345\" | Flange: 10.00\"",
      origin: "Commercial Office Demolition, San Francisco CA",
      condition: "Certified Class A (Zero Camber Distortion)",
      carbonAvoided: "14.2 MT CO2e",
      price: "$11,200",
      virginPriceEquiv: "$19,500",
      status: "Available for Immediate Flatbed Dispatch",
      complianceCode: "AISC 360-16 / ASTM A6 Stamped",
      imageUrl: "/materials/steel-beams.jpg"
    },
    {
      id: "LOT-902",
      category: "timber",
      title: "Virgin Heart Pine Heavy Joists",
      specs: "Old-Growth Longleaf Pine | 3,400 Board Feet",
      dimensions: "True 3\" × 12\" × 22ft | De-nailed & Surface Planed",
      origin: "Historic 1910 Textile Mill, Charlotte NC",
      condition: "Kiln-Dried / Moisture < 11%",
      carbonAvoided: "8.6 MT CO2e",
      price: "$6,800",
      virginPriceEquiv: "$12,400",
      status: "Reserved (Skanska General Contracting)",
      complianceCode: "NDS Structural Grade #1 Verified",
      imageUrl: "/materials/timber-joists.jpg"
    },
    {
      id: "LOT-903",
      category: "masonry",
      title: "Historic Chicago Common Clinker Brick",
      specs: "High-fired clay | 22 Pallets (11,000 Total Bricks)",
      dimensions: "8\" × 3.75\" × 2.25\" | Mortar-cleaned",
      origin: "Industrial Warehouse Deconstruction, Chicago IL",
      condition: "ASTM C62 Severe Weathering Grade SW",
      carbonAvoided: "4.9 MT CO2e",
      price: "$4,950",
      virginPriceEquiv: "$9,100",
      status: "Ready for Delivery",
      complianceCode: "ASTM C62 / Brick Institute BIA Certified",
      imageUrl: "/materials/reclaimed-brick.jpg"
    },
    {
      id: "LOT-904",
      category: "mep",
      title: "Trane 80-Ton Modular Water-Cooled Chiller",
      specs: "Model RTWD | R-134a Clean System | 460V 3-Phase",
      dimensions: "10.5 ft × 4.2 ft × 6.8 ft Skid",
      origin: "Data Center Modernization, Ashburn VA",
      condition: "Full Service Logged | 4,200 Running Hours Only",
      carbonAvoided: "22.8 MT CO2e",
      price: "$21,500",
      virginPriceEquiv: "$48,000",
      status: "Active Escrow Bidding Open",
      complianceCode: "AHRI Standard 550/590 Certified",
      imageUrl: "/materials/industrial-chiller.jpg"
    },
    {
      id: "LOT-905",
      category: "steel",
      title: "Heavy Structural Tube Columns (HSS 10×10×1/2)",
      specs: "ASTM A500 Grade C | 420 LF (14 columns @ 30ft)",
      dimensions: "10\" × 10\" Box | 0.500\" Wall Thickness",
      origin: "Logistics Hub Retrofit, Columbus OH",
      condition: "Baseplates intact | Ultrasound Passed",
      carbonAvoided: "11.1 MT CO2e",
      price: "$9,450",
      virginPriceEquiv: "$16,200",
      status: "Available for Dispatch",
      complianceCode: "AWS D1.1 Welding Integrity Cleared",
      imageUrl: "/materials/tube-columns.jpg"
    },
    {
      id: "LOT-906",
      category: "timber",
      title: "Glulam Architectural Arch Beams",
      specs: "Douglas Fir Glued Laminated Timber | 6 Units @ 42ft",
      dimensions: "6.75\" Width × 24\" Depth Curved Camber",
      origin: "Civic Pavilion Deconstruction, Denver CO",
      condition: "Architectural Appearance Grade A",
      carbonAvoided: "9.4 MT CO2e",
      price: "$8,200",
      virginPriceEquiv: "$15,800",
      status: "Available",
      complianceCode: "ANSI A190.1 Structural Standard",
      imageUrl: "/materials/glulam-beams.jpg"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? inventory 
    : inventory.filter(i => i.category === activeCategory);

  return (
    <section id="marketplace" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-laser-50 dark:bg-laser-950/80 border border-laser-200 dark:border-laser-800 text-laser-700 dark:text-laser-300 text-xs font-mono">
              <Store className="w-3.5 h-3.5" />
              <span>LIVE RECLAIMED INVENTORY MARKETPLACE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Direct B2B Procurement{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-laser-400">
                Low-Carbon Supplies
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl">
              All listed lots are scanned via LiDAR, structural-code verified, and come with cryptographically sealed chain-of-custody documentation for LEED v4.1 and BREEAM credits.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <div className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-600 dark:text-slate-300 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>42 ACTIVE DEMOLITION SITES SYNCED</span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 border ${
                activeCategory === c.id
                  ? 'bg-brand-600 text-white border-brand-600 shadow-md shadow-brand-500/20 font-semibold'
                  : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Inventory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="glass-panel rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl hover:border-laser-400/50 transition-all duration-300 group"
            >
              {/* Image Preview & Badges */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to verified unsplash structural image if local fetch is interrupted
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&q=80";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                
                {/* Lot Tag & Compliance Badge */}
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md text-[10px] font-mono text-laser-300 border border-slate-700">
                    {item.id}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/90 text-white text-[10px] font-bold font-mono flex items-center space-x-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>CODE VERIFIED</span>
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-slate-950/80 px-2 py-0.5 rounded border border-emerald-900 font-bold">
                    {item.carbonAvoided} SAVED
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {item.specs}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 pt-1 line-clamp-2">
                    {item.dimensions}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span className="truncate max-w-[180px]">{item.origin}</span>
                    </span>
                    <span className="font-mono text-xs text-slate-400 line-through">
                      {item.virginPriceEquiv}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-slate-400 block">Reclaimed Price</span>
                      <span className="text-xl font-mono font-extrabold text-slate-900 dark:text-white">
                        {item.price}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedItem(item)}
                      className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-brand-500 hover:text-white text-slate-800 dark:text-slate-200 transition-colors flex items-center space-x-1 border border-slate-200 dark:border-slate-700"
                    >
                      <span>Inspect Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-laser-500/20 text-laser-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold">Are you planning a commercial demolition or retrofit?</h4>
              <p className="text-xs text-slate-300">Schedule a 1-day LiDAR scanning audit before tender to list materials before demolition begins.</p>
            </div>
          </div>
          <button
            onClick={onOpenScanModal}
            className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-laser-600 hover:from-brand-500 hover:to-laser-500 shrink-0 shadow-lg shadow-brand-500/20"
          >
            Request Site Deconstruction Audit
          </button>
        </div>

      </div>

      {/* Item Inspection Dossier Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#090d16] border border-slate-800 text-slate-100 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <div className="flex items-center space-x-2 text-xs font-mono text-laser-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>CIRCULATECH CERTIFIED STRUCTURAL DOSSIER</span>
                <span className="text-slate-500">|</span>
                <span>ID: {selectedItem.id}</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">{selectedItem.title}</h3>
                <p className="text-xs text-slate-400 font-mono mt-1">{selectedItem.specs}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 text-[10px] font-mono uppercase block">Status</span>
                  <span className="text-emerald-400 font-semibold">{selectedItem.status}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] font-mono uppercase block">Embodied CO2e Saved</span>
                  <span className="text-white font-mono font-bold">{selectedItem.carbonAvoided}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] font-mono uppercase block">Compliance Stamp</span>
                  <span className="text-laser-300 font-mono">{selectedItem.complianceCode}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <span className="font-mono text-slate-400 uppercase text-[10px]">Dimensional & Engineering Pass:</span>
                <p className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-slate-300">
                  {selectedItem.dimensions}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-emerald-300 text-xs flex items-center justify-between">
                <span>Direct Marketplace Price: <strong className="text-white font-mono text-base ml-2">{selectedItem.price}</strong></span>
                <span className="text-[11px] font-mono">Commission (7%): Included</span>
              </div>

              <div className="flex items-center space-x-3 pt-3">
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    onOpenScanModal();
                  }}
                  className="flex-1 py-3 rounded-xl font-bold text-xs font-mono text-white bg-gradient-to-r from-brand-600 to-laser-600 text-center"
                >
                  RESERVE LOT OR REQUEST LOGISTICS ESCROW
                </button>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-3 rounded-xl font-semibold text-xs text-slate-400 hover:text-white bg-slate-800"
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
