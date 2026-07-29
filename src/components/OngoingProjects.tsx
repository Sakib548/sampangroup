"use client";

import ProjectCard from "./ProjectCard";
import { Projects } from "@/data/projects";

export default function OngoingProjects() {
  const ongoingProjects = Projects.filter(
    (project) => project.status === "ongoing",
  );

  return (
    <section className="bg-neutral-950 py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <div className="mb-28 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
            Ongoing Projects
          </p>

          <h2 className="mt-5 text-5xl font-semibold lg:text-6xl">
            Building Tomorrow, Today
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
            Every project reflects our commitment to innovation, sustainability
            and building communities for generations.
          </p>
        </div>

        {/* Cards */}

        <div className="space-y-32">
          {ongoingProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
