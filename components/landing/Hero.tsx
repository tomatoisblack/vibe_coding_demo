import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-40 md:pt-48 md:pb-56">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute top-0 left-1/2 h-[640px] w-[960px] -translate-x-1/2 rounded-full bg-gradient-to-b from-muted/80 via-muted/30 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-8 text-center">
        <Badge variant="secondary" className="mb-8 rounded-full px-4 py-1">
          Deep work, simplified
        </Badge>

        <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-foreground">
          Focus without
          <br />
          friction.
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-xl leading-8 text-muted-foreground md:mt-10 md:text-2xl md:leading-9">
          Block distractions, run deep work sessions, and see exactly where your
          time goes.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-16">
          <Button
            size="lg"
            className="h-auto rounded-full px-8 py-4 text-base"
            asChild
          >
            <Link href="#pricing">Start free trial</Link>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="h-auto rounded-full px-8 py-4 text-base text-muted-foreground"
            asChild
          >
            <Link href="#features">See how it works →</Link>
          </Button>
        </div>

        <div className="relative mx-auto mt-32 max-w-3xl md:mt-40">
          <div
            className="pointer-events-none absolute inset-0 -z-10 scale-95 rounded-[40px] bg-foreground/5 blur-3xl"
            aria-hidden
          />
          <Card className="overflow-hidden rounded-[32px] border-0 py-0 shadow-[var(--shadow-card)] ring-0">
            <CardContent className="px-8 py-24 md:px-16 md:py-32">
              <p className="text-sm font-medium text-muted-foreground">
                Focus Session
              </p>
              <p className="mt-4 font-mono text-7xl font-medium tracking-[-0.04em] text-foreground md:text-8xl">
                25:00
              </p>
              <p className="mt-8 text-lg text-muted-foreground">
                Writing — Chapter 3
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
