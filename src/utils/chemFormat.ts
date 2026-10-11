import { Compound } from '../types/chemistry';

/**
 * Fisher-Yates array shuffler to ensure non-repetitive, thoroughly mixed practice sets.
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const SUBSCRIPT_MAP: Record<string, string> = {
  '0': '₀',
  '1': '₁',
  '2': '₂',
  '3': '₃',
  '4': '₄',
  '5': '₅',
  '6': '₆',
  '7': '₇',
  '8': '₈',
  '9': '₉',
};

const REVERSE_SUBSCRIPT_MAP: Record<string, string> = {
  '₀': '0',
  '₁': '1',
  '₂': '2',
  '₃': '3',
  '₄': '4',
  '₅': '5',
  '₆': '6',
  '₇': '7',
  '₈': '8',
  '₉': '9',
};

/**
 * Converts numbers that act as chemical subscripts into unicode subscripts.
 * E.g., "Fe2(SO4)3" -> "Fe₂(SO₄)₃", "H2SO4" -> "H₂SO₄", while preserving leading stoichiometric coefficients (e.g. "2HCl" -> "2HCl").
 */
export function formatFormulaSubscripts(formula: string): string {
  if (!formula) return '';
  return formula.replace(/([A-Za-z)\]])(\d+)/g, (_, prefix, digits) => {
    return prefix + digits.split('').map((d: string) => SUBSCRIPT_MAP[d] || d).join('');
  });
}

/**
 * Normalizes any user-entered formula (with or without unicode subscripts)
 * to standard ASCII characters and removes rogue spaces.
 */
export function normalizeFormulaInput(formula: string): string {
  if (!formula) return '';
  let cleaned = formula.trim().replace(/\s+/g, '');
  cleaned = cleaned.replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (char) => REVERSE_SUBSCRIPT_MAP[char] || char);
  return cleaned;
}

/**
 * Normalizes chemical names for high-school grading tolerance:
 * - standardizes casing and spaces
 * - handles Roman numerals with or without spaces, e.g., "iron(III) chloride" vs "iron (III) chloride" vs "iron (3) chloride"
 * - trims and standardizes hyphens
 */
export function normalizeChemicalName(name: string): string {
  if (!name) return '';
  let str = name.toLowerCase().trim();

  // Normalize spaces around parentheses for Roman numerals: "iron (iii)" -> "iron(iii)"
  str = str.replace(/\s*\(\s*(i{1,4}|iv|v|vi)\s*\)/g, '($1)');

  // Handle students typing regular numbers instead of Roman numerals: e.g. "iron(3)" or "iron 3" -> "iron(iii)"
  str = str.replace(/\b1\b|\(1\)/g, '(i)');
  str = str.replace(/\b2\b|\(2\)/g, '(ii)');
  str = str.replace(/\b3\b|\(3\)/g, '(iii)');
  str = str.replace(/\b4\b|\(4\)/g, '(iv)');
  str = str.replace(/\b5\b|\(5\)/g, '(v)');
  str = str.replace(/\b6\b|\(6\)/g, '(vi)');

  // Clean double spaces
  str = str.replace(/\s+/g, ' ');

  // Standardize common alternate names
  str = str.replace('sodium bicarbonate', 'sodium hydrogen carbonate');
  str = str.replace('bicarbonate', 'hydrogen carbonate');

  return str;
}

export interface AnswerValidation {
  isCorrect: boolean;
  isClose: boolean;
  feedback: string;
  userFormatted: string;
  targetFormatted: string;
}

/**
 * Validates a student's answer against the target compound.
 */
