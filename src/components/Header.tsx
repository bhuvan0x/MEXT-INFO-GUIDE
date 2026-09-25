import React, { useState } from 'react';
import { Menu, X, ExternalLink, User, CheckCircle2, Calculator, Terminal } from 'lucide-react';

interface HeaderProps {
  completedCount: number;
  totalCount: number;
  onOpenCalculator?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ completedCount, totalCount, onOpenCalculator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const percentage = Math.round((completedCount / totalCount) * 100) || 0;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0F172A]/85 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_12px_rgba(0,0,0,0.4)]">
      <div className="h-16 max-w-[1200px] mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 group">
            {/* The M Logo from user asset */}
            <div className="relative w-8 h-8 rounded-lg bg-[#171b28] border border-cyan-400/30 flex items-center justify-center overflow-hidden shadow-[0_0_10px_rgba(56,189,248,0.2)] group-hover:border-cyan-400/60 transition-all">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1XOpMDqtJzDZcybfRQNrBgKFN_jQWhRiWW_Wlev12wAydu1jk-xDRI8OPBPQxDGIAFqdPUnqwHsCSJ5C1llpWwU89TXmi03HrbX3z5Cb_GFZbvCg-dyZSROXjqB4VkR_DyMrOK6b48tivhlhHhqsP-PvzDSSCBsEpfw466iLbGXrlU36hKtWyYwQE66UwlK3gH5GW7PiZNNw9tL58mh3K8H_QAmbGemq-C9pB3yulM_ewBM3ON4m-s52qU"
                alt="MEXT to UTokyo Logo"
                className="h-7 w-7 object-contain"
                onError={(e) => {
                  // Fallback vector icon
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center font-bold text-xs text-cyan-400 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                M
              </div>
            </div>

            <div className="font-['Space_Grotesk'] text-lg font-semibold tracking-tight flex items-center gap-1.5 text-slate-100">
              <span className="text-[#d2bbff]">MEXT</span>
              <span className="text-[#4a4455] font-light">→</span>
              <span className="text-white">UTokyo</span>
            </div>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#coverage"
            className="text-xs font-['Space_Grotesk'] text-slate-300 hover:text-cyan-300 transition-colors uppercase tracking-wider"
          >
            Coverage
          </a>
          <a
            href="#routes-in"
            className="text-xs font-['Space_Grotesk'] text-slate-300 hover:text-cyan-300 transition-colors uppercase tracking-wider"
          >
            Routes In
          </a>
          <a
            href="#prep-timeline"
            className="text-xs font-['Space_Grotesk'] text-slate-300 hover:text-cyan-300 transition-colors uppercase tracking-wider flex items-center gap-1.5"
          >
            <span>Timeline</span>
            {completedCount > 0 && (
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                {percentage}%
              </span>
            )}
          </a>
          <a
            href="#cs-paths-note"
            className="text-xs font-['Space_Grotesk'] text-amber-300/80 hover:text-amber-200 transition-colors uppercase tracking-wider"
          >
            CS Paths Note
          </a>
          <a
            href="#departments"
            className="text-xs font-['Space_Grotesk'] text-slate-300 hover:text-cyan-300 transition-colors uppercase tracking-wider"
          >
            UTokyo CS Labs
          </a>
          <a
            href="#terminal"
            className="text-xs font-['Space_Grotesk'] text-slate-300 hover:text-cyan-300 transition-colors uppercase tracking-wider"
          >
            QuickRef.sh
          </a>
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center gap-3">
          {/* Interactive Progress Counter Indicator */}
          <a
            href="#prep-timeline"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1f2c] border border-cyan-500/20 text-cyan-300 text-xs font-['Space_Grotesk'] hover:border-cyan-400/50 transition-all"
            title={`${completedCount} of ${totalCount} milestones completed`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono text-[11px] font-semibold">
              {completedCount}/{totalCount} Done
            </span>
          </a>

          {/* External Author Link */}
          <a
            href="https://bhuvanlabs.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#262a37] text-cyan-300 font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-wider hover:bg-[#313442] hover:text-white transition-all shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            bhuvanlabs.xyz
            <ExternalLink className="w-3 h-3 text-cyan-400/80" />
          </a>

          {/* User Icon Circle */}
          <div className="w-8 h-8 rounded-full bg-[#7c3aed] flex items-center justify-center shadow-[0_0_10px_rgba(124,58,237,0.4)]">
            <User className="w-4 h-4 text-white" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#1b1f2c] text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0E1A] border-b border-white/10 px-4 py-4 space-y-3">
          <a
            href="#coverage"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-['Space_Grotesk'] text-slate-300 hover:text-cyan-300"
          >
            Coverage & Stipend
          </a>
          <a
            href="#routes-in"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-['Space_Grotesk'] text-slate-300 hover:text-cyan-300"
          >
            Routes In (3 Tracks)
          </a>
          <a
            href="#prep-timeline"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-['Space_Grotesk'] text-slate-300 hover:text-cyan-300 flex items-center justify-between"
          >
            <span>Prep Checklist & Timeline</span>
            <span className="px-2 py-0.5 rounded-full text-xs bg-cyan-400/20 text-cyan-300">
              {completedCount}/{totalCount} Completed
            </span>
          </a>
          <a
            href="#cs-paths-note"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-['Space_Grotesk'] text-amber-300 hover:text-amber-200"
          >
            Crucial Advisory: PEAK CS Reality
          </a>
          <a
            href="#departments"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-['Space_Grotesk'] text-slate-300 hover:text-cyan-300"
          >
            UTokyo Computer Science Labs
          </a>
          <a
            href="#terminal"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-['Space_Grotesk'] text-slate-300 hover:text-cyan-300"
          >
            QuickRef Terminal
          </a>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <a
              href="https://bhuvanlabs.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-400 flex items-center gap-1 font-['Space_Grotesk']"
            >
              Curated by bhuvanlabs.xyz <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
