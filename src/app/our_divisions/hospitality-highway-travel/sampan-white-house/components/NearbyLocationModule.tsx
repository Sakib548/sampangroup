"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMapPin, FaCompass } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const nearbyAttractions = [
  {
    id: "sampan-highway-inn",
    name: "Sampan Highway Inn & Restaurant",
    category: "Hospitality Flagship",
    distance: "3.5 km",
    driveTime: "4 mins",
    image: "/images/projects/sampan-highway-inn.png",
    description: "Our flagship sister property featuring 24/7 fine dining, party center, and EV supercharging hub.",
    href: "/our_divisions/hospitality-highway-travel/sampan-highway-inn",
  },
  {
    id: "sampan-eco-agro",
    name: "Sampan Eco Agro Farm & Fisheries",
    category: "Agro & Fresh Produce",
    distance: "12 km",
    driveTime: "12 mins",
    image: "/images/projects/sampan-fish-meat.png",
    description: "Organic agricultural estate producing fresh dairy, vegetables, and native fish supplied daily to our kitchens.",
    href: "/our_divisions/hospitality-highway-travel/sampan-eco-agro",
  },
  {
    id: "sampan-agro-golf",
    name: "Sampan Agro & Golf Resort",
    category: "Leisure Destination",
    distance: "18 km",
    driveTime: "16 mins",
    image: "/images/projects/sampan-agro-golf-resort.png",
    description: "Full family resort destination with championship golf practice zones, villa suites, and scenic greenery.",
    href: "/our_divisions/hospitality-highway-travel/sampan-agro-golf-resort",
  },
  {
    id: "bhanga-junction",
    name: "Bhanga Cloverleaf Mega Interchange",
    category: "Highway Infrastructure",
    distance: "20 km",
    driveTime: "16 mins",
    image: "/images/projects/express-highway-inn.png",
    description: "Iconic national interchange connecting the southern expressways toward Barishal and Khulna.",
    href: "#",
  },
];

export default function NearbyLocationModule() {
  return (
    <section className="bg-[#F5F5F2] py-24 sm:py-32 text-neutral-950 border-b border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#e8b84b]"></span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
                07 / Regional Network
              </span>
            </div>
            <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
              Nearby at this location. <br />
              <span className="text-[#ca8a04]">Sampan corridor network.</span>
            </h2>
          </div>
          
          <p className="max-w-md text-sm text-neutral-500 leading-relaxed font-normal">
            Explore neighboring sister developments, agro resorts, and key transportation landmarks within brief driving distance.
          </p>
        </div>

        {/* Nearby Cards Grid (Square Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nearbyAttractions.map((spot) => (
            <article
              key={spot.id}
              className="group flex flex-col rounded-none overflow-hidden bg-white border border-neutral-200 hover:border-[#e8b84b] transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              {/* Top Accent Line */}
              <div className="h-[3px] w-0 bg-[#e8b84b] transition-all duration-500 group-hover:w-full" />

              {/* Image with Distance Tag */}
              <div className="relative aspect-[16/11] overflow-hidden bg-neutral-100">
                <Image
                  src={spot.image}
                  alt={spot.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3.5 right-3.5 bg-white/95 border border-neutral-200 px-3 py-1 font-mono text-[10px] font-bold text-neutral-950 shadow-sm">
                  {spot.distance} • {spot.driveTime}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ca8a04]">
                  {spot.category}
                </span>

                <h3 className="text-base font-bold text-neutral-950 mt-1 transition-colors group-hover:text-[#ca8a04]">
                  {spot.name}
                </h3>

                <p className="mt-2 text-xs text-neutral-500 leading-relaxed flex-1">
                  {spot.description}
                </p>

                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <Link
                    href={spot.href}
                    className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-900 hover:text-[#ca8a04] transition-colors"
                  >
                    <span>Explore Concern</span>
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
