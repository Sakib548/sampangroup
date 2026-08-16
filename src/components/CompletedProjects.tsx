"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Projects } from "@/data/projects";

const completedProjects = Projects.filter(
  (project) => project.status === "completed",
);

type CompletedProjectsProps = {
  variant?: "grid" | "showcase";
};

function GridVersion() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".completed-project-card", {
        y: 56,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".completed-project-grid",
          start: "top 78%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-neutral-950 py-24 text-neutral-950 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-3xl lg:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Our built legacy
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Places we have shaped.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            A selection of completed developments that reflect Sampan Group&apos;s
            experience across living, hospitality and commercial spaces.
          </p>
        </div>

        <div className="completed-project-grid grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {completedProjects.map((project, index) => {
            const featured = index === 0 || index === 3;

            return (
              <article
                key={project.id}
                className={`completed-project-card group ${
                  featured ? "lg:col-span-7" : "lg:col-span-5"
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 58vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                  <span className="absolute left-5 top-5 text-xs font-medium tracking-[0.2em] text-white/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="absolute inset-x-5 bottom-5 text-2xl font-medium text-white sm:text-3xl">
                    {project.name}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ShowcaseVersion() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = completedProjects[activeIndex];

  useGSAP(
    () => {
      gsap.from(".showcase-heading > *", {
        y: 36,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  useGSAP(
    () => {
      gsap.fromTo(
        ".showcase-image",
        { autoAlpha: 0, scale: 1.025 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.7,
          ease: "power2.out",
        },
      );
    },
    { scope: sectionRef, dependencies: [activeIndex] },
  );

  function goToProject(index: number) {
    const wrappedIndex =
      (index + completedProjects.length) % completedProjects.length;
    setActiveIndex(wrappedIndex);
  }

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-stone-100 py-24 text-neutral-950 lg:py-32"
    >
      <div className="showcase-heading mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Delivered by Sampan
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Built. Proven. Enduring.
          </h2>
        </div>
        <p className="max-w-md leading-7 text-neutral-600">
          Explore the projects that have become part of our growing legacy.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl gap-10 px-6 lg:mt-20 lg:grid-cols-12 lg:items-start lg:gap-14 lg:px-10">
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
            <Image
              key={activeProject.id}
              src={activeProject.logo}
              alt={activeProject.name}
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="showcase-image object-cover"
              priority={false}
            />
          </div>

          <div className="mt-5 flex items-center justify-between">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              Completed project
            </p>
            <p className="text-xs tracking-[0.2em] text-neutral-500">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(completedProjects.length).padStart(2, "0")}
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="border-t border-neutral-300">
            {completedProjects.map((project, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => goToProject(index)}
                  aria-pressed={active}
                  className={`group flex w-full items-center gap-5 border-b border-neutral-300 py-5 text-left transition-colors ${
                    active
                      ? "text-neutral-950"
                      : "text-neutral-500 hover:text-neutral-950"
                  }`}
                >
                  <span
                    className={`text-xs tracking-[0.18em] transition-colors ${
                      active ? "text-emerald-700" : "text-neutral-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-lg font-medium sm:text-xl">
                    {project.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full transition-all ${
                      active
                        ? "scale-100 bg-emerald-700"
                        : "scale-0 bg-neutral-400 group-hover:scale-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => goToProject(activeIndex - 1)}
              aria-label="Previous completed project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-400 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => goToProject(activeIndex + 1)}
              aria-label="Next completed project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-400 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CompletedProjects({
  variant = "grid",
}: CompletedProjectsProps) {
  return variant === "showcase" ? <ShowcaseVersion /> : <GridVersion />;
}
