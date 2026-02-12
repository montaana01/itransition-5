export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative h-20 overflow-hidden flex items-center bg-[radial-gradient(150%_120%_at_0%_0%,#164e63_0%,#0f172a_52%,#020617_100%)]">
      <div className="container mx-auto px-4 relative z-10 flex items-center justify-between gap-4">
        <a
          href="https://github.com/montaana01"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-sm hover:underline"
        >
          © {year} Aliaksei Yakauleu
        </a>

        <a
          href="https://www.itransition.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
        >
          iTransition
        </a>
      </div>
    </footer>
  );
};
