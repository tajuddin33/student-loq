import React, { useEffect } from 'react';
import { CaseStudy } from '../data/portfolioData';
import { X, ArrowRight, CheckCircle2, TrendingUp, Layers, Palette, Calendar, Clock, User } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onSelectAnother: (study: CaseStudy) => void;
  allStudies: CaseStudy[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onSelectAnother,
  allStudies,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  const nextStudy = allStudies.find((s) => s.id !== caseStudy.id) || allStudies[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#121316] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky modal header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#121316]/95 backdrop-blur-md border-b border-zinc-800">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="font-medium text-white">{caseStudy.client}</span>
            <span aria-hidden="true">·</span>
            <span>{caseStudy.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{caseStudy.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable content body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-10">
          {/* Main Title & Subtitle */}
          <div>
            <h2 id="modal-case-study-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
              {caseStudy.title}
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              {caseStudy.tagline}
            </p>
          </div>

          {/* Project Details Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs">
            <div>
              <div className="text-zinc-500 mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>My Role</span>
              </div>
              <div className="font-medium text-zinc-200">{caseStudy.role}</div>
            </div>
            <div>
              <div className="text-zinc-500 mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Duration</span>
              </div>
              <div className="font-medium text-zinc-200">{caseStudy.duration}</div>
            </div>
            <div>
              <div className="text-zinc-500 mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Timeline</span>
              </div>
              <div className="font-medium text-zinc-200">{caseStudy.year}</div>
            </div>
            <div>
              <div className="text-zinc-500 mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Specialty</span>
              </div>
              <div className="font-medium text-zinc-200">{caseStudy.category}</div>
            </div>
          </div>

          {/* Hero Visual Mockup Container */}
          <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-video relative group">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Outcome Metrics */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              <span>Measurable Design Impact</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.metrics.map((m, i) => (
                <div key={i} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                  <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight mb-1">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-zinc-200 mb-1">{m.label}</div>
                  <div className="text-xs text-zinc-400">{m.context}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Problem & Research Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-zinc-800">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">The Problem</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3">User Research Discoveries</h3>
              <ul className="space-y-3">
                {caseStudy.researchInsights.map((insight, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution & Key Features */}
          <div className="pt-6 border-t border-zinc-800">
            <h3 className="text-lg font-bold text-white mb-3">The UX Solution</h3>
            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              {caseStudy.solution}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.keyFeatures.map((feat, i) => (
                <div key={i} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                  <div className="text-sm font-semibold text-white mb-1.5">{feat.title}</div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Design Token Architecture Specifications */}
          <div className="p-5 rounded-xl bg-zinc-900/70 border border-zinc-800">
            <div className="text-xs font-semibold text-zinc-300 flex items-center gap-2 mb-3">
              <Palette className="w-4 h-4 text-blue-400" />
              <span>Design System & Token Architecture Specifications</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-zinc-500 block">Primary Accent</span>
                <span className="font-mono text-zinc-300">{caseStudy.designTokens.primaryColor}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Typography Hierarchy</span>
                <span className="text-zinc-300">{caseStudy.designTokens.typography}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Spacing Grid</span>
                <span className="font-mono text-zinc-300">{caseStudy.designTokens.spacing}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Corner Radius Scale</span>
                <span className="font-mono text-zinc-300">{caseStudy.designTokens.radius}</span>
              </div>
            </div>
          </div>

          {/* Bottom Next Project Link */}
          <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-zinc-400">Next Case Study:</span>
            <button
              onClick={() => onSelectAnother(nextStudy)}
              className="text-xs font-semibold text-white hover:text-blue-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>{nextStudy.title} ({nextStudy.category})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
