import React, { useState } from 'react';
import { TERMINAL_COMMANDS } from '../data/roadmapData';
import { Play, RotateCcw, Copy, Check } from 'lucide-react';

interface TerminalLine {
  type: 'cmd' | 'output' | 'error' | 'warning';
  text: string;
}

const INITIAL_LINES: TerminalLine[] = [
  { type: 'cmd', text: 'embassy_portal --region=IN --city=DELHI' },
  { type: 'output', text: '> Portal: https://www.in.emb-japan.go.jp/itpr_en/Education.html' },
  { type: 'cmd', text: 'utokyo_admissions --track=GSIST --language=ENG' },
  { type: 'output', text: '> GSIST Graduate Admissions: https://www.i.u-tokyo.ac.jp/edu/entra/index_e.shtml' },
  { type: 'cmd', text: 'verify_peak_cs_support' },
  {
    type: 'warning',
    text: '> RETURN STATUS: [FALSE] PEAK does NOT offer CS. Final general intake is Sept 2026.',
  },
  { type: 'cmd', text: 'echo "Good luck to all aspirants. Build, learn, and push commits."' },
  { type: 'output', text: 'Good luck to all aspirants. Build, learn, and push commits.' },
];

export const TerminalSection: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES);
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);

  const handleRunCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setLines([]);
      setInputVal('');
      return;
    }

    const newLines: TerminalLine[] = [...lines, { type: 'cmd', text: trimmed }];

    const lower = trimmed.toLowerCase();
    if (lower === 'peak' || lower === 'verify_peak_cs_support') {
      newLines.push({
        type: 'warning',
        text: '> RETURN STATUS: [FALSE] PEAK does NOT offer CS. Final general intake is Sept 2026.',
      });
    } else if (TERMINAL_COMMANDS[lower]) {
      TERMINAL_COMMANDS[lower].forEach((out) => {
        newLines.push({ type: 'output', text: out });
      });
    } else {
      newLines.push({
        type: 'error',
        text: `zsh: command not found: ${trimmed}. Try typing "help" for valid commands.`,
      });
    }

    setLines(newLines);
    setInputVal('');
  };

  const handleCopyLog = () => {
    const textToCopy = lines.map((l) => (l.type === 'cmd' ? `$ ${l.text}` : l.text)).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setLines(INITIAL_LINES);
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 lg:px-8 pb-14" id="terminal">
      <div className="rounded-xl bg-[#0a0e1a] border border-white/10 p-4 sm:p-6 lg:p-7 shadow-2xl font-mono text-xs sm:text-sm text-slate-300">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ffb4ab]" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-[#7bd0ff]" />
            <span className="ml-2 text-white font-bold font-['Space_Grotesk'] text-xs">
              mext-utokyo-quickref.sh
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLog}
              className="text-[11px] text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
              title="Copy terminal session"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={handleReset}
              className="text-[11px] text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
              title="Reset terminal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
            <span className="text-slate-500 text-[11px] pl-2 border-l border-white/10">
              BASH // UTF-8
            </span>
          </div>
        </div>

        {/* Quick Command Pills */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4 text-xs font-mono">
          <span className="text-slate-500 text-[11px] mr-1">Quick run:</span>
          {['help', 'syllabus', 'labs', 'stipend', 'deadlines', 'links', 'peak-status', 'clear'].map(
            (cmd) => (
              <button
                key={cmd}
                onClick={() => handleRunCommand(cmd)}
                className="px-2 py-0.5 rounded bg-[#1b1f2c] border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20 hover:text-white transition-all text-[11px]"
              >
                ${cmd}
              </button>
            )
          )}
        </div>

        {/* Terminal Output Stream */}
        <div className="space-y-1.5 max-h-[360px] overflow-y-auto pr-2 leading-relaxed">
          {lines.map((line, idx) => (
            <div key={idx} className="break-words">
              {line.type === 'cmd' && (
                <p>
                  <span className="text-[#7bd0ff] font-bold">$ </span>
                  <span className="text-white">{line.text}</span>
                </p>
              )}
              {line.type === 'output' && (
                <p className="text-slate-400 pl-2 whitespace-pre-wrap">{line.text}</p>
              )}
              {line.type === 'warning' && (
                <p className="text-amber-300 pl-2 font-medium">{line.text}</p>
              )}
              {line.type === 'error' && (
                <p className="text-rose-400 pl-2">{line.text}</p>
              )}
            </div>
          ))}
        </div>

        {/* Interactive CLI Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRunCommand(inputVal);
          }}
          className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2"
        >
          <span className="text-[#7bd0ff] font-bold">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type command ('help', 'syllabus', 'stipend', 'labs') and press Enter..."
            className="flex-1 bg-transparent border-0 text-white placeholder-slate-600 focus:outline-none focus:ring-0 text-xs sm:text-sm font-mono"
          />
          <button
            type="submit"
            className="p-1 rounded bg-[#1b1f2c] text-cyan-300 hover:text-white"
          >
            <Play className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </section>
  );
};
