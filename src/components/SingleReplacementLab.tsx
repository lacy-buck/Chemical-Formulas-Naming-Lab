import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  SINGLE_REPLACEMENT_PROBLEMS,
  METAL_ACTIVITY_SERIES,
  HALOGEN_ACTIVITY_SERIES,
  SingleReplacementProblem,
} from '../data/singleReplacementData';
import {
  formatFormulaSubscripts,
  validateSingleReplacementAnswer,
  AnswerValidation,
  shuffleArray,
} from '../utils/chemFormat';
import {
  ArrowRight,
  Shuffle,
  CheckCircle2,
  XCircle,
  BookOpen,
  PenTool,
  Zap,
  Activity,
  Sparkles,
  Scale,
  RefreshCw,
  Check,
} from 'lucide-react';

interface SingleReplacementLabProps {
  onCorrectAnswer?: () => void;
  onIncorrectAnswer?: () => void;
  onOpenPolyatomicModal?: () => void;
}

type ProblemPhase = 'step1_products' | 'step2_balancing' | 'completed';

/**
 * Parses atom counts from simple chemical formulas (e.g., AlCl3, Cu(NO3)2, Mg, HCl).
 */
function parseSpeciesAtoms(formula: string): Record<string, number> {
  const counts: Record<string, number> = {};
  if (!formula) return counts;

  // Clean unicode subscripts into numbers and remove state symbols
  const clean = formula
    .replace(/\s*\([saqgl]\)/gi, '')
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (ch) => {
      const map: Record<string, string> = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' };
      return map[ch] || ch;
    });

  // Handle parenthesized groups e.g. Cu(NO3)2
  const parenRegex = /\(([^)]+)\)(\d+)?/g;
  let remaining = clean;
  let match;

  while ((match = parenRegex.exec(clean)) !== null) {
    const inside = match[1];
    const multiplier = parseInt(match[2] || '1', 10);
    const insideMatches = inside.matchAll(/([A-Z][a-z]*)(\d+)?/g);
    for (const m of insideMatches) {
      const elem = m[1];
      const count = parseInt(m[2] || '1', 10) * multiplier;
      counts[elem] = (counts[elem] || 0) + count;
    }
    remaining = remaining.replace(match[0], '');
  }

  // Count remaining outside elements
  const outsideMatches = remaining.matchAll(/([A-Z][a-z]*)(\d+)?/g);
  for (const m of outsideMatches) {
    const elem = m[1];
    const count = parseInt(m[2] || '1', 10);
    counts[elem] = (counts[elem] || 0) + count;
  }

  return counts;
}

