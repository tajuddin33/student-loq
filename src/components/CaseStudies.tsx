import React, { useState } from 'react';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { CaseStudyModal } from './CaseStudyModal';

export const CaseStudies: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'SaaS & Web', label: 'SaaS & Web' },
    { id: 'Mobile Apps', label: 'Mobile Apps' },
    { id: 'Design Systems', label: 'Design Systems' },
    { id: 'Fintech', label: 'Fintech' },
  ];

  const filteredStudies =
    filter === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) => study.category === filter);

  return (
    <section id="work" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#0c0d0e]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Selected Works
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Featured Case Studies
            </h2>
          </div>

          {/* Interactive filter segmented control - single line with clean active state */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900 border border-zinc-800 rounded-xl overflow-x-auto max-w-full">
            {filterOptions.map((opt) => {
              const isActive = filter === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setFilter(opt.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study, idx) => {
            return (
              <article
                key={study.id}
                onClick={() => setSelectedStudy(study)}
                className="group p-6 sm:p-7 rounded-2xl bg-[#121316] border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Clean unboxed metadata with separators - zero pill policy */}
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mb-3 font-normal">
                    <span className="text-blue-400 font-medium">{study.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.client}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{study.year}</span>
                  </div>

                  {/* Title and Tagline */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {study.title}
                    </h3>
                    <div className="w-8 h-8 rounded-lg bg-zinc-800/80 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-zinc-400 transition-colors shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                    {study.tagline}
                  </p>
                </div>

                {/* High fidelity image presentation */}
                <div className="rounded-xl overflow-hidden border border-zinc-800/80 bg-zinc-950 aspect-video relative mb-6">
                  <img
                    src={study.image}
                    alt={`${study.title} UI/UX interface showcase`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Subtle contrast scrim at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Proof Metric highlight */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                    <span className="font-semibold text-white tabular-nums">
                      {study.metrics[0].value}
                    </span>
                    <span className="text-zinc-400">{study.metrics[0].label}</span>
                  </div>
                  <span className="text-xs text-blue-400 font-medium group-hover:underline">
                    Read Case Study
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedStudy}
        onClose={() => setSelectedStudy(null)}
        onSelectAnother={(study) => setSelectedStudy(study)}
        allStudies={CASE_STUDIES}
      />
    </section>
  );
};
