import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { PERSONAL_INFO, PROJECTS_DATA } from "../data/portfolioData";

const Projects = () => (
  <section
    id="work"
    className="bg-[#111A31] py-[72px] md:py-24 lg:py-[104px]"
    data-testid="projects-section"
  >
    <div className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"
      >
        <div>
          <p className="section-kicker">Selected work</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-50 md:text-[2.5rem]">
            One project, shown with depth.
          </h2>
        </div>
        <p className="max-w-[460px] text-sm leading-6 text-[#A8B3C7] md:text-right">
          I&apos;m building my portfolio deliberately. Here&apos;s the strongest
          project now; more will appear as they become ready to explain and
          defend.
        </p>
      </motion.div>

      {PROJECTS_DATA.map((project) => (
        <motion.article
          key={project.id}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6 }}
          className="surface-card grid overflow-hidden lg:min-h-[430px] lg:grid-cols-[0.95fr_1.05fr]"
          data-testid={`project-card-${project.id}`}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative min-h-[280px] overflow-hidden border-b border-[#21304D] bg-slate-50 lg:min-h-full lg:border-b-0 lg:border-r"
            aria-label={`Open ${project.title} live dashboard`}
          >
            <img
              src={project.image}
              alt="Line chart showing Nepal PM2.5 exposure trend from 1990 to 2023"
              width="880"
              height="436"
              loading="lazy"
              className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-[#050816] text-cyan-400 shadow-lg">
              <ArrowUpRight size={19} />
            </span>
          </a>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-cyan-400">
                {project.number}
              </span>
              <span className="h-px w-8 bg-[#334563]" />
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#A8B3C7]">
                {project.eyebrow}
              </span>
            </div>
            <h3 className="mt-5 text-2xl font-bold tracking-[-0.025em] text-slate-50 sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-[#A8B3C7]">
              {project.description}
            </p>
            <p className="mt-4 border-l-2 border-emerald-400 pl-4 text-sm leading-6 text-slate-300">
              {project.outcome}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
              {project.techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-[#2B3B59] bg-[#111A31] px-2.5 py-1.5 text-xs font-semibold text-[#C8D2E3]"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 text-sm font-bold text-[#050816] hover:bg-cyan-300"
                data-testid={`project-live-${project.id}`}
              >
                Live dashboard
                <ArrowUpRight size={17} />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#2B3B59] px-5 text-sm font-semibold text-slate-100 hover:border-cyan-400"
                data-testid={`project-github-${project.id}`}
              >
                <Github size={17} />
                Source code
              </a>
            </div>
            <p className="mt-3 text-xs text-[#8390A7]">
              The Streamlit demo may take a moment to wake up.
            </p>
          </div>
        </motion.article>
      ))}

      <div className="mt-8 text-center">
        <a
          href={PERSONAL_INFO.repositories}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          data-testid="view-more-github"
        >
          Browse all GitHub repositories
          <ArrowUpRight size={17} />
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
