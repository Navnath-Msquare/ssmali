import React from 'react';
import { ShieldCheck, Cpu, HardHat, Settings } from 'lucide-react';

export default function Machinery() {
  const machineryFleet = [
    {
      name: 'Crawler Excavators (20T - 30T)',
      count: '6 Units',
      use: 'Deep Excavation, Earthmoving, and Trenching',
      specs: 'Fitted with rock-breakers & bulk buckets'
    },
    {
      name: 'Vibratory Tandem Road Rollers',
      count: '8 Units',
      use: 'Asphalt & Sub-base Compaction',
      specs: 'Dual-drum vibratory system for high density'
    },
    {
      name: 'Paving Machines (Sensor Equipped)',
      count: '3 Units',
      use: 'Automatic Level Paving & Sloped Asphalt Laying',
      specs: 'Sensor paving width up to 5.5 meters'
    },
    {
      name: 'Motor Graders (120HP - 150HP)',
      count: '4 Units',
      use: 'Fine Grading, Sub-grade Preparation',
      specs: 'Adjustable moldboard and scarifier attachments'
    },
    {
      name: 'Transit Mixers & Concrete Pumps',
      count: '10 Units',
      use: 'Ready-Mix Transport and Deep Pouring',
      specs: 'Capacity up to 7-10 cubic meters per batch'
    },
    {
      name: 'Dumper & Tipper Trucks (Multi-Axle)',
      count: '14 Units',
      use: 'Bulk Aggregate & Excavated Soil Haulage',
      specs: 'Heavy duty payload capacity of 16-25 tons'
    }
  ];

  return (
    <section id="machinery" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-widest text-amber-500 uppercase">
            HEAVY MACHINERY FLEET
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            State-of-the-Art Equipment Fleet
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded" />
          <p className="text-slate-400 text-sm sm:text-base">
            We own our fleet, ensuring immediate project deployment without third-party rental delays. Every machine is meticulously serviced for peak uptime.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machineryFleet.map((machine, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-amber-500/20"
            >
              {/* Card Title & Quantity badge */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-display font-bold text-lg text-white">
                  {machine.name}
                </h3>
                <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-500 font-bold text-xs border border-amber-500/20 uppercase tracking-wide">
                  {machine.count}
                </span>
              </div>

              {/* Grid content detailing use and specs */}
              <div className="space-y-4 pt-2 border-t border-slate-800/60">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                    Core Application
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                    {machine.use}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                    Technical Feature
                  </span>
                  <p className="text-xs text-slate-450 text-slate-455 text-slate-400">
                    {machine.specs}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 glass-card rounded-2xl p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 hidden sm:block">
              <Settings className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">
                Need Specific Equipment Wet-Leased?
              </h4>
              <p className="text-xs sm:text-sm text-slate-450 text-slate-400 mt-1">
                We rent out specific heavy equipment alongside operators for short-term developers.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition-all shadow-md shadow-amber-500/10"
          >
            Lease Fleet
          </a>
        </div>

      </div>
    </section>
  );
}
