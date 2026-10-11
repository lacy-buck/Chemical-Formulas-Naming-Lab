import React, { useState, useEffect } from 'react';
import { Header, MainModuleTab } from './components/Header';
import { CovalentModule } from './components/CovalentModule';
import { IonicModule } from './components/IonicModule';
import { AcidModule } from './components/AcidModule';
import { FlowchartDecisionTree } from './components/FlowchartDecisionTree';
import { MixedPracticeLab } from './components/MixedPracticeLab';
import { SingleReplacementLab } from './components/SingleReplacementLab';
import { PolyatomicIonModal } from './components/PolyatomicIonModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainModuleTab>('covalent');
  const [isPolyatomicModalOpen, setIsPolyatomicModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        onOpenPolyatomicModal={() => setIsPolyatomicModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {activeTab === 'covalent' && <CovalentModule />}

        {activeTab === 'ionic' && (
          <IonicModule onOpenPolyatomicModal={() => setIsPolyatomicModalOpen(true)} />
        )}

        {activeTab === 'acids' && (
          <AcidModule onOpenPolyatomicModal={() => setIsPolyatomicModalOpen(true)} />
        )}

        {activeTab === 'decision_tree' && (
          <FlowchartDecisionTree onOpenPolyatomicModal={() => setIsPolyatomicModalOpen(true)} />
        )}

        {activeTab === 'mixed_practice' && (
          <MixedPracticeLab onOpenPolyatomicModal={() => setIsPolyatomicModalOpen(true)} />
        )}

        {activeTab === 'single_replacement' && (
          <SingleReplacementLab onOpenPolyatomicModal={() => setIsPolyatomicModalOpen(true)} />
        )}
      </main>

      {/* Polyatomic Ion Reference Modal */}
      <PolyatomicIonModal
        isOpen={isPolyatomicModalOpen}
        onClose={() => setIsPolyatomicModalOpen(false)}
      />

      {/* Scientific Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <span className="font-semibold text-slate-800">ChemNomenclature Lab</span>
            <span className="mx-2 text-slate-300">|</span>
            <span>Based on the Classroom Naming Chemical Compounds Flow Chart & Chemical Reactions</span>
          </div>

          <div className="flex items-center gap-3 text-slate-600 justify-center">
            <span>Covalent</span>
            <span>•</span>
            <span>Ionic</span>
            <span>•</span>
            <span>Acids</span>
            <span>•</span>
            <span>Single Replacement</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
