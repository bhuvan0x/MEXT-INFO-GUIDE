import React, { useState } from 'react';
import { UTOKYO_LABS } from '../data/roadmapData';
import { MapPin, Globe, ExternalLink, Cpu, Compass, BookOpen, Layers } from 'lucide-react';

export const DepartmentsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ug' | 'grad'>('ug');
  const [selectedLabDomain, setSelectedLabDomain] = useState<string>('all');

  const filteredLabs =
    selectedLabDomain === 'all'
      ? UTOKYO_LABS
      : UTOKYO_LABS.filter((lab) => lab.domain === selectedLabDomain);

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-14" id="departments">
      <div className="rounded-2xl bg-gradient-to-br from-[#1b1f2c] via-[#171b28] to-[#0f131f] border border-white/5 p-5 sm:p-7 lg:p-9 shadow-2xl relative overflow-hidden">
        {/* Glow behind */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#7c3aed]/15 blur-3xl pointer-events-none" />

        {/* Section Header & Tab Controls */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 relative z-10">
          <div className="flex flex-col gap-1.5 max-w-xl">
            <span className="font-['Space_Grotesk'] text-[11px] font-bold text-cyan-300 uppercase tracking-widest">
              Target Departments
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Where Computer Science Lives at UTokyo
            </h2>
            <p className="font-['Inter'] text-sm sm:text-base text-slate-300 leading-relaxed">
              The University of Tokyo does not have a single unified "CS department". Computer Science is distributed
              across specialized faculties and interdisciplinary graduate schools.
            </p>
          </div>

          {/* Undergrad vs Grad Tab Switcher */}
          <div className="flex items-center gap-1.5 bg-[#313442]/60 p-1.5 rounded-lg border border-white/5 shrink-0">
            <button
              onClick={() => setActiveTab('ug')}
              className={`px-4 py-2 rounded-md font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'ug'
                  ? 'bg-[#7c3aed] text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Undergraduate (学部)
            </button>
            <button
              onClick={() => setActiveTab('grad')}
              className={`px-4 py-2 rounded-md font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'grad'
                  ? 'bg-[#7c3aed] text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Graduate (大学院)
            </button>
          </div>
        </div>

        {/* Tab Content: Undergrad */}
        {activeTab === 'ug' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            <div className="rounded-xl bg-[#262a37]/45 border border-white/5 p-5 sm:p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-['Space_Grotesk'] text-xs text-cyan-300 font-mono font-semibold">
                    Faculty of Engineering
                  </span>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[11px] font-['Space_Grotesk'] font-bold">
                    EEIC Course
                  </span>
                </div>
                <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-white">
                  Dept. of Information &amp; Communication Engineering
                </h4>
                <p className="font-['Inter'] text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Commonly referred to as EEIC (Electrical, Electronic and Information Engineering). Centers on distributed
                  systems, AI hardware, machine intelligence, cyber-physical architectures, and networks.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/5 text-[#94A3B8] font-['Space_Grotesk'] text-xs flex items-center gap-1.5 font-mono">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Hongō Campus, Bunkyo-ku, Tokyo
              </div>
            </div>

            <div className="rounded-xl bg-[#262a37]/45 border border-white/5 p-5 sm:p-6 flex flex-col justify-between hover:border-purple-500/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-['Space_Grotesk'] text-xs text-[#ddb8ff] font-mono font-semibold">
                    Faculty of Science
                  </span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/20 text-[#ddb8ff] text-[11px] font-['Space_Grotesk'] font-bold">
                    Theoretical CS
                  </span>
                </div>
                <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-white">
                  Department of Information Science
                </h4>
                <p className="font-['Inter'] text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Focuses on foundational computing: algorithms, computational complexity theory, quantum computing,
                  computer graphics, programming language theory, and bioinformatics.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/5 text-[#94A3B8] font-['Space_Grotesk'] text-xs flex items-center gap-1.5 font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#ddb8ff]" />
                Science Bldg 7, Hongō Campus
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Graduate */}
        {activeTab === 'grad' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            <div className="rounded-xl bg-[#262a37]/45 border border-white/5 p-5 sm:p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-['Space_Grotesk'] text-xs text-cyan-300 font-mono font-semibold">
                    GSIST
                  </span>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[11px] font-['Space_Grotesk'] font-bold">
                    English Track
                  </span>
                </div>
                <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-white">
                  Graduate School of Information Science &amp; Tech
                </h4>
                <p className="font-['Inter'] text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  The flagship center for graduate computer research. Includes 6 departments: Computer Science,
                  Mathematical Informatics, Information Physics &amp; Computing, Mechano-Informatics, and Creative
                  Informatics.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/5 text-[#94A3B8] font-['Space_Grotesk'] text-xs flex items-center gap-1.5 font-mono">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                English Special Course in Information Science (ESIS)
              </div>
            </div>

            <div className="rounded-xl bg-[#262a37]/45 border border-white/5 p-5 sm:p-6 flex flex-col justify-between hover:border-purple-500/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-['Space_Grotesk'] text-xs text-[#A855F7] font-mono font-semibold">
                    III / GSII
                  </span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/20 text-[#ddb8ff] text-[11px] font-['Space_Grotesk'] font-bold">
                    Interdisciplinary
                  </span>
                </div>
                <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-white">
                  Interfaculty Initiative in Information Studies
                </h4>
                <p className="font-['Inter'] text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Bridges computer science with media design, human-computer interaction (HCI), robotics, sociology, and
                  digital humanities. Ideal for creative technologists and HCI specialists.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/5 text-[#94A3B8] font-['Space_Grotesk'] text-xs flex items-center gap-1.5 font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#A855F7]" />
                Fukutake Hall / III Building, Hongō
              </div>
            </div>
          </div>
        )}

        {/* Laboratory Explorer Showcase */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <span className="font-['Space_Grotesk'] text-xs font-mono text-cyan-300 uppercase tracking-widest">
                // Research Labs Directory
              </span>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mt-0.5">
                Key Computer Science Laboratories &amp; PIs
              </h3>
            </div>

            {/* Domain Filters */}
            <div className="flex flex-wrap items-center gap-1.5 bg-[#0a0e1a] p-1 rounded-lg border border-white/5 text-xs font-['Space_Grotesk']">
              {[
                { id: 'all', label: 'All Labs' },
                { id: 'ai_ml', label: 'AI & Vision' },
                { id: 'hci_graphics', label: 'HCI & UI' },
                { id: 'systems_robotics', label: 'Robotics & Hardware' },
                { id: 'theory', label: 'Theory & PL' },
              ].map((domain) => (
                <button
                  key={domain.id}
                  onClick={() => setSelectedLabDomain(domain.id)}
                  className={`px-2.5 py-1 rounded transition-all ${
                    selectedLabDomain === domain.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {domain.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredLabs.map((lab) => (
              <div
                key={lab.id}
                className="rounded-xl bg-[#1b1f2c]/70 border border-white/5 p-4 flex flex-col justify-between hover:border-cyan-400/40 hover:bg-[#1b1f2c] transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-['Space_Grotesk'] font-bold px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                      {lab.domainLabel}
                    </span>
                    <a
                      href={lab.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-300 transition-colors p-1"
                      title="Visit lab website"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h4 className="font-['Space_Grotesk'] text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {lab.name}
                  </h4>
                  <p className="text-xs text-purple-300 font-['Inter'] mt-0.5">{lab.professor}</p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">{lab.department}</p>

                  <p className="font-['Inter'] text-xs text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
                    {lab.description}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {lab.keywords.map((kw, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#0a0e1a] text-slate-300 border border-white/5"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span className="truncate">{lab.campus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
