import Image from "next/image";
import { partners } from "@/data/partners";

export default function PartnersSection() {
  return (
    <section className="bg-[#E8EFE9] px-10 py-16 text-neutral-950 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex flex-col justify-between gap-6 border-b border-neutral-950/15 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] greenText ">
              Partnerships & affiliations
            </p>
            <h2 className="mt-4 text-[clamp(2.25rem,3.7vw,3.75rem)] font-semibold tracking-tight">
              Our partners
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-neutral-600 sm:text-right">
            Trusted relationships that help Sampan create lasting impact.
          </p>
        </div>

        <div className="mt-10 grid border-l border-t border-neutral-950/15 sm:grid-cols-2 lg:grid-cols-6">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="group flex min-h-52 flex-col items-center justify-center border-b border-r border-neutral-950/15 bg-[#E8EFE9] p-6 text-center transition duration-500 hover:bg-white sm:min-h-56 sm:p-8"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={240}
                height={150}
                className="h-28 w-52 object-contain transition duration-500 group-hover:scale-105 sm:h-32 sm:w-56"
              />
              <p className="mt-6 border-t border-neutral-950/15 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-600">
                {partner.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
