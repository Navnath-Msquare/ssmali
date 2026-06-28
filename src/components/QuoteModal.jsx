import React, { useEffect } from 'react';
import { X, Phone, MessageSquare, ShieldCheck, User, Landmark } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-slate-950/50 animate-fade-in-up z-10 overflow-hidden">
        {/* Top decorative stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center space-y-6 pt-4">
          <div className="inline-flex p-3 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <Landmark className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="font-display font-black text-2xl text-white tracking-tight">
              Get in Touch Directly
            </h3>
            <p className="text-sm text-slate-400 max-w-xs mx-auto">
              Call or WhatsApp us right now to discuss your road, building, or earthmoving project.
            </p>
          </div>

          {/* Contact Representative Details */}
          <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-4">
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-amber-500 font-semibold border border-slate-700/50">
                <User className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-500">
                  Managing Director
                </span>
                <h4 className="font-display font-bold text-lg text-white">
                  Kashinath Mali
                </h4>
              </div>
            </div>

            <div className="h-px bg-slate-800/60" />

            {/* Direct Call Button */}
            <a
              href="tel:+919970523432"
              className="flex items-center justify-center gap-3 w-full py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm uppercase tracking-wider transition-all shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              +91 99705 23432
            </a>

            {/* WhatsApp Chat Button */}
            <a
              href="https://wa.me/919970523432?text=Hello%20Kashinath%20ji,%20I%20am%20interested%20in%20discussing%20a%20construction%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3.5 rounded-lg bg-slate-850 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 transition-all hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Direct consultation. No third-party brokers.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
