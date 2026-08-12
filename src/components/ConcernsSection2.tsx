import Image from "next/image";
import { concerns } from "@/data/concerns";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function ConcernsSection2() {
  return (
    <section className="bg-stone-100 px-10 py-16 text-neutral-950 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex flex-col justify-between gap-6 border-b border-neutral-950/15 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
              Our businesses
            </p>
            <h2 className="mt-4 max-w-3xl text-[clamp(2.25rem,3.7vw,3.75rem)] font-semibold leading-tight tracking-tight">
              One group, many ambitions.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-neutral-600 sm:text-right">
            Diverse businesses connected by one shared vision for progress.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 border-l border-t border-neutral-950/15 sm:grid-cols-3 lg:grid-cols-6">
          {concerns.map((concern, index) => (
            <article
              key={concern.id}
              className={`group flex min-h-64 flex-col justify-between border-b border-r border-neutral-950/15 bg-white p-5 transition duration-500 hover:-translate-y-1 hover:shadow-xl sm:min-h-72 sm:p-7 ${
                index % 4 === 1 ? "hover:border-red-500" : "hover:border-emerald-700"
              }`}
            >
              <div className="flex min-h-32 items-center justify-center sm:min-h-40">
                {concern.logo ? (
                  <Image
                    src={concern.logo}
                    alt={`${concern.name} logo`}
                    width={220}
                    height={160}
                    className="max-h-28 w-full object-contain transition duration-500 group-hover:scale-105 sm:max-h-32"
                  />
                ) : (
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-neutral-300 text-xl font-semibold tracking-[0.12em] text-neutral-700">
                    {getInitials(concern.name)}
                  </span>
                )}
              </div>
              <div className="border-t border-neutral-200 pt-4">
                <h3 className="text-sm font-semibold leading-5 tracking-tight">
                  {concern.name}
                </h3>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-500">
                  {concern.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
