import { Compound } from '../types/chemistry';

// ========================================================
// POOL A: DEDICATED TO COVALENT MODULE PRACTICE
// (Diverse nonmetals & varied subscripts 1 to 10)
// ========================================================
export const COVALENT_MODULE_COMPOUNDS: Compound[] = [
  {
    "id": "cov-co",
    "formula": "CO",
    "name": "Carbon monoxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "C",
      "O"
    ],
    "stepByStepExplanation": [
      "Two nonmetals (C and O) → Binary Covalent.",
      "First element: 1 Carbon → \"Carbon\" (omit mono- on the first element).",
      "Second element: 1 Oxygen → \"monoxide\" (mono- drops \"o\" before oxide).",
      "Result: \"Carbon monoxide\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element (no mono-)",
      "mono- drops \"o\" before oxide"
    ],
    "hint": "Drop mono- on the first element. Merge vowels: mono + oxide = monoxide."
  },
  {
    "id": "cov-co2",
    "formula": "CO2",
    "name": "Carbon dioxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "C",
      "O"
    ],
    "stepByStepExplanation": [
      "Two nonmetals (C and O) → Binary Covalent.",
      "1 Carbon → \"Carbon\" (omit mono-).",
      "2 Oxygens → \"di-\" + \"oxide\" → \"dioxide\".",
      "Result: \"Carbon dioxide\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "di- for 2"
    ],
    "hint": "1 Carbon, 2 Oxygens = carbon dioxide."
  },
  {
    "id": "cov-cs2",
    "formula": "CS2",
    "name": "Carbon disulfide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "C",
      "S"
    ],
    "stepByStepExplanation": [
      "1 Carbon → \"Carbon\".",
      "2 Sulfurs → \"disulfide\".",
      "Result: \"Carbon disulfide\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "di- for 2"
    ],
    "hint": "Carbon + 2 sulfurs = carbon disulfide."
  },
  {
    "id": "cov-ccl4",
    "formula": "CCl4",
    "name": "Carbon tetrachloride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "C",
      "Cl"
    ],
    "stepByStepExplanation": [
      "1 Carbon → \"Carbon\".",
      "4 Chlorines → \"tetrachloride\".",
      "Result: \"Carbon tetrachloride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "tetra- for 4"
    ],
    "hint": "Prefix for 4 is tetra-: carbon tetrachloride."
  },
  {
    "id": "cov-cf4",
    "formula": "CF4",
    "name": "Carbon tetrafluoride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "C",
      "F"
    ],
    "stepByStepExplanation": [
      "1 Carbon → \"Carbon\".",
      "4 Fluorines → \"tetrafluoride\".",
      "Result: \"Carbon tetrafluoride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "tetra- for 4"
    ],
    "hint": "4 fluorines = tetrafluoride."
  },
  {
    "id": "cov-no",
    "formula": "NO",
    "name": "Nitrogen monoxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "N",
      "O"
    ],
    "stepByStepExplanation": [
      "1 Nitrogen → \"Nitrogen\" (omit mono-).",
      "1 Oxygen → \"monoxide\".",
      "Result: \"Nitrogen monoxide\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "Omit mono- on first",
      "monoxide"
    ],
    "hint": "1 N and 1 O = nitrogen monoxide."
  },
  {
    "id": "cov-no2",
    "formula": "NO2",
    "name": "Nitrogen dioxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "N",
      "O"
    ],
    "stepByStepExplanation": [
      "1 Nitrogen → \"Nitrogen\".",
      "2 Oxygens → \"dioxide\".",
      "Result: \"Nitrogen dioxide\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "Omit mono- on first",
      "di- for 2"
    ],
    "hint": "1 N and 2 O = nitrogen dioxide."
  },
  {
    "id": "cov-n2o",
    "formula": "N2O",
    "name": "Dinitrogen monoxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "N",
      "O"
    ],
    "stepByStepExplanation": [
      "2 Nitrogens → \"Dinitrogen\".",
      "1 Oxygen → \"monoxide\".",
      "Result: \"Dinitrogen monoxide\" (laughing gas)."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "di- for 2",
      "monoxide for 1"
    ],
    "hint": "2 N = dinitrogen; 1 O = monoxide."
  },
  {
    "id": "cov-n2o3",
    "formula": "N2O3",
    "name": "Dinitrogen trioxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "N",
      "O"
    ],
    "stepByStepExplanation": [
      "2 Nitrogens → \"Dinitrogen\".",
      "3 Oxygens → \"trioxide\".",
      "Result: \"Dinitrogen trioxide\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "di- for 2",
      "tri- for 3"
    ],
    "hint": "2 N = dinitrogen; 3 O = trioxide."
  },
  {
    "id": "cov-nf3",
    "formula": "NF3",
    "name": "Nitrogen trifluoride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "N",
      "F"
    ],
    "stepByStepExplanation": [
      "1 Nitrogen → \"Nitrogen\".",
      "3 Fluorines → \"trifluoride\".",
      "Result: \"Nitrogen trifluoride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "tri- for 3"
    ],
    "hint": "1 N and 3 F = nitrogen trifluoride."
  },
  {
    "id": "cov-ncl3",
    "formula": "NCl3",
    "name": "Nitrogen trichloride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "N",
      "Cl"
    ],
    "stepByStepExplanation": [
      "1 Nitrogen → \"Nitrogen\".",
      "3 Chlorines → \"trichloride\".",
      "Result: \"Nitrogen trichloride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "tri- for 3"
    ],
    "hint": "1 N and 3 Cl = nitrogen trichloride."
  },
  {
    "id": "cov-pcl3",
    "formula": "PCl3",
    "name": "Phosphorus trichloride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "P",
      "Cl"
    ],
    "stepByStepExplanation": [
      "1 Phosphorus → \"Phosphorus\".",
      "3 Chlorines → \"trichloride\".",
      "Result: \"Phosphorus trichloride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "tri- for 3"
    ],
    "hint": "1 P and 3 Cl = phosphorus trichloride."
  },
  {
    "id": "cov-pcl5",
    "formula": "PCl5",
    "name": "Phosphorus pentachloride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "P",
      "Cl"
    ],
    "stepByStepExplanation": [
      "1 Phosphorus → \"Phosphorus\".",
      "5 Chlorines → \"pentachloride\".",
      "Result: \"Phosphorus pentachloride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "penta- for 5"
    ],
    "hint": "Keep \"a\" before consonant: pentachloride."
  },
  {
    "id": "cov-pbr3",
    "formula": "PBr3",
    "name": "Phosphorus tribromide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "P",
      "Br"
    ],
    "stepByStepExplanation": [
      "1 Phosphorus → \"Phosphorus\".",
      "3 Bromines → \"tribromide\".",
      "Result: \"Phosphorus tribromide\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "tri- for 3"
    ],
    "hint": "1 P and 3 Br = phosphorus tribromide."
  },
  {
    "id": "cov-pi3",
    "formula": "PI3",
    "name": "Phosphorus triiodide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "P",
      "I"
    ],
    "stepByStepExplanation": [
      "1 Phosphorus → \"Phosphorus\".",
      "3 Iodines → \"triiodide\".",
      "Result: \"Phosphorus triiodide\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "tri- for 3"
    ],
    "hint": "Phosphorus + 3 iodines = phosphorus triiodide."
  },
  {
    "id": "cov-so2",
    "formula": "SO2",
    "name": "Sulfur dioxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "S",
      "O"
    ],
    "stepByStepExplanation": [
      "1 Sulfur → \"Sulfur\".",
      "2 Oxygens → \"dioxide\".",
      "Result: \"Sulfur dioxide\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "di- for 2"
    ],
    "hint": "1 S and 2 O = sulfur dioxide."
  },
  {
    "id": "cov-so3",
    "formula": "SO3",
    "name": "Sulfur trioxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "S",
      "O"
    ],
    "stepByStepExplanation": [
      "1 Sulfur → \"Sulfur\".",
      "3 Oxygens → \"trioxide\".",
      "Result: \"Sulfur trioxide\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "tri- for 3"
    ],
    "hint": "1 S and 3 O = sulfur trioxide."
  },
  {
    "id": "cov-sf4",
    "formula": "SF4",
    "name": "Sulfur tetrafluoride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "S",
      "F"
    ],
    "stepByStepExplanation": [
      "1 Sulfur → \"Sulfur\".",
      "4 Fluorines → \"tetrafluoride\".",
      "Result: \"Sulfur tetrafluoride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "tetra- for 4"
    ],
    "hint": "1 S and 4 F = sulfur tetrafluoride."
  },
  {
    "id": "cov-cl2o",
    "formula": "Cl2O",
    "name": "Dichlorine monoxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "Cl",
      "O"
    ],
    "stepByStepExplanation": [
      "2 Chlorines → \"Dichlorine\".",
      "1 Oxygen → \"monoxide\".",
      "Result: \"Dichlorine monoxide\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "di- for 2",
      "monoxide for 1"
    ],
    "hint": "2 Cl = dichlorine, 1 O = monoxide."
  },
  {
    "id": "cov-xef2",
    "formula": "XeF2",
    "name": "Xenon difluoride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "Xe",
      "F"
    ],
    "stepByStepExplanation": [
      "1 Xenon → \"Xenon\".",
      "2 Fluorines → \"difluoride\".",
      "Result: \"Xenon difluoride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "di- for 2"
    ],
    "hint": "1 Xe and 2 F = xenon difluoride."
  },
  {
    "id": "cov-sicl4",
    "formula": "SiCl4",
    "name": "Silicon tetrachloride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "Si",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Silicon is a nonmetal/metalloid forming covalent bonds.",
      "1 Silicon → \"Silicon\" (omit mono-).",
      "4 Chlorines → \"tetrachloride\".",
      "Result: \"Silicon tetrachloride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "tetra- for 4"
    ],
    "hint": "Silicon + 4 chlorines = silicon tetrachloride."
  },
  {
    "id": "cov-sif4",
    "formula": "SiF4",
    "name": "Silicon tetrafluoride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "Si",
      "F"
    ],
    "stepByStepExplanation": [
      "1 Silicon → \"Silicon\".",
      "4 Fluorines → \"tetrafluoride\".",
      "Result: \"Silicon tetrafluoride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "tetra- for 4"
    ],
    "hint": "Silicon + 4 fluorines = silicon tetrafluoride."
  },
  {
    "id": "cov-bbr3",
    "formula": "BBr3",
    "name": "Boron tribromide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "B",
      "Br"
    ],
    "stepByStepExplanation": [
      "Boron is a metalloid acting as nonmetal here.",
      "1 Boron → \"Boron\".",
      "3 Bromines → \"tribromide\".",
      "Result: \"Boron tribromide\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "tri- for 3"
    ],
    "hint": "Boron + 3 bromines = boron tribromide."
  },
  {
    "id": "cov-secl4",
    "formula": "SeCl4",
    "name": "Selenium tetrachloride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "Se",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Selenium is in Group 16 (nonmetal).",
      "1 Selenium → \"Selenium\".",
      "4 Chlorines → \"tetrachloride\".",
      "Result: \"Selenium tetrachloride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "tetra- for 4"
    ],
    "hint": "Selenium + 4 chlorines = selenium tetrachloride."
  },
  {
    "id": "cov-teo2",
    "formula": "TeO2",
    "name": "Tellurium dioxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "Te",
      "O"
    ],
    "stepByStepExplanation": [
      "Tellurium is a metalloid in Group 16.",
      "1 Tellurium → \"Tellurium\".",
      "2 Oxygens → \"dioxide\".",
      "Result: \"Tellurium dioxide\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "di- for 2"
    ],
    "hint": "Tellurium + 2 oxygens = tellurium dioxide."
  },
  {
    "id": "cov-asf3",
    "formula": "AsF3",
    "name": "Arsenic trifluoride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "As",
      "F"
    ],
    "stepByStepExplanation": [
      "Arsenic is a metalloid acting nonmetallic.",
      "1 Arsenic → \"Arsenic\".",
      "3 Fluorines → \"trifluoride\".",
      "Result: \"Arsenic trifluoride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "tri- for 3"
    ],
    "hint": "Arsenic + 3 fluorines = arsenic trifluoride."
  },
  {
    "id": "cov-icl",
    "formula": "ICl",
    "name": "Iodine monochloride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "I",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Two halogens sharing electrons (interhalogen compound).",
      "1 Iodine → \"Iodine\" (omit mono- on first).",
      "1 Chlorine → \"monochloride\".",
      "Result: \"Iodine monochloride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "mono- for second"
    ],
    "hint": "1 Iodine and 1 Chlorine = iodine monochloride."
  },
  {
    "id": "cov-brcl",
    "formula": "BrCl",
    "name": "Bromine monochloride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "Br",
      "Cl"
    ],
    "stepByStepExplanation": [
      "1 Bromine → \"Bromine\".",
      "1 Chlorine → \"monochloride\".",
      "Result: \"Bromine monochloride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "mono- for second"
    ],
    "hint": "Bromine + 1 chlorine = bromine monochloride."
  },
  {
    "id": "cov-if5",
    "formula": "IF5",
    "name": "Iodine pentafluoride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "I",
      "F"
    ],
    "stepByStepExplanation": [
      "1 Iodine → \"Iodine\".",
      "5 Fluorines → \"pentafluoride\".",
      "Result: \"Iodine pentafluoride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "penta- for 5"
    ],
    "hint": "Iodine + 5 fluorines = iodine pentafluoride."
  },
  {
    "id": "cov-xef6",
    "formula": "XeF6",
    "name": "Xenon hexafluoride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "Xe",
      "F"
    ],
    "stepByStepExplanation": [
      "1 Xenon → \"Xenon\".",
      "6 Fluorines → \"hexafluoride\".",
      "Result: \"Xenon hexafluoride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only",
      "Binary Covalent",
      "First element unchanged",
      "hexa- for 6"
    ],
    "hint": "Xenon + 6 fluorines = xenon hexafluoride."
  }
];

