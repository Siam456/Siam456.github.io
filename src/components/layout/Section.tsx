import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  titleMuted?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  titleMuted,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-24 overflow-visible py-24 md:py-36 ${className}`}>
      <div className="section-blueprint" aria-hidden="true">
        <span className="section-line section-line-left" />
        <span className="section-line section-line-top" />
        <span className="section-plus section-plus-left" />
      </div>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 max-w-3xl md:mb-20"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[38px] font-bold leading-[1.1] tracking-[-0.035em] text-ink text-balance md:text-[56px]">
            {title}{titleMuted && <> <span className="text-faint">{titleMuted}</span></>}
          </h2>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </Container>
    </section>
  );
}
