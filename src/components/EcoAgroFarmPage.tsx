"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const farmImage = "/images/our_divisions/eco_agro/fruits.jpg";
const farmMark = "/images/our_divisions/eco_agro/veg.jpg";

const crops = [
  {
    name: "Fruits",
    image: farmImage, // Fixed: Changed from farmImages to farmImage
    copy: "Seasonal fruit, grown slowly and picked with cares.",
  },
  {
    name: "Vegetables",
    image: farmImage,
    copy: "Everyday produce from healthy, living soil.",
  },
  {
    name: "Seasonal Produce",
    image: farmMark,
    copy: "A changing harvest that follows the rhythm of the land.",
  },
  {
    name: "Farm Fresh",
    image: farmImage,
    copy: "Closer from farm to table, with fewer unnecessary steps.",
  },
];

export default function EcoAgroFarmPage() {
  const revealRef = useRef<HTMLElement>(null);
  const [activeCrop, setActiveCrop] = useState(0);

  useGSAP(
    () => {
      const image = revealRef.current?.querySelector(".farm-reveal-image");
      if (!image) return;
      gsap.fromTo(
        image,
        { clipPath: "inset(0 0 38% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          ease: "none",
          scrollTrigger: {
            trigger: revealRef.current,
            start: "top 78%",
            end: "top 18%",
            scrub: 0.8,
          },
        },
      );
      gsap.utils
        .toArray<HTMLElement>(".eco-farm-page > section:not(:first-child)")
        .forEach((section) =>
          gsap.from(section, {
            y: 28,
            autoAlpha: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }),
        );
    },
    { scope: revealRef },
  );

  return (
    <main className="eco-farm-page bg-[#f4f1e8] text-[#17251f]">
      <style>{`@media (min-width: 0px) { .eco-farm-page section:nth-of-type(3) { background:#e3ecd9 !important; color:#173326 !important; } .eco-farm-page section:nth-of-type(3) [class*="text-white"] { color:rgba(23,51,38,.72) !important; } .eco-farm-page section:nth-of-type(3) [class*="text-[#b9e583]"] { color:#2f6b45 !important; } .eco-farm-page section:nth-of-type(3) button { border-left:2px solid transparent; transition:color .35s ease, padding-left .35s ease, border-color .35s ease; } .eco-farm-page section:nth-of-type(3) button:hover, .eco-farm-page section:nth-of-type(3) button:focus-visible { background:transparent; border-left-color:#2f6b45; color:#2f6b45 !important; padding-left:10px; outline:none; } .eco-farm-page section:nth-of-type(3) button > span:first-child { font-size:clamp(2rem,3.6vw,4rem); line-height:1; } .eco-farm-page section:nth-of-type(5) { background:#d5e4c8 !important; color:#173326 !important; } .eco-farm-page section:nth-of-type(5) [class*="text-white"] { color:rgba(23,51,38,.78) !important; } .eco-farm-page section:nth-of-type(5) [class*="text-[#b9e583]"] { color:#2f6b45 !important; } }`}</style>
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#173326] text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        >
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#10251b] via-[#10251b]/30 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <p className="text-xs uppercase tracking-[0.35em] text-[#b9e583]">
            Sampan ECO &amp; Agro
          </p>
          <h1 className="mt-6 max-w-5xl text-6xl font-light leading-[0.9] tracking-[-0.06em] sm:text-8xl lg:text-[clamp(5rem,9vw,9rem)]">
            Naturally grown.
            <br />
            <span className="text-[#b9e583]">Honestly fresh.</span>
          </h1>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#crops"
              className="border border-white/60 px-6 py-3 text-xs uppercase tracking-[0.18em] transition hover:bg-white hover:text-[#173326]"
            >
              Explore our farm
            </Link>
            <Link
              href="#journey"
              className="border border-[#b9e583] px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#b9e583] transition hover:bg-[#b9e583] hover:text-[#173326]"
            >
              Discover our produce
            </Link>
          </div>
        </div>
      </section>

      <section
        ref={revealRef}
        className="relative overflow-hidden py-24 lg:py-36"
      >
        <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-12">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#65825d]">
              01 -  Our belief
            </p>
            <h2 className="mt-6 text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl">
              Food should feel as natural as the land it comes from.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-8 text-black/60">
              Sampan ECO &amp; Agro connects responsible cultivation with the
              everyday joy of fresh, honest food.
            </p>
          </div>
          <div className="farm-reveal-image relative h-[55vh] min-h-[28rem] overflow-hidden">
            <Image
              src={farmImage}
              alt="Fresh produce at Sampan ECO and Agro"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="crops" className="bg-[#10251b] py-24 text-white lg:py-36">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-12">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <p className="text-xs uppercase tracking-[0.32em] text-[#b9e583]">
              02 -  What we grow
            </p>
            <h2 className="mt-6 text-4xl font-light sm:text-6xl">
              Meet the harvest.
            </h2>
            <div className="mt-10 hidden aspect-[4/5] overflow-hidden lg:block">
              <Image
                src={crops[activeCrop].image}
                alt={crops[activeCrop].name}
                width={800}
                height={1000}
                className="h-full w-full object-cover transition duration-700"
              />
            </div>
          </div>
          <div className="divide-y divide-white/15 border-y border-white/15">
            {crops.map((crop, index) => (
              <button
                key={crop.name}
                type="button"
                onMouseEnter={() => setActiveCrop(index)}
                onFocus={() => setActiveCrop(index)}
                className={`group flex w-full items-center justify-between py-8 text-left transition-colors sm:py-12 ${activeCrop === index ? "text-[#b9e583]" : "text-white/65 hover:text-white"}`}
              >
                <span className="text-4xl font-light tracking-tight sm:text-6xl">
                  {crop.name}
                </span>
                <span className="max-w-[14rem] text-right text-sm leading-6 opacity-70">
                  {crop.copy}
                  <span className="ml-4 inline-block transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="py-24 lg:py-36">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-[#65825d]">
              03 -  From our farm to your home
            </p>
            <h2 className="mt-6 text-4xl font-medium tracking-tight sm:text-6xl">
              A simple journey, handled with care.
            </h2>
          </div>
          <div className="relative mt-16 grid gap-8 border-t border-[#173326]/20 pt-10 md:grid-cols-4">
            {[
              { n: "01", t: "Grow", d: "Nurtured in healthy soil." },
              { n: "02", t: "Harvest", d: "Picked at the right moment." },
              { n: "03", t: "Select", d: "Prepared with attention." },
              { n: "04", t: "Deliver", d: "Closer to your table." },
            ].map((step) => (
              <article key={step.n} className="relative">
                <span className="text-sm text-[#65825d]">{step.n}</span>
                <h3 className="mt-12 text-2xl font-medium">{step.t}</h3>
                <p className="mt-3 max-w-[12rem] text-sm leading-6 text-black/55">
                  {step.d}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#173326] py-24 text-white lg:py-36">
        <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24 lg:px-12">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#b9e583]">
              04 -  Chemical-free by intention
            </p>
            <h2 className="mt-6 text-5xl font-light leading-[0.92] tracking-[-0.05em] sm:text-8xl">
              Less chemicals.
              <br />
              <span className="text-[#b9e583]">More nature.</span>
            </h2>
          </div>
          <div className="space-y-7 text-white/70">
            <p className="text-lg leading-8">
              Our growing practices will be described here with verified
              information from Sampan’s farm team.
            </p>
            <div className="grid grid-cols-2 gap-5 border-t border-white/20 pt-6 text-sm">
              <span>Responsible growing</span>
              <span>Seasonal harvests</span>
              <span>Traceable produce</span>
              <span>Practices to be verified</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-36">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#65825d]">
                05 -  Life at the farm
              </p>
              <h2 className="mt-6 text-4xl font-medium sm:text-6xl">
                A living, growing place.
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-black/55 sm:block">
              The everyday details are where the story begins.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
            <div className="relative h-[32rem] overflow-hidden">
              <Image
                src={farmImage}
                alt="Life at Sampan farm"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid gap-5">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={farmMark}
                  alt="Sampan ECO and Agro"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex min-h-56 items-end bg-[#dce7d6] p-7 text-2xl leading-tight">
                From our fields,
                <br />
                to your table.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#dce7d6] py-24 lg:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-[0.32em] text-[#65825d]">
            06 -  Our impact
          </p>
          <div className="mt-10 grid border-y border-[#173326]/20 sm:grid-cols-4">
            {[
              "Acres cultivated",
              "Varieties grown",
              "Families served",
              "Verified metrics",
            ].map((label) => (
              <div
                key={label}
                className="border-b border-[#173326]/20 py-8 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-0"
              >
                <p className="text-4xl font-medium">—</p>
                <p className="mt-3 text-sm text-black/60">{label}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.14em] text-[#65825d]">
                  To be confirmed
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#10251b] text-white">
        <Image
          src={farmImage}
          alt="Sampan ECO and Agro fields"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10251b] to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <p className="text-xs uppercase tracking-[0.32em] text-[#b9e583]">
            07 -  Meet the farm
          </p>
          <h2 className="mt-6 max-w-3xl text-5xl font-light leading-[0.95] sm:text-7xl">
            From our fields
            <br />
            to your table.
          </h2>
          <Link
            href="/contact"
            className="mt-9 inline-flex border border-[#b9e583] px-7 py-4 text-xs uppercase tracking-[0.18em] text-[#b9e583] transition hover:bg-[#b9e583] hover:text-[#10251b]"
          >
            Experience Sampan ECO &amp; Agro ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
