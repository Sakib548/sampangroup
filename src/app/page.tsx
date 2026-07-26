import HeroSlider from "@/components/HeroSliders";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />
      <HeroSlider />
      <section
        className="relative flex min-h-screen items-center bg-cover bg-center px-6 pt-20 text-white"
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10">
          <h1 className="text-5xl font-semibold">
            The Village Will Be the City
          </h1>
        </div>
      </section>
    </main>
  );
}
