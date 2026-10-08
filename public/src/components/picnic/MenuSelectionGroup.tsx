import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { PicnicMenuGroup } from '../../types/picnic';

interface MenuSelectionGroupProps {
  group: PicnicMenuGroup;
  selectedValue: string | undefined;
  onSelect: (groupId: string, item: string) => void;
  groupIndex: number;
}

export const MenuSelectionGroup: React.FC<MenuSelectionGroupProps> = ({
  group,
  selectedValue,
  onSelect,
  groupIndex
}) => {
  return (
    <div className="p-4 sm:p-5 bg-white rounded-2xl border border-[#DCEAF5] space-y-3 shadow-2xs">
      <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#0996F5] text-white text-[11px] font-black flex items-center justify-center shrink-0">
              {groupIndex}
            </span>
            <h4 className="text-sm font-black text-[#0B1220]">
              {group.title}
            </h4>
          </div>
          <p className="text-[11px] text-[#526273] mt-0.5 ml-7">
            {group.instruction} (1 menu berlaku untuk seluruh peserta)
          </p>
        </div>

        {selectedValue ? (
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            Terpilih ✓
          </span>
        ) : (
          <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
            Wajib Pilih
          </span>
        )}
      </div>

      {/* Radio options grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
        {group.options.map((option) => {
          const isSelected = selectedValue === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(group.id, option)}
              className={`p-3 rounded-xl border text-left flex items-center justify-between gap-3 transition-all cursor-pointer min-h-[46px] ${
                isSelected
                  ? 'border-[#0996F5] bg-[#EAF6FF] text-[#0B1220] shadow-xs'
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-[#0B1220]'
              }`}
            >
              <span className={`text-xs ${isSelected ? 'font-black text-[#0996F5]' : 'font-medium'}`}>
                {option}
              </span>

              {isSelected ? (
                <CheckCircle2 className="w-4 h-4 text-[#0996F5] shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-slate-300 shrink-0" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
