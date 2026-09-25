import React, { useState } from 'react';
import { APPLICATION_TRACKS } from '../data/roadmapData';
import { CheckSquare, UserCheck, Calendar, MapPin, Award, Layers, HelpCircle, ChevronRight } from 'lucide-react';

interface RoutesSectionProps {
  onOpenDiagnostic: () => void;
}

export const RoutesSection: React.FC<RoutesSectionProps> = ({ onOpenDiagnostic }) => {
  const [selectedSpec, setSelectedSpec] = useState<'all' | 'math' | 'prof'>('all');

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-14" id="routes-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-['Space_Grotesk'] text-xs font-mono text-[#ddb8ff] uppercase tracking-widest">
              // Ingress Vectors
            </span>
            <span className="h-px w-12 bg-purple-400/30" />
          </div>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1">
            Routes In: 3 Application Tracks
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mt-1">
            Understanding the exact vector of admission is crucial. Each channel has distinct entry barriers, screening
            entities, and professor requirement rules.
          </p>
        </div>

        <button
          onClick={onOpenDiagnostic}
          className="self-start md:self-auto px-3.5 py-2 rounded-lg bg-[#262a37] hover:bg-[#313442] border border-cyan-500/30 text-cyan-300 font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all"
        >
          <HelpCircle className="w-4 h-4 text-cyan-400" />
          <span>Interactive Track Selector</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3 Column Track Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Track 1: Embassy Recommendation */}
        <div className="rounded-xl bg-[#1b1f2c] border border-cyan-500/30 p-6 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-cyan-400/60 transition-all">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7bd0ff] to-[#7c3aed]" />
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-wider">
                Track 01 • Recommended
              </span>
              <span className="font-['Space_Grotesk'] text-xs text-[#94A3B8] font-mono">
                High School / 1st Yr
              </span>
            </div>

            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
              Embassy Recommendation
            </h3>
            <p className="font-['Inter'] text-xs text-[#7bd0ff] font-medium mt-0.5">
              Applied via Embassy of Japan in New Delhi
            </p>

            <p className="font-['Inter'] text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              The prime gateway for Indian high school seniors (12th grade PCM) and early undergraduates. Applications are
              processed through the cultural section of the Japanese Embassy in New Delhi.
            </p>

            <div className="space-y-2.5 mt-4 pt-1 border-t border-white/5">
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckSquare className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Exams:</strong> Rigorous written tests in English, Mathematics (Adv.
                  Calculus/Vectors), Chemistry &amp; Physics.
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <UserCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Professor Contact:</strong>{' '}
                  <span className="text-[#7bd0ff] font-semibold">NOT REQUIRED</span> at application time. Matching
                  occurs after clearing initial embassy screening.
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <Calendar className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Timeline:</strong> Applications release April; written exams &amp;
                  interviews held May–June.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 bg-[#262a37]/50 -mx-6 -mb-6 p-4 rounded-b-xl border-t border-white/5 flex items-center justify-between">
            <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-[#94A3B8] font-bold">
              Best For
            </span>
            <span className="font-['Space_Grotesk'] text-xs text-[#7bd0ff] font-bold font-mono">
              12th Graders &amp; Fresh Undergrads
            </span>
          </div>
        </div>

        {/* Track 2: University Recommendation */}
        <div className="rounded-xl bg-[#1b1f2c] border border-purple-500/30 p-6 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-purple-400/60 transition-all">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ddb8ff] to-[#8B5CF6]" />
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-[#ddb8ff] font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-wider">
                Track 02 • Direct Grad
              </span>
              <span className="font-['Space_Grotesk'] text-xs text-[#94A3B8] font-mono">
                B.Tech / B.E. Final Yr
              </span>
            </div>

            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
              University Recommendation
            </h3>
            <p className="font-['Inter'] text-xs text-[#ddb8ff] font-medium mt-0.5">
              Direct nomination via UTokyo GSIST
            </p>

            <p className="font-['Inter'] text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              UTokyo directly nominates admitted international graduate candidates to MEXT. Applicable for students
              targeting Master's or PhD in Computer Science at UTokyo's GSIST.
            </p>

            <div className="space-y-2.5 mt-4 pt-1 border-t border-white/5">
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <UserCheck className="w-4 h-4 text-purple-300 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Professor Contact:</strong>{' '}
                  <span className="text-[#ddb8ff] font-semibold">MANDATORY</span>. You must identify a Principal
                  Investigator (PI) whose lab aligns with your CS thesis and receive tentative acceptance.
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <Layers className="w-4 h-4 text-purple-300 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Language:</strong> 100% English thesis possible. GRE General / Subject
                  and TOEFL/IELTS required.
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <Calendar className="w-4 h-4 text-purple-300 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Deadlines:</strong> October–December for subsequent Autumn semester
                  enrollments.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 bg-[#262a37]/50 -mx-6 -mb-6 p-4 rounded-b-xl border-t border-white/5 flex items-center justify-between">
            <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-[#94A3B8] font-bold">
              Best For
            </span>
            <span className="font-['Space_Grotesk'] text-xs text-[#ddb8ff] font-bold font-mono">
              Prospective M.Tech / PhD Researchers
            </span>
          </div>
        </div>

        {/* Track 3: Domestic Selection */}
        <div className="rounded-xl bg-[#1b1f2c] border border-slate-700 p-6 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-slate-500 transition-all">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#958da1] to-[#353946]" />
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-[#262a37] text-slate-300 font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-wider">
                Track 03 • In-Country
              </span>
              <span className="font-['Space_Grotesk'] text-xs text-[#94A3B8] font-mono">
                Enrolled Students
              </span>
            </div>

            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
              Domestic Selection
            </h3>
            <p className="font-['Inter'] text-xs text-slate-300 font-medium mt-0.5">
              Conversion for self-financed students in Japan
            </p>

            <p className="font-['Inter'] text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              Tailored for international students already enrolled in Japanese universities under private funding who
              demonstrate outstanding GPA, research output, or departmental ranking.
            </p>

            <div className="space-y-2.5 mt-4 pt-1 border-t border-white/5">
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Location Requirement:</strong> Must already reside in Japan with valid
                  Student visa status.
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <Award className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Evaluation:</strong> Departmental ranking, Japanese university GPA
                  (often 2.8+/3.0), and faculty dean recommendation.
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <Layers className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Availability:</strong> Limited quotas, subjected to fluctuating national
                  education budgets.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 bg-[#262a37]/50 -mx-6 -mb-6 p-4 rounded-b-xl border-t border-white/5 flex items-center justify-between">
            <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-[#94A3B8] font-bold">
              Best For
            </span>
            <span className="font-['Space_Grotesk'] text-xs text-slate-200 font-bold font-mono">
              Privately Funded Students in Japan
            </span>
          </div>
        </div>
      </div>

      {/* Comparative Ingress Spec-Sheet Table */}
      <div className="mt-8 rounded-xl bg-[#171b28] border border-white/5 p-5 lg:p-7 shadow-xl overflow-x-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-white">
            Comparative Ingress Spec-Sheet
          </h3>
          <span className="font-['Space_Grotesk'] text-xs font-mono text-[#7bd0ff]">
            METRIC MATRIX v2.4
          </span>
        </div>

        <table className="w-full text-left font-['Inter'] text-xs sm:text-sm min-w-[700px]">
          <thead>
            <tr className="bg-[#262a37]/70 text-white font-['Space_Grotesk'] text-xs uppercase tracking-wider">
              <th className="p-3.5 rounded-l-lg">Feature Metric</th>
              <th className="p-3.5 text-[#7bd0ff]">Embassy Recommendation</th>
              <th className="p-3.5 text-[#ddb8ff]">University Recommendation</th>
              <th className="p-3.5 text-slate-400 rounded-r-lg">Domestic Selection</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            <tr className="hover:bg-[#1b1f2c]/50 transition-colors">
              <td className="p-3.5 text-white font-medium">Primary Target Audience</td>
              <td className="p-3.5 text-slate-300">Indian 12th PCM / Early College</td>
              <td className="p-3.5 text-slate-300">Graduating B.Tech / M.Tech</td>
              <td className="p-3.5 text-slate-300">Current UTokyo / Japan Undergrad</td>
            </tr>
            <tr className="hover:bg-[#1b1f2c]/50 transition-colors">
              <td className="p-3.5 text-white font-medium">Prior Professor Contact Required?</td>
              <td className="p-3.5 text-[#7bd0ff] font-semibold">NO (Match after primary screening)</td>
              <td className="p-3.5 text-[#ddb8ff] font-semibold">YES (Strict prerequisite)</td>
              <td className="p-3.5 text-slate-400">Faculty Advisor endorsement</td>
            </tr>
            <tr className="hover:bg-[#1b1f2c]/50 transition-colors">
              <td className="p-3.5 text-white font-medium">Entrance Examination</td>
              <td className="p-3.5 text-slate-300">Math (Course B), Physics, Chem, Eng</td>
              <td className="p-3.5 text-slate-300">Lab Review + Interview + GRE</td>
              <td className="p-3.5 text-slate-300">Internal Semester GPA evaluation</td>
            </tr>
            <tr className="hover:bg-[#1b1f2c]/50 transition-colors">
              <td className="p-3.5 text-white font-medium">Japanese Prep School Included?</td>
              <td className="p-3.5 text-[#7bd0ff] font-semibold">YES (1 Year mandatory for UG)</td>
              <td className="p-3.5 text-slate-400">No (Direct lab commencement)</td>
              <td className="p-3.5 text-slate-400">No (Already immersed)</td>
            </tr>
            <tr className="hover:bg-[#1b1f2c]/50 transition-colors">
              <td className="p-3.5 text-white font-medium">Instruction Language for CS</td>
              <td className="p-3.5 text-slate-300">Japanese (post 1-yr prep)</td>
              <td className="p-3.5 text-[#ddb8ff] font-semibold">English (GSIST Research track)</td>
              <td className="p-3.5 text-slate-300">Japanese or English</td>
            </tr>
            <tr className="hover:bg-[#1b1f2c]/50 transition-colors">
              <td className="p-3.5 text-white font-medium">Application Window</td>
              <td className="p-3.5 text-slate-300">April – May annually</td>
              <td className="p-3.5 text-slate-300">October – January annually</td>
              <td className="p-3.5 text-slate-300">Internal university windows</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
