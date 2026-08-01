import HeroSlider from "@/components/HeroSliders";
import Navbar from "@/components/Navbar";
import AboutPreview from "@/components/AboutPreview";
import Counter from "@/components/Counter";
import ConcernsSection2 from "@/components/ConcernsSection2";
import ConcernsSection3 from "@/components/ConcernSection3";
import PartnersSection from "@/components/PartnersSection";
import OngoingProjects from "@/components/OngoingProjects";
import CompletedProjects from "@/components/CompletedProjects";
import Navbar2 from "@/components/Navbar2";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar2 />
      <HeroSlider />
      <AboutPreview />
      <Counter />
      <ConcernsSection2 />
      <PartnersSection />
      <OngoingProjects />
      <CompletedProjects variant="grid" />
      {/* <ConcernsSection3 /> */}
      {/* <ConcernsSection /> */}
    </main>
  );
}
