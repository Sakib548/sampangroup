import AboutPreview from "@/components/AboutPreview";
import Counter from "@/components/Counter";
import DivisionsSection from "@/components/DivisionsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactCTA from "@/components/ContactCTA";
import HeroCarousel from "@/components/HeroCarousel";
import LocationMap from "./components/InteractiveMap/InteractiveMap";
import LeadershipMessage from "./components/LeadershipMessage/LeadershipMessage";
import AwardsRecognition from "./components/AwardsRecognition/AwardsRecognition";
import AffiliationSection from "./components/AffiliationSection/AffiliationSection";
import InvestmentPortfolio from "./components/InvestmentPortfolio/InvestmentPortfolio";
import TrustBadges from "./components/TrustBadges/TrustBadges";
import CompletedProjectsEditorial from "@/components/CompletedProjectsEditorial";
import CompletedProjectsShowcase from "@/components/CompletedProjectsShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* <HeroSlider2 /> */}
      <HeroCarousel defaultTransition="mask" showAnimationPicker={false} />
      <DivisionsSection />
      <AboutPreview />

      {/* <AboutUsEditorial /> */}
      <Counter />
      {/* <CompletedProjectsEditorial /> */}

      <ProjectsSection />
      <LocationMap />
      <LeadershipMessage />
      <AwardsRecognition />
      <AffiliationSection />
      <InvestmentPortfolio />
      <TrustBadges />
      <ContactCTA />

      {/* <ContactCTA /> */}
    </main>
  );
}
