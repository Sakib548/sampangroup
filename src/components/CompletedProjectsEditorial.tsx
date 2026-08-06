"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Projects } from "@/data/projects";

const completedProjects = Projects.filter(
  (project) => project.status === "completed",
);

export default function CompletedProjectsEditorial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [turnDirection, setTurnDirection] = useState<"next" | "previous">(
    "next",
  );
  const activeProject = completedProjects[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTurnDirection("next");
      setActiveIndex((current) => (current + 1) % completedProjects.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  if (!activeProject) return null;

  const move = (amount: number) => {
    setTurnDirection(amount > 0 ? "next" : "previous");
    setActiveIndex(
      (activeIndex + amount + completedProjects.length) %
        completedProjects.length,
    );
  };

  const imageLayers = [-1, 0, 1].map((offset) => {
    const index =
      (activeIndex + offset + completedProjects.length) %
      completedProjects.length;
    return { project: completedProjects[index], offset };
  });

  return (
    <section className="overflow-hidden bg-[#E8EFE9]  py-24 text-[#123B2C] sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1500px] items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-12">
        <div className="relative mx-auto h-[430px] w-full max-w-[560px] sm:h-[560px]">
          {imageLayers.map(({ project, offset }) => {
            const isFront = offset === 0;
            const rotation = offset === -1 ? -8 : offset === 1 ? 7 : 0;
            const translate = offset === -1 ? "-8%" : offset === 1 ? "8%" : "0";

            return (
              <div
                key={`${project.id}-${offset}`}
                className={`absolute inset-4 overflow-hidden rounded-[2rem] shadow-xl transition-all duration-700 sm:inset-8 ${
                  isFront ? "z-20" : "z-10 opacity-90"
                } ${
                  isFront
                    ? turnDirection === "next"
                      ? "animate-page-turn-next"
                      : "animate-page-turn-previous"
                    : ""
                }`}
                style={
                  isFront
                    ? undefined
                    : {
                        transform: `translateX(${translate}) rotate(${rotation}deg) scale(0.94)`,
                      }
                }
              >
                <Image
                  src={project.logo}
                  alt={project.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                  priority={isFront && activeIndex === 0}
                />
              </div>
            );
          })}
        </div>

        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B83232]">
            Completed projects
          </p>
          <h2 className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-7xl">
            Places made to last.
          </h2>
          <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#B83232] sm:text-3xl">
            {activeProject.name}
          </h3>
          <p className="mt-8 max-w-lg text-lg leading-8 text-[#123B2C]/70 sm:text-xl">
            {activeProject.description ||
              `${activeProject.name} is part of Sampan Group's growing portfolio of places, services, and experiences.`}
          </p>

          <div className="mt-10 flex items-center gap-3">
            {activeProject.href ? (
              <Link
                href={activeProject.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-[#123B2C] px-7 py-4 text-sm font-semibold transition hover:bg-[#123B2C] hover:text-white"
              >
                View project
              </Link>
            ) : (
              <span className="inline-flex items-center rounded-full border border-[#123B2C]/40 px-7 py-4 text-sm font-semibold text-[#123B2C]/60">
                Project details soon
              </span>
            )}
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next completed project"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[#123B2C] text-2xl transition hover:bg-[#123B2C] hover:text-white"
            >
              →
            </button>
          </div>

          <div className="mt-12 flex items-center gap-5 border-t border-[#123B2C]/20 pt-5">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous completed project"
              className="text-2xl transition hover:text-[#B83232]"
            >
              ←
            </button>
            <div className="flex flex-1 gap-2">
              {completedProjects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${project.name}`}
                  className={`h-1 transition-all duration-500 ${
                    index === activeIndex
                      ? "w-12 bg-[#B83232]"
                      : "w-5 bg-[#123B2C]/25"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs tracking-[0.18em] text-[#123B2C]/55">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(completedProjects.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
