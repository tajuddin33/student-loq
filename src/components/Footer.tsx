import React from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  onWorkClick: () => void;
  onApproachClick: () => void;
  onSpecialtiesClick: () => void;
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToTop,
  onWorkClick,
  onApproachClick,
  onSpecialtiesClick,
  onContactClick,
}) => {
  return (
    <footer className="border-t border-zinc-800/80 bg-[#090a0c] text-zinc-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-zinc-800/80">
          <div>
            <div className="text-xl font-bold tracking-tight text-white mb-1">
              {PORTFOLIO_INFO.name}
            </div>
            <p className="text-xs text-zinc-400 font-normal">
              {PORTFOLIO_INFO.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <button
              onClick={onWorkClick}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Selected Work
            </button>
            <button
              onClick={onApproachClick}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Approach
            </button>
            <button
              onClick={onSpecialtiesClick}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Specialties
            </button>
            <button
              onClick={onContactClick}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={onScrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors ml-2 cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>WCAG 2.1 AA Compliant</span>
            <span aria-hidden="true">·</span>
            <span>Typeset in Plus Jakarta Sans</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
