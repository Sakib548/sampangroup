"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const leaders = [
  {
    role: "Managing Director & CEO",
    name: "Md. Emamul Hasan",
    image: "/images/leadership/Md._EMAMUL_HASAN.png",
    summary:
      "A diversified business leader with experience across real estate, trade, amusement, agriculture, and automotive ventures.",
    highlights: [
      "Founded leadership since 2007",
      "Former BRAC Bank executive",
      "BARVIDA and BADIA leadership",
    ],
    bio: `A seasoned professional with a rich tapestry of experience spanning various industries and sectors. With a distinguished track record as Managing Director across a spectrum of companies under the SAMPAN umbrella, including real estate, trade, amusement, agriculture, and more, MD Emamul Hasan brings a wealth of expertise to any role he undertakes.

His journey isn’t just limited to business ventures; he has also made significant contributions to organizational leadership and industry associations. As a former Organizing Secretary of the Bangladesh Reconditioned Vehicles Importer & Dealer Association (BARVIDA) and Joint Secretary of the Bangladesh Arm’s Dealer & Importer Association (BADIA), he has demonstrated his commitment to fostering collaboration and advancement within the business community.

Furthermore, his involvement in various clubs and associations, such as Modhumoti Club Ltd. and the Bangladesh PABX Association, underscores his dedication to community engagement and networking.

Noteworthy is his tenure as an Ex-Banker at BRAC Bank Ltd., where he garnered accolades for outstanding sales performance. His achievements, including being awarded the Sales Performance 1st Award from BRAC Bank Ltd. in 2005 and the Sales Performance High Flyer Bonanza Campaign Award from Standard Chartered Bank in 2009, attest to his exceptional prowess in driving results and exceeding expectations.`,
  },
  {
    role: "Executive Director",
    name: "Major Md. Zahidul Islam (Retd)",
    image: "/images/leadership/Major_Md._Zahidul_Islam_(Retd).png",
    summary:
      "A project-management professional bringing three decades of military, infrastructure, and organizational leadership experience.",
    highlights: [
      "30 years in Bangladesh Army",
      "Padma Bridge and Dhaka Expressway projects",
      "United Nations experience",
    ],
    bio: "Major Md. Zahidul Islam has contributed to major national projects including the Padma Multipurpose Bridge, Meghna-Gumti Bridge rehabilitation, Dhaka Elevated Expressway, Hatirjheel, and Dhanmondi Lake projects. He also served with the United Nations and Border Guard Bangladesh.",
  },
  {
    role: "Academic Manager",
    name: "Md. Muhammad Hoque",
    image: "/images/leadership/MD._MUHAMMAD_HOQUE.png",
    summary:
      "An education and business-management professional connecting higher education, professional development, and international practice.",
    highlights: [
      "MBA, University of East London",
      "Teaching Fellow at Arden University",
      "FHEA and CIM professional member",
    ],
    bio: "Md. Muhammad Hoque has taught and managed academic initiatives in the United Kingdom, including work with Arden University and Canterbury Christ Church University. His academic and professional memberships reflect a long-term commitment to education and business excellence.",
  },
];

export default function LeadershipSection() {
  const [selectedLeader, setSelectedLeader] = useState<
    (typeof leaders)[number] | null
  >(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedLeader(null);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section className="border-y border-white/10 bg-[#111] px-8 py-16 sm:px-12 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
            Leadership
          </p>
          <h2 className="mt-4 text-[clamp(2.25rem,3.7vw,3.75rem)] font-semibold tracking-tight">
            The people behind the progress.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/65 sm:text-lg">
            Experienced leaders guide SAMPAN Group with a shared focus on
            responsible growth, innovation, and lasting value.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="overflow-hidden border border-white/10 bg-[#080808]"
            >
              <div className="relative aspect-[0.9] overflow-hidden bg-[#211d1a]">
                <Image
                  src={leader.image}
                  alt={`${leader.name}, ${leader.role}`}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover object-top transition duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
                  {leader.role}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {leader.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/65">
                  {leader.summary}
                </p>
                <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.08em] text-emerald-300/80">
                  {leader.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setSelectedLeader(leader)}
                  className="mt-5 border-t border-white/10 pt-4 text-sm font-medium text-white transition hover:text-emerald-300"
                >
                  Read full profile <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedLeader && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-6 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="leader-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedLeader(null);
          }}
        >
          <div className="max-h-[85vh] w-full max-w-2xl overflow-y-auto border border-white/15 bg-[#111] p-7 shadow-2xl sm:p-10">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
                  {selectedLeader.role}
                </p>
                <h2
                  id="leader-modal-title"
                  className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  {selectedLeader.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLeader(null)}
                className="grid h-10 w-10 shrink-0 place-items-center border border-white/20 text-xl text-white/70 transition hover:border-white hover:text-white"
                aria-label="Close profile"
              >
                ×
              </button>
            </div>
            <p className="mt-8 text-base leading-8 text-white/70 sm:text-lg">
              {selectedLeader.bio}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
