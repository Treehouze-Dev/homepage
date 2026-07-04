import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum — Treehouze",
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FFFFFF]">
        <div className="max-w-3xl mx-auto px-6 py-20">

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0D0D0B] leading-[1.05] mb-16">
            Impressum
          </h1>

          <div className="flex flex-col gap-12">

            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#1B3A2B] mb-3">Anbieter</h2>
              <div className="w-6 h-0.5 bg-[#1B3A2B] mb-6" />
              <p className="text-sm text-[#0D0D0B] leading-relaxed">
                Treehouze i.Gr.<br />
                Tom Kahlert, Benjamin Mäder, Henri Runge<br />
                Heinlenstraße 86<br />
                72072 Tübingen, Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#1B3A2B] mb-3">Kontakt</h2>
              <div className="w-6 h-0.5 bg-[#1B3A2B] mb-6" />
              <p className="text-sm text-[#0D0D0B] leading-relaxed">
                Telefon: +49 157 80946755<br />
                E&#8209;Mail:{" "}
                <a href="mailto:hello@treehouze.de" className="text-[#1B3A2B] hover:underline">
                  hello@treehouze.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#1B3A2B] mb-3">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <div className="w-6 h-0.5 bg-[#1B3A2B] mb-6" />
              <p className="text-sm text-[#0D0D0B] leading-relaxed">
                Benjamin Mäder<br />
                Heinlenstraße 86<br />
                72072 Tübingen
              </p>
            </section>

            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#1B3A2B] mb-3">
                Hinweis zur Rechtsform
              </h2>
              <div className="w-6 h-0.5 bg-[#1B3A2B] mb-6" />
              <p className="text-sm text-[#6B6863] leading-relaxed">
                Das Unternehmen befindet sich in Gründung (GbR). Bei Eintragung werden die Angaben
                entsprechend aktualisiert.
              </p>
            </section>

            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#1B3A2B] mb-3">
                Haftungsausschluss
              </h2>
              <div className="w-6 h-0.5 bg-[#1B3A2B] mb-6" />
              <p className="text-sm text-[#6B6863] leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir
                jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                überwachen. Links zu externen Websites werden nach bestem Wissen geprüft; dennoch
                können wir für deren Inhalte keine Gewähr übernehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#1B3A2B] mb-3">
                Urheberrecht
              </h2>
              <div className="w-6 h-0.5 bg-[#1B3A2B] mb-6" />
              <p className="text-sm text-[#6B6863] leading-relaxed">
                Die auf dieser Seite erstellten Inhalte und Werke unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
