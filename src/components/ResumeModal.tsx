import React, { useEffect, useState } from 'react';
import { X, Check, Copy, Download, Briefcase, GraduationCap, Award, Wrench } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyBio = () => {
    navigator.clipboard.writeText(
      'Tajuddin — Senior UI/UX & Product Designer. Designing intuitive experiences for enterprise SaaS, design systems, and mobile applications. Guided by empirical research, accessibility (WCAG AA), and token architecture.'
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#121316] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#121316]/95 backdrop-blur-md border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Tajuddin</span>
            <span className="text-zinc-500">·</span>
            <span className="text-xs text-zinc-400">Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyBio}
              className="px-3 py-1.5 text-xs rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:border-zinc-700 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Bio' : 'Copy Summary'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-500 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors ml-1 cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-zinc-300">
          {/* Header */}
          <div className="border-b border-zinc-800 pb-6">
            <h2 id="modal-resume-title" className="text-3xl font-bold text-white tracking-tight">Tajuddin</h2>
            <div className="text-base text-blue-400 font-medium mt-1">Senior UI/UX & Product Designer</div>
            <p className="text-xs text-zinc-400 mt-2 max-w-xl leading-relaxed">
              Designing intuitive experiences. Over 8 years translating complex business logic and dense data architectures into effortless user journeys, scalable tokenized design systems, and ergonomic mobile interfaces.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span>Professional Experience</span>
            </div>

            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-sm font-bold text-white">Lead Product Designer</h3>
                  <span className="text-xs font-mono text-zinc-500 tabular-nums">2023 — Present</span>
                </div>
                <div className="text-xs text-blue-400 mb-2">Cloud Telemetry & Observability</div>
                <ul className="text-xs text-zinc-400 space-y-1.5 list-disc list-inside">
                  <li>Spearheaded overhaul of incident monitoring console, reducing mean-time-to-detection by 38%.</li>
                  <li>Architected unified design system across 4 web platforms and 2 native applications.</li>
                  <li>Facilitated 40+ moderated usability test sessions with systems engineers and technical leads.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-sm font-bold text-white">Senior UI/UX Designer</h3>
                  <span className="text-xs font-mono text-zinc-500 tabular-nums">2021 — 2023</span>
                </div>
                <div className="text-xs text-blue-400 mb-2">Veloce Health Mobile</div>
                <ul className="text-xs text-zinc-400 space-y-1.5 list-disc list-inside">
                  <li>Designed patient-first iOS and Android consultation workflows, boosting appointment completion by 72%.</li>
                  <li>Standardized touch targets, contrast ratios, and screen-reader accessibility for WCAG AA compliance.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-sm font-bold text-white">UI/UX & Interaction Designer</h3>
                  <span className="text-xs font-mono text-zinc-500 tabular-nums">2018 — 2021</span>
                </div>
                <div className="text-xs text-blue-400 mb-2">Enterprise Software Studio</div>
                <ul className="text-xs text-zinc-400 space-y-1.5 list-disc list-inside">
                  <li>Designed financial analytics dashboards, asset rebalancing calculators, and multi-tenant SaaS tools.</li>
                  <li>Created high-fidelity clickable micro-interaction prototypes that secured major enterprise renewals.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Tools & Competencies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                <Wrench className="w-4 h-4 text-blue-400" />
                <span>Tooling & Craft</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Figma (Auto-Layout, Variables, Tokens Studio), FigJam, Principle, ProtoPie, HTML/CSS/Tailwind fundamentals, Storybook integration, Git, WCAG Accessibility Evaluation (Axe, Lighthouse).
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span>Education & Certification</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                B.S. in Human-Computer Interaction & Digital Media<br />
                Nielsen Norman Group UX Master Certified<br />
                Interaction Design Foundation (IxDF) Fellow
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
