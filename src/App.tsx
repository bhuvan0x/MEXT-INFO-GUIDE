/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TIMELINE_STAGES } from './data/roadmapData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoverageSection } from './components/CoverageSection';
import { RoutesSection } from './components/RoutesSection';
import { TimelineSection } from './components/TimelineSection';
import { DepartmentsSection } from './components/DepartmentsSection';
import { TerminalSection } from './components/TerminalSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { TrackFinderModal } from './components/TrackFinderModal';

const STORAGE_KEY = 'mext_utokyo_checklist_v1';

export default function App() {
  // Initialize checklist state with defaults from data or localStorage
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    // Default checked states from initial blueprint mockup
    const initialMap: Record<string, boolean> = {};
    TIMELINE_STAGES.forEach((stage) => {
      stage.items.forEach((item) => {
        if (item.defaultChecked) {
          initialMap[item.id] = true;
        }
      });
    });
    return initialMap;
  });

  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedItems));
    } catch {
      // ignore
    }
  }, [checkedItems]);

  const handleToggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleResetAll = () => {
    setCheckedItems({});
  };

  const handleCheckAll = () => {
    const allChecked: Record<string, boolean> = {};
    TIMELINE_STAGES.forEach((stage) => {
      stage.items.forEach((item) => {
        allChecked[item.id] = true;
      });
    });
    setCheckedItems(allChecked);
  };

  const totalTasks = TIMELINE_STAGES.reduce((acc, stage) => acc + stage.items.length, 0);
  const completedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-[#0A0E1A] text-[#DFE2F3] font-['Inter'] selection:bg-[#7C3AED] selection:text-[#EDE0FF] relative flex flex-col overflow-x-hidden">
      {/* Navigation Header */}
      <Header
        completedCount={completedCount}
        totalCount={totalTasks}
        onOpenCalculator={() => {
          const el = document.getElementById('coverage');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-16 flex-1">
        {/* Hero Section */}
        <Hero onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />

        {/* Section 1: Coverage & Stipend Breakdown */}
        <CoverageSection />

        {/* Section 2: 3 Application Tracks & Ingress Matrix */}
        <RoutesSection onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />

        {/* Section 3: Prep Checklist & Glowing Chronological Timeline */}
        <TimelineSection
          stages={TIMELINE_STAGES}
          checkedItems={checkedItems}
          onToggleItem={handleToggleItem}
          onResetAll={handleResetAll}
          onCheckAll={handleCheckAll}
        />

        {/* Section 4: Where Computer Science Lives at UTokyo (Departments & Lab Explorer) */}
        <DepartmentsSection />

        {/* Section 5: Admissions Advisory & FAQs */}
        <FaqSection />

        {/* Section 6: Interactive Terminal QuickRef */}
        <TerminalSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Track Diagnostic Engine Modal */}
      <TrackFinderModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
      />
    </div>
  );
}
