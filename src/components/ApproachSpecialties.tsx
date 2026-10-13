import React, { useState } from 'react';
import { SPECIALTIES, Specialty } from '../data/portfolioData';
import { Compass, Check, ArrowRight, ShieldCheck, Cpu, Smartphone, Search } from 'lucide-react';

export const ApproachSpecialties: React.FC = () => {
  const [activeSpecialtyId, setActiveSpecialtyId] = useState<string>(SPECIALTIES[0].id);

  const activeSpecialty = SPECIALTIES.find((s) => s.id === activeSpecialtyId) || SPECIALTIES[0];

  return (
    <section id="approach-specialties" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#0c0d0e]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
            Design Philosophy & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Approach & Specialties
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Intuitive design is born from empirical understanding, ruthless simplification, and
            systematic craft. I eliminate cognitive clutter so users can accomplish critical goals
            effortlessly, whether operating complex enterprise consoles or mobile apps on the move.
          </p>
        </div>

        {/* 4 Core Pillars of Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-zinc-800/80 flex items-center justify-center text-blue-400 mb-4">
              <Search className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Empirical Discovery</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Uncovering unarticulated user friction through structured task observation and qualitative inquiry before designing solutions.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-zinc-800/80 flex items-center justify-center text-blue-400 mb-4">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Cognitive Reduction</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Replacing dense, multi-layer decision trees with progressive disclosure, recognizable spatial models, and contextual inspector views.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-zinc-800/80 flex items-center justify-center text-blue-400 mb-4">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Systematic Token Math</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              W3C-compliant semantic design tokens, WCAG AA contrast guarantees, and mathematically nested border radii for unified scale.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-zinc-800/80 flex items-center justify-center text-blue-400 mb-4">
              <Smartphone className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Ergonomic Precision</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Thumb-zone heatmaps for mobile interfaces, rapid &lt;200ms interaction feedback, and full keyboard navigation for desktop power users.
            </p>
          </div>
        </div>

        {/* Interactive Specialties Exploration */}
        <div id="specialties" className="pt-8 border-t border-zinc-800/60">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                Core Domains
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Specialties & Deliverables</h3>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm">
              Click a specialty to inspect specific methodologies, skill competencies, and production deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left selector column */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {SPECIALTIES.map((spec) => {
                const isSelected = spec.id === activeSpecialtyId;
                return (
                  <button
                    key={spec.id}
                    onClick={() => setActiveSpecialtyId(spec.id)}
                    className={`text-left p-5 rounded-xl transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-zinc-900 border-blue-500/80 text-white shadow-sm'
                        : 'bg-zinc-900/30 border-zinc-800/60 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono text-blue-400 tabular-nums">
                        {spec.number}
                      </span>
                      {isSelected && (
                        <span className="text-xs font-medium text-blue-400 flex items-center gap-1">
                          Active Focus <ArrowRight className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                    <div className="text-base font-semibold text-white mb-1">{spec.title}</div>
                    <div className="text-xs text-zinc-400 line-clamp-2">{spec.tagline}</div>
                  </button>
                );
              })}
            </div>

            {/* Right details card */}
            <div className="lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-[#121316] border border-zinc-800">
              <div className="flex items-center gap-3 text-xs text-blue-400 font-mono mb-2">
                <span>Specialty {activeSpecialty.number}</span>
                <span aria-hidden="true">·</span>
                <span>Production Standard</span>
              </div>
              <h4 className="text-2xl font-bold text-white tracking-tight mb-3">
                {activeSpecialty.title}
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                {activeSpecialty.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-800">
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                    Core Methodologies & Skills
                  </h5>
                  <ul className="space-y-2.5">
                    {activeSpecialty.coreSkills.map((skill, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                    Key Deliverables
                  </h5>
                  <ul className="space-y-2.5">
                    {activeSpecialty.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
