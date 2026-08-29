"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiX, FiArrowRight, FiMapPin, FiPlus, FiMinus } from "react-icons/fi";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

type Location = {
  id: string;
  name: string;
  category: string;
  location: string;
  description: string;
  lat: number;
  lng: number;
};

const locations: Location[] = [
  {
    id: "highway-inn",
    name: "Sampan Highway Inn",
    category: "Hospitality",
    location: "Dhaka–Khulna Highway",
    description:
      "A premium hospitality destination strategically positioned along the Dhaka–Khulna Highway.",
    lat: 23.0,
    lng: 90.0,
  },
  {
    id: "metro-square",
    name: "Sampan Metro Square",
    category: "Real Estate",
    location: "Ashulia, Dhaka",
    description:
      "A modern land-share development designed for commercial and residential opportunities.",
    lat: 23.9,
    lng: 90.4,
  },
  {
    id: "motalib-skyline",
    name: "Sampan Motalib Skyline",
    category: "Real Estate",
    location: "Dhaka",
    description:
      "A contemporary mixed-use development combining residential and commercial spaces.",
    lat: 23.75,
    lng: 90.39,
  },
  {
    id: "nexus",
    name: "Sampan Nexus",
    category: "Residential",
    location: "Mawna",
    description:
      "A thoughtfully planned residential development focused on modern living.",
    lat: 24.06,
    lng: 90.43,
  },
  {
    id: "residency",
    name: "Sampan Residency Tower",
    category: "Hospitality",
    location: "Express Highway",
    description:
      "Premium hospitality towers designed for travellers and long-term guests.",
    lat: 23.81,
    lng: 90.41,
  },
  {
    id: "agro-golf",
    name: "Sampan Agro & Golf Resort",
    category: "Lifestyle",
    location: "Moulvibazar",
    description:
      "An integrated lifestyle destination bringing together golf, leisure and agro-based experiences.",
    lat: 24.48,
    lng: 91.78,
  },
  {
    id: "industrial-park",
    name: "Sampan Industrial Park",
    category: "Industry",
    location: "Chattogram",
    description:
      "A strategic manufacturing and industrial ecosystem built for long-term growth.",
    lat: 22.3,
    lng: 91.8,
  },
  {
    id: "floating-pearl",
    name: "Sampan Floating Pearl",
    category: "Maritime",
    location: "Khulna",
    description:
      "A distinctive maritime investment concept connecting business with the waterways of Bangladesh.",
    lat: 22.8,
    lng: 89.55,
  },
];

