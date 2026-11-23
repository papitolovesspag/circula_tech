import React, { useState, useEffect } from 'react';
import { 
  X, 
  Scan, 
  Play, 
  RotateCw, 
  CheckCircle2, 
  ShieldCheck, 
  Download, 
  Sparkles, 
  Cpu, 
  Building 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DemoScannerModal({ isOpen, onClose }) {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);
  const [selectedZone, setSelectedZone] = useState('zoneA');

  const zones = {
    zoneA: {
      name: "Roof Framing & Mechanical Skids",
      items: [
        { name: "AISC W16×45 Structural Steel Joists", qty: "28 Beams", tons: "18.4 T", value: "$13,200", carbon: "29.4 MT CO2e" },
        { name: "Industrial 40-Ton Rooftop Chiller Unit", qty: "1 Skid", tons: "4.2 T", value: "$9,800", carbon: "16.1 MT CO2e" },
        { name: "Heavy Gauge Copper Busbars & Risers", qty: "840 LF", tons: "1.2 T", value: "$4,600", carbon: "6.8 MT CO2e" }
      ],
      totalVal: "$27,600",
      totalCarbon: "52.3 MT CO2e",
      totalTons: "23.8 Tons"
    },
    zoneB: {
      name: "Floor 2 & 3 Heavy Timber Joists",
      items: [
        { name: "Old-Growth Virgin Heart Pine 3×12", qty: "64 Units @ 24ft", tons: "8.6 T", value: "$11,400", carbon: "14.2 MT CO2e" },
        { name: "Architectural Hardwood Maple Flooring", qty: "4,200 Sq Ft", tons: "3.8 T", value: "$7,200", carbon: "5.9 MT CO2e" },
        { name: "Cast Iron Radiator Fixtures", qty: "32 Units", tons: "2.4 T", value: "$3,100", carbon: "3.4 MT CO2e" }
      ],
      totalVal: "$21,700",
      totalCarbon: "23.5 MT CO2e",
      totalTons: "14.8 Tons"
    }
  };

  const currentZone = zones[selectedZone];

  const startScan = () => {
    setScanning(true);
    setProgress(0);
    setScanComplete(false);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanning(false);
          setScanComplete(true);
          try {
            confetti({ particleCount: 50, spread: 60, origin: { y: 0.5 } });
          } catch(e) {}
          return 100;
        }
        return prev + 10;
      });
    }, 250);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#090d16] border border-slate-800 text-slate-100 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-mono text-laser-400">
            <Scan className="w-4 h-4 text-brand-400 animate-pulse" />
            <span className="font-bold">CIRCULATECH FIELD LIDAR SCAN SIMULATOR</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Controls bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase block">1. Select Target Demolition Zone:</span>
              <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 mt-1">
                <button
                  onClick={() => { setSelectedZone('zoneA'); setScanComplete(false); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                    selectedZone === 'zoneA' ? 'bg-slate-800 text-white font-bold border border-laser-500' : 'text-slate-400'
                  }`}
                >
                  Zone A: Structural Steel & Roof
                </button>
                <button
                  onClick={() => { setSelectedZone('zoneB'); setScanComplete(false); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                    selectedZone === 'zoneB' ? 'bg-slate-800 text-white font-bold border border-laser-500' : 'text-slate-400'
                  }`}
                >
                  Zone B: Historic Timber & Flooring
                </button>
              </div>
            </div>

            <button
              onClick={startScan}
              disabled={scanning}
              className="px-6 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-laser-600 hover:from-brand-500 hover:to-laser-500 disabled:opacity-50 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-brand-500/20"
            >
              {scanning ? (
                <>
                  <RotateCw className="w-4 h-4 animate-spin text-laser-300" />
                  <span>SWEEPING LIDAR SENSORS ({progress}%)...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>RUN AUTONOMOUS SITE SCAN</span>
                </>
              )}
            </button>
          </div>

          {/* Simulated Scanner Viewport */}
          <div className="relative h-64 sm:h-80 w-full rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col justify-between p-4">
            
            {/* Laser Line */}
            {scanning && <div className="scan-beam"></div>}

            {/* Point cloud grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>

            {/* Status Overlay */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center space-x-1.5">
                <span className={`w-2 h-2 rounded-full ${scanning ? 'bg-emerald-400 animate-ping' : 'bg-slate-600'}`}></span>
                <span>STATUS: {scanning ? 'INGESTING 3D POINT CLOUD' : scanComplete ? 'CLASSIFICATION VERIFIED' : 'READY TO SCAN'}</span>
              </span>
              <span className="text-laser-400">GPS: 37.7749° N, 122.4194° W</span>
            </div>

            {/* Viewport Center: Scan result boxes or scanning state */}
            <div className="relative z-10 my-auto text-center">
              {scanning ? (
                <div className="space-y-3">
                  <Cpu className="w-10 h-10 text-laser-400 animate-bounce mx-auto" />
                  <p className="font-mono text-sm text-laser-300">
                    Running Deep Neural Volumetric Mesh Segmentation...
                  </p>
                  <div className="w-64 max-w-full mx-auto h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-laser-400 transition-all duration-300" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
              ) : scanComplete ? (
                <div className="space-y-2 animate-fadeIn">
                  <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Scan Complete & Verified</h4>
                  <p className="text-xs text-slate-300 font-mono">
                    All dimensional tolerances match AISC / ASTM building code requirements.
                  </p>
                </div>
              ) : (
                <div className="space-y-2 text-slate-500">
                  <Scan className="w-12 h-12 mx-auto stroke-1 text-slate-600" />
                  <p className="text-xs font-mono">Click "Run Autonomous Site Scan" to trigger simulated spatial sweep.</p>
                </div>
              )}
            </div>

            {/* Bottom Telemetry */}
            <div className="relative z-10 border-t border-slate-800/80 pt-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>SENSORS: 120FPS STEREO + 64-CHANNEL LIDAR</span>
              <span>POINT DENSITY: 1.2M/SEC</span>
            </div>

          </div>

          {/* Manifest Table (Visible after scan or for exploration) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                Extracted Reclaimed Manifest: {currentZone.name}
              </span>
              <div className="flex items-center space-x-3 text-xs font-mono">
                <span className="text-slate-400">Yield: <strong className="text-white">{currentZone.totalTons}</strong></span>
                <span className="text-brand-400">CO2e Saved: <strong className="text-emerald-400">{currentZone.totalCarbon}</strong></span>
                <span className="text-white font-bold">Est. Value: <strong className="text-laser-400">{currentZone.totalVal}</strong></span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 overflow-hidden">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="p-3">Identified Element</th>
                    <th className="p-3">Quantity</th>
                    <th className="p-3">Weight</th>
                    <th className="p-3">Carbon Avoided</th>
                    <th className="p-3 text-right">Market Resale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 bg-slate-950">
                  {currentZone.items.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/40">
                      <td className="p-3 font-semibold text-white flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item.name}</span>
                      </td>
                      <td className="p-3 text-slate-300">{item.qty}</td>
                      <td className="p-3 text-slate-400">{item.tons}</td>
                      <td className="p-3 text-emerald-400">{item.carbon}</td>
                      <td className="p-3 text-right font-bold text-white">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-400">
              Want this report for your actual pre-demolition site?
            </p>
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <a
                href="#contact"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 transition-colors text-center"
              >
                Book Official Site Scan ($1,499)
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white bg-slate-800"
              >
                Close Simulator
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
