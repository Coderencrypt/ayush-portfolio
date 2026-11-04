import { Mic, Sparkles, Video } from "lucide-react";

import type { PreviewKind } from "@/content/portfolio";
import { cn } from "@/lib/utils";

/**
 * Browser-framed, illustrative interface mockups built from design tokens.
 * They are not screenshots — replace with real images when available.
 */
export function ProjectPreview({ kind, title }: { kind: PreviewKind; title: string }) {
  return (
    <div
      role="img"
      aria-label={`Illustrative interface mockup for ${title}`}
      className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-card"
    >
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2.5">
        <span className="size-2 rounded-full bg-foreground/15" />
        <span className="size-2 rounded-full bg-foreground/15" />
        <span className="size-2 rounded-full bg-foreground/15" />
        <span className="ml-3 h-4 flex-1 rounded-md bg-secondary" />
      </div>
      <div className="min-h-0 flex-1 overflow-hidden p-3 sm:p-4">
        {kind === "builder" && <Builder />}
        {kind === "interview" && <Interview />}
        {kind === "simulator" && <Simulator />}
      </div>
    </div>
  );
}

const Bar = ({ className }: { className?: string }) => (
  <span className={cn("block h-2 rounded-full bg-foreground/10", className)} />
);

function Builder() {
  return (
    <div className="grid h-full grid-cols-[38%_1fr] gap-3">
      <div className="flex flex-col gap-2 rounded-lg bg-secondary p-2.5">
        <div className="flex items-center gap-1.5">
          <Sparkles className="size-3 text-primary" />
          <Bar className="w-1/2 bg-foreground/25" />
        </div>
        <div className="space-y-1.5 rounded-md bg-surface p-2 shadow-card">
          <Bar className="w-full" />
          <Bar className="w-4/5" />
        </div>
        <div className="ml-auto w-4/5 space-y-1.5 rounded-md bg-primary-soft p-2">
          <Bar className="w-full bg-primary/30" />
          <Bar className="w-2/3 bg-primary/30" />
        </div>
        <div className="mt-auto flex h-6 items-center rounded-full border border-border bg-surface px-2">
          <Bar className="w-1/2" />
          <span className="ml-auto size-3.5 rounded-full bg-primary" />
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-lg border border-border p-2.5">
        <div className="flex items-center justify-between">
          <Bar className="w-1/5 bg-foreground/30" />
          <div className="flex gap-1">
            <Bar className="w-5" />
            <Bar className="w-5" />
            <span className="h-2 w-6 rounded-full bg-ink" />
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-1.5 rounded-md bg-paper">
          <span className="h-2.5 w-2/3 rounded-full bg-foreground/60" />
          <Bar className="w-1/2" />
          <span className="mt-1 h-3 w-16 rounded-full bg-primary" />
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-1 rounded-md border border-border p-1.5">
              <span
                className={cn(
                  "block size-2.5 rounded",
                  i === 1 ? "bg-primary" : "bg-foreground/15",
                )}
              />
              <Bar className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Interview() {
  return (
    <div className="grid h-full grid-cols-[1fr_44%] gap-3">
      <div className="flex flex-col gap-1.5 rounded-lg bg-ink p-2.5">
        <div className="flex gap-1">
          <span className="h-2 w-8 rounded-full bg-ink-foreground/40" />
          <span className="h-2 w-6 rounded-full bg-ink-foreground/15" />
        </div>
        {[
          ["w-1/3", "w-1/2"],
          ["w-1/4", "w-2/3"],
          ["w-1/3", "w-1/3"],
          ["w-1/5", "w-3/5"],
          ["w-1/4", "w-1/2"],
        ].map(([a, b], i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="w-3 font-mono text-[0.5rem] text-ink-foreground/30">{i + 1}</span>
            <span className={cn("h-1.5 rounded-full bg-primary-soft/70", a)} />
            <span className={cn("h-1.5 rounded-full bg-ink-foreground/20", b)} />
          </div>
        ))}
        <span className="mt-auto h-1.5 w-2 animate-pulse rounded bg-primary" />
      </div>
      <div className="flex flex-col gap-2">
        {[0, 1].map((i) => (
          <div
            key={i}
            className={cn(
              "relative grid flex-1 place-items-center rounded-lg",
              i === 0 ? "bg-primary-soft" : "bg-secondary",
            )}
          >
            <span
              className={cn("size-7 rounded-full", i === 0 ? "bg-primary/60" : "bg-foreground/20")}
            />
            <span className="absolute bottom-1.5 left-1.5 h-1.5 w-8 rounded-full bg-surface/80" />
          </div>
        ))}
        <div className="flex justify-center gap-1.5">
          <span className="grid size-5 place-items-center rounded-full bg-secondary">
            <Mic className="size-2.5" />
          </span>
          <span className="grid size-5 place-items-center rounded-full bg-secondary">
            <Video className="size-2.5" />
          </span>
          <span className="h-5 w-8 rounded-full bg-destructive/80" />
        </div>
      </div>
    </div>
  );
}

function Simulator() {
  return (
    <div className="flex h-full flex-col gap-2.5">
      <div className="flex items-center gap-2">
        <span className="grid size-6 place-items-center rounded-full bg-primary text-primary-foreground">
          <Sparkles className="size-3" />
        </span>
        <Bar className="w-1/4 bg-foreground/30" />
        <div className="ml-auto flex gap-1">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={cn("h-1.5 w-4 rounded-full", i < 2 ? "bg-primary" : "bg-foreground/10")}
            />
          ))}
        </div>
      </div>
      <div className="max-w-[80%] space-y-1.5 rounded-xl rounded-tl-sm bg-secondary p-2.5">
        <Bar className="w-full bg-foreground/20" />
        <Bar className="w-3/4 bg-foreground/20" />
      </div>
      <div className="ml-auto w-3/4 space-y-1.5 rounded-xl rounded-tr-sm border border-border p-2.5">
        <Bar className="w-full" />
        <Bar className="w-5/6" />
        <Bar className="w-1/2" />
      </div>
      <div className="mt-auto flex items-center gap-2 rounded-full border border-border px-2 py-1.5">
        <span className="grid size-5 place-items-center rounded-full bg-ink text-ink-foreground">
          <Mic className="size-2.5" />
        </span>
        <div className="flex flex-1 items-center gap-0.5">
          {[3, 6, 4, 8, 5, 9, 4, 7, 3, 6, 5, 8, 4, 6].map((h, i) => (
            <span
              key={i}
              style={{ height: h * 1.5 }}
              className="w-0.5 rounded-full bg-primary/60"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