export function validateAnswer(
  userInput: string,
  targetAnswer: string,
  isFormulaQuestion: boolean
): AnswerValidation {
  if (!userInput.trim()) {
    return {
      isCorrect: false,
      isClose: false,
      feedback: 'Please enter your answer.',
      userFormatted: '',
      targetFormatted: isFormulaQuestion ? formatFormulaSubscripts(targetAnswer) : targetAnswer,
    };
  }

  if (isFormulaQuestion) {
    // Formula grading
    const normalizedUser = normalizeFormulaInput(userInput);
    const normalizedTarget = normalizeFormulaInput(targetAnswer);

    // Exact match (case sensitive usually in chemistry, e.g. Co vs CO, but give friendly tip if case is only difference)
    if (normalizedUser === normalizedTarget) {
      return {
        isCorrect: true,
        isClose: false,
        feedback: 'Correct! Beautiful chemical formula.',
        userFormatted: formatFormulaSubscripts(normalizedUser),
        targetFormatted: formatFormulaSubscripts(normalizedTarget),
      };
    }

    // Case insensitive match check (e.g. fe2(so4)3 instead of Fe2(SO4)3)
    if (normalizedUser.toLowerCase() === normalizedTarget.toLowerCase()) {
      return {
        isCorrect: true,
        isClose: true,
        feedback: 'Correct! Remember in chemistry to capitalize element symbols properly (e.g., Fe, not fe).',
        userFormatted: formatFormulaSubscripts(normalizedUser),
        targetFormatted: formatFormulaSubscripts(normalizedTarget),
      };
    }

    // Checking common formula pitfalls:
    // 1. Missing parentheses in polyatomics like CaOH2 vs Ca(OH)2
    const targetHasParens = normalizedTarget.includes('(');
    const userHasParens = normalizedUser.includes('(');
    if (targetHasParens && !userHasParens) {
      const strippedTarget = normalizedTarget.replace(/[()]/g, '');
      if (normalizedUser.toLowerCase() === strippedTarget.toLowerCase()) {
        return {
          isCorrect: false,
          isClose: true,
          feedback:
            'Almost! You forgot parentheses around the polyatomic ion. When you have more than one polyatomic group, parentheses are required (e.g., Ca(OH)₂).',
          userFormatted: formatFormulaSubscripts(normalizedUser),
          targetFormatted: formatFormulaSubscripts(normalizedTarget),
        };
      }
    }

    return {
      isCorrect: false,
      isClose: false,
      feedback: 'Not quite. Check the ion charges or prefixes and try again!',
      userFormatted: formatFormulaSubscripts(normalizedUser),
      targetFormatted: formatFormulaSubscripts(normalizedTarget),
    };
  } else {
    // Name grading
    const normalizedUser = normalizeChemicalName(userInput);
    const normalizedTarget = normalizeChemicalName(targetAnswer);

    if (normalizedUser === normalizedTarget) {
      return {
        isCorrect: true,
        isClose: false,
        feedback: 'Outstanding! Exactly right.',
        userFormatted: userInput,
        targetFormatted: targetAnswer,
      };
    }

    // Check specific high school nomenclature traps
    // 1. Used Greek prefixes on an ionic compound (e.g. calcium dichloride)
    if (
      normalizedUser.includes('di') ||
      normalizedUser.includes('tri') ||
      normalizedUser.includes('tetra') ||
      normalizedUser.includes('mono')
    ) {
      if (
        !normalizedTarget.includes('di') &&
        !normalizedTarget.includes('tri') &&
        !normalizedTarget.includes('tetra') &&
        !normalizedTarget.includes('mono')
      ) {
        return {
          isCorrect: false,
          isClose: true,
          feedback:
            'Watch out: This is an ionic compound! Greek prefixes (mono, di, tri...) are ONLY used for binary covalent compounds.',
          userFormatted: userInput,
          targetFormatted: targetAnswer,
        };
      }
    }

    // 2. Forgot Roman numeral on transition metal
    if (normalizedTarget.includes('(') && !normalizedUser.includes('(')) {
      const targetWithoutRoman = normalizedTarget.replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
      if (normalizedUser === targetWithoutRoman) {
        return {
          isCorrect: false,
          isClose: true,
          feedback:
            'Almost! This transition metal has multiple oxidation states. You must include the Roman numeral for its charge in parentheses, e.g., Iron(III).',
          userFormatted: userInput,
          targetFormatted: targetAnswer,
        };
      }
    }

    // 3. Put "hydro-" on an oxyacid (e.g. "hydronitric acid" for HNO3)
    if (normalizedUser.startsWith('hydro') && !normalizedTarget.startsWith('hydro')) {
      return {
        isCorrect: false,
        isClose: true,
        feedback:
          'Remember the acid rule: NEVER use the prefix "hydro-" when oxygen is present! "Hydro-" is strictly for binary acids.',
        userFormatted: userInput,
        targetFormatted: targetAnswer,
      };
    }

    // 4. Omitted "hydro-" on a binary acid (e.g. "chloric acid" for HCl)
    if (!normalizedUser.startsWith('hydro') && normalizedTarget.startsWith('hydro')) {
      return {
        isCorrect: false,
        isClose: true,
        feedback:
          'Remember: Binary acids (no oxygen) ALWAYS start with the prefix "hydro-".',
        userFormatted: userInput,
        targetFormatted: targetAnswer,
      };
    }

    return {
      isCorrect: false,
      isClose: false,
      feedback: 'Incorrect name. Follow the flowchart steps to trace the correct category rules.',
      userFormatted: userInput,
      targetFormatted: targetAnswer,
    };
  }
}

