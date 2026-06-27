import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, align = "center", light }: Props) {
  return (
    <div
      className={[
        align === "center" ? "text-center mx-auto" : "text-left",
        "max-w-2xl",
        align === "center" ? "mx-auto" : "",
      ].join(" ")}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className={[
            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]",
            light
              ? "bg-white/10 text-[color:var(--brand-accent)]"
              : "bg-[color:var(--brand-soft)] text-[color:var(--brand)]",
          ].join(" ")}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-accent)]" />
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className={[
          "mt-4 text-4xl md:text-5xl lg:text-[56px] leading-[1.05] font-display font-extrabold tracking-tight",
          light ? "!text-white" : "",
        ].join(" ")}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className={[
            "mt-5 text-base md:text-lg leading-relaxed",
            light ? "text-white/75" : "text-[color:var(--muted-foreground)]",
          ].join(" ")}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
