import { ArrowRight, ArrowUpRight, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Project } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { ProjectPreview } from "./ProjectPreview";
import { Tag } from "./primitives";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      aria-labelledby={`${project.slug}-title`}
      className={cn(
        "group flex h-full flex-col rounded-3xl border border-border bg-surface p-3 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift",
        featured && "md:grid md:grid-cols-12 md:gap-2",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl bg-paper p-4 sm:p-7",
          featured
            ? "aspect-[4/3] sm:aspect-[16/10] md:col-span-7 md:aspect-auto md:min-h-[24rem]"
            : "aspect-[4/3] sm:aspect-[16/11]",
        )}
      >
        <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
        <div className="relative h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <ProjectPreview kind={project.preview} title={project.title} />
        </div>
        <span className="eyebrow absolute top-3 right-3 rounded-full bg-surface/90 px-2.5 py-1 text-[0.6rem] text-muted-foreground backdrop-blur">
          Illustrative mockup
        </span>
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col gap-5 px-3 pt-6 pb-3",
          featured && "md:col-span-5 md:justify-center md:px-6",
        )}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="eyebrow text-muted-foreground">{project.category}</span>
          {project.live && (
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-success" aria-hidden /> Live
            </span>
          )}
        </div>
        <div>
          <h3
            id={`${project.slug}-title`}
            className={cn(
              "type-headline",
              featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl",
            )}
          >
            {project.title}
          </h3>
          <p className="font-accent mt-1 text-xl text-primary">{project.tagline}</p>
          <p className="mt-3 leading-relaxed text-muted-foreground">{project.summary}</p>
        </div>
        <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
          {project.stack.map((s) => (
            <li key={s}>
              <Tag>{s}</Tag>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <Button asChild variant="ink" size="sm" className="h-10 px-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} on GitHub (opens in a new tab)`}
            >
              <Github /> GitHub
            </a>
          </Button>
          {project.live && (
            <Button asChild variant="accent" size="sm" className="h-10 px-4">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo (opens in a new tab)`}
              >
                Live Demo <ArrowUpRight />
              </a>
            </Button>
          )}
          <Button asChild variant="pill" size="sm" className="group/cs h-10 px-4">
            <a href={project.caseStudyHref}>
              View Case Study{" "}
              <ArrowRight className="transition-transform group-hover/cs:translate-x-0.5" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