/**
 * Classifies a compound into its fundamental bond/nomenclature group:
 * - covalent
 * - ionic_fixed
 * - ionic_transition
 * - ionic_polyatomic
 * - acid
 */
export function getBondCategory(compound: Compound): 'covalent' | 'ionic_fixed' | 'ionic_transition' | 'ionic_polyatomic' | 'acid' {
  if (compound.category === 'covalent') return 'covalent';
  if (compound.category === 'ionic_fixed') return 'ionic_fixed';
  if (compound.category === 'ionic_transition' || (compound.cationName && compound.cationName.includes('('))) return 'ionic_transition';
  if (compound.category === 'ionic_polyatomic') return 'ionic_polyatomic';
  if (compound.category.startsWith('acid')) return 'acid';
  return 'covalent';
}

export interface BondBadgeInfo {
  label: string;
  badgeClass: string;
  dotClass: string;
  typeDescription: string;
}

export function getBondCategoryBadge(compound: Compound): BondBadgeInfo {
  const cat = getBondCategory(compound);
  switch (cat) {
    case 'covalent':
      return {
        label: 'Covalent Bond',
        badgeClass: 'bg-purple-100 text-purple-800 border-purple-200',
        dotClass: 'bg-purple-500',
        typeDescription: 'Nonmetal + Nonmetal (Greek prefixes)',
      };
    case 'ionic_fixed':
      return {
        label: 'Ionic: Fixed Metal',
        badgeClass: 'bg-blue-100 text-blue-800 border-blue-200',
        dotClass: 'bg-blue-500',
        typeDescription: 'Group 1, 2, Al, Zn, Ag (No Roman numeral)',
      };
    case 'ionic_transition':
      return {
        label: 'Ionic: Transition Metal',
        badgeClass: 'bg-amber-100 text-amber-900 border-amber-200',
        dotClass: 'bg-amber-500',
        typeDescription: 'Variable charge (Requires Roman numeral)',
      };
    case 'ionic_polyatomic':
      return {
        label: 'Ionic: Polyatomic Ion',
        badgeClass: 'bg-cyan-100 text-cyan-900 border-cyan-200',
        dotClass: 'bg-cyan-500',
        typeDescription: 'Contains polyatomic cation or anion',
      };
    case 'acid':
      return {
        label: compound.category === 'acid_oxy' ? 'Acid: Oxyacid' : 'Acid: Binary Acid',
        badgeClass: 'bg-rose-100 text-rose-900 border-rose-200',
        dotClass: 'bg-rose-500',
        typeDescription: compound.category === 'acid_oxy' ? 'Starts with H + Oxygen (No hydro-)' : 'Starts with H (No oxygen: hydro- prefix)',
      };
  }
}

