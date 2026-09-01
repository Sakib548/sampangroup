import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaIndustry, FaMapMarkerAlt, FaArrowRight, FaCheckCircle, FaCogs, FaClock } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Manufacturing & Industrial Division Archive | Sampan Group",
  description:
    "Explore Sampan Group's Manufacturing & Industrial division, featuring Sampan Industrial Park, eco-friendly hollow bricks & tiles manufacturing, and automated PET bottle & beverage bottling units.",
};

const manufacturingConcerns = [
  {
    id: "sampan-industrial-park",
    name: "Sampan Industrial Park",
    category: "Master Manufacturing Hub",
    status: "Coming Soon — Land Leasing",
    statusType: "coming-soon",
    location: "Mawna Industrial Zone Corridor",
    description: "State-of-the-art master-planned industrial park equipped with dedicated high-voltage power substations, central ETP, 60ft freight roads, and resident manufacturing plants.",
    image: "/images/brand/industrialpark.png",
    link: "/our_divisions/manufacturing-industrial/sampan-industrial-park",
    accentColor: "#047857",
    highlights: ["Master Utility Infrastructure", "Resident Industrial Anchor Units", "Plot Leasing & Substation Access"],
  },
  {
    id: "sampan-hollow-bricks-tiles",
    name: "Sampan Hollow Bricks & Tiles",
    category: "Eco Building Materials",
    status: "Active Manufacturing Unit",
    statusType: "active",
    location: "Sampan Industrial Park, Mawna",
    description: "Automated eco-friendly hollow concrete block, paving brick, and ceramic tile production line supplying major infrastructure and real estate projects.",
    image: "/images/brand/sampanhollowbricksandtiles.png",
    link: "/our_divisions/manufacturing-industrial/sampan-hollow-bricks-tiles",
    accentColor: "#991b1b",
    highlights: ["50,000 Units/Day Output", "BSTI & ISO 9001 Certified", "Eco-Friendly Green Building Approved"],
  },
  {
    id: "sampan-pet-beverage",
    name: "Sampan Pet & Beverage",
    category: "Packaging & Beverage Bottling",
    status: "Active Manufacturing Unit",
    statusType: "active",
    location: "Sampan Industrial Park, Mawna",
    description: "High-speed automated PET bottle preform injection molding, purified mineral water bottling, and carbonated beverage packaging plant.",
    image: "/images/brand/petandbeverage.png",
    link: "/our_divisions/manufacturing-industrial/sampan-pet-beverage",
    accentColor: "#ea580c",
    highlights: ["100,000 Bottles/Day Capacity", "ISO 22000 Food Safety Certified", "Food Grade Virgin PET Resin"],
  },
];

export default function ManufacturingIndustrialArchivePage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased min-h-screen selection:bg-[#047857] selection:text-white">
      
      {/* Archive Dark Hero Header */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 border-b border-white/10 overflow-hidden bg-[#090d16] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 border border-[#047857]/40 bg-[#047857]/15 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#00a651]">
              <FaIndustry className="text-xs" />
              <span>Manufacturing &amp; Industrial Division</span>
            </div>

            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white">
              Industrial Hubs &amp; <br />
              <span className="font-normal text-[#00a651]">Automated Manufacturing</span>
            </h1>

            <p className="text-base text-white/80 leading-relaxed font-normal">
              Explore Sampan Group’s manufacturing backbone—featuring our master industrial park, eco-friendly hollow bricks &amp; tiles plant, and automated PET bottle &amp; beverage packaging units.
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
          
          <div className="grid md:grid-cols-3 gap-8">
            {manufacturingConcerns.map((concern) => (
              <div
                key={concern.id}
                className="group border border-[#183b2b]/15 bg-white flex flex-col justify-between overflow-hidden hover:border-[#047857] transition-all duration-500 shadow-sm hover:shadow-md"
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
                      <FaCogs className="text-[9px]" />
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
