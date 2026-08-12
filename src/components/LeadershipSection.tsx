"use client";

import { useState } from "react";
import Image from "next/image";

const leaders = [
  { role: "Managing Director & CEO", name: "Md. Emamul Hasan", image: "/images/leadership/Md._EMAMUL_HASAN.png", summary: "A diversified business leader with experience across real estate, trade, amusement, agriculture, and automotive ventures.", highlights: ["Founded leadership since 2007", "Former BRAC Bank executive", "BARVIDA and BADIA leadership"], bio: `A seasoned professional with a rich tapestry of experience spanning various industries and sectors. With a distinguished track record as Managing Director across companies under the SAMPAN umbrella, MD Emamul Hasan brings a wealth of expertise to every role he undertakes.\n\nHis journey includes business leadership, industry associations, and community engagement. His achievements in banking and sales performance further demonstrate his exceptional ability to drive results.` },
  { role: "Executive Director", name: "Major Md. Zahidul Islam (Retd)", image: "/images/leadership/Major_Md._Zahidul_Islam_(Retd).png", summary: "A project-management professional bringing three decades of military, infrastructure, and organizational leadership experience.", highlights: ["30 years in Bangladesh Army", "Padma Bridge and Dhaka Expressway projects", "United Nations experience"], bio: "Major Md. Zahidul Islam has contributed to major national projects including the Padma Multipurpose Bridge, Meghna-Gumti Bridge rehabilitation, Dhaka Elevated Expressway, Hatirjheel, and Dhanmondi Lake projects. He also served with the United Nations and Border Guard Bangladesh." },
  { role: "Academic Manager", name: "Md. Muhammad Hoque", image: "/images/leadership/MD._MUHAMMAD_HOQUE.png", summary: "An education and business-management professional connecting higher education, professional development, and international practice.", highlights: ["MBA, University of East London", "Teaching Fellow at Arden University", "FHEA and CIM professional member"], bio: "Md. Muhammad Hoque has taught and managed academic initiatives in the United Kingdom, including work with Arden University and Canterbury Christ Church University. His academic and professional memberships reflect a long-term commitment to education and business excellence." },
];

export default function LeadershipSection() {
  const [expandedLeaders, setExpandedLeaders] = useState<Set<string>>(
    () => new Set(),
  );

  const toggleLeader = (name: string) => {
    setExpandedLeaders((current) => {
      const next = new Set(current);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  return (
    <section className="border-y border-white/10 bg-[#111] px-8 py-16 sm:px-12 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Leadership</p>
          <h2 className="mt-4 text-[clamp(2.25rem,3.7vw,3.75rem)] font-semibold tracking-tight">The people behind the progress.</h2>
          <p className="mt-5 text-base leading-7 text-white/65 sm:text-lg">Experienced leaders guide SAMPAN Group with a shared focus on responsible growth, innovation, and lasting value.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {leaders.map((leader) => {
            const expanded = expandedLeaders.has(leader.name);
            return (
              <article key={leader.name} className="overflow-hidden border border-white/10 bg-[#080808]">
                <div className="relative aspect-[0.9] overflow-hidden bg-[#211d1a]"><Image src={leader.image} alt={`${leader.name}, ${leader.role}`} fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-cover object-top transition duration-700 hover:scale-105" /></div>
                <div className="p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">{leader.role}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">{leader.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/65">{leader.summary}</p>
                  <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.08em] text-emerald-300/80">{leader.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                  <button type="button" onClick={() => toggleLeader(leader.name)} aria-expanded={expanded} className="mt-5 border-t border-white/10 pt-4 text-sm font-medium text-white transition hover:text-emerald-300">
                    {expanded ? "Read less" : "Read more"} <span aria-hidden="true" className={`inline-block transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>↓</span>
                  </button>
                  <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${expanded ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="min-h-0 overflow-hidden border-t border-white/10 pt-5"><p className="whitespace-pre-line text-sm leading-7 text-white/70">{leader.bio}</p></div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