/**
 * Interleaves compounds so that no two consecutive problems share the same bond type!
 * Guarantees that every step from question i to i+1 tests a DIFFERENT type of bond.
 */
export function interleaveDifferentBondTypes(compounds: Compound[]): Compound[] {
  if (!compounds || compounds.length <= 1) return [...compounds];

  const buckets: Record<string, Compound[]> = {
    covalent: [],
    ionic_fixed: [],
    ionic_transition: [],
    ionic_polyatomic: [],
    acid: [],
  };

  for (const c of compounds) {
    const group = getBondCategory(c);
    buckets[group].push(c);
  }

  // Shuffle within each bucket
  for (const g of Object.keys(buckets)) {
    buckets[g] = shuffleArray(buckets[g]);
  }

  const result: Compound[] = [];
  let lastGroup: string | null = null;

  while (result.length < compounds.length) {
    const availableGroups = Object.keys(buckets).filter(
      (g) => g !== lastGroup && buckets[g].length > 0
    );

    if (availableGroups.length === 0) {
      const remainingGroup = Object.keys(buckets).find((g) => buckets[g].length > 0);
      if (!remainingGroup) break;
      result.push(buckets[remainingGroup].pop()!);
      lastGroup = remainingGroup;
    } else {
      // Pick group with largest remaining pool to maintain balance
      availableGroups.sort((a, b) => buckets[b].length - buckets[a].length);
      const chosen = availableGroups[0];
      result.push(buckets[chosen].pop()!);
      lastGroup = chosen;
    }
  }

  // Double check and fix any adjacent identical categories
  for (let i = 0; i < result.length - 1; i++) {
    if (getBondCategory(result[i]) === getBondCategory(result[i + 1])) {
      for (let j = 0; j < result.length; j++) {
        if (j !== i && j !== i + 1) {
          const prevJ = j > 0 ? getBondCategory(result[j - 1]) : '';
          const nextJ = j < result.length - 1 ? getBondCategory(result[j + 1]) : '';
          const catI = getBondCategory(result[i]);
          const catJ = getBondCategory(result[j]);
          if (catJ !== catI && catI !== prevJ && catI !== nextJ) {
            const temp = result[i + 1];
            result[i + 1] = result[j];
            result[j] = temp;
            break;
          }
        }
      }
    }
  }

  // Check wraparound from end to start
  if (result.length > 2 && getBondCategory(result[result.length - 1]) === getBondCategory(result[0])) {
    const lastCat = getBondCategory(result[result.length - 1]);
    for (let j = result.length - 2; j > 0; j--) {
      const catJ = getBondCategory(result[j]);
      const prevJ = getBondCategory(result[j - 1]);
      const nextJ = getBondCategory(result[j + 1]);
      if (catJ !== lastCat && lastCat !== prevJ && lastCat !== nextJ) {
        const temp = result[result.length - 1];
        result[result.length - 1] = result[j];
        result[j] = temp;
        break;
      }
    }
  }

  return result;
}

export interface FlowchartStepGuide {
  stepNumber: number;
  question: string;
  decision: string;
  detail: string;
  isChargeThinking?: boolean;
}

/**
 * Returns pedagogical flowchart guidance that:
 * 1. Guides the student through the classroom flowchart questions.
 * 2. NEVER gives away the final answer (formula or name).
 * 3. NEVER gives the actual charge of transition metals (+4, IV, etc.).
 * 4. Explicitly prompts the student to THINK through balancing the charges to net neutral zero!
 */
