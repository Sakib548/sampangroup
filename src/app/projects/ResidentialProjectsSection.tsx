"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  [
    "Sampan 21st Century",
    "/images/projects/Sampan-21st-Century-Inn.png",
    "A successful residential development offering modern living and premium land-share opportunities.",
    "/projects/Sampan21stCentury",
  ],
  [
    "Sampan Taj",
    "/images/projects/Sampan-Taj-Bashundhara.png",
    "A premium land-share residential project, developed with Sampan’s commitment to quality and trust.",
    "/projects/SampanTaj",
  ],
  [
    "Sampan Niketon",
    "/images/projects/Sampan-Niketon.png",
    "A successful addition to Sampan’s residential portfolio, reflecting our experience in creating quality addresses.",
    "/projects/SampanNiketon",
  ],
] as const;

export default function ResidentialProjectsSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-neutral-950 py-16 text-white sm:py-20 lg:py-24">
      <div className="px-5 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f5c84c]">
            Real estate portfolio
          </p>

          <h2 className="mt-5 max-w-5xl text-[clamp(2.7rem,5vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.055em] text-balance">
            Our Successful
            <span className="block ">Real Estate Projects</span>
          </h2>
        </div>
      </div>

      <div className="mt-10 flex min-h-[70svh] w-full flex-col gap-1 overflow-hidden sm:flex-row lg:h-[78svh]">
        {projects.map(([name, image, description, href], index) => {
          const isActive = active === index;

          return (
            <article
              key={name}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className={`group relative min-h-[300px] flex-1 overflow-hidden transition-[flex] duration-700 sm:min-h-0 ${
                active === null
                  ? "flex-1"
                  : isActive
                    ? "sm:flex-[1.8]"
                    : "sm:flex-[0.7]"
              }`}
            >
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className={`object-cover transition duration-1000 ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />

              <div className="absolute inset-x-6 bottom-8 lg:inset-x-10 lg:bottom-12">
                <span className="text-sm tracking-[0.2em] text-[#a8df73]">
                  COMPLETED
                </span>

                <h3 className="mt-4 text-3xl font-semibold uppercase leading-[0.95] sm:text-4xl lg:text-5xl">
                  {name}
                </h3>

                <p className="mt-3 max-w-md text-base leading-6 text-white/80">
                  {description}
                </p>

                <Link
                  href={href}
                  className="group/link mt-6 inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#a8df73] transition-colors duration-300 hover:text-[#ef636b]"
                >
                  Learn More
                  <span className="transition-transform duration-300 group-hover/link:translate-x-2">
                    →
                  </span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
