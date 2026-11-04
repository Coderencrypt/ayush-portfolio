import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/portfolio/About";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { Contact } from "@/components/portfolio/Contact";
import { Hero } from "@/components/portfolio/Hero";
import { Process } from "@/components/portfolio/Process";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { Skills } from "@/components/portfolio/Skill";
import { Work } from "@/components/portfolio/Work";

const title = "Ayush Dubey — Frontend Engineer & Product Design Enthusiast";
const description =
  "Portfolio of Ayush Dubey, B.Tech CSE student at Parul University. Frontend engineering and UI/UX design work, case studies and process.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-ink-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <CaseStudies />
        <Skills />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
