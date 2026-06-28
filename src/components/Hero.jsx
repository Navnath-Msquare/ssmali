import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Activity, Hammer, ShieldAlert } from 'lucide-react';

export default function Hero() {
  const slides = [
    {
      image: '/images/hero-road.png',
      title: 'Building Smooth Pathways for India’s Future',
      subtitle: 'Premium highway, expressway, and asphalt paving services built to last. Engineered with accuracy and high safety standards.',
      tag: 'Infrastructure Leaders'
    },
    {
      image: '/images/hero-building.png',
      title: 'Architecting Structural Milestones',
      subtitle: 'From modern commercial centers to industrial complexes, we construct future-proof spaces with unparalleled engineering skill.',
      tag: 'Commercial Development'
    },
    {
      image: '/images/machinery.png',
      title: 'Precision Earthworks & Mass Excavation',
      subtitle: 'Armed with an extensive heavy machinery fleet, we handle challenging excavation, grading, and site preparation tasks.',
      tag: 'Earthmoving Excellence'
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const stats = [
    { value: '150+', label: 'Projects Executed' },
    { value: '15+', label: 'Years of Experience' },
    { value: '45+', label: 'Machinery Fleets' },
    { value: '100%', label: 'Safety Record' }
  ];

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden bg-slate-950 text-white">
      {/* Slider Images */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Background image overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover object-center transition-transform duration-[6000ms] ease-out scale-105"
            style={{ transform: idx === current ? 'scale(1)' : 'scale(1.05)' }}
          />
          
          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl animate-fade-in-up">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-semibold tracking-wider uppercase border border-amber-500/20 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  {slide.tag}
                </span>
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
                  {slide.title}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                  {slide.subtitle}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:-translate-y-0.5"
                  >
                    Start Project
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-white font-medium border border-slate-700 transition-all hover:-translate-y-0.5"
                  >
                    Explore Projects
                  </a>
                </div>

                {/* Mobile-Only Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-800/60 sm:hidden">
                  {stats.map((stat, sindex) => (
                    <div key={sindex}>
                      <p className="font-display font-extrabold text-lg text-amber-500">{stat.value}</p>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Manual Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full border border-white/10 bg-slate-900/40 text-white hover:bg-amber-500 hover:text-slate-950 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full border border-white/10 bg-slate-900/40 text-white hover:bg-amber-500 hover:text-slate-950 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-8 h-1.5 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-amber-500 w-12' : 'bg-white/30'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Stats Counter Bar (Absolute Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-slate-950/80 border-t border-slate-800/60 backdrop-blur-md py-6 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display font-extrabold text-2xl lg:text-3xl text-amber-500">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
