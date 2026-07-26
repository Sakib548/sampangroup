import HeroSlider from "@/components/HeroSliders";
import Navbar from "@/components/Navbar";
import AboutPreview from "@/components/AboutPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />
      <HeroSlider />
      <AboutPreview />
    </main>
  );
}
