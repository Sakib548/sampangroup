import HeroSlider2 from "@/components/HeroSlider2";
import HeroSlider from "@/components/HeroSliders";
import AboutPreview from "@/components/AboutPreview";
import AboutUsEditorial from "@/components/AboutUsEditorial";
import Counter from "@/components/Counter";
import ConcernsSection2 from "@/components/ConcernsSection2";
import PartnersSection from "@/components/PartnersSection";
import OngoingProjects from "@/components/OngoingProjects";
import CompletedProjectsEditorial from "@/components/CompletedProjectsEditorial";
import Navbar2 from "@/components/Navbar2";
import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import FullWidthVideo from "@/components/FullWidthVideo";
import CompletedProjectsShowcase from "@/components/CompletedProjectsShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar2 />
      <HeroSlider2 />
      <AboutPreview />
      {/* <AboutUsEditorial /> */}
      <Counter />
      <ConcernsSection2 />
      <PartnersSection />

      <OngoingProjects />
      <CompletedProjectsEditorial />
      <CompletedProjectsShowcase />
      {/* <CompletedProjectsEditorial /> */}
      <FullWidthVideo />

      {/* <ConcernsSection3 /> */}
      {/* <ConcernsSection /> */}
      <ContactCTA />
      <Footer />
    </main>
  );
}