export const SingleReplacementLab: React.FC<SingleReplacementLabProps> = ({
  onCorrectAnswer,
  onIncorrectAnswer,
  onOpenPolyatomicModal,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'practice' | 'series_reference' | 'guide'>('practice');
  const [filterType, setFilterType] = useState<'all' | 'metal' | 'halogen' | 'reacts_only' | 'no_reaction_only'>('all');

  // Interactive state
  const [problemList, setProblemList] = useState<SingleReplacementProblem[]>(() =>
    shuffleArray(SINGLE_REPLACEMENT_PROBLEMS)
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  // Two-step phase state
  const [phase, setPhase] = useState<ProblemPhase>('step1_products');

  // Step 1: User's products input
  const [userInput, setUserInput] = useState('');
  const [step1Validation, setStep1Validation] = useState<AnswerValidation | null>(null);

  // Step 2: Balancing coefficients (indices correspond to reactants followed by products)
  const [coefficients, setCoefficients] = useState<string[]>([]);
  const [balancingError, setBalancingError] = useState<string | null>(null);

  const [streak, setStreak] = useState(0);

  const step1InputRef = useRef<HTMLInputElement>(null);
  const coeff0InputRef = useRef<HTMLInputElement>(null);

  const currentProblem: SingleReplacementProblem =
    problemList[currentIndex % problemList.length] || problemList[0];

  // Total species count for current problem
  const totalSpeciesCount = (currentProblem.reactantsSpecies?.length || 0) + (currentProblem.productsSpecies?.length || 0);

  // Filter problems when filter changes
  useEffect(() => {
    let filtered = [...SINGLE_REPLACEMENT_PROBLEMS];
    if (filterType === 'metal') {
      filtered = filtered.filter((p) => p.type === 'metal');
    } else if (filterType === 'halogen') {
      filtered = filtered.filter((p) => p.type === 'halogen');
    } else if (filterType === 'reacts_only') {
      filtered = filtered.filter((p) => p.doesReact);
    } else if (filterType === 'no_reaction_only') {
      filtered = filtered.filter((p) => !p.doesReact);
    }
    setProblemList(shuffleArray(filtered));
    setCurrentIndex(0);
  }, [filterType]);

  // Reset inputs when problem changes
  useEffect(() => {
    setPhase('step1_products');
    setUserInput('');
    setStep1Validation(null);
    setBalancingError(null);
    setCoefficients(new Array(totalSpeciesCount).fill(''));
    if (activeSubTab === 'practice' && step1InputRef.current) {
      step1InputRef.current.focus();
    }
  }, [currentIndex, activeSubTab, totalSpeciesCount]);

  const handleReshuffle = () => {
    let filtered = [...SINGLE_REPLACEMENT_PROBLEMS];
    if (filterType === 'metal') filtered = filtered.filter((p) => p.type === 'metal');
    else if (filterType === 'halogen') filtered = filtered.filter((p) => p.type === 'halogen');
    else if (filterType === 'reacts_only') filtered = filtered.filter((p) => p.doesReact);
    else if (filterType === 'no_reaction_only') filtered = filtered.filter((p) => !p.doesReact);

    setProblemList(shuffleArray(filtered));
    setCurrentIndex(0);
    setPhase('step1_products');
    setUserInput('');
    setStep1Validation(null);
    setBalancingError(null);
    setCoefficients(new Array(totalSpeciesCount).fill(''));
  };

  // -------------------------------------------------------------------------
  // STEP 1 SUBMIT (Predict Products or No Reaction)
  // -------------------------------------------------------------------------
  const handleStep1Submit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!userInput.trim() || phase !== 'step1_products') return;

    const result = validateSingleReplacementAnswer(
      userInput,
      currentProblem.acceptedProductForms,
      currentProblem.doesReact,
      currentProblem.productsDisplay
    );

    setStep1Validation(result);

    if (result.isCorrect) {
      if (!currentProblem.doesReact) {
        // NO REACTION: Student moves straight to completion, no balancing required!
        setPhase('completed');
        setStreak((s) => s + 1);
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
        });
        if (onCorrectAnswer) onCorrectAnswer();
      } else {
        // REACTION OCCURS: Step 1 passed! Unlock Step 2 balancing.
        setPhase('step2_balancing');
        // Initialize coefficients array with empty or default 1
        setCoefficients(new Array(totalSpeciesCount).fill(''));
        setBalancingError(null);
        setTimeout(() => {
          if (coeff0InputRef.current) coeff0InputRef.current.focus();
        }, 150);
      }
    } else {
      setStreak(0);
      if (onIncorrectAnswer) onIncorrectAnswer();
    }
  };

  // -------------------------------------------------------------------------
  // STEP 2 SUBMIT (Balance the Chemical Equation)
  // -------------------------------------------------------------------------
  const handleStep2Submit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (phase !== 'step2_balancing') return;

    // Get target coefficients
    const targetCoeffs = [
      ...currentProblem.reactantsSpecies.map((s) => s.coefficient),
      ...currentProblem.productsSpecies.map((s) => s.coefficient),
    ];

    // Parse user coefficients (empty string counts as 1 in chemical equations)
    const parsedUserCoeffs = coefficients.map((val) => {
      const trimmed = val.trim();
      if (!trimmed) return 1;
      const num = parseInt(trimmed, 10);
      return isNaN(num) || num <= 0 ? 1 : num;
    });

    // Check if user coefficients match the lowest whole-number target
    const isExactMatch = parsedUserCoeffs.every((c, idx) => c === targetCoeffs[idx]);

    // Check if it's a balanced scalar multiple (e.g. 2, 4, 2, 2 instead of 1, 2, 1, 1)
    const ratio = parsedUserCoeffs[0] / targetCoeffs[0];
    const isMultiple =
      ratio > 1 &&
      parsedUserCoeffs.every((c, idx) => Math.abs(c / targetCoeffs[idx] - ratio) < 0.001);

    if (isExactMatch) {
      setBalancingError(null);
      setPhase('completed');
      setStreak((s) => s + 1);
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
      });
      if (onCorrectAnswer) onCorrectAnswer();
    } else if (isMultiple) {
      setBalancingError(
        `Close! Your equation is balanced, but chemical equations must use the lowest whole-number coefficients. Divide all coefficients by ${ratio}.`
      );
    } else {
      setBalancingError('Not balanced yet! Check the number of atoms of each element on both sides.');
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % problemList.length);
  };

  const handleQuickInsertNR = () => {
    setUserInput('No Reaction');
    if (step1InputRef.current) step1InputRef.current.focus();
  };

  const handleQuickInsertChar = (char: string) => {
    setUserInput((prev) => prev + char);
    if (step1InputRef.current) step1InputRef.current.focus();
  };

  const handleCoeffChange = (index: number, val: string) => {
    // Only allow positive digits
    const cleaned = val.replace(/\D/g, '');
    setCoefficients((prev) => {
      const next = [...prev];
      next[index] = cleaned;
      return next;
    });
    setBalancingError(null);
  };

  const adjustCoeff = (index: number, delta: number) => {
    setCoefficients((prev) => {
      const next = [...prev];
      const cur = parseInt(next[index] || '1', 10);
      const updated = Math.max(1, cur + delta);
      next[index] = updated.toString();
      return next;
    });
    setBalancingError(null);
  };

  // Atom count breakdown for Step 2 balancing helper
  const allSpecies = [
    ...(currentProblem.reactantsSpecies || []),
    ...(currentProblem.productsSpecies || []),
  ];



  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Section Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-cyan-900 to-slate-900 rounded-2xl p-6 text-white shadow-md relative overflow-hidden border border-teal-800">
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <Activity className="w-80 h-80" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-200 border border-teal-400/30 mb-2">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              Chemical Reactions Lab
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Single Replacement Reactions
            </h1>
            <p className="text-sm text-teal-100/90 mt-1 max-w-2xl">
              Predict whether single replacement reactions occur using the Activity Series, write the products, and balance the equation. If there is no reaction, move on without balancing.
            </p>
          </div>

          {/* Quick Sub-navigation */}
          <div className="flex flex-wrap items-center gap-2 bg-black/20 p-1.5 rounded-xl border border-white/10 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveSubTab('practice')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSubTab === 'practice'
                  ? 'bg-teal-500 text-white shadow-xs'
                  : 'text-teal-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              Practice Lab
            </button>
            <button
              type="button"
              onClick={() => setActiveSubTab('series_reference')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSubTab === 'series_reference'
                  ? 'bg-teal-500 text-white shadow-xs'
                  : 'text-teal-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              Activity Series Charts
            </button>
            <button
              type="button"
              onClick={() => setActiveSubTab('guide')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSubTab === 'guide'
                  ? 'bg-teal-500 text-white shadow-xs'
                  : 'text-teal-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Rules & Strategy
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SUBTAB 1: PRACTICE LAB */}
      {/* ========================================================================= */}
      {activeSubTab === 'practice' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Filter & Activity Series Quick Check (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Quick Filter */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Filter Question Set
                </span>
                <button
                  type="button"
                  onClick={handleReshuffle}
                  className="flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-800 transition-colors"
                  title="Reshuffle current questions"
                >
                  <Shuffle className="w-3 h-3" />
                  Reshuffle
                </button>
              </div>

              <div className="grid grid-cols-2 gap-1.5 text-xs">
                <button
                  type="button"
                  onClick={() => setFilterType('all')}
                  className={`px-2.5 py-1.5 rounded-lg font-semibold text-left transition-colors ${
                    filterType === 'all'
                      ? 'bg-teal-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  ⚡ All Reactions ({SINGLE_REPLACEMENT_PROBLEMS.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType('metal')}
                  className={`px-2.5 py-1.5 rounded-lg font-semibold text-left transition-colors ${
                    filterType === 'metal'
                      ? 'bg-amber-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  🔩 Metals Only
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType('halogen')}
                  className={`px-2.5 py-1.5 rounded-lg font-semibold text-left transition-colors ${
                    filterType === 'halogen'
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  🧪 Halogens Only
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType('no_reaction_only')}
                  className={`px-2.5 py-1.5 rounded-lg font-semibold text-left transition-colors ${
                    filterType === 'no_reaction_only'
                      ? 'bg-rose-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  ⛔ No Reaction (NR)
                </button>
              </div>
            </div>

            {/* Quick Interactive Activity Series Strip */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Activity Series Quick Check
                  </span>
                </div>
                <span className="text-2xs text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
                  Top = Most Active
                </span>
              </div>

              {currentProblem.type === 'metal' ? (
                <div>
                  <div className="text-xs font-semibold text-amber-900 bg-amber-50 px-2.5 py-1.5 rounded-lg border border-amber-200 mb-2 flex items-center justify-between">
                    <span>Metal Activity (Top → Bottom)</span>
                    <span className="text-2xs text-amber-700 font-bold">Higher replaces lower</span>
                  </div>
                  <div className="max-h-72 overflow-y-auto rounded-xl border border-slate-200 divide-y divide-slate-100 text-xs">
                    {METAL_ACTIVITY_SERIES.map((m) => {
                      const isFree = m.symbol === currentProblem.singleElement;
                      const isTarget = m.symbol === currentProblem.targetIonReplaced;
                      return (
                        <div
                          key={m.symbol}
                          className={`flex items-center justify-between px-3 py-2 transition-colors ${
                            isFree
                              ? 'bg-amber-100 font-bold text-amber-950 ring-2 ring-amber-500 ring-inset'
                              : isTarget
                              ? 'bg-blue-100 font-bold text-blue-950 ring-2 ring-blue-500 ring-inset'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 text-2xs text-slate-400 font-mono">#{m.rank}</span>
                            <span className="font-mono font-bold">{m.symbol}</span>
                            <span className="text-slate-500 text-2xs">{m.name}</span>
                          </div>
                          {isFree && (
                            <span className="text-2xs font-extrabold px-1.5 py-0.5 rounded bg-amber-600 text-white">
                              FREE ELEMENT
                            </span>
                          )}
                          {isTarget && (
                            <span className="text-2xs font-extrabold px-1.5 py-0.5 rounded bg-blue-600 text-white">
                              IN COMPOUND
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-xs font-semibold text-purple-900 bg-purple-50 px-2.5 py-1.5 rounded-lg border border-purple-200 mb-2 flex items-center justify-between">
                    <span>Halogen Activity (Top → Bottom)</span>
                    <span className="text-2xs text-purple-700 font-bold">Higher replaces lower</span>
                  </div>
                  <div className="rounded-xl border border-slate-200 divide-y divide-slate-100 text-xs">
                    {HALOGEN_ACTIVITY_SERIES.map((h) => {
                      const isFree = currentProblem.singleElement.startsWith(h.symbol);
                      const isTarget = currentProblem.targetIonReplaced === h.symbol;
                      return (
                        <div
                          key={h.symbol}
                          className={`flex items-center justify-between px-3 py-2.5 transition-colors ${
                            isFree
                              ? 'bg-purple-100 font-bold text-purple-900 ring-2 ring-purple-500 ring-inset'
                              : isTarget
                              ? 'bg-amber-100 font-bold text-amber-900 ring-2 ring-amber-500 ring-inset'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 text-2xs text-slate-400 font-mono">#{h.rank}</span>
                            <span className="font-mono font-bold">{h.symbol}₂</span>
                            <span className="text-slate-500 text-2xs">{h.name}</span>
                          </div>
                          {isFree && (
                            <span className="text-2xs font-extrabold px-1.5 py-0.5 rounded bg-purple-600 text-white">
                              FREE HALOGEN
                            </span>
                          )}
                          {isTarget && (
                            <span className="text-2xs font-extrabold px-1.5 py-0.5 rounded bg-amber-600 text-white">
                              IN COMPOUND
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {onOpenPolyatomicModal && (
                <button
                  type="button"
                  onClick={onOpenPolyatomicModal}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-colors"
                >
                  <span>🧪</span>
                  <span>View Polyatomic Ions (SO₄²⁻, NO₃⁻, OH⁻...)</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Problem Card & Two-Step Workflow (8 cols on lg) */}
          <div className="lg:col-span-8 space-y-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
              {/* Question Header & Streak */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    Question {currentIndex + 1} of {problemList.length}
                  </span>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                      currentProblem.type === 'metal'
                        ? 'bg-amber-50 text-amber-800 border-amber-200'
                        : 'bg-purple-50 text-purple-800 border-purple-200'
                    }`}
                  >
                    {currentProblem.type === 'metal' ? 'Metal Single Replacement' : 'Halogen Single Replacement'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {streak > 1 && (
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 animate-pulse">
                      <Sparkles className="w-3.5 h-3.5" />
                      {streak} Streak!
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Skip
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Chemical Equation Given Display (Strictly pure reactants, NO leading coefficients or 's 2') */}
              <div className="bg-gradient-to-br from-slate-50 to-teal-50/30 rounded-2xl p-6 border border-slate-200 text-center space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <span
                    className={`text-2xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border ${
                      phase === 'step1_products'
                        ? 'bg-teal-100 text-teal-800 border-teal-200'
                        : phase === 'step2_balancing'
                        ? 'bg-amber-100 text-amber-800 border-amber-200'
                        : 'bg-emerald-100 text-emerald-800 border-emerald-200'
                    }`}
                  >
                    {phase === 'step1_products'
                      ? 'Step 1 of 2: Write the Product(s) or No Reaction'
                      : phase === 'step2_balancing'
                      ? 'Step 2 of 2: Balance the Equation'
                      : 'Reaction Complete'}
                  </span>
                </div>

                {/* Pure reactants without any coefficient prefix */}
                <div className="flex items-center justify-center flex-wrap gap-3 py-3">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-wide">
                    {formatFormulaSubscripts(currentProblem.reactantsDisplay)}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-teal-600">→</span>
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-slate-700 bg-white px-4 py-1.5 rounded-xl border border-slate-300">
                    {phase === 'step1_products'
                      ? '?'
                      : phase === 'step2_balancing'
                      ? formatFormulaSubscripts(currentProblem.productsDisplay)
                      : formatFormulaSubscripts(currentProblem.productsDisplay)}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-2 border-t border-slate-200/80 max-w-xl mx-auto">
                  <div className="bg-white/80 p-2 rounded-lg border border-slate-200">
                    <span className="font-semibold text-slate-500">Free Element: </span>
                    <strong className="text-blue-700">
                      {currentProblem.singleElementName} ({formatFormulaSubscripts(currentProblem.singleElement)})
                    </strong>
                  </div>
                  <div className="bg-white/80 p-2 rounded-lg border border-slate-200">
                    <span className="font-semibold text-slate-500">Target Compound: </span>
                    <strong className="text-amber-700">
                      {currentProblem.compoundTargetName} ({formatFormulaSubscripts(currentProblem.compoundTarget)})
                    </strong>
                  </div>
                </div>

                {/* Transition Metal Charge Specification */}
                {currentProblem.transitionMetalChargeNote && (
                  <div className="mt-2.5 max-w-xl mx-auto p-2.5 rounded-xl bg-amber-50/90 border border-amber-300/80 text-amber-950 text-xs flex items-center justify-center gap-2 shadow-2xs">
                    <span className="font-extrabold px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 text-2xs uppercase tracking-wide">
                      Ion Charge Specified
                    </span>
                    <span className="font-medium text-slate-800">
                      {currentProblem.transitionMetalChargeNote}
                    </span>
                  </div>
                )}
              </div>

              {/* ================================================================= */}
              {/* STEP 1: PREDICT PRODUCTS OR NO REACTION                           */}
              {/* ================================================================= */}
              {phase === 'step1_products' && (
                <div className="space-y-4">
                  {/* Quick Symbol Insert Bar & NR Button */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <span className="font-semibold">Quick insert:</span>
                      <button
                        type="button"
                        onClick={handleQuickInsertNR}
                        className="px-2.5 py-1 rounded-md bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold border border-rose-200 transition-colors"
                      >
                        No Reaction (NR)
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickInsertChar(' + ')}
                        className="px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono font-bold transition-colors"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickInsertChar('₂')}
                        className="px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono font-bold transition-colors"
                      >
                        ₂
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickInsertChar('₃')}
                        className="px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono font-bold transition-colors"
                      >
                        ₃
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickInsertChar('₄')}
                        className="px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono font-bold transition-colors"
                      >
                        ₄
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleStep1Submit} className="space-y-4">
                    <div>
                      <label htmlFor="reaction-input" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Step 1: Write the product formula(s) or click &quot;No Reaction (NR)&quot;:
                      </label>
                      <div className="flex gap-2">
                        <input
                          ref={step1InputRef}
                          id="reaction-input"
                          type="text"
                          value={userInput}
                          onChange={(e) => setUserInput(e.target.value)}
                          placeholder='e.g., "ZnSO4 + Cu" or "No Reaction"'
                          className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base font-mono outline-hidden transition-all bg-white text-slate-900"
                        />
                        <button
                          type="submit"
                          disabled={!userInput.trim()}
                          className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-sm shadow-xs transition-all flex items-center gap-1.5"
                        >
                          Check Products
                        </button>
                      </div>
                    </div>
                  </form>

                  {/* Feedback when Step 1 is incorrect */}
                  {step1Validation && !step1Validation.isCorrect && (
                    <div className="rounded-2xl p-4 border bg-rose-50/80 border-rose-300 text-rose-950 flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      <div className="space-y-2 flex-1 text-xs">
                        <div className="font-bold text-sm">Not Quite Right</div>
                        <p>{step1Validation.feedback}</p>
                        <div className="pt-1 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setUserInput('');
                              setStep1Validation(null);
                              if (step1InputRef.current) step1InputRef.current.focus();
                            }}
                            className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-800 font-bold rounded-lg border border-slate-300 transition-colors"
                          >
                            Try Again
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ================================================================= */}
              {/* STEP 2: BALANCE THE EQUATION (Unlocked when Step 1 is correct)     */}
              {/* ================================================================= */}
              {phase === 'step2_balancing' && (
                <div className="space-y-5 animate-fadeIn">
                  {/* Step 1 Success Banner */}
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div className="text-xs text-emerald-900">
                      <strong className="block text-sm font-bold text-emerald-950">
                        Step 1 Complete: Products are correct! ({formatFormulaSubscripts(currentProblem.productsDisplay)})
                      </strong>
                      Now, balance the chemical equation by entering the lowest whole-number coefficients (enter 1 or leave blank for 1).
                    </div>
                  </div>

                  {/* Interactive Coefficient Equation Input */}
                  <div className="bg-slate-50 p-6 rounded-2xl border-2 border-amber-300/80 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <Scale className="w-4 h-4 text-amber-600" />
                        Enter Coefficients to Balance:
                      </span>
                      <span className="text-2xs text-slate-500">
                        Blank or 1 = coefficient of 1
                      </span>
                    </div>

                    <form onSubmit={handleStep2Submit} className="space-y-4">
                      <div className="flex flex-wrap items-center justify-center gap-3 py-2 bg-white p-4 rounded-xl border border-slate-200 text-base sm:text-lg">
                        {/* Reactants species */}
                        {currentProblem.reactantsSpecies.map((species, idx) => (
                          <React.Fragment key={`r-${idx}`}>
                            {idx > 0 && <span className="font-bold text-slate-400 text-xl">+</span>}
                            <div className="flex items-center gap-1">
                              <div className="flex flex-col items-center">
                                <input
                                  ref={idx === 0 ? coeff0InputRef : undefined}
                                  type="text"
                                  inputMode="numeric"
                                  pattern="[0-9]*"
                                  value={coefficients[idx] || ''}
                                  onChange={(e) => handleCoeffChange(idx, e.target.value)}
                                  placeholder="1"
                                  className="w-11 h-11 text-center font-mono font-bold text-lg rounded-lg border-2 border-amber-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-hidden bg-amber-50/50 text-slate-900"
                                />
                                <div className="flex items-center gap-0.5 mt-1">
                                  <button
                                    type="button"
                                    onClick={() => adjustCoeff(idx, -1)}
                                    className="w-5 h-4 text-2xs bg-slate-200 hover:bg-slate-300 text-slate-700 rounded flex items-center justify-center"
                                  >
                                    -
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => adjustCoeff(idx, 1)}
                                    className="w-5 h-4 text-2xs bg-slate-200 hover:bg-slate-300 text-slate-700 rounded flex items-center justify-center"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              <span className="font-mono font-bold text-slate-900 text-lg">
                                {formatFormulaSubscripts(species.formula)}
                              </span>
                            </div>
                          </React.Fragment>
                        ))}

                        <span className="text-2xl font-black text-amber-600 px-2">→</span>

                        {/* Products species */}
                        {currentProblem.productsSpecies.map((species, pIdx) => {
                          const overallIdx = currentProblem.reactantsSpecies.length + pIdx;
                          return (
                            <React.Fragment key={`p-${pIdx}`}>
                              {pIdx > 0 && <span className="font-bold text-slate-400 text-xl">+</span>}
                              <div className="flex items-center gap-1">
                                <div className="flex flex-col items-center">
                                  <input
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    value={coefficients[overallIdx] || ''}
                                    onChange={(e) => handleCoeffChange(overallIdx, e.target.value)}
                                    placeholder="1"
                                    className="w-11 h-11 text-center font-mono font-bold text-lg rounded-lg border-2 border-teal-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-hidden bg-teal-50/50 text-slate-900"
                                  />
                                  <div className="flex items-center gap-0.5 mt-1">
                                    <button
                                      type="button"
                                      onClick={() => adjustCoeff(overallIdx, -1)}
                                      className="w-5 h-4 text-2xs bg-slate-200 hover:bg-slate-300 text-slate-700 rounded flex items-center justify-center"
                                    >
                                      -
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => adjustCoeff(overallIdx, 1)}
                                      className="w-5 h-4 text-2xs bg-slate-200 hover:bg-slate-300 text-slate-700 rounded flex items-center justify-center"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                                <span className="font-mono font-bold text-slate-900 text-lg">
                                  {formatFormulaSubscripts(species.formula)}
                                </span>
                              </div>
                            </React.Fragment>
                          );
                        })}
                      </div>

                      {balancingError && (
                        <div className="p-3 bg-rose-50 border border-rose-300 rounded-xl text-rose-900 text-xs flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                          <span>{balancingError}</span>
                        </div>
                      )}

                      <div className="flex items-center gap-2">
                        <button
                          type="submit"
                          className="flex-1 py-3 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-xs transition-colors flex items-center justify-center gap-2"
                        >
                          <Scale className="w-4 h-4" />
                          Check Balanced Equation
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* ================================================================= */}
              {/* STEP 3: COMPLETED STATE (Both steps finished or No Reaction)       */}
              {/* ================================================================= */}
              {phase === 'completed' && (
                <div className="rounded-2xl p-5 border bg-emerald-50/90 border-emerald-300 text-emerald-950 space-y-4 animate-fadeIn">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="space-y-3 flex-1">
                      <div>
                        <h4 className="font-extrabold text-lg text-emerald-900">
                          {currentProblem.doesReact ? 'Equation Balanced Successfully!' : 'Correct! No Reaction (NR)'}
                        </h4>
                        <p className="text-xs text-emerald-800 mt-0.5">
                          {currentProblem.doesReact
                            ? 'You correctly predicted the products and balanced the single replacement reaction.'
                            : 'Because the single free element is lower on the activity series than the element in the compound, no displacement occurs. You can move directly on to the next problem.'}
                        </p>
                      </div>

                      {/* Chemical Equation Result Details */}
                      <div className="bg-white/95 p-4 rounded-xl border border-slate-200/80 space-y-2.5 text-xs">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                          <span className="font-semibold text-slate-500">
                            {currentProblem.doesReact ? 'Standard Balanced Equation:' : 'Reaction Result:'}
                          </span>
                          <span className="font-mono font-bold text-sm text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                            {formatFormulaSubscripts(currentProblem.standardBalancedEquation)}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                          <span className="font-semibold text-slate-500">Activity Series Comparison:</span>
                          <span className={`font-semibold ${currentProblem.doesReact ? 'text-teal-700' : 'text-rose-700'}`}>
                            {currentProblem.activityComparison}
                          </span>
                        </div>

                        {currentProblem.transitionMetalChargeNote && (
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                            <span className="font-semibold text-slate-500">Ion Charge Specified:</span>
                            <span className="font-medium text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                              {currentProblem.transitionMetalChargeNote}
                            </span>
                          </div>
                        )}

                        {/* Step by step thought process */}
                        <div className="pt-1">
                          <span className="font-bold text-slate-700 block mb-1">
                            Step-by-Step Explanation:
                          </span>
                          <ol className="list-decimal list-inside space-y-1 text-slate-600 pl-1">
                            {currentProblem.explanationSteps.map((step, idx) => (
                              <li key={idx} className="leading-relaxed">
                                {formatFormulaSubscripts(step)}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>

                      {/* Next Button */}
                      <div className="pt-1">
                        <button
                          type="button"
                          onClick={handleNext}
                          className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold rounded-xl shadow-xs transition-colors flex items-center gap-2"
                        >
                          Next Reaction
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUBTAB 2: ACTIVITY SERIES REFERENCE CHARTS */}
      {/* ========================================================================= */}
      {activeSubTab === 'series_reference' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Metal Activity Series Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    🔩
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Activity Series of Metals</h3>
                    <p className="text-2xs text-slate-500">Decreasing reactivity from top to bottom</p>
                  </div>
                </div>
                <span className="text-2xs font-extrabold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  A + BC → AC + B
                </span>
              </div>

              <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
                <strong>Rule:</strong> A metal can only displace another metal (or hydrogen) that is <strong>BELOW</strong> it on this list. Metals below cannot displace metals above!
              </div>

              <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl max-h-96 overflow-y-auto">
                {METAL_ACTIVITY_SERIES.map((m) => (
                  <div key={m.symbol} className="flex items-center justify-between p-2.5 text-xs hover:bg-slate-50">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-2xs text-slate-400 w-5">#{m.rank}</span>
                      <span className="font-mono font-bold text-slate-900 text-sm">{m.symbol}</span>
                      <span className="text-slate-600">{m.name}</span>
                    </div>
                    {m.symbol === 'H' ? (
                      <span className="text-2xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                        Hydrogen benchmark
                      </span>
                    ) : m.reactsWithAcids ? (
                      <span className="text-2xs font-medium text-slate-500">
                        Reacts with acids
                      </span>
                    ) : (
                      <span className="text-2xs font-medium text-slate-400">
                        Unreactive / Noble
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Halogen Activity Series Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                    🧪
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Activity Series of Halogens</h3>
                    <p className="text-2xs text-slate-500">Group 17 nonmetals (top to bottom)</p>
                  </div>
                </div>
                <span className="text-2xs font-extrabold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                  X₂ + 2AY → 2AX + Y₂
                </span>
              </div>

              <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-200/80 text-xs text-purple-900 leading-relaxed">
                <strong>Crucial Difference:</strong> Halogens are nonmetals! They replace the <strong>ANION (negative ion)</strong>, never the metal cation! A higher halogen in Group 17 displaces a lower halide.
              </div>

              <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl">
                {HALOGEN_ACTIVITY_SERIES.map((h) => (
                  <div key={h.symbol} className="p-3.5 space-y-1 hover:bg-slate-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-2xs text-slate-400">#{h.rank}</span>
                        <span className="font-mono font-bold text-slate-900 text-base">{h.symbol}₂</span>
                        <span className="text-xs font-semibold text-slate-700">{h.name}</span>
                      </div>
                      <span className="text-2xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                        Rank {h.rank}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 pl-6">{h.notes}</p>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                <span className="font-bold text-slate-900 block">Diatomic Reminder (BrINClHOF):</span>
                <p>
                  Free elemental halogens and hydrogen exist as diatomic molecules: <strong>F₂, Cl₂, Br₂, I₂, H₂</strong>. Always write the subscript ₂ when they appear alone as free elements!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUBTAB 3: RULES & STRATEGY GUIDE */}
      {/* ========================================================================= */}
      {activeSubTab === 'guide' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-extrabold text-slate-900">
              Mastering Single Replacement Reactions
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              General formula: <code className="bg-slate-100 px-2 py-0.5 rounded font-bold text-slate-800">A + BC → B + AC</code> (or No Reaction)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                1
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Identify Free Element Type</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Determine if the lone element is a <strong>metal</strong> (e.g., Zn, Cu, Al) or a <strong>halogen</strong> (e.g., Cl₂, Br₂, I₂).
              </p>
              <ul className="text-xs text-slate-500 list-disc list-inside space-y-1 pt-1">
                <li>Metals replace the metal cation (or H⁺).</li>
                <li>Halogens replace the nonmetal halide anion.</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-xs">
                2
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Consult the Activity Series</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Check whether the free element is <strong>higher</strong> than the element it seeks to replace.
              </p>
              <ul className="text-xs text-slate-500 list-disc list-inside space-y-1 pt-1">
                <li><strong>Higher = Reacts!</strong> Displacement takes place.</li>
                <li><strong>Lower = No Reaction (NR)!</strong> The bond remains intact.</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                3
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Write Correct Chemical Formulas</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Never copy subscripts from reactants! Balance ion charges for the new compound to net zero.
              </p>
              <ul className="text-xs text-slate-500 list-disc list-inside space-y-1 pt-1">
                <li>Zn²⁺ + Cl⁻ forms <strong>ZnCl₂</strong> (not ZnCl).</li>
                <li>Free halogens and hydrogen are diatomic: <strong>H₂, Cl₂, Br₂, I₂</strong>.</li>
              </ul>
            </div>
          </div>

          {/* Concrete Examples Comparison */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden text-xs">
            <div className="bg-slate-100 px-4 py-2.5 font-bold text-slate-800">
              Comparative Examples: Reaction vs. No Reaction
            </div>
            <div className="divide-y divide-slate-100">
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-emerald-900 text-sm">Zn + CuSO₄ → ZnSO₄ + Cu</span>
                    <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded text-2xs">REACTS</span>
                  </div>
                  <p className="text-slate-600 text-xs">
                    Zn (rank 9) is ABOVE Cu (rank 18). Zinc displaces copper.
                  </p>
                </div>

                <div className="bg-rose-50/60 p-3 rounded-xl border border-rose-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-rose-900 text-sm">Cu + ZnSO₄ → No Reaction</span>
                    <span className="font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded text-2xs">NO REACTION (NR)</span>
                  </div>
                  <p className="text-slate-600 text-xs">
                    Cu (rank 18) is BELOW Zn (rank 9). Copper cannot displace zinc!
                  </p>
                </div>
              </div>

              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-emerald-900 text-sm">Cl₂ + 2NaBr → 2NaCl + Br₂</span>
                    <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded text-2xs">REACTS</span>
                  </div>
                  <p className="text-slate-600 text-xs">
                    Chlorine (rank 2) is ABOVE Bromine (rank 3). Cl replaces Br⁻.
                  </p>
                </div>

                <div className="bg-rose-50/60 p-3 rounded-xl border border-rose-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-rose-900 text-sm">I₂ + 2NaCl → No Reaction</span>
                    <span className="font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded text-2xs">NO REACTION (NR)</span>
                  </div>
                  <p className="text-slate-600 text-xs">
                    Iodine (rank 4) is BELOW Chlorine (rank 2). Iodine cannot displace chloride!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
