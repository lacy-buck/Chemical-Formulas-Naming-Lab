export interface FlowNode {
  id: string;
  type: 'question' | 'decision' | 'outcome';
  title: string;
  badge?: string;
  text: string;
  explanation: string;
  rules?: string[];
  examples?: { formula: string; name: string; notes?: string }[];
  trap?: string;
  options?: {
    label: string;
    nextId: string;
    description?: string;
  }[];
}

export const FORMULA_TO_NAME_FLOW: Record<string, FlowNode> = {
  root: {
    id: 'root',
    type: 'question',
    title: 'Step 1: Check the First Element / Ion',
    badge: 'Classification',
    text: 'Look at the very first element or group in the chemical formula. What do you see?',
    explanation:
      'In high school chemistry, the first atom immediately reveals whether you are dealing with an Acid, an Ionic compound, or a Covalent molecule.',
    options: [
      {
        label: 'Starts with H (e.g., HCl, H₂SO₄)',
        nextId: 'acid_check_oxygen',
        description: 'Hydrogen at the start indicates an acid (in aqueous chemistry).',
      },
      {
        label: 'Starts with a Metal or NH₄⁺ (e.g., Na, Ca, Fe, Cu, NH₄)',
        nextId: 'ionic_metal_type',
        description: 'A metal or ammonium indicates an ionic compound with ionic bonding.',
      },
      {
        label: 'Only Nonmetals (e.g., CO₂, N₂O₄, PCl₅)',
        nextId: 'covalent_rules',
        description: 'Two nonmetals (excluding H at start) form a binary covalent compound.',
      },
    ],
  },

  // ================= ACID PATH =================
  acid_check_oxygen: {
    id: 'acid_check_oxygen',
    type: 'question',
    title: 'Step 2: Does the Acid Contain Oxygen?',
    badge: 'Acid Naming',
    text: 'Inspect the formula after Hydrogen. Does it contain Oxygen (O)?',
    explanation:
      'This determines whether you use the "hydro-" prefix (binary acids) or polyatomic "-ic / -ous" rules (oxyacids).',
    options: [
      {
        label: 'NO Oxygen (Binary Acid, e.g., HCl, HBr, H₂S, HCN)',
        nextId: 'acid_binary_outcome',
        description: 'Hydrogen bonded to a single nonmetal or cyanide.',
      },
      {
        label: 'YES, Contains Oxygen (Oxyacid, e.g., HNO₃, H₂SO₄, H₃PO₄)',
        nextId: 'acid_oxy_check_ion',
        description: 'Hydrogen bonded to a polyatomic oxyanion.',
      },
    ],
  },
  acid_binary_outcome: {
    id: 'acid_binary_outcome',
    type: 'outcome',
    title: 'Binary Acid Naming Rule',
    badge: 'Rule: hydro- + [root] + -ic acid',
    text: 'Binary acids NEVER have oxygen. Their names ALWAYS start with "hydro-"!',
    explanation: 'Follow this 3-part formula:',
    rules: [
      '1. Start with the prefix "hydro-".',
      '2. Take the root of the nonmetal (chlor, brom, iod, fluor, sulfur).',
      '3. Add the suffix "-ic acid".',
      'Mnemonic: "My RIDE has HYDRO-l-ICs" (anion ending in -ide → hydro...ic acid).',
    ],
    examples: [
      { formula: 'HCl', name: 'Hydrochloric acid', notes: 'Cl⁻ is chloride → hydro + chlor + ic acid' },
      { formula: 'HBr', name: 'Hydrobromic acid', notes: 'Br⁻ is bromide → hydro + brom + ic acid' },
      { formula: 'H₂S', name: 'Hydrosulfuric acid', notes: 'Uses root "sulfur" → hydro + sulfur + ic acid' },
      { formula: 'HF', name: 'Hydrofluoric acid', notes: 'F⁻ is fluoride → hydro + fluor + ic acid' },
    ],
    trap: 'Do not confuse hydrochloric acid (HCl, binary) with chloric acid (HClO₃, oxyacid with oxygen)!',
  },
  acid_oxy_check_ion: {
    id: 'acid_oxy_check_ion',
    type: 'question',
    title: 'Step 3: What is the Polyatomic Ion?',
    badge: 'Oxyacid Rules',
    text: 'Identify the polyatomic oxyanion attached to H. Does its name end in "-ate" or "-ite"?',
    explanation:
      'CRITICAL RULE: NEVER use "hydro-" for oxyacids! The ending of the polyatomic ion determines whether the acid ends in "-ic" or "-ous".',
    options: [
      {
        label: 'Polyatomic ion ends in "-ate" (e.g., NO₃⁻ Nitrate, SO₄²⁻ Sulfate, PO₄³⁻ Phosphate)',
        nextId: 'acid_oxy_ate_outcome',
        description: '"-ate" becomes "-ic acid"',
      },
      {
        label: 'Polyatomic ion ends in "-ite" (e.g., NO₂⁻ Nitrite, SO₃²⁻ Sulfite, ClO₂⁻ Chlorite)',
        nextId: 'acid_oxy_ite_outcome',
        description: '"-ite" becomes "-ous acid"',
      },
    ],
  },
  acid_oxy_ate_outcome: {
    id: 'acid_oxy_ate_outcome',
    type: 'outcome',
    title: 'Oxyacid with "-ate" Ion Rule',
    badge: 'Rule: [root] + -ic acid (NO hydro!)',
    text: 'When the polyatomic ion ends in "-ate", the acid ends in "-ic acid".',
    explanation:
      'Remember the classic high school mnemonic: "I ATE something IC-ky!"',
    rules: [
      '1. Identify the -ate ion (e.g., NO₃⁻ is nitrate, SO₄²⁻ is sulfate).',
      '2. Change "-ate" to "-ic acid".',
      '3. NEVER put "hydro-" in front! "Hydronitric" would mean H₃N (no oxygen).',
    ],
    examples: [
      { formula: 'HNO₃', name: 'Nitric acid', notes: 'From nitr-ate → nitric acid' },
      { formula: 'H₂SO₄', name: 'Sulfuric acid', notes: 'From sulf-ate → sulfuric acid (uses root "sulfur")' },
      { formula: 'H₃PO₄', name: 'Phosphoric acid', notes: 'From phosph-ate → phosphoric acid' },
      { formula: 'HClO₃', name: 'Chloric acid', notes: 'From chlor-ate → chloric acid' },
      { formula: 'HC₂H₃O₂', name: 'Acetic acid', notes: 'From acet-ate → acetic acid (vinegar)' },
    ],
    trap: 'Never add "hydro-" to oxyacids! "Hydrosulfuric" is H₂S, whereas "Sulfuric" is H₂SO₄.',
  },
  acid_oxy_ite_outcome: {
    id: 'acid_oxy_ite_outcome',
    type: 'outcome',
    title: 'Oxyacid with "-ite" Ion Rule',
    badge: 'Rule: [root] + -ous acid (NO hydro!)',
    text: 'When the polyatomic ion ends in "-ite", the acid ends in "-ous acid".',
    explanation:
      'Remember the mnemonic: "Spr-ITE is delici-OUS!"',
    rules: [
      '1. Identify the -ite ion (e.g., NO₂⁻ is nitrite, SO₃²⁻ is sulfite).',
      '2. Change "-ite" to "-ous acid".',
      '3. Retain any prefix from the ion (e.g., ClO⁻ is hypochlorite → hypochlorous acid).',
    ],
    examples: [
      { formula: 'HNO₂', name: 'Nitrous acid', notes: 'From nitr-ite → nitrous acid' },
      { formula: 'H₂SO₃', name: 'Sulfurous acid', notes: 'From sulf-ite → sulfurous acid' },
      { formula: 'H₃PO₃', name: 'Phosphorous acid', notes: 'From phosph-ite → phosphorous acid' },
      { formula: 'HClO₂', name: 'Chlorous acid', notes: 'From chlor-ite → chlorous acid' },
      { formula: 'HClO', name: 'Hypochlorous acid', notes: 'From hypochlorite → hypochlorous acid' },
    ],
    trap: 'Notice the pattern: -ite has ONE LESS oxygen than -ate. HNO₃ is nitric, HNO₂ is nitrous.',
  },

  // ================= IONIC PATH =================
  ionic_metal_type: {
    id: 'ionic_metal_type',
    type: 'question',
    title: 'Step 2: What Kind of Cation Is Present?',
    badge: 'Ionic Branch',
    text: 'Check the metal cation: does it have a fixed, invariant charge, or is it a transition metal / multivalent metal?',
    explanation:
      'This determines whether or not you MUST calculate a Roman numeral for the cation.',
    options: [
      {
        label: 'Fixed Charge Metal (Group 1, Group 2, Al³⁺, Zn²⁺, Ag⁺, Cd²⁺, or NH₄⁺)',
        nextId: 'ionic_fixed_outcome',
        description: 'No Roman numerals needed! Charge is always known.',
      },
      {
        label: 'Transition / Multivalent Metal (Fe, Cu, Pb, Sn, Co, Ni, Cr, Mn...)',
        nextId: 'ionic_variable_outcome',
        description: 'You MUST calculate the charge and write a Roman numeral in parentheses!',
      },
    ],
  },
  ionic_fixed_outcome: {
    id: 'ionic_fixed_outcome',
    type: 'outcome',
    title: 'Fixed Charge Ionic Naming Rule',
    badge: 'Rule: [Metal Name] + [Anion Name]',
    text: 'State the cation name directly, then state the anion name. NO Roman numerals, NO Greek prefixes!',
    explanation: 'Since the metal charge is invariant, scientists do not specify it in the name.',
    rules: [
      '1. Write the metal name as is (e.g., "Sodium", "Calcium", "Aluminum").',
      '2. If anion is a single element: change ending to "-ide" (e.g., Chlorine → Chloride).',
      '3. If anion is a polyatomic ion: keep its standard name (e.g., Nitrate, Sulfate, Hydroxide).',
      '4. NEVER use Greek prefixes (mono, di, tri)! CaCl₂ is "Calcium chloride", NEVER "Calcium dichloride".',
    ],
    examples: [
      { formula: 'NaCl', name: 'Sodium chloride', notes: 'Group 1 metal + single nonmetal (-ide)' },
      { formula: 'CaCl₂', name: 'Calcium chloride', notes: 'Group 2 metal. No "di-" prefix allowed!' },
      { formula: 'Al₂O₃', name: 'Aluminum oxide', notes: 'Al is always +3. No prefixes, no Roman numeral' },
      { formula: 'Ca(OH)₂', name: 'Calcium hydroxide', notes: 'Metal + polyatomic ion' },
      { formula: 'NH₄Cl', name: 'Ammonium chloride', notes: 'Ammonium acts as a fixed +1 cation' },
    ],
    trap: 'The #1 error high schoolers make: using prefixes like "calcium dichloride". Prefixes are forbidden for ionic compounds!',
  },
  ionic_variable_outcome: {
    id: 'ionic_variable_outcome',
    type: 'outcome',
    title: 'Transition Metal / Multivalent Rule (Roman Numerals)',
    badge: 'Rule: [Metal](Roman Numeral) + [Anion]',
    text: 'Calculate the cation charge from the known anion charges, then write it in Roman numerals inside parentheses.',
    explanation:
      'Because transition metals can form multiple charges (e.g., Fe²⁺ and Fe³⁺, Cu⁺ and Cu²⁺), the Roman numeral states the charge of the cation.',
    rules: [
      '1. Look up the known charge of the anion (e.g., Cl⁻ is -1, O²⁻ is -2, SO₄²⁻ is -2).',
      '2. Multiply anion charge by its subscript to find TOTAL negative charge.',
      '3. The cation must balance this to equal 0 neutral charge.',
      '4. Divide the total positive charge by the number of metal atoms to find the charge per metal cation.',
      '5. Convert this number to Roman numerals: +1=(I), +2=(II), +3=(III), +4=(IV), +5=(V), +6=(VI).',
    ],
    examples: [
      {
        formula: 'FeCl₃',
        name: 'Iron(III) chloride',
        notes: '3 × (-1) = -3. One Fe balances -3 → Fe is +3 → Iron(III)',
      },
      {
        formula: 'Fe₂O₃',
        name: 'Iron(III) oxide',
        notes: '3 × (-2) = -6. 2 Fe = +6 → each Fe is +3 → Iron(III)',
      },
      {
        formula: 'Cu₂O',
        name: 'Copper(I) oxide',
        notes: '1 × (-2) = -2. 2 Cu = +2 → each Cu is +1 → Copper(I)',
      },
      {
        formula: 'PbO₂',
        name: 'Lead(IV) oxide',
        notes: '2 × (-2) = -4. 1 Pb = +4 → Lead(IV), NOT Lead(II)!',
      },
      {
        formula: 'Fe₂(SO₄)₃',
        name: 'Iron(III) sulfate',
        notes: '3 sulfates = -6. 2 irons = +6 → Iron(III) sulfate',
      },
    ],
    trap: 'The Roman numeral is the CHARGE of the metal, NOT its subscript! In Cu₂O, the subscript is 2, but the copper charge is (I).',
  },

  // ================= COVALENT PATH =================
  covalent_rules: {
    id: 'covalent_rules',
    type: 'outcome',
    title: 'Binary Covalent Naming Rule (Greek Prefixes)',
    badge: 'Rule: [Prefix][Element 1] + [Prefix][Element 2]-ide',
    text: 'Use Greek prefixes to tell the reader exactly how many atoms of each element are present.',
    explanation:
      'Because nonmetals can share electrons in multiple combinations (e.g., CO and CO₂, SO₂ and SO₃), Greek prefixes specify the exact count.',
    rules: [
      '1. First element: add prefix for count, EXCEPT drop "mono-" if there is only 1 atom (e.g., CO is "Carbon...", not "Monocarbon").',
      '2. Second element: ALWAYS use a Greek prefix (even "mono-") + root + "-ide".',
      '3. Vowel drop: drop "a" or "o" at the end of a prefix before "oxide" (e.g., "monoxide", "tetroxide", "pentoxide", NOT "monooxide" or "tetraoxide").',
      '4. NEVER balance charges or use Roman numerals for covalent molecules!',
    ],
    examples: [
      { formula: 'CO₂', name: 'Carbon dioxide', notes: '1 C (drop mono-), 2 O (dioxide)' },
      { formula: 'CO', name: 'Carbon monoxide', notes: '1 C, 1 O (mono + oxide → monoxide)' },
      { formula: 'N₂O₄', name: 'Dinitrogen tetroxide', notes: '2 N (dinitrogen), 4 O (tetra drops "a" → tetroxide)' },
      { formula: 'PCl₅', name: 'Phosphorus pentachloride', notes: '1 P, 5 Cl (pentachloride)' },
      { formula: 'SF₆', name: 'Sulfur hexafluoride', notes: '1 S, 6 F (hexafluoride)' },
    ],
    trap: 'Never put "mono-" on the very first element (say "Carbon dioxide", not "Monocarbon dioxide").',
  },
};

