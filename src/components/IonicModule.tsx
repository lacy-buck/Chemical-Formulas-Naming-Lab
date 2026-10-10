import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { IONIC_MODULE_COMPOUNDS } from '../data/compounds';
import { Compound } from '../types/chemistry';
import { POLYATOMIC_IONS, MULTIVALENT_METALS, FIXED_CHARGE_METALS } from '../data/referenceData';
import { formatFormulaSubscripts, validateAnswer, AnswerValidation, shuffleArray } from '../utils/chemFormat';
import {
  BookOpen,
  PenTool,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Shuffle,
  Calculator,
  AlertTriangle,
} from 'lucide-react';

interface IonicModuleProps {
  onCorrectAnswer?: () => void;
  onIncorrectAnswer?: () => void;
  onOpenPolyatomicModal?: () => void;
}

export const IonicModule: React.FC<IonicModuleProps> = ({
  onCorrectAnswer,
  onIncorrectAnswer,
  onOpenPolyatomicModal,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'notes' | 'practice_naming' | 'practice_formula'>('notes');
  const [filterType, setFilterType] = useState<'all' | 'fixed' | 'transition' | 'polyatomic'>('all');

  const [ionicList, setIonicList] = useState<Compound[]>(() =>
    shuffleArray(IONIC_MODULE_COMPOUNDS)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validationResult, setValidationResult] = useState<AnswerValidation | null>(null);
  const [showChargeTool, setShowChargeTool] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const filtered = IONIC_MODULE_COMPOUNDS.filter((c) => {
      if (filterType === 'fixed') return c.category === 'ionic_fixed';
      if (filterType === 'transition') return c.category === 'ionic_transition';
      if (filterType === 'polyatomic') return c.category === 'ionic_polyatomic';
      return true;
    });
    setIonicList(shuffleArray(filtered));
    setCurrentIndex(0);
  }, [filterType]);

  const handleReshuffle = () => {
    const filtered = IONIC_MODULE_COMPOUNDS.filter((c) => {
      if (filterType === 'fixed') return c.category === 'ionic_fixed';
      if (filterType === 'transition') return c.category === 'ionic_transition';
      if (filterType === 'polyatomic') return c.category === 'ionic_polyatomic';
      return true;
    });
    setIonicList(shuffleArray(filtered));
    setCurrentIndex(0);
  };

  const currentCompound = ionicList[currentIndex % ionicList.length] || ionicList[0];
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
    setCurrentIndex((prev) => (prev + 1) % ionicList.length);
  };

  const insertSymbol = (sym: string) => {
    setUserInput((prev) => prev + sym);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Module Title Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 font-bold text-xs uppercase tracking-wide">
              Module 2
            </span>
            <h2 className="text-xl font-bold text-amber-950">
              Ionic Compounds
            </h2>
          </div>
          <p className="text-xs text-amber-800 mt-1">
            Metal + Nonmetal, Transition Metals (Roman numerals), and Polyatomic Ions.
          </p>
        </div>

        {/* Section Switcher */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-amber-200 text-xs font-semibold">
          <button
            onClick={() => setActiveSubTab('notes')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeSubTab === 'notes'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-amber-900 hover:bg-amber-100/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Notes</span>
          </button>
          <button
            onClick={() => setActiveSubTab('practice_naming')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeSubTab === 'practice_naming'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-amber-900 hover:bg-amber-100/60'
            }`}
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>Practice Naming</span>
          </button>
          <button
            onClick={() => setActiveSubTab('practice_formula')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeSubTab === 'practice_formula'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-amber-900 hover:bg-amber-100/60'
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
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                How to Identify an Ionic Compound
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                An <strong>ionic compound</strong> contains a <strong>Metal + Nonmetal</strong>, or a <strong>polyatomic ion</strong> (such as ammonium NH₄⁺ or nitrate NO₃⁻).
                The overarching rule for ionic formulas is: <strong>Total Positive Charge = Total Negative Charge (Net Charge = 0)</strong>.
              </p>
            </div>

            {/* The Big Flowchart Decision for Ionic */}
            <div className="p-4 bg-amber-50/70 border border-amber-300 rounded-xl text-center space-y-2">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
                Class Flowchart Question:
              </span>
              <p className="text-base font-extrabold text-amber-950">
                "Does the metal have more than one possible charge? (Transition metal)"
              </p>
            </div>

            {/* Two Main Branches side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Branch 1: Fixed Charge */}
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    NO: Fixed Charge Metal
                  </span>
                  <span className="text-[11px] text-slate-500">Group 1, 2, Al, Zn, Ag</span>
                </div>

                <ol className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li><strong>1. Name the cation (metal) first.</strong> (e.g. Sodium)</li>
                  <li><strong>2. Name the anion second.</strong></li>
                  <li><strong>3. If anion is monatomic:</strong> change ending to <strong>-ide</strong> (e.g. Chlorine ➔ chloride).</li>
                  <li><strong>4. If anion is polyatomic:</strong> use its name <strong>unchanged</strong> (e.g. nitrate, sulfate).</li>
                </ol>

                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs">
                  <span className="font-bold text-slate-500 text-[10px] block uppercase">Flowchart Example:</span>
                  <span className="font-mono font-bold text-emerald-700 text-sm">NaCl ➔ sodium chloride</span>
                  <div className="mt-1 text-[11px] text-slate-500">
                    Never use Greek prefixes ("sodium monochloride" is WRONG).
                  </div>
                </div>
              </div>

              {/* Branch 2: Variable Charge (Transition Metals) */}
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                    YES: Variable Charge Metal
                  </span>
                  <span className="text-[11px] text-slate-500">Transition metals (Fe, Cu, Pb...)</span>
                </div>

                <ol className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li><strong>1. Determine metal charge</strong> from the anion charge(s).</li>
                  <li><strong>2. Name the metal.</strong></li>
                  <li><strong>3. Write charge as a Roman numeral</strong> in parentheses: (I), (II), (III), (IV)...</li>
                  <li><strong>4. Name the anion normally</strong> (-ide for monatomic, unchanged for polyatomic).</li>
                </ol>

                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs">
                  <span className="font-bold text-slate-500 text-[10px] block uppercase">Flowchart Example:</span>
                  <span className="font-mono font-bold text-blue-700 text-sm">FeCl₃ ➔ iron(III) chloride</span>
                  <div className="mt-1 text-[11px] text-slate-500">
                    3 Cl⁻ = -3 total ➔ 1 Fe must be +3 ➔ Iron(III).
                  </div>
                </div>
              </div>
            </div>

            {/* Polyatomic Ions & Parentheses Rules */}
            <div className="p-5 bg-amber-50/50 border border-amber-200 rounded-xl space-y-3 text-xs">
              <span className="font-bold text-amber-900 text-sm block">
                The Essential Polyatomic Ions & Parentheses Rule:
              </span>
              <p className="text-slate-700 leading-relaxed">
                Polyatomic ions are groups of atoms that carry an overall charge (e.g., NH₄⁺, OH⁻, NO₃⁻, SO₄²⁻, CO₃²⁻, PO₄³⁻).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <div className="bg-white p-3 rounded-lg border border-amber-200">
                  <span className="font-bold text-emerald-800 block mb-1">✓ When to use parentheses:</span>
                  <p className="text-slate-600">
                    Only when there is <strong>MORE THAN ONE</strong> polyatomic ion in the formula:
                  </p>
                  <p className="font-mono font-bold text-slate-900 mt-1">
                    Ca(OH)₂, Fe₂(SO₄)₃, (NH₄)₂CO₃
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-amber-200">
                  <span className="font-bold text-rose-800 block mb-1">✗ Never use parentheses when subscript is 1:</span>
                  <p className="text-slate-600">
                    If only one polyatomic ion is needed, NO parentheses:
                  </p>
                  <p className="font-mono font-bold text-slate-900 mt-1">
                    NaOH (not Na(OH)), CaCO₃ (not Ca(CO₃))
                  </p>
                </div>
              </div>
            </div>

            {/* Writing Ionic Formulas: Thinking About Charges (Balancing to Net Zero) */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-xs">
              <span className="font-bold text-slate-900 text-sm block">
                Writing Ionic Formulas from Names (Think About the Charges!):
              </span>
              <p className="text-slate-600">
                Instead of mechanical tricks, determine the ratio of ions so that <strong>Total Positive Charge + Total Negative Charge = 0</strong>:
              </p>
              <ol className="space-y-2 text-slate-700">
                <li>
                  <strong>1. Write the cation and anion with their charges:</strong>
                  <br />
                  e.g., for Iron(III) oxide: Fe³⁺ and O²⁻. For Lead(IV) oxide: Pb⁴⁺ and O²⁻.
                </li>
                <li>
                  <strong>2. Think about the charges directly:</strong>
                  <div className="mt-1 space-y-1 pl-2 border-l-2 border-amber-300">
                    <p>
                      • <strong>Charges already match:</strong> One of each makes zero! Ca²⁺ (+2) and O²⁻ (-2) = <strong>CaO</strong> (not Ca₂O₂!). Na⁺ (+1) and Cl⁻ (-1) = <strong>NaCl</strong>.
                    </p>
                    <p>
                      • <strong>Charges differ (multiples):</strong> Pb⁴⁺ (+4) needs two O²⁻ (-2 each, -4 total) to reach 0 → <strong>PbO₂</strong>. (No simplification needed; you directly reasoned out the correct ratio!)
                    </p>
                    <p>
                      • <strong>Charges differ (+3 and -2):</strong> Two Fe³⁺ ions (+6 total) cancel three O²⁻ ions (-6 total) to equal 0 → <strong>Fe₂O₃</strong>.
                    </p>
                  </div>
                </li>
                <li>
                  <strong>3. Polyatomic parentheses check:</strong> Only wrap polyatomic ions in parentheses if you need 2 or more of them (e.g., Ca(OH)₂, Fe₂(SO₄)₃, but NaOH).
                </li>
              </ol>
            </div>

            {/* Navigation to Practice */}
            <div className="pt-4 flex items-center justify-between border-t border-slate-100">
              <span className="text-xs text-slate-500">Ready to practice ionic compounds?</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveSubTab('practice_naming')}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded-lg transition-all flex items-center gap-1.5"
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
          {/* Sub-filter inside ionic practice */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs">
              {[
                { id: 'all', label: 'All Ionic' },
                { id: 'fixed', label: 'Fixed Metal' },
                { id: 'transition', label: 'Transition (Roman)' },
                { id: 'polyatomic', label: 'Polyatomics' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    setFilterType(f.id as any);
                    setCurrentIndex(0);
                  }}
                  className={`px-2.5 py-1 rounded font-medium transition-all ${
                    filterType === f.id
                      ? 'bg-white text-amber-800 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">
                Problem {(currentIndex % ionicList.length) + 1} of {ionicList.length}
              </span>
              <button
                type="button"
                onClick={handleReshuffle}
                title="Shuffle Question Order"
                className="p-1 text-slate-500 hover:text-amber-700 hover:bg-amber-50 rounded-md transition-colors"
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
                <h3 className="text-3xl sm:text-4xl font-mono font-extrabold text-amber-700">
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
                    ? 'Enter formula, e.g. CaCl2 or Fe2(SO4)3...'
                    : 'Enter ionic name, e.g. iron(III) chloride...'
                }
                className="w-full px-4 py-2.5 text-center text-sm font-semibold rounded-xl border-2 border-slate-300 focus:border-amber-600 outline-hidden transition-all"
              />

              {/* Subscript & Parentheses Helper (Formula mode) */}
              {isFormulaMode ? (
                <div className="flex flex-wrap justify-center gap-1 pt-1">
                  {['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉', '(', ')'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => insertSymbol(s)}
                      className="w-7 h-7 rounded bg-slate-100 hover:bg-amber-100 hover:text-amber-800 font-mono text-xs font-bold border border-slate-200"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              ) : (
                /* Roman Numeral Helper (Naming mode) */
                <div className="flex flex-wrap justify-center gap-1 pt-1">
                  {['(I)', '(II)', '(III)', '(IV)', '(V)', '(VI)'].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => insertSymbol(` ${r} `)}
                      className="px-2 py-1 rounded bg-slate-100 hover:bg-amber-100 hover:text-amber-800 text-xs font-bold border border-slate-200"
                    >
                      {r}
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
                    className="px-5 py-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white font-semibold text-xs rounded-lg transition-all"
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
