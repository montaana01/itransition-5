import { Footer } from "@/app/components/DOM/Footer/Footer";
import { Header } from "@/app/components/DOM/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100vh-160px)] w-full max-w-3xl flex-col m-auto gap-6 px-6 py-16 sm:px-10">
        <h2>Here will be dashboard</h2>
        <h3>Here will be player</h3>
      </main>
      <Footer />
    </>
  );
}
