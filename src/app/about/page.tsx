import Image from "next/image";
import { aboutPreview } from "@/data/aboutPreview";
import LeadershipSection from "@/components/LeadershipSection";

export const metadata = {
  title: "About Us | Sampan Group",
  description:
    "Learn about Sampan Group, our vision, and the value we create across industries.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#080808] text-white">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-8 py-24 sm:px-12 lg:px-20">
        <Image
          src="/images/the_village.png"
          alt="Sampan Group project landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/45" />

        <div className="relative z-10 w-full max-w-[920px] border border-white/20 bg-black/55 p-8 text-center sm:p-12 lg:p-14">
          <p className="text-lg font-semibold uppercase tracking-[0.28em] text-red-400 sm:text-xl lg:text-2xl">
            {aboutPreview.eyebrow}
          </p>
          <h1 className="mt-5 text-[clamp(2.25rem,4.2vw,4.5rem)] font-semibold leading-tight tracking-tight">
            {aboutPreview.title}
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            {aboutPreview.description}
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111] px-8 py-16 sm:px-12 lg:px-20 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
              Our story
            </p>
            <h2 className="mt-5 text-[clamp(2.25rem,3.7vw,3.75rem)] font-semibold leading-tight tracking-tight">
              Built with vision. Growing with purpose.
            </h2>
            <div className="mt-10 border-l-2 border-emerald-300 pl-5">
              <p className="text-5xl font-semibold text-emerald-300">2007</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/55">
                Founded in Bangladesh
              </p>
            </div>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/70 sm:text-lg">
            <p>
              <strong className="font-semibold text-white">SAMPAN Group</strong>{" "}
              began in 2007 with a clear ambition: to create sustainable value
              through businesses that improve everyday life. From that starting
              point, the Group has grown into a diversified conglomerate with a
              presence across real estate, economic zones, construction,
              amusement, agriculture, automotive, retail, and more.
            </p>
            <p>
              Every venture is guided by the same standards—innovation,
              integrity, quality, and long-term thinking. Through strategic
              investment and disciplined management, SAMPAN creates connected
              ecosystems that support economic development and enrich the
              communities around them.
            </p>
            <p>
              Our progress is powered by visionary leadership and the energy of
              a talented, committed workforce. As we invest in sustainability,
              technology, and responsible growth, SAMPAN Group remains focused
              on delivering lasting value to stakeholders and helping shape a
              better tomorrow in Bangladesh and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-8 py-16 sm:px-12 lg:px-20 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
          The Sampan vision
        </p>
        <h2 className="mt-4 max-w-3xl text-[clamp(2rem,3.2vw,3.25rem)] font-semibold tracking-tight">
          The village will be the city.
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
          We build businesses, destinations, and opportunities that connect
          people with a more sustainable and prosperous future.
        </p>
      </section>

      <LeadershipSection />
    </main>
  );
}
