import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaCar, FaGasPump, FaMapMarkerAlt, FaArrowRight, FaCheckCircle, FaBolt, FaTruck, FaClock } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Automotive, Fuel & Mobility Division Archive | Sampan Group",
  description:
    "Explore Sampan Group's Automotive, Fuel & Mobility division, featuring Sampan Auto, 24/7 petrol & octane filling station, Auto LPG station, EV fast charging, and emergency highway towing services.",
};

const mobilityConcerns = [
  {
    id: "sampan-auto",
    name: "Sampan Auto",
    category: "Japanese Vehicles & Parts",
    status: "Active Showroom",
    statusType: "active",
    location: "Expressway Transit Corridor Hub",
    description: "Importers of Japanese recondition vehicles, luxury SUVs, sedans, and genuine Toyota/Nissan spare parts.",
    image: "/images/brand/sampanauto.png",
    link: "/our_divisions/automotive-fuel-mobility/sampan-auto",
    accentColor: "#4c2a85",
    highlights: ["Auction Grade 4.5+ Selection", "Genuine Japanese Spare Parts", "Japan Auction Pre-Order Desk"],
  },
  {
    id: "sampan-filling-station",
    name: "Sampan Filling Station",
    category: "24/7 Fuel & Lubricants",
    status: "24/7 Active Station",
    statusType: "24-7",
    location: "Expressway Highway Inn Hub",
    description: "24/7 high-dispensing octane 95, diesel, Mobil lubricants, and hydro vehicle wash station beside Highway Inn.",
    image: "/images/brand/sampanfillingstation.png",
    link: "/our_divisions/automotive-fuel-mobility/sampan-filling-station",
    accentColor: "#dc2626",
    highlights: ["100% Calibrated Fuel Pumps", "24/7 Continuous Operation", "Mobil Lubricants Service Bay"],
  },
  {
    id: "sampan-lpg-filling-station",
    name: "Sampan LPG Filling Station",
    category: "Auto LPG & Gas Refill",
    status: "24/7 Active Station",
    statusType: "24-7",
    location: "Expressway Transit Corridor",
    description: "High-pressure Auto LPG dispensing station and commercial cylinder refilling facility for eco-friendly transit.",
    image: "/images/brand/lpg.png",
    link: "/our_divisions/automotive-fuel-mobility/sampan-lpg-filling-station",
    accentColor: "#eab308",
    highlights: ["High-Pressure Auto LPG Nozzles", "Certified Pressure Testing", "24/7 Highway Transit Stop"],
  },
  {
    id: "sampan-ev-car-charging-station",
    name: "Sampan EV Car Charging Station",
    category: "Ultra-Fast EV Charging",
    status: "Coming Soon",
    statusType: "coming-soon",
    location: "Expressway Highway Hub",
    description: "Ultra-fast 120kW DC fast charging station and Type 2 AC chargers for electric vehicles traveling the highway.",
    image: "/images/brand/evc.png",
    link: "/our_divisions/automotive-fuel-mobility/sampan-ev-car-charging-station",
    accentColor: "#10b981",
    highlights: ["120kW DC Ultra-Fast Charger", "Dual Gun CCS2 & Type 2 Connectors", "Plug Reservation App Support"],
  },
  {
    id: "sampan-towing-service",
    name: "Sampan Towing Service",
    category: "24/7 Highway Recovery",
    status: "Coming Soon",
    statusType: "coming-soon",
    location: "Highway Patrol Corridor",
    description: "24/7 emergency flatbed towing and heavy vehicle recovery service covering the expressway and surrounding highways.",
    image: "/images/brand/sampanauto.png",
    link: "/our_divisions/automotive-fuel-mobility/sampan-towing-service",
    accentColor: "#1d4ed8",
    highlights: ["24/7 Hydraulic Flatbed Trucks", "Rapid Highway Response Hotline", "Damage-Free Wheel Lift Recovery"],
  },
];

export default function AutomotiveFuelMobilityArchivePage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased min-h-screen selection:bg-[#dc2626] selection:text-white">
      
      {/* Archive Dark Hero Header */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 border-b border-white/10 overflow-hidden bg-[#090d16] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 border border-[#dc2626]/40 bg-[#dc2626]/15 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#ef636b]">
              <FaGasPump className="text-xs" />
              <span>Automotive, Fuel &amp; Mobility Division</span>
            </div>

            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white">
              Highway Transit, Fuel <br />
              <span className="font-normal text-[#ef636b]">&amp; Vehicle Services</span>
            </h1>

            <p className="text-base text-white/80 leading-relaxed font-normal">
              Explore Sampan Group’s automotive &amp; mobility network—spanning Japanese car imports, 24/7 fuel stations, Auto LPG, ultra-fast EV charging, and 24/7 emergency highway towing.
            </p>
          </div>
        </div>
      </section>

      {/* Concerns Grid Section with Signature Ambient Radial Overlay */}
      <section className="py-20 bg-[#f3f6f2] text-[#183b2b] relative overflow-hidden">
        
        {/* Signature DivisionsSection Ambient Radial Mesh */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(0,161,116,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(239,99,107,0.07),transparent_23%)]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobilityConcerns.map((concern) => (
              <div
                key={concern.id}
                className="group border border-[#183b2b]/15 bg-white flex flex-col justify-between overflow-hidden hover:border-[#dc2626] transition-all duration-500 shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Brand Logo Header Box */}
                  <div className="relative h-60 w-full overflow-hidden bg-neutral-900 flex items-center justify-center p-8">
                    <div className="relative h-36 w-36">
                      <Image
                        src={concern.image}
                        alt={concern.name}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    <span className="absolute top-4 left-4 bg-white/95 border border-[#183b2b]/20 font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 text-neutral-900 shadow-sm">
                      {concern.category}
                    </span>

                    <span className={`absolute top-4 right-4 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border backdrop-blur-md flex items-center gap-1 ${
                      concern.statusType === "coming-soon"
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                        : "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                    }`}>
                      <FaClock className="text-[9px]" />
                      <span>{concern.status}</span>
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono opacity-75">
                      <FaMapMarkerAlt style={{ color: concern.accentColor }} />
                      <span>{concern.location}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#183b2b] transition-colors leading-snug">
                      {concern.name}
                    </h3>

                    <p className="text-xs opacity-80 leading-relaxed font-normal">
                      {concern.description}
                    </p>

                    <div className="pt-2 border-t border-[#183b2b]/10 space-y-2">
                      {concern.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs opacity-90">
                          <FaCheckCircle className="text-emerald-700 text-[10px] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={concern.link}
                    className="w-full inline-flex items-center justify-between text-white border px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-sm hover:opacity-90"
                    style={{ backgroundColor: concern.accentColor, borderColor: concern.accentColor }}
                  >
                    <span>Explore Concern</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
