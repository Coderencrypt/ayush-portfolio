import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile, skillGroups } from "@/content/portfolio";
import { HeroOrbit } from "./HeroOrbit";
import { Container } from "./primitives";

const headline = ["I", "design", "and", "build", "digital", "experiences", "that", "feel"];
const marqueeItems = skillGroups.flatMap((g) => g.items);

export function Hero() {
  const reduce = useReducedMotion();
  const word = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: "0.4em" },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-36 sm:pt-44 lg:pt-52"
    >
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]"
      />
      <div aria-hidden className="bg-glow pointer-events-none absolute inset-0" />

      <Container className="relative">
        <div className="absolute -top-32 right-0 hidden w-[min(32vw,440px)] opacity-90 lg:block xl:-right-8">
          <HeroOrbit />
        </div>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/80 py-1.5 pr-4 pl-3 text-sm text-muted-foreground backdrop-blur"
        >
          <span className="animate-pulse-dot size-2 rounded-full bg-success" aria-hidden />
          {profile.availability}
        </motion.p>

        <h1
          id="hero-title"
          className="type-display relative mt-10 max-w-[15ch] text-[clamp(3rem,10vw,9.5rem)] sm:mt-12"
        >
          {headline.map((w, i) => (
            <span key={i}>
              <motion.span {...word(i)} className="inline-block">
                {w}
              </motion.span>{" "}
            </span>
          ))}
          <motion.span
            {...word(headline.length)}
            className="font-accent inline-block pr-2 text-primary"
          >
            intuitive.
          </motion.span>
        </h1>

        <div className="mt-12 grid gap-10 md:mt-20 md:grid-cols-12 md:items-end">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground md:col-span-6 sm:text-xl"
          >
            I'm <span className="text-foreground">{profile.name}</span> — a{" "}
            {profile.role.toLowerCase()} and {profile.secondaryRole.toLowerCase()} who cares about
            the space where clean code meets thoughtful interface design.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex flex-wrap gap-3 md:col-span-6 md:justify-end"
          >
            <Button asChild variant="accent" size="xl">
              <a href="#work">
                View my work <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="pill" size="xl">
              <a href="#contact">Get in touch</a>
            </Button>
          </motion.div>
        </div>

        <motion.dl
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-3 md:mt-28"
        >
          {[
            { k: "Role", v: profile.role },
            { k: "Focus", v: profile.secondaryRole },
            { k: "Education", v: `B.Tech CSE · ${profile.education.school}` },
          ].map((item) => (
            <div key={item.k}>
              <dt className="eyebrow text-muted-foreground">{item.k}</dt>
              <dd className="mt-2 text-base font-medium tracking-tight">{item.v}</dd>
            </div>
          ))}
        </motion.dl>
      </Container>

      <div
        className="relative mt-16 border-y border-border bg-surface/60 py-5 md:mt-20"
        aria-hidden
      >
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-10 text-lg tracking-tight text-muted-foreground"
            >
              {item}
              <span className="size-1.5 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute right-5 bottom-28 hidden items-center gap-2 eyebrow text-muted-foreground transition-colors hover:text-foreground lg:right-12 lg:flex"
      >
        Scroll <ArrowDown className="size-3.5" />
      </a>
    </section>
  );
}
