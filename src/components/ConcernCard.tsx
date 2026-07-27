import Image from "next/image";
import Link from "next/link";
import type { Concern } from "@/types/Concern";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function ConcernCard({ concern }: { concern: Concern }) {
  return (
    <article className="group overflow-hidden border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl">
      <div className="flex h-44 items-center justify-center bg-neutral-100 p-8">
        {concern.logo ? (
          <Image
            src={concern.logo}
            alt={`${concern.name} logo`}
            width={240}
            height={120}
            className="max-h-24 w-auto object-contain transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-neutral-300 text-xl font-semibold tracking-[0.15em] text-neutral-500">
            {getInitials(concern.name)}
          </span>
        )}
      </div>

      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-700">
          {concern.category}
        </p>

        <h2 className="mt-3 text-xl font-semibold tracking-tight text-neutral-950">
          {concern.name}
        </h2>

        <p className="mt-3 min-h-12 text-sm leading-6 text-neutral-600">
          {concern.tagline}
        </p>

        {concern.href ? (
          concern.external ? (
            <a
              href={concern.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-neutral-950 transition group-hover:gap-3"
            >
              Visit website <span aria-hidden="true">→</span>
            </a>
          ) : (
            <Link
              href={concern.href}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-neutral-950 transition group-hover:gap-3"
            >
              Explore <span aria-hidden="true">→</span>
            </Link>
          )
        ) : (
          <span className="mt-5 inline-block text-sm text-neutral-400">
            Website coming soon
          </span>
        )}
      </div>
    </article>
  );
}
