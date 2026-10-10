import React, { useState } from 'react';
import { POLYATOMIC_IONS } from '../data/referenceData';
import { PolyatomicIon } from '../types/chemistry';
import { Search, X, Copy, Check, Info, Sparkles } from 'lucide-react';

interface PolyatomicIonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectIon?: (ion: PolyatomicIon) => void;
}

export const PolyatomicIonModal: React.FC<PolyatomicIonModalProps> = ({
  isOpen,
  onClose,
  onSelectIon,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [chargeFilter, setChargeFilter] = useState<'all' | '1' | '-1' | '-2' | '-3' | 'oxyanions'>('all');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);
  const [selectedIon, setSelectedIon] = useState<PolyatomicIon | null>(null);

  if (!isOpen) return null;

  const filteredIons = POLYATOMIC_IONS.filter((ion) => {
    // Search match
    const matchesSearch =
      ion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ion.formula.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (ion.family && ion.family.toLowerCase().includes(searchTerm.toLowerCase())) ||
      ion.chargeStr.includes(searchTerm);

    if (!matchesSearch) return false;

    // Filter match
    if (chargeFilter === 'all') return true;
    if (chargeFilter === '1') return ion.charge === 1;
    if (chargeFilter === '-1') return ion.charge === -1;
    if (chargeFilter === '-2') return ion.charge === -2;
    if (chargeFilter === '-3') return ion.charge === -3;
    if (chargeFilter === 'oxyanions') {
      return (
        (ion.family && ion.family.includes('Halogen')) ||
        ion.name.includes('ate') ||
        ion.name.includes('ite')
      );
    }
    return true;
  });

  const handleCopy = (formula: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard?.writeText(formula);
    setCopiedFormula(formula);
    setTimeout(() => {
      setCopiedFormula(null);
    }, 1800);
  };

  const getChargeBadge = (charge: number) => {
    if (charge === 1) {
      return (
        <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
          +1 Cation
        </span>
      );
    }
    if (charge === -1) {
      return (
        <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
          -1 Anion
        </span>
      );
    }
    if (charge === -2) {
      return (
        <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
          -2 Anion
        </span>
      );
    }
    return (
      <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-purple-100 text-purple-800 border border-purple-200">
        -3 Anion
      </span>
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-gradient-to-r from-blue-50 via-slate-50 to-indigo-50/40 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-xs">
              🧪
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-extrabold text-slate-900 text-base sm:text-lg">
                  Polyatomic Ion Reference Chart
                </h2>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-md text-[11px] font-bold bg-blue-100 text-blue-800">
                  Click any ion
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Common polyatomic ions required for high school chemical nomenclature & formulas
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-200/70 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Quick Filters Bar */}
        <div className="p-4 border-b border-slate-200 bg-white space-y-3">
          <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by name, formula, or charge (e.g., sulfate, NO3, -2)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-hidden bg-slate-50/50"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Charge Filters */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
              <button
                onClick={() => setChargeFilter('all')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  chargeFilter === 'all'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                All ({POLYATOMIC_IONS.length})
              </button>
              <button
                onClick={() => setChargeFilter('1')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  chargeFilter === '1'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200'
                }`}
              >
                +1 Cations
              </button>
              <button
                onClick={() => setChargeFilter('-1')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  chargeFilter === '-1'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200'
                }`}
              >
                -1 Anions
              </button>
              <button
                onClick={() => setChargeFilter('-2')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  chargeFilter === '-2'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200'
                }`}
              >
                -2 Anions
              </button>
              <button
                onClick={() => setChargeFilter('-3')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  chargeFilter === '-3'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200'
                }`}
              >
                -3 Anions
              </button>
              <button
                onClick={() => setChargeFilter('oxyanions')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  chargeFilter === 'oxyanions'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200'
                }`}
              >
                -ate / -ite Family
              </button>
            </div>
          </div>

          {/* Quick High School Oxyanion Rules Bar */}
          <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200 text-[11px] text-slate-700 flex flex-wrap items-center justify-between gap-2">
            <span className="font-bold text-slate-800 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              High School Memory Rules:
            </span>
            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
              <span className="bg-white px-2 py-0.5 rounded border border-slate-200">
                <strong>per-...-ate</strong>: +1 Oxygen
              </span>
              <span className="bg-white px-2 py-0.5 rounded border border-blue-200 text-blue-900 font-semibold">
                <strong>-ate</strong>: Standard base ion
              </span>
              <span className="bg-white px-2 py-0.5 rounded border border-slate-200">
                <strong>-ite</strong>: -1 Oxygen (same charge)
              </span>
              <span className="bg-white px-2 py-0.5 rounded border border-slate-200">
                <strong>hypo-...-ite</strong>: -2 Oxygens
              </span>
            </div>
          </div>
        </div>

        {/* Ions Grid Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {filteredIons.length === 0 ? (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <Info className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-sm font-semibold text-slate-600">No polyatomic ions match "{searchTerm}"</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setChargeFilter('all');
                }}
                className="text-xs text-blue-600 hover:underline font-semibold"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {filteredIons.map((ion) => {
                const isSelected = selectedIon?.formula === ion.formula;
                const isCopied = copiedFormula === ion.formula;

                return (
                  <div
                    key={ion.formula}
                    onClick={() => {
                      setSelectedIon(ion);
                      if (onSelectIon) onSelectIon(ion);
                    }}
                    className={`group relative p-3.5 rounded-xl border-2 transition-all cursor-pointer text-left ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50/70 shadow-sm ring-2 ring-blue-200'
                        : 'border-slate-200 hover:border-blue-400 bg-white hover:bg-slate-50/80 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      {/* Formula */}
                      <span className="text-xl sm:text-2xl font-mono font-extrabold text-slate-900 tracking-wide">
                        {ion.formula}
                      </span>
                      {/* Charge Badge */}
                      {getChargeBadge(ion.charge)}
                    </div>

                    {/* Ion Name */}
                    <div className="font-bold text-sm text-slate-800 leading-tight">
                      {ion.name}
                    </div>

                    {/* Family & Notes */}
                    <div className="mt-1 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="truncate">{ion.family}</span>
                      <button
                        type="button"
                        onClick={(e) => handleCopy(ion.formula, e)}
                        className="opacity-80 group-hover:opacity-100 flex items-center gap-1 text-[10px] font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-2 py-0.5 rounded-md transition-colors"
                        title="Copy formula"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    {ion.notes && (
                      <p className="mt-1.5 text-[10px] text-slate-500 italic border-t border-slate-100 pt-1 line-clamp-1">
                        {ion.notes}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Tip:</span>
            <span>Polyatomic ions act as a single unit when balancing chemical formulas.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-black text-white font-semibold text-xs rounded-xl shadow-xs transition-colors shrink-0"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
