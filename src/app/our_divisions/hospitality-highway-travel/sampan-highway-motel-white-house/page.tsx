import Image from "next/image";
import { HighwayMotelModern } from "@/components/HospitalityDistinctPages";

const heroImage = "/images/projects/Sampan-White-House-&-Motel.png";

const packages = [
  {
    name: "Hourly Reservation",
    price: "৳1,500",
    description: "Perfect for short breaks or travelers needing a quick rest.",
    features: ["Free Wi-Fi access", "1–2 hour stay", "Secure parking", "Air-conditioned room", "Restaurant access"],
  },
  {
    name: "Half-Day Reservation",
    price: "৳4,000",
    description: "Ideal for business travelers or family stopovers.",
    features: ["6–8 hour stay", "Complimentary Wi-Fi", "Family lounge access", "Safe vehicle parking", "In-room dining"],
  },
  {
    name: "Full-Day Reservation",
    price: "৳7,000",
    description: "Best for overnight stays or extended travel.",
    features: ["24-hour room access", "High-speed Wi-Fi", "24/7 front desk", "Restaurant meals", "Travel assistance"],
  },
];

const facilities = [
  ["Comfortable rooms", "Clean, cozy, air-conditioned rooms designed for restful stays."],
  ["Secure parking", "Spacious parking with an alert security team."],
  ["Wi-Fi access", "Free internet access to keep you connected during your journey."],
  ["Travel assistance", "Helpful guidance for routes, local attractions, and onward travel."],
  ["24/7 reception", "Round-the-clock front desk support for every guest."],
  ["On-site restaurant", "Fresh meals and quick bites for travelers on the move."],
  ["Family-friendly lounge", "A relaxed space for families to rest and spend time together."],
  ["Hygienic restrooms", "Well-maintained facilities for in-house and passing travelers."],
];

export const metadata = {
  title: "Sampan Highway Motel & White House | Sampan Group",
  description: "Comfortable and convenient lodging along key travel routes.",
};

function LegacySampanHighwayMotelPage() {
  return (
    <main className="bg-[#f7f8f5] text-[#253247]">
      <section className="relative flex min-h-screen items-end overflow-hidden px-8 pb-16 pt-32 text-white sm:px-12 lg:px-20 lg:pb-24">
        <Image src={heroImage} alt="Sampan Highway Motel and White House" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-300">Hospitality & Highway Travel</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.25rem,4.4vw,4.5rem)] font-semibold leading-[0.98] tracking-tight">Sampan Highway Motel & White House</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">Comfortable and convenient lodging along key travel routes.</p>
          <a href="tel:+8801929918408" className="mt-8 inline-flex bg-emerald-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition hover:bg-emerald-600">Book a room</a>
        </div>
      </section>

      <section className="px-8 py-16 sm:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">A better stop on the road</p>
            <h2 className="mt-5 text-[clamp(2rem,3.4vw,3.5rem)] font-semibold leading-tight tracking-tight">Rest easy before you continue.</h2>
          </div>
          <p className="text-base leading-8 text-slate-600 sm:text-lg">Sampan Highway Motel & White House offers a practical, comfortable break for travelers. Choose a short rest, a half-day stay, or a full-day reservation with dining, Wi-Fi, secure parking, and helpful service close at hand.</p>
        </div>
      </section>

      <section className="bg-[#E8EFE9] px-8 py-16 sm:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">Stay your way</p>
          <h2 className="mt-4 text-[clamp(2rem,3.4vw,3.5rem)] font-semibold tracking-tight">Choose your reservation.</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {packages.map((item) => (
              <article key={item.name} className="flex flex-col border border-emerald-900/15 bg-white p-7 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">{item.name}</p>
                <p className="mt-5 text-4xl font-semibold text-[#123b2c]">{item.price}</p>
                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">{item.description}</p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-slate-200 pt-6 text-sm text-slate-600">{item.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
                <a href="tel:+8801929918408" className="mt-7 inline-flex justify-center bg-[#123b2c] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-emerald-800">Book now</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 sm:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Discover</p>
          <h2 className="mt-4 text-[clamp(2rem,3.4vw,3.5rem)] font-semibold tracking-tight">Facilities for a comfortable journey.</h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map(([title, description]) => (
              <article key={title} className="bg-white p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#123b2c] px-8 py-16 text-white sm:px-12 lg:px-20 lg:py-20">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-between gap-8 md:flex-row md:items-center">
          <div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-200">Ready to rest?</p><h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Make your next stop comfortable.</h2></div>
          <a href="tel:+8801929918408" className="inline-flex self-start border border-white/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition hover:bg-white hover:text-[#123b2c] md:self-auto">Call +880 1929-918408</a>
        </div>
      </section>
    </main>
  );
}

export default HighwayMotelModern;
