'use client';

import {LanguageCodeType, LanguageSelectorProps} from "@/app/shared/types/LanguageTypes";

export function LanguageSelector({
  value,
  options,
  onChangeAction,
  disabled = false,
}: LanguageSelectorProps) {
  return (
    <div className="flex w-25 flex-col gap-1">
      <select
        id="lang"
        value={value}
        disabled={disabled}
        onChange={(e) => onChangeAction(e.target.value as LanguageCodeType)}
        className="w-full rounded-lg border border-white px-2 py-1 outline-none cursor-pointer focus:border-gray-400 disabled:opacity-60"
      >
        {options.map((opt) => (
          <option key={opt.code} value={opt.code}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
