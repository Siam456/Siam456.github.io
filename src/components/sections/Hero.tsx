import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiDownload, FiFileText } from "react-icons/fi";
import { Container } from "../layout/Container";
import { HeroTerminal } from "./HeroTerminal";
import { profile } from "../../lib/data";

export function Hero() {
  const linkedin = profile.socials.find((social) => social.icon === "linkedin");

  return (
    <section id="top" className="relative isolate min-h-[92vh] overflow-hidden bg-bg text-ink">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full max-h-screen w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-gray-800"
      >
        <defs>
          <pattern id="hero-grid" width="160" height="160" patternUnits="userSpaceOnUse">
            <path d="M160 0H0V160" fill="none" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect x="480" y="0" width="160" height="160" className="fill-gray-100/70 dark:fill-gray-900/45" stroke="none" />
        <rect x="1120" y="0" width="160" height="160" className="fill-gray-100/70 dark:fill-gray-900/45" stroke="none" />
        <rect x="160" y="480" width="160" height="160" className="fill-gray-100/55 dark:fill-gray-900/35" stroke="none" />
        <rect x="1440" y="480" width="160" height="160" className="fill-gray-100/55 dark:fill-gray-900/35" stroke="none" />
        <rect x="320" y="800" width="160" height="160" className="fill-gray-100/55 dark:fill-gray-900/35" stroke="none" />
        <rect x="1120" y="800" width="160" height="160" className="fill-gray-100/55 dark:fill-gray-900/35" stroke="none" />
        <rect width="100%" height="100%" fill="url(#hero-grid)" stroke="none" />
      </svg>
      <div className="hero-blueprint" aria-hidden="true">
        <span className="blueprint-plus blueprint-plus-one" />
        <span className="blueprint-plus blueprint-plus-two" />
        <span className="blueprint-plus blueprint-plus-three" />
        <span className="blueprint-plus blueprint-plus-four" />
        <span className="blueprint-plus blueprint-plus-five" />
        <span className="blueprint-plus blueprint-plus-six" />
      </div>

      <Container className="relative flex min-h-[88vh] max-w-[1480px] items-center py-24 lg:px-12 lg:py-28 xl:px-14">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(500px,0.98fr)] lg:items-stretch lg:gap-14 xl:gap-20">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: "easeOut" }} className="relative z-10 flex max-w-3xl flex-col justify-center text-left">
          <div className="hero-status" aria-label="Senior Software Engineer, available for meaningful work">
            <span className="hero-status-role">Senior Software Engineer</span>
            <span className="hero-status-rule" aria-hidden="true" />
            <span className="hero-status-availability"><i aria-hidden="true" /> Available for meaningful work</span>
          </div>
          <h1 className="mt-8 font-display text-[clamp(3.25rem,5.5vw,6rem)] font-extrabold leading-[.96] tracking-[-0.058em] text-balance">
            I build dependable software <span className="text-ghost-fade">from interface to infrastructure.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">I design and ship full-stack products, scalable backend systems, cloud infrastructure, and applied AI—from user experience and APIs to real-time services and production deployment.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-bg transition hover:bg-primary-dark hover:text-primary-foreground">View selected work <FiArrowDown /></a>
            {linkedin && <a href={linkedin.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface/75 px-5 py-3 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary">LinkedIn <FiArrowUpRight /></a>}
            <div className="inline-flex overflow-hidden rounded-lg border border-line bg-surface/75 text-ink transition hover:border-primary">
              <a href="/Hasibul_Hasan_Resume_2026.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold transition hover:text-primary"><FiFileText /> View résumé</a>
              <a href="/Hasibul_Hasan_Resume_2026.pdf" download="Hasibul_Hasan_Resume_2026.pdf" className="grid w-11 place-items-center border-l border-line text-muted transition hover:bg-primary-soft hover:text-primary" aria-label="Download résumé" title="Download résumé"><FiDownload /></a>
            </div>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center px-3 py-3 text-sm font-semibold text-muted transition hover:text-primary">Contact</a>
          </div>
          <p className="mt-12 text-xs font-medium tracking-[0.02em] text-faint">Brain Station 23 <span className="mx-2 text-line">·</span> 4+ years building production systems <span className="mx-2 text-line">·</span> Dhaka</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }} className="flex min-h-0 flex-col justify-center">
          <HeroTerminal />
        </motion.div>
        </div>
      </Container>
    </section>
  );
}
