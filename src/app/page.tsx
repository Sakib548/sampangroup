import HeroSlider from "@/components/HeroSliders";
import Navbar from "@/components/Navbar";
import AboutPreview from "@/components/AboutPreview";
import Counter from "@/components/Counter";
import ConcernCard from "@/components/ConcernCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />
      <HeroSlider />
      <AboutPreview />
      <Counter />
      <ConcernCard />
    </main>
  );
}
