import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Prüfportal & Qualitätsstandard",
    questions: [
      {
        question: "Ist die Nutzung des Prüfportals kostenlos?",
        answer:
          "Ja.",
      },
      {
        question: "Kann die Prüfung selbstständig durchgeführt werden?",
        answer:
          "Ja. Der Standard und das Prüfportal dienen als Grundlage für Selbstprüfungen Ihrer KI-Systeme und können optional durch eine Validierung externer Prüfstellen ergänzt werden.",
      },  
      {
        question: "Welcher zeitliche Aufwand ist für die Durchführung einer Prüfung zu kalkulieren?",
        answer:
          "Der zeitliche Aufwand für eine Prüfung liegt typischerweise zwischen vier und acht Arbeitstagen. Die konkrete Dauer hängt von mehreren Faktoren ab. Vorhandene Dokumentation: Organisationen mit etablierten Qualitätsmanagement-Prozessen und bestehender technischer Dokumentation können auf vorhandene Unterlagen zurückgreifen und reduzieren damit den Aufwand erheblich. Systemkomplexität und Anwendungskontext: Art und Umfang des KI-Systems sowie der Anwendungskontext und die resultierende Anzahl der relevanten Qualitätsdimensionen beeinflussen die Prüfdauer. Verfügbare Evidenzen: Bereits durchgeführte Tests, vorhandene Metriken und bestehende Risikoanalysen beschleunigen den Prozess. Teamverfügbarkeit: Die zeitnahe Verfügbarkeit der relevanten Ansprechpartner und Experten aus Entwicklung und Betrieb wirkt sich direkt auf die Durchlaufzeit aus. Bei gut vorbereiteten Organisationen mit strukturierten Prozessen tendiert der Aufwand zum unteren Ende der Spanne, während Erstprüfungen ohne etablierte Dokumentationsstrukturen entsprechend mehr Zeit erfordern. Mithilfe des Prüfportals können Sie den Aufwand verringern.",
      },          
      {
        question: "Wie werden meine Daten im MISSION KI Prüfportal geschützt?",
        answer:
          "Das MISSION KI Prüfportal wurde so konzipiert, dass die Abfrage sensitiver Daten vermieden wird. Die technische Prüfung Ihres KI-Systems findet in Ihrer eigenen Systemumgebung statt. Dokumentierte Evidenzen und Prüfergebnisse verbleiben unter Ihrer Kontrolle und sind nur durch Prozessbeteiligte einsehbar. Das Portal dient als strukturierendes Werkzeug und speichert nur die für die Prüfungsdurchführung notwendigen Daten.",
      },
      {
        question: "Wer hat Zugriff auf meine Daten während der Prüfung?",
        answer:
          "Bei einer Selbstprüfung haben ausschließlich die von Ihnen benannten und berechtigten Personen Zugriff auf die Prüfdaten. Je nach gewählter Prüftiefe können dies Personen aus dem verantwortlichen Team, unabhängige interne Prüfer oder – bei freiwilliger externer Validierung – akkreditierte Prüfstellen sein. Die Zugriffsrechte werden von Ihnen selbst gesteuert und dokumentiert.",
      },  
      {
        question: "Ist das Prüfportal open source?",
        answer:
          "Ja, das Prüfportal wurde als open source veröffentlicht. Sie können die Anwendung selbst betreiben (z.B. in Ihrem Intranet), nach Ihren Wünschen anpassen, sowie öffentliche Änderungen vorschlagen.",
      },
      {
        question: "Wie lange wird das Prüfportal im Rahmen der Initiative MISSION KI zentral betrieben?",
        answer: "Die Initiative MISSION KI endete zum 31.12.2025. Der öffentliche Betrieb des Prüfportals über die Initiative ist derzeit bis einschließlich 31.03.2026 sichergestellt. Ob der Betrieb darüber hinaus fortgeführt werden kann, wird geprüft, kann aktuell jedoch nicht zugesichert werden. Unabhängig davon stehen das Prüfportal (zum Selbstbetrieb) sowie der Qualitätsstandard auch nach dem 31.03.2026 weiterhin kostenfrei über GitHub zur Verfügung."
      }
    ]}
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)} id="faq">
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Fragen &<br />Antworten
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Fragen &<br />Antworten
              </h2>
            )}
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
