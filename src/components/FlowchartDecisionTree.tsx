import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { FLOWCHART_TREE_COMPOUNDS } from '../data/compounds';
import { Compound } from '../types/chemistry';
import {
  formatFormulaSubscripts,
  validateAnswer,
  AnswerValidation,
  interleaveDifferentBondTypes,
} from '../utils/chemFormat';
import {
  GitBranch,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Shuffle,
  Sparkles,
  Eye,
} from 'lucide-react';
import { PolyatomicIonModal } from './PolyatomicIonModal';

interface FlowchartDecisionTreeProps {
  onCorrectAnswer?: () => void;
  onIncorrectAnswer?: () => void;
  onOpenPolyatomicModal?: () => void;
}

export const FlowchartDecisionTree: React.FC<FlowchartDecisionTreeProps> = ({
  onCorrectAnswer,
  onIncorrectAnswer,
  onOpenPolyatomicModal,
}) => {
  const topRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Diverse mix of flowchart-specific compounds with alternating bond types
  const [mixedList, setMixedList] = useState<Compound[]>(() =>
    interleaveDifferentBondTypes(FLOWCHART_TREE_COMPOUNDS)
  );
  const [compoundIndex, setCompoundIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState<
    'q1_acid' | 'acid_oxygen' | 'q2_metal' | 'ionic_variable' | 'final_naming'
  >('q1_acid');

  // Student selections
  const [q1Choice, setQ1Choice] = useState<'yes' | 'no' | null>(null);
  const [acidOxygenChoice, setAcidOxygenChoice] = useState<'yes' | 'no' | null>(null);
  const [q2Choice, setQ2Choice] = useState<'yes' | 'no' | null>(null);
  const [ionicVariableChoice, setIonicVariableChoice] = useState<'yes' | 'no' | null>(null);

  const [stepError, setStepError] = useState<string | null>(null);
  const [finalNameInput, setFinalNameInput] = useState('');
  const [hasSubmittedFinal, setHasSubmittedFinal] = useState(false);
  const [validationResult, setValidationResult] = useState<AnswerValidation | null>(null);
  const [showFullDiagramModal, setShowFullDiagramModal] = useState(false);
  const [internalPolyatomicModal, setInternalPolyatomicModal] = useState(false);

  const currentCompound: Compound = mixedList[compoundIndex % mixedList.length] || mixedList[0];

  // Derive truth for current compound
  const isAcid = currentCompound.category.startsWith('acid');
  const acidHasOxygen = currentCompound.category === 'acid_oxy';
  const isIonic = currentCompound.category.startsWith('ionic');
  const isVariableMetal =
    currentCompound.category === 'ionic_transition' ||
    (currentCompound.cationName && currentCompound.cationName.includes('('));

  const triggerPolyatomicChart = () => {
    if (onOpenPolyatomicModal) {
      onOpenPolyatomicModal();
    } else {
      setInternalPolyatomicModal(true);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const resetForNewCompound = (newIndex: number) => {
    setCompoundIndex(newIndex);
    setCurrentStep('q1_acid');
    setQ1Choice(null);
    setAcidOxygenChoice(null);
    setQ2Choice(null);
    setIonicVariableChoice(null);
    setStepError(null);
    setFinalNameInput('');
    setHasSubmittedFinal(false);
    setValidationResult(null);
    scrollToTop();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleNextCompound = () => {
    resetForNewCompound((compoundIndex + 1) % mixedList.length);
  };

  const handleRandomCompound = () => {
    setMixedList(interleaveDifferentBondTypes(FLOWCHART_TREE_COMPOUNDS));
    resetForNewCompound(0);
  };

  // Step 1: Question 1: "Does the formula begin with H and represent an aqueous compound (acid)?"
  const handleQ1 = (choice: 'yes' | 'no') => {
    setQ1Choice(choice);
    setStepError(null);

    if (choice === 'yes') {
      if (isAcid) {
        setCurrentStep('acid_oxygen');
      } else {
        setStepError(
          `Look closely at ${currentCompound.formula}: it does NOT begin with H (Hydrogen). Choose "No".`
        );
      }
    } else {
      if (!isAcid) {
        setCurrentStep('q2_metal');
      } else {
        setStepError(
          `Look at ${currentCompound.formula}: it begins with H! In this curriculum, that makes it an Acid. Choose "Yes".`
        );
      }
    }
  };

  // Step 2 (Acid path): "Does the anion contain oxygen?"
  const handleAcidOxygen = (choice: 'yes' | 'no') => {
    setAcidOxygenChoice(choice);
    setStepError(null);

    if (choice === 'yes') {
      if (acidHasOxygen) {
        setCurrentStep('final_naming');
      } else {
        setStepError(
          `Inspect ${currentCompound.formula}: there is NO Oxygen atom (O) here! This is a Binary Acid.`
        );
      }
    } else {
      if (!acidHasOxygen) {
        setCurrentStep('final_naming');
      } else {
        setStepError(
          `Inspect ${currentCompound.formula}: there IS an Oxygen atom (O) here! This is an Oxyacid.`
        );
      }
    }
  };

  // Step 2 (Non-acid path): "Does the compound contain a metal (or a polyatomic ion with a metal, like NH4+)?"
  const handleQ2 = (choice: 'yes' | 'no') => {
    setQ2Choice(choice);
    setStepError(null);

    if (choice === 'yes') {
      if (isIonic) {
        setCurrentStep('ionic_variable');
      } else {
        setStepError(
          `${currentCompound.formula} is composed strictly of nonmetals! Choose "No" (Covalent).`
        );
      }
    } else {
      if (!isIonic) {
        setCurrentStep('final_naming');
      } else {
        setStepError(
          `Look at ${currentCompound.formula}: it contains a metal or ammonium ion! Choose "Yes" (Ionic).`
        );
      }
    }
  };

  // Step 3 (Ionic path): "Does the metal have more than one possible charge? (Transition metal)"
  const handleIonicVariable = (choice: 'yes' | 'no') => {
    setIonicVariableChoice(choice);
    setStepError(null);

    if (choice === 'yes') {
      if (isVariableMetal) {
        setCurrentStep('final_naming');
      } else {
        setStepError(
          `${currentCompound.elements[0]} has a FIXED charge (Group 1, 2, Al, Zn, or Ag). It does not need a Roman numeral!`
        );
      }
    } else {
      if (!isVariableMetal) {
        setCurrentStep('final_naming');
      } else {
        setStepError(
          `${currentCompound.elements[0]} is a transition metal with VARIABLE charges (like Fe, Cu, Pb, Sn). It REQUIRES a Roman numeral!`
        );
      }
    }
  };

  // Final step: student names the compound using the illuminated rule
  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!finalNameInput.trim() || hasSubmittedFinal) return;

    const res = validateAnswer(finalNameInput, currentCompound.name, false);
    setValidationResult(res);
    setHasSubmittedFinal(true);

    if (res.isCorrect) {
      if (onCorrectAnswer) onCorrectAnswer();
      try {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      } catch {}
    } else {
      if (onIncorrectAnswer) onIncorrectAnswer();
    }
  };

  // Helper to determine active flowchart node for visual highlight
  const isAcidsActive = currentStep === 'acid_oxygen' || (currentStep === 'final_naming' && isAcid);
  const isBinaryAcidActive = currentStep === 'final_naming' && isAcid && !acidHasOxygen;
  const isOxyacidActive = currentStep === 'final_naming' && isAcid && acidHasOxygen;

  const isIonicActive =
    currentStep === 'ionic_variable' || (currentStep === 'final_naming' && isIonic);
  const isFixedIonicActive = currentStep === 'final_naming' && isIonic && !isVariableMetal;
  const isVariableIonicActive = currentStep === 'final_naming' && isIonic && isVariableMetal;

  const isCovalentActive = currentStep === 'final_naming' && !isAcid && !isIonic;

  return (
    <div ref={topRef} id="flowchart-top" className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Top Bar with Flowchart Header & Quick Actions */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">
              Classroom Flowchart
            </span>
            <span className="text-xs text-slate-500">
              Compound {(compoundIndex % mixedList.length) + 1} of {mixedList.length} (Alternating Types)
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Follow the decision flowchart on the left to identify rules, and name the formula on the right.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Clickable Polyatomic Ion Chart Button */}
          <button
            type="button"
            onClick={triggerPolyatomicChart}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-colors shadow-2xs"
            title="Click to view interactive polyatomic ion chart"
          >
            <span>🧪</span>
            <span>Polyatomic Ion Chart</span>
          </button>

          <button
            type="button"
            onClick={() => setShowFullDiagramModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-blue-600" />
            <span>Full Diagram</span>
          </button>

          <button
            type="button"
            onClick={handleRandomCompound}
            title="Shuffle Compounds"
            className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
          >
            <Shuffle className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleNextCompound}
            className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-black text-white transition-all shadow-xs"
          >
            <span>Next Compound</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main 2-Column Split Layout: Flowchart on Left, Chemical Formula & Naming Box on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ========================================================================= */}
        {/* LEFT COLUMN: THE FLOWCHART (lg:col-span-7)                                */}
        {/* ========================================================================= */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-slate-100/90 rounded-2xl border-2 border-slate-300 p-4 sm:p-5 shadow-inner space-y-5">
            <div className="text-center">
              <div className="inline-block bg-white px-5 py-2 rounded-xl border-2 border-slate-900 shadow-xs font-extrabold text-slate-900 text-sm sm:text-base">
                Naming Chemical Compounds Flow Chart
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Answer each question step-by-step to isolate the correct naming pathway
              </p>
            </div>

            {/* Top 2 Primary Question Boxes */}
            <div className="space-y-3.5">
              {/* Question 1: Begins with H? */}
              <div
                className={`bg-white p-3.5 sm:p-4 rounded-xl border-2 transition-all shadow-xs ${
                  currentStep === 'q1_acid'
                    ? 'border-blue-600 ring-4 ring-blue-100'
                    : 'border-slate-800 opacity-95'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-xs sm:text-sm text-slate-900">
                    1. Does the formula begin with H and represent an aqueous compound (acid)?
                  </span>
                </div>

                {currentStep === 'q1_acid' ? (
                  <div className="mt-3 flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleQ1('yes')}
                      className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
                    >
                      Yes (Acid)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQ1('no')}
                      className="px-4 py-2 bg-slate-800 hover:bg-black text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
                    >
                      No
                    </button>
                  </div>
                ) : (
                  <div className="mt-2 text-xs font-semibold">
                    Decision:{' '}
                    <span
                      className={
                        q1Choice === 'yes' ? 'text-rose-600 font-bold' : 'text-slate-800 font-bold'
                      }
                    >
                      {q1Choice === 'yes' ? 'YES ➔ Goes to ACIDS Branch' : 'NO ➔ Goes to Question 2'}
                    </span>
                  </div>
                )}
              </div>

              {/* Question 2: Metal or NH4+? */}
              <div
                className={`bg-white p-3.5 sm:p-4 rounded-xl border-2 transition-all shadow-xs ${
                  currentStep === 'q2_metal'
                    ? 'border-blue-600 ring-4 ring-blue-100'
                    : 'border-slate-800'
                } ${currentStep === 'q1_acid' ? 'opacity-40 pointer-events-none' : ''}`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-xs sm:text-sm text-slate-900">
                    2. Does the compound contain a metal (or a polyatomic ion with a metal, like NH₄⁺)?
                  </span>
                </div>

                {currentStep === 'q2_metal' ? (
                  <div className="mt-3 flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleQ2('yes')}
                      className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
                    >
                      Yes (Ionic)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQ2('no')}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
                    >
                      No (Covalent)
                    </button>
                  </div>
                ) : q2Choice ? (
                  <div className="mt-2 text-xs font-semibold">
                    Decision:{' '}
                    <span
                      className={
                        q2Choice === 'yes' ? 'text-amber-700 font-bold' : 'text-purple-700 font-bold'
                      }
                    >
                      {q2Choice === 'yes' ? 'YES ➔ Goes to IONIC Branch' : 'NO ➔ Goes to COVALENT Branch'}
                    </span>
                  </div>
                ) : (
                  <span className="text-[11px] text-slate-400 italic">Waiting for Question 1...</span>
                )}
              </div>
            </div>

            {/* Error Callout if student chooses wrong branch */}
            {stepError && (
              <div className="bg-rose-50 border-2 border-rose-300 p-3 rounded-xl text-xs text-rose-950 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{stepError}</span>
              </div>
            )}

            {/* 3 Main Column Branches (Color-Coded Matching Classroom Handout) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              {/* ================= COLUMN 1: ACIDS (RED) ================= */}
              <div
                className={`rounded-xl border-2 transition-all p-3 space-y-2.5 ${
                  isAcidsActive
                    ? 'bg-rose-50/90 border-rose-500 ring-4 ring-rose-200'
                    : 'bg-white/75 border-rose-300 opacity-60'
                }`}
              >
                <div className="text-center border-b border-rose-200 pb-1.5">
                  <span className="font-extrabold text-sm text-rose-900 block">ACIDS</span>
                  <span className="text-[10px] text-rose-700 font-medium">
                    Usually begins with H (aqueous)
                  </span>
                </div>

                {/* Sub-Question: Does anion contain oxygen? */}
                <div className="bg-white p-2.5 rounded-lg border border-rose-300 text-xs text-center space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">
                    Does the anion contain oxygen?
                  </span>

                  {currentStep === 'acid_oxygen' && (
                    <div className="flex items-center justify-center gap-1.5 pt-1">
                      <button
                        type="button"
                        onClick={() => handleAcidOxygen('no')}
                        className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold text-[11px] rounded shadow-xs"
                      >
                        No (Binary)
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAcidOxygen('yes')}
                        className="px-2.5 py-1 bg-purple-600 hover:bg-purple-700 text-white font-bold text-[11px] rounded shadow-xs"
                      >
                        Yes (Oxyacid)
                      </button>
                    </div>
                  )}
                </div>

                {/* Binary Acid Box */}
                <div
                  className={`p-2.5 rounded-lg border text-xs space-y-1 transition-all ${
                    isBinaryAcidActive
                      ? 'bg-rose-100 border-rose-500 font-bold text-rose-950 ring-2 ring-rose-300'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="font-bold text-rose-900 text-[11px]">Binary Acid (No Oxygen)</div>
                  <p className="font-mono text-[10px]">hydro- + root + -ic acid</p>
                  <div className="text-[10px] text-slate-500 font-mono">
                    HCl ➔ hydrochloric acid
                  </div>
                </div>

                {/* Oxyacid Box */}
                <div
                  className={`p-2.5 rounded-lg border text-xs space-y-1 transition-all ${
                    isOxyacidActive
                      ? 'bg-amber-100 border-amber-500 font-bold text-amber-950 ring-2 ring-amber-300'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="font-bold text-amber-900 text-[11px]">Oxyacid (Has Oxygen)</div>
                  <p className="text-[10px]">Check polyatomic ending:</p>
                  <p className="font-mono text-[10px] font-bold text-purple-900">
                    -ate ➔ -ic acid<br />
                    -ite ➔ -ous acid
                  </p>
                  <p className="text-[9px] text-rose-600 font-semibold">(Never use hydro-!)</p>
                  <div className="text-[9px] text-slate-500 font-mono">
                    HNO₃ ➔ nitric acid<br />
                    H₂SO₃ ➔ sulfurous acid
                  </div>
                </div>
              </div>

              {/* ================= COLUMN 2: IONIC (YELLOW) ================= */}
              <div
                className={`rounded-xl border-2 transition-all p-3 space-y-2.5 ${
                  isIonicActive
                    ? 'bg-amber-50/90 border-amber-500 ring-4 ring-amber-200'
                    : 'bg-white/75 border-amber-300 opacity-60'
                }`}
              >
                <div className="text-center border-b border-amber-200 pb-1.5">
                  <span className="font-extrabold text-sm text-amber-950 block">IONIC</span>
                  <span className="text-[10px] text-amber-800 font-medium">
                    Metal + nonmetal or polyatomic
                  </span>
                </div>

                {/* Sub-Question: More than one possible charge? */}
                <div className="bg-white p-2.5 rounded-lg border border-amber-300 text-xs text-center space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">
                    Does metal have &gt;1 possible charge?
                  </span>

                  {currentStep === 'ionic_variable' && (
                    <div className="flex items-center justify-center gap-1.5 pt-1">
                      <button
                        type="button"
                        onClick={() => handleIonicVariable('no')}
                        className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] rounded shadow-xs"
                      >
                        No (Fixed)
                      </button>
                      <button
                        type="button"
                        onClick={() => handleIonicVariable('yes')}
                        className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] rounded shadow-xs"
                      >
                        Yes (Variable)
                      </button>
                    </div>
                  )}
                </div>

                {/* No (Fixed Charge) */}
                <div
                  className={`p-2.5 rounded-lg border text-xs space-y-1 transition-all ${
                    isFixedIonicActive
                      ? 'bg-emerald-100 border-emerald-500 font-bold text-emerald-950 ring-2 ring-emerald-300'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="font-bold text-emerald-800 text-[11px]">No (Fixed Charge)</div>
                  <ol className="text-[10px] space-y-0.5 list-decimal pl-3 text-slate-700">
                    <li>Name cation (metal).</li>
                    <li>Name anion (-ide or polyatomic).</li>
                    <li>No Roman numerals!</li>
                  </ol>
                  <div className="text-[9px] text-slate-500 font-mono">
                    NaCl ➔ sodium chloride
                  </div>
                </div>

                {/* Yes (Variable Charge / Transition Metal) */}
                <div
                  className={`p-2.5 rounded-lg border text-xs space-y-1 transition-all ${
                    isVariableIonicActive
                      ? 'bg-blue-100 border-blue-500 font-bold text-blue-950 ring-2 ring-blue-300'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="font-bold text-blue-800 text-[11px]">Yes (Variable / Transition)</div>
                  <ol className="text-[10px] space-y-0.5 list-decimal pl-3 text-slate-700">
                    <li>Find charge by balancing anion.</li>
                    <li>Metal + (Roman numeral).</li>
                    <li>Name anion normally.</li>
                  </ol>
                  <div className="text-[9px] text-slate-500 font-mono">
                    FeCl₃ ➔ iron(III) chloride
                  </div>
                </div>
              </div>

              {/* ================= COLUMN 3: COVALENT (PURPLE) ================= */}
              <div
                className={`rounded-xl border-2 transition-all p-3 space-y-2.5 ${
                  isCovalentActive
                    ? 'bg-purple-50/90 border-purple-500 ring-4 ring-purple-200'
                    : 'bg-white/75 border-purple-300 opacity-60'
                }`}
              >
                <div className="text-center border-b border-purple-200 pb-1.5">
                  <span className="font-extrabold text-sm text-purple-950 block">COVALENT</span>
                  <span className="text-[10px] text-purple-800 font-medium">
                    Nonmetal + nonmetal
                  </span>
                </div>

                <div className="bg-white p-2.5 rounded-lg border border-purple-300 text-[10px] space-y-1 text-slate-700">
                  <ol className="space-y-0.5 list-decimal pl-3">
                    <li>1st element prefix (<strong>no mono-</strong>).</li>
                    <li>2nd element prefix + <strong>-ide</strong>.</li>
                  </ol>
                </div>

                {/* Common Prefixes Mini-box */}
                <div className="bg-purple-100/60 p-2 rounded-lg border border-purple-200 text-[9px] text-purple-950">
                  <span className="font-bold block text-center mb-0.5">Greek Prefixes:</span>
                  <div className="grid grid-cols-2 gap-x-1">
                    <span>1 mono-</span><span>6 hexa-</span>
                    <span>2 di-</span><span>7 hepta-</span>
                    <span>3 tri-</span><span>8 octa-</span>
                    <span>4 tetra-</span><span>9 nona-</span>
                    <span>5 penta-</span><span>10 deca-</span>
                  </div>
                </div>

                <div className="p-2 bg-white rounded-lg border border-purple-200 text-[10px] font-mono text-purple-900">
                  N₂O₅ ➔ dinitrogen pentoxide
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: CHEMICAL FORMULA & NAMING BOX (lg:col-span-5)              */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-20">
          {/* Target Chemical Formula Spotlight Card */}
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-5 text-white shadow-md text-center space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-100">
                Target Chemical Formula
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white">
                Formula {(compoundIndex % mixedList.length) + 1}
              </span>
            </div>

            <div className="text-4xl sm:text-5xl font-mono font-extrabold tracking-wider py-2 drop-shadow-xs">
              {formatFormulaSubscripts(currentCompound.formula)}
            </div>

            <div className="flex items-center justify-center gap-2 pt-1">
              <button
                type="button"
                onClick={triggerPolyatomicChart}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-colors shadow-2xs backdrop-blur-xs"
              >
                <span>🧪</span>
                <span>Polyatomic Ion Chart</span>
              </button>
            </div>
          </div>

          {/* The Naming Box Card */}
          <div className="bg-white rounded-2xl border-2 border-slate-300 p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Naming Box</span>
              </div>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  currentStep === 'final_naming'
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                }`}
              >
                {currentStep === 'final_naming' ? '✓ Rule Unlocked' : 'Tracing Flowchart'}
              </span>
            </div>

            <p className="text-xs text-slate-600">
              {currentStep === 'final_naming'
                ? 'Flowchart rule identified! Write the official chemical name below:'
                : 'Follow the flowchart steps on the left, or test your answer in the naming box:'}
            </p>

            <form onSubmit={handleFinalSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                  Chemical Name for {formatFormulaSubscripts(currentCompound.formula)}:
                </label>
                <input
                  ref={inputRef}
                  type="text"
                  value={finalNameInput}
                  onChange={(e) => setFinalNameInput(e.target.value)}
                  disabled={hasSubmittedFinal && validationResult?.isCorrect}
                  placeholder="Type official IUPAC name (e.g., sodium chloride)..."
                  className="w-full px-3.5 py-2.5 text-sm font-semibold rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-hidden transition-all bg-slate-50/40"
                  autoFocus
                />
              </div>

              {/* Roman Numeral Helper Buttons if Variable Transition Metal */}
              {isVariableMetal && (
                <div>
                  <span className="block text-[10px] font-semibold text-slate-500 mb-1">
                    Transition Metal Charge (Roman Numeral):
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {['(I)', '(II)', '(III)', '(IV)', '(V)', '(VI)'].map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => {
                          setFinalNameInput((prev) => prev.trim() + ` ${r} `);
                          inputRef.current?.focus();
                        }}
                        className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-100 hover:text-blue-800 text-xs font-bold transition-colors"
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-2 pt-1">
                {!hasSubmittedFinal ? (
                  <button
                    type="submit"
                    disabled={!finalNameInput.trim()}
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    Verify Name
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      handleNextCompound();
                      scrollToTop();
                    }}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-slate-900 hover:bg-black text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    <span>Try Another Compound</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                {hasSubmittedFinal && !validationResult?.isCorrect && (
                  <button
                    type="button"
                    onClick={() => {
                      setHasSubmittedFinal(false);
                      setValidationResult(null);
                      inputRef.current?.focus();
                    }}
                    className="w-full py-1 text-xs text-slate-600 hover:text-slate-900 font-semibold underline text-center"
                  >
                    Try Again
                  </button>
                )}
              </div>
            </form>

            {/* Validation Feedback */}
            {hasSubmittedFinal && validationResult && (
              <div
                className={`p-3.5 rounded-xl border text-left ${
                  validationResult.isCorrect
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                    : 'bg-rose-50 border-rose-200 text-rose-950'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  {validationResult.isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1 text-xs">
                    <span className="font-bold text-sm block">
                      {validationResult.isCorrect ? 'Outstanding!' : 'Review the rule:'}
                    </span>
                    <p>{validationResult.feedback}</p>
                    {!validationResult.isCorrect && (
                      <p className="font-bold text-slate-900 pt-1">
                        Correct Name: {currentCompound.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Full Diagram View Modal */}
      {showFullDiagramModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowFullDiagramModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-base text-slate-900">
                Classroom Naming Chemical Compounds Flow Chart
              </h3>
              <button
                type="button"
                onClick={() => setShowFullDiagramModal(false)}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold"
              >
                Close ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <p className="text-slate-600">
                This exact decision logic is used across high school chemistry classes:
              </p>

              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-4 font-sans">
                {/* 1 */}
                <div className="bg-white p-3 rounded-lg border border-slate-300">
                  <span className="font-bold text-slate-900 block">
                    1. Does the formula begin with H and represent an aqueous compound (acid)?
                  </span>
                  <div className="mt-2 pl-4 border-l-2 border-rose-400 space-y-1 text-rose-900">
                    <span className="font-bold">YES ➔ ACIDS</span>
                    <p>Does the anion contain oxygen?</p>
                    <p>• <strong>NO (Binary Acid):</strong> Use <code>hydro- + root + -ic acid</code> (e.g., HCl ➔ hydrochloric acid)</p>
                    <p>• <strong>YES (Oxyacid):</strong> Use anion ending: <code>-ate ➔ -ic acid</code>, <code>-ite ➔ -ous acid</code>. <em>(Do not use hydro-)</em> (e.g., HNO₃ ➔ nitric acid, H₂SO₃ ➔ sulfurous acid)</p>
                  </div>
                </div>

                {/* 2 */}
                <div className="bg-white p-3 rounded-lg border border-slate-300">
                  <span className="font-bold text-slate-900 block">
                    2. Does the compound contain a metal (or a polyatomic ion with a metal, like NH₄⁺)?
                  </span>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="pl-3 border-l-2 border-amber-400 space-y-1 text-amber-950">
                      <span className="font-bold">YES ➔ IONIC COMPOUNDS</span>
                      <p>Does the metal have more than one possible charge?</p>
                      <p>• <strong>NO (Fixed charge metal):</strong> 1. Name cation first. 2. Name anion second (-ide for monatomic, unchanged for polyatomic). (e.g., NaCl ➔ sodium chloride)</p>
                      <p>• <strong>YES (Variable charge metal):</strong> 1. Determine metal charge from anion. 2. Name metal. 3. Write Roman numeral in parentheses. 4. Name anion. (e.g., FeCl₃ ➔ iron(III) chloride)</p>
                    </div>

                    <div className="pl-3 border-l-2 border-purple-400 space-y-1 text-purple-950">
                      <span className="font-bold">NO ➔ COVALENT COMPOUNDS</span>
                      <p>• 1. Name the first element.</p>
                      <p>• 2. Add prefix for atoms (<strong>omit mono- on the first element</strong>).</p>
                      <p>• 3. Give second element a prefix.</p>
                      <p>• 4. Change second element's ending to <strong>-ide</strong>.</p>
                      <p>• Prefixes: mono (1), di (2), tri (3), tetra (4), penta (5), hexa (6), hepta (7), octa (8), nona (9), deca (10).</p>
                      <p>(e.g., N₂O₅ ➔ dinitrogen pentoxide)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Internal Polyatomic Ion Reference Modal fallback */}
      <PolyatomicIonModal
        isOpen={internalPolyatomicModal}
        onClose={() => setInternalPolyatomicModal(false)}
      />
    </div>
  );
};
