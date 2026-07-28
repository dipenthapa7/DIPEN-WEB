import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { EMAILJS_CONFIG, PERSONAL_INFO } from "../data/portfolioData";

const initialForm = {
  user_name: "",
  user_email: "",
  message: "",
};

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ target }) => {
    setFormData((current) => ({
      ...current,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.message.trim().length < 10) {
      setStatus({
        type: "error",
        message: "Please write at least 10 characters so I have enough context.",
      });
      return;
    }

    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      );
      setStatus({
        type: "success",
        message: "Thanks—your message was sent. I’ll reply as soon as I can.",
      });
      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: `The form could not send right now. Email me directly at ${PERSONAL_INFO.email}.`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#111A31] py-[72px] md:py-24 lg:py-[104px]"
      data-testid="contact-section"
    >
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="surface-card grid overflow-hidden lg:grid-cols-[0.78fr_1.22fr]"
        >
          <div className="border-b border-[#21304D] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
            <p className="section-kicker">Contact</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-slate-50 md:text-[2.5rem] md:leading-tight">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#A8B3C7]">
              I&apos;m open to internships, junior opportunities, and thoughtful
              collaborations. Tell me what you&apos;re working on and where I
              could help.
            </p>

            <div className="mt-9 space-y-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex min-h-11 items-center gap-3 text-sm text-[#C8D2E3] hover:text-cyan-400"
              >
                <Mail size={18} className="text-cyan-400" />
                <span className="break-all">{PERSONAL_INFO.email}</span>
              </a>
              <p className="flex min-h-11 items-center gap-3 text-sm text-[#C8D2E3]">
                <MapPin size={18} className="text-cyan-400" />
                {PERSONAL_INFO.location}
              </p>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-lg border border-[#2B3B59] text-[#A8B3C7] hover:border-cyan-400 hover:text-cyan-400"
                aria-label="GitHub"
              >
                <Github size={19} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-lg border border-[#2B3B59] text-[#A8B3C7] hover:border-cyan-400 hover:text-cyan-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={19} />
              </a>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="p-7 sm:p-10 lg:p-12"
            data-testid="contact-form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="user_name"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Name
                </label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  maxLength="80"
                  required
                  disabled={isLoading}
                  className="min-h-12 w-full rounded-lg border border-[#2B3B59] bg-[#111A31] px-4 text-sm text-slate-50 placeholder:text-[#6F7D94] focus:border-cyan-400 focus:outline-none disabled:opacity-60"
                  data-testid="contact-name-input"
                />
              </div>
              <div>
                <label
                  htmlFor="user_email"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Email
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  maxLength="120"
                  required
                  disabled={isLoading}
                  className="min-h-12 w-full rounded-lg border border-[#2B3B59] bg-[#111A31] px-4 text-sm text-slate-50 placeholder:text-[#6F7D94] focus:border-cyan-400 focus:outline-none disabled:opacity-60"
                  data-testid="contact-email-input"
                />
              </div>
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between gap-4">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-200"
                >
                  Message
                </label>
                <span className="text-xs text-[#8390A7]">
                  {formData.message.length}/500
                </span>
              </div>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity or project..."
                maxLength="500"
                required
                disabled={isLoading}
                className="w-full resize-none rounded-lg border border-[#2B3B59] bg-[#111A31] px-4 py-3 text-sm leading-6 text-slate-50 placeholder:text-[#6F7D94] focus:border-cyan-400 focus:outline-none disabled:opacity-60"
                data-testid="contact-message-input"
              />
            </div>

            <div aria-live="polite" aria-atomic="true">
              {status.message && (
                <div
                  className={`mt-5 flex items-start gap-3 rounded-lg border p-4 text-sm leading-5 ${
                    status.type === "success"
                      ? "border-emerald-400/25 bg-emerald-400/[0.07] text-emerald-200"
                      : "border-red-400/25 bg-red-400/[0.07] text-red-200"
                  }`}
                  role={status.type === "error" ? "alert" : "status"}
                  data-testid="contact-status-message"
                >
                  {status.type === "success" ? (
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  ) : (
                    <AlertCircle size={18} className="mt-0.5 shrink-0" />
                  )}
                  {status.message}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 text-sm font-bold text-[#050816] hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              data-testid="contact-submit-btn"
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending
                </>
              ) : (
                <>
                  Send message
                  <Send size={17} />
                </>
              )}
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#8390A7] hover:text-cyan-400 sm:ml-5 sm:mt-0"
            >
              Or email directly
              <ArrowUpRight size={14} />
            </a>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
