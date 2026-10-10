import { PolyatomicIon, PrefixItem, MetalValence } from '../types/chemistry';

export const GREEK_PREFIXES: PrefixItem[] = [
  { number: 1, prefix: 'mono-', exampleFormula: 'CO', exampleName: 'Carbon monoxide (never monocarbon!)' },
  { number: 2, prefix: 'di-', exampleFormula: 'CO2', exampleName: 'Carbon dioxide' },
  { number: 3, prefix: 'tri-', exampleFormula: 'PCl3', exampleName: 'Phosphorus trichloride' },
  { number: 4, prefix: 'tetra-', exampleFormula: 'CCl4', exampleName: 'Carbon tetrachloride' },
  { number: 5, prefix: 'penta-', exampleFormula: 'PCl5', exampleName: 'Phosphorus pentachloride' },
  { number: 6, prefix: 'hexa-', exampleFormula: 'SF6', exampleName: 'Sulfur hexafluoride' },
  { number: 7, prefix: 'hepta-', exampleFormula: 'Cl2O7', exampleName: 'Dichlorine heptoxide' },
  { number: 8, prefix: 'octa-', exampleFormula: 'N2O8', exampleName: 'Dinitrogen octoxide' },
  { number: 9, prefix: 'nona-', exampleFormula: 'P4O9', exampleName: 'Tetraphosphorus nonoxide' },
  { number: 10, prefix: 'deca-', exampleFormula: 'P4O10', exampleName: 'Tetraphosphorus decoxide' },
];

export const POLYATOMIC_IONS: PolyatomicIon[] = [
  // Cations
  { formula: 'NH4⁺', name: 'Ammonium', charge: 1, chargeStr: '+1', family: 'Cation', notes: 'The only common polyatomic cation in high school!' },
  { formula: 'H3O⁺', name: 'Hydronium', charge: 1, chargeStr: '+1', family: 'Cation', notes: 'Hydrated hydrogen ion in acids' },

  // -1 Anions
  { formula: 'NO3⁻', name: 'Nitrate', charge: -1, chargeStr: '-1', family: 'Nitrogen family', notes: 'Base "-ate" ion for nitrogen' },
  { formula: 'NO2⁻', name: 'Nitrite', charge: -1, chargeStr: '-1', family: 'Nitrogen family', notes: 'One less oxygen than nitrate' },
  { formula: 'OH⁻', name: 'Hydroxide', charge: -1, chargeStr: '-1', family: 'Oxygen family', notes: 'Essential base ion' },
  { formula: 'C2H3O2⁻', name: 'Acetate', charge: -1, chargeStr: '-1', family: 'Carbon family', notes: 'Also written CH3COO⁻' },
  { formula: 'HCO3⁻', name: 'Hydrogen carbonate (Bicarbonate)', charge: -1, chargeStr: '-1', family: 'Carbon family', notes: 'Formed by adding H⁺ to CO3²⁻' },
  { formula: 'HSO4⁻', name: 'Hydrogen sulfate (Bisulfate)', charge: -1, chargeStr: '-1', family: 'Sulfur family', notes: 'Formed by adding H⁺ to SO4²⁻' },
  { formula: 'CN⁻', name: 'Cyanide', charge: -1, chargeStr: '-1', family: 'Carbon/Nitrogen', notes: 'Ends in -ide despite being polyatomic' },
  { formula: 'MnO4⁻', name: 'Permanganate', charge: -1, chargeStr: '-1', family: 'Manganese', notes: 'Deep purple ion' },

  // Chlorine Oxyanion Family (-1)
  { formula: 'ClO4⁻', name: 'Perchlorate', charge: -1, chargeStr: '-1', family: 'Halogen oxyanion', notes: '1 more oxygen than chlorate ("per-" = above)' },
  { formula: 'ClO3⁻', name: 'Chlorate', charge: -1, chargeStr: '-1', family: 'Halogen oxyanion', notes: 'Standard "-ate" ion' },
  { formula: 'ClO2⁻', name: 'Chlorite', charge: -1, chargeStr: '-1', family: 'Halogen oxyanion', notes: '1 less oxygen than chlorate' },
  { formula: 'ClO⁻', name: 'Hypochlorite', charge: -1, chargeStr: '-1', family: 'Halogen oxyanion', notes: '2 fewer oxygens than chlorate ("hypo-" = below)' },

  // Other Common -1 Anions
  { formula: 'SCN⁻', name: 'Thiocyanate', charge: -1, chargeStr: '-1', family: 'Sulfur/Carbon/Nitrogen', notes: 'Common in coordination chemistry' },
  { formula: 'BrO3⁻', name: 'Bromate', charge: -1, chargeStr: '-1', family: 'Halogen oxyanion', notes: 'Analogous to chlorate' },
  { formula: 'IO3⁻', name: 'Iodate', charge: -1, chargeStr: '-1', family: 'Halogen oxyanion', notes: 'Analogous to chlorate' },
  { formula: 'H2PO4⁻', name: 'Dihydrogen phosphate', charge: -1, chargeStr: '-1', family: 'Phosphorus family', notes: 'Two H⁺ added to PO4³⁻' },
  { formula: 'HSO3⁻', name: 'Hydrogen sulfite (Bisulfite)', charge: -1, chargeStr: '-1', family: 'Sulfur family', notes: 'One H⁺ added to SO3²⁻' },

  // -2 Anions
  { formula: 'SO4²⁻', name: 'Sulfate', charge: -2, chargeStr: '-2', family: 'Sulfur family', notes: 'Standard "-ate" ion for sulfur' },
  { formula: 'SO3²⁻', name: 'Sulfite', charge: -2, chargeStr: '-2', family: 'Sulfur family', notes: 'One less oxygen than sulfate' },
  { formula: 'CO3²⁻', name: 'Carbonate', charge: -2, chargeStr: '-2', family: 'Carbon family', notes: 'Forms chalk, limestone' },
  { formula: 'CrO4²⁻', name: 'Chromate', charge: -2, chargeStr: '-2', family: 'Chromium', notes: 'Bright yellow ion' },
  { formula: 'Cr2O7²⁻', name: 'Dichromate', charge: -2, chargeStr: '-2', family: 'Chromium', notes: 'Orange ion with two chromiums' },
  { formula: 'C2O4²⁻', name: 'Oxalate', charge: -2, chargeStr: '-2', family: 'Carbon family', notes: 'Found in rust removers, spinach' },
  { formula: 'HPO4²⁻', name: 'Hydrogen phosphate', charge: -2, chargeStr: '-2', family: 'Phosphorus family', notes: 'One H⁺ added to PO4³⁻' },
  { formula: 'O2²⁻', name: 'Peroxide', charge: -2, chargeStr: '-2', family: 'Oxygen family', notes: 'Found in H2O2, Na2O2' },

  // -3 Anions
  { formula: 'PO4³⁻', name: 'Phosphate', charge: -3, chargeStr: '-3', family: 'Phosphorus family', notes: 'Standard "-ate" ion for phosphorus' },
  { formula: 'PO3³⁻', name: 'Phosphite', charge: -3, chargeStr: '-3', family: 'Phosphorus family', notes: 'One less oxygen than phosphate' },
];