export function getFlowchartGuidance(compound: Compound, isFormulaMode: boolean): FlowchartStepGuide[] {
  const isAcid = compound.category.startsWith('acid');
  const isOxyacid = compound.category === 'acid_oxy';
  const isIonic = compound.category.startsWith('ionic');
  const isTransition =
    compound.category === 'ionic_transition' ||
    Boolean(compound.cationName && compound.cationName.includes('('));
  const isPolyatomic = compound.category === 'ionic_polyatomic';

  const steps: FlowchartStepGuide[] = [];

  // Question 1: Acid check
  if (isAcid) {
    steps.push({
      stepNumber: 1,
      question: 'Does the formula begin with H and represent an acid?',
      decision: 'YES ➔ Follow the Acid branch.',
      detail: 'This is an acid compound because it begins with hydrogen (H).',
    });

    if (isOxyacid) {
      steps.push({
        stepNumber: 2,
        question: 'Does the anion contain oxygen?',
        decision: 'YES ➔ Oxyacid.',
        detail: 'Oxyacids contain an oxygen-bearing polyatomic ion. NEVER use the "hydro-" prefix for oxyacids!',
      });
      steps.push({
        stepNumber: 3,
        question: isFormulaMode ? 'How to write the oxyacid formula?' : 'How to name the oxyacid?',
        decision: isFormulaMode ? 'Determine polyatomic ion & balance H⁺' : 'Suffix transformation rule',
        detail: isFormulaMode
          ? 'Look at the acid name suffix: "-ic acid" comes from an "-ate" polyatomic ion; "-ous acid" comes from an "-ite" polyatomic ion. Combine H⁺ (+1 each) with the polyatomic ion until the total positive and negative charges balance to net zero.'
          : 'Identify the polyatomic ion: change "-ate" to "-ic acid" ("I ate something icky") or "-ite" to "-ous acid" ("A bite of delicious").',
      });
    } else {
      steps.push({
        stepNumber: 2,
        question: 'Does the anion contain oxygen?',
        decision: 'NO ➔ Binary Acid.',
        detail: 'Binary acids contain hydrogen and a single nonmetal (no oxygen).',
      });
      steps.push({
        stepNumber: 3,
        question: isFormulaMode ? 'How to write the binary acid formula?' : 'How to name the binary acid?',
        decision: isFormulaMode ? 'Combine H⁺ with nonmetal anion' : 'Template: hydro- + [root] + -ic acid',
        detail: isFormulaMode
          ? 'The "hydro-" prefix tells you this is a binary acid (H⁺ + single nonmetal). Determine the nonmetal anion charge from its periodic table group, then add enough H⁺ (+1 each) to balance to neutral zero.'
          : 'Use the standard binary acid template: hydro- + [root of nonmetal] + -ic acid (e.g. hydrochloric acid, hydrobromic acid).',
      });
    }
  } else {
    steps.push({
      stepNumber: 1,
      question: 'Does the formula begin with H and represent an acid?',
      decision: 'NO ➔ Not an acid.',
      detail: 'Does not begin with H. Move to check whether a metal or ammonium (NH₄⁺) is present.',
    });

    if (!isIonic) {
      steps.push({
        stepNumber: 2,
        question: 'Does the compound contain a metal (or NH₄⁺)?',
        decision: 'NO ➔ Covalent Molecular Compound.',
        detail: 'Both elements are nonmetals! In covalent compounds, electrons are shared and charges are NEVER balanced.',
      });
      steps.push({
        stepNumber: 3,
        question: isFormulaMode ? 'How to write covalent formula?' : 'How to name covalent compound?',
        decision: isFormulaMode ? 'Prefixes literally give subscripts' : 'Use Greek numerical prefixes',
        detail: isFormulaMode
          ? 'Greek prefixes literally tell you the subscripts (e.g. di = 2, tri = 3, tetra = 4, penta = 5). Never balance charges or simplify ratios for covalent compounds!'
          : 'Use Greek prefixes for both elements (mono-, di-, tri-, tetra-, penta-, hexa-...). Remember: Omit mono- on the first element! Always change the second element\'s ending to -ide.',
      });
    } else {
      steps.push({
        stepNumber: 2,
        question: 'Does the compound contain a metal (or NH₄⁺)?',
        decision: 'YES ➔ Ionic Compound.',
        detail: 'Contains a metal cation (or NH₄⁺) bonded with a nonmetal or polyatomic anion. Charges must balance to net zero.',
      });

      if (isTransition) {
        steps.push({
          stepNumber: 3,
          question: 'Does the metal have a variable charge? (Transition metal)',
          decision: 'YES ➔ Variable Charge Metal (Requires Roman numeral).',
          detail: 'This metal can form multiple different cations. You MUST include a Roman numeral in parentheses to specify its charge.',
        });
        steps.push({
          stepNumber: 4,
          question: '💡 Think About the Charge (You must calculate it):',
          decision: 'Balance charges to net zero (DO NOT use criss-cross shortcuts)',
          detail: isFormulaMode
            ? 'The Roman numeral explicitly tells you the metal cation\'s positive charge! Look up the negative charge of the anion, and think through how many of each ion are needed so total positive charge equals total negative charge (net zero).'
            : 'Look at the negative anion and its subscript to determine the total negative charge. Because the compound must be neutral (net zero charge), the metal cations must provide an equal total positive charge! Divide that total positive charge by the number of metal atoms to find the charge on one metal atom, and write that value as a Roman numeral in parentheses (e.g., (I), (II), (III), (IV), etc.).',
          isChargeThinking: true,
        });
        steps.push({
          stepNumber: 5,
          question: isFormulaMode ? 'Formula writing rule:' : 'Naming rule:',
          decision: isFormulaMode ? 'Write symbols & balanced subscripts' : 'Metal + (Roman Numeral) + Anion',
          detail: isFormulaMode
            ? 'Write the metal symbol with its Roman numeral charge, then the anion with its charge. Balance to net zero with lowest whole-number subscripts. Use parentheses only if a polyatomic ion has a subscript > 1.'
            : 'Write: [Name of metal] + [Roman numeral in parentheses for cation charge] + [Anion name (-ide for single nonmetal, or polyatomic ion unchanged)].',
        });
      } else {
        steps.push({
          stepNumber: 3,
          question: 'Does the metal have a variable charge?',
          decision: 'NO ➔ Fixed-Charge Metal (NO Roman numeral).',
          detail: 'This metal is in Group 1, Group 2, or is Al (+3), Zn (+2), or Ag (+1). It has only one possible charge, so NEVER use Roman numerals.',
        });
        steps.push({
          stepNumber: 4,
          question: isFormulaMode ? 'Formula writing rule:' : 'Naming rule:',
          decision: isFormulaMode ? 'Balance fixed charges to net zero' : 'Name metal directly + name anion',
          detail: isFormulaMode
            ? 'Look up the fixed metal cation charge from its group (Group 1 = +1, Group 2 = +2, Al = +3, Zn = +2, Ag = +1). Balance with the anion charge so total positive equals total negative.'
            : 'Name the metal cation normally without any Roman numerals. Then name the anion (change single nonmetal ending to -ide, or use the polyatomic name unchanged).',
        });
      }

      if (isPolyatomic) {
        steps.push({
          stepNumber: steps.length + 1,
          question: 'Polyatomic Ion Rule:',
          decision: 'Keep polyatomic name unchanged',
          detail: 'Recognize the polyatomic group from your reference sheet. Do not change its ending to -ide. In formulas, put parentheses around the polyatomic group ONLY if its subscript is greater than 1.',
        });
      }
    }
  }

  return steps;
}

