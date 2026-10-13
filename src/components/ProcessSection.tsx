import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Check } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#0c0d0e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            How I Work & Ship
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            A repeatable, structured framework that moves projects from ambiguous user problems to
            production-grade systems with high velocity and minimal rework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-[#121316] border border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <div className="text-sm font-mono text-blue-400 font-semibold mb-3 tabular-nums">
                  {step.number}.
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.phase}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal">
                  {step.summary}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                    Activities
                  </div>
                  {step.activities.map((act, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 text-xs">
                <span className="text-zinc-500 block mb-1">Key Outcome:</span>
                <span className="text-zinc-200 font-medium">{step.outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
