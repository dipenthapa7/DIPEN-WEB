import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../data/portfolioData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const sections = NAV_LINKS.map((link) => link.href.slice(1));

      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 140) {
          setActiveSection(section);
          return;
        }
      }
      setActiveSection("");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTo = (event, href) => {
    event.preventDefault();
    const scrollToSection = () =>
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

    if (isOpen) {
      setIsOpen(false);
      window.setTimeout(scrollToSection, 320);
      return;
    }

    scrollToSection();
  };

  return (
    <motion.header
      initial={{ y: -88 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled || isOpen
          ? "border-[#21304D] bg-[#050816]/95 backdrop-blur-xl"
          : "border-transparent bg-[#050816]/75 backdrop-blur-md"
      }`}
      data-testid="navbar"
    >
      <nav
        className="section-shell flex h-[72px] items-center justify-between md:h-[88px]"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          onClick={(event) => goTo(event, "#home")}
          className="group flex items-center gap-3"
          data-testid="navbar-logo"
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#2B3B59] bg-[#0B1224] text-sm font-extrabold tracking-tight text-cyan-400 transition-colors group-hover:border-cyan-400">
            {PERSONAL_INFO.shortName}
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-slate-100 sm:block">
            {PERSONAL_INFO.name}
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => goTo(event, link.href)}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-cyan-400"
                    : "text-[#A8B3C7] hover:text-slate-50"
                }`}
                aria-current={isActive ? "page" : undefined}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-cyan-400 px-5 text-sm font-bold text-[#050816] hover:bg-cyan-300"
          >
            Let&apos;s talk
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-lg border border-[#2B3B59] bg-[#0B1224] text-slate-100 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          data-testid="mobile-menu-button"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#21304D] bg-[#050816] md:hidden"
            aria-label="Mobile navigation"
            data-testid="mobile-menu"
          >
            <div className="section-shell flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => goTo(event, link.href)}
                  className="flex min-h-12 items-center border-b border-[#17223A] text-sm font-semibold text-[#A8B3C7] last:border-0 hover:text-cyan-400"
                  data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 font-bold text-[#050816]"
              >
                Let&apos;s talk
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
