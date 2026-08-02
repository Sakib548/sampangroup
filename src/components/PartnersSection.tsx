"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { partners } from "@/data/partners";

export default function PartnersSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const showPartner = (index: number) => {
    const nextIndex = (index + partners.length) % partners.length;
    setActiveIndex(nextIndex);
    const viewport = viewportRef.current;
    const card = cardRefs.current[nextIndex];

    if (viewport && card) {
      viewport.scrollTo({
        left: card.offsetLeft - viewport.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const timer = window.setInterval(() => showPartner(activeIndex + 1), 4500);
    return () => window.clearInterval(timer);
  }, [activeIndex]);

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

          <div className="hidden items-center gap-2 sm:flex">
            <button type="button" onClick={() => showPartner(activeIndex - 1)} aria-label="Previous partner" className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-xl transition hover:border-emerald-700 hover:bg-emerald-700 hover:text-white">←</button>
            <button type="button" onClick={() => showPartner(activeIndex + 1)} aria-label="Next partner" className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-xl transition hover:border-emerald-700 hover:bg-emerald-700 hover:text-white">→</button>
          </div>
        </div>

        <div ref={viewportRef} className="mt-10 overflow-x-auto overflow-y-hidden scrollbar-none">
          <div className="flex gap-4">
          {partners.map((partner) => (
            <article
              key={partner.name}
              ref={(element) => { cardRefs.current[partners.indexOf(partner)] = element; }}
              className="flex min-h-44 min-w-[82%] flex-[0_0_82%] flex-col justify-between border border-neutral-200 p-5 sm:min-w-[46%] sm:flex-[0_0_46%] sm:min-h-48 sm:p-6 lg:min-w-[31.5%] lg:flex-[0_0_31.5%]"
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
      </div>
    </section>
  );
}