export const MULTIVALENT_METALS: MetalValence[] = [
  { symbol: 'Fe', name: 'Iron', commonCharges: [2, 3], examples: ['FeCl2: Iron(II) chloride', 'FeCl3: Iron(III) chloride', 'Fe2O3: Iron(III) oxide'] },
  { symbol: 'Cu', name: 'Copper', commonCharges: [1, 2], examples: ['Cu2O: Copper(I) oxide', 'CuO: Copper(II) oxide', 'CuSO4: Copper(II) sulfate'] },
  { symbol: 'Pb', name: 'Lead', commonCharges: [2, 4], examples: ['PbCl2: Lead(II) chloride', 'PbO2: Lead(IV) oxide', 'Pb(NO3)2: Lead(II) nitrate'] },
  { symbol: 'Sn', name: 'Tin', commonCharges: [2, 4], examples: ['SnF2: Tin(II) fluoride', 'SnO2: Tin(IV) oxide', 'SnCl4: Tin(IV) chloride'] },
  { symbol: 'Co', name: 'Cobalt', commonCharges: [2, 3], examples: ['CoCl2: Cobalt(II) chloride', 'Co2O3: Cobalt(III) oxide'] },
  { symbol: 'Ni', name: 'Nickel', commonCharges: [2, 3], examples: ['NiCl2: Nickel(II) chloride', 'NiO: Nickel(II) oxide'] },
  { symbol: 'Cr', name: 'Chromium', commonCharges: [2, 3, 6], examples: ['Cr2O3: Chromium(III) oxide', 'CrCl3: Chromium(III) chloride'] },
  { symbol: 'Mn', name: 'Manganese', commonCharges: [2, 4, 7], examples: ['MnO2: Manganese(IV) oxide', 'MnCl2: Manganese(II) chloride'] },
];

export const FIXED_CHARGE_METALS = [
  { group: 'Group 1 (Alkali Metals)', charge: '+1', elements: 'Li, Na, K, Rb, Cs', note: 'Never use Roman numerals!' },
  { group: 'Group 2 (Alkaline Earth)', charge: '+2', elements: 'Be, Mg, Ca, Sr, Ba', note: 'Never use Roman numerals!' },
  { group: 'Aluminum (Al)', charge: '+3', elements: 'Al', note: 'Always +3' },
  { group: 'Zinc (Zn)', charge: '+2', elements: 'Zn', note: 'Always +2 (no Roman numeral needed in HS chem)' },
  { group: 'Silver (Ag)', charge: '+1', elements: 'Ag', note: 'Always +1 (no Roman numeral needed in HS chem)' },
  { group: 'Cadmium (Cd)', charge: '+2', elements: 'Cd', note: 'Always +2' },
];

export const ACID_MNEMONICS = [
  {
    rule: 'Anion ends in -ide (Binary Acids, no Oxygen)',
    pattern: 'hydro- + [root] + -ic acid',
    example: 'Chloride (Cl⁻) → Hydrochloric acid (HCl)',
    mnemonic: 'My RIDE has HYDRO-l-ICs',
  },
  {
    rule: 'Polyatomic anion ends in -ate (Oxyacid with more O)',
    pattern: '[root] + -ic acid (NO hydro!)',
    example: 'Nitrate (NO3⁻) → Nitric acid (HNO3)',
    mnemonic: 'I ATE something IC-ky!',
  },
  {
    rule: 'Polyatomic anion ends in -ite (Oxyacid with fewer O)',
    pattern: '[root] + -ous acid (NO hydro!)',
    example: 'Nitrite (NO2⁻) → Nitrous acid (HNO2)',
    mnemonic: 'Spr-ITE is delici-OUS!',
  },
];
