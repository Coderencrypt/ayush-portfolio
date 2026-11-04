import { ArrowUpRight, Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

import { profile } from "@/content/portfolio";
import { Container, Reveal } from "./primitives";

const channels: { label: string; handle: string; href: string; icon: LucideIcon }[] = [
  {
    label: "GitHub",
    handle: `@${profile.links.githubHandle}`,
    href: profile.links.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    handle: profile.links.linkedinHandle,
    href: profile.links.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    handle: profile.links.email,
    href: `mailto:${profile.links.email}`,
    icon: Mail,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden py-24 sm:py-36"
    >
      <div aria-hidden className="bg-glow pointer-events-none absolute inset-0" />
      <Container className="relative">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-muted-foreground">
            <span className="text-primary">06</span>
            <span className="h-px w-8 bg-foreground/20" />
            Contact
          </p>
          <h2
            id="contact-title"
            className="type-display mt-6 max-w-5xl text-[clamp(2.5rem,7vw,6rem)]"
          >
            Let's build something <span className="font-accent text-primary">intuitive</span>{" "}
            together.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm currently open to UI / Frontend Engineer opportunities. Reach out through GitHub,
            LinkedIn or email.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel, index) => (
            <Reveal key={channel.label} delay={index * 0.08}>
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center justify-between gap-4 rounded-3xl border border-border bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-glow focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:p-8"
              >
                <div className="flex items-center gap-5">
                  <span className="grid size-14 place-items-center rounded-2xl bg-ink text-ink-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <channel.icon className="size-6" aria-hidden />
                  </span>
                  <div>
                    <p className="type-headline text-2xl sm:text-3xl">{channel.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{channel.handle}</p>
                  </div>
                </div>
                <ArrowUpRight
                  className="size-6 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                  aria-hidden
                />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
