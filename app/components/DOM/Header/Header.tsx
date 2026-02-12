import {SeedForm} from "@/app/components/SeedToolbar/SeedForm";
import {LikeSelector} from "@/app/components/LikesSelector/LikeSelector";

export const Header = () => {
  return (
    <header className="relative h-20 overflow-hidden flex border-b-1 border-[#164e63] items-center bg-[radial-gradient(150%_120%_at_0%_0%,#164e63_0%,#0f172a_52%,#020617_100%)]">
      <div className="container mx-auto border-b-amber-800px-4 relative z-10 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
          Music Service
        </h1>
        <SeedForm initialSeed="42" />
        <LikeSelector initialState={3}  />
        <div>EN/DE</div>
      </div>
    </header>
  );
};
