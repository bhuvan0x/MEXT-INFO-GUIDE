import React from 'react';
import { Terminal, ShieldCheck, AlertTriangle, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiagnostic }) => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 lg:px-8 pt-8 md:pt-12 pb-10 relative">
      {/* Ambient Atmospheric Radiant Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1100px] h-[480px] pointer-events-none overflow-hidden -z-10 opacity-35">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-[#4F46E5]/25 blur-[140px]" />
        <div className="absolute top-12 right-1/4 w-[420px] h-[420px] rounded-full bg-[#8B5CF6]/20 blur-[150px]" />
        <div className="absolute top-36 left-1/2 -translate-x-1/2 w-[380px] h-[300px] rounded-full bg-[#00a6e0]/15 blur-[130px]" />
      </div>

      <div className="flex flex-col items-start gap-4">
        {/* Status Badge Row */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7c3aed]/20 border border-[#7c3aed]/30 text-[#f0dbff] font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-widest shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-ping" />
            2025–2026 Academic Edition
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#262a37] border border-white/5 text-[#7bd0ff] font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            CS Engineering Blueprint
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171b28] border border-white/5 text-[#94A3B8] font-['Space_Grotesk'] text-[12px] font-mono">
            IND → TOKYO (HONGŌ / KOMABA)
          </span>
        </div>

        {/* Main Display Headline */}
        <div className="flex flex-col gap-1 max-w-4xl mt-1">
          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            MEXT to{' '}
            <span className="bg-gradient-to-r from-[#7bd0ff] via-[#d2bbff] to-[#A855F7] bg-clip-text text-transparent">
              UTokyo
            </span>
          </h1>
          <p className="font-['Space_Grotesk'] text-xl sm:text-2xl text-[#7bd0ff] font-medium tracking-tight mt-1">
            A CS aspirant's roadmap, one step at a time.
          </p>
        </div>

        {/* Intro Narrative */}
        <p className="font-['Inter'] text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          A practical engineering roadmap for Indian high schoolers, polytechnic scholars, and university
          undergraduates targeting Computer Science at the prestigious{' '}
          <strong className="text-white font-semibold">University of Tokyo (東京大学)</strong>, fully funded by the
          Japanese Government's Monbukagakusho (MEXT) scholarship.
        </p>

        {/* Curator Disclaimer */}
        <div className="flex items-center gap-2 pt-1 text-[#94A3B8] text-xs sm:text-sm">
          <ShieldCheck className="w-4 h-4 text-[#7bd0ff] shrink-0" />
          <span>
            Independent student community initiative curated by Sakuta Fx. Not official MEXT or Embassy of Japan
            guidance.
          </span>
        </div>

        {/* Quick Diagnostic Call to Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={onOpenDiagnostic}
            className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#38BDF8] text-white font-['Space_Grotesk'] text-xs sm:text-sm font-semibold tracking-wide hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>Find My CS Application Track</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="#prep-timeline"
            className="px-4 py-2.5 rounded-lg bg-[#1E293B]/70 border border-white/10 hover:border-cyan-400/40 text-slate-200 hover:text-white font-['Space_Grotesk'] text-xs sm:text-sm font-medium transition-all flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Interactive Prep Checklist</span>
          </a>
        </div>

        {/* CRITICAL ADVISORY CALLOUT (Bento Card Style) */}
        <div
          className="w-full mt-4 rounded-xl bg-[#171b28]/95 border border-amber-500/20 p-5 lg:p-7 shadow-xl relative overflow-hidden"
          id="cs-paths-note"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-[#00a6e0] to-[#7c3aed]" />

          <div className="flex flex-col md:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6 text-amber-300" />
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-['Space_Grotesk'] text-lg font-semibold text-white">
                  Crucial Advisory: The Reality of CS Tracks at UTokyo
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-200 font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-wider">
                  Mythbuster
                </span>
              </div>

              <p className="font-['Inter'] text-sm sm:text-base text-slate-300 leading-relaxed">
                A prevalent misconception among international applicants is targeting{' '}
                <span className="text-amber-200 font-medium underline decoration-amber-400/50 underline-offset-2">
                  PEAK (Programs in English at Komaba)
                </span>{' '}
                for Computer Science.{' '}
                <strong className="text-white font-semibold">PEAK has never offered a Computer Science major</strong>{' '}
                (only Japan in East Asia &amp; Environmental Sciences) and is concluding its final incoming intake in{' '}
                <strong className="text-amber-200 font-semibold">September 2026</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                <div className="rounded-lg bg-[#1b1f2c] border border-cyan-500/15 p-3.5 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 flex items-center justify-center font-['Space_Grotesk'] text-xs font-bold shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <span className="font-['Space_Grotesk'] text-[15px] font-semibold text-white block">
                      Japanese Undergrad Track
                    </span>
                    <span className="font-['Inter'] text-xs text-slate-300 leading-relaxed">
                      Faculty of Engineering (EEIC) or Faculty of Science (Dept of CS). Requires high Japanese fluency
                      (JLPT N2/N1) or the mandatory 1-yr MEXT prep school.
                    </span>
                  </div>
                </div>

                <div className="rounded-lg bg-[#1b1f2c] border border-purple-500/15 p-3.5 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 flex items-center justify-center font-['Space_Grotesk'] text-xs font-bold shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <span className="font-['Space_Grotesk'] text-[15px] font-semibold text-white block">
                      English Graduate Track
                    </span>
                    <span className="font-['Inter'] text-xs text-slate-300 leading-relaxed">
                      Graduate School of Information Science and Technology (GSIST). Taught entirely in English.
                      Requires direct lab professor matching and research proposals.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
