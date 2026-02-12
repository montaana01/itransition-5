'use client';

import { SeedForm } from "@/app/components/SeedToolbar/SeedForm";
import { LikeSelector } from "@/app/components/LikesSelector/LikeSelector";
import { LanguageSelector } from "@/app/components/LanguageSelector/LanguageSelector";
import { DEFAULT_LANGUAGE, LANGUAGES } from "@/app/shared/constants/locales";
import { useState } from "react";
import { LanguageCodeType } from "@/app/shared/types/LanguageTypes";

export const Header = () => {
  const [region, setRegion] = useState<LanguageCodeType>(DEFAULT_LANGUAGE);

  return (
    <header className="relative h-20 overflow-hidden flex border-b-1 border-[#164e63] items-center bg-[radial-gradient(150%_120%_at_0%_0%,#164e63_0%,#0f172a_52%,#020617_100%)]">
      <div className="container mx-auto border-b-amber-800px-4 relative z-10 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
          Music Service
        </h1>
        <SeedForm initialSeed="42" />
        <LikeSelector initialState={3}  />
        <div className="flex flex-wrap items-end justify-between gap-3">
          <LanguageSelector value={region} options={LANGUAGES} onChangeAction={setRegion} />
          <div className="text-sm text-black">
            Selected: <span className="font-mono">{region}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
