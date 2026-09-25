import React, { useState } from 'react';
import { GraduationCap, Banknote, Plane, CheckCircle2, ArrowDown, Calculator } from 'lucide-react';

export const CoverageSection: React.FC = () => {
  const [degreeTrack, setDegreeTrack] = useState<'ug' | 'masters' | 'phd'>('ug');
  const [currency, setCurrency] = useState<'JPY' | 'INR' | 'USD'>('JPY');

  // Realistic exchange rates:
  // 1 JPY = ~0.56 INR
  // 1 JPY = ~0.0067 USD
  const convertAmount = (jpyAmount: number) => {
    if (currency === 'INR') {
      const inr = jpyAmount * 0.56;
      if (inr >= 10000000) {
        return `₹${(inr / 10000000).toFixed(2)} Cr`;
      }
      return `₹${(inr / 100000).toFixed(1)} Lakhs`;
    }
    if (currency === 'USD') {
      const usd = jpyAmount * 0.0067;
      return `$${Math.round(usd).toLocaleString()}`;
    }
    // JPY default
    if (jpyAmount >= 1000000) {
      return `¥${(jpyAmount / 1000000).toFixed(1)}M`;
    }
    return `¥${jpyAmount.toLocaleString()}`;
  };

  const getCalculationSummary = () => {
    if (degreeTrack === 'ug') {
      // 1 yr prep (¥117k * 12) + 4 yr UG (¥117k * 48) + tuition waived (¥535.8k * 4 + ¥282k entrance) + 2 round-trip flights (~¥300k)
      const totalJpy = 117000 * 60 + 535800 * 4 + 282000 + 400000; // ~¥9.8M
      return {
        title: 'Approximate 5-Year Total Undergraduate Value',
        detail: 'Calculated as 1 yr prep + 4 yrs tuition (¥535,800/yr) + entrance fees + 60 months living stipend + round-trip flights.',
        total: totalJpy,
        monthly: 117000,
      };
    }
    if (degreeTrack === 'masters') {
      // 2 yr Masters (¥144k * 24) + tuition waived (¥535.8k * 2 + ¥282k entrance) + flights (~¥300k)
      const totalJpy = 144000 * 24 + 535800 * 2 + 282000 + 300000; // ~¥5.1M
      return {
        title: 'Approximate 2-Year Master’s Degree Value (GSIST)',
        detail: 'Calculated as 2 years tuition waiver + entrance fee + 24 months stipend at ¥144,000/mo + round-trip flights.',
        total: totalJpy,
        monthly: 144000,
      };
    }
    // PhD
    const totalJpy = 145000 * 36 + 535800 * 3 + 282000 + 350000; // ~¥7.4M
    return {
      title: 'Approximate 3-Year Doctoral (PhD) Research Value',
      detail: 'Calculated as 3 years full research tuition waiver + matriculation + 36 months stipend at ¥145,000/mo + flights.',
      total: totalJpy,
      monthly: 145000,
    };
  };

  const summary = getCalculationSummary();

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-14" id="coverage">
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-2">
          <span className="font-['Space_Grotesk'] text-xs font-mono text-[#7bd0ff] uppercase tracking-widest">
            // Financial Overview
          </span>
          <span className="h-px w-12 bg-cyan-400/30" />
        </div>
        <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-semibold text-white tracking-tight">
          What the MEXT Scholarship Covers
        </h2>
        <p className="font-['Inter'] text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          One of the world's most comprehensive government awards. Designed to eliminate economic barriers entirely so
          scholars can focus strictly on research and engineering.
        </p>
      </div>

      {/* 3 High-Tech Cyber Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Tuition Waiver */}
        <div className="rounded-xl bg-[#1b1f2c]/75 backdrop-blur-xl border border-white/5 p-6 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:bg-[#1b1f2c] hover:border-cyan-400/30 transition-all">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7bd0ff] via-[#7bd0ff]/40 to-transparent" />
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-lg bg-cyan-400/10 text-cyan-300 flex items-center justify-center border border-cyan-400/20">
                <GraduationCap className="w-5 h-5 text-cyan-300" />
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#262a37] text-cyan-300 font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-wider">
                Zero Tuition
              </span>
            </div>
            <span className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#7bd0ff] tracking-tight block">
              100% Full Waiver
            </span>
            <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-white mt-1">
              All Academic Fees
            </h3>
            <p className="font-['Inter'] text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Exemption covers University entrance examination fees, university matriculation registration fees, and full
              undergraduate/graduate tuition across all semesters at UTokyo.
            </p>
          </div>
          <div className="mt-5 pt-3 bg-[#0a0e1a]/60 -mx-6 -mb-6 p-4 border-t border-white/5 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#7bd0ff] shrink-0" />
            <span className="font-['Space_Grotesk'] text-xs text-[#94A3B8] font-mono">
              Zero economic burden or income thresholds
            </span>
          </div>
        </div>

        {/* Card 2: Monthly Stipend */}
        <div className="rounded-xl bg-[#1b1f2c]/75 backdrop-blur-xl border border-white/5 p-6 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:bg-[#1b1f2c] hover:border-purple-400/30 transition-all">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#A855F7] via-[#7c3aed] to-transparent" />
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-lg bg-purple-500/20 text-[#ddb8ff] flex items-center justify-center border border-purple-500/30">
                <Banknote className="w-5 h-5 text-purple-300" />
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#7c3aed]/20 text-[#f0dbff] font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-wider">
                Tax-Free Monthly
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#ddb8ff] tracking-tight">
                ¥117k–¥145k
              </span>
              <span className="font-['Space_Grotesk'] text-xs text-[#94A3B8] font-mono">/ month</span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-white mt-1">
              Living Allowance
            </h3>
            <p className="font-['Inter'] text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              ¥117,000/mo for undergraduate scholars; ¥144,000–¥145,000/mo for Master's and PhD researchers. Sufficient
              to cover rent, Tokyo transit, nutrition, and personal research hardware.
            </p>
          </div>
          <div className="mt-5 pt-3 bg-[#0a0e1a]/60 -mx-6 -mb-6 p-4 border-t border-white/5 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#A855F7] shrink-0" />
            <span className="font-['Space_Grotesk'] text-xs text-[#94A3B8] font-mono">
              Direct wired monthly deposits
            </span>
          </div>
        </div>

        {/* Card 3: Airfare & Language Prep */}
        <div className="rounded-xl bg-[#1b1f2c]/75 backdrop-blur-xl border border-white/5 p-6 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:bg-[#1b1f2c] hover:border-cyan-400/30 transition-all">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4F46E5] via-[#7bd0ff] to-transparent" />
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-lg bg-[#4F46E5]/20 text-cyan-300 flex items-center justify-center border border-[#4F46E5]/30">
                <Plane className="w-5 h-5 text-cyan-300" />
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#262a37] text-cyan-200 font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-wider">
                Logistics & Prep
              </span>
            </div>
            <span className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white tracking-tight block">
              Flights + 1-Yr Prep
            </span>
            <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-white mt-1">
              Travel & Immersion
            </h3>
            <p className="font-['Inter'] text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Fully paid round-trip economy flights between India and Tokyo Narita/Haneda. Undergraduates receive an
              intensive 1-year preparatory Japanese course at Tokyo University of Foreign Studies / Osaka Univ before
              entering UTokyo.
            </p>
          </div>
          <div className="mt-5 pt-3 bg-[#0a0e1a]/60 -mx-6 -mb-6 p-4 border-t border-white/5 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#7bd0ff] shrink-0" />
            <span className="font-['Space_Grotesk'] text-xs text-[#94A3B8] font-mono">
              Full relocation flight allowance
            </span>
          </div>
        </div>
      </div>

      {/* Inline Financial Metric Chart with Interactive Calculator */}
      <div className="mt-6 rounded-xl bg-[#171b28] border border-cyan-500/20 p-5 lg:p-6 shadow-xl flex flex-col gap-4">
        {/* Degree & Currency Switcher Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span className="font-['Space_Grotesk'] text-xs font-semibold uppercase text-slate-300 tracking-wider">
              Scholarship Value Simulator
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Degree Selector */}
            <div className="inline-flex rounded-lg bg-[#0a0e1a] p-1 border border-white/5 text-xs font-['Space_Grotesk']">
              <button
                onClick={() => setDegreeTrack('ug')}
                className={`px-3 py-1 rounded-md transition-all ${
                  degreeTrack === 'ug' ? 'bg-[#7c3aed] text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Undergraduate (5 Yrs)
              </button>
              <button
                onClick={() => setDegreeTrack('masters')}
                className={`px-3 py-1 rounded-md transition-all ${
                  degreeTrack === 'masters' ? 'bg-[#7c3aed] text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Master's (2 Yrs)
              </button>
              <button
                onClick={() => setDegreeTrack('phd')}
                className={`px-3 py-1 rounded-md transition-all ${
                  degreeTrack === 'phd' ? 'bg-[#7c3aed] text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Doctoral (3 Yrs)
              </button>
            </div>

            {/* Currency Selector */}
            <div className="inline-flex rounded-lg bg-[#0a0e1a] p-1 border border-white/5 text-xs font-mono font-bold">
              {(['JPY', 'INR', 'USD'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    currency === curr ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {curr === 'JPY' ? '¥ JPY' : curr === 'INR' ? '₹ INR' : '$ USD'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Display Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#1b1f2c] border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <svg className="w-10 h-10" viewBox="0 0 36 36">
                <path
                  className="text-slate-700"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className="text-cyan-400"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="100, 100"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <text
                  className="fill-current text-cyan-300 font-['Space_Grotesk'] text-[9px] font-bold"
                  textAnchor="middle"
                  x="18"
                  y="20.5"
                >
                  100%
                </text>
              </svg>
            </div>

            <div>
              <span className="font-['Space_Grotesk'] text-base sm:text-lg font-semibold text-white block">
                {summary.title}:{' '}
                <span className="text-cyan-300 underline decoration-cyan-400/40">
                  ~{convertAmount(summary.total)}
                </span>
                <span className="text-slate-400 text-xs ml-2">
                  (Monthly: {convertAmount(summary.monthly)})
                </span>
              </span>
              <span className="font-['Inter'] text-xs sm:text-sm text-slate-400 block mt-0.5">
                {summary.detail}
              </span>
            </div>
          </div>

          <a
            href="#prep-timeline"
            className="shrink-0 px-4 py-2.5 rounded-lg bg-[#7c3aed] hover:bg-[#8B5CF6] text-white font-['Space_Grotesk'] text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-purple-900/30"
          >
            <span>View Deadlines</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