// ========================================================
// POOL B: DEDICATED TO IONIC MODULE PRACTICE
// (Fixed, Variable Roman numerals, Polyatomics)
// Pedagogical focus: Think about charges directly (Sum = 0)
// ========================================================
export const IONIC_MODULE_COMPOUNDS: Compound[] = [
  {
    "id": "ion-fix-nacl",
    "formula": "NaCl",
    "name": "Sodium chloride",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Na⁺",
    "cationName": "Sodium",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Na",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Metal (Na) + nonmetal (Cl) → Ionic compound.",
      "Na is in Group 1: fixed +1 charge → \"Sodium\" (never use Roman numerals for Group 1).",
      "Cl is chloride (-ide).",
      "Charge balance: Na⁺ (+1) and Cl⁻ (-1) balance 1:1 to net 0 charge → NaCl.",
      "Result: \"Sodium chloride\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal",
      "Fixed Charge Metal (Group 1)",
      "Cation unchanged",
      "Anion ends in -ide"
    ],
    "hint": "Group 1 metal: no Roman numeral, no prefixes. +1 and -1 balance to zero."
  },
  {
    "id": "ion-fix-lif",
    "formula": "LiF",
    "name": "Lithium fluoride",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Li⁺",
    "cationName": "Lithium",
    "anion": "F⁻",
    "anionName": "Fluoride",
    "elements": [
      "Li",
      "F"
    ],
    "stepByStepExplanation": [
      "Lithium is Group 1 (Li⁺). Fluoride is F⁻ (-1).",
      "Charge balance: one Li⁺ (+1) and one F⁻ (-1) add to 0 net charge → LiF.",
      "Result: \"Lithium fluoride\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal",
      "Fixed Charge Metal (Group 1)",
      "Cation unchanged",
      "Anion ends in -ide"
    ],
    "hint": "Li⁺ (+1) and F⁻ (-1) balance to zero: lithium fluoride."
  },
  {
    "id": "ion-fix-kbr",
    "formula": "KBr",
    "name": "Potassium bromide",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "K⁺",
    "cationName": "Potassium",
    "anion": "Br⁻",
    "anionName": "Bromide",
    "elements": [
      "K",
      "Br"
    ],
    "stepByStepExplanation": [
      "Potassium is Group 1 (K⁺). Bromide is Br⁻ (-1).",
      "Charge balance: one K⁺ (+1) cancels one Br⁻ (-1) to 0 net charge → KBr.",
      "Result: \"Potassium bromide\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal",
      "Fixed Charge Metal (Group 1)",
      "Cation unchanged",
      "Anion ends in -ide"
    ],
    "hint": "K is +1, Br is -1: potassium bromide."
  },
  {
    "id": "ion-fix-na2o",
    "formula": "Na2O",
    "name": "Sodium oxide",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Na⁺",
    "cationName": "Sodium",
    "anion": "O²⁻",
    "anionName": "Oxide",
    "elements": [
      "Na",
      "O"
    ],
    "stepByStepExplanation": [
      "Sodium is Na⁺ (+1). Oxide is O²⁻ (-2).",
      "Charge balance: To balance the -2 charge of oxide, you need two Na⁺ ions (+1 each, totaling +2) to reach 0 net charge → Na2O.",
      "Never use prefixes (\"disodium monoxide\" is WRONG for ionic).",
      "Result: \"Sodium oxide\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal",
      "Fixed Charge Metal (Group 1)",
      "Cation unchanged",
      "Oxide"
    ],
    "hint": "Two +1 sodiums balance one -2 oxide to net zero: sodium oxide."
  },
  {
    "id": "ion-fix-k2s",
    "formula": "K2S",
    "name": "Potassium sulfide",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "K⁺",
    "cationName": "Potassium",
    "anion": "S²⁻",
    "anionName": "Sulfide",
    "elements": [
      "K",
      "S"
    ],
    "stepByStepExplanation": [
      "Potassium is K⁺ (+1). Sulfide is S²⁻ (-2).",
      "Charge balance: Two K⁺ (+2 total) are needed to balance one S²⁻ (-2) to 0 net charge → K2S.",
      "Result: \"Potassium sulfide\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal",
      "Fixed Charge Metal (Group 1)",
      "Cation unchanged",
      "Sulfide"
    ],
    "hint": "Two K⁺ balance S²⁻: potassium sulfide."
  },
  {
    "id": "ion-fix-li3n",
    "formula": "Li3N",
    "name": "Lithium nitride",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Li⁺",
    "cationName": "Lithium",
    "anion": "N³⁻",
    "anionName": "Nitride",
    "elements": [
      "Li",
      "N"
    ],
    "stepByStepExplanation": [
      "Lithium is Li⁺ (+1). Nitride is N³⁻ (-3).",
      "Charge balance: Three Li⁺ (+3 total) are needed to cancel one N³⁻ (-3) to 0 net charge → Li3N.",
      "Result: \"Lithium nitride\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal",
      "Fixed Charge Metal (Group 1)",
      "Nitride (-3)",
      "Lithium nitride"
    ],
    "hint": "Three +1 lithiums cancel one -3 nitride: lithium nitride."
  },
  {
    "id": "ion-fix-cacl2",
    "formula": "CaCl2",
    "name": "Calcium chloride",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Ca²⁺",
    "cationName": "Calcium",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Ca",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Calcium is in Group 2 (Ca²⁺, +2). Chloride is Cl⁻ (-1).",
      "Charge balance: One Ca²⁺ (+2) requires two Cl⁻ (-2 total) to equal 0 net charge → CaCl2.",
      "Result: \"Calcium chloride\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal",
      "Fixed Charge Metal (Group 2)",
      "Cation unchanged",
      "Chloride"
    ],
    "hint": "Ca is +2, so it needs two -1 chlorides: calcium chloride."
  },
  {
    "id": "ion-fix-mgbr2",
    "formula": "MgBr2",
    "name": "Magnesium bromide",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Mg²⁺",
    "cationName": "Magnesium",
    "anion": "Br⁻",
    "anionName": "Bromide",
    "elements": [
      "Mg",
      "Br"
    ],
    "stepByStepExplanation": [
      "Mg is Group 2 (Mg²⁺, +2). Bromide is Br⁻ (-1).",
      "Charge balance: One Mg²⁺ balances two Br⁻ to 0 net charge → MgBr2.",
      "Result: \"Magnesium bromide\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal",
      "Fixed Group 2",
      "Bromide",
      "Magnesium bromide"
    ],
    "hint": "Mg²⁺ (+2) balances two Br⁻ (-1): magnesium bromide."
  },
  {
    "id": "ion-fix-baf2",
    "formula": "BaF2",
    "name": "Barium fluoride",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Ba²⁺",
    "cationName": "Barium",
    "anion": "F⁻",
    "anionName": "Fluoride",
    "elements": [
      "Ba",
      "F"
    ],
    "stepByStepExplanation": [
      "Barium is Group 2 (Ba²⁺, +2). Fluoride is F⁻ (-1).",
      "Charge balance: One Ba²⁺ balances two F⁻ to 0 net charge → BaF2.",
      "Result: \"Barium fluoride\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal",
      "Fixed Group 2",
      "Fluoride",
      "Barium fluoride"
    ],
    "hint": "Ba is +2, F is -1: barium fluoride."
  },
  {
    "id": "ion-fix-mgo",
    "formula": "MgO",
    "name": "Magnesium oxide",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Mg²⁺",
    "cationName": "Magnesium",
    "anion": "O²⁻",
    "anionName": "Oxide",
    "elements": [
      "Mg",
      "O"
    ],
    "stepByStepExplanation": [
      "Magnesium is Mg²⁺ (+2). Oxide is O²⁻ (-2).",
      "Charge balance: +2 and -2 already cancel out 1:1 to 0 net charge → formula is MgO.",
      "Result: \"Magnesium oxide\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal",
      "Fixed Group 2",
      "1:1 ratio cancels out",
      "Magnesium oxide"
    ],
    "hint": "+2 and -2 already balance 1:1 to zero: magnesium oxide."
  },
  {
    "id": "ion-fix-zns",
    "formula": "ZnS",
    "name": "Zinc sulfide",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Zn²⁺",
    "cationName": "Zinc",
    "anion": "S²⁻",
    "anionName": "Sulfide",
    "elements": [
      "Zn",
      "S"
    ],
    "stepByStepExplanation": [
      "Zinc is always +2 (Zn²⁺). Sulfide is S²⁻ (-2).",
      "Charge balance: +2 and -2 balance 1:1 to 0 net charge → ZnS.",
      "Result: \"Zinc sulfide\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal",
      "Fixed Metal (Zn is +2)",
      "Sulfide",
      "Zinc sulfide"
    ],
    "hint": "Zinc is always +2 (no Roman numeral needed): zinc sulfide."
  },
  {
    "id": "ion-fix-mg3n2",
    "formula": "Mg3N2",
    "name": "Magnesium nitride",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Mg²⁺",
    "cationName": "Magnesium",
    "anion": "N³⁻",
    "anionName": "Nitride",
    "elements": [
      "Mg",
      "N"
    ],
    "stepByStepExplanation": [
      "Magnesium is Mg²⁺ (+2). Nitride is N³⁻ (-3).",
      "Charge balance: Three Mg²⁺ (+6 total) balance two N³⁻ (-6 total) to equal 0 net charge → Mg3N2.",
      "Result: \"Magnesium nitride\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal",
      "Fixed Group 2",
      "3(+2) + 2(-3) = 0",
      "Magnesium nitride"
    ],
    "hint": "Three +2 magnesiums (+6) balance two -3 nitrides (-6): magnesium nitride."
  },
  {
    "id": "ion-fix-alcl3",
    "formula": "AlCl3",
    "name": "Aluminum chloride",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Al³⁺",
    "cationName": "Aluminum",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Al",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Aluminum is fixed +3 (Al³⁺). Chloride is Cl⁻ (-1).",
      "Charge balance: One Al³⁺ (+3) requires three Cl⁻ (-3 total) to cancel to 0 net charge → AlCl3.",
      "Result: \"Aluminum chloride\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal",
      "Aluminum is fixed +3",
      "Chloride",
      "Aluminum chloride"
    ],
    "hint": "One Al³⁺ (+3) requires three Cl⁻ (-1): aluminum chloride."
  },
  {
    "id": "ion-fix-aln",
    "formula": "AlN",
    "name": "Aluminum nitride",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Al³⁺",
    "cationName": "Aluminum",
    "anion": "N³⁻",
    "anionName": "Nitride",
    "elements": [
      "Al",
      "N"
    ],
    "stepByStepExplanation": [
      "Aluminum is Al³⁺ (+3). Nitride is N³⁻ (-3).",
      "Charge balance: +3 and -3 balance 1:1 to 0 net charge → AlN.",
      "Result: \"Aluminum nitride\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal",
      "Fixed Metal",
      "+3 and -3 balance 1:1",
      "Aluminum nitride"
    ],
    "hint": "+3 and -3 already cancel out 1:1 to zero: aluminum nitride."
  },
  {
    "id": "ion-fix-srf2",
    "formula": "SrF2",
    "name": "Strontium fluoride",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Sr²⁺",
    "cationName": "Strontium",
    "anion": "F⁻",
    "anionName": "Fluoride",
    "elements": [
      "Sr",
      "F"
    ],
    "stepByStepExplanation": [
      "Strontium is in Group 2 (Sr²⁺, +2). Fluoride is F⁻ (-1).",
      "Charge balance: One Sr²⁺ balances two F⁻ to 0 net charge → SrF2.",
      "Result: \"Strontium fluoride\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal",
      "Fixed Group 2",
      "Fluoride",
      "Strontium fluoride"
    ],
    "hint": "Sr is in Group 2 (+2), F is -1: strontium fluoride."
  },
  {
    "id": "ion-fix-csbr",
    "formula": "CsBr",
    "name": "Cesium bromide",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Cs⁺",
    "cationName": "Cesium",
    "anion": "Br⁻",
    "anionName": "Bromide",
    "elements": [
      "Cs",
      "Br"
    ],
    "stepByStepExplanation": [
      "Cesium is Group 1 alkali metal (Cs⁺, +1). Bromide is Br⁻ (-1).",
      "Charge balance: +1 and -1 balance 1:1 to 0 net charge → CsBr.",
      "Result: \"Cesium bromide\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal",
      "Fixed Group 1",
      "Bromide",
      "Cesium bromide"
    ],
    "hint": "Cs (+1) and Br (-1) balance 1:1: cesium bromide."
  },
  {
    "id": "ion-fix-becl2",
    "formula": "BeCl2",
    "name": "Beryllium chloride",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Be²⁺",
    "cationName": "Beryllium",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Be",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Beryllium is in Group 2 (Be²⁺, +2). Chloride is Cl⁻ (-1).",
      "Charge balance: One Be²⁺ (+2) balances two Cl⁻ (-2 total) to 0 net charge → BeCl2.",
      "Result: \"Beryllium chloride\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal",
      "Fixed Group 2",
      "Chloride",
      "Beryllium chloride"
    ],
    "hint": "Be is Group 2 (+2), Cl is -1: beryllium chloride."
  },
  {
    "id": "ion-fix-agbr",
    "formula": "AgBr",
    "name": "Silver bromide",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Ag⁺",
    "cationName": "Silver",
    "anion": "Br⁻",
    "anionName": "Bromide",
    "elements": [
      "Ag",
      "Br"
    ],
    "stepByStepExplanation": [
      "Silver is fixed +1 in standard nomenclature (Ag⁺). Bromide is Br⁻ (-1).",
      "Charge balance: +1 and -1 balance 1:1 → AgBr.",
      "Result: \"Silver bromide\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal",
      "Fixed charge metal (Ag is +1)",
      "Bromide",
      "Silver bromide"
    ],
    "hint": "Silver is always +1: silver bromide."
  },
  {
    "id": "ion-tran-fecl2",
    "formula": "FeCl2",
    "name": "Iron(II) chloride",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Fe²⁺",
    "cationName": "Iron(II)",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Fe",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Iron is a transition metal with multiple charges (+2 or +3).",
      "Determine iron charge from anion: Two Cl⁻ (-1 each) = -2 total negative.",
      "Iron must be +2 to balance -2 to 0 net charge → Fe²⁺ → \"Iron(II)\".",
      "Result: \"Iron(II) chloride\"."
    ],
    "flowchartPath": [
      "Transition Metal",
      "Two Cl⁻ = -2 → Fe is +2",
      "Roman Numeral (II)",
      "Iron(II) chloride"
    ],
    "hint": "Two Cl⁻ = -2 negative, so Fe must be +2: iron(II) chloride."
  },
  {
    "id": "ion-tran-fecl3",
    "formula": "FeCl3",
    "name": "Iron(III) chloride",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Fe³⁺",
    "cationName": "Iron(III)",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Fe",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Three Cl⁻ (-1 each) = -3 total negative.",
      "Iron must be +3 to balance -3 to 0 net charge → Fe³⁺ → \"Iron(III)\".",
      "Result: \"Iron(III) chloride\"."
    ],
    "flowchartPath": [
      "Transition Metal",
      "Three Cl⁻ = -3 → Fe is +3",
      "Roman Numeral (III)",
      "Iron(III) chloride"
    ],
    "hint": "Three Cl⁻ = -3, so Fe is +3: iron(III) chloride."
  },
  {
    "id": "ion-tran-feo",
    "formula": "FeO",
    "name": "Iron(II) oxide",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Fe²⁺",
    "cationName": "Iron(II)",
    "anion": "O²⁻",
    "anionName": "Oxide",
    "elements": [
      "Fe",
      "O"
    ],
    "stepByStepExplanation": [
      "Oxide is O²⁻ (-2).",
      "In a 1:1 ratio with oxide, the iron atom must be +2 to equal 0 net charge → Fe²⁺ → \"Iron(II)\".",
      "Result: \"Iron(II) oxide\"."
    ],
    "flowchartPath": [
      "Transition Metal",
      "1:1 ratio with O²⁻ → Fe is +2",
      "Roman Numeral (II)",
      "Iron(II) oxide"
    ],
    "hint": "One O²⁻ is -2, so 1 Fe must be +2: iron(II) oxide."
  },
  {
    "id": "ion-tran-cucl",
    "formula": "CuCl",
    "name": "Copper(I) chloride",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Cu⁺",
    "cationName": "Copper(I)",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Cu",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Copper can be +1 or +2.",
      "One Cl⁻ is -1. Therefore, Copper must be +1 to balance to 0 net charge → Cu⁺ → \"Copper(I)\".",
      "Result: \"Copper(I) chloride\"."
    ],
    "flowchartPath": [
      "Transition Metal",
      "1 Cl⁻ = -1 → Cu is +1",
      "Roman Numeral (I)",
      "Copper(I) chloride"
    ],
    "hint": "One Cl⁻ is -1, so Cu is +1: copper(I) chloride."
  },
  {
    "id": "ion-tran-cucl2",
    "formula": "CuCl2",
    "name": "Copper(II) chloride",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Cu²⁺",
    "cationName": "Copper(II)",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Cu",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Two Cl⁻ (-1 each) = -2 total.",
      "Copper must be +2 to balance -2 to 0 net charge → Cu²⁺ → \"Copper(II)\".",
      "Result: \"Copper(II) chloride\"."
    ],
    "flowchartPath": [
      "Transition Metal",
      "2 Cl⁻ = -2 → Cu is +2",
      "Roman Numeral (II)",
      "Copper(II) chloride"
    ],
    "hint": "Two Cl⁻ = -2, so copper is +2: copper(II) chloride."
  },
  {
    "id": "ion-tran-pbcl2",
    "formula": "PbCl2",
    "name": "Lead(II) chloride",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Pb²⁺",
    "cationName": "Lead(II)",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Pb",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Lead (Pb) can be +2 or +4.",
      "Two Cl⁻ (-1 each) = -2 total negative.",
      "Lead must be +2 to cancel -2 to 0 net charge → Pb²⁺ → \"Lead(II)\".",
      "Result: \"Lead(II) chloride\"."
    ],
    "flowchartPath": [
      "Variable Charge Metal",
      "2 Cl⁻ = -2 → Pb is +2",
      "Roman Numeral (II)",
      "Lead(II) chloride"
    ],
    "hint": "Two Cl⁻ = -2, so lead is +2: lead(II) chloride."
  },
  {
    "id": "ion-tran-pbo",
    "formula": "PbO",
    "name": "Lead(II) oxide",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Pb²⁺",
    "cationName": "Lead(II)",
    "anion": "O²⁻",
    "anionName": "Oxide",
    "elements": [
      "Pb",
      "O"
    ],
    "stepByStepExplanation": [
      "Oxide is O²⁻ (-2).",
      "In a 1:1 ratio, lead must be +2 to equal 0 net charge → Pb²⁺ → \"Lead(II)\".",
      "Result: \"Lead(II) oxide\"."
    ],
    "flowchartPath": [
      "Variable Charge Metal",
      "1:1 ratio with O²⁻ → Pb is +2",
      "Roman Numeral (II)",
      "Lead(II) oxide"
    ],
    "hint": "One oxide (-2) balances one lead (+2): lead(II) oxide."
  },
  {
    "id": "ion-tran-snf2",
    "formula": "SnF2",
    "name": "Tin(II) fluoride",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Sn²⁺",
    "cationName": "Tin(II)",
    "anion": "F⁻",
    "anionName": "Fluoride",
    "elements": [
      "Sn",
      "F"
    ],
    "stepByStepExplanation": [
      "Tin (Sn) can be +2 or +4.",
      "Two F⁻ (-1 each) = -2 total.",
      "Tin must be +2 to balance -2 to 0 net charge → Sn²⁺ → \"Tin(II)\".",
      "Result: \"Tin(II) fluoride\"."
    ],
    "flowchartPath": [
      "Variable Charge Metal",
      "2 F⁻ = -2 → Sn is +2",
      "Roman Numeral (II)",
      "Tin(II) fluoride"
    ],
    "hint": "Two fluorides (-2) mean tin is +2: tin(II) fluoride."
  },
  {
    "id": "ion-tran-cocl2",
    "formula": "CoCl2",
    "name": "Cobalt(II) chloride",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Co²⁺",
    "cationName": "Cobalt(II)",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Co",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Two Cl⁻ (-1 each) = -2 total.",
      "Cobalt must be +2 to balance to 0 net charge → Co²⁺ → \"Cobalt(II)\".",
      "Result: \"Cobalt(II) chloride\"."
    ],
    "flowchartPath": [
      "Transition Metal",
      "2 Cl⁻ = -2 → Co is +2",
      "Roman Numeral (II)",
      "Cobalt(II) chloride"
    ],
    "hint": "Two Cl⁻ = -2, so cobalt is +2: cobalt(II) chloride."
  },
  {
    "id": "ion-tran-nicl2",
    "formula": "NiCl2",
    "name": "Nickel(II) chloride",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Ni²⁺",
    "cationName": "Nickel(II)",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Ni",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Two Cl⁻ (-1 each) = -2 total negative.",
      "Nickel must be +2 to balance to 0 net charge → Ni²⁺ → \"Nickel(II)\".",
      "Result: \"Nickel(II) chloride\"."
    ],
    "flowchartPath": [
      "Transition Metal",
      "2 Cl⁻ = -2 → Ni is +2",
      "Roman Numeral (II)",
      "Nickel(II) chloride"
    ],
    "hint": "Two Cl⁻ = -2, so nickel is +2: nickel(II) chloride."
  },
  {
    "id": "ion-tran-crcl3",
    "formula": "CrCl3",
    "name": "Chromium(III) chloride",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Cr³⁺",
    "cationName": "Chromium(III)",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Cr",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Three Cl⁻ (-1 each) = -3 total negative.",
      "Chromium must be +3 to balance -3 to 0 net charge → Cr³⁺ → \"Chromium(III)\".",
      "Result: \"Chromium(III) chloride\"."
    ],
    "flowchartPath": [
      "Transition Metal",
      "3 Cl⁻ = -3 → Cr is +3",
      "Roman Numeral (III)",
      "Chromium(III) chloride"
    ],
    "hint": "Three Cl⁻ = -3, so chromium is +3: chromium(III) chloride."
  },
  {
    "id": "ion-tran-mncl2",
    "formula": "MnCl2",
    "name": "Manganese(II) chloride",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Mn²⁺",
    "cationName": "Manganese(II)",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Mn",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Two Cl⁻ (-1 each) = -2 total.",
      "Manganese must be +2 to balance to 0 net charge → Mn²⁺ → \"Manganese(II)\".",
      "Result: \"Manganese(II) chloride\"."
    ],
    "flowchartPath": [
      "Transition Metal",
      "2 Cl⁻ = -2 → Mn is +2",
      "Roman Numeral (II)",
      "Manganese(II) chloride"
    ],
    "hint": "Two Cl⁻ = -2, so manganese is +2: manganese(II) chloride."
  },
  {
    "id": "ion-tran-aucl",
    "formula": "AuCl",
    "name": "Gold(I) chloride",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Au⁺",
    "cationName": "Gold(I)",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Au",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Gold (Au) can have charges +1 or +3.",
      "One Cl⁻ is -1, so gold must be +1 to equal 0 net charge → Au⁺ → \"Gold(I)\".",
      "Result: \"Gold(I) chloride\"."
    ],
    "flowchartPath": [
      "Transition Metal",
      "1 Cl⁻ = -1 → Au is +1",
      "Roman Numeral (I)",
      "Gold(I) chloride"
    ],
    "hint": "One Cl⁻ is -1, so gold is +1: gold(I) chloride."
  },
  {
    "id": "ion-tran-ptcl2",
    "formula": "PtCl2",
    "name": "Platinum(II) chloride",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Pt²⁺",
    "cationName": "Platinum(II)",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Pt",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Platinum is a transition metal.",
      "Two Cl⁻ (-1 each) = -2 total. Platinum must be +2 to equal 0 net charge → Pt²⁺ → \"Platinum(II)\".",
      "Result: \"Platinum(II) chloride\"."
    ],
    "flowchartPath": [
      "Transition Metal",
      "2 Cl⁻ = -2 → Pt is +2",
      "Roman Numeral (II)",
      "Platinum(II) chloride"
    ],
    "hint": "Two chlorines (-2) mean platinum is +2: platinum(II) chloride."
  },
  {
    "id": "ion-poly-nano3",
    "formula": "NaNO3",
    "name": "Sodium nitrate",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Na⁺",
    "cationName": "Sodium",
    "anion": "NO3⁻",
    "anionName": "Nitrate",
    "elements": [
      "Na",
      "N",
      "O"
    ],
    "stepByStepExplanation": [
      "Na is Group 1 (Na⁺, +1). Nitrate is NO3⁻ (-1).",
      "Charge balance: +1 and -1 balance 1:1 to 0 net charge → NaNO3.",
      "Polyatomic names do NOT change their ending to -ide (keep \"nitrate\").",
      "Result: \"Sodium nitrate\"."
    ],
    "flowchartPath": [
      "Metal + Polyatomic",
      "Fixed Metal (Group 1)",
      "NO3⁻ is nitrate",
      "Sodium nitrate"
    ],
    "hint": "Na⁺ and nitrate NO3⁻ balance 1:1: sodium nitrate."
  },
  {
    "id": "ion-poly-nano2",
    "formula": "NaNO2",
    "name": "Sodium nitrite",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Na⁺",
    "cationName": "Sodium",
    "anion": "NO2⁻",
    "anionName": "Nitrite",
    "elements": [
      "Na",
      "N",
      "O"
    ],
    "stepByStepExplanation": [
      "Na⁺ is +1. NO2⁻ is nitrite (-1).",
      "Charge balance: 1:1 ratio equals 0 net charge → NaNO2.",
      "Result: \"Sodium nitrite\"."
    ],
    "flowchartPath": [
      "Metal + Polyatomic",
      "Fixed Metal",
      "NO2⁻ is nitrite",
      "Sodium nitrite"
    ],
    "hint": "NO2⁻ has one less oxygen than nitrate = nitrite: sodium nitrite."
  },
  {
    "id": "ion-poly-caco3",
    "formula": "CaCO3",
    "name": "Calcium carbonate",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Ca²⁺",
    "cationName": "Calcium",
    "anion": "CO3²⁻",
    "anionName": "Carbonate",
    "elements": [
      "Ca",
      "C",
      "O"
    ],
    "stepByStepExplanation": [
      "Calcium is Ca²⁺ (+2). Carbonate is CO3²⁻ (-2).",
      "Charge balance: +2 and -2 balance 1:1 to 0 net charge → formula is CaCO3 (NO parentheses when subscript is 1!).",
      "Result: \"Calcium carbonate\"."
    ],
    "flowchartPath": [
      "Metal + Polyatomic",
      "Fixed Group 2",
      "CO3²⁻ is carbonate",
      "Calcium carbonate"
    ],
    "hint": "Ca²⁺ (+2) and CO3²⁻ (-2) balance 1:1: calcium carbonate."
  },
  {
    "id": "ion-poly-caoh2",
    "formula": "Ca(OH)2",
    "name": "Calcium hydroxide",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Ca²⁺",
    "cationName": "Calcium",
    "anion": "OH⁻",
    "anionName": "Hydroxide",
    "elements": [
      "Ca",
      "O",
      "H"
    ],
    "stepByStepExplanation": [
      "Calcium is Ca²⁺ (+2). Hydroxide is OH⁻ (-1).",
      "Charge balance: One Ca²⁺ (+2) requires two OH⁻ (-2 total) to cancel to 0 net charge.",
      "Parentheses rule: Since we need two OH⁻, we write parentheses around the polyatomic ion: Ca(OH)2.",
      "Result: \"Calcium hydroxide\"."
    ],
    "flowchartPath": [
      "Metal + Polyatomic",
      "Fixed Group 2",
      "Two OH⁻ needed → (OH)2",
      "Calcium hydroxide"
    ],
    "hint": "Ca²⁺ needs two OH⁻: Ca(OH)2."
  },
  {
    "id": "ion-poly-naoh",
    "formula": "NaOH",
    "name": "Sodium hydroxide",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Na⁺",
    "cationName": "Sodium",
    "anion": "OH⁻",
    "anionName": "Hydroxide",
    "elements": [
      "Na",
      "O",
      "H"
    ],
    "stepByStepExplanation": [
      "Na⁺ is +1. OH⁻ is -1.",
      "Charge balance: +1 and -1 balance 1:1 to 0 net charge → NaOH.",
      "Never put parentheses when subscript is 1 (NaOH, not Na(OH)).",
      "Result: \"Sodium hydroxide\"."
    ],
    "flowchartPath": [
      "Metal + Polyatomic",
      "Fixed Metal",
      "OH⁻ is hydroxide",
      "Sodium hydroxide"
    ],
    "hint": "Na⁺ and OH⁻ balance 1:1 (no parentheses): sodium hydroxide."
  },
  {
    "id": "ion-poly-mgso4",
    "formula": "MgSO4",
    "name": "Magnesium sulfate",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Mg²⁺",
    "cationName": "Magnesium",
    "anion": "SO4²⁻",
    "anionName": "Sulfate",
    "elements": [
      "Mg",
      "S",
      "O"
    ],
    "stepByStepExplanation": [
      "Magnesium is Mg²⁺ (+2). Sulfate is SO4²⁻ (-2).",
      "Charge balance: +2 and -2 balance 1:1 to 0 net charge → formula is MgSO4.",
      "Result: \"Magnesium sulfate\" (Epsom salt)."
    ],
    "flowchartPath": [
      "Metal + Polyatomic",
      "Fixed Group 2",
      "SO4²⁻ is sulfate",
      "Magnesium sulfate"
    ],
    "hint": "+2 and -2 balance 1:1: magnesium sulfate."
  },
  {
    "id": "ion-poly-k3po4",
    "formula": "K3PO4",
    "name": "Potassium phosphate",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "K⁺",
    "cationName": "Potassium",
    "anion": "PO4³⁻",
    "anionName": "Phosphate",
    "elements": [
      "K",
      "P",
      "O"
    ],
    "stepByStepExplanation": [
      "Potassium is K⁺ (+1). Phosphate is PO4³⁻ (-3).",
      "Charge balance: Three K⁺ ions (+3 total) are needed to balance one PO4³⁻ (-3) to 0 net charge → K3PO4.",
      "Result: \"Potassium phosphate\"."
    ],
    "flowchartPath": [
      "Metal + Polyatomic",
      "Fixed Metal",
      "PO4³⁻ is phosphate",
      "Potassium phosphate"
    ],
    "hint": "Three +1 potassiums balance one -3 phosphate: potassium phosphate."
  },
  {
    "id": "ion-poly-alno33",
    "formula": "Al(NO3)3",
    "name": "Aluminum nitrate",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Al³⁺",
    "cationName": "Aluminum",
    "anion": "NO3⁻",
    "anionName": "Nitrate",
    "elements": [
      "Al",
      "N",
      "O"
    ],
    "stepByStepExplanation": [
      "Aluminum is Al³⁺ (+3). Nitrate is NO3⁻ (-1).",
      "Charge balance: One Al³⁺ (+3) requires three NO3⁻ (-3 total) to cancel to 0 net charge.",
      "Parentheses rule: Multiple nitrates require parentheses → Al(NO3)3.",
      "Result: \"Aluminum nitrate\"."
    ],
    "flowchartPath": [
      "Metal + Polyatomic",
      "Fixed Metal",
      "Parentheses around (NO3)3",
      "Aluminum nitrate"
    ],
    "hint": "Three nitrates (-1 each) balance Al³⁺ (+3): Al(NO3)3."
  },
  {
    "id": "ion-poly-baoh2",
    "formula": "Ba(OH)2",
    "name": "Barium hydroxide",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Ba²⁺",
    "cationName": "Barium",
    "anion": "OH⁻",
    "anionName": "Hydroxide",
    "elements": [
      "Ba",
      "O",
      "H"
    ],
    "stepByStepExplanation": [
      "Ba²⁺ (+2) requires two OH⁻ (-1 each) to cancel to 0 net charge.",
      "Parentheses rule: Ba(OH)2.",
      "Result: \"Barium hydroxide\"."
    ],
    "flowchartPath": [
      "Metal + Polyatomic",
      "Fixed Group 2",
      "Parentheses around (OH)2",
      "Barium hydroxide"
    ],
    "hint": "Two hydroxides balance Ba²⁺: Ba(OH)2."
  },
  {
    "id": "ion-poly-nh4cl",
    "formula": "NH4Cl",
    "name": "Ammonium chloride",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "NH4⁺",
    "cationName": "Ammonium",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "N",
      "H",
      "Cl"
    ],
    "stepByStepExplanation": [
      "NH4⁺ (ammonium) is the common polyatomic cation (+1). Chloride is Cl⁻ (-1).",
      "Charge balance: +1 and -1 balance 1:1 → NH4Cl.",
      "Result: \"Ammonium chloride\"."
    ],
    "flowchartPath": [
      "Contains NH4⁺",
      "Ionic Compound",
      "Anion ends in -ide",
      "Ammonium chloride"
    ],
    "hint": "NH4⁺ acts as a metal cation (+1): ammonium chloride."
  },
  {
    "id": "ion-poly-nh42so4",
    "formula": "(NH4)2SO4",
    "name": "Ammonium sulfate",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "NH4⁺",
    "cationName": "Ammonium",
    "anion": "SO4²⁻",
    "anionName": "Sulfate",
    "elements": [
      "N",
      "H",
      "S",
      "O"
    ],
    "stepByStepExplanation": [
      "NH4⁺ is +1. Sulfate is SO4²⁻ (-2).",
      "Charge balance: Two NH4⁺ (+2 total) are needed to balance one SO4²⁻ (-2) to 0 net charge.",
      "Parentheses rule: (NH4)2SO4.",
      "Result: \"Ammonium sulfate\"."
    ],
    "flowchartPath": [
      "Contains NH4⁺",
      "Polyatomic Cation & Anion",
      "Parentheses around (NH4)2",
      "Ammonium sulfate"
    ],
    "hint": "Two NH4⁺ balance one sulfate: (NH4)2SO4."
  },
  {
    "id": "ion-poly-nahco3",
    "formula": "NaHCO3",
    "name": "Sodium hydrogen carbonate",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Na⁺",
    "cationName": "Sodium",
    "anion": "HCO3⁻",
    "anionName": "Hydrogen carbonate (or Bicarbonate)",
    "elements": [
      "Na",
      "H",
      "C",
      "O"
    ],
    "stepByStepExplanation": [
      "Na⁺ (+1) and HCO3⁻ (-1) balance 1:1 to 0 net charge → NaHCO3.",
      "Result: \"Sodium hydrogen carbonate\" (baking soda)."
    ],
    "flowchartPath": [
      "Metal + Polyatomic",
      "Fixed Metal",
      "HCO3⁻ is hydrogen carbonate",
      "Sodium hydrogen carbonate"
    ],
    "hint": "Na⁺ and HCO3⁻ balance 1:1: sodium hydrogen carbonate."
  },
  {
    "id": "ion-poly-kmno4",
    "formula": "KMnO4",
    "name": "Potassium permanganate",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "K⁺",
    "cationName": "Potassium",
    "anion": "MnO4⁻",
    "anionName": "Permanganate",
    "elements": [
      "K",
      "Mn",
      "O"
    ],
    "stepByStepExplanation": [
      "K⁺ (+1) and MnO4⁻ (-1) balance 1:1 to 0 net charge → KMnO4.",
      "Result: \"Potassium permanganate\"."
    ],
    "flowchartPath": [
      "Metal + Polyatomic",
      "Fixed Metal",
      "MnO4⁻ is permanganate",
      "Potassium permanganate"
    ],
    "hint": "K⁺ and permanganate: potassium permanganate."
  },
  {
    "id": "ion-poly-feso4",
    "formula": "FeSO4",
    "name": "Iron(II) sulfate",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Fe²⁺",
    "cationName": "Iron(II)",
    "anion": "SO4²⁻",
    "anionName": "Sulfate",
    "elements": [
      "Fe",
      "S",
      "O"
    ],
    "stepByStepExplanation": [
      "Sulfate is SO4²⁻ (-2).",
      "In a 1:1 ratio, the iron atom must be +2 to cancel -2 → Fe²⁺ → \"Iron(II)\".",
      "Result: \"Iron(II) sulfate\"."
    ],
    "flowchartPath": [
      "Transition Metal + Polyatomic",
      "1:1 with SO4²⁻ → Fe is +2",
      "Iron(II) sulfate"
    ],
    "hint": "One sulfate (-2) balances one iron (+2): iron(II) sulfate."
  },
  {
    "id": "ion-poly-cuoh2",
    "formula": "Cu(OH)2",
    "name": "Copper(II) hydroxide",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Cu²⁺",
    "cationName": "Copper(II)",
    "anion": "OH⁻",
    "anionName": "Hydroxide",
    "elements": [
      "Cu",
      "O",
      "H"
    ],
    "stepByStepExplanation": [
      "Two OH⁻ (-1 each) = -2 total.",
      "Copper must be +2 → Cu²⁺ → \"Copper(II)\".",
      "Parentheses rule: Cu(OH)2.",
      "Result: \"Copper(II) hydroxide\"."
    ],
    "flowchartPath": [
      "Transition Metal + Polyatomic",
      "2 OH⁻ → Cu is +2",
      "Copper(II) hydroxide"
    ],
    "hint": "Two hydroxides (-2) mean copper is +2: copper(II) hydroxide."
  },
  {
    "id": "ion-poly-pbno32",
    "formula": "Pb(NO3)2",
    "name": "Lead(II) nitrate",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Pb²⁺",
    "cationName": "Lead(II)",
    "anion": "NO3⁻",
    "anionName": "Nitrate",
    "elements": [
      "Pb",
      "N",
      "O"
    ],
    "stepByStepExplanation": [
      "Two NO3⁻ (-1 each) = -2 total negative.",
      "Lead must be +2 to cancel -2 → Pb²⁺ → \"Lead(II)\".",
      "Parentheses rule: Pb(NO3)2.",
      "Result: \"Lead(II) nitrate\"."
    ],
    "flowchartPath": [
      "Transition Metal + Polyatomic",
      "2 NO3⁻ → Pb is +2",
      "Lead(II) nitrate"
    ],
    "hint": "Two nitrates (-2) mean lead is +2: lead(II) nitrate."
  }
];

