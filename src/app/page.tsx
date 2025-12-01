import { ParticleBackground } from "@/components/particle-background";
import { HeroSection } from "@/components/hero-section";
import { PrizesSection } from "@/components/prizes-section";
import { RulesSection } from "@/components/rules-section";
import { TimelineSection } from "@/components/timeline-section";
import { CriteriaSection } from "@/components/criteria-section";
import { JudgesSection } from "@/components/judges-section";
import { AboutSection } from "@/components/about-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function DatathonPage() {
  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      <ParticleBackground />
      <Navigation />
      <HeroSection />
      <PrizesSection />
      <RulesSection />
      <TimelineSection />
      <CriteriaSection />
      <JudgesSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
