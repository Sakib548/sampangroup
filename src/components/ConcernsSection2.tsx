import Image from "next/image";
import Link from "next/link";

const divisions = [
  ["Real Estate & Land Investment", "Own land, not just visit it.", "/images/concerns/sampan-dev-ltd.png", "/our_divisions"],
  ["Hospitality, Resort & Highway Travel", "Stay, celebrate, and unwind — on the highway and beyond.", "/images/concerns/highway-inn.png", "/our_divisions/hospitality-highway-travel/sampan-highway-inn"],
  ["Golf Zone", "Bangladesh's first full golf destination, in the making.", "/images/concerns/4-sampan-go-lfresort.png", "/our_divisions/hospitality-highway-travel/sampan-agro-golf-resort"],
  ["Professional Education", "UK-recognized courses, taught close to home.", "/images/concerns/5-lshs.png", "/concerns#professional-education"],
  ["Agro & Fresh Produce", "From our farm to your table.", "/images/concerns/eco-agro.png", "/our_divisions/hospitality-highway-travel/sampan-eco-agro"],
  ["Retail Shop & Super Shop", "Everyday essentials, always nearby.", "/images/logos/mini-sampan.png", "/concerns#retail-shop-super-shops"],
  ["Manufacturing & Industrial", "Built by us, for what we build.", "/images/concerns/shbt.webp", "/concerns#manufacturing-industrial"],
  ["Automotive, Fuel & Mobility", "Everything that keeps you moving.", "/images/concerns/sampan-auto.png", "/concerns#automotive-fuel-mobility"],
  ["Defense & Security", "Licensed, regulated, trusted supply.", "/images/logos/Sampan_Fire_Arms.png", "/concerns#defense-security"],
];

export default function ConcernsSection2() {
  return <section className="bg-[#f7f8f5] px-6 py-20 text-[#183b2b] sm:px-10 lg:px-16 lg:py-28"><div className="mx-auto max-w-[1400px]"><div className="flex flex-col justify-between gap-6 border-b border-[#183b2b]/15 pb-8 sm:flex-row sm:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ef636b]">Our divisions</p><h2 className="mt-4 max-w-3xl text-[clamp(2.25rem,3.7vw,4rem)] font-semibold leading-tight tracking-tight">One group, nine directions.</h2></div><p className="max-w-sm text-sm leading-6 text-[#183b2b]/60 sm:text-right">Explore the sectors where Sampan creates places, products, and possibilities.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{divisions.map(([title, copy, logo, href]) => <article key={title} className="group relative min-h-[22rem] overflow-hidden bg-[#183b2b] text-white"><div className="absolute inset-0 bg-gradient-to-t from-[#071b13] via-[#183b2b]/60 to-[#183b2b]/10" /><div className="absolute inset-0 opacity-35 transition duration-700 group-hover:scale-105 group-hover:opacity-55"><Image src={logo} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-12" /></div><div className="relative z-10 flex min-h-[22rem] flex-col justify-end p-6 sm:p-7"><div className="mb-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/90 p-2"><Image src={logo} alt="" width={56} height={56} className="h-full w-full object-contain" /></div><h3 className="mt-10 max-w-[15ch] text-2xl font-medium leading-tight">{title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-white/70">{copy}</p><Link href={href} className="mt-6 inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#a8df73] transition group-hover:text-white">Explore <span className="transition-transform duration-300 group-hover:translate-x-2">→</span></Link></div></article>)}</div></div></section>;
}
