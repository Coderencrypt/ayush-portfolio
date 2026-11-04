import { ArrowRight } from "lucide-react";

import { caseStudies } from "@/content/portfolio";
import { Container, Reveal, SectionHeading, Tag } from "./primitives";

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-title"
      className="relative mx-3 overflow-hidden rounded-[2rem] bg-ink py-24 text-ink-foreground sm:mx-5 sm:rounded-[2.5rem] sm:py-32"
    >
      <div aria-hidden className="bg-glow pointer-events-none absolute inset-0 opacity-70" />
      <Container className="relative">
        <SectionHeading
          tone="inverted"
          index="03"
          eyebrow="UI/UX Case Studies"
          title={
            <span id="case-studies-title">
              Thinking before <span className="font-accent text-primary-soft">pixels.</span>
            </span>
          }
          description="Self-initiated design studies exploring real product problems — the reasoning, trade-offs and decisions behind the interface."
        />

        <ol className="mt-16 border-t border-ink-foreground/15">
          {caseStudies.map((study, index) => (
            <Reveal as="li" key={study.slug} delay={index * 0.06}>
              <article className="group grid gap-6 border-b border-ink-foreground/15 py-10 transition-colors md:grid-cols-12 md:gap-8 md:py-12">
                <div className="flex items-start gap-4 md:col-span-5">
                  <span className="font-mono text-sm text-primary-soft/80">{study.index}</span>
                  <div>
                    <p className="eyebrow text-ink-foreground/50">{study.label}</p>
                    <h3 className="type-headline mt-3 text-2xl transition-colors group-hover:text-primary-soft sm:text-3xl">
                      {study.title}
                    </h3>
                  </div>
                </div>

                <dl className="grid gap-6 sm:grid-cols-2 md:col-span-5">
                  <div>
                    <dt className="eyebrow text-ink-foreground/50">Problem</dt>
                    <dd className="mt-2 leading-relaxed text-ink-foreground/80">{study.problem}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-ink-foreground/50">Approach</dt>
                    <dd className="mt-2 leading-relaxed text-ink-foreground/80">
                      {study.approach}
                    </dd>
                  </div>
                </dl>

                <div className="flex flex-wrap content-start gap-2 md:col-span-2 md:justify-end">
                  {study.focus.map((focus) => (
                    <Tag key={focus} tone="inverted">
                      {focus}
                    </Tag>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-ink-foreground/80 transition-colors hover:text-ink-foreground"
          >
            <span className="link-underline">Want the full walkthrough? Let's talk</span>
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
