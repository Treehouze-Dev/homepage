import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import NinetyDaysSection from "@/components/NinetyDaysSection";
import MVPSection from "@/components/MVPSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <NinetyDaysSection />
        <MVPSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
