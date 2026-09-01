"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaCar, FaClock, FaCompass, FaExternalLinkAlt } from "react-icons/fa";

interface NearbySpot {
  id: string;
  name: string;
  category: string;
  distance: string;
  driveTime: string;
  description: string;
  image: string;
  link?: string;
}

const nearbySpots: NearbySpot[] = [
  {
    id: "sampan-highway-inn",
    name: "Sampan Highway Inn (KM 74)",
    category: "Sister Hospitality Hub",
    distance: "6.5 km",
    driveTime: "7 mins drive",
    description: "VVIP suites, 24/7 dining hall, and 120kW EV supercharging station directly on the main highway.",
    image: "/images/projects/sampan-highway-inn.png",
    link: "/our_divisions/hospitality-highway-travel/sampan-highway-inn",
  },
  {
    id: "sampan-white-house",
    name: "Sampan Highway Hotel (White Hall)",
    category: "Banquet & Motel Hub",
    distance: "12 km",
    driveTime: "12 mins drive",
    description: "Iconic White Hall grand ballroom, quiet soundproof motel rooms, and 24/7 garden dining.",
    image: "/images/projects/Sampan-White-House-&-Motel.png",
    link: "/our_divisions/hospitality-highway-travel/sampan-white-house",
  },
  {
    id: "padma-bridge-view",
    name: "Padma Bridge Toll Plaza & Viewpoint",
    category: "National Landmark",
    distance: "18 km",
    driveTime: "20 mins drive",
    description: "Panoramics of Bangladesh's iconic Padma Bridge, river cruise piers, and sunset promenade.",
    image: "/images/concerns/eco-agro.png",
  },
  {
    id: "arial-beel",
    name: "Arial Beel Wetland Reserve",
    category: "Nature Sanctuary",
    distance: "14 km",
    driveTime: "16 mins drive",
    description: "Vast natural wetland reserve famous for seasonal winter pumpkin harvests and bird watching.",
    image: "/images/our_divisions/eco_agro/seasonal.jpg",
  },
];

export default function NearbyLocationModule() {
  return (
    <section id="nearby" className="py-24 bg-[#eaf2e5] text-[#173326] relative border-b border-[#173326]/15">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#2f6b45]/30 bg-[#2f6b45]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#2f6b45] mb-4">
              <FaCompass className="text-xs" />
              <span>07 • Nearby Attractions &amp; Assets</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#173326]">
              Nearby at <span className="font-semibold text-[#2f6b45]">This Highway Location</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#173326]/75 leading-relaxed font-normal">
            Easily combine your stay at Sampan Eco &amp; Agro with adjacent highway attractions, sister luxury hotels, and natural wetlands.
          </p>
        </div>

        {/* Nearby Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nearbySpots.map((spot) => (
            <div
              key={spot.id}
              className="group border border-[#173326]/20 bg-white flex flex-col justify-between overflow-hidden hover:border-[#2f6b45] transition-all duration-500 shadow-sm"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-neutral-200">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  
                  <span className="absolute top-4 left-4 bg-white/95 border border-[#2f6b45]/30 text-[#2f6b45] font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 backdrop-blur-md shadow-sm">
                    {spot.category}
                  </span>

                  <div className="absolute bottom-3 right-3 bg-black/80 px-2.5 py-1 font-mono text-[11px] text-white flex items-center gap-1.5 backdrop-blur-md">
                    <FaClock className="text-[#b9e583] text-[10px]" />
                    <span>{spot.driveTime}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#2f6b45] font-bold mb-2">
                    <FaMapMarkerAlt />
                    <span>{spot.distance} from Resort</span>
                  </div>

                  <h3 className="text-base font-bold text-[#173326] group-hover:text-[#2f6b45] transition-colors leading-snug">
                    {spot.name}
                  </h3>

                  <p className="text-xs text-[#173326]/75 mt-3 leading-relaxed font-normal">
                    {spot.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                {spot.link ? (
                  <Link
                    href={spot.link}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2f6b45] hover:text-[#173326] transition-colors"
                  >
                    <span>View Division Details</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </Link>
                ) : (
                  <span className="text-xs font-mono text-[#173326]/40 uppercase tracking-wider">
                    Local Attraction
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