export const NAME_TO_FORMULA_FLOW: Record<string, FlowNode> = {
  root_name: {
    id: 'root_name',
    type: 'question',
    title: 'Step 1: Check the Compound Name',
    badge: 'Name Inspection',
    text: 'Read the compound name carefully. What words or clues do you see?',
    explanation:
      'The name immediately reveals the naming category: the word "acid", Greek prefixes (mono, di, tri), or metal names / Roman numerals.',
    options: [
      {
        label: 'Contains the word "acid" (e.g., Hydrochloric acid, Nitric acid)',
        nextId: 'name_acid_branch',
        description: 'Indicates an acid formula starting with H⁺.',
      },
      {
        label: 'Contains Greek prefixes (e.g., Dinitrogen tetroxide, Carbon dioxide)',
        nextId: 'name_covalent_branch',
        description: 'Indicates a binary covalent compound where prefixes give subscripts directly!',
      },
      {
        label: 'Starts with a Metal or Ammonium (e.g., Iron(III) chloride, Sodium sulfate)',
        nextId: 'name_ionic_branch',
        description: 'Indicates an ionic compound: you must find ion charges and balance to neutral!',
      },
    ],
  },

  name_acid_branch: {
    id: 'name_acid_branch',
    type: 'question',
    title: 'Step 2: Does the Name Start with "Hydro-"?',
    badge: 'Acid Formula',
    text: 'Inspect the beginning of the acid name. Does it begin with the prefix "hydro-"?',
    explanation:
      '"Hydro-" indicates a binary acid (no oxygen). Absence of "hydro-" means an oxyacid containing a polyatomic ion with oxygen.',
    options: [
      {
        label: 'YES, starts with "Hydro-" (e.g., Hydrochloric acid, Hydrosulfuric acid)',
        nextId: 'name_binary_acid_outcome',
        description: 'Binary acid: H⁺ combined with a single nonmetal ion.',
      },
      {
        label: 'NO "Hydro-" (e.g., Nitric acid, Sulfuric acid, Nitrous acid)',
        nextId: 'name_oxyacid_outcome',
        description: 'Oxyacid: H⁺ combined with a polyatomic oxyanion.',
      },
    ],
  },

  name_binary_acid_outcome: {
    id: 'name_binary_acid_outcome',
    type: 'outcome',
    title: 'Writing Binary Acid Formulas',
    badge: 'Rule: H⁺ + single nonmetal ion',
    text: 'Binary acids are formed by combining H⁺ ions with a single nonmetal anion until charges balance.',
    explanation:
      'Look at the root between "hydro-" and "-ic" to find the nonmetal and its charge from the periodic table.',
    rules: [
      '1. The cation is always H⁺ (charge +1).',
      '2. Identify the nonmetal: "chlor-" → Cl⁻ (-1), "brom-" → Br⁻ (-1), "sulfur-" → S²⁻ (-2).',
      '3. Balance the charges so the total charge is 0.',
    ],
    examples: [
      { formula: 'HCl', name: 'Hydrochloric acid', notes: 'H⁺ and Cl⁻ balance 1:1 → HCl' },
      { formula: 'HBr', name: 'Hydrobromic acid', notes: 'H⁺ and Br⁻ balance 1:1 → HBr' },
      { formula: 'H₂S', name: 'Hydrosulfuric acid', notes: 'Two H⁺ balance S²⁻ (-2) → H₂S' },
      { formula: 'HF', name: 'Hydrofluoric acid', notes: 'H⁺ and F⁻ balance 1:1 → HF' },
    ],
  },

  name_oxyacid_outcome: {
    id: 'name_oxyacid_outcome',
    type: 'outcome',
    title: 'Writing Oxyacid Formulas',
    badge: 'Rule: Reverse the mnemonic!',
    text: 'Reverse the mnemonics to recover the polyatomic ion, then balance with H⁺.',
    explanation:
      'Because there is NO "hydro-", this acid came from a polyatomic ion with oxygen.',
    rules: [
      '1. "-ic acid" came from "-ate" ion: Nitric → Nitrate (NO₃⁻), Sulfuric → Sulfate (SO₄²⁻), Phosphoric → Phosphate (PO₄³⁻).',
      '2. "-ous acid" came from "-ite" ion: Nitrous → Nitrite (NO₂⁻), Sulfurous → Sulfite (SO₃²⁻).',
      '3. Add enough H⁺ (+1 each) to balance the negative charge of the polyatomic ion.',
    ],
    examples: [
      { formula: 'HNO₃', name: 'Nitric acid', notes: 'Nitrate is NO₃⁻ (-1) → 1 H⁺ needed → HNO₃' },
      { formula: 'H₂SO₄', name: 'Sulfuric acid', notes: 'Sulfate is SO₄²⁻ (-2) → 2 H⁺ needed → H₂SO₄' },
      { formula: 'HNO₂', name: 'Nitrous acid', notes: 'Nitrite is NO₂⁻ (-1) → 1 H⁺ needed → HNO₂' },
      { formula: 'H₃PO₄', name: 'Phosphoric acid', notes: 'Phosphate is PO₄³⁻ (-3) → 3 H⁺ needed → H₃PO₄' },
      { formula: 'HC₂H₃O₂', name: 'Acetic acid', notes: 'Acetate is C₂H₃O₂⁻ (-1) → HC₂H₃O₂' },
    ],
  },

  name_covalent_branch: {
    id: 'name_covalent_branch',
    type: 'outcome',
    title: 'Writing Binary Covalent Formulas',
    badge: 'Rule: Prefixes = Subscripts directly!',
    text: 'Covalent naming is the easiest direction: prefixes tell you the exact subscript numbers!',
    explanation:
      'NEVER balance charges or change subscripts for covalent compounds. The formula is literal based on prefixes.',
    rules: [
      '1. Translate the first prefix into the first subscript (no prefix means subscript is 1).',
      '2. Translate the second prefix into the second subscript.',
      '3. Subscript guide: mono=1, di=2, tri=3, tetra=4, penta=5, hexa=6, hepta=7, octa=8.',
    ],
    examples: [
      { formula: 'CO₂', name: 'Carbon dioxide', notes: '1 Carbon, 2 Oxygens → CO₂' },
      { formula: 'N₂O₄', name: 'Dinitrogen tetroxide', notes: '2 Nitrogens, 4 Oxygens → N₂O₄ (do not reduce to NO₂!)' },
      { formula: 'PCl₅', name: 'Phosphorus pentachloride', notes: '1 Phosphorus, 5 Chlorines → PCl₅' },
      { formula: 'Cl₂O₇', name: 'Dichlorine heptoxide', notes: '2 Chlorines, 7 Oxygens → Cl₂O₇' },
    ],
    trap: 'Never reduce subscripts in covalent compounds! Dinitrogen tetroxide is N₂O₄, not NO₂.',
  },

  name_ionic_branch: {
    id: 'name_ionic_branch',
    type: 'outcome',
    title: 'Writing Ionic Formulas (Balancing Charges to Net Zero)',
    badge: 'Rule: Total (+) charge = Total (-) charge (Sum = 0)',
    text: 'Identify the cation and anion charges, then determine the number of each ion needed so the compound has a net charge of zero.',
    explanation:
      'Always think about the charges: what combination of positive and negative ions adds up to zero?',
    rules: [
      '1. Identify Cation: If Roman numeral is given (e.g., Iron(III)), that IS the cation charge (Fe³⁺). If fixed metal, find charge from periodic table (Na⁺, Ca²⁺, Al³⁺).',
      '2. Identify Anion: Single element ends in -ide (e.g., oxide O²⁻). Polyatomic ion retains its specific formula and charge (e.g., sulfate SO₄²⁻).',
      '3. Think about the charges: What count of each ion makes total positive + total negative = 0?',
      '4. Charges already equal: +1 & -1 or +2 & -2 balance 1:1 (e.g., Na⁺ & Cl⁻ → NaCl, Ca²⁺ & O²⁻ → CaO).',
      '5. Different charges: Balance to zero (e.g., Fe³⁺ and O²⁻: two +3 ions (+6) balance three -2 ions (-6) → Fe₂O₃; Pb⁴⁺ and O²⁻: one +4 ion balances two -2 ions (-4) → PbO₂).',
      '6. Parentheses Rule: If a polyatomic ion has a subscript > 1, put parentheses around it (e.g., Ca(OH)₂, Fe₂(SO₄)₃). Never use parentheses for a single polyatomic ion (e.g., NaOH, CaCO₃).',
    ],
    examples: [
      { formula: 'NaCl', name: 'Sodium chloride', notes: 'Na⁺ (+1) and Cl⁻ (-1) balance 1:1 → NaCl' },
      { formula: 'Fe₂O₃', name: 'Iron(III) oxide', notes: 'Two Fe³⁺ (+6) balance three O²⁻ (-6) to equal 0 → Fe₂O₃' },
      { formula: 'Ca(OH)₂', name: 'Calcium hydroxide', notes: 'Ca²⁺ (+2) needs two OH⁻ (-2 total) to equal 0 → Ca(OH)₂' },
      { formula: 'PbO₂', name: 'Lead(IV) oxide', notes: 'One Pb⁴⁺ (+4) balances two O²⁻ (-4 total) to equal 0 → PbO₂' },
      { formula: 'Fe₂(SO₄)₃', name: 'Iron(III) sulfate', notes: 'Two Fe³⁺ (+6) balance three SO₄²⁻ (-6) to equal 0 → Fe₂(SO₄)₃' },
    ],
    trap: 'Remember: Only use parentheses around polyatomic ions when the subscript is 2 or more (e.g., Ca(OH)₂, but NaOH, not Na(OH)).',
  },
};
