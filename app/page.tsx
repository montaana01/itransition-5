import { SeedForm } from '@/app/components/SeedToolbar/SeedForm';
import { Footer } from "@/app/components/DOM/Footer/Footer";
import { Header } from "@/app/components/DOM/Header/Header";
import { LikeSelector } from "@/app/components/LikesSelector/LikeSelector";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-16 sm:px-10">
        <SeedForm initialSeed="42" />
        <LikeSelector />
      </main>
      <Footer />
    </>
  );
}