// ========================================================
// POOL C: DEDICATED TO ACID MODULE PRACTICE
// (Binary Acids & Oxyacids)
// ========================================================
export const ACID_MODULE_COMPOUNDS: Compound[] = [
  {
    "id": "acid-bin-hcl",
    "formula": "HCl",
    "name": "Hydrochloric acid",
    "category": "acid_binary",
    "categoryLabel": "Binary Acid (No Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "H",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Begins with H and contains NO oxygen → Binary Acid.",
      "Rule: hydro- + root + -ic acid.",
      "Result: \"Hydrochloric acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "NO Oxygen",
      "hydro- + root + -ic acid",
      "Hydrochloric acid"
    ],
    "hint": "No oxygen = starts with hydro-: hydrochloric acid."
  },
  {
    "id": "acid-bin-hf",
    "formula": "HF",
    "name": "Hydrofluoric acid",
    "category": "acid_binary",
    "categoryLabel": "Binary Acid (No Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "F⁻",
    "anionName": "Fluoride",
    "elements": [
      "H",
      "F"
    ],
    "stepByStepExplanation": [
      "Begins with H, no oxygen → Binary Acid.",
      "Rule: hydro- + fluor + -ic acid.",
      "Result: \"Hydrofluoric acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "NO Oxygen",
      "hydro- + root + -ic acid",
      "Hydrofluoric acid"
    ],
    "hint": "Binary acid of fluorine: hydrofluoric acid."
  },
  {
    "id": "acid-bin-h2s",
    "formula": "H2S",
    "name": "Hydrosulfuric acid",
    "category": "acid_binary",
    "categoryLabel": "Binary Acid (No Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "S²⁻",
    "anionName": "Sulfide",
    "elements": [
      "H",
      "S"
    ],
    "stepByStepExplanation": [
      "Begins with H, no oxygen → Binary Acid.",
      "Sulfur root is \"sulfur\": hydro- + sulfur + -ic acid.",
      "Charge balance: Sulfide is S²⁻ (-2), so it requires two H⁺ (+1 each) → H2S.",
      "Result: \"Hydrosulfuric acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "NO Oxygen",
      "hydro- + root + -ic acid",
      "Hydrosulfuric acid"
    ],
    "hint": "Keep root \"sulfur\": hydrosulfuric acid."
  },
  {
    "id": "acid-bin-hcn",
    "formula": "HCN",
    "name": "Hydrocyanic acid",
    "category": "acid_binary",
    "categoryLabel": "Binary Acid (No Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "CN⁻",
    "anionName": "Cyanide",
    "elements": [
      "H",
      "C",
      "N"
    ],
    "stepByStepExplanation": [
      "Anion is cyanide (CN⁻). Since it ends in -ide and has NO oxygen, it follows the binary acid rule!",
      "Rule: hydro- + cyan + -ic acid.",
      "Result: \"Hydrocyanic acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "NO Oxygen (Cyanide ends in -ide)",
      "hydro- + cyan + -ic acid",
      "Hydrocyanic acid"
    ],
    "hint": "Cyanide ends in -ide: hydrocyanic acid."
  },
  {
    "id": "acid-oxy-hno3",
    "formula": "HNO3",
    "name": "Nitric acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "NO3⁻",
    "anionName": "Nitrate",
    "elements": [
      "H",
      "N",
      "O"
    ],
    "stepByStepExplanation": [
      "Begins with H and contains Oxygen → Oxyacid (NEVER use \"hydro-\"!).",
      "Anion is nitrate (NO3⁻). Rule: -ate ➔ -ic acid (\"I ATE something IC-ky\").",
      "Result: \"Nitric acid\" (not hydronitric!)."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Contains Oxygen (Oxyacid)",
      "-ate becomes -ic acid",
      "Nitric acid"
    ],
    "hint": "Nitrate (-ate) becomes nitric acid. Never use hydro- with oxyacids!"
  },
  {
    "id": "acid-oxy-hno2",
    "formula": "HNO2",
    "name": "Nitrous acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "NO2⁻",
    "anionName": "Nitrite",
    "elements": [
      "H",
      "N",
      "O"
    ],
    "stepByStepExplanation": [
      "Contains oxygen → Oxyacid.",
      "Anion is nitrite (NO2⁻). Rule: -ite ➔ -ous acid (\"Spr-ITE is delici-OUS\").",
      "Result: \"Nitrous acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Contains Oxygen (Oxyacid)",
      "-ite becomes -ous acid",
      "Nitrous acid"
    ],
    "hint": "Nitrite (-ite) becomes nitrous acid."
  },
  {
    "id": "acid-oxy-h2so4",
    "formula": "H2SO4",
    "name": "Sulfuric acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "SO4²⁻",
    "anionName": "Sulfate",
    "elements": [
      "H",
      "S",
      "O"
    ],
    "stepByStepExplanation": [
      "Contains oxygen → Oxyacid.",
      "Anion is sulfate (SO4²⁻). Rule: -ate ➔ -ic acid (keeps root \"sulfur\").",
      "Charge balance: Sulfate is -2, so it needs two H⁺ → H2SO4.",
      "Result: \"Sulfuric acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Contains Oxygen",
      "-ate becomes -ic acid",
      "Sulfuric acid"
    ],
    "hint": "Sulfate (-ate) becomes sulfuric acid (not sulfic!)."
  },
  {
    "id": "acid-oxy-h2so3",
    "formula": "H2SO3",
    "name": "Sulfurous acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "SO3²⁻",
    "anionName": "Sulfite",
    "elements": [
      "H",
      "S",
      "O"
    ],
    "stepByStepExplanation": [
      "Contains oxygen → Oxyacid.",
      "Anion is sulfite (SO3²⁻). Rule: -ite ➔ -ous acid.",
      "Result: \"Sulfurous acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Contains Oxygen",
      "-ite becomes -ous acid",
      "Sulfurous acid"
    ],
    "hint": "Sulfite (-ite) becomes sulfurous acid."
  },
  {
    "id": "acid-oxy-h3po4",
    "formula": "H3PO4",
    "name": "Phosphoric acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "PO4³⁻",
    "anionName": "Phosphate",
    "elements": [
      "H",
      "P",
      "O"
    ],
    "stepByStepExplanation": [
      "Contains oxygen → Oxyacid (NO hydro-!).",
      "Anion is phosphate (-ate). Root is \"phosphor\".",
      "Rule: -ate ➔ -ic acid.",
      "Charge balance: Phosphate is -3, so it needs three H⁺ → H3PO4.",
      "Result: \"Phosphoric acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Contains Oxygen",
      "-ate becomes -ic acid",
      "Phosphoric acid"
    ],
    "hint": "Phosphate (-ate) becomes phosphoric acid."
  },
  {
    "id": "acid-oxy-h3po3",
    "formula": "H3PO3",
    "name": "Phosphorous acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "PO3³⁻",
    "anionName": "Phosphite",
    "elements": [
      "H",
      "P",
      "O"
    ],
    "stepByStepExplanation": [
      "Contains oxygen → Oxyacid.",
      "Anion is phosphite (-ite).",
      "Rule: -ite ➔ -ous acid.",
      "Result: \"Phosphorous acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Contains Oxygen",
      "-ite becomes -ous acid",
      "Phosphorous acid"
    ],
    "hint": "Phosphite (-ite) becomes phosphorous acid."
  },
  {
    "id": "acid-oxy-h2co3",
    "formula": "H2CO3",
    "name": "Carbonic acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "CO3²⁻",
    "anionName": "Carbonate",
    "elements": [
      "H",
      "C",
      "O"
    ],
    "stepByStepExplanation": [
      "Contains oxygen → Oxyacid.",
      "Anion is carbonate (-ate).",
      "Rule: -ate ➔ -ic acid.",
      "Charge balance: Carbonate is -2, so it needs two H⁺ → H2CO3.",
      "Result: \"Carbonic acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Contains Oxygen",
      "-ate becomes -ic acid",
      "Carbonic acid"
    ],
    "hint": "Carbonate (-ate) becomes carbonic acid."
  },
  {
    "id": "acid-oxy-hclo4",
    "formula": "HClO4",
    "name": "Perchloric acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "ClO4⁻",
    "anionName": "Perchlorate",
    "elements": [
      "H",
      "Cl",
      "O"
    ],
    "stepByStepExplanation": [
      "Anion is perchlorate (ClO4⁻).",
      "Keep prefix \"per-\", turn -ate into -ic acid.",
      "Result: \"Perchloric acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Contains Oxygen",
      "Perchlorate → Perchloric",
      "Perchloric acid"
    ],
    "hint": "Perchlorate becomes perchloric acid."
  },
  {
    "id": "acid-oxy-hclo3",
    "formula": "HClO3",
    "name": "Chloric acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "ClO3⁻",
    "anionName": "Chlorate",
    "elements": [
      "H",
      "Cl",
      "O"
    ],
    "stepByStepExplanation": [
      "Anion is chlorate (ClO3⁻).",
      "Rule: -ate ➔ -ic acid (NO hydro!).",
      "Result: \"Chloric acid\" (not hydrochloric!)."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Contains Oxygen",
      "Chlorate → Chloric",
      "Chloric acid"
    ],
    "hint": "Chlorate becomes chloric acid. Never use hydro-!"
  },
  {
    "id": "acid-oxy-hclo2",
    "formula": "HClO2",
    "name": "Chlorous acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "ClO2⁻",
    "anionName": "Chlorite",
    "elements": [
      "H",
      "Cl",
      "O"
    ],
    "stepByStepExplanation": [
      "Anion is chlorite (ClO2⁻).",
      "Rule: -ite ➔ -ous acid.",
      "Result: \"Chlorous acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Contains Oxygen",
      "Chlorite → Chlorous",
      "Chlorous acid"
    ],
    "hint": "Chlorite becomes chlorous acid."
  },
  {
    "id": "acid-oxy-hclo",
    "formula": "HClO",
    "name": "Hypochlorous acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "ClO⁻",
    "anionName": "Hypochlorite",
    "elements": [
      "H",
      "Cl",
      "O"
    ],
    "stepByStepExplanation": [
      "Anion is hypochlorite (ClO⁻).",
      "Keep prefix \"hypo-\", turn -ite into -ous acid.",
      "Result: \"Hypochlorous acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Contains Oxygen",
      "Hypochlorite → Hypochlorous",
      "Hypochlorous acid"
    ],
    "hint": "Hypochlorite becomes hypochlorous acid."
  },
  {
    "id": "acid-oxy-hc2h3o2",
    "formula": "HC2H3O2",
    "name": "Acetic acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "C2H3O2⁻",
    "anionName": "Acetate",
    "elements": [
      "H",
      "C",
      "O"
    ],
    "stepByStepExplanation": [
      "Contains oxygen. Anion is acetate (C2H3O2⁻).",
      "Rule: -ate ➔ -ic acid.",
      "Result: \"Acetic acid\" (household vinegar)."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Contains Oxygen",
      "Acetate → Acetic",
      "Acetic acid"
    ],
    "hint": "Acetate (-ate) becomes acetic acid."
  }
];

