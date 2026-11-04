import { Code2, PenTool, Wrench } from "lucide-react";

import { skillGroups } from "@/content/portfolio";
import { Container, Reveal, SectionHeading, Tag } from "./primitives";

const icons = [Code2, PenTool, Wrench];

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Skills"
          title={
            <span id="skills-title">
              A toolkit for <span className="font-accent text-primary">craft</span> and code.
            </span>
          }
          description="The languages, tools and design practices I use to take an idea from sketch to shipped interface."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length] ?? Code2;
            return (
              <Reveal key={group.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col rounded-3xl border border-border bg-surface p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-2xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="type-headline mt-8 text-2xl">{group.title}</h3>
                  <p className="mt-1 text-muted-foreground">{group.description}</p>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Tag>{item}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
