import { processSteps } from "@/content/portfolio";
import { Container, Reveal, SectionHeading } from "./primitives";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="border-t border-border bg-paper py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Design Process"
          title={
            <span id="process-title">
              From question to <span className="font-accent text-primary">interface.</span>
            </span>
          }
          description="A simple, repeatable way of working that keeps users at the centre and quality in the details."
        />

        <ol className="relative mt-16 grid gap-4 md:grid-cols-5 md:gap-0">
          <span
            aria-hidden
            className="absolute top-6 right-[10%] left-[10%] hidden h-px bg-border md:block"
          />
          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.step} delay={index * 0.08} className="relative md:px-4">
              <div className="flex gap-5 rounded-2xl border border-border bg-surface p-6 md:flex-col md:border-0 md:bg-transparent md:p-0 md:text-center">
                <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-border bg-surface font-mono text-sm shadow-card transition-colors md:mx-auto">
                  {step.step}
                </span>
                <div>
                  <h3 className="type-headline text-xl md:mt-6">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
