import HeroSlider2 from "@/components/HeroSlider2";
import HeroSlider from "@/components/HeroSliders";
import AboutPreview from "@/components/AboutPreview";
import AboutUsEditorial from "@/components/AboutUsEditorial";
import Counter from "@/components/Counter";
import ConcernsSection2 from "@/components/ConcernsSection2";
import DivisionsSection from "@/components/DivisionsSection";
import ProjectsSection from "@/components/ProjectsSection";
import PartnersSection from "@/components/PartnersSection";
import OngoingProjects from "@/components/OngoingProjects";
import CompletedProjectsEditorial from "@/components/CompletedProjectsEditorial";
import ContactCTA from "@/components/ContactCTA";
import FullWidthVideo from "@/components/FullWidthVideo";
import CompletedProjectsShowcase from "@/components/CompletedProjectsShowcase";
import ExpressFacilities from "@/components/ExpressFacilities";
import HighwayInnShowcase from "@/components/HighwayInnShowcase";
import HighwayInnCardStack from "@/components/HighwayInnCardStack";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      {/* <HeroSlider2 /> */}
      <HeroCarousel defaultTransition="mask" showAnimationPicker={false} />
      <AboutPreview />

      {/* <AboutUsEditorial /> */}
      <Counter />
      <DivisionsSection />
      <ProjectsSection />
      {/* <ConcernsSection2 /> */}
      {/* <PartnersSection />

      <OngoingProjects />
      <CompletedProjectsEditorial />
      <CompletedProjectsShowcase /> */}
      {/* <CompletedProjectsEditorial /> */}
      {/* <FullWidthVideo />
      <ExpressFacilities />
      <HighwayInnShowcase />
      <HighwayInnCardStack /> */}

      {/* <ConcernsSection3 /> */}
      {/* <ConcernsSection /> */}
      <ContactCTA />
    </main>
  );
}
