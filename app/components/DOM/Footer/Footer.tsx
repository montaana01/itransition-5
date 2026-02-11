export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative h-20 overflow-hidden flex items-center text-cyan-50 border-t border-teal-100/20 bg-[radial-gradient(150%_120%_at_0%_0%,#164e63_0%,#0f172a_52%,#020617_100%)]">
      <div className="absolute w-[190px] h-[190px] rounded-full -left-[90px] -top-[110px] bg-green-500/15 blur-[10px] pointer-events-none" />

      <div className="absolute w-[200px] h-[200px] rounded-full -right-[100px] -bottom-[120px] bg-amber-500/20 blur-[10px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 flex items-center justify-between gap-4">
        <a
          href="https://github.com/montaana01"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-95 font-semibold text-sm hover:underline"
        >
          © {year} Aliaksei Yakauleu
        </a>

        <a
          href="https://www.itransition.com"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-95 font-semibold hover:underline"
        >
          iTransition
        </a>
      </div>
    </footer>
  );
};
