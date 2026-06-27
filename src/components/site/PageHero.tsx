import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--brand-dark)] text-white pt-36 pb-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(800px 400px at 80% 0%, rgba(185,225,30,0.18), transparent 60%), radial-gradient(900px 500px at 10% 100%, rgba(10,94,168,0.55), transparent 60%)",
        }}
      />
      <div className="container-page relative">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--brand-accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-accent)]" />
            {eyebrow}
          </div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-display font-extrabold tracking-tight !text-white text-5xl md:text-6xl lg:text-7xl leading-[1.02] max-w-4xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 max-w-2xl text-white/75 text-lg leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
