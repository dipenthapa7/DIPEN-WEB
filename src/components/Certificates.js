import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import { CERTIFICATES_DATA } from "../data/portfolioData";

const Certificates = () => (
  <section
    id="credentials"
    className="py-[72px] md:py-24 lg:py-[104px]"
    data-testid="certificates-section"
  >
    <div className="section-shell">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-kicker">Credentials</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-50 md:text-[2.5rem]">
            Verified learning milestones.
          </h2>
        </motion.div>
        <p className="max-w-[430px] text-sm leading-6 text-[#A8B3C7] md:text-right">
          Certificates support the work; projects remain the main evidence.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {CERTIFICATES_DATA.map((certificate, index) => (
          <motion.a
            key={certificate.id}
            href={certificate.credentialUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="surface-card group flex min-h-[190px] flex-col justify-between p-7 hover:border-cyan-400/60"
            data-testid={`certificate-card-${certificate.id}`}
          >
            <div className="flex items-start justify-between gap-5">
              <div className="grid h-11 w-11 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-400">
                <Award size={21} />
              </div>
              <ArrowUpRight
                size={20}
                className="text-[#8390A7] transition-colors group-hover:text-cyan-400"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-50">
                {certificate.name}
              </h3>
              <p className="mt-2 text-sm text-[#A8B3C7]">
                {certificate.issuer} <span aria-hidden="true">·</span>{" "}
                {certificate.date}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
