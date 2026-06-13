import { BarChart3, Clock, Shield } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Clock,
    title: "Focus Sessions",
    description:
      "Pomodoro-style timers with smart breaks. Stay in flow without watching the clock.",
  },
  {
    icon: Shield,
    title: "Distraction Shield",
    description:
      "Block sites and apps during deep work. Your attention stays where it belongs.",
  },
  {
    icon: BarChart3,
    title: "Insights",
    description:
      "Weekly reports reveal your focus patterns. See what works and double down.",
  },
] as const;

export function Features() {
  return (
    <section id="features" className="py-32 md:py-40">
      <div className="mx-auto max-w-5xl px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-medium tracking-[-0.03em] text-foreground md:text-6xl md:leading-[1.05]">
            Everything you need
            <br />
            to go deep.
          </h2>
          <p className="mt-8 text-lg leading-8 text-muted-foreground md:text-xl">
            Simple tools that protect your attention.
          </p>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="border-0 bg-transparent py-0 shadow-none ring-0"
              >
                <CardHeader className="px-0">
                  <div className="text-muted-foreground">
                    <Icon className="size-6" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="mt-8 text-xl font-medium tracking-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="text-base leading-7 text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
