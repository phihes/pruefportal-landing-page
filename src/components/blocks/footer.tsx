import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GITHUB_URL } from "@/consts";

export function Footer() {
  const navigation = [
    { name: "Prüfportal", href: "/" },
    { name: "FAQ", href: "/faq" },
    { name: "Impressum", href: "/imprint" },
    { name: "Datenschutzerklärung", href: "/privacy" }
  ];

  const social = [];

  const legal = [

  ];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32 pb-6 lg:pb-12">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Jetzt kostenlos prüfen
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Bewerten Sie die Qualität Ihres KI-Systems<br />nach dem MISSION KI Standard.
        </p>
        <div>
          <Button size="lg" className="mt-4" variant="secondary" asChild>
            <a href="https://pruefportal.mission-ki.de/users/register">Hier registrieren</a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </a>
            </li>
          ))}
        </ul>
        {legal && <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>}
      </nav>
    </footer>
  );
}
