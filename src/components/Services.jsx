import React from 'react';
import { Truck, Landmark, Hammer, HardHat, Compass, Layers } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Layers className="w-8 h-8 text-amber-500" />,
      title: 'Road & Highway Paving',
      features: ['Asphalt & Concrete Paving', 'Highway Overlays & Restoration', 'Expressways & Rural Roads', 'Drainage Channel Alignments'],
      desc: 'Expert asphalt laying, concrete pouring, and site marking using high-performance pavers and roller equipment.'
    },
    {
      icon: <Landmark className="w-8 h-8 text-amber-500" />,
      title: 'Building Construction',
      features: ['Commercial Centers & Offices', 'Residential Housing Units', 'Industrial Warehouse Frameworks', 'RC Foundation Laying'],
      desc: 'Building concrete and steel frames, masonry, and architectural shells meeting premium engineering parameters.'
    },
    {
      icon: <Truck className="w-8 h-8 text-amber-500" />,
      title: 'Earthworks & Excavation',
      features: ['Mass Site Excavation', 'Site Grading & Leveling', 'Bedrock Trenching & Shoring', 'Topsoil Stripping & Disposal'],
      desc: 'Heavy grading, bulk cutting, and material hauling using our top-tier excavators and backhoes.'
    },
    {
      icon: <Compass className="w-8 h-8 text-amber-500" />,
      title: 'Infrastructure Engineering',
      features: ['Reinforced Concrete Bridges', 'Box Culverts & Storm Drains', 'Water Main Pipelines', 'Retaining Walls Construction'],
      desc: 'Civil engineering works for municipal boards, local bodies, and corporate townships.'
    },
    {
      icon: <Hammer className="w-8 h-8 text-amber-500" />,
      title: 'Demolition & Land Clearing',
      features: ['Controlled Structural Demolition', 'Debris Crushing & Recycling', 'Brush & Tree Removal', 'Brownfield Redevelopment Preparation'],
      desc: 'Safe, controlled tearing down of aged units, followed by complete debris haulage.'
    },
    {
      icon: <HardHat className="w-8 h-8 text-amber-500" />,
      title: 'Equipment Rental & Management',
      features: ['Excavators & Motor Graders', 'Road Rollers & Compactors', 'Transit Mixers', 'Skilled Operating Personnel'],
      desc: 'Flexible wet-lease machinery plans for developers, complete with certified operators.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-widest text-amber-500 uppercase">
            OUR SPECIALIZATIONS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Comprehensive Engineering & Construction Services
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded" />
          <p className="text-slate-400 text-sm sm:text-base">
            From blueprints to heavy execution, we provide reliable end-to-end development services across commercial, residential, and transport sectors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Header Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-500 group-hover:scale-105 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-white transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action trigger */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-500 hover:text-amber-400 tracking-wider uppercase group/btn pt-4 border-t border-slate-800/60"
              >
                Inquire Services
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
