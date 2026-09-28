import React from 'react';
import { ExternalLink, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0a0e1a] border-t border-white/5 py-10">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex flex-col gap-1">
          <p className="font-['Inter'] text-xs sm:text-sm text-[#94A3B8]">
            Bhuvan — Sakuta Fx |{' '}
            <a
              href="https://github.com/bhuvan0x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7bd0ff] hover:text-white transition-colors font-mono inline-flex items-center gap-1"
            >
              github.com/bhuvan0x
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
          </p>
          <p className="font-['Inter'] text-xs text-[#958da1]">
            A practical student roadmap, not official embassy guidance. Curated for Indian CS scholars targeting UTokyo.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-['Space_Grotesk'] text-[11px] font-bold uppercase text-[#958da1] tracking-wider">
              MEXT Aspirant Blueprint
            </span>
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)] animate-pulse" />
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#1b1f2c] border border-white/5 text-slate-400 hover:text-white hover:border-cyan-400/30 transition-all"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
