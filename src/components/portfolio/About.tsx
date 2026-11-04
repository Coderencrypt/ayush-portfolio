import { Code2, GraduationCap, PenTool } from "lucide-react";

import { aboutFacts, profile } from "@/content/portfolio";
import { Container, Reveal, SectionHeading } from "./primitives";

const factIcons = [GraduationCap, Code2, PenTool];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="01"
          eyebrow="About"
          title={
            <span id="about-title">
              Engineer by training, <span className="font-accent text-primary">designer</span> by
              curiosity.
            </span>
          }
        />

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <Reveal className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-7 sm:text-xl">
            <p>
              I'm a Computer Science Engineering student at {profile.education.school} with a focus
              on frontend development. I enjoy turning ideas and design files into interfaces that
              are fast, accessible and pleasant to use.
            </p>
            <p>
              Alongside code, I'm drawn to product design — understanding why an interface works,
              not just how to build it. I'm looking for opportunities where I can learn from
              experienced teams and contribute to products people rely on.
            </p>
          </Reveal>

          <ul className="space-y-3 md:col-span-5">
            {aboutFacts.map((fact, index) => {
              const Icon = factIcons[index] ?? Code2;
              return (
                <Reveal as="li" key={fact.title} delay={index * 0.08}>
                  <div className="group flex gap-4 rounded-2xl border border-border bg-surface p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-medium tracking-tight">{fact.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {fact.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