// ========================================================
// POOL D: DEDICATED TO CLASS FLOWCHART DECISION TREE
// (100% UNIQUE compounds not appearing in Pools A, B, or C!)
// ========================================================
export const FLOWCHART_TREE_COMPOUNDS: Compound[] = [
  {
    "id": "tree-cov-n2o5",
    "formula": "N2O5",
    "name": "Dinitrogen pentoxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "N",
      "O"
    ],
    "stepByStepExplanation": [
      "1. Does it begin with H? No.",
      "2. Does it contain a metal or NH4+? No (N and O are both nonmetals).",
      "3. Covalent rules: 2 N = \"Dinitrogen\", 5 O = \"pentoxide\".",
      "Result: \"Dinitrogen pentoxide\"."
    ],
    "flowchartPath": [
      "No H at start",
      "No metal (Covalent)",
      "2 N = dinitrogen",
      "5 O = pentoxide"
    ],
    "hint": "2 N = dinitrogen, 5 O = pentoxide."
  },
  {
    "id": "tree-cov-n2o4",
    "formula": "N2O4",
    "name": "Dinitrogen tetroxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "N",
      "O"
    ],
    "stepByStepExplanation": [
      "1. Does it begin with H? No.",
      "2. Does it contain a metal or NH4+? No (both nonmetals).",
      "3. 2 N = \"Dinitrogen\", 4 O = \"tetroxide\" (drop \"a\" in tetra- before oxide).",
      "Result: \"Dinitrogen tetroxide\"."
    ],
    "flowchartPath": [
      "No H at start",
      "No metal (Covalent)",
      "di- for 2",
      "tetra- drops \"a\" before oxide"
    ],
    "hint": "2 N = dinitrogen, 4 O = tetroxide."
  },
  {
    "id": "tree-cov-sf6",
    "formula": "SF6",
    "name": "Sulfur hexafluoride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "S",
      "F"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? No.",
      "2. Metal or NH4+? No (S and F are nonmetals).",
      "3. 1 S = \"Sulfur\" (omit mono-), 6 F = \"hexafluoride\".",
      "Result: \"Sulfur hexafluoride\"."
    ],
    "flowchartPath": [
      "No H at start",
      "No metal (Covalent)",
      "Omit mono- on first",
      "hexa- for 6"
    ],
    "hint": "1 Sulfur (no prefix), 6 Fluorines (hexafluoride)."
  },
  {
    "id": "tree-cov-p4o10",
    "formula": "P4O10",
    "name": "Tetraphosphorus decoxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "P",
      "O"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? No.",
      "2. Metal or NH4+? No (P and O are nonmetals).",
      "3. 4 P = \"Tetraphosphorus\", 10 O = \"decoxide\".",
      "Result: \"Tetraphosphorus decoxide\"."
    ],
    "flowchartPath": [
      "No H at start",
      "No metal (Covalent)",
      "tetra- for 4",
      "deca- drops \"a\" before oxide"
    ],
    "hint": "4 P = tetraphosphorus, 10 O = decoxide."
  },
  {
    "id": "tree-cov-cl2o7",
    "formula": "Cl2O7",
    "name": "Dichlorine heptoxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "Cl",
      "O"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? No.",
      "2. Metal or NH4+? No (both nonmetals).",
      "3. 2 Cl = \"Dichlorine\", 7 O = \"heptoxide\" (hepta- drops \"a\").",
      "Result: \"Dichlorine heptoxide\"."
    ],
    "flowchartPath": [
      "No H at start",
      "No metal (Covalent)",
      "di- for 2",
      "hepta- drops \"a\""
    ],
    "hint": "2 Cl = dichlorine, 7 O = heptoxide."
  },
  {
    "id": "tree-cov-bf3",
    "formula": "BF3",
    "name": "Boron trifluoride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "B",
      "F"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? No.",
      "2. Metal or NH4+? No (B and F are nonmetals).",
      "3. 1 B = \"Boron\", 3 F = \"trifluoride\".",
      "Result: \"Boron trifluoride\"."
    ],
    "flowchartPath": [
      "No H at start",
      "No metal (Covalent)",
      "Omit mono- on first",
      "tri- for 3"
    ],
    "hint": "Boron + 3 fluorines = boron trifluoride."
  },
  {
    "id": "tree-cov-sio2",
    "formula": "SiO2",
    "name": "Silicon dioxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "Si",
      "O"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? No.",
      "2. Metal or NH4+? No (Si and O are nonmetals).",
      "3. 1 Si = \"Silicon\", 2 O = \"dioxide\".",
      "Result: \"Silicon dioxide\"."
    ],
    "flowchartPath": [
      "No H at start",
      "No metal (Covalent)",
      "Omit mono- on first",
      "di- for 2"
    ],
    "hint": "Silicon + 2 oxygens = silicon dioxide."
  },
  {
    "id": "tree-cov-sibr4",
    "formula": "SiBr4",
    "name": "Silicon tetrabromide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "Si",
      "Br"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? No.",
      "2. Metal or NH4+? No (Si and Br form covalent bond).",
      "3. 1 Si = \"Silicon\", 4 Br = \"tetrabromide\".",
      "Result: \"Silicon tetrabromide\"."
    ],
    "flowchartPath": [
      "No H at start",
      "No metal (Covalent)",
      "tetra- for 4",
      "Silicon tetrabromide"
    ],
    "hint": "Silicon + 4 bromines = silicon tetrabromide."
  },
  {
    "id": "tree-ion-al2o3",
    "formula": "Al2O3",
    "name": "Aluminum oxide",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Al³⁺",
    "cationName": "Aluminum",
    "anion": "O²⁻",
    "anionName": "Oxide",
    "elements": [
      "Al",
      "O"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? No.",
      "2. Metal? Yes (Al). Fixed +3 charge.",
      "3. Anion: O²⁻ is oxide.",
      "Charge balance: Two Al³⁺ (+6) balance three O²⁻ (-6) to 0 net charge → Al2O3.",
      "Result: \"Aluminum oxide\"."
    ],
    "flowchartPath": [
      "No H at start",
      "Contains Metal (Ionic)",
      "Fixed metal (Al is +3)",
      "Aluminum oxide"
    ],
    "hint": "Aluminum is fixed +3 (no Roman numeral!): aluminum oxide."
  },
  {
    "id": "tree-ion-ca3p2",
    "formula": "Ca3P2",
    "name": "Calcium phosphide",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Ca²⁺",
    "cationName": "Calcium",
    "anion": "P³⁻",
    "anionName": "Phosphide",
    "elements": [
      "Ca",
      "P"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? No.",
      "2. Metal? Yes (Ca, Group 2). Fixed +2 charge.",
      "3. Anion is phosphide (P³⁻).",
      "Charge balance: Three Ca²⁺ (+6) balance two P³⁻ (-6) to 0 net charge → Ca3P2.",
      "Result: \"Calcium phosphide\"."
    ],
    "flowchartPath": [
      "No H at start",
      "Contains Metal (Ionic)",
      "Fixed Group 2 (Ca is +2)",
      "Calcium phosphide"
    ],
    "hint": "Calcium (+2) and phosphide (-3): calcium phosphide."
  },
  {
    "id": "tree-ion-bacl2",
    "formula": "BaCl2",
    "name": "Barium chloride",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "Ba²⁺",
    "cationName": "Barium",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Ba",
      "Cl"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? No.",
      "2. Metal? Yes (Ba, Group 2). Fixed +2 charge.",
      "3. Anion is chloride (Cl⁻).",
      "Charge balance: One Ba²⁺ (+2) balances two Cl⁻ (-2 total) → BaCl2.",
      "Result: \"Barium chloride\"."
    ],
    "flowchartPath": [
      "No H at start",
      "Contains Metal",
      "Fixed Group 2",
      "Barium chloride"
    ],
    "hint": "Ba is Group 2 (+2): barium chloride."
  },
  {
    "id": "tree-ion-k2o",
    "formula": "K2O",
    "name": "Potassium oxide",
    "category": "ionic_fixed",
    "categoryLabel": "Binary Ionic (Fixed Charge)",
    "cation": "K⁺",
    "cationName": "Potassium",
    "anion": "O²⁻",
    "anionName": "Oxide",
    "elements": [
      "K",
      "O"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? No.",
      "2. Metal? Yes (K, Group 1). Fixed +1 charge.",
      "3. Oxide is O²⁻ (-2).",
      "Charge balance: Two K⁺ balance one O²⁻ to 0 net charge → K2O.",
      "Result: \"Potassium oxide\"."
    ],
    "flowchartPath": [
      "No H at start",
      "Contains Metal",
      "Fixed Group 1",
      "Potassium oxide"
    ],
    "hint": "Two +1 potassiums balance one oxide: potassium oxide."
  },
  {
    "id": "tree-ion-fe2o3",
    "formula": "Fe2O3",
    "name": "Iron(III) oxide",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Fe³⁺",
    "cationName": "Iron(III)",
    "anion": "O²⁻",
    "anionName": "Oxide",
    "elements": [
      "Fe",
      "O"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? No.",
      "2. Contains metal? Yes (Fe). Variable charge metal.",
      "3. Three O²⁻ = -6 total. Two Fe must equal +6 → each Fe is +3 → Fe³⁺ → \"Iron(III)\".",
      "Result: \"Iron(III) oxide\"."
    ],
    "flowchartPath": [
      "No H at start",
      "Contains Metal (Ionic)",
      "Variable charge metal (Fe)",
      "3 × (-2) = -6 → Fe is +3"
    ],
    "hint": "3 oxygens (-6) balanced by 2 irons: each iron is +3 → iron(III) oxide."
  },
  {
    "id": "tree-ion-cu2o",
    "formula": "Cu2O",
    "name": "Copper(I) oxide",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Cu⁺",
    "cationName": "Copper(I)",
    "anion": "O²⁻",
    "anionName": "Oxide",
    "elements": [
      "Cu",
      "O"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? No.",
      "2. Metal? Yes (Cu, transition metal).",
      "3. One O²⁻ is -2 total. Two Cu must equal +2 → each Cu is +1 → Cu⁺ → \"Copper(I)\".",
      "Result: \"Copper(I) oxide\"."
    ],
    "flowchartPath": [
      "No H at start",
      "Contains Metal",
      "Variable metal (Cu)",
      "Two Cu balance one O²⁻ → Cu is +1"
    ],
    "hint": "Two coppers balance one -2 oxygen: each copper is +1 → copper(I) oxide."
  },
  {
    "id": "tree-ion-cuo",
    "formula": "CuO",
    "name": "Copper(II) oxide",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Cu²⁺",
    "cationName": "Copper(II)",
    "anion": "O²⁻",
    "anionName": "Oxide",
    "elements": [
      "Cu",
      "O"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? No.",
      "2. Metal? Yes (Cu).",
      "3. One O²⁻ is -2. In 1:1 ratio, Cu must be +2 → Cu²⁺ → \"Copper(II)\".",
      "Result: \"Copper(II) oxide\"."
    ],
    "flowchartPath": [
      "No H at start",
      "Contains Metal",
      "Variable metal (Cu)",
      "1:1 with O²⁻ → Cu is +2"
    ],
    "hint": "1:1 with oxide (-2) means copper is +2: copper(II) oxide."
  },
  {
    "id": "tree-ion-pbo2",
    "formula": "PbO2",
    "name": "Lead(IV) oxide",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Pb⁴⁺",
    "cationName": "Lead(IV)",
    "anion": "O²⁻",
    "anionName": "Oxide",
    "elements": [
      "Pb",
      "O"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? No.",
      "2. Metal? Yes (Pb). Variable charge (+2 or +4).",
      "3. Two O²⁻ (-2 each) = -4 total negative.",
      "4. Lead must be +4 to balance -4 to 0 net charge → Pb⁴⁺ → \"Lead(IV)\".",
      "Result: \"Lead(IV) oxide\"."
    ],
    "flowchartPath": [
      "No H at start",
      "Contains Metal",
      "Variable metal (Pb)",
      "2 O²⁻ = -4 → Pb is +4"
    ],
    "hint": "Two oxides (-4 total) mean lead is +4: lead(IV) oxide."
  },
  {
    "id": "tree-ion-sno2",
    "formula": "SnO2",
    "name": "Tin(IV) oxide",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Sn⁴⁺",
    "cationName": "Tin(IV)",
    "anion": "O²⁻",
    "anionName": "Oxide",
    "elements": [
      "Sn",
      "O"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? No.",
      "2. Metal? Yes (Sn). Variable charge (+2 or +4).",
      "3. Two O²⁻ (-2 each) = -4 total negative.",
      "4. Tin must be +4 to balance -4 to 0 net charge → Sn⁴⁺ → \"Tin(IV)\".",
      "Result: \"Tin(IV) oxide\"."
    ],
    "flowchartPath": [
      "No H at start",
      "Contains Metal",
      "Variable metal (Sn)",
      "2 O²⁻ = -4 → Sn is +4"
    ],
    "hint": "Two -2 oxides = -4 total, so tin is +4: tin(IV) oxide."
  },
  {
    "id": "tree-ion-cocl3",
    "formula": "CoCl3",
    "name": "Cobalt(III) chloride",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Co³⁺",
    "cationName": "Cobalt(III)",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Co",
      "Cl"
    ],
    "stepByStepExplanation": [
      "1. Transition metal (Co).",
      "2. Three Cl⁻ = -3 total negative.",
      "3. Cobalt must be +3 to equal 0 net charge → Co³⁺ → \"Cobalt(III)\".",
      "Result: \"Cobalt(III) chloride\"."
    ],
    "flowchartPath": [
      "No H at start",
      "Contains Metal",
      "3 Cl⁻ = -3 → Co is +3",
      "Cobalt(III) chloride"
    ],
    "hint": "Three Cl⁻ = -3, so cobalt is +3: cobalt(III) chloride."
  },
  {
    "id": "tree-ion-fe2so43",
    "formula": "Fe2(SO4)3",
    "name": "Iron(III) sulfate",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Fe³⁺",
    "cationName": "Iron(III)",
    "anion": "SO4²⁻",
    "anionName": "Sulfate",
    "elements": [
      "Fe",
      "S",
      "O"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? No.",
      "2. Metal + Polyatomic ion (SO4²⁻).",
      "3. Three SO4²⁻ (-2 each) = -6 total negative.",
      "4. Two Fe must equal +6 → each Fe is +3 → Fe³⁺ → \"Iron(III)\".",
      "Result: \"Iron(III) sulfate\"."
    ],
    "flowchartPath": [
      "Contains Metal",
      "Polyatomic ion (SO4²⁻)",
      "3 SO4²⁻ = -6 → Fe is +3",
      "Iron(III) sulfate"
    ],
    "hint": "Three sulfates (-6 total) balanced by two irons (+3 each): iron(III) sulfate."
  },
  {
    "id": "tree-ion-nh4no3",
    "formula": "NH4NO3",
    "name": "Ammonium nitrate",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "NH4⁺",
    "cationName": "Ammonium",
    "anion": "NO3⁻",
    "anionName": "Nitrate",
    "elements": [
      "N",
      "H",
      "O"
    ],
    "stepByStepExplanation": [
      "1. Starts with NH4⁺ (ammonium cation).",
      "2. Anion is NO3⁻ (nitrate).",
      "3. Both are polyatomic ions (+1 and -1 balance 1:1).",
      "Result: \"Ammonium nitrate\"."
    ],
    "flowchartPath": [
      "Contains NH4⁺",
      "Polyatomic Cation + Anion",
      "Ammonium + Nitrate",
      "Ammonium nitrate"
    ],
    "hint": "Two polyatomic ions: ammonium (NH4⁺) and nitrate (NO3⁻) = ammonium nitrate."
  },
  {
    "id": "tree-ion-k2cr2o7",
    "formula": "K2Cr2O7",
    "name": "Potassium dichromate",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "K⁺",
    "cationName": "Potassium",
    "anion": "Cr2O7²⁻",
    "anionName": "Dichromate",
    "elements": [
      "K",
      "Cr",
      "O"
    ],
    "stepByStepExplanation": [
      "1. Starts with metal K (Group 1, fixed +1).",
      "2. Polyatomic anion is Cr2O7²⁻ (dichromate, -2 charge).",
      "3. Two K⁺ (+2) balance one Cr2O7²⁻ (-2) to 0 net charge.",
      "Result: \"Potassium dichromate\"."
    ],
    "flowchartPath": [
      "Contains Metal",
      "Cr2O7²⁻ is dichromate",
      "Fixed Group 1",
      "Potassium dichromate"
    ],
    "hint": "K⁺ and dichromate (Cr2O7²⁻): potassium dichromate."
  },
  {
    "id": "tree-acid-hbr",
    "formula": "HBr",
    "name": "Hydrobromic acid",
    "category": "acid_binary",
    "categoryLabel": "Binary Acid (No Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "Br⁻",
    "anionName": "Bromide",
    "elements": [
      "H",
      "Br"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? Yes → Acid.",
      "2. Contains oxygen? No (only H and Br) → Binary Acid.",
      "3. Rule: hydro- + brom + -ic acid.",
      "Result: \"Hydrobromic acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "NO Oxygen (Binary Acid)",
      "hydro- + root + -ic acid",
      "Hydrobromic acid"
    ],
    "hint": "No oxygen: hydro- + brom + -ic acid."
  },
  {
    "id": "tree-acid-h2se",
    "formula": "H2Se",
    "name": "Hydroselenic acid",
    "category": "acid_binary",
    "categoryLabel": "Binary Acid (No Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "Se²⁻",
    "anionName": "Selenide",
    "elements": [
      "H",
      "Se"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? Yes → Acid.",
      "2. Contains oxygen? No (Binary Acid).",
      "3. Rule: hydro- + selen + -ic acid.",
      "Result: \"Hydroselenic acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "NO Oxygen",
      "hydro- + root + -ic acid",
      "Hydroselenic acid"
    ],
    "hint": "H + Se (no oxygen) = hydroselenic acid."
  },
  {
    "id": "tree-acid-hbro3",
    "formula": "HBrO3",
    "name": "Bromic acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "BrO3⁻",
    "anionName": "Bromate",
    "elements": [
      "H",
      "Br",
      "O"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? Yes → Acid.",
      "2. Contains oxygen? Yes (BrO3⁻) → Oxyacid (NO hydro!).",
      "3. Anion is bromate (-ate). Rule: -ate ➔ -ic acid.",
      "Result: \"Bromic acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Contains Oxygen (Oxyacid)",
      "Bromate (-ate) → -ic",
      "Bromic acid"
    ],
    "hint": "Contains oxygen: bromate (-ate) becomes bromic acid."
  },
  {
    "id": "tree-acid-hio3",
    "formula": "HIO3",
    "name": "Iodic acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "IO3⁻",
    "anionName": "Iodate",
    "elements": [
      "H",
      "I",
      "O"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? Yes → Acid.",
      "2. Contains oxygen? Yes (IO3⁻) → Oxyacid (NO hydro!).",
      "3. Anion is iodate (-ate). Rule: -ate ➔ -ic acid.",
      "Result: \"Iodic acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Contains Oxygen (Oxyacid)",
      "Iodate (-ate) → -ic",
      "Iodic acid"
    ],
    "hint": "Contains oxygen: iodate (-ate) becomes iodic acid."
  },
  {
    "id": "tree-acid-h2cro4",
    "formula": "H2CrO4",
    "name": "Chromic acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "CrO4²⁻",
    "anionName": "Chromate",
    "elements": [
      "H",
      "Cr",
      "O"
    ],
    "stepByStepExplanation": [
      "1. Begins with H? Yes → Acid.",
      "2. Contains oxygen? Yes (CrO4²⁻) → Oxyacid.",
      "3. Anion is chromate (-ate). Rule: -ate ➔ -ic acid.",
      "Result: \"Chromic acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Contains Oxygen (Oxyacid)",
      "Chromate (-ate) → -ic",
      "Chromic acid"
    ],
    "hint": "Contains oxygen: chromate (-ate) becomes chromic acid."
  }
];

