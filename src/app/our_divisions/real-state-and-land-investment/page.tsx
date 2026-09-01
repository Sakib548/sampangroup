import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaBuilding, FaMapMarkerAlt, FaArrowRight, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Real Estate & Land Investment Archive | Sampan Group",
  description:
    "Explore Sampan Group's real estate portfolio, land-share developments, commercial towers, and residential communities across Dhaka and high-growth transit corridors.",
};

const projectsList = [
  {
    id: "sampan-development-ltd",
    name: "Sampan Development Ltd",
    category: "Division Flagship",
    status: "Active Division",
    statusType: "flagship",
    location: "Dhaka & Strategic Corridors",
    description: "Master architectural development, land acquisition, commercial hubs, and sustainable residential communities.",
    image: "/images/concerns/sampan-development-ltd.png",
    link: "/our_divisions/real-state-and-land-investment/sampan-development-ltd",
    highlights: ["Master Planning", "Land Acquisition", "Commercial & Residential"],
  },
  {
    id: "sampan-metro-square",
    name: "Sampan Metro Square",
    category: "Residential Land-Share",
    status: "Ongoing Project",
    statusType: "ongoing",
    location: "Ashulia, Dhaka (Near Metro)",
    description: "A 12-katha footprint, 14-storey land-share residential project designed for forward-thinking homeowners.",
    image: "/images/metro-square/tower-home.webp",
    link: "/our_divisions/real-state-and-land-investment/sampan-metro-square",
    highlights: ["1,300+ sq ft Units", "20 Mins to Uttara Metro", "Clear Land Title"],
  },
  {
    id: "sampan-cafe-metro",
    name: "Sampan Cafe Metro",
    category: "Auto & Hospitality Hybrid",
    status: "Ongoing Operation",
    statusType: "ongoing",
    location: "Expressway Transit Hub",
    description: "Integrated vehicle service, premium cafe dining, hydro car wash, and Sampan Auto inventory showroom.",
    image: "/images/concerns/sampan-auto.png",
    link: "/our_divisions/real-state-and-land-investment/sampan-cafe-metro",
    highlights: ["24/7 Hydro Car Wash", "Artisanal Coffee & Grill", "Auto Inventory Browser"],
  },
  {
    id: "sampan-residency-1-2",
    name: "Sampan Residency Tower 1 & 2",
    category: "Luxury Residential & Transit",
    status: "Ongoing Development",
    statusType: "ongoing",
    location: "Express Highway Inn Corridor",
    description: "Twin-tower luxury residential complex integrated with Express Highway Inn hospitality amenities.",
    image: "/images/projects/sampan-highway-inn.png",
    link: "/our_divisions/real-state-and-land-investment/sampan-residency-tower-1-2",
    highlights: ["Twin Residential Towers", "VVIP Suite Access", "Padma Expressway Corridor"],
  },
  {
    id: "sampan-trade-emporium",
    name: "Sampan Trade Emporium",
    category: "Commercial Trade Center",
    status: "Ongoing Project",
    statusType: "ongoing",
    location: "Commercial Hub Corridor",
    description: "Multi-storey commercial trade emporium featuring modern office spaces, retail outlets, and express highway connectivity.",
    image: "/images/projects/Sampan-White-House-&-Motel.png",
    link: "/our_divisions/real-state-and-land-investment/sampan-trade-emporium",
    highlights: ["Commercial Outlets", "Executive Office Suites", "Ample Parking"],
  },
  {
    id: "sampan-motalib-skyline",
    name: "Sampan Motalib Skyline",
    category: "High-Rise Residential",
    status: "Coming Soon",
    statusType: "coming-soon",
    location: "Central Dhaka Corridor",
    description: "Pre-launch luxury skyline apartment tower featuring panoramic urban views and smart automation.",
    image: "/images/projects/Sampan-White-House-&-Motel.png",
    link: "/our_divisions/real-state-and-land-investment/sampan-motalib-skyline",
    highlights: ["Pre-Launch Bookings", "Smart Automation", "Central Dhaka Location"],
  },
  {
    id: "sampan-nexus",
    name: "Sampan Nexus",
    category: "Mixed-Use Corridor Project",
    status: "Coming Soon",
    statusType: "coming-soon",
    location: "Mawna Industrial Green Belt",
    description: "Strategic mixed-use development integrating commercial spaces, retail zones, and residential apartments.",
    image: "/images/concerns/3-sampan-eco-agro.png",
    link: "/our_divisions/real-state-and-land-investment/sampan-nexus",
    highlights: ["Mawna Growth Hub", "Mixed-Use Zoning", "High ROI Land Shares"],
  },
  {
    id: "sampan-21st-century",
    name: "Sampan 21st Century",
    category: "Modern Housing Estate",
    status: "Upcoming Phase",
    statusType: "coming-soon",
    location: "Greater Dhaka Growth Zone",
    description: "Eco-centric master-planned housing community engineered for 21st-century modern living.",
    image: "/images/concerns/sampan-development-ltd.png",
    link: "/our_divisions/real-state-and-land-investment/sampan-21st-century",
    highlights: ["Master Planned Estate", "Eco-Centric Infrastructure", "Gated Security"],
  },
  {
    id: "sampan-taj",
    name: "Sampan Taj",
    category: "Boutique Residence",
    status: "Upcoming Project",
    statusType: "coming-soon",
    location: "Dhaka Residential Zone",
    description: "Boutique luxury residential apartments offering privacy, premium finishings, and dedicated parking.",
    image: "/images/concerns/sampan-development-ltd.png",
    link: "/our_divisions/real-state-and-land-investment/sampan-taj",
    highlights: ["Boutique Architecture", "Single Unit per Floor", "Prime Location"],
  },
  {
    id: "sampan-niketon",
    name: "Sampan Niketon",
    category: "Community Housing",
    status: "Upcoming Project",
    statusType: "coming-soon",
    location: "Niketon Vicinity",
    description: "Serene residential housing complex designed for multi-generational families with green courtyards.",
    image: "/images/concerns/sampan-development-ltd.png",
    link: "/our_divisions/real-state-and-land-investment/sampan-niketon",
    highlights: ["Family Community Living", "Courtyard Landscaping", "Secure Gated Compound"],
  },
];

