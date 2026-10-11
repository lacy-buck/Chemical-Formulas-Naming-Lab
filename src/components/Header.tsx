import React from 'react';
import { GitBranch, Atom, Zap, Flame as AcidIcon, PenTool, Repeat } from 'lucide-react';

export type MainModuleTab =
  | 'covalent'
  | 'ionic'
  | 'acids'
  | 'decision_tree'
  | 'mixed_practice'
  | 'single_replacement';

interface HeaderProps {
  activeTab: MainModuleTab;
  onTabChange: (tab: MainModuleTab) => void;
  onOpenPolyatomicModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  onOpenPolyatomicModal,
}) => {
  const tabs: { id: MainModuleTab; label: string; icon: React.ReactNode }[] = [
    { id: 'covalent', label: '1. Covalent', icon: <Atom className="w-4 h-4 text-purple-600" /> },
    { id: 'ionic', label: '2. Ionic', icon: <Zap className="w-4 h-4 text-amber-600" /> },
    { id: 'acids', label: '3. Acids', icon: <AcidIcon className="w-4 h-4 text-rose-600" /> },
    { id: 'decision_tree', label: 'Class Flowchart', icon: <GitBranch className="w-4 h-4 text-blue-600" /> },
    { id: 'mixed_practice', label: 'Mixed Practice Lab', icon: <PenTool className="w-4 h-4 text-emerald-600" /> },
    { id: 'single_replacement', label: 'Single Replacement', icon: <Repeat className="w-4 h-4 text-teal-600" /> },
  ];

  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-xs">
              ⚗️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-base sm:text-lg tracking-tight">
                  ChemNomenclature Lab
                </span>
                <span className="hidden sm:inline-block text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                  High School Chemistry
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden md:block">
                Learn each compound type, master the class flow chart, and practice mixed sets
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {onOpenPolyatomicModal && (
              <button
                type="button"
                onClick={onOpenPolyatomicModal}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 shadow-2xs transition-colors"
                title="Click to view full polyatomic ion chart"
              >
                <span>🧪</span>
                <span className="hidden xs:inline sm:inline">Polyatomic Ion Chart</span>
                <span className="xs:hidden sm:hidden">Ion Chart</span>
              </button>
            )}
            <div className="text-xs text-slate-500 hidden lg:block italic">
              Self-Paced Practice & Mastery
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-1 -mb-px pb-1 sm:pb-0">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 text-xs sm:text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
                  isActive
                    ? 'border-blue-600 text-blue-700 bg-blue-50/60'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
