import { ArrowUp } from "lucide-react";

import { navItems, profile } from "@/content/portfolio";
import { Container } from "./primitives";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.role} · {profile.secondaryRole}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="link-underline transition-colors hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()}</span>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 transition-colors hover:border-foreground hover:text-foreground"
          >
            Back to top{" "}
            <ArrowUp
              className="size-3.5 transition-transform group-hover:-translate-y-0.5"
              aria-hidden
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}
