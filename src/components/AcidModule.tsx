import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ACID_MODULE_COMPOUNDS } from '../data/compounds';
import { Compound } from '../types/chemistry';
import { ACID_MNEMONICS } from '../data/referenceData';
import { formatFormulaSubscripts, validateAnswer, AnswerValidation, shuffleArray } from '../utils/chemFormat';
import {
  BookOpen,
  PenTool,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Shuffle,
  Lightbulb,
} from 'lucide-react';

interface AcidModuleProps {
  onCorrectAnswer?: () => void;
  onIncorrectAnswer?: () => void;
  onOpenPolyatomicModal?: () => void;
}

export const AcidModule: React.FC<AcidModuleProps> = ({
  onCorrectAnswer,
  onIncorrectAnswer,
  onOpenPolyatomicModal,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'notes' | 'practice_naming' | 'practice_formula'>('notes');
  const [filterType, setFilterType] = useState<'all' | 'binary' | 'oxy'>('all');

  const [acidList, setAcidList] = useState<Compound[]>(() =>
    shuffleArray(ACID_MODULE_COMPOUNDS)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validationResult, setValidationResult] = useState<AnswerValidation | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const filtered = ACID_MODULE_COMPOUNDS.filter((c) => {
      if (filterType === 'binary') return c.category === 'acid_binary';
      if (filterType === 'oxy') return c.category === 'acid_oxy';
      return true;
    });
    setAcidList(shuffleArray(filtered));
    setCurrentIndex(0);
  }, [filterType]);

  const handleReshuffle = () => {
    const filtered = ACID_MODULE_COMPOUNDS.filter((c) => {
      if (filterType === 'binary') return c.category === 'acid_binary';
      if (filterType === 'oxy') return c.category === 'acid_oxy';
      return true;
    });
    setAcidList(shuffleArray(filtered));
    setCurrentIndex(0);
  };

  const currentCompound = acidList[currentIndex % acidList.length] || acidList[0];
  const isFormulaMode = activeSubTab === 'practice_formula';

  useEffect(() => {
    setUserInput('');
    setHasSubmitted(false);
    setValidationResult(null);
    if (activeSubTab !== 'notes' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentIndex, activeSubTab, filterType]);

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
        confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
      } catch {}
    } else {
      if (onIncorrectAnswer) onIncorrectAnswer();
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % acidList.length);
  };

  const insertSymbol = (sym: string) => {
    setUserInput((prev) => prev + sym);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Module Title Banner */}
      <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-rose-200 text-rose-900 font-bold text-xs uppercase tracking-wide">
              Module 3
            </span>
            <h2 className="text-xl font-bold text-rose-950">
              Acids (Binary & Oxyacids)
            </h2>
          </div>
          <p className="text-xs text-rose-800 mt-1">
            Usually begins with H and is aqueous. The crucial decision: Does it contain oxygen?
          </p>
        </div>

        {/* Section Switcher */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-rose-200 text-xs font-semibold">
          <button
            onClick={() => setActiveSubTab('notes')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeSubTab === 'notes'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-rose-900 hover:bg-rose-100/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Notes</span>
          </button>
          <button
            onClick={() => setActiveSubTab('practice_naming')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeSubTab === 'practice_naming'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-rose-900 hover:bg-rose-100/60'
            }`}
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>Practice Naming</span>
          </button>
          <button
            onClick={() => setActiveSubTab('practice_formula')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeSubTab === 'practice_formula'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-rose-900 hover:bg-rose-100/60'
            }`}
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>Practice Formulas</span>
          </button>
        </div>
      </div>

      {/* ================= NOTES SECTION ================= */}
      {activeSubTab === 'notes' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                How to Identify and Name Acids
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                In high school chemistry, an acid formula <strong>usually begins with H</strong> (Hydrogen) and represents an aqueous solution. 
                Look at the rest of the formula and ask the single crucial question from the classroom flowchart:
              </p>
            </div>

            {/* The Big Flowchart Decision for Acids */}
            <div className="p-4 bg-rose-50/70 border border-rose-300 rounded-xl text-center space-y-2">
              <span className="text-xs font-bold text-rose-900 uppercase tracking-wider block">
                Class Flowchart Question:
              </span>
              <p className="text-base font-extrabold text-rose-950">
                "Does the anion contain oxygen?"
              </p>
            </div>

            {/* Two Main Branches side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Branch 1: Binary Acid (No Oxygen) */}
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                    NO: Binary Acid (No Oxygen)
                  </span>
                  <span className="text-[11px] text-slate-500">HCl, HBr, HI, HF, H₂S</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                  <span className="text-xs font-bold text-slate-500 uppercase block text-[10px]">Rule:</span>
                  <p className="font-mono font-bold text-rose-700 text-sm">
                    hydro- + [root] + -ic acid
                  </p>
                  <p className="text-xs text-slate-600">
                    Anion ending in <em>-ide</em> becomes <em>hydro-...-ic acid</em>.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs">
                  <span className="font-bold text-slate-500 text-[10px] block uppercase">Flowchart Example:</span>
                  <span className="font-mono font-bold text-rose-700 text-sm">HCl ➔ hydrochloric acid</span>
                </div>

                <div className="text-[11px] text-rose-900 bg-rose-100/50 p-2.5 rounded-md">
                  💡 <strong>Mnemonic:</strong> "My <strong>RIDE</strong> has <strong>HYDRO-l-ICs</strong>" (-ide ➔ hydro...ic).
                </div>
              </div>

              {/* Branch 2: Oxyacid (Contains Oxygen) */}
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                    YES: Oxyacid (Contains Oxygen)
                  </span>
                  <span className="text-[11px] text-slate-500">HNO₃, H₂SO₄, H₂SO₃...</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-rose-600 uppercase block text-[10px]">
                    CRITICAL: (Do not use hydro-)
                  </span>
                  <p className="text-xs text-slate-700">
                    Use the anion ending:
                  </p>
                  <ul className="text-xs font-mono font-bold space-y-1 text-purple-900">
                    <li>• -ate ➔ -ic acid</li>
                    <li>• -ite ➔ -ous acid</li>
                  </ul>
                </div>

                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs space-y-1">
                  <span className="font-bold text-slate-500 text-[10px] block uppercase">Flowchart Examples:</span>
                  <p className="font-mono font-bold text-purple-700">HNO₃ ➔ nitric acid (-ic from nitrate)</p>
                  <p className="font-mono font-bold text-purple-700">H₂SO₃ ➔ sulfurous acid (-ous from sulfite)</p>
                </div>

                <div className="text-[11px] text-purple-950 bg-purple-100/50 p-2.5 rounded-md space-y-0.5">
                  <p>💡 <strong>Mnemonics:</strong></p>
                  <p>• "I <strong>ATE</strong> something <strong>IC</strong>-ky!"</p>
                  <p>• "Spr-<strong>ITE</strong> is delici-<strong>OUS</strong>!"</p>
                </div>
              </div>
            </div>

            {/* Special Roots Note */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs space-y-1 text-amber-950">
              <span className="font-bold block text-amber-900">Pronunciation Note (Sulfur & Phosphorus):</span>
              <p>
                Sulfur acids keep the root <strong>"sulfur"</strong> (sulfuric, sulfurous, hydrosulfuric), NOT "sulfic".
              </p>
              <p>
                Phosphorus acids keep the root <strong>"phosphor"</strong> (phosphoric, phosphorous), NOT "phosphic".
              </p>
            </div>

            {/* Writing Acid Formulas from Names */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
              <span className="font-bold text-slate-900 text-sm block">
                Writing Acid Formulas from Names (Name ➔ Formula):
              </span>
              <ol className="space-y-1.5 text-slate-700">
                <li>• <strong>Does the name start with "Hydro-"?</strong> It's a binary acid with NO oxygen! Combine H⁺ with the nonmetal anion (e.g. Hydrobromic acid ➔ H⁺ and Br⁻ ➔ HBr; Hydrosulfuric acid ➔ H⁺ and S²⁻ ➔ H₂S).</li>
                <li>• <strong>NO "Hydro-"?</strong> It's an oxyacid containing oxygen!
                  <ul className="pl-4 pt-1 space-y-0.5">
                    <li>- "-ic acid" came from "-ate" ion: <em>Nitric acid</em> ➔ nitrate (NO₃⁻) + 1 H⁺ ➔ <strong>HNO₃</strong>.</li>
                    <li>- "-ous acid" came from "-ite" ion: <em>Sulfurous acid</em> ➔ sulfite (SO₃²⁻) + 2 H⁺ ➔ <strong>H₂SO₃</strong>.</li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* Navigation to Practice */}
            <div className="pt-4 flex items-center justify-between border-t border-slate-100">
              <span className="text-xs text-slate-500">Ready to practice naming & formulas?</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveSubTab('practice_naming')}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs rounded-lg transition-all flex items-center gap-1.5"
                >
                  <span>Practice Naming</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActiveSubTab('practice_formula')}
                  className="px-4 py-2 bg-slate-900 hover:bg-black text-white font-semibold text-xs rounded-lg transition-all flex items-center gap-1.5"
                >
                  <span>Practice Formulas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= PRACTICE SECTION ================= */}
      {activeSubTab !== 'notes' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          {/* Sub-filter inside acid practice */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs">
              {[
                { id: 'all', label: 'All Acids' },
                { id: 'binary', label: 'Binary (No Oxygen)' },
                { id: 'oxy', label: 'Oxyacids (Has Oxygen)' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    setFilterType(f.id as any);
                    setCurrentIndex(0);
                  }}
                  className={`px-2.5 py-1 rounded font-medium transition-all ${
                    filterType === f.id
                      ? 'bg-white text-rose-800 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">
                Problem {(currentIndex % acidList.length) + 1} of {acidList.length}
              </span>
              <button
                type="button"
                onClick={handleReshuffle}
                title="Shuffle Question Order"
                className="p-1 text-slate-500 hover:text-rose-700 hover:bg-rose-50 rounded-md transition-colors"
              >
                <Shuffle className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="text-center py-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {isFormulaMode ? 'Write the chemical formula for:' : 'Write the chemical name for:'}
            </p>

            <div className="py-2">
              {isFormulaMode ? (
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {currentCompound.name}
                </h3>
              ) : (
                <h3 className="text-3xl sm:text-4xl font-mono font-extrabold text-rose-700">
                  {formatFormulaSubscripts(currentCompound.formula)}
                </h3>
              )}
            </div>

            {/* Answer Input Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
              <input
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                disabled={hasSubmitted && validationResult?.isCorrect}
                placeholder={
                  isFormulaMode
                    ? 'Enter acid formula, e.g. H2SO4 or HCl...'
                    : 'Enter acid name, e.g. sulfuric acid or hydrochloric acid...'
                }
                className="w-full px-4 py-2.5 text-center text-sm font-semibold rounded-xl border-2 border-slate-300 focus:border-rose-600 outline-hidden transition-all"
              />

              {/* Subscript Helper (Formula mode) */}
              {isFormulaMode && (
                <div className="flex flex-wrap justify-center gap-1 pt-1">
                  {['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉', '(', ')'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => insertSymbol(s)}
                      className="w-7 h-7 rounded bg-slate-100 hover:bg-rose-100 hover:text-rose-800 font-mono text-xs font-bold border border-slate-200"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-2 pt-2">
                {!hasSubmitted ? (
                  <button
                    type="submit"
                    disabled={!userInput.trim()}
                    className="px-5 py-2 bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white font-semibold text-xs rounded-lg transition-all"
                  >
                    Check Answer
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-5 py-2 bg-slate-900 hover:bg-black text-white font-semibold text-xs rounded-lg transition-all"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}

                {onOpenPolyatomicModal && (
                  <button
                    type="button"
                    onClick={onOpenPolyatomicModal}
                    className="px-3 py-2 border border-blue-200 text-blue-700 bg-blue-50/70 hover:bg-blue-100 font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5"
                    title="Open Polyatomic Ion Reference Chart"
                  >
                    <span>🧪</span>
                    <span>Polyatomic Ion Chart</span>
                  </button>
                )}
              </div>
            </form>

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
      )}
    </div>
  );
};
