import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { MIXED_LAB_COMPOUNDS } from '../data/compounds';
import { Compound, PracticeDirection } from '../types/chemistry';
import {
  formatFormulaSubscripts,
  validateAnswer,
  AnswerValidation,
  interleaveDifferentBondTypes,
  getBondCategoryBadge,
  getFlowchartGuidance,
} from '../utils/chemFormat';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Shuffle,
  GitBranch,
  Lightbulb,
} from 'lucide-react';

interface MixedPracticeLabProps {
  onCorrectAnswer?: () => void;
  onIncorrectAnswer?: () => void;
  onOpenPolyatomicModal?: () => void;
}

export const MixedPracticeLab: React.FC<MixedPracticeLabProps> = ({
  onCorrectAnswer,
  onIncorrectAnswer,
  onOpenPolyatomicModal,
}) => {
  const [direction, setDirection] = useState<PracticeDirection | 'mix'>('mix');
  // Initialize with strictly interleaved bond types: each consecutive compound has a DIFFERENT bond type
  const [mixedList, setMixedList] = useState<Compound[]>(() =>
    interleaveDifferentBondTypes(MIXED_LAB_COMPOUNDS)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validationResult, setValidationResult] = useState<AnswerValidation | null>(null);
  const [showFlowchartGuide, setShowFlowchartGuide] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const currentCompound: Compound = mixedList[currentIndex % mixedList.length] || mixedList[0];
  const bondBadge = getBondCategoryBadge(currentCompound);
  const flowchartGuidance = getFlowchartGuidance(currentCompound, currentIndex % 2 === 1);

  // In mix mode, alternates based on index
  const isFormulaMode =
    direction === 'name_to_formula'
      ? true
      : direction === 'formula_to_name'
      ? false
      : currentIndex % 2 === 1;

  useEffect(() => {
    setUserInput('');
    setHasSubmitted(false);
    setValidationResult(null);
    setShowFlowchartGuide(false);
    if (inputRef.current) inputRef.current.focus();
  }, [currentIndex, direction]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!userInput.trim() || hasSubmitted) return;

    const targetAnswer = isFormulaMode ? currentCompound.formula : currentCompound.name;
    const result = validateAnswer(userInput, targetAnswer, isFormulaMode);
    setValidationResult(result);
    setHasSubmitted(true);

    if (result.isCorrect) {
      if (onCorrectAnswer) onCorrectAnswer();
      try {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      } catch {}
    } else {
      if (onIncorrectAnswer) onIncorrectAnswer();
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mixedList.length);
  };

  const handleShuffle = () => {
    setMixedList(interleaveDifferentBondTypes(MIXED_LAB_COMPOUNDS));
    setCurrentIndex(0);
  };

  const insertSymbol = (sym: string) => {
    setUserInput((prev) => prev + sym);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Top Banner */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wide">
              Mixed Compounds Practice Lab
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Problem {(currentIndex % mixedList.length) + 1} of {mixedList.length}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Test your synthesis across all compound types: Covalent, Ionic (Fixed & Transition), and Acids!
          </p>
        </div>

        {/* Direction Switcher */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-semibold">
          <button
            onClick={() => setDirection('formula_to_name')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              direction === 'formula_to_name'
                ? 'bg-white text-emerald-700 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Formula ➔ Name
          </button>
          <button
            onClick={() => setDirection('name_to_formula')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              direction === 'name_to_formula'
                ? 'bg-white text-emerald-700 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Name ➔ Formula
          </button>
          <button
            onClick={() => setDirection('mix')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              direction === 'mix'
                ? 'bg-white text-emerald-700 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Mix Both 🔀
          </button>
        </div>
      </div>

      {/* Main Flashcard Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${bondBadge.badgeClass}`}
            >
              <span className={`w-2 h-2 rounded-full ${bondBadge.dotClass}`} />
              {bondBadge.label}
            </span>
            <span className="text-[11px] text-slate-500 hidden sm:inline">
              ({bondBadge.typeDescription})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 hidden sm:inline">
              🔀 Alternating bond type every question
            </span>
            <button
              onClick={handleShuffle}
              title="Shuffle question sequence"
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
            >
              <Shuffle className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="text-center py-4 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {isFormulaMode
              ? 'Write the Chemical Formula for:'
              : 'Write the Chemical Name for:'}
          </p>

          <div className="py-2">
            {isFormulaMode ? (
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {currentCompound.name}
              </h3>
            ) : (
              <h3 className="text-3xl sm:text-4xl font-mono font-extrabold text-emerald-700">
                {formatFormulaSubscripts(currentCompound.formula)}
              </h3>
            )}
          </div>

          {/* User Input Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              disabled={hasSubmitted && validationResult?.isCorrect}
              placeholder={
                isFormulaMode
                  ? 'Enter chemical formula (e.g. Fe2(SO4)3)...'
                  : 'Enter chemical name (e.g. Iron(III) sulfate)...'
              }
              className="w-full px-4 py-3 text-center text-sm font-semibold rounded-xl border-2 border-slate-300 focus:border-emerald-600 outline-hidden transition-all text-slate-900"
            />

            {/* Helper Keypads */}
            {isFormulaMode ? (
              <div className="pt-1">
                <span className="text-[11px] text-slate-400 block mb-1">
                  Subscript & Parentheses Keypad:
                </span>
                <div className="flex flex-wrap justify-center gap-1">
                  {['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉', '(', ')'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => insertSymbol(s)}
                      className="w-7 h-7 rounded bg-slate-100 hover:bg-emerald-100 hover:text-emerald-800 font-mono text-xs font-bold border border-slate-200"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="pt-1">
                <span className="text-[11px] text-slate-400 block mb-1">
                  Roman Numeral Helper (for Transition Metals):
                </span>
                <div className="flex flex-wrap justify-center gap-1">
                  {['(I)', '(II)', '(III)', '(IV)', '(V)', '(VI)'].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => insertSymbol(` ${r} `)}
                      className="px-2 py-1 rounded bg-slate-100 hover:bg-emerald-100 hover:text-emerald-800 text-xs font-bold border border-slate-200"
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {!hasSubmitted ? (
                <button
                  type="submit"
                  disabled={!userInput.trim()}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-xs transition-all"
                >
                  Check Answer
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-1.5 px-6 py-2.5 bg-slate-900 hover:bg-black text-white font-bold text-xs rounded-xl shadow-xs transition-all"
                >
                  <span>Next Question</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

                <button
                  type="button"
                  onClick={() => setShowFlowchartGuide(!showFlowchartGuide)}
                  className={`px-3.5 py-2 border font-medium text-xs rounded-xl transition-all flex items-center gap-1.5 ${
                    showFlowchartGuide
                      ? 'bg-blue-50 border-blue-300 text-blue-700 font-bold shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <GitBranch className="w-3.5 h-3.5 text-blue-600" />
                  <span>{showFlowchartGuide ? 'Hide Flowchart' : 'Decision Flowchart'}</span>
                </button>

                {onOpenPolyatomicModal && (
                  <button
                    type="button"
                    onClick={onOpenPolyatomicModal}
                    className="px-3.5 py-2 border border-blue-200 text-blue-700 bg-blue-50/70 hover:bg-blue-100 font-medium text-xs rounded-xl transition-all flex items-center gap-1.5 shadow-2xs"
                    title="Open Polyatomic Ion Reference Chart"
                  >
                    <span>🧪</span>
                    <span>Ion Chart</span>
                  </button>
                )}
              </div>
            </form>

            {/* Collapsible Flowchart Path Drawer (No Final Answer, Prompts Charge Thinking) */}
            {showFlowchartGuide && (
            <div className="max-w-lg mx-auto text-left bg-gradient-to-br from-blue-50/90 to-indigo-50/70 border border-blue-200 p-4 rounded-2xl text-xs text-blue-950 space-y-3 shadow-xs">
              <div className="flex items-center justify-between border-b border-blue-200/60 pb-2">
                <span className="font-bold flex items-center gap-1.5 text-blue-900 text-xs">
                  <GitBranch className="w-4 h-4 text-blue-600" />
                  Class Flowchart Path & Thinking Guide
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                  Thinking Guide • No Spoilers
                </span>
              </div>

              <div className="space-y-2">
                {flowchartGuidance.map((step, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border transition-all ${
                      step.isChargeThinking
                        ? 'bg-amber-50/95 border-amber-300 text-amber-950 ring-2 ring-amber-200/60 shadow-xs'
                        : 'bg-white/95 border-blue-100 text-slate-800'
                    }`}
                  >
                    <div className="flex items-start gap-2 mb-1">
                      {step.isChargeThinking ? (
                        <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      ) : (
                        <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 font-extrabold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                          {step.stepNumber}
                        </span>
                      )}
                      <div>
                        <div className={`font-bold text-xs ${step.isChargeThinking ? 'text-amber-950' : 'text-blue-950'}`}>
                          {step.decision}
                        </div>
                      </div>
                    </div>
                    <p className={`text-[11px] leading-relaxed pl-6 ${step.isChargeThinking ? 'text-amber-900 font-medium' : 'text-slate-600'}`}>
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Validation Feedback */}
          {hasSubmitted && validationResult && (
            <div
              className={`max-w-md mx-auto p-4 rounded-xl text-left border ${
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
                    {validationResult.isCorrect ? 'Correct!' : 'Incorrect'}
                  </span>
                  <p>{validationResult.feedback}</p>
                  {!validationResult.isCorrect && (
                    <p className="font-bold text-slate-900 pt-1">
                      Correct Answer:{' '}
                      {isFormulaMode
                        ? formatFormulaSubscripts(currentCompound.formula)
                        : currentCompound.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Step Breakdown */}
              <div className="mt-3 pt-2.5 border-t border-slate-200/60 text-xs">
                <span className="font-bold block mb-1 text-slate-700">How to solve:</span>
                <ul className="space-y-1 text-slate-800">
                  {currentCompound.stepByStepExplanation.map((s: string, idx: number) => (
                    <li key={idx}>• {s}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
