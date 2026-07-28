import { motion } from "framer-motion";
import { BookOpen, MapPin, Sparkles } from "lucide-react";
import { ABOUT_DATA } from "../data/portfolioData";

const About = () => (
  <section
    id="about"
    className="bg-[#111A31] py-[72px] md:py-24 lg:py-[104px]"
    data-testid="about-section"
  >
    <div className="section-shell grid gap-12 lg:grid-cols-[1fr_420px] lg:gap-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="section-kicker">About</p>
        <h2 className="mt-3 max-w-[650px] text-3xl font-bold tracking-[-0.03em] text-slate-50 md:text-[2.5rem] md:leading-[1.2]">
          Curious about the full path from question to working product.
        </h2>
        <div className="mt-7 max-w-[700px] space-y-5 text-base leading-7 text-[#A8B3C7]">
          <p>{ABOUT_DATA.description}</p>
          <p>{ABOUT_DATA.approach}</p>
        </div>

        <dl className="mt-9 grid gap-4 sm:grid-cols-3">
          {ABOUT_DATA.highlights.map((item) => (
            <div key={item.label} className="border-l border-[#36506F] pl-4">
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[#8390A7]">
                {item.label}
              </dt>
              <dd className="mt-2 text-sm font-semibold leading-5 text-slate-100">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        className="surface-card self-start p-7 sm:p-8"
        aria-labelledby="education-heading"
      >
        <div className="flex items-center justify-between">
          <div className="grid h-12 w-12 place-items-center rounded-lg border border-emerald-400/20 bg-emerald-400/[0.07] text-emerald-300">
            <BookOpen size={23} />
          </div>
          <span className="rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-semibold text-emerald-300">
            {ABOUT_DATA.education.status}
          </span>
        </div>
        <p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-cyan-400">
          Education
        </p>
        <h3
          id="education-heading"
          className="mt-3 text-2xl font-bold leading-tight text-slate-50"
        >
          {ABOUT_DATA.education.degree}
        </h3>
        <p className="mt-4 font-semibold text-[#C8D2E3]">
          {ABOUT_DATA.education.institution}
        </p>
        <p className="mt-2 text-sm leading-6 text-[#A8B3C7]">
          {ABOUT_DATA.education.affiliation}
        </p>
        <div className="mt-7 space-y-3 border-t border-[#21304D] pt-6 text-sm text-[#A8B3C7]">
          <p className="flex items-center gap-3">
            <MapPin size={17} className="text-cyan-400" />
            Kathmandu, Nepal
          </p>
          <p className="flex items-center gap-3">
            <Sparkles size={17} className="text-cyan-400" />
            Project-based learning
          </p>
        </div>
      </motion.aside>
    </div>
  </section>
);

export default About;