/**
 * Normalizes chemical formulas or product expressions for single replacement reactions.
 * Standardizes "+", spaces, state symbols (aq)/(s)/(g), unicode subscripts, and "No Reaction".
 */
export function normalizeReactionProducts(input: string): string {
  if (!input) return '';
  let str = input.trim();

  // If user indicated no reaction
  const nrRegex = /^(no\s*reaction|nr|n\.r\.|none|no\s*rxn|will\s*not\s*react|no)$/i;
  if (nrRegex.test(str.trim())) {
    return 'NO_REACTION';
  }

  // Remove state symbols like (s), (aq), (g), (l)
  str = str.replace(/\s*\((?:s|aq|g|l)\)/gi, '');

  // Convert unicode subscripts to standard numbers
  str = normalizeFormulaInput(str);

  // Standardize "+" with spaces
  str = str.replace(/\s*\+\s*/g, ' + ').trim();

  // Sort reactant/product species alphabetically around "+" so "A + B" matches "B + A"
  const parts = str.split(' + ').map((p) => p.trim()).filter(Boolean);
  // Remove leading stoichiometric coefficients if user entered just formulas: e.g. "2NaCl" -> "NaCl", "3Cu" -> "Cu"
  // Keep both versions or standardized
  return parts.sort().join(' + ');
}

