import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "FocusFlow cut my context-switching in half. I finally finish what I start.",
    name: "Sarah Chen",
    role: "Product Designer",
    initials: "SC",
  },
  {
    quote:
      "The distraction shield is a game-changer. I wrote my entire book draft in three months.",
    name: "Marcus Webb",
    role: "Author",
    initials: "MW",
  },
  {
    quote:
      "Our team uses shared focus rooms daily. We've never shipped this consistently.",
    name: "Elena Rodriguez",
    role: "Engineering Lead",
    initials: "ER",
  },
] as const;

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 md:py-40">
      <div className="mx-auto max-w-5xl px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-medium tracking-[-0.03em] text-foreground md:text-6xl md:leading-[1.05]">
            Loved by people
            <br />
            who ship.
          </h2>
          <p className="mt-8 text-lg leading-8 text-muted-foreground md:text-xl">
            Thousands of creators and teams trust FocusFlow every day.
          </p>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="flex flex-col border-0 bg-transparent py-0 shadow-none ring-0"
            >
              <CardContent className="flex-1 px-0">
                <blockquote className="text-lg leading-8 text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </CardContent>
              <CardFooter className="mt-8 flex items-center gap-4 border-0 bg-transparent px-0 pt-0">
                <Avatar>
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
