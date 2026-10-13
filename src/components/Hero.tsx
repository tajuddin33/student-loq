import React from 'react';
import { ArrowDown, FileText, Sparkles, Layers } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onOpenResume: () => void;
  onExploreLab: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onOpenResume,
  onExploreLab,
}) => {
  return (
    <section id="home" className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-zinc-800/60 overflow-hidden">
      {/* Subtle radial ambient background accent - single cobalt blue tint */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-blue-600/10 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Subtle category / discipline indicator */}
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-400 mb-6 tracking-wider uppercase">
            <span>UI/UX & Product Design Portfolio</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Available for Select Projects</span>
          </div>

          {/* Prominent Name as specified in prompt */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-3">
            Tajuddin
          </h1>

          {/* Concise Tagline reflecting UI/UX expertise as specified in prompt */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-200 tracking-tight mb-6">
            Designing intuitive experiences<span className="text-blue-500">.</span>
          </h2>

          {/* Introductory prose */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10 font-normal">
            Senior product and interface designer crafting clear, resilient digital products.
            Translating complex enterprise workflows, high-density data, and multi-platform interactions
            into straightforward, frictionless software that people love using.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <button
              onClick={onExploreWork}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-lg transition-all shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreLab}
              className="px-5 py-3.5 text-sm font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 active:scale-[0.98] rounded-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Interactive Prototype Lab</span>
            </button>

            <button
              onClick={onOpenResume}
              className="px-5 py-3.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900/60 active:scale-[0.98] rounded-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-zinc-400" />
              <span>View Experience</span>
            </button>
          </div>
        </div>

        {/* Quantitative Proof Strip - tabular figures without pill boxes */}
        <div className="pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight">8+ Years</div>
            <div className="text-xs text-zinc-400 mt-1">Product & UI/UX Discipline</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight">45+ Tokens</div>
            <div className="text-xs text-zinc-400 mt-1">Production Component Systems</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight">&lt; 200ms</div>
            <div className="text-xs text-zinc-400 mt-1">Interaction Latency Standard</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight">WCAG AA</div>
            <div className="text-xs text-zinc-400 mt-1">Strict Accessibility Compliance</div>
          </div>
        </div>
      </div>
    </section>
  );
};
