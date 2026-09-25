import React, { useState } from 'react';
import { TimelineStage } from '../types';
import { CheckCircle2, RotateCcw, CheckCheck, Info, Sparkles, AlertCircle } from 'lucide-react';

interface TimelineSectionProps {
  stages: TimelineStage[];
  checkedItems: Record<string, boolean>;
  onToggleItem: (id: string) => void;
  onResetAll: () => void;
  onCheckAll: () => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  stages,
  checkedItems,
  onToggleItem,
  onResetAll,
  onCheckAll,
}) => {
  const [activeDetailId, setActiveDetailId] = useState<string | null>(null);

  const totalTasks = stages.reduce((acc, stage) => acc + stage.items.length, 0);
  const completedTasks = Object.values(checkedItems).filter(Boolean).length;
  const percentage = Math.round((completedTasks / totalTasks) * 100) || 0;

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-14" id="prep-timeline">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-['Space_Grotesk'] text-xs font-mono text-[#7bd0ff] uppercase tracking-widest">
              // Phased Execution
            </span>
            <span className="h-px w-12 bg-cyan-400/30" />
          </div>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1">
            Prep Checklist &amp; Chronological Timeline
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mt-1">
            A structured countdown designed for candidates starting from high school up to formal submission at the
            Japanese Embassy in New Delhi.
          </p>
        </div>

        {/* Global Progress & Quick Action Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-[#1b1f2c] border border-cyan-500/20 p-3 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-[11px] font-['Space_Grotesk'] uppercase text-slate-400 font-bold">
                Readiness Progress
              </span>
              <span className="font-['Space_Grotesk'] text-sm font-bold text-cyan-300 font-mono">
                {completedTasks}/{totalTasks} Completed ({percentage}%)
              </span>
            </div>
            <div className="w-24 h-2 bg-[#0a0e1a] rounded-full overflow-hidden border border-white/5">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-[#A855F7] transition-all duration-300"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-1.5 pl-2 border-l border-white/10">
            <button
              onClick={onCheckAll}
              className="p-1.5 rounded-lg bg-[#262a37] text-slate-300 hover:text-cyan-300 transition-colors"
              title="Check all milestones"
            >
              <CheckCheck className="w-4 h-4" />
            </button>
            <button
              onClick={onResetAll}
              className="p-1.5 rounded-lg bg-[#262a37] text-slate-300 hover:text-rose-400 transition-colors"
              title="Reset checklist progress"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Stepped Glowing Timeline Container */}
      <div className="relative pl-6 md:pl-10 space-y-8 sm:space-y-12 before:absolute before:left-3 md:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#7bd0ff] before:via-[#A855F7] before:to-[#7c3aed]">
        {stages.map((stage) => {
          const isViolet = stage.glowColor === 'violet';
          const stageItemsChecked = stage.items.filter((item) => checkedItems[item.id]).length;
          const stageTotal = stage.items.length;

          return (
            <div key={stage.id} className="relative group">
              {/* Glowing Node Marker */}
              <div
                className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#0A0E1A] border-2 ${
                  isViolet
                    ? 'border-[#A855F7] shadow-[0_0_12px_rgba(168,85,247,0.7)]'
                    : 'border-[#7bd0ff] shadow-[0_0_12px_rgba(56,189,248,0.7)]'
                } flex items-center justify-center transition-transform group-hover:scale-110`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    isViolet ? 'bg-[#A855F7]' : 'bg-[#7bd0ff]'
                  }`}
                />
              </div>

              {/* Stage Card */}
              <div className="rounded-xl bg-[#1b1f2c]/85 border border-white/5 p-4 sm:p-6 lg:p-7 shadow-lg backdrop-blur-md hover:border-white/10 transition-all">
                {/* Stage Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span
                    className={`font-['Space_Grotesk'] text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                      isViolet
                        ? 'bg-[#7c3aed]/20 text-[#ddb8ff] border border-[#7c3aed]/30'
                        : 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    }`}
                  >
                    {stage.badge}
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="font-['Space_Grotesk'] text-xs text-[#94A3B8] font-mono">
                      {stage.timeframe}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0a0e1a] text-slate-400">
                      {stageItemsChecked}/{stageTotal}
                    </span>
                  </div>
                </div>

                <h3 className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold text-white">
                  {stage.title}
                </h3>
                <p className="font-['Inter'] text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  {stage.description}
                </p>

                {/* Interactive Action Checklist Grid */}
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {stage.items.map((item) => {
                    const isChecked = !!checkedItems[item.id];
                    const isDetailOpen = activeDetailId === item.id;

                    return (
                      <div
                        key={item.id}
                        className={`p-3 rounded-lg border transition-all ${
                          isChecked
                            ? 'bg-[#171b28]/60 border-cyan-500/20'
                            : 'bg-[#262a37]/35 border-white/5 hover:bg-[#262a37]/60 hover:border-white/15'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <label className="flex items-start gap-2.5 cursor-pointer flex-1 group/item">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => onToggleItem(item.id)}
                              className="mt-0.5 h-4 w-4 rounded bg-[#313442] border-0 text-[#7c3aed] focus:ring-0 checked:bg-cyan-400 accent-cyan-400 transition-all cursor-pointer"
                            />
                            <span
                              className={`font-['Inter'] text-xs sm:text-[13px] leading-snug transition-colors select-none ${
                                isChecked
                                  ? 'line-through text-[#94A3B8]'
                                  : 'text-slate-200 group-hover/item:text-white'
                              }`}
                            >
                              {item.text}
                            </span>
                          </label>

                          {item.detail && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveDetailId(isDetailOpen ? null : item.id);
                              }}
                              className="text-slate-400 hover:text-cyan-300 p-0.5 rounded transition-colors"
                              title="View tactical tip & guidelines"
                            >
                              <Info className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                        {/* Collapsible Tactical Guideline Tip */}
                        {item.detail && isDetailOpen && (
                          <div className="mt-2.5 pt-2 border-t border-white/5 text-[11px] font-['Inter'] text-cyan-200/90 leading-relaxed bg-[#0a0e1a]/50 -mx-3 -mb-3 p-2.5 rounded-b-lg flex items-start gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <div>{item.detail}</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
