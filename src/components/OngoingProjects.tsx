"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Projects } from "@/data/projects";

export default function OngoingProjects() {
  const projects = Projects.filter((project) => project.status === "ongoing");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="overflow-hidden bg-neutral-950 px-10 py-16 text-white sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end lg:mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-red-300">
              Ongoing Projects
            </p>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.5rem,4.3vw,4.75rem)] font-medium leading-[0.94] tracking-[-0.055em] greenText">
              Projects people
              <br />
              <span className="redText">want to experience.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/60 sm:text-right">
            A look at the destinations currently taking shape across Sampan.
          </p>
        </div>

        {/* Cards -  mobile: stacked column, desktop: horizontal flex row */}
        <div className="flex flex-col gap-2 overflow-hidden sm:flex-row sm:h-[430px] lg:h-[480px]">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={project.id}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`group relative isolate min-h-[300px] overflow-hidden transition-[flex] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:min-h-0 sm:flex-1 ${
                  activeIndex === null
                    ? "sm:flex-1"
                    : isActive
                      ? "sm:flex-[1.8]"
                      : "sm:flex-[0.7]"
                }`}
              >
                {/* Image wrapper -  explicit relative + h-full guarantees
                    the fill image always has a computed height */}
                <div className="absolute inset-0">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className={`object-cover transition duration-1000 ease-out ${
                      isActive ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/5" />

                <div className="absolute inset-x-5 bottom-6 sm:inset-x-6 sm:bottom-8">
                  <h3 className="mt-4 max-w-[14ch] text-2xl font-semibold uppercase leading-[0.95] tracking-[-0.02em] sm:text-3xl">
                    {project.name}
                  </h3>
                  {project.href && (
                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 transition hover:text-emerald-300"
                    >
                      View project <span aria-hidden="true">↗</span>
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
