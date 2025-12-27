import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
  Bot,
  ListChecks,
  Sparkles,
  RulerDimensionLine,
  PocketKnife
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GITHUB_URL } from "@/consts";

const features = [
  {
    title: "Kostenlos und Open Source",
    description: "Das Prüfportal und der Standard sind kostenlos und als Open Source verfügbar.",
    icon: Sparkles,
  },  
  {
    title: "Einfache, strukturierte Prüfung",
    description: "Lassen Sie sich durch die Prüfung führen und das Ergebnis automatisch berechnen.",
    icon: ListChecks,
  },   
  {
    title: "Vielfältig anwendbar",
    description: "Anwendbar auf verschiedene Arten von Modellen, sowie Hoch- und Niedrigrisiko-KI.",
    icon: PocketKnife,
  },  
  {
    title: "Kollaborativ",
    description: "Lassen Sie sich einfach durch weitere Experten bei der Prüfung unterstützen.",
    icon: Blend,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground font-extrabold tracking-normal max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap">
            Prüfportal für KI <Badge variant="secondary">Beta-Version</Badge>
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            Prüfen Sie die Qualität Ihres KI-Systems einfach nach dem <a href="https://mission-ki.de/de/pruefstandards" className="" target="_blank">MISSION KI Standard</a>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild
              className=""
            >
              <a href="https://pruefportal.mission-ki.de/users/register"><Bot className="stroke-2 text-primary-foreground" />Jetzt kostenlos prüfen</a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent"
              asChild
            >
              <a
                href="#standard"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Der Standard
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[793px] w-full">
          <img
            src="/hero.webp"
            alt="hero"
            className="w-full rounded-sm object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
};
