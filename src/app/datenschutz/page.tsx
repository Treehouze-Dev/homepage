import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Treehouze",
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FFFFFF]">
        <div className="max-w-3xl mx-auto px-6 py-20">

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0D0D0B] leading-[1.05] mb-16">
            Datenschutzerklärung
          </h1>

          <div className="flex flex-col gap-12">

            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#1B3A2B] mb-3">
                Datenschutz auf einen Blick
              </h2>
              <div className="w-6 h-0.5 bg-[#1B3A2B] mb-6" />
              <p className="text-sm text-[#6B6863] leading-relaxed">
                Beim Besuch dieser Website werden personenbezogene Daten erhoben. Verantwortlich
                für die Datenverarbeitung ist die im Impressum genannte Stelle. Daten werden
                einerseits durch Ihre Eingaben (z. B. in Kontaktformularen) erfasst, andererseits
                automatisch beim Seitenaufruf (z. B. technische Daten wie Browser, Betriebssystem,
                Zeitpunkt des Zugriffs). Diese Daten werden zur Bereitstellung der Website sowie
                gegebenenfalls zur Analyse genutzt.
              </p>
            </section>

            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#1B3A2B] mb-3">Hosting</h2>
              <div className="w-6 h-0.5 bg-[#1B3A2B] mb-6" />
              <p className="text-sm text-[#6B6863] leading-relaxed">
                Diese Website wird bei IONOS SE gehostet. Details entnehmen Sie der
                Datenschutzerklärung von IONOS. Die Nutzung erfolgt auf Grundlage unseres
                berechtigten Interesses an einer zuverlässigen Darstellung unserer Website gemäß
                Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#1B3A2B] mb-3">
                Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <div className="w-6 h-0.5 bg-[#1B3A2B] mb-6" />
              <p className="text-sm text-[#6B6863] leading-relaxed mb-6">
                Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen.
                Verantwortliche Stelle im Sinne der Datenschutzgesetze ist:
              </p>
              <p className="text-sm text-[#0D0D0B] leading-relaxed">
                Treehouze i.Gr.<br />
                Tom Kahlert, Benjamin Mäder, Henri Runge<br />
                Heinlenstraße 86, 72072 Tübingen<br />
                Telefon: +49 157 80946755<br />
                E&#8209;Mail:{" "}
                <a href="mailto:hello@treehouze.de" className="text-[#1B3A2B] hover:underline">
                  hello@treehouze.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#1B3A2B] mb-3">
                Rechtsgrundlagen der Verarbeitung
              </h2>
              <div className="w-6 h-0.5 bg-[#1B3A2B] mb-6" />
              <ul className="flex flex-col gap-3">
                {[
                  "Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, Art. 9 Abs. 2 lit. a DSGVO, § 25 Abs. 1 TDDDG) – wenn Sie ausdrücklich zugestimmt haben.",
                  "Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) – zur Durchführung vorvertraglicher Maßnahmen oder eines Vertrags.",
                  "Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO) – wenn eine gesetzliche Pflicht besteht.",
                  "Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) – wenn unser Interesse an der Verarbeitung überwiegt.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1B3A2B] shrink-0" />
                    <span className="text-sm text-[#6B6863] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#1B3A2B] mb-3">
                Rechte der Betroffenen
              </h2>
              <div className="w-6 h-0.5 bg-[#1B3A2B] mb-6" />
              <p className="text-sm text-[#6B6863] leading-relaxed mb-4">
                Sie haben jederzeit das Recht auf:
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Auskunft über Ihre gespeicherten Daten",
                  "Berichtigung unrichtiger Daten",
                  "Löschung Ihrer Daten",
                  "Einschränkung der Verarbeitung",
                  "Datenübertragbarkeit",
                  "Widerruf erteilter Einwilligungen",
                  "Widerspruch gegen die Datenverarbeitung",
                  "Beschwerde bei einer Aufsichtsbehörde",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1B3A2B] shrink-0" />
                    <span className="text-sm text-[#6B6863] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
