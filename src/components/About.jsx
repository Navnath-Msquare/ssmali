import React from 'react';
import { ShieldCheck, Award, Zap, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
      title: 'Safety First Culture',
      description: 'Zero hazard operations through strict compliance with standard health and safety measures on all active construction locations.'
    },
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: 'Certified Quality Standards',
      description: 'We source high-grade aggregate, premium concrete, and top-tier materials to deliver infrastructure that withstands decades of stress.'
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: 'Own Heavy Fleet',
      description: 'Owning our machinery allows us to mobilize rapidly, control operational costs, and maintain zero dependency on rental queues.'
    },
    {
      icon: <Users className="w-6 h-6 text-amber-500" />,
      title: 'Skilled Engineers & Operators',
      description: 'Led by veteran project managers and expert operators, we perform advanced grading, paving, and structural layouts.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading and Story */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-sm font-semibold tracking-widest text-amber-500 uppercase">
              WHO WE ARE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight">
              Leading the Way in Infrastructure and Modern Road Building
            </h2>
            <div className="h-1 w-20 bg-amber-500 rounded" />
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Founded on the pillars of integrity and elite craftsmanship, <strong>SS Mali Construction</strong> has grown to become a trusted name in infrastructure. We are specialists in laying regional expressways, highway repairs, residential development structures, and complete site development.
            </p>
            <p className="text-slate-450 leading-relaxed text-sm text-slate-400">
              No project is too small or too massive. From heavy earthworks using state-of-the-art graders to casting multi-tier reinforced foundations, we are dedicated to setting high engineering benchmarks.
            </p>
            
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-bold text-amber-500 hover:text-amber-400 transition-colors"
              >
                Learn more about our standards
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Values Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-xl space-y-4"
              >
                <div className="inline-flex p-3 rounded-lg bg-slate-800 border border-slate-700/50">
                  {item.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
