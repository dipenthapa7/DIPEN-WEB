import { motion } from "framer-motion";
import { BarChart3, Database, PanelsTopLeft } from "lucide-react";
import { CAPABILITIES_DATA } from "../data/portfolioData";

const iconMap = {
  Database,
  BarChart: BarChart3,
  Layout: PanelsTopLeft,
};

const Skills = () => (
  <section
    id="capabilities"
    className="py-[72px] md:py-24 lg:py-[104px]"
    data-testid="skills-section"
  >
    <div className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-[700px]"
      >
        <p className="section-kicker">Capabilities</p>
        <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-50 md:text-[2.5rem]">
          How I move a project forward.
        </h2>
        <p className="mt-4 text-base leading-7 text-[#A8B3C7]">
          Practical strengths demonstrated through coursework and shipped
          projects—without arbitrary skill percentages.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {CAPABILITIES_DATA.map((capability, index) => {
          const Icon = iconMap[capability.icon] || Database;
          return (
            <motion.article
              key={capability.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="surface-card min-h-[240px] p-7 transition-colors hover:border-[#36506F]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-400">
                <Icon size={21} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-50">
                {capability.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#A8B3C7]">
                {capability.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {capability.tools.map((tool) => (
                  <li
                    key={tool}
                    className="relative pl-3 text-xs font-semibold text-[#C8D2E3] before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-emerald-400"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
