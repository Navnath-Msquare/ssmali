import React, { useState } from 'react';
import { Calendar, MapPin, Tag, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const categories = ['All', 'Roads', 'Buildings', 'Infrastructure'];

  const projectList = [
    {
      title: 'Four-Lane Highway Paving',
      category: 'Roads',
      location: 'Pune-Solapur Highway, MH',
      client: 'NHAI Contract Sub',
      status: 'Completed',
      year: '2025',
      image: '/images/hero-road.png'
    },
    {
      title: 'Apex Business Center Tower',
      category: 'Buildings',
      location: 'Baner Tech District, Pune',
      client: 'Apex Developers',
      status: 'Completed',
      year: '2024',
      image: '/images/hero-building.png'
    },
    {
      title: 'Heavy Foundation Excavation',
      category: 'Infrastructure',
      location: 'Chakan Industrial Zone',
      client: 'Auto Parts Facility',
      status: 'Completed',
      year: '2025',
      image: '/images/machinery.png'
    },
    {
      title: 'Regional Overpass Bridge',
      category: 'Infrastructure',
      location: 'Satara Bypass Project',
      client: 'MSRDC Sub-Contract',
      status: 'In Progress',
      year: '2026',
      image: '/images/hero-road.png'
    },
    {
      title: 'Metro Depot Excavation Site',
      category: 'Infrastructure',
      location: 'Hinjewadi Phase 3, Pune',
      client: 'Metro Rail Sub',
      status: 'In Progress',
      year: '2026',
      image: '/images/machinery.png'
    },
    {
      title: 'Royal Palms Premium Villa Plaza',
      category: 'Buildings',
      location: 'Karad Estates',
      client: 'Royal Builders',
      status: 'Completed',
      year: '2024',
      image: '/images/hero-building.png'
    }
  ];

  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All'
    ? projectList
    : projectList.filter(proj => proj.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-sm font-semibold tracking-widest text-amber-500 uppercase">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Delivering Projects on Time, Every Time
            </h2>
            <div className="h-1 w-20 bg-amber-500 rounded" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-950 border border-slate-800/80 self-start md:self-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4.5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full border border-slate-800/50 hover:border-amber-500/20"
            >
              {/* Image Frame */}
              <div className="h-56 overflow-hidden relative bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full bg-slate-950/80 text-amber-500 border border-amber-500/20 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Status Indicator */}
                <div className="absolute bottom-4 right-4 z-10">
                  <span className={`px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full backdrop-blur-sm ${
                    project.status === 'Completed'
                      ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/25'
                      : 'bg-amber-950/80 text-amber-400 border border-amber-500/25'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-500 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 pt-1">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Tag className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      <span className="truncate">{project.client}</span>
                    </div>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800/60 text-xs text-slate-400 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Year: {project.year}
                  </span>
                  <a
                    href="#contact"
                    className="flex items-center gap-1 text-amber-500 hover:text-amber-400 group-hover:underline"
                  >
                    Discuss similar project
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
