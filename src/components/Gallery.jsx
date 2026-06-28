import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const categories = ['All Work', 'Roads', 'Buildings', 'Machinery'];

  const images = [
    {
      url: '/images/hero-road.png',
      title: 'Asphalt Highway Paving',
      category: 'Roads',
      desc: 'Laying premium asphalt mix for national expressways and regional highway projects.'
    },
    {
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      title: 'Structural Steel Framing',
      category: 'Buildings',
      desc: 'Lifting precast steel beam structures for large-scale commercial centers.'
    },
    {
      url: '/images/machinery.png',
      title: 'Excavation & Earthmoving',
      category: 'Machinery',
      desc: 'Mass soil grading and excavation using high-capacity crawler excavators.'
    },
    {
      url: 'https://images.unsplash.com/photo-1535732820275-9ffd998cac22?auto=format&fit=crop&w=800&q=80',
      title: 'Subgrade Compaction',
      category: 'Roads',
      desc: 'Heavy vibratory road rollers compacting foundation base material.'
    },
    {
      url: '/images/hero-building.png',
      title: 'Apex Business Center',
      category: 'Buildings',
      desc: 'A premium, modern glass-facade commercial skyscraper constructed under our supervision.'
    },
    {
      url: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&w=800&q=80',
      title: 'Trench Digging',
      category: 'Machinery',
      desc: 'Digging deep trenches for water pipelines and municipal utility networks.'
    },
    {
      url: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=800&q=80',
      title: 'Concrete Batching Dispatch',
      category: 'Machinery',
      desc: 'Transit concrete mixer trucks preparing for foundation pours on-site.'
    },
    {
      url: 'https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?auto=format&fit=crop&w=800&q=80',
      title: 'Expressway Lane Curing',
      category: 'Roads',
      desc: 'Casting concrete slab grids for durable heavy freight highway bypasses.'
    },
    {
      url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      title: 'Logistics Warehouse Frame',
      category: 'Buildings',
      desc: 'Assembling columns and trusses for pre-engineered industrial depots.'
    },
    {
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      title: 'Glazing Scaffolding Setup',
      category: 'Buildings',
      desc: 'Setting up external scaffolding systems for skyscraper window installations.'
    },
    {
      url: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80',
      title: 'Bridge Pier Foundation',
      category: 'Roads',
      desc: 'Reinforced concrete bridge arches and columns curing for river crossings.'
    },
    {
      url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      title: 'Site Blueprint Layout',
      category: 'Machinery',
      desc: 'Engineers aligning layout blueprints on the grading site beforehand.'
    }
  ];

  const [activeFilter, setActiveFilter] = useState('All Work');
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });
  const [showAll, setShowAll] = useState(false);

  const filteredImages = activeFilter === 'All Work'
    ? images
    : images.filter(img => img.category === activeFilter);

  // Show only 2 rows (8 images) initially on 4-column layout
  const visibleImages = showAll ? filteredImages : filteredImages.slice(0, 8);

  const openLightbox = (idx) => {
    setLightbox({ isOpen: true, index: idx });
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
  };

  const nextSlide = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % filteredImages.length
    }));
  };

  const prevSlide = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + filteredImages.length) % filteredImages.length
    }));
  };

  return (
    <section id="gallery" className="py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-sm font-semibold tracking-widest text-amber-500 uppercase">
              VISUAL JOURNAL
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Worksite Action Gallery
            </h2>
            <div className="h-1 w-20 bg-amber-500 rounded" />
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-950 border border-slate-800/80 self-start md:self-auto">
            {categories.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setShowAll(false); // Reset show more when filter changes
                }}
                className={`px-4.5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleImages.map((image, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-slate-950 border border-slate-800/50 hover:border-amber-500/30 transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-slate-950/40"
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10" />

              {/* Image Title / Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-end">
                <div className="space-y-1">
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 font-bold text-[9px] uppercase tracking-wider border border-amber-500/20">
                    {image.category}
                  </span>
                  <h4 className="font-display font-bold text-white text-base truncate max-w-[160px] sm:max-w-[200px]">
                    {image.title}
                  </h4>
                </div>
                
                <div className="p-2 rounded-lg bg-amber-500 text-slate-950">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        {filteredImages.length > 8 && (
          <div className="flex justify-center mt-12 animate-fade-in-up">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition-all shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 hover:-translate-y-0.5 cursor-pointer"
            >
              {showAll ? 'Show Less' : 'Read More'}
            </button>
          </div>
        )}

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightbox.isOpen && (
        <div className="fixed inset-0 z-[110] flex flex-col items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-fade-in-up">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/60 border border-white/10 text-white hover:bg-amber-500 hover:text-slate-950 transition-all cursor-pointer z-40"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Navigation */}
          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/60 border border-white/10 text-white hover:bg-amber-500 hover:text-slate-950 transition-all cursor-pointer z-40"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Container */}
          <div className="relative max-w-4xl w-full flex flex-col items-center justify-center space-y-4">
            <div className="max-h-[70vh] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
              <img
                src={filteredImages[lightbox.index].url}
                alt={filteredImages[lightbox.index].title}
                className="max-h-[70vh] object-contain max-w-full"
              />
            </div>
            
            {/* Info detail banner */}
            <div className="text-center max-w-xl px-4">
              <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-500 font-bold text-xs uppercase tracking-widest border border-amber-500/20">
                {filteredImages[lightbox.index].category}
              </span>
              <h3 className="font-display font-extrabold text-xl text-white mt-2">
                {filteredImages[lightbox.index].title}
              </h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                {filteredImages[lightbox.index].desc}
              </p>
              
              {/* slide indicator */}
              <p className="text-xs text-slate-500 mt-4">
                Image {lightbox.index + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
