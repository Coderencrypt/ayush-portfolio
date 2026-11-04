import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile, projects } from "@/content/portfolio";
import { ProjectCard } from "./ProjectCard";
import { Container, Reveal, SectionHeading } from "./primitives";

export function Work() {
  const [featured, ...rest] = projects;
  return (
    <section id="work" aria-labelledby="work-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Featured Projects"
          title={
            <span id="work-title">
              Selected <span className="font-accent text-primary">work</span>
            </span>
          }
          description="Three projects spanning AI tooling and real-time collaboration — from interface design to full-stack builds."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {featured && (
            <Reveal className="md:col-span-2">
              <ProjectCard project={featured} featured />
            </Reveal>
          )}
          {rest.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={(index % 2) * 0.1}
              className={index === rest.length - 1 && rest.length % 2 ? "md:col-span-2" : undefined}
            >
              <ProjectCard
                project={project}
                featured={index === rest.length - 1 && rest.length % 2 === 1}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button asChild variant="pill" size="xl">
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              <Github /> More on GitHub
            </a>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
