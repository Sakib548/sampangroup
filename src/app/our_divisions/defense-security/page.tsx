import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaShieldAlt, FaMapMarkerAlt, FaArrowRight, FaCheckCircle, FaLock, FaBalanceScale } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Defense & Security Division Archive | Sampan Group",
  description:
    "Explore Sampan Group's Defense & Security division portfolio, featuring government licensed firearms importers, ammunition suppliers, and security logistics concerns in Bangladesh.",
};

const defenseConcerns = [
  {
    id: "sampan-fire-arms-co",
    name: "Sampan Fire Arms Co.",
    category: "Firearms & Defense Supply",
    status: "Government Enlisted Importer",
    statusType: "licensed",
    location: "Dhaka Armory Corridor, Bangladesh",
    description: "Premier government-licensed defense contractor and firearms importer supplying civilian personal protection, sports shooting, and law enforcement equipment.",
    image: "/images/brand/firearmsco.png",
    link: "/our_divisions/defense-security/sampan-fire-arms-co",
    accentColor: "#b91c1c",
    highlights: ["Ministry of Home Affairs License", "Sporting & Defense Firearms", "Biometric Armory Ledger"],
  },
  {
    id: "nagar-arms-ammunition",
    name: "Nagar Arms & Ammunition",
    category: "Defense Ammunition & Armory",
    status: "Authorized Defense Dealer",
    statusType: "licensed",
    location: "Nagar Armory Hub, Bangladesh",
    description: "Historic government-certified armory dealer specializing in precision hunting rifles, target shotguns, military-grade ammunition, and security gear.",
    image: "/images/brand/nagararmsand.png",
    link: "/our_divisions/defense-security/nagar-arms-ammunition",
    accentColor: "#7c2d12",
    highlights: ["Government Enlisted Armory #1878", "Precision Shotguns & Cartridges", "Certified Repair & Testing"],
  },
];

export default function DefenseSecurityArchivePage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased min-h-screen selection:bg-[#b91c1c] selection:text-white">
      
      {/* Archive Dark Hero Header */}
      <section className="relative pt-36 pb-24 border-b border-white/10 overflow-hidden bg-[#090d16] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 border border-[#b91c1c]/40 bg-[#b91c1c]/15 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#ef636b]">
              <FaShieldAlt className="text-xs" />
              <span>Defense &amp; Security Division</span>
            </div>

            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white">
              Government Licensed <br />
              <span className="font-normal text-[#ef636b]">Defense &amp; Firearms Concerns</span>
            </h1>

            <p className="text-base text-white/80 leading-relaxed font-normal">
              Sampan Group’s Defense &amp; Security division represents Bangladesh’s trusted government-enlisted defense contractors and arms dealers. Operating under strict Ministry of Home Affairs compliance and the Arms Act 1878.
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
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {defenseConcerns.map((concern) => (
              <div
                key={concern.id}
                className="group border border-[#183b2b]/15 bg-white flex flex-col justify-between overflow-hidden hover:border-[#b91c1c] transition-all duration-500 shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Brand Logo Header Box */}
                  <div className="relative h-64 w-full overflow-hidden bg-neutral-900 flex items-center justify-center p-8">
                    <div className="relative h-40 w-40">
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

                    <span className="absolute top-4 right-4 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1">
                      <FaLock className="text-[9px]" />
                      <span>{concern.status}</span>
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 space-y-4">
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

                <div className="p-8 pt-0">
                  <Link
                    href={concern.link}
                    className="w-full inline-flex items-center justify-between text-white border px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-sm hover:opacity-90"
                    style={{ backgroundColor: concern.accentColor, borderColor: concern.accentColor }}
                  >
                    <span>View Licensed Concern</span>
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