export function validateSingleReplacementAnswer(
  userInput: string,
  acceptedForms: string[],
  doesReact: boolean,
  standardProducts: string
): AnswerValidation {
  const trimmed = userInput.trim();
  if (!trimmed) {
    return {
      isCorrect: false,
      isClose: false,
      feedback: 'Please enter the reaction products or "No Reaction" (NR).',
      userFormatted: '',
      targetFormatted: standardProducts,
    };
  }

  const normalizedUser = normalizeReactionProducts(trimmed);

  if (!doesReact) {
    if (normalizedUser === 'NO_REACTION') {
      return {
        isCorrect: true,
        isClose: false,
        feedback: 'Correct! Because the free element is less active than the element in the compound, no displacement occurs (No Reaction / NR).',
        userFormatted: 'No Reaction (NR)',
        targetFormatted: 'No Reaction (NR)',
      };
    } else {
      return {
        isCorrect: false,
        isClose: false,
        feedback: 'Check the activity series: The free single element is LESS active than the ion in the compound, so this reaction does NOT occur (type "No Reaction" or "NR").',
        userFormatted: trimmed,
        targetFormatted: 'No Reaction (NR)',
      };
    }
  }

  // If it DOES react:
  if (normalizedUser === 'NO_REACTION') {
    return {
      isCorrect: false,
      isClose: false,
      feedback: 'This reaction actually DOES take place! The free element is higher on the activity series and displaces the ion.',
      userFormatted: trimmed,
      targetFormatted: standardProducts,
    };
  }

  // Check normalized matching against all accepted product forms
  const userTokens = normalizedUser
    .replace(/^\d+/g, '')
    .split(' + ')
    .map((s) => s.replace(/^\d+/, '').trim().toLowerCase())
    .sort();

  for (const form of acceptedForms) {
    const normAccepted = normalizeReactionProducts(form);
    if (normAccepted.toLowerCase() === normalizedUser.toLowerCase()) {
      return {
        isCorrect: true,
        isClose: false,
        feedback: 'Excellent! You correctly identified that a reaction occurs and predicted the correct products!',
        userFormatted: formatFormulaSubscripts(trimmed),
        targetFormatted: formatFormulaSubscripts(standardProducts),
      };
    }

    // Check with/without coefficients
    const acceptedTokens = normAccepted
      .replace(/^\d+/g, '')
      .split(' + ')
      .map((s) => s.replace(/^\d+/, '').trim().toLowerCase())
      .sort();

    if (
      userTokens.length === acceptedTokens.length &&
      userTokens.every((val, idx) => val === acceptedTokens[idx])
    ) {
      return {
        isCorrect: true,
        isClose: false,
        feedback: 'Correct! The chemical species formed are accurate!',
        userFormatted: formatFormulaSubscripts(trimmed),
        targetFormatted: formatFormulaSubscripts(standardProducts),
      };
    }
  }

  return {
    isCorrect: false,
    isClose: false,
    feedback: 'Not quite. Check which ion gets displaced and make sure the new compound has balanced charges (remember diatomic elements like H₂, Cl₂, Br₂, I₂)!',
    userFormatted: formatFormulaSubscripts(trimmed),
    targetFormatted: formatFormulaSubscripts(standardProducts),
  };
}

