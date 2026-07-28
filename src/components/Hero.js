import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";
import { PERSONAL_INFO, PROFILE_IMAGE } from "../data/portfolioData";

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#17223A] pt-[72px] md:pt-[88px]"
      data-testid="hero-section"
    >
      <div className="pointer-events-none absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-cyan-400/[0.06] blur-[90px]" />
      <div className="section-shell grid gap-12 py-14 md:py-20 lg:grid-cols-[1fr_400px] lg:items-center lg:gap-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-[720px]"
        >
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-3.5 py-2 text-xs font-semibold text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for internships
          </div>

          <p className="mb-4 flex items-center gap-2 text-sm font-medium text-[#A8B3C7]">
            <MapPin size={16} className="text-cyan-400" aria-hidden="true" />
            {PERSONAL_INFO.location}
          </p>

          <h1 className="max-w-[720px] text-[2.65rem] font-extrabold leading-[1.08] tracking-[-0.045em] text-slate-50 sm:text-5xl md:text-[3.6rem]">
            Python &amp; Data Science Developer building useful tools from
            real-world data.
          </h1>

          <p className="mt-6 max-w-[650px] text-base leading-7 text-[#A8B3C7] md:text-lg md:leading-8">
            I&apos;m Dipen, a BIT student who enjoys taking projects from raw
            data to a clear analysis, interactive dashboard, and responsive
            web experience.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={scrollToWork}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 font-bold text-[#050816] hover:bg-cyan-300"
              data-testid="hero-view-projects-btn"
            >
              Explore selected work
              <ArrowDownRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </button>
            <a
              href={PERSONAL_INFO.repositories}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#2B3B59] bg-[#0B1224] px-6 font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-300"
            >
              View GitHub
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-sm text-[#A8B3C7]">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 hover:text-slate-50"
              aria-label="Dipen Thapa on GitHub"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 hover:text-slate-50"
              aria-label="Dipen Thapa on LinkedIn"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative mx-auto w-full max-w-[400px] lg:mx-0"
        >
          <div className="absolute -inset-3 rounded-[26px] border border-cyan-400/10" />
          <div className="relative h-[360px] overflow-hidden rounded-[20px] border border-[#2B3B59] bg-[#0B1224] sm:h-[500px]">
            <img
              src={PROFILE_IMAGE}
              alt="Dipen Thapa"
              width="400"
              height="500"
              fetchPriority="high"
              className="h-full w-full object-cover object-center"
              data-testid="hero-profile-image"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050816]/80 to-transparent px-5 pb-5 pt-20">
              <p className="text-sm font-semibold text-white">
                {PERSONAL_INFO.role}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
