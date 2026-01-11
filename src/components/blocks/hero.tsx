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
  PocketKnife,
  Github
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const items = [
  {
    quote: "We're misusing Mainline as a CRM and it still works!",
    author: "Amy Chase",
    role: "PM",
    company: "Mercury Finance",
    image: "/testimonials/amy-chase.webp",
  },
  {
    quote: "I was able to replace 80% of my team with Mainline bots.",
    author: "Jonas Kotara",
    role: "Lead Engineer",
    company: "Mercury Finance",
    image: "/testimonials/jonas-kotara.webp",
  },
  {
    quote: "Founder Mode is hard enough without having a really nice PM app.",
    author: "Kevin Yam",
    role: "Founder",
    company: "Mercury Finance",
    image: "/testimonials/kevin-yam.webp",
  },
  {
    quote: "I can use the tool as a substitute from my PM.",
    author: "Kundo Marta",
    role: "Founder",
    company: "Mercury Finance",
    image: "/testimonials/kundo-marta.webp",
  },
  {
    quote: "We're misusing Mainline as a CRM and it still works!",
    author: "Amy Chase",
    role: "PM",
    company: "Mercury Finance",
    image: "/testimonials/amy-chase.webp",
  },
  {
    quote: "I was able to replace 80% of my team with Mainline bots.",
    author: "Jonas Kotara",
    role: "Lead Engineer",
    company: "Mercury Finance",
    image: "/testimonials/jonas-kotara.webp",
  },
  {
    quote: "Founder Mode is hard enough without having a really nice PM app.",
    author: "Kevin Yam",
    role: "Founder",
    company: "Mercury Finance",
    image: "/testimonials/kevin-yam.webp",
  },
  {
    quote: "I can use the tool as a substitute from my PM.",
    author: "Kundo Marta",
    role: "Founder",
    company: "Mercury Finance",
    image: "/testimonials/kundo-marta.webp",
  },
];

import { cn } from "@/lib/utils";


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
  /*{
    title: "Vielfältig anwendbar",
    description: "Anwendbar auf verschiedene Arten von Modellen, sowie Hoch- und Niedrigrisiko-KI.",
    icon: PocketKnife,
  }*/,  
  {
    title: "Kollaborativ",
    description: "Prüfen Sie gemeinsam mit KollegInnen und weiteren ExpertInnen.",
    icon: Blend,
  },
];

export const Hero = () => {
  return (
    <section className="pt-24 lg:pt-36  pb-8 lg:pb-12">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground font-extrabold max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap">
            Prüfportal für KI-Systeme <Badge variant="outline" className="tracking-normal">Beta</Badge>
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            Prüfen Sie die Qualität Ihres KI-Systems einfach nach dem <a href="https://mission-ki.de/de/pruefstandards" className="" target="_blank">MISSION KI Standard</a>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button 
              variant="secondary"
              className=""
              asChild
            >
              <a href="https://pruefportal.mission-ki.de/users/register"><Bot className="stroke-2" />Kostenlos prüfen</a>
            </Button>
            <Button
              variant="outline"
              className="h-auto gap-2"
              asChild
            >
              <a
                href="#standard"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Der Standard
              </a>
            </Button>
            <Button
              variant="outline"
              className="fh-auto gap-2"
              asChild
            >
              <a
                href="https://github.com/Mission-KI/pruefportal-app"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                <Github className="stroke-2" />Github
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

      {/*
      <div className="mt-12 mx-6 mb-0">
        <div className="relative w-full">
          <img
            src="/hero.webp"
            alt="hero"
            className="w-full rounded-sm object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div> */}
    </section>
  );
};
