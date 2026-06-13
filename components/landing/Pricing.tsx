import Link from "next/link";
import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For getting started with focused work.",
    features: ["5 sessions per day", "Basic timer", "Session history (7 days)"],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "For professionals who take deep work seriously.",
    features: [
      "Unlimited sessions",
      "Distraction Shield",
      "Insights & reports",
      "Custom session lengths",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$29",
    period: "per month",
    description: "Shared focus for teams that ship together.",
    features: [
      "Everything in Pro",
      "Team dashboards",
      "Shared focus rooms",
      "Admin controls",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
] as const;

export function Pricing() {
  return (
    <section id="pricing" className="py-32 md:py-40">
      <div className="mx-auto max-w-5xl px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-medium tracking-[-0.03em] text-foreground md:text-6xl md:leading-[1.05]">
            Simple, honest
            <br />
            pricing.
          </h2>
          <p className="mt-8 text-lg leading-8 text-muted-foreground md:text-xl">
            Start free. Upgrade when you&apos;re ready.
          </p>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "flex flex-col rounded-3xl py-0 ring-0",
                plan.highlighted
                  ? "border-0 bg-primary text-primary-foreground shadow-[var(--shadow-card)]"
                  : "border-0 shadow-[var(--shadow-soft)]"
              )}
            >
              <CardHeader className="px-10 pt-10">
                {plan.highlighted ? (
                  <Badge
                    variant="secondary"
                    className="mb-2 w-fit bg-primary-foreground/10 text-primary-foreground"
                  >
                    Most popular
                  </Badge>
                ) : (
                  <div className="mb-2 h-5" />
                )}
                <CardTitle
                  className={cn(
                    "text-xl font-medium",
                    plan.highlighted
                      ? "text-primary-foreground"
                      : "text-foreground"
                  )}
                >
                  {plan.name}
                </CardTitle>
                <div className="mt-4 flex items-baseline gap-2">
                  <span
                    className={cn(
                      "text-5xl font-medium tracking-[-0.03em]",
                      plan.highlighted
                        ? "text-primary-foreground"
                        : "text-foreground"
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      plan.highlighted
                        ? "text-primary-foreground/60"
                        : "text-muted-foreground"
                    )}
                  >
                    /{plan.period}
                  </span>
                </div>
                <CardDescription
                  className={cn(
                    "text-base leading-7",
                    plan.highlighted
                      ? "text-primary-foreground/60"
                      : "text-muted-foreground"
                  )}
                >
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-4 px-10">
                <ul className="flex flex-col gap-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        "flex items-start gap-3 text-base",
                        plan.highlighted
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      )}
                    >
                      <Check
                        className={cn(
                          "mt-1 size-4 shrink-0",
                          plan.highlighted
                            ? "text-primary-foreground/60"
                            : "text-foreground"
                        )}
                        strokeWidth={1.5}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="border-0 bg-transparent px-10 pt-0 pb-10">
                <Button
                  className={cn(
                    "h-auto w-full rounded-full py-4",
                    plan.highlighted &&
                      "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  )}
                  variant={plan.highlighted ? "secondary" : "default"}
                  asChild
                >
                  <Link href="#">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
