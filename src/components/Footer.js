import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#17223A] bg-[#050816] py-8" data-testid="footer">
      <div className="section-shell flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="text-sm font-semibold text-slate-100">
            {PERSONAL_INFO.name}
          </p>
          <p className="mt-1 text-xs text-[#8390A7]">
            © {currentYear} · Built with React and care in Nepal.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-lg text-[#A8B3C7] hover:bg-[#0B1224] hover:text-cyan-400"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-lg text-[#A8B3C7] hover:bg-[#0B1224] hover:text-cyan-400"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="grid h-11 w-11 place-items-center rounded-lg text-[#A8B3C7] hover:bg-[#0B1224] hover:text-cyan-400"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="#home"
            className="ml-2 inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#2B3B59] px-4 text-xs font-semibold text-[#C8D2E3] hover:border-cyan-400 hover:text-cyan-400"
          >
            Back to top
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