export default function RealEstateArchivePage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased min-h-screen selection:bg-[#ca8a04] selection:text-neutral-950">
      
      {/* Archive Dark Hero Header for Navbar Readability */}
      <section className="relative pt-36 pb-24 border-b border-white/10 overflow-hidden bg-[#090d16] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 border border-[#ca8a04]/40 bg-[#ca8a04]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#ca8a04]">
              <FaBuilding className="text-xs" />
              <span>Real Estate &amp; Land Investment Division</span>
            </div>

            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white">
              Property &amp; Development <br />
              <span className="font-normal text-[#ca8a04]">Projects Archive</span>
            </h1>

            <p className="text-base text-white/80 leading-relaxed font-normal">
              Browse Sampan Group’s comprehensive real estate portfolio—spanning flagship development companies, ongoing residential &amp; commercial towers, land-share opportunities, and upcoming projects across Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section — DivisionsSection Background bg-[#f3f6f2] */}
      <section className="py-20 bg-[#f3f6f2] text-[#183b2b]">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsList.map((project) => (
              <div
                key={project.id}
                className="group border border-[#183b2b]/15 bg-white flex flex-col justify-between overflow-hidden hover:border-[#ca8a04] transition-all duration-500 shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-56 w-full overflow-hidden bg-neutral-200">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />

                    <span className="absolute top-4 left-4 bg-white/95 border border-[#ca8a04]/40 text-[#ca8a04] font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 backdrop-blur-md shadow-sm">
                      {project.category}
                    </span>

                    <span className={`absolute top-4 right-4 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border backdrop-blur-md shadow-sm ${
                      project.statusType === "flagship"
                        ? "bg-blue-500/10 text-blue-700 border-blue-500/30"
                        : project.statusType === "ongoing"
                        ? "bg-emerald-500/10 text-emerald-700 border-emerald-500/30"
                        : "bg-amber-500/10 text-amber-700 border-amber-500/30"
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono opacity-75">
                      <FaMapMarkerAlt className="text-[#ca8a04]" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#183b2b] group-hover:text-[#ca8a04] transition-colors leading-snug">
                      {project.name}
                    </h3>

                    <p className="text-xs opacity-80 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    <div className="pt-2 border-t border-[#183b2b]/10 space-y-1.5">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs opacity-90">
                          <FaCheckCircle className="text-[#ca8a04] text-[10px] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={project.link}
                    className="w-full inline-flex items-center justify-between bg-[#183b2b] hover:bg-[#ca8a04] text-white hover:text-neutral-950 border border-[#183b2b] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-sm"
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
