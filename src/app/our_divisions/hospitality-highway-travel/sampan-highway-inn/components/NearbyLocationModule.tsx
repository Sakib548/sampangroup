"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaCar, FaExternalLinkAlt, FaClock } from "react-icons/fa";

const nearbySpots = [
  {
    id: "agro-golf",
    name: "Sampan Agro & Golf Resort",
    type: "Resort & Eco-Living",
    distance: "12 km",
    driveTime: "14 min drive",
    image: "/images/featuredConcerns/sampan-agro-golf-resort.png",
    description: "Scenic 18-hole golf fairways, organic agro farming experiences, luxury cottage stays, and tranquil green landscapes.",
    link: "/our_divisions/hospitality-highway-travel/sampan-agro-golf-resort",
  },
  {
    id: "padma-riverfront",
    name: "Padma Bridge Riverfront & Promenade",
    type: "Tourism & Landmark",
    distance: "18 km",
    driveTime: "16 min drive",
    image: "/images/projects/express-highway-inn.jpg",
    description: "Iconic Padma river sunset views, riverboat excursions, fresh Hilsa fish dining, and riverside walking boulevards.",
    link: "https://www.google.com/maps/search/?api=1&query=Padma+Bridge+Riverfront",
    external: true,
  },
  {
    id: "white-house-motel",
    name: "Sampan White House & Motel",
    type: "Transit Hospitality",
    distance: "22 km",
    driveTime: "20 min drive",
    image: "/images/projects/Sampan-White-House-&-Motel.png",
    description: "A sister hospitality property offering quiet transit accommodation, flexible day-use rooms, and vehicle servicing.",
    link: "/our_divisions/hospitality-highway-travel/sampan-white-house",
  },
  {
    id: "historic-heritage",
    name: "Historic Heritage & Cultural Sites",
    type: "Heritage & Culture",
    distance: "48 km",
    driveTime: "42 min drive",
    image: "/images/concerns/highway-motel.png",
    description: "UNESCO World Heritage medieval architecture, ancient terracotta monuments, and peaceful historic spiritual shrines.",
    link: "https://www.google.com/maps/search/?api=1&query=Historic+Mosque+City+Bangladesh",
    external: true,
  },
];

export default function NearbyLocationModule() {
  return (
    <section id="nearby" className="bg-[#0b100d] py-24 sm:py-32 text-white border-t border-white/10 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-emerald-500" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-400">
                07 — Regional Surroundings
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Nearby attractions &amp; <br />
              <span className="text-emerald-400">Sampan destinations.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 leading-relaxed">
            Discover other high-value Sampan Group developments, natural riverfronts, and tourism landmarks in the immediate corridor vicinity.
          </p>
        </div>

        {/* Nearby Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nearbySpots.map((spot) => (
            <article
              key={spot.id}
              className="group flex flex-col rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1.5 shadow-lg"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <Image
                  src={spot.image}
                  alt={spot.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Distance Chip */}
                <div className="absolute top-3.5 right-3.5 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-[10px]" />
                  <span>{spot.distance}</span>
                </div>

                {/* Drive Time Chip */}
                <div className="absolute bottom-3.5 left-3.5 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-neutral-900 flex items-center gap-1">
                  <FaClock className="text-[9px] text-emerald-700" />
                  <span>{spot.driveTime}</span>
                </div>
              </div>

              {/* Body Content */}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1">
                  {spot.type}
                </span>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                  {spot.name}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed flex-1">
                  {spot.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10">
                  {spot.external ? (
                    <a
                      href={spot.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Explore Directions</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  ) : (
                    <Link
                      href={spot.link}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Discover Property</span>
                      <span>→</span>
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
