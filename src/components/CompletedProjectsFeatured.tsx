"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Projects } from "@/data/projects";

gsap.registerPlugin(useGSAP);

const completedProjects = Projects.filter(
  (project) => project.status === "completed",
);

export default function CompletedProjectsFeatured() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = completedProjects[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        current === completedProjects.length - 1 ? 0 : current + 1,
      );
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          ".featured-project-image",
          { autoAlpha: 0, scale: 1.04 },
          { autoAlpha: 1, scale: 1, duration: 1, ease: "power2.out" },
        )
        .from(
          ".featured-project-copy > *",
          {
            y: 24,
            autoAlpha: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.55",
        );

      return () => timeline.kill();
    },
    { scope: sectionRef, dependencies: [activeIndex] },
  );

  function goToProject(index: number) {
    const nextIndex =
      (index + completedProjects.length) % completedProjects.length;
    setActiveIndex(nextIndex);
  }

  if (!activeProject) return null;

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-stone-100 py-24 text-neutral-950 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex flex-col justify-between gap-8 sm:flex-row sm:items-end lg:mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Our completed projects
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
              Built to stand the test of time.
            </h2>
          </div>

          <div className="flex max-w-sm flex-col gap-5 sm:items-end">
            <p className="leading-7 text-neutral-600 sm:text-right">
              A selection of Sampan projects that continue to shape places and
              experiences.
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => goToProject(activeIndex - 1)}
                aria-label="Previous completed project"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-700 text-lg text-white shadow-lg shadow-emerald-950/15 transition hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => goToProject(activeIndex + 1)}
                aria-label="Next completed project"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-lg text-white shadow-lg shadow-emerald-950/15 transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="relative min-h-[70vh] overflow-hidden bg-neutral-950 text-white sm:min-h-[620px]">
          <Image
            key={activeProject.id}
            src={activeProject.logo}
            alt={activeProject.name}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="featured-project-image object-cover"
            priority={activeIndex === 0}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

          <div className="absolute right-6 top-6 text-sm tracking-[0.2em] text-white/75 sm:right-10 sm:top-10">
            {String(activeIndex + 1).padStart(2, "0")} / {String(completedProjects.length).padStart(2, "0")}
          </div>

          <div className="featured-project-copy absolute inset-x-6 bottom-8 max-w-3xl sm:inset-x-10 sm:bottom-12 lg:bottom-16">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-300">
              Completed project
            </p>
            <h3 className="mt-4 text-4xl font-medium tracking-tight sm:text-6xl lg:text-8xl">
              {activeProject.name}
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              {activeProject.description ||
                "Project details will be published soon."}
            </p>
          </div>

        </div>

        <div className="flex gap-4 overflow-x-auto border-b border-neutral-300 scrollbar-none">
          {completedProjects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => goToProject(index)}
              aria-pressed={index === activeIndex}
              className={`shrink-0 border-b-2 py-5 pr-5 text-left text-sm transition-colors sm:text-base ${
                index === activeIndex
                  ? "border-emerald-700 text-neutral-950"
                  : "border-transparent text-neutral-500 hover:text-neutral-950"
              }`}
            >
              <span className="mr-3 text-xs tracking-[0.18em] text-emerald-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              {project.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
