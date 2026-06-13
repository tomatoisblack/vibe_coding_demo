import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
} as const;

export function Footer() {
  return (
    <footer>
      <Separator />
      <div className="mx-auto max-w-5xl px-8 py-24">
        <div className="grid gap-16 md:grid-cols-4">
          <div>
            <p className="text-base font-medium text-foreground">FocusFlow</p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Deep work, simplified.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-sm font-medium text-foreground">{category}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Button
                      variant="link"
                      className="h-auto p-0 text-sm font-normal text-muted-foreground"
                      asChild
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-24 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} FocusFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
