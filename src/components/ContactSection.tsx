import React, { useState } from 'react';
import { Mail, Check, Copy, Send, MessageSquare } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'SaaS / Web App',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0c0d0e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct info & context */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
                Initiate Conversation
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-base text-zinc-400 leading-relaxed font-normal">
                Available for selective product design partnerships, design system architecture,
                and mobile application engagements.
              </p>
            </div>

            {/* Direct contact card */}
            <div className="p-6 rounded-2xl bg-[#121316] border border-zinc-800 space-y-4">
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">
                Direct Correspondence
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs">
                <div className="flex items-center gap-2.5 text-zinc-200">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="font-mono">{PORTFOLIO_INFO.email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors flex items-center gap-1 cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs text-zinc-400 leading-relaxed">
                Response typically within 24 hours. NDA friendly for early-stage or enterprise initiatives.
              </div>
            </div>

            <div className="text-xs text-zinc-500">
              <span className="font-medium text-zinc-400">Timezone:</span> UTC-7 / Flexible overlap for international teams.
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#121316] border border-zinc-800">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-blue-950/60 border border-blue-500 text-blue-400 mx-auto flex items-center justify-center">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Tajuddin will review your project requirements and follow up via {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', projectType: 'SaaS / Web App', message: '' });
                    }}
                    className="mt-4 px-5 py-2.5 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="text-xs font-semibold text-zinc-300 block mb-2">
                        Your Name <span className="text-blue-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="text-xs font-semibold text-zinc-300 block mb-2">
                        Work Email <span className="text-blue-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="project-type" className="text-xs font-semibold text-zinc-300 block mb-2">
                      Project Domain / Scope
                    </label>
                    <select
                      id="project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    >
                      <option value="SaaS / Web App">SaaS / Web Application Redesign</option>
                      <option value="Design System">Design System Architecture & Tokens</option>
                      <option value="Mobile Application">Mobile Application (iOS / Android)</option>
                      <option value="Usability Audit">Usability Audit & UX Research</option>
                      <option value="Other">Other Product Advisory</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-xs font-semibold text-zinc-300 block mb-2">
                      Project Overview & Goals <span className="text-blue-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your product goals, timeline, and key challenges..."
                      className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.99] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
