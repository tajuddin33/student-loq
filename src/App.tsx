import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ApproachSpecialties } from './components/ApproachSpecialties';
import { CaseStudies } from './components/CaseStudies';
import { PrototypePlayground } from './components/PrototypePlayground';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-zinc-100 selection:bg-blue-600 selection:text-white">
      {/* 3-Zone Top Bar */}
      <Header
        onWorkClick={() => scrollTo('work')}
        onApproachClick={() => scrollTo('approach-specialties')}
        onSpecialtiesClick={() => scrollTo('specialties')}
        onPlaygroundClick={() => scrollTo('playground')}
        onContactClick={() => scrollTo('contact')}
      />

      <main>
        {/* Hero Section with prominent "Tajuddin" and tagline "Designing intuitive experiences" */}
        <Hero
          onExploreWork={() => scrollTo('work')}
          onExploreLab={() => scrollTo('playground')}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Introductory Approach & Specialties Section */}
        <ApproachSpecialties />

        {/* Selected Work & Case Studies with In-Depth Modal */}
        <CaseStudies />

        {/* Interactive Prototype Simulator Lab */}
        <PrototypePlayground />

        {/* UX Process & Methodology */}
        <ProcessSection />

        {/* Direct Contact & Collaboration Form */}
        <ContactSection />
      </main>

      {/* Clean Footer */}
      <Footer
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onWorkClick={() => scrollTo('work')}
        onApproachClick={() => scrollTo('approach-specialties')}
        onSpecialtiesClick={() => scrollTo('specialties')}
        onContactClick={() => scrollTo('contact')}
      />

      {/* Resume / Experience Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
