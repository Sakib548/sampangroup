"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    label: "Grown with care",
    title: "Healthy soil. Better harvests.",
    body: "Our approach begins with responsible cultivation and respect for the land.",
    image: "/images/concerns/eco-agro.png",
  },
  {
    label: "From farm to table",
    title: "Freshness you can experience.",
    body: "Produce, people and place come together in a more thoughtful rural experience.",
    image: "/images/concerns/3-sampan-eco-agro.png",
  },
  {
    label: "A living destination",
    title: "Come closer to nature.",
    body: "Explore a destination shaped by community, agriculture and long-term sustainability.",
    image: "/images/concerns/3-sampan-eco-agro.png",
  },
];

export default function EcoAgroStory() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>(".eco-story-panel");
      if (!panels.length) return;
      const left = root.current?.querySelector(".eco-collage-left");
      const right = root.current?.querySelector(".eco-collage-right");
      const imageFrame = root.current?.querySelector(".eco-story-image");
      if (left) gsap.set(left, { clearProps: "transform" });
      if (imageFrame)
        gsap.fromTo(
          imageFrame,
          { clipPath: "inset(0 0 34% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            ease: "none",
            scrollTrigger: {
              trigger: imageFrame,
              start: "top 78%",
              end: "top 20%",
              scrub: 0.8,
            },
          },
        );
      if (right)
        gsap.to(right, {
          y: -210,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      panels.forEach((panel) =>
        gsap.from(panel, {
          y: 35,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }),
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative bg-[#f1eee7] text-[#2f302c]">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-12 lg:py-32">
        <div className="eco-collage-left">
          <div className="eco-story-image relative h-[68vh] min-h-0 overflow-hidden will-change-[clip-path]">
            <Image
              src={panels[0].image}
              alt="Sampan Eco and Agro"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          </div>
        </div>
        <div className="eco-collage-right space-y-20 lg:pt-2">
          {" "}
          <article className="eco-story-panel max-w-xl">
            <p className="text-lg leading-8">
              Sampan Eco &amp; Agro is a place to slow down, reconnect with the
              land and discover a more responsible way to grow.
            </p>
          </article>
          <div className="relative h-[24rem] overflow-hidden">
            <Image
              src="/images/concerns/eco-agro.png"
              alt="Fresh produce grown at Sampan Eco and Agro"
              fill
              className="object-cover object-[70%_center]"
            />
          </div>
          {panels.slice(1).map((panel) => (
            <article key={panel.title} className="eco-story-panel max-w-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
                {panel.label}
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                {panel.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-black/65">
                {panel.body}
              </p>
            </article>
          ))}
          <Link
            href="/contact"
            className="inline-flex border border-black/30 px-7 py-4 text-sm uppercase tracking-[0.16em] transition hover:bg-black hover:text-white"
          >
            Where we are <span className="ml-4">↘</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
