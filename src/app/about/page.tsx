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
    <main className="bg-[#E8EFE9] text-[#253247]">
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

        <div className="relative z-10 w-full max-w-[920px] border border-white/25 bg-black/55 p-8 text-center sm:p-12 lg:p-14">
          <p className="text-lg font-semibold uppercase tracking-[0.28em] text-red-400 sm:text-xl lg:text-2xl">
            {aboutPreview.eyebrow}
          </p>
          <h1 className="mt-5 text-[clamp(2.25rem,4.2vw,4.5rem)] font-semibold leading-tight tracking-tight drop-shadow-lg">
            <span className="text-emerald-300">{aboutPreview.title.slice(0, 15)}</span>
            <span className="text-red-300"> {aboutPreview.title.slice(15)}</span>
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            {aboutPreview.description}
          </p>
        </div>
      </section>

      <section className="border-y border-neutral-900/10 bg-[#E8EFE9] px-8 py-16 sm:px-12 lg:px-20 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-600">
              Our story
            </p>
            <h2 className="mt-5 text-[clamp(2.25rem,3.7vw,3.75rem)] font-semibold leading-tight tracking-tight">
              Built with vision. Growing with purpose.
            </h2>
            <div className="mt-10 border-l-2 border-emerald-300 pl-5">
              <p className="text-5xl font-semibold text-emerald-800">2007</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">
                Founded in Bangladesh
              </p>
            </div>
          </div>

          <div className="space-y-5 text-base leading-7 text-slate-600 sm:text-lg">
            <p>
              <strong className="font-semibold text-[#253247]">SAMPAN Group</strong>{" "}
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
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
          The Sampan vision
        </p>
        <h2 className="mt-4 max-w-3xl text-[clamp(2rem,3.2vw,3.25rem)] font-semibold tracking-tight">
          The village will be the city.
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          We build businesses, destinations, and opportunities that connect
          people with a more sustainable and prosperous future.
        </p>
      </section>

      <section className="bg-[#f7f8f5] px-8 py-16 sm:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="flex flex-col justify-between gap-6 border-b border-[#253247]/15 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-600">Our values</p>
              <h2 className="mt-4 max-w-2xl text-[clamp(2.25rem,3.7vw,4rem)] font-semibold leading-tight tracking-tight">The principles behind our progress.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-600 sm:text-right">Leadership, ambition, and responsible growth shape every Sampan venture.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              ["Leadership and Vision", "/images/about/leadership_vision.png", "At the helm of SAMPAN Group is MD Emamul Hasan, whose vision for integrated growth and commitment to quality continue to guide the Group."],
              ["Global Footprint", "/images/about/global_footprint.png", "Sampan Group continues to expand through strategic partnerships, innovation, and a responsible approach to long-term growth."],
              ["Achievements and Recognition", "/images/about/achivement.png", "Our consistent performance, innovation, and customer focus continue to build trust and recognition across the markets we serve."],
            ].map(([title, image, description], index) => (
              <article key={title} className="reveal-item group overflow-hidden border border-[#253247]/15 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[1.45] overflow-hidden"><Image src={image} alt={title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" /></div>
                <div className="p-6 sm:p-7"><span className="text-xs font-semibold tracking-[0.2em] text-emerald-700">0{index + 1}</span><h3 className="mt-4 text-2xl font-semibold leading-tight text-[#253247]">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#253247]/10 bg-[#E8EFE9] px-8 py-16 sm:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
          <div className="reveal-item relative aspect-[4/3] overflow-hidden"><Image src="/images/about/vision.png" alt="Sampan Group vision" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></div>
          <div className="reveal-item"><p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">Our vision</p><h2 className="mt-5 text-[clamp(2.25rem,3.7vw,4rem)] font-semibold leading-tight tracking-tight">Empowering tomorrow, shaping a sustainable future.</h2><p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">Our vision is to be a globally respected and diversified business group, recognized for creating enduring value through innovation, sustainability, and responsible leadership. We aim to empower communities, advance industries, and embrace future-forward solutions.</p></div>
        </div>
      </section>

      <section className="bg-[#253247] px-8 py-16 text-white sm:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-24">
          <div className="reveal-item order-2 lg:order-1"><p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-300">Our mission</p><h2 className="mt-5 text-[clamp(2.25rem,3.7vw,4rem)] font-semibold leading-tight tracking-tight">Driving excellence through innovation and integrity.</h2><p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">At Sampan Group, our mission is to lead with integrity, innovation, and excellence across all our ventures. We are committed to delivering superior value to our customers, partners, and communities through quality, sustainable growth, social responsibility, and transparent leadership.</p></div>
          <div className="reveal-item relative order-1 aspect-[4/3] overflow-hidden lg:order-2"><Image src="/images/about/mission.png" alt="Sampan Group mission and teamwork" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></div>
        </div>
      </section>

      <LeadershipSection />
    </main>
  );
}
