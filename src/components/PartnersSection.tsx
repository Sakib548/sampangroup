import Image from "next/image";
import { partners } from "@/data/partners";

export default function PartnersSection() {
  return (
    <section className="bg-[#E8EFE9] px-6 py-20 text-neutral-950 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 border-b border-neutral-950/15 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] greenText ">
              Partnerships & affiliations
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Our partners
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-neutral-600 sm:text-right">
            Trusted relationships that help Sampan create lasting impact.
          </p>
        </div>

        <div className="mt-10 grid border-l border-t border-neutral-950/15 sm:grid-cols-2 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <article
              key={partner.name}
              className="group flex min-h-52 flex-col justify-between border-b border-r border-neutral-950/15 bg-[#E8EFE9] p-6 transition duration-500 hover:bg-white sm:min-h-56 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs tracking-[0.2em] text-emerald-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={110}
                  className="h-20 w-40 object-contain object-right transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-7 border-t border-neutral-950/15 pt-4">
                <h3 className="text-sm font-semibold leading-5">
                  {partner.name}
                </h3>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-500">
                  {partner.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
