import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, BookOpen, AlertTriangle } from 'lucide-react';

interface TrackFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrackFinderModal: React.FC<TrackFinderModalProps> = ({ isOpen, onClose }) => {
  const [academicStanding, setAcademicStanding] = useState<'highschool' | 'btech_final' | 'in_japan'>('highschool');
  const [targetDegree, setTargetDegree] = useState<'bachelor' | 'masters_phd'>('bachelor');
  const [japaneseLevel, setJapaneseLevel] = useState<'none' | 'n3_n2' | 'n1'>('none');

  if (!isOpen) return null;

  // Compute recommendation
  const getRecommendation = () => {
    if (academicStanding === 'in_japan') {
      return {
        trackName: 'Track 03 • Domestic Selection (国内採用)',
        badgeColor: 'border-slate-500 text-slate-200',
        summary: 'Direct conversion for students already enrolled in Japanese universities.',
        bullets: [
          'Must reside in Japan with valid Student visa status',
          'Requires 2.8+/3.0 GPA in current Japanese institution',
          'Must be endorsed by your Department Dean and Faculty Advisor',
        ],
        action: 'Contact UTokyo International Student Support Desk for upcoming internal quota window.',
      };
    }

    if (academicStanding === 'btech_final' || targetDegree === 'masters_phd') {
      return {
        trackName: 'Track 02 • University Recommendation (大学推薦) via GSIST',
        badgeColor: 'border-purple-400 text-purple-300',
        summary: 'Direct graduate research admission into UTokyo Graduate School of Information Science and Technology.',
        bullets: [
          'Mandatory step: Identify and reach out to a PI whose lab matches your thesis',
          '100% English curriculum (ESIS program in GSIST)',
          'Requires GRE General / Subject, TOEFL iBT (100+) or IELTS (7.5+), and research proposal',
        ],
        action: 'Browse the UTokyo CS Labs directory below and prepare your 3-page research proposal.',
      };
    }

    return {
      trackName: 'Track 01 • Embassy Recommendation (大使館推薦) - Natural Sciences A',
      badgeColor: 'border-cyan-400 text-cyan-300',
      summary: 'The primary gateway for Indian high school PCM seniors targeting undergraduate CS.',
      bullets: [
        'Rigorous written exams in Math (Course B), Physics, Chemistry, and English in New Delhi/Consulates',
        'No prior professor contact allowed before clearing the Embassy first screening',
        'Includes mandatory 1-year intensive Japanese language prep at Tokyo University of Foreign Studies',
      ],
      action: 'Focus on Math Course B past papers and maintain 85%+ in 12th Board PCM examinations.',
    };
  };

  const rec = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#171b28] border border-cyan-500/30 rounded-2xl w-full max-w-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-[#7c3aed] to-[#A855F7]" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <h3 className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold text-white">
              CS Track Diagnostic Engine
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-[#262a37] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Diagnostic Questions */}
        <div className="space-y-5 mt-5">
          {/* Question 1: Standing */}
          <div>
            <label className="block text-xs font-['Space_Grotesk'] uppercase text-cyan-300 font-bold mb-2">
              1. Current Academic Standing
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'highschool', label: '12th Grade / Fresh Undergrad' },
                { id: 'btech_final', label: 'B.Tech / M.Tech Final Year' },
                { id: 'in_japan', label: 'Already Enrolled in Japan' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setAcademicStanding(opt.id as any);
                    if (opt.id === 'highschool') setTargetDegree('bachelor');
                    if (opt.id === 'btech_final') setTargetDegree('masters_phd');
                  }}
                  className={`p-3 rounded-lg border text-left text-xs font-['Space_Grotesk'] transition-all ${
                    academicStanding === opt.id
                      ? 'bg-cyan-500/15 border-cyan-400 text-white font-bold'
                      : 'bg-[#1b1f2c] border-white/5 text-slate-300 hover:border-white/20'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Target Degree */}
          <div>
            <label className="block text-xs font-['Space_Grotesk'] uppercase text-cyan-300 font-bold mb-2">
              2. Target Degree at UTokyo
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setTargetDegree('bachelor')}
                className={`p-3 rounded-lg border text-left text-xs font-['Space_Grotesk'] transition-all ${
                  targetDegree === 'bachelor'
                    ? 'bg-cyan-500/15 border-cyan-400 text-white font-bold'
                    : 'bg-[#1b1f2c] border-white/5 text-slate-300 hover:border-white/20'
                }`}
              >
                <div className="font-bold text-white">Undergraduate Bachelor's (学部)</div>
                <div className="text-[11px] text-slate-400 mt-0.5">EEIC or Dept of Information Science</div>
              </button>

              <button
                type="button"
                onClick={() => setTargetDegree('masters_phd')}
                className={`p-3 rounded-lg border text-left text-xs font-['Space_Grotesk'] transition-all ${
                  targetDegree === 'masters_phd'
                    ? 'bg-cyan-500/15 border-cyan-400 text-white font-bold'
                    : 'bg-[#1b1f2c] border-white/5 text-slate-300 hover:border-white/20'
                }`}
              >
                <div className="font-bold text-white">Master’s or Doctoral PhD (大学院)</div>
                <div className="text-[11px] text-slate-400 mt-0.5">GSIST or III English Graduate Program</div>
              </button>
            </div>
          </div>

          {/* Question 3: Japanese Level */}
          <div>
            <label className="block text-xs font-['Space_Grotesk'] uppercase text-cyan-300 font-bold mb-2">
              3. Japanese Language Proficiency
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'none', label: 'Zero / Beginner' },
                { id: 'n3_n2', label: 'Intermediate (JLPT N3/N2)' },
                { id: 'n1', label: 'Advanced (JLPT N1)' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setJapaneseLevel(opt.id as any)}
                  className={`p-2.5 rounded-lg border text-center text-xs font-['Space_Grotesk'] transition-all ${
                    japaneseLevel === opt.id
                      ? 'bg-purple-500/20 border-purple-400 text-white font-bold'
                      : 'bg-[#1b1f2c] border-white/5 text-slate-300 hover:border-white/20'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculated Result Box */}
        <div className="mt-6 p-4 sm:p-5 rounded-xl bg-[#0a0e1a] border border-cyan-500/30">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono text-cyan-400 uppercase font-bold">
              Recommended Ingress Vector:
            </span>
          </div>

          <h4 className="font-['Space_Grotesk'] text-base sm:text-lg font-bold text-white mb-1">
            {rec.trackName}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 font-['Inter'] mb-3">
            {rec.summary}
          </p>

          <div className="space-y-1.5 mb-4">
            {rec.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-[11px] text-amber-300 font-['Inter']">
              <strong>Next Action:</strong> {rec.action}
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-[#7c3aed] text-white font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider shrink-0 flex items-center justify-center gap-1.5"
            >
              <span>Explore Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
