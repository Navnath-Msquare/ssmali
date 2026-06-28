import React from 'react';
import Logo from './Logo';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          
          {/* Col 1: Logo & Overview */}
          <div className="md:col-span-1.5 space-y-4">
            <Logo />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mt-4">
              SS Mali Construction is committed to erecting landmark infrastructures. We specialize in expressway road-building, commercial development layouts, excavation, and structural engineering.
            </p>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  Road Paving & Expressways
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  Commercial Buildings
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  Earthmoving & Grading
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  Equipment Wet-Leasing
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company Sitemap */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-amber-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-500 transition-colors">
                  Projects Showcase
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-amber-500 transition-colors">
                  Machinery Fleet
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-500 transition-colors">
                  Works Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact details */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              General Inquiries
            </h4>
            <p className="text-xs sm:text-sm text-slate-450 text-slate-400 leading-relaxed">
              Call and WhatsApp<br />
              <strong>9970523432</strong>
            </p>
            <p className="text-xs sm:text-sm text-slate-450 text-slate-400 mt-2">
            Email<br />
              <a href="mailto:bid@ssmali.com" className="text-amber-500 hover:underline">
                bid@ssmali.com
              </a>
            </p>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[11px] sm:text-xs text-slate-500 text-center sm:text-left">
            © {currentYear} SS Mali Construction & Infrastructure. All Rights Reserved. Designed for premium durability.
          </p>
          
          {/* Scroll to Top Trigger */}
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all text-xs font-semibold shadow-md cursor-pointer"
            aria-label="Scroll to top"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5 text-amber-500" />
          </button>
        </div>
      </div>
    </footer>
  );
}
