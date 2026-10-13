import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
  onWorkClick: () => void;
  onApproachClick: () => void;
  onSpecialtiesClick: () => void;
  onPlaygroundClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onContactClick,
  onWorkClick,
  onApproachClick,
  onSpecialtiesClick,
  onPlaygroundClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0c0d0e]/90 backdrop-blur-md border-b border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark - Clean single text element */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white hover:text-zinc-200 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <span>Tajuddin</span>
        </a>

        {/* Zone 2: 4-5 concise text links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          <button
            onClick={onWorkClick}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Selected Work
          </button>
          <button
            onClick={onApproachClick}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Approach
          </button>
          <button
            onClick={onSpecialtiesClick}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Specialties
          </button>
          <button
            onClick={onPlaygroundClick}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Interactive Lab
          </button>
          <button
            onClick={onContactClick}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onContactClick}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm active:scale-[0.98] cursor-pointer"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#0e0f12] px-6 py-5 flex flex-col gap-4 text-sm animate-in fade-in slide-in-from-top-2">
          <button
            onClick={() => {
              onWorkClick();
              setMobileMenuOpen(false);
            }}
            className="text-left text-zinc-300 hover:text-white py-1"
          >
            Selected Work
          </button>
          <button
            onClick={() => {
              onApproachClick();
              setMobileMenuOpen(false);
            }}
            className="text-left text-zinc-300 hover:text-white py-1"
          >
            Approach
          </button>
          <button
            onClick={() => {
              onSpecialtiesClick();
              setMobileMenuOpen(false);
            }}
            className="text-left text-zinc-300 hover:text-white py-1"
          >
            Specialties
          </button>
          <button
            onClick={() => {
              onPlaygroundClick();
              setMobileMenuOpen(false);
            }}
            className="text-left text-zinc-300 hover:text-white py-1"
          >
            Interactive Lab
          </button>
          <button
            onClick={() => {
              onContactClick();
              setMobileMenuOpen(false);
            }}
            className="text-left text-zinc-300 hover:text-white py-1"
          >
            Contact
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                onContactClick();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
