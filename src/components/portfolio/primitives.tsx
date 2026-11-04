import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}

type RevealProps = {
  children: ReactNode;
  className?: string | undefined;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "article";
};

/** Fades + lifts content into view once. Respects reduced-motion. */
export function Reveal({ children, className, delay = 0, y = 24, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  index?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string | undefined;
  tone?: "default" | "inverted";
};

export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  className,
  tone = "default",
}: SectionHeadingProps) {
  const inverted = tone === "inverted";
  return (
    <div className={cn("grid gap-6 md:grid-cols-12 md:items-end", className)}>
      <Reveal className="md:col-span-7">
        <p
          className={cn(
            "eyebrow mb-5 flex items-center gap-3",
            inverted ? "text-ink-foreground/60" : "text-muted-foreground",
          )}
        >
          {index && <span className="text-primary">{index}</span>}
          <span
            className={cn("h-px w-8", inverted ? "bg-ink-foreground/30" : "bg-foreground/20")}
          />
          {eyebrow}
        </p>
        <h2 className="type-headline text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1} className="md:col-span-5">
          <p
            className={cn(
              "max-w-md text-base leading-relaxed sm:text-lg md:ml-auto",
              inverted ? "text-ink-foreground/70" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Tag({
  children,
  className,
  tone = "default",
}: {
  children: ReactNode;
  className?: string | undefined;
  tone?: "default" | "inverted" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tone === "default" && "border-border bg-surface text-foreground/80",
        tone === "inverted" && "border-ink-foreground/15 text-ink-foreground/80",
        tone === "accent" && "border-transparent bg-accent text-accent-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
