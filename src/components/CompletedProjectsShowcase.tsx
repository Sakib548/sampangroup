"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Projects } from "@/data/projects";

const completedProjects = Projects.filter(
  (project) => project.status === "completed",
);

export default function CompletedProjectsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = completedProjects[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % completedProjects.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  if (!activeProject) return null;

  const move = (amount: number) => {
    setActiveIndex(
      (activeIndex + amount + completedProjects.length) %
        completedProjects.length,
    );
  };

  return (
    <section className="relative isolate h-[760px] overflow-hidden bg-neutral-900 text-white lg:h-screen">
      <Image
        key={`background-${activeProject.id}`}
        src={activeProject.logo}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover transition-opacity duration-1000"
      />
      <div className="absolute inset-0 bg-[#071526]/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071526]/80 via-[#071526]/35 to-[#071526]/10" />

      <div className="relative mx-auto h-full max-w-[1600px] px-8 sm:px-12 lg:px-16">
        <div className="absolute left-8 top-10 z-10 max-w-xl sm:left-12 sm:top-10 lg:left-16 lg:top-10 lg:w-[38%] lg:max-w-none">
          {/* <p className="text-sm font-medium uppercase tracking-[0.08em] text-white/90 sm:text-base">
            Featured projects
          </p> */}
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.08em] text-white/90 sm:text-base">
            Completed Projects
          </p>

          <h2 className="mt-8 max-w-[10ch] break-words text-5xl font-light uppercase leading-[0.95] tracking-[0.02em] sm:text-7xl lg:text-7xl xl:text-8xl">
            {activeProject.name}
          </h2>

          <p className="mt-10 max-w-md text-xl font-light leading-relaxed text-white/90 sm:text-2xl">
            {activeProject.description || "A Sampan Group development."}
          </p>

          {activeProject.href && (
            <Link
              href={activeProject.href}
              target="_blank"
              rel="noreferrer"
              className="mt-16 inline-flex items-center gap-4 text-lg font-medium transition-opacity hover:opacity-70"
            >
              <span className="h-5 w-5 rounded-full bg-white" />
              View project
            </Link>
          )}
        </div>

        <div className="absolute right-8 top-1/2 hidden w-[48%] max-w-[760px] -translate-y-1/2 lg:block">
          <div className="relative aspect-[1.45] overflow-hidden bg-transparent shadow-2xl shadow-black/25">
            <Image
              key={activeProject.id}
              src={activeProject.logo}
              alt={activeProject.name}
              fill
              sizes="48vw"
              className="object-contain transition-opacity duration-1000"
            />
          </div>
          <div className="mt-6 flex items-center justify-end gap-3 sm:gap-5">
            {completedProjects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${project.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-1 transition-all duration-500 ${
                  index === activeIndex
                    ? "w-12 bg-white"
                    : "w-6 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-8 z-10 sm:left-12 lg:bottom-12 lg:left-16">
          <div className="flex items-center gap-10">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous completed project"
              className="text-5xl font-extralight leading-none transition-opacity hover:opacity-60"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next completed project"
              className="text-5xl font-extralight leading-none transition-opacity hover:opacity-60"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
