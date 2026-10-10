import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { COVALENT_MODULE_COMPOUNDS } from '../data/compounds';
import { GREEK_PREFIXES } from '../data/referenceData';
import { formatFormulaSubscripts, validateAnswer, AnswerValidation, shuffleArray } from '../utils/chemFormat';
import {
  BookOpen,
  PenTool,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Shuffle,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';

interface CovalentModuleProps {
  onCorrectAnswer?: () => void;
  onIncorrectAnswer?: () => void;
}

export const CovalentModule: React.FC<CovalentModuleProps> = ({
  onCorrectAnswer,
  onIncorrectAnswer,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'notes' | 'practice_naming' | 'practice_formula'>('notes');
  const [covalentList, setCovalentList] = useState(() =>
    shuffleArray(COVALENT_MODULE_COMPOUNDS)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validationResult, setValidationResult] = useState<AnswerValidation | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const currentCompound = covalentList[currentIndex % covalentList.length] || covalentList[0];
  const isFormulaMode = activeSubTab === 'practice_formula';

  const handleReshuffle = () => {
    setCovalentList(shuffleArray(COVALENT_MODULE_COMPOUNDS));
    setCurrentIndex(0);
  };

  useEffect(() => {
    setUserInput('');
    setHasSubmitted(false);
    setValidationResult(null);
    if (activeSubTab !== 'notes' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentIndex, activeSubTab]);

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
    setCurrentIndex((prev) => (prev + 1) % covalentList.length);
  };

  const insertSymbol = (sym: string) => {
    setUserInput((prev) => prev + sym);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Module Title Banner */}
      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-purple-200 text-purple-900 font-bold text-xs uppercase tracking-wide">
              Module 1
            </span>
            <h2 className="text-xl font-bold text-purple-950">
              Binary Covalent Compounds
            </h2>
          </div>
          <p className="text-xs text-purple-800 mt-1">
            Nonmetal + Nonmetal (sharing electrons with Greek prefixes). No organic compounds.
          </p>
        </div>

        {/* Section Switcher */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-purple-200 text-xs font-semibold">
          <button
            onClick={() => setActiveSubTab('notes')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeSubTab === 'notes'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-purple-900 hover:bg-purple-100/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Notes</span>
          </button>
          <button
            onClick={() => setActiveSubTab('practice_naming')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeSubTab === 'practice_naming'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-purple-900 hover:bg-purple-100/60'
            }`}
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>Practice Naming</span>
          </button>
          <button
            onClick={() => setActiveSubTab('practice_formula')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeSubTab === 'practice_formula'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-purple-900 hover:bg-purple-100/60'
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
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                How to Identify a Binary Covalent Compound
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                A <strong>binary covalent compound</strong> consists of <strong>two nonmetals</strong> bonded together (found on the upper right of the periodic table, plus hydrogen). 
                Because nonmetals can share electrons in multiple different ratios (for example, carbon and oxygen can form both CO and CO₂), we use <strong>Greek prefixes</strong> to specify the exact number of atoms.
              </p>
            </div>

            {/* Flowchart Rules from Classroom Chart */}
            <div className="bg-purple-50/70 border-2 border-purple-200 rounded-xl p-5 space-y-3">
              <span className="text-xs font-bold text-purple-900 uppercase tracking-wider block">
                Class Flowchart Naming Rules:
              </span>
              <ol className="space-y-2 text-sm text-purple-950 font-medium">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-700">1.</span>
                  <span><strong>Name the first element</strong> unchanged (e.g., Nitrogen).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-700">2.</span>
                  <span>
                    <strong>Add a prefix for the number of atoms</strong> — <span className="underline decoration-purple-400 font-bold">OMIT mono- on the first element!</span> (e.g., CO is "Carbon...", NOT "Monocarbon").
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-700">3.</span>
                  <span><strong>Give the second element a prefix</strong> for the number of atoms (even mono-).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-700">4.</span>
                  <span><strong>Change the second element's ending to <em>-ide</em></strong> (e.g., oxygen ➔ oxide, chlorine ➔ chloride).</span>
                </li>
              </ol>

              {/* Classroom Example Callout */}
              <div className="bg-white p-3 rounded-lg border border-purple-200 text-xs font-mono text-purple-950 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-500 font-sans block text-[11px] uppercase">Class Example:</span>
                  <span className="text-base font-bold text-purple-700">N₂O₅ ➔ dinitrogen pentoxide</span>
                </div>
                <div className="text-right text-[11px] text-slate-600 font-sans">
                  2 N = di-nitrogen<br />5 O = penta- + oxide ➔ pentoxide
                </div>
              </div>
            </div>

            {/* Common Prefixes Table (from uploaded flowchart) */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-3">
                Common Greek Prefixes (Memorize 1 to 10):
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {GREEK_PREFIXES.map((item) => (
                  <div
                    key={item.number}
                    className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center hover:border-purple-300 transition-colors"
                  >
                    <span className="text-xl font-extrabold text-purple-700 block">
                      {item.number}
                    </span>
                    <span className="font-bold text-xs text-slate-900 block mt-0.5">
                      {item.prefix}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono block mt-1">
                      {item.exampleFormula}: {item.exampleName.split(' ')[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vowel Drop Rule & Writing Formulas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <span className="font-bold text-slate-900 uppercase tracking-wide block">
                  Vowel Dropping Rule with Oxide:
                </span>
                <p className="text-slate-600 leading-relaxed">
                  When a prefix ends in <strong>"a"</strong> or <strong>"o"</strong> and the element is <strong>oxide</strong>, drop the vowel to avoid awkward double vowels:
                </p>
                <ul className="space-y-1 text-slate-700 font-mono">
                  <li>• mono- + oxide ➔ <strong>monoxide</strong> (not monooxide)</li>
                  <li>• tetra- + oxide ➔ <strong>tetroxide</strong> (not tetraoxide)</li>
                  <li>• penta- + oxide ➔ <strong>pentoxide</strong> (not pentaoxide)</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <span className="font-bold text-slate-900 uppercase tracking-wide block">
                  Writing Formulas from Covalent Names:
                </span>
                <p className="text-slate-600 leading-relaxed">
                  The easiest direction! The prefixes <strong>directly tell you the subscripts</strong>.
                </p>
                <ul className="space-y-1 text-slate-700">
                  <li>• <em>Dinitrogen tetroxide</em>: Di = 2 (N₂), Tetra = 4 (O₄) ➔ <strong>N₂O₄</strong>.</li>
                  <li>• <strong className="text-rose-600">Never reduce subscripts!</strong> N₂O₄ is a completely different molecule than NO₂. Do not simplify to NO₂.</li>
                  <li>• No charges to balance!</li>
                </ul>
              </div>
            </div>

            {/* Next Step Action Button */}
            <div className="pt-4 flex items-center justify-between border-t border-slate-100">
              <span className="text-xs text-slate-500">Ready to test what you learned?</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveSubTab('practice_naming')}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs rounded-lg transition-all flex items-center gap-1.5"
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
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-purple-100 text-purple-800">
              {isFormulaMode ? 'Name ➔ Formula Practice' : 'Formula ➔ Name Practice'}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">
                Problem {(currentIndex % covalentList.length) + 1} of {covalentList.length}
              </span>
              <button
                type="button"
                onClick={handleReshuffle}
                title="Shuffle Question Order"
                className="p-1 text-slate-500 hover:text-purple-700 hover:bg-purple-50 rounded-md transition-colors"
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
                <h3 className="text-3xl sm:text-4xl font-mono font-extrabold text-purple-700">
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
                    ? 'Enter formula, e.g. N2O5 or N₂O₅...'
                    : 'Enter covalent name, e.g. dinitrogen pentoxide...'
                }
                className="w-full px-4 py-2.5 text-center text-sm font-semibold rounded-xl border-2 border-slate-300 focus:border-purple-600 outline-hidden transition-all"
              />

              {/* Subscript Helper (Formula mode) */}
              {isFormulaMode && (
                <div className="flex flex-wrap justify-center gap-1 pt-1">
                  {['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => insertSymbol(s)}
                      className="w-7 h-7 rounded bg-slate-100 hover:bg-purple-100 hover:text-purple-700 font-mono text-xs font-bold border border-slate-200"
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
                    className="px-5 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold text-xs rounded-lg transition-all"
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