// Helper to create custom HTML pins for Leaflet
const createPinIcon = (isActive: boolean) => {
  return L.divIcon({
    className: "custom-leaflet-pin",
    html: `
      <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px;">
        ${
          isActive
            ? `<span style="position: absolute; width: 32px; height: 32px; border-radius: 50%; border: 1.5px solid #059669; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></span>
               <span style="position: absolute; width: 44px; height: 44px; border-radius: 50%; background: rgba(5, 150, 105, 0.1);"></span>`
            : ""
        }
        <span style="
          position: relative; 
          width: ${isActive ? "12px" : "8px"}; 
          height: ${isActive ? "12px" : "8px"}; 
          background: ${isActive ? "#059669" : "#1f2937"}; 
          border-radius: 50%; 
          border: 2px solid white; 
          box-shadow: 0 2px 8px rgba(0,0,0,0.3); 
          transition: all 0.3s ease;
        "></span>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
};

// Component to handle map re-centering when location changes
function MapController({
  activeLocation,
}: {
  activeLocation: Location | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (activeLocation) {
      map.flyTo([activeLocation.lat, activeLocation.lng], 8, {
        duration: 1.5,
      });
    }
  }, [activeLocation, map]);

  return null;
}

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function LocationMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLocation, setActiveLocation] = useState<Location | null>(
    locations[0],
  );

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".map-header > *", ".map-stage", ".map-list-item"], {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".map-header > *",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".map-header",
              start: "top 85%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".map-stage",
          { scale: 0.98, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".map-stage",
              start: "top 85%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".map-list-item",
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".map-list",
              start: "top 85%",
              once: true,
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Subtle Architectural Dot Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #000 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-[5vw]">
        {/* ====== SECTION HEADER ====== */}
        <div className="map-header mb-16 max-w-3xl lg:mb-20">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-emerald-600" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.4em] text-neutral-500">
              04 / Our Reach
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Growing across
            <br />
            <span className="text-neutral-300">Bangladesh.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-[1.8] text-neutral-500 lg:text-lg">
            From hospitality and real estate to industrial and lifestyle
            ventures, explore the locations where Sampan Group is building
            opportunities for tomorrow.
          </p>
        </div>

        {/* ====== MAP STAGE (VIEWPORT) ====== */}
        <div className="map-stage relative h-[70vh] w-full overflow-hidden border border-neutral-200 bg-neutral-50 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)] lg:h-[80vh]">
          {/* Leaflet Map Container */}
          <MapContainer
            center={[23.685, 90.3563]} // Center of Bangladesh
            zoom={7}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "100%", zIndex: 1 }}
            attributionControl={true}
          >
            {/* Using Esri Light Gray Canvas - NO API KEY REQUIRED, perfectly minimal */}
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
            />

            {locations.map((location) => (
              <Marker
                key={location.id}
                position={[location.lat, location.lng]}
                icon={createPinIcon(activeLocation?.id === location.id)}
                eventHandlers={{
                  click: () => setActiveLocation(location),
                }}
              />
            ))}

            <MapController activeLocation={activeLocation} />
          </MapContainer>

          {/* Architectural Viewport Overlays */}
          <div className="pointer-events-none absolute inset-0 z-[500]">
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between border-b border-neutral-200/50 bg-white/70 px-6 py-4 backdrop-blur-md">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
                MAP VIEWPORT // BANGLADESH
              </span>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
                <strong className="text-emerald-600">{locations.length}</strong>{" "}
                ACTIVE SITES
              </span>
            </div>

            {/* Corner Brackets */}
            <span className="absolute top-16 left-6 h-6 w-6 border-l-2 border-t-2 border-neutral-900/20" />
            <span className="absolute top-16 right-6 h-6 w-6 border-r-2 border-t-2 border-neutral-900/20" />
            <span className="absolute bottom-6 left-6 h-6 w-6 border-l-2 border-b-2 border-neutral-900/20" />
            <span className="absolute bottom-6 right-6 h-6 w-6 border-r-2 border-b-2 border-neutral-900/20" />
          </div>

          {/* Active Location Information Panel (Left Side Overlay) */}
          {activeLocation && (
            <div
              key={activeLocation.id}
              className="absolute left-6 top-20 bottom-6 z-[1000] flex w-[calc(100%-3rem)] max-w-sm flex-col border border-neutral-200/50 bg-white/95 p-8 backdrop-blur-xl animate-[slideUp_0.5s_ease-out] lg:left-12 lg:top-24 lg:bottom-12 lg:w-[400px] lg:p-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLocation(null)}
                className="absolute right-6 top-6 text-neutral-400 transition-colors hover:text-neutral-900"
                aria-label="Close details"
              >
                <FiX size={20} />
              </button>

              {/* Content */}
              <div className="flex h-full flex-col">
                {/* Top Section: Category & Location */}
                <div>
                  <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-600">
                    {activeLocation.category}
                  </p>
                  <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[0.95] tracking-tight text-neutral-950">
                    {activeLocation.name}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
                    <FiMapPin className="h-4 w-4 text-emerald-500" />
                    {activeLocation.location}
                  </div>
                </div>

                {/* Middle Section: Description */}
                <div className="my-8 border-y border-neutral-200 py-6">
                  <p className="text-sm leading-7 text-neutral-600">
                    {activeLocation.description}
                  </p>
                </div>

                {/* Bottom Section: CTA */}
                <div className="mt-auto">
                  <Link
                    href={`/businesses/${activeLocation.id}`}
                    className="group/cta flex items-center justify-between border border-neutral-300 bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-50"
                  >
                    View Full Details
                    <FiArrowRight className="h-4 w-4 transition-transform duration-500 group-hover/cta:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ============================================================ */}
        {/* MOBILE / ACCESSIBILITY LIST                                  */}
        {/* ============================================================ */}
        <div className="map-list mt-16 lg:hidden">
          <p className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Directory // Explore all locations
          </p>
          <div className="flex flex-col border-t border-neutral-200">
            {locations.map((location, i) => {
              const isActive = activeLocation?.id === location.id;
              return (
                <button
                  key={location.id}
                  type="button"
                  onClick={() => setActiveLocation(location)}
                  className={`map-list-item group flex items-center gap-6 border-b border-neutral-200 py-5 text-left transition-colors duration-300 ${
                    isActive ? "bg-neutral-50" : "hover:bg-neutral-50"
                  }`}
                >
                  <span
                    className={`font-mono text-xs tracking-widest transition-colors duration-300 ${
                      isActive
                        ? "text-emerald-600"
                        : "text-neutral-400 group-hover:text-neutral-800"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={`text-base font-semibold tracking-tight transition-colors duration-300 ${
                        isActive
                          ? "text-neutral-900"
                          : "text-neutral-600 group-hover:text-neutral-900"
                      }`}
                    >
                      {location.name}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-400">
                      {location.location}
                    </p>
                  </div>
                  <FiMapPin
                    className={`h-5 w-5 transition-colors duration-300 ${
                      isActive
                        ? "text-emerald-600"
                        : "text-neutral-300 group-hover:text-neutral-500"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
