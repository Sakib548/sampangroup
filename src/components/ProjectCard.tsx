"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/Project";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const reverse = index % 2 !== 0;

  return (
    <article
      className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}

      <div className="group overflow-hidden rounded-3xl bg-neutral-900">
        <Image
          src={project.logo}
          alt={project.name}
          width={900}
          height={700}
          className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}

      <div className="max-w-xl">
        {/* <span className="inline-flex rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
          Now Developing
        </span> */}

        <h3 className="mt-6 text-4xl font-semibold leading-tight lg:text-5xl">
          {project.name}
        </h3>

        <div className="mt-8 h-px w-20 bg-emerald-500" />

        <p className="mt-8 text-lg leading-8 text-neutral-400">
          {project.description}
        </p>

        <Link
          href={project.href}
          className="group mt-10 inline-flex items-center gap-5"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.18em]">
            Explore Project
          </span>

          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white transition-all duration-300 group-hover:translate-x-2 group-hover:bg-white group-hover:text-black">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
