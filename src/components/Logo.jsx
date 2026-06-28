import React from 'react';

export default function Logo({ className = "h-8", showText = true }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Icon Graphic */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/20 group">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-slate-950 transition-transform duration-300 group-hover:scale-110"
        >
          {/* A road path merging into a structure */}
          <path d="M4 22L9 12M20 22L15 12" />
          <path d="M12 2v10" strokeDasharray="2 2" />
          <path d="M6 12h12L12 3z" fill="currentColor" fillOpacity="0.15" />
          <path d="M12 3v9" />
        </svg>
        {/* Subtle border shine */}
        <div className="absolute inset-0 rounded-lg border border-white/20 pointer-events-none" />
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-display font-black text-xl tracking-tight text-white">
            SS <span className="text-amber-500">MALI</span>
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-400 mt-0.5">
            Construction
          </span>
        </div>
      )}
    </div>
  );
}
