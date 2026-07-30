import Image from "next/image";
import { partners } from "@/data/partners";

export default function PartnersSection() {
  return (
    <section className="bg-white px-6 py-20 text-neutral-950 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
              Partnerships & affiliations
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Our partners
            </h2>
          </div>

          <p className="hidden text-sm text-neutral-500 sm:block">
            {partners.length} trusted associations
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 border-l border-t border-neutral-200 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="flex min-h-44 flex-col justify-between border-b border-r border-neutral-200 p-5 sm:min-h-48 sm:p-6"
            >
              <div className="flex h-24 items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={110}
                  className="max-h-20 w-full object-contain sm:max-h-24"
                />
              </div>

              <p className="mt-5 text-center text-xs font-medium uppercase tracking-[0.12em] text-neutral-600">
                {partner.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
