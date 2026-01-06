import { Button } from "@/components/ui/button";
import { DashedLine } from "../dashed-line";
import {
  ArrowRight,
  Github,
  Globe,
  FileDown
} from "lucide-react";


export const Logos = () => {
  const companies = [
    {
      name: "acatech",
      href: "https://www.acatech.de",
    },    
    {
      name: "TÜV AI.Lab",
      href: "https://www.tuev-lab.ai/",
    },
    {
      name: "pwc",
      href: "https://www.pwc.de/",
    },
    {
      name: "CERTIF.AI",
      href: "https://www.getcertif.ai/",
    },    
    {
      name: "AIQ",
      href: "https://aiqualityhub.com/",
    },
    {
      name: "Fraunhofer IAIS",
      href: "https://www.iais.fraunhofer.de/",
    },
    {
      name: "VDE",
      href: "https://vde.com",
    }
  ];

return (
    <section id="standard">
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
        </div>      
      {/* Images Left - Text Right */}
      <div className="container flex py-12 lg:py-24 flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        <div className="flex-1">
          <a
              href="https://raw.githubusercontent.com/mission-ki/standard/master/MISSION-KI-Qualit%C3%A4tsstandard.pdf"      
              target="_blank"
            >
          <img src="/about/standard.png" className="relative aspect-[2.10/2.97] overflow-hidden rounded-xs shadow-2xl shadow-accent-foreground" alt="MISSION KI Qualitätsstandard" />
          </a>
        </div>
        <div className="flex-1 text-lg font-medium">
            <h2 className="mb-6 text-xl text-balance md:text-2xl lg:text-3xl">
              <span className="block mb-2">Prüfgrundlage</span>
              <span className="text-muted-foreground">Der MISSION KI Qualitätsstandard: Ein klarer Rahmen für KI-Qualität</span>
            </h2>
          <div className="max-w-xl space-y-6">
            <p className="text-muted-foreground">Der EU AI Act reguliert Hochrisiko-KI – doch viele KI-Anwendungen liegen unterhalb dieser Schwelle. Trotzdem erwarten Kunden, Partner und Investoren belastbare Nachweise zu Qualität, Sicherheit und Fairness.</p>
            <p className="text-muted-foreground">Um die Wettbewerbsfähigkeit deutscher KI-Entwicklung und -Anwendung zu stärken, hat MISSION KI gemeinsam mit führenden Akteuren aus Forschung, Normung und Prüfwesen einen Qualitätsstandard entwickelt, der KI-Qualität systematisch messbar und nachweisbar macht. Das Verfahren ermöglicht Unternehmen, Qualitätsversprechen strukturiert zu belegen – für schnellere Vertrauensbildung bei Kunden und Investoren, effizientere Beschaffung und gezielte Vorbereitung auf regulatorische Anforderungen wie den EU AI Act.</p>
            <p className="text-muted-foreground text-xs">©acatech – Deutsche Akademie der Technik&shy;wissenschaften e. V.<br />Der Standard ist lizenziert unter <a className="underline" href="https://creativecommons.org/licenses/by-nd/4.0/deed.de" target="_blank">CC BY-ND 4.0</a></p>
            <p className="text-foreground">Autoren:</p>
          </div>
          <div className="flex flex-wrap mt-0">
              {companies.map((company, index) => (

                  <a href={company.href} target="_blank" key={index}
                    className="p-0 underline underline-offset-5 decoration-2 mr-3 mt-2  rounded-sm text-sm text-accent transition-opacity hover:opacity-100 opacity-60 font-bold shadow-xs hover:shadow-none"
                  >{company.name}</a>
              ))}
          </div>      
          <div className="flex gap-2 mt-6">
            <p className="block">Mehr über den Standard:</p>
            <a
              href="https://mission-ki.de/de/pruefstandards"
              className="max-w-56 truncate text-start md:max-w-none text-sm text-balance underline"
              target="_blank"
            ><Globe className="stroke-2" /></a>
            <a
              href="https://github.com/mission-ki/standard"
              className="max-w-56 truncate text-start md:max-w-none text-sm text-balance underline"
              target="_blank"
            ><Github className="stroke-2" /></a>
            <a
              href="https://raw.githubusercontent.com/mission-ki/standard/master/MISSION-KI-Qualit%C3%A4tsstandard.pdf"      
              className="max-w-56 truncate text-start md:max-w-none text-sm text-balance underline"
              target="_blank"
            ><FileDown className="stroke-2" /></a>
          </div>          
        </div>
      </div>        
    </section>
  );
}