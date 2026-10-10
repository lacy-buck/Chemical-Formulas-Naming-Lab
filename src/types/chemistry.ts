export type CompoundCategory =
  | 'covalent'
  | 'ionic_fixed'
  | 'ionic_transition'
  | 'ionic_polyatomic'
  | 'acid_binary'
  | 'acid_oxy';

export interface Compound {
  id: string;
  formula: string; // e.g. "Fe2(SO4)3"
  name: string; // e.g. "Iron(III) sulfate"
  category: CompoundCategory;
  categoryLabel: string;
  cation?: string; // e.g. "Fe³⁺"
  cationName?: string; // e.g. "Iron(III)"
  anion?: string; // e.g. "SO₄²⁻"
  anionName?: string; // e.g. "sulfate"
  elements: string[]; // ["Fe", "S", "O"]
  stepByStepExplanation: string[];
  flowchartPath: string[];
  commonMistakes?: string[];
  hint: string;
}

export interface PolyatomicIon {
  formula: string;
  name: string;
  charge: number;
  chargeStr: string;
  family?: string;
  notes?: string;
}

export interface PrefixItem {
  number: number;
  prefix: string;
  exampleFormula: string;
  exampleName: string;
}

export interface MetalValence {
  symbol: string;
  name: string;
  commonCharges: number[];
  examples: string[];
}

export interface FlowchartStep {
  id: string;
  title: string;
  question: string;
  options: {
    label: string;
    targetId: string;
    tag?: string;
  }[];
  explanation?: string;
  ruleTitle?: string;
  ruleSummary?: string;
  examples?: { formula: string; name: string; notes?: string }[];
  trapWarning?: string;
}

export type PracticeDirection = 'formula_to_name' | 'name_to_formula';
