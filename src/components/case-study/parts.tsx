import { FlaskConical, ImageIcon, Info, ShieldCheck, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/portfolio/primitives";

type LabelKind = "assumption" | "hypothesis" | "illustrative" | "verified" | "proposed";

const labelStyles: Record<LabelKind, { text: string; icon: typeof Info; className: string }> = {
  assumption: {
    text: "Assumption",
    icon: FlaskConical,
    className: "border-primary/30 bg-accent text-accent-foreground",
  },
  hypothesis: {
    text: "Design hypothesis",
    icon: FlaskConical,
    className: "border-primary/30 bg-accent text-accent-foreground",
  },
  illustrative: {
    text: "Illustrative example",
    icon: ImageIcon,
    className: "border-border bg-surface text-muted-foreground",
  },
  verified: {
    text: "Verified in code",
    icon: ShieldCheck,
    className: "border-success/30 bg-success/10 text-foreground",
  },
  proposed: {
    text: "Proposed — not in current build",
    icon: Sparkles,
    className: "border-foreground/20 bg-ink text-ink-foreground",
  },
};

/** Honesty label used across the case study to separate facts from hypotheses. */
export function Label({
  kind,
  children,
  className,
}: {
  kind: LabelKind;
  children?: ReactNode;
  className?: string | undefined;
}) {
  const s = labelStyles[kind];
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.65rem]",
        s.className,
        className,
      )}
    >
      <s.icon className="size-3" aria-hidden />
      {children ?? s.text}
    </span>
  );
}

type CaseSectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  label?: ReactNode;
  children: ReactNode;
  className?: string | undefined;
};

export function CaseSection({
  id,
  index,
  eyebrow,
  title,
  intro,
  label,
  children,
  className,
}: CaseSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("border-t border-border py-20 sm:py-28", className)}
    >
      <Reveal>
        <p className="eyebrow flex items-center gap-3 text-muted-foreground">
          <span className="text-primary">{index}</span>
          <span className="h-px w-8 bg-foreground/20" />
          {eyebrow}
        </p>
        <h2
          id={`${id}-title`}
          className="type-headline mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl"
        >
          {title}
        </h2>
        {label && <div className="mt-5 flex flex-wrap gap-2">{label}</div>}
        {intro && (
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground">
            {intro}
          </div>
        )}
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}

export function Callout({
  title,
  children,
  tone = "default",
}: {
  title: string;
  children: ReactNode;
  tone?: "default" | "accent";
}) {
  return (
    <aside
      className={cn(
        "flex gap-4 rounded-2xl border p-5 sm:p-6",
        tone === "accent" ? "border-primary/25 bg-accent" : "border-border bg-surface",
      )}
    >
      <Info
        className={cn(
          "mt-0.5 size-5 shrink-0",
          tone === "accent" ? "text-primary" : "text-muted-foreground",
        )}
        aria-hidden
      />
      <div>
        <p className="font-medium tracking-tight">{title}</p>
        <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </aside>
  );
}

export function CaseStudyToc({ items }: { items: readonly { id: string; label: string }[] }) {
  const ids = items.map((i) => i.id);
  const active = useActiveSection(ids);
  return (
    <nav aria-label="Case study sections" className="sticky top-28">
      <p className="eyebrow mb-4 text-muted-foreground">Contents</p>
      <ol className="space-y-1 border-l border-border">
        {items.map((item, i) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "-ml-px flex gap-3 border-l py-1.5 pl-4 text-sm transition-colors",
                  isActive
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-xs",
                    isActive ? "text-primary" : "text-muted-foreground/60",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Frame that holds a visual (wireframe, UI mock, diagram) with a caption. */
export function Figure({
  children,
  caption,
  label,
  className,
}: {
  children: ReactNode;
  caption: string;
  label?: ReactNode;
  className?: string | undefined;
}) {
  return (
    <Reveal>
      <figure className={cn("rounded-3xl border border-border bg-paper p-3 sm:p-4", className)}>
        <div className="relative overflow-hidden rounded-2xl">{children}</div>
        <figcaption className="flex flex-wrap items-center justify-between gap-3 px-2 pt-4 pb-1 text-sm text-muted-foreground">
          <span>{caption}</span>
          {label}
        </figcaption>
      </figure>
    </Reveal>
  );
}
