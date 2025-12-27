import { Button } from "@/components/ui/button";
import { DashedLine } from "../dashed-line";
import {
  ArrowRight,
  Github,
  Globe
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
      <div className="container flex py-28 lg:py-32 lg:pt-44 flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        <div className="flex-1">
          <img src="/about/standard.png" className="relative aspect-[2.10/2.97] overflow-hidden rounded-xs shadow-2xl shadow-accent-foreground" alt="MISSION KI Qualitätsstandard" />
        </div>
        <div className="flex-1 text-lg font-medium">
            <h2 className="mb-6 text-xl text-balance md:text-2xl lg:text-3xl">
              <span className="">Prüfgrundlage</span><br />
              <span className="text-muted-foreground">Der MISSION KI Qualitätsstandard: Ein klarer Rahmen für KI-Qualität</span>
            </h2>
          <div className="text-muted-foreground max-w-xl space-y-6">
            <p>Der EU AI Act reguliert Hochrisiko-KI – doch viele KI-Anwendungen liegen unterhalb dieser Schwelle. Trotzdem erwarten Kunden, Partner und Investoren belastbare Nachweise zu Qualität, Sicherheit und Fairness.</p>
            <p>Um die Wettbewerbsfähigkeit deutscher KI-Entwicklung und -Anwendung zu stärken, hat MISSION KI gemeinsam mit führenden Akteuren aus Forschung, Normung und Prüfwesen einen Qualitätsstandard entwickelt, der KI-Qualität systematisch messbar und nachweisbar macht. Das Verfahren ermöglicht Unternehmen, Qualitätsversprechen strukturiert zu belegen – für schnellere Vertrauensbildung bei Kunden und Investoren, effizientere Beschaffung und gezielte Vorbereitung auf regulatorische Anforderungen wie den EU AI Act.</p>
            <p className="text-accent-foreground">Autoren:</p>
          </div>
          <div className="flex flex-wrap mt-4">
              {companies.map((company, index) => (

                  <a href={company.href} target="_blank" key={index}
                    className="px-2 py-1 mr-4 mt-4 border-1 border-accent-foreground rounded-sm text-sm text-accent-foreground transition-opacity hover:opacity-100 opacity-60 font-bold shadow-xs hover:shadow-none"
                  >{company.name}</a>
              ))}
          </div>
          <div className="text-muted-foreground max-w-xl space-y-6 mt-6">
           <p className="text-accent-foreground">Mehr über den Standard:</p>
          </div>          
          <div className="flex mt-4 gap-2">
            <a
              href="https://mission-ki.de/de/pruefstandards"
              className="max-w-56 truncate text-start md:max-w-none text-sm text-accent-foreground underline"
              target="_blank"
            ><Globe className="stroke-2" /></a>
            <a
              href="https://github.com/mission-ki/standard"
              className="max-w-56 truncate text-start md:max-w-none text-sm text-accent-foreground underline"
              target="_blank"
            ><Github className="stroke-2" /></a>            
          </div>          
        </div>
      </div>        
    </section>
  );
}