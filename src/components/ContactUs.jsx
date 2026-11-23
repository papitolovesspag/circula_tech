import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  Building2, 
  Calendar, 
  ShieldCheck, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Pre-Demolition Site Scan Audit',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 65,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white dark:bg-[#090d16] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/80 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT INQUIRIES & AUDIT BOOKINGS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Schedule a Site Scan or{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-laser-400">
              Procure Certified Materials.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Connect directly with our engineering team for on-site mobile LiDAR audits, custom structural code integrations, or marketplace procurement inquiries.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Exactly One Email & One Phone Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Direct Contact Information
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Reach our dedicated team directly. All site audit inquiries receive an engineering response within 1 business day.
                </p>
              </div>

              {/* Exact Single Email & Single Phone */}
              <div className="space-y-4 pt-2">
                
                {/* 1 Business Email */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5 truncate">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-600 dark:text-slate-400 block">
                      Direct Email
                    </span>
                    <a 
                      href="mailto:juliet@circulatech.site" 
                      className="text-base font-semibold text-slate-900 dark:text-white hover:text-brand-500 transition-colors font-mono truncate block"
                    >
                      juliet@circulatech.site
                    </a>
                    <span className="text-[10px] text-slate-600 dark:text-slate-400 block">
                      Juliet &bull; Founder & CEO
                    </span>
                  </div>
                </div>

                {/* 1 Phone Number */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-laser-500/10 text-laser-500 dark:text-laser-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-600 dark:text-slate-400 block">
                      Direct Phone
                    </span>
                    <a 
                      href="tel:+2349032360732" 
                      className="text-base font-semibold text-slate-900 dark:text-white hover:text-laser-400 transition-colors font-mono block"
                    >
                      +234 903 236 0732
                    </a>
                    <span className="text-[10px] text-slate-600 dark:text-slate-400 block">
                      Direct Inquiries & Audit Dispatch
                    </span>
                  </div>
                </div>

              </div>

              {/* Operational SLA Badges */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Rapid 24-to-48 hr on-site mobile scanning dispatch</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Certified stamped regulatory waste diversion reports</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Full logistics escrow & flatbed transportation support</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Clean Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-brand-500">{formData.name || 'Contractor'}</strong>. Our engineering audit team has received your project parameters and will reach out via <span className="font-mono">{formData.email || 'your email'}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        projectType: 'Pre-Demolition Site Scan Audit',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Request Pre-Demolition Scan or Quote
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Complete the form below to receive a site audit estimate or marketplace spec sheet.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-semibold">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Marcus Vance"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-semibold">
                        Organization / Contractor *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Demolition Services"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-semibold">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marcus@apexdemo.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-semibold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-semibold">
                      Primary Service Requirement
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      <option>Pre-Demolition Site Scan Audit (LiDAR + BOM)</option>
                      <option>Reclaimed Material Marketplace Inquiry (Buyer)</option>
                      <option>LEED v4.1 / BREEAM Regulatory Compliance Report</option>
                      <option>Enterprise Portfolio / Multi-Site Agreement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-semibold">
                      Project Details / Approximate Square Footage
                    </label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Include building location, anticipated deconstruction timeline, and primary materials (structural steel, timber, copper, etc.)..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl font-bold text-xs uppercase font-mono tracking-wider text-white bg-gradient-to-r from-brand-600 to-laser-600 hover:from-brand-500 hover:to-laser-500 shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <span>Processing Request...</span>
                    ) : (
                      <>
                        <span>Submit Project Audit Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-600 dark:text-slate-400 font-mono">
                    All client demolition blueprints and spatial telemetry are protected under strict NDA.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
