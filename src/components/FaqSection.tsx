import React, { useState } from 'react';
import { MEXT_FAQS } from '../data/roadmapData';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Eligibility', 'Exams', 'Language', 'Life in Tokyo'];

  const filteredFaqs =
    activeCategory === 'All'
      ? MEXT_FAQS
      : MEXT_FAQS.filter((f) => f.category === activeCategory);

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-10" id="faqs">
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-2">
          <span className="font-['Space_Grotesk'] text-xs font-mono text-[#ddb8ff] uppercase tracking-widest">
            // Knowledge Base
          </span>
          <span className="h-px w-12 bg-purple-400/30" />
        </div>
        <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-semibold text-white tracking-tight">
          Admissions Advisory &amp; Field Intelligence
        </h2>
        <p className="font-['Inter'] text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          Concrete clarity on common points of confusion: Math Course B difficulty, PEAK myths, provisional acceptance
          rules, and student expenses in Tokyo.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-['Space_Grotesk'] uppercase tracking-wider transition-all ${
              activeCategory === cat
                ? 'bg-[#7c3aed] text-white font-bold shadow-md'
                : 'bg-[#1b1f2c] text-slate-300 hover:text-white border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all ${
                isOpen
                  ? 'bg-[#1b1f2c] border-cyan-500/30 shadow-lg'
                  : 'bg-[#171b28]/60 border-white/5 hover:border-white/15'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xs font-['Space_Grotesk'] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-[#ddb8ff] shrink-0 mt-0.5">
                    {faq.category}
                  </span>
                  <span className="font-['Space_Grotesk'] text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                </div>
                <div className="p-1 rounded-lg bg-[#262a37] text-slate-300 shrink-0">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-slate-300 font-['Inter'] text-xs sm:text-sm leading-relaxed border-t border-white/5 mt-1">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