// ========================================================
// POOL E: DEDICATED TO MIXED PRACTICE LAB
// (100% UNIQUE compounds not appearing in Pools A, B, C, or D!)
// ========================================================
export const MIXED_LAB_COMPOUNDS: Compound[] = [
  {
    "id": "mix-cov-cbr4",
    "formula": "CBr4",
    "name": "Carbon tetrabromide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "C",
      "Br"
    ],
    "stepByStepExplanation": [
      "1 Carbon → \"Carbon\" (omit mono-).",
      "4 Bromines → \"tetrabromide\".",
      "Result: \"Carbon tetrabromide\"."
    ],
    "flowchartPath": [
      "Nonmetals Only (Covalent)",
      "Use Greek prefixes for atom counts",
      "Omit mono- on first element",
      "Change second ending to -ide"
    ],
    "hint": "Think prefixes: 1 C and 4 Br."
  },
  {
    "id": "mix-cov-p2o5",
    "formula": "P2O5",
    "name": "Diphosphorus pentoxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "P",
      "O"
    ],
    "stepByStepExplanation": [
      "2 Phosphorus → \"Diphosphorus\".",
      "5 Oxygens → \"pentoxide\" (penta- drops \"a\" before oxide).",
      "Result: \"Diphosphorus pentoxide\"."
    ],
    "flowchartPath": [
      "Nonmetals Only (Covalent)",
      "Prefix for 2 atoms on first element",
      "Prefix for 5 atoms on second element (drop \"a\")",
      "Second element ending in -ide"
    ],
    "hint": "Think prefixes: 2 P and 5 O."
  },
  {
    "id": "mix-cov-p4o6",
    "formula": "P4O6",
    "name": "Tetraphosphorus hexoxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "P",
      "O"
    ],
    "stepByStepExplanation": [
      "4 Phosphorus → \"Tetraphosphorus\".",
      "6 Oxygens → \"hexoxide\" (hexa- drops \"a\" before oxide).",
      "Result: \"Tetraphosphorus hexoxide\"."
    ],
    "flowchartPath": [
      "Nonmetals Only (Covalent)",
      "Prefix for 4 atoms on first element",
      "Prefix for 6 atoms on second element (drop \"a\")",
      "Second element ending in -ide"
    ],
    "hint": "Think prefixes: 4 P and 6 O."
  },
  {
    "id": "mix-cov-s2cl2",
    "formula": "S2Cl2",
    "name": "Disulfur dichloride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "S",
      "Cl"
    ],
    "stepByStepExplanation": [
      "2 Sulfurs → \"Disulfur\".",
      "2 Chlorines → \"dichloride\".",
      "Result: \"Disulfur dichloride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only (Covalent)",
      "Prefix for 2 on first element",
      "Prefix for 2 on second element",
      "Second element ending in -ide"
    ],
    "hint": "Think prefixes: 2 S and 2 Cl."
  },
  {
    "id": "mix-cov-seo2",
    "formula": "SeO2",
    "name": "Selenium dioxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "Se",
      "O"
    ],
    "stepByStepExplanation": [
      "1 Selenium → \"Selenium\" (omit mono-).",
      "2 Oxygens → \"dioxide\".",
      "Result: \"Selenium dioxide\"."
    ],
    "flowchartPath": [
      "Nonmetals Only (Covalent)",
      "Omit mono- on first element",
      "Prefix for 2 on second element",
      "Second element ending in -ide"
    ],
    "hint": "Think prefixes: 1 Se and 2 O."
  },
  {
    "id": "mix-cov-sef6",
    "formula": "SeF6",
    "name": "Selenium hexafluoride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "Se",
      "F"
    ],
    "stepByStepExplanation": [
      "1 Selenium → \"Selenium\" (omit mono-).",
      "6 Fluorines → \"hexafluoride\".",
      "Result: \"Selenium hexafluoride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only (Covalent)",
      "Omit mono- on first element",
      "Prefix for 6 on second element",
      "Second element ending in -ide"
    ],
    "hint": "Think prefixes: 1 Se and 6 F."
  },
  {
    "id": "mix-cov-clo2",
    "formula": "ClO2",
    "name": "Chlorine dioxide",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "Cl",
      "O"
    ],
    "stepByStepExplanation": [
      "1 Chlorine → \"Chlorine\" (omit mono-).",
      "2 Oxygens → \"dioxide\".",
      "Result: \"Chlorine dioxide\"."
    ],
    "flowchartPath": [
      "Nonmetals Only (Covalent)",
      "Omit mono- on first element",
      "Prefix for 2 on second element",
      "Second element ending in -ide"
    ],
    "hint": "Think prefixes: 1 Cl and 2 O."
  },
  {
    "id": "mix-cov-brf5",
    "formula": "BrF5",
    "name": "Bromine pentafluoride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "Br",
      "F"
    ],
    "stepByStepExplanation": [
      "1 Bromine → \"Bromine\" (omit mono-).",
      "5 Fluorines → \"pentafluoride\".",
      "Result: \"Bromine pentafluoride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only (Covalent)",
      "Omit mono- on first element",
      "Prefix for 5 on second element",
      "Second element ending in -ide"
    ],
    "hint": "Think prefixes: 1 Br and 5 F."
  },
  {
    "id": "mix-cov-if7",
    "formula": "IF7",
    "name": "Iodine heptafluoride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "I",
      "F"
    ],
    "stepByStepExplanation": [
      "1 Iodine → \"Iodine\" (omit mono-).",
      "7 Fluorines → \"heptafluoride\".",
      "Result: \"Iodine heptafluoride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only (Covalent)",
      "Omit mono- on first element",
      "Prefix for 7 on second element",
      "Second element ending in -ide"
    ],
    "hint": "Think prefixes: 1 I and 7 F."
  },
  {
    "id": "mix-cov-bcl3",
    "formula": "BCl3",
    "name": "Boron trichloride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "B",
      "Cl"
    ],
    "stepByStepExplanation": [
      "1 Boron → \"Boron\" (omit mono-).",
      "3 Chlorines → \"trichloride\".",
      "Result: \"Boron trichloride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only (Covalent)",
      "Omit mono- on first element",
      "Prefix for 3 on second element",
      "Second element ending in -ide"
    ],
    "hint": "Think prefixes: 1 B and 3 Cl."
  },
  {
    "id": "mix-cov-xef4",
    "formula": "XeF4",
    "name": "Xenon tetrafluoride",
    "category": "covalent",
    "categoryLabel": "Binary Covalent",
    "elements": [
      "Xe",
      "F"
    ],
    "stepByStepExplanation": [
      "1 Xenon → \"Xenon\" (omit mono-).",
      "4 Fluorines → \"tetrafluoride\".",
      "Result: \"Xenon tetrafluoride\"."
    ],
    "flowchartPath": [
      "Nonmetals Only (Covalent)",
      "Omit mono- on first element",
      "Prefix for 4 on second element",
      "Second element ending in -ide"
    ],
    "hint": "Think prefixes: 1 Xe and 4 F."
  },
  {
    "id": "mix-ion-rbi",
    "formula": "RbI",
    "name": "Rubidium iodide",
    "category": "ionic_fixed",
    "categoryLabel": "Ionic (Fixed Charge)",
    "cation": "Rb⁺",
    "cationName": "Rubidium",
    "anion": "I⁻",
    "anionName": "Iodide",
    "elements": [
      "Rb",
      "I"
    ],
    "stepByStepExplanation": [
      "Rb is an alkali metal in Group 1 (+1 charge).",
      "Iodine is a halogen in Group 17 (-1 charge) → \"iodide\".",
      "Charge balance: +1 and -1 balance 1:1 → RbI.",
      "Result: \"Rubidium iodide\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal (Ionic)",
      "Fixed Group 1 Metal (NO Roman numeral)",
      "Name metal cation unchanged",
      "Change anion ending to -ide"
    ],
    "hint": "Group 1 alkali metal: fixed charge."
  },
  {
    "id": "mix-ion-cscl",
    "formula": "CsCl",
    "name": "Cesium chloride",
    "category": "ionic_fixed",
    "categoryLabel": "Ionic (Fixed Charge)",
    "cation": "Cs⁺",
    "cationName": "Cesium",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Cs",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Cs is in Group 1 (+1 charge).",
      "Cl is in Group 17 (-1 charge) → \"chloride\".",
      "Charge balance: +1 and -1 balance 1:1 → CsCl.",
      "Result: \"Cesium chloride\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal (Ionic)",
      "Fixed Group 1 Metal (NO Roman numeral)",
      "Name metal cation unchanged",
      "Change anion ending to -ide"
    ],
    "hint": "Group 1 alkali metal: fixed charge."
  },
  {
    "id": "mix-ion-ag2s",
    "formula": "Ag2S",
    "name": "Silver sulfide",
    "category": "ionic_fixed",
    "categoryLabel": "Ionic (Fixed Charge)",
    "cation": "Ag⁺",
    "cationName": "Silver",
    "anion": "S²⁻",
    "anionName": "Sulfide",
    "elements": [
      "Ag",
      "S"
    ],
    "stepByStepExplanation": [
      "Ag is an exception metal with a fixed +1 charge.",
      "S is in Group 16 (-2 charge) → \"sulfide\".",
      "Two Ag⁺ (+2 total) balance one S²⁻ (-2) to 0 net charge → Ag2S.",
      "Result: \"Silver sulfide\" (NO Roman numeral)."
    ],
    "flowchartPath": [
      "Metal + Nonmetal (Ionic)",
      "Fixed Metal Exception (Silver is always +1, NO Roman numeral)",
      "Name metal cation unchanged",
      "Change anion ending to -ide"
    ],
    "hint": "Silver is always fixed +1: no Roman numeral."
  },
  {
    "id": "mix-ion-sri2",
    "formula": "SrI2",
    "name": "Strontium iodide",
    "category": "ionic_fixed",
    "categoryLabel": "Ionic (Fixed Charge)",
    "cation": "Sr²⁺",
    "cationName": "Strontium",
    "anion": "I⁻",
    "anionName": "Iodide",
    "elements": [
      "Sr",
      "I"
    ],
    "stepByStepExplanation": [
      "Sr is in Group 2 (+2 charge).",
      "I is in Group 17 (-1 charge) → \"iodide\".",
      "One Sr²⁺ (+2) balances two I⁻ (-2 total) to 0 net charge → SrI2.",
      "Result: \"Strontium iodide\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal (Ionic)",
      "Fixed Group 2 Metal (NO Roman numeral)",
      "Name metal cation unchanged",
      "Change anion ending to -ide"
    ],
    "hint": "Group 2 alkaline earth: fixed charge."
  },
  {
    "id": "mix-ion-ga2o3",
    "formula": "Ga2O3",
    "name": "Gallium oxide",
    "category": "ionic_fixed",
    "categoryLabel": "Ionic (Fixed Charge)",
    "cation": "Ga³⁺",
    "cationName": "Gallium",
    "anion": "O²⁻",
    "anionName": "Oxide",
    "elements": [
      "Ga",
      "O"
    ],
    "stepByStepExplanation": [
      "Ga is in Group 13 (+3 fixed charge in high school chemistry).",
      "O is in Group 16 (-2 charge) → \"oxide\".",
      "Two Ga³⁺ (+6) balance three O²⁻ (-6) to 0 net charge → Ga2O3.",
      "Result: \"Gallium oxide\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal (Ionic)",
      "Fixed Group 13 Metal (NO Roman numeral)",
      "Name metal cation unchanged",
      "Change anion ending to -ide"
    ],
    "hint": "Group 13 main group metal: fixed charge."
  },
  {
    "id": "mix-ion-pbcl4",
    "formula": "PbCl4",
    "name": "Lead(IV) chloride",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Pb⁴⁺",
    "cationName": "Lead(IV)",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Pb",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Four Cl⁻ (-1 each) = -4 total negative.",
      "Lead must be +4 to balance -4 to 0 net charge → Pb⁴⁺ → \"Lead(IV)\".",
      "Result: \"Lead(IV) chloride\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal (Ionic)",
      "Variable Charge Metal (Requires Roman numeral)",
      "Think about the charge: balance the anion total negative charge to net zero",
      "Write: [Metal] + [Roman numeral in parentheses] + [anion-ide]"
    ],
    "hint": "Transition metal: think about balancing the anion charge."
  },
  {
    "id": "mix-ion-co2o3",
    "formula": "Co2O3",
    "name": "Cobalt(III) oxide",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Co³⁺",
    "cationName": "Cobalt(III)",
    "anion": "O²⁻",
    "anionName": "Oxide",
    "elements": [
      "Co",
      "O"
    ],
    "stepByStepExplanation": [
      "Three O²⁻ (-2 each) = -6 total negative.",
      "Two Cobalts must provide +6 total → +3 per Cobalt → \"Cobalt(III)\".",
      "Result: \"Cobalt(III) oxide\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal (Ionic)",
      "Variable Charge Metal (Requires Roman numeral)",
      "Think about the charge: balance the anion total negative charge to net zero",
      "Write: [Metal] + [Roman numeral in parentheses] + [anion-ide]"
    ],
    "hint": "Transition metal: think about balancing the anion charge."
  },
  {
    "id": "mix-ion-cr2o3",
    "formula": "Cr2O3",
    "name": "Chromium(III) oxide",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Cr³⁺",
    "cationName": "Chromium(III)",
    "anion": "O²⁻",
    "anionName": "Oxide",
    "elements": [
      "Cr",
      "O"
    ],
    "stepByStepExplanation": [
      "Three O²⁻ (-2 each) = -6 total negative.",
      "Two Chromium ions must provide +6 total → +3 per Chromium → \"Chromium(III)\".",
      "Result: \"Chromium(III) oxide\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal (Ionic)",
      "Variable Charge Metal (Requires Roman numeral)",
      "Think about the charge: balance the anion total negative charge to net zero",
      "Write: [Metal] + [Roman numeral in parentheses] + [anion-ide]"
    ],
    "hint": "Transition metal: think about balancing the anion charge."
  },
  {
    "id": "mix-ion-mno2",
    "formula": "MnO2",
    "name": "Manganese(IV) oxide",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Mn⁴⁺",
    "cationName": "Manganese(IV)",
    "anion": "O²⁻",
    "anionName": "Oxide",
    "elements": [
      "Mn",
      "O"
    ],
    "stepByStepExplanation": [
      "Two O²⁻ (-2 each) = -4 total negative.",
      "One Manganese must be +4 to balance to 0 net charge → \"Manganese(IV)\".",
      "Result: \"Manganese(IV) oxide\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal (Ionic)",
      "Variable Charge Metal (Requires Roman numeral)",
      "Think about the charge: balance the anion total negative charge to net zero",
      "Write: [Metal] + [Roman numeral in parentheses] + [anion-ide]"
    ],
    "hint": "Transition metal: think about balancing the anion charge."
  },
  {
    "id": "mix-ion-ticl4",
    "formula": "TiCl4",
    "name": "Titanium(IV) chloride",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Ti⁴⁺",
    "cationName": "Titanium(IV)",
    "anion": "Cl⁻",
    "anionName": "Chloride",
    "elements": [
      "Ti",
      "Cl"
    ],
    "stepByStepExplanation": [
      "Four Cl⁻ (-1 each) = -4 total negative.",
      "One Titanium must be +4 to balance to 0 net charge → \"Titanium(IV)\".",
      "Result: \"Titanium(IV) chloride\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal (Ionic)",
      "Variable Charge Metal (Requires Roman numeral)",
      "Think about the charge: balance the anion total negative charge to net zero",
      "Write: [Metal] + [Roman numeral in parentheses] + [anion-ide]"
    ],
    "hint": "Transition metal: think about balancing the anion charge."
  },
  {
    "id": "mix-ion-mgso3",
    "formula": "MgSO3",
    "name": "Magnesium sulfite",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Mg²⁺",
    "cationName": "Magnesium",
    "anion": "SO3²⁻",
    "anionName": "Sulfite",
    "elements": [
      "Mg",
      "S",
      "O"
    ],
    "stepByStepExplanation": [
      "Mg is Group 2 (+2). SO3²⁻ is the sulfite ion (-2).",
      "Charge balance: +2 and -2 balance 1:1 → MgSO3.",
      "Result: \"Magnesium sulfite\"."
    ],
    "flowchartPath": [
      "Metal + Polyatomic (Ionic)",
      "Fixed Metal (NO Roman numeral)",
      "Identify polyatomic ion name from reference sheet",
      "Keep polyatomic ion name unchanged"
    ],
    "hint": "Group 2 metal paired with an oxyanion."
  },
  {
    "id": "mix-ion-nac2h3o2",
    "formula": "NaC2H3O2",
    "name": "Sodium acetate",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Na⁺",
    "cationName": "Sodium",
    "anion": "C2H3O2⁻",
    "anionName": "Acetate",
    "elements": [
      "Na",
      "C",
      "H",
      "O"
    ],
    "stepByStepExplanation": [
      "Na is Group 1 (+1). C2H3O2⁻ is the acetate ion (-1).",
      "Charge balance: +1 and -1 balance 1:1 → NaC2H3O2.",
      "Result: \"Sodium acetate\"."
    ],
    "flowchartPath": [
      "Metal + Polyatomic (Ionic)",
      "Fixed Metal (NO Roman numeral)",
      "Identify polyatomic ion name from reference sheet",
      "Keep polyatomic ion name unchanged"
    ],
    "hint": "Group 1 metal paired with acetate."
  },
  {
    "id": "mix-ion-kclo3",
    "formula": "KClO3",
    "name": "Potassium chlorate",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "K⁺",
    "cationName": "Potassium",
    "anion": "ClO3⁻",
    "anionName": "Chlorate",
    "elements": [
      "K",
      "Cl",
      "O"
    ],
    "stepByStepExplanation": [
      "K is Group 1 (+1). ClO3⁻ is chlorate (-1).",
      "Charge balance: +1 and -1 balance 1:1 → KClO3.",
      "Result: \"Potassium chlorate\"."
    ],
    "flowchartPath": [
      "Metal + Polyatomic (Ionic)",
      "Fixed Metal (NO Roman numeral)",
      "Identify polyatomic ion name from reference sheet",
      "Keep polyatomic ion name unchanged"
    ],
    "hint": "Group 1 metal paired with chlorate."
  },
  {
    "id": "mix-ion-pbno34",
    "formula": "Pb(NO3)4",
    "name": "Lead(IV) nitrate",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Pb⁴⁺",
    "cationName": "Lead(IV)",
    "anion": "NO3⁻",
    "anionName": "Nitrate",
    "elements": [
      "Pb",
      "N",
      "O"
    ],
    "stepByStepExplanation": [
      "Four NO3⁻ (-1 each) = -4 total negative.",
      "Lead must be +4 to balance to 0 net charge → \"Lead(IV)\".",
      "Parentheses rule: Polyatomic subscript > 1 requires parentheses → Pb(NO3)4.",
      "Result: \"Lead(IV) nitrate\"."
    ],
    "flowchartPath": [
      "Metal + Polyatomic (Ionic)",
      "Variable Charge Metal (Requires Roman numeral)",
      "Think about the charge: balance the polyatomic anion total charge to net zero",
      "Use parentheses around polyatomic ion if subscript > 1"
    ],
    "hint": "Transition metal: think about balancing polyatomic ions."
  },
  {
    "id": "mix-acid-hi",
    "formula": "HI",
    "name": "Hydroiodic acid",
    "category": "acid_binary",
    "categoryLabel": "Binary Acid (No Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "I⁻",
    "anionName": "Iodide",
    "elements": [
      "H",
      "I"
    ],
    "stepByStepExplanation": [
      "Begins with H, no oxygen → Binary Acid.",
      "Rule: hydro- + iod- + -ic acid.",
      "Result: \"Hydroiodic acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Check for Oxygen: NO (Binary Acid)",
      "Template: hydro- + [root] + -ic acid"
    ],
    "hint": "Binary acid: starts with hydro-."
  },
  {
    "id": "mix-acid-h2te",
    "formula": "H2Te",
    "name": "Hydrotelluric acid",
    "category": "acid_binary",
    "categoryLabel": "Binary Acid (No Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "Te²⁻",
    "anionName": "Telluride",
    "elements": [
      "H",
      "Te"
    ],
    "stepByStepExplanation": [
      "Begins with H, no oxygen → Binary Acid.",
      "Rule: hydro- + tellur- + -ic acid.",
      "Result: \"Hydrotelluric acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Check for Oxygen: NO (Binary Acid)",
      "Template: hydro- + [root] + -ic acid"
    ],
    "hint": "Binary acid: starts with hydro-."
  },
  {
    "id": "mix-acid-hbro",
    "formula": "HBrO",
    "name": "Hypobromous acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "BrO⁻",
    "anionName": "Hypobromite",
    "elements": [
      "H",
      "Br",
      "O"
    ],
    "stepByStepExplanation": [
      "Contains oxygen → Oxyacid (never use hydro-).",
      "Anion is hypobromite (BrO⁻). Rule: -ite ➔ -ous acid.",
      "Result: \"Hypobromous acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Check for Oxygen: YES (Oxyacid - never use hydro-)",
      "Identify polyatomic anion: -ite becomes -ous acid"
    ],
    "hint": "Oxyacid: identify the -ite or -ate anion."
  },
  {
    "id": "mix-acid-hbro2",
    "formula": "HBrO2",
    "name": "Bromous acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "BrO2⁻",
    "anionName": "Bromite",
    "elements": [
      "H",
      "Br",
      "O"
    ],
    "stepByStepExplanation": [
      "Begins with H and contains oxygen → Oxyacid (no hydro- prefix).",
      "Polyatomic anion is bromite (BrO2⁻). Suffix rule: -ite ➔ -ous acid.",
      "Result: \"Bromous acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Check for Oxygen: YES (Oxyacid - never use hydro-)",
      "Identify polyatomic anion: -ite becomes -ous acid"
    ],
    "hint": "Oxyacid: identify the -ite or -ate anion."
  },
  {
    "id": "mix-acid-hbro4",
    "formula": "HBrO4",
    "name": "Perbromic acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "BrO4⁻",
    "anionName": "Perbromate",
    "elements": [
      "H",
      "Br",
      "O"
    ],
    "stepByStepExplanation": [
      "Begins with H and contains oxygen → Oxyacid (no hydro- prefix).",
      "Polyatomic anion is perbromate (BrO4⁻). Suffix rule: -ate ➔ -ic acid.",
      "Result: \"Perbromic acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Check for Oxygen: YES (Oxyacid - never use hydro-)",
      "Identify polyatomic anion: -ate becomes -ic acid"
    ],
    "hint": "Oxyacid: identify the -ite or -ate anion."
  },
  {
    "id": "mix-acid-hio4",
    "formula": "HIO4",
    "name": "Periodic acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "IO4⁻",
    "anionName": "Periodate",
    "elements": [
      "H",
      "I",
      "O"
    ],
    "stepByStepExplanation": [
      "Begins with H and contains oxygen → Oxyacid (no hydro- prefix).",
      "Polyatomic anion is periodate (IO4⁻). Suffix rule: -ate ➔ -ic acid.",
      "Result: \"Periodic acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Check for Oxygen: YES (Oxyacid - never use hydro-)",
      "Identify polyatomic anion: -ate becomes -ic acid"
    ],
    "hint": "Oxyacid: identify the -ite or -ate anion."
  },
  {
    "id": "mix-acid-h2c2o4",
    "formula": "H2C2O4",
    "name": "Oxalic acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "C2O4²⁻",
    "anionName": "Oxalate",
    "elements": [
      "H",
      "C",
      "O"
    ],
    "stepByStepExplanation": [
      "Begins with H and contains oxygen → Oxyacid (no hydro- prefix).",
      "Polyatomic anion is oxalate (C2O4²⁻). Suffix rule: -ate ➔ -ic acid.",
      "Two H⁺ (+2) balance oxalate (-2) to 0 net charge → H2C2O4.",
      "Result: \"Oxalic acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Check for Oxygen: YES (Oxyacid - never use hydro-)",
      "Identify polyatomic anion: -ate becomes -ic acid"
    ],
    "hint": "Oxyacid: identify the -ite or -ate anion."
  },
  {
    "id": "mix-acid-h3bo3",
    "formula": "H3BO3",
    "name": "Boric acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "BO3³⁻",
    "anionName": "Borate",
    "elements": [
      "H",
      "B",
      "O"
    ],
    "stepByStepExplanation": [
      "Begins with H and contains oxygen → Oxyacid (no hydro- prefix).",
      "Polyatomic anion is borate (BO3³⁻). Suffix rule: -ate ➔ -ic acid.",
      "Three H⁺ (+3) balance borate (-3) to 0 net charge → H3BO3.",
      "Result: \"Boric acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Check for Oxygen: YES (Oxyacid - never use hydro-)",
      "Identify polyatomic anion: -ate becomes -ic acid"
    ],
    "hint": "Oxyacid: identify the -ite or -ate anion."
  },
  {
    "id": "mix-acid-hmno4",
    "formula": "HMnO4",
    "name": "Permanganic acid",
    "category": "acid_oxy",
    "categoryLabel": "Oxyacid (Polyatomic with Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "MnO4⁻",
    "anionName": "Permanganate",
    "elements": [
      "H",
      "Mn",
      "O"
    ],
    "stepByStepExplanation": [
      "Begins with H and contains oxygen → Oxyacid (no hydro- prefix).",
      "Polyatomic anion is permanganate (MnO4⁻). Suffix rule: -ate ➔ -ic acid.",
      "Result: \"Permanganic acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Check for Oxygen: YES (Oxyacid - never use hydro-)",
      "Identify polyatomic anion: -ate becomes -ic acid"
    ],
    "hint": "Oxyacid: identify the -ite or -ate anion."
  },
  {
    "id": "mix-acid-hscn",
    "formula": "HSCN",
    "name": "Thiocyanic acid",
    "category": "acid_binary",
    "categoryLabel": "Binary-style Acid (No Oxygen)",
    "cation": "H⁺",
    "cationName": "Hydrogen",
    "anion": "SCN⁻",
    "anionName": "Thiocyanate",
    "elements": [
      "H",
      "S",
      "C",
      "N"
    ],
    "stepByStepExplanation": [
      "Begins with H and contains no oxygen → Named as non-oxygen acid.",
      "Anion is thiocyanate (SCN⁻). -ate ending changes to -ic acid without hydro- in modern IUPAC, or thiocyanic acid.",
      "Result: \"Thiocyanic acid\"."
    ],
    "flowchartPath": [
      "Begins with H (Acid)",
      "Check for Oxygen: NO",
      "Anion thiocyanate → Thiocyanic acid"
    ],
    "hint": "Acid without oxygen: thiocyanic acid."
  },
  {
    "id": "mix-ion-rb2o",
    "formula": "Rb2O",
    "name": "Rubidium oxide",
    "category": "ionic_fixed",
    "categoryLabel": "Ionic (Fixed Charge)",
    "cation": "Rb⁺",
    "cationName": "Rubidium",
    "anion": "O²⁻",
    "anionName": "Oxide",
    "elements": [
      "Rb",
      "O"
    ],
    "stepByStepExplanation": [
      "Rb is an alkali metal in Group 1 (+1 fixed charge).",
      "O is in Group 16 (-2 charge) → oxide.",
      "Two Rb⁺ (+2 total) balance one O²⁻ (-2) to 0 net charge → Rb2O.",
      "Result: \"Rubidium oxide\" (NO Roman numeral)."
    ],
    "flowchartPath": [
      "Metal + Nonmetal (Ionic)",
      "Fixed Group 1 Metal (NO Roman numeral)",
      "Name metal cation unchanged",
      "Change anion ending to -ide"
    ],
    "hint": "Group 1 alkali metal: fixed charge."
  },
  {
    "id": "mix-ion-sr3n2",
    "formula": "Sr3N2",
    "name": "Strontium nitride",
    "category": "ionic_fixed",
    "categoryLabel": "Ionic (Fixed Charge)",
    "cation": "Sr²⁺",
    "cationName": "Strontium",
    "anion": "N³⁻",
    "anionName": "Nitride",
    "elements": [
      "Sr",
      "N"
    ],
    "stepByStepExplanation": [
      "Sr is in Group 2 (+2 fixed charge).",
      "N is in Group 15 (-3 charge) → nitride.",
      "Three Sr²⁺ (+6 total) balance two N³⁻ (-6 total) to 0 net charge → Sr3N2.",
      "Result: \"Strontium nitride\" (NO Roman numeral)."
    ],
    "flowchartPath": [
      "Metal + Nonmetal (Ionic)",
      "Fixed Group 2 Metal (NO Roman numeral)",
      "Name metal cation unchanged",
      "Change anion ending to -ide"
    ],
    "hint": "Group 2 alkaline earth metal: fixed charge."
  },
  {
    "id": "mix-ion-mg3p2",
    "formula": "Mg3P2",
    "name": "Magnesium phosphide",
    "category": "ionic_fixed",
    "categoryLabel": "Ionic (Fixed Charge)",
    "cation": "Mg²⁺",
    "cationName": "Magnesium",
    "anion": "P³⁻",
    "anionName": "Phosphide",
    "elements": [
      "Mg",
      "P"
    ],
    "stepByStepExplanation": [
      "Mg is in Group 2 (+2 fixed charge).",
      "P is in Group 15 (-3 charge) → phosphide.",
      "Three Mg²⁺ (+6 total) balance two P³⁻ (-6 total) to 0 net charge → Mg3P2.",
      "Result: \"Magnesium phosphide\" (NO Roman numeral)."
    ],
    "flowchartPath": [
      "Metal + Nonmetal (Ionic)",
      "Fixed Group 2 Metal (NO Roman numeral)",
      "Name metal cation unchanged",
      "Change anion ending to -ide"
    ],
    "hint": "Group 2 alkaline earth metal: fixed charge."
  },
  {
    "id": "mix-ion-bef2",
    "formula": "BeF2",
    "name": "Beryllium fluoride",
    "category": "ionic_fixed",
    "categoryLabel": "Ionic (Fixed Charge)",
    "cation": "Be²⁺",
    "cationName": "Beryllium",
    "anion": "F⁻",
    "anionName": "Fluoride",
    "elements": [
      "Be",
      "F"
    ],
    "stepByStepExplanation": [
      "Be is in Group 2 (+2 fixed charge).",
      "F is in Group 17 (-1 charge) → fluoride.",
      "One Be²⁺ (+2) balances two F⁻ (-2 total) to 0 net charge → BeF2.",
      "Result: \"Beryllium fluoride\" (NO Roman numeral)."
    ],
    "flowchartPath": [
      "Metal + Nonmetal (Ionic)",
      "Fixed Group 2 Metal (NO Roman numeral)",
      "Name metal cation unchanged",
      "Change anion ending to -ide"
    ],
    "hint": "Group 2 alkaline earth metal: fixed charge."
  },
  {
    "id": "mix-ion-cu3p",
    "formula": "Cu3P",
    "name": "Copper(I) phosphide",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Cu⁺",
    "cationName": "Copper(I)",
    "anion": "P³⁻",
    "anionName": "Phosphide",
    "elements": [
      "Cu",
      "P"
    ],
    "stepByStepExplanation": [
      "Phosphide (P³⁻) contributes -3 total negative charge.",
      "Three copper atoms must contribute +3 total positive charge → +1 per copper atom → \"Copper(I)\".",
      "Result: \"Copper(I) phosphide\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal (Ionic)",
      "Variable Charge Metal (Requires Roman numeral)",
      "Think about the charge: balance the anion total negative charge to net zero",
      "Write: [Metal] + [Roman numeral in parentheses] + [anion-ide]"
    ],
    "hint": "Transition metal: think about balancing the anion charge."
  },
  {
    "id": "mix-ion-snf4",
    "formula": "SnF4",
    "name": "Tin(IV) fluoride",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Sn⁴⁺",
    "cationName": "Tin(IV)",
    "anion": "F⁻",
    "anionName": "Fluoride",
    "elements": [
      "Sn",
      "F"
    ],
    "stepByStepExplanation": [
      "Four fluoride ions (F⁻, -1 each) contribute -4 total negative charge.",
      "One tin atom must be +4 to balance to 0 net charge → \"Tin(IV)\".",
      "Result: \"Tin(IV) fluoride\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal (Ionic)",
      "Variable Charge Metal (Requires Roman numeral)",
      "Think about the charge: balance the anion total negative charge to net zero",
      "Write: [Metal] + [Roman numeral in parentheses] + [anion-ide]"
    ],
    "hint": "Transition metal: think about balancing the anion charge."
  },
  {
    "id": "mix-ion-v2o5",
    "formula": "V2O5",
    "name": "Vanadium(V) oxide",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "V⁵⁺",
    "cationName": "Vanadium(V)",
    "anion": "O²⁻",
    "anionName": "Oxide",
    "elements": [
      "V",
      "O"
    ],
    "stepByStepExplanation": [
      "Five oxide ions (O²⁻, -2 each) contribute -10 total negative charge.",
      "Two vanadium atoms must contribute +10 total positive charge → +5 per vanadium → \"Vanadium(V)\".",
      "Result: \"Vanadium(V) oxide\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal (Ionic)",
      "Variable Charge Metal (Requires Roman numeral)",
      "Think about the charge: balance the anion total negative charge to net zero",
      "Write: [Metal] + [Roman numeral in parentheses] + [anion-ide]"
    ],
    "hint": "Transition metal: think about balancing the anion charge."
  },
  {
    "id": "mix-ion-nibr3",
    "formula": "NiBr3",
    "name": "Nickel(III) bromide",
    "category": "ionic_transition",
    "categoryLabel": "Ionic (Transition / Roman)",
    "cation": "Ni³⁺",
    "cationName": "Nickel(III)",
    "anion": "Br⁻",
    "anionName": "Bromide",
    "elements": [
      "Ni",
      "Br"
    ],
    "stepByStepExplanation": [
      "Three bromide ions (Br⁻, -1 each) contribute -3 total negative charge.",
      "One nickel atom must be +3 to balance to 0 net charge → \"Nickel(III)\".",
      "Result: \"Nickel(III) bromide\"."
    ],
    "flowchartPath": [
      "Metal + Nonmetal (Ionic)",
      "Variable Charge Metal (Requires Roman numeral)",
      "Think about the charge: balance the anion total negative charge to net zero",
      "Write: [Metal] + [Roman numeral in parentheses] + [anion-ide]"
    ],
    "hint": "Transition metal: think about balancing the anion charge."
  },
  {
    "id": "mix-ion-caclo2",
    "formula": "Ca(ClO)2",
    "name": "Calcium hypochlorite",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Ca²⁺",
    "cationName": "Calcium",
    "anion": "ClO⁻",
    "anionName": "Hypochlorite",
    "elements": [
      "Ca",
      "Cl",
      "O"
    ],
    "stepByStepExplanation": [
      "Ca is Group 2 (+2 fixed charge). ClO⁻ is hypochlorite (-1).",
      "One Ca²⁺ (+2) balances two ClO⁻ (-2 total) to 0 net charge → Ca(ClO)2.",
      "Parentheses rule: Polyatomic group subscript > 1 requires parentheses.",
      "Result: \"Calcium hypochlorite\"."
    ],
    "flowchartPath": [
      "Metal + Polyatomic (Ionic)",
      "Fixed Metal (NO Roman numeral)",
      "Identify polyatomic ion name from reference sheet",
      "Use parentheses around polyatomic ion if subscript > 1"
    ],
    "hint": "Fixed Group 2 metal with hypochlorite."
  },
  {
    "id": "mix-ion-nh43po4",
    "formula": "(NH4)3PO4",
    "name": "Ammonium phosphate",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "NH4⁺",
    "cationName": "Ammonium",
    "anion": "PO4³⁻",
    "anionName": "Phosphate",
    "elements": [
      "N",
      "H",
      "P",
      "O"
    ],
    "stepByStepExplanation": [
      "NH4⁺ is the polyatomic cation (+1). PO4³⁻ is phosphate (-3).",
      "Three NH4⁺ (+3 total) balance one PO4³⁻ (-3) to 0 net charge → (NH4)3PO4.",
      "Parentheses rule: Three ammonium ions require parentheses around (NH4)3.",
      "Result: \"Ammonium phosphate\"."
    ],
    "flowchartPath": [
      "Polyatomic Cation + Polyatomic Anion (Ionic)",
      "NO Roman numeral",
      "Name both polyatomic ions unchanged",
      "Use parentheses around (NH4)3"
    ],
    "hint": "Two polyatomic ions balancing charges."
  },
  {
    "id": "mix-ion-al2so43",
    "formula": "Al2(SO4)3",
    "name": "Aluminum sulfate",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Al³⁺",
    "cationName": "Aluminum",
    "anion": "SO4²⁻",
    "anionName": "Sulfate",
    "elements": [
      "Al",
      "S",
      "O"
    ],
    "stepByStepExplanation": [
      "Al is Group 13 (+3 fixed charge). SO4²⁻ is sulfate (-2).",
      "Two Al³⁺ (+6 total) balance three SO4²⁻ (-6 total) to 0 net charge → Al2(SO4)3.",
      "Parentheses rule: Three sulfate groups require (SO4)3.",
      "Result: \"Aluminum sulfate\"."
    ],
    "flowchartPath": [
      "Metal + Polyatomic (Ionic)",
      "Fixed Metal Exception (Al is always +3, NO Roman numeral)",
      "Identify sulfate from ion sheet",
      "Use parentheses around (SO4)3"
    ],
    "hint": "Fixed +3 metal with sulfate."
  },
  {
    "id": "mix-ion-zncn2",
    "formula": "Zn(CN)2",
    "name": "Zinc cyanide",
    "category": "ionic_polyatomic",
    "categoryLabel": "Ionic (Polyatomic Ions)",
    "cation": "Zn²⁺",
    "cationName": "Zinc",
    "anion": "CN⁻",
    "anionName": "Cyanide",
    "elements": [
      "Zn",
      "C",
      "N"
    ],
    "stepByStepExplanation": [
      "Zn is a fixed exception metal (+2 charge). CN⁻ is cyanide (-1).",
      "One Zn²⁺ (+2) balances two CN⁻ (-2 total) to 0 net charge → Zn(CN)2.",
      "Parentheses rule: Two cyanide ions require (CN)2.",
      "Result: \"Zinc cyanide\" (NO Roman numeral)."
    ],
    "flowchartPath": [
      "Metal + Polyatomic (Ionic)",
      "Fixed Metal Exception (Zinc is always +2, NO Roman numeral)",
      "Identify cyanide from ion sheet",
      "Use parentheses around (CN)2"
    ],
    "hint": "Zinc is always fixed +2: no Roman numeral."
  }
];

// Fallback / Combined master database
export const COMPOUNDS_DATABASE: Compound[] = [
  ...COVALENT_MODULE_COMPOUNDS,
  ...IONIC_MODULE_COMPOUNDS,
  ...ACID_MODULE_COMPOUNDS,
  ...FLOWCHART_TREE_COMPOUNDS,
  ...MIXED_LAB_COMPOUNDS,
];
