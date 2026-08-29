"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const hero = "/images/projects/sampan-highway-inn.png";
const facilities = [
  {
    name: "Rest",
    copy: "Pause, recharge and continue refreshed.",
    image: hero,
  },
  {
    name: "Dine",
    copy: "A reason to make the stop delicious.",
    image: "/images/facilities/highway_inn/all_day_comfort.png",
  },
  {
    name: "Meet",
    copy: "Bring people together beyond the boardroom.",
    image: "/images/facilities/highway_inn/party_reservation.png",
  },
  {
    name: "Celebrate",
    copy: "Make the occasion worth remembering.",
    image: "/images/facilities/highway_inn/party_reservation.png",
  },
];

export default function HighwayInnExperiencePage() {
  const [active, setActive] = useState(0);
  return (
    <main className="highway-inn-page bg-[#f5f1e8] text-[#123b2c]">
      <style>{` .highway-inn-page [class*="bg-[#101512]"], .highway-inn-page [class*="bg-[#17251f]"] { background-color:#123b2c !important; } .highway-inn-page [class*="text-[#17251f]"], .highway-inn-page [class*="text-[#102a3a]"] { color:#123b2c !important; } .highway-inn-page [class*="text-[#9c6a2c]"], .highway-inn-page [class*="text-amber-300"] { color:#f5c451 !important; } .highway-inn-page [class*="bg-[#9c6a2c]"], .highway-inn-page [class*="bg-amber-300"] { background-color:#f5c451 !important; } .highway-inn-page [class*="border-[#9c6a2c]"], .highway-inn-page [class*="border-amber-300"] { border-color:#f5c451 !important; } .highway-inn-page section:nth-of-type(2) [class*="text-[#9c6a2c]"], .highway-inn-page section:nth-of-type(2) [class*="text-amber-300"], .highway-inn-page section:nth-of-type(4) [class*="text-[#9c6a2c]"], .highway-inn-page section:nth-of-type(4) [class*="text-amber-300"], .highway-inn-page section:nth-of-type(6) [class*="text-[#9c6a2c]"], .highway-inn-page section:nth-of-type(6) [class*="text-amber-300"] { color:#2f7d4a !important; } .highway-inn-page section:nth-of-type(2) [class*="border-[#9c6a2c]"], .highway-inn-page section:nth-of-type(4) [class*="border-[#9c6a2c]"], .highway-inn-page section:nth-of-type(6) [class*="border-[#9c6a2c]"] { border-color:#2f7d4a !important; } .highway-inn-page section:first-of-type > div.absolute { background:linear-gradient(90deg,rgba(0,0,0,.78) 0%,rgba(0,0,0,.48) 42%,rgba(0,0,0,.08) 78%,transparent 100%),linear-gradient(0deg,rgba(0,0,0,.65),transparent 62%) !important; } .highway-inn-page section:first-of-type h1 { font-size:clamp(3.4rem,6vw,6.5rem) !important; text-shadow:0 3px 18px rgba(0,0,0,.45); } .highway-inn-page section:first-of-type > div > p:first-child { font-size:.95rem !important; font-weight:600; text-shadow:0 2px 10px rgba(0,0,0,.65); } `}</style>
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#101512] text-white">
        <Image
          src={hero}
          alt="Sampan Highway Inn at night"
          fill
          priority
          className="object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101512] via-black/20 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <p className="text-xs uppercase tracking-[0.34em] text-amber-300">
            Sampan Highway Inn
          </p>
          <h1 className="mt-6 max-w-4xl text-6xl font-light leading-[0.9] tracking-[-0.06em] sm:text-8xl">
            Your journey
            <br />
            deserves a <span className="text-amber-300">pause.</span>
          </h1>
          <p className="mt-8 text-lg text-white/75">
            Stay. Dine. Meet. Celebrate.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#stay"
              className="bg-amber-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#17251f]"
            >
              Book a stay
            </Link>
            <Link
              href="#dining"
              className="border border-white/60 px-6 py-3 text-xs uppercase tracking-[0.18em]"
            >
              Reserve a table
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f1e8] py-24 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-[0.32em] text-[#9c6a2c]">
            01 - The experience
          </p>
          <div className="mt-8 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <h2 className="text-4xl font-medium leading-tight sm:text-6xl">
              Not just somewhere you stop.
              <br />
              <span className="text-[#9c6a2c]">
                Somewhere you want to stay.
              </span>
            </h2>
            <div className="relative h-[28rem] overflow-hidden">
              <Image
                src={facilities[active].image}
                alt={facilities[active].name}
                fill
                className="object-cover transition duration-700"
              />
            </div>
          </div>
          <div className="mt-12 grid border-t border-black/15 sm:grid-cols-4">
            {facilities.map((item, i) => (
              <button
                key={item.name}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`border-b border-black/15 py-6 text-left transition sm:border-r sm:px-6 sm:last:border-r-0 ${active === i ? "text-[#9c6a2c]" : "text-black/45 hover:text-black"}`}
              >
                <span className="text-xs">0{i + 1}</span>
                <h3 className="mt-8 text-2xl">{item.name}</h3>
                <p className="mt-2 max-w-[12rem] text-sm leading-6 text-black/55">
                  {item.copy}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#17251f] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-[0.32em] text-amber-300">
            02 - The road to us
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-light sm:text-6xl">
            The perfect break between destinations.
          </h2>
          <div className="mt-16 flex flex-col gap-5 border-y border-white/20 py-8 text-sm uppercase tracking-[0.2em] text-white/65 md:flex-row md:items-center md:justify-between">
            <span>Dhaka</span>
            <span className="text-amber-300">→ journey →</span>
            <strong className="text-white">Sampan Highway Inn</strong>
            <span className="text-amber-300">→</span>
            <span>Khulna</span>
          </div>
          <p className="mt-8 max-w-xl text-white/60">
            Verified directions, parking information and travel distances will
            be added here.
          </p>
        </div>
      </section>
      <section id="dining" className="bg-[#dfe8d8] py-24 lg:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24 lg:px-12">
          <div className="relative h-[36rem] overflow-hidden">
            <Image
              src={facilities[1].image}
              alt="Sampan Highway Inn dining"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#9c6a2c]">
              03 - Dining
            </p>
            <h2 className="mt-5 text-5xl font-light leading-none sm:text-7xl">
              Worth stopping for.
            </h2>
            <p className="mt-7 max-w-md text-lg leading-8 text-black/60">
              A warm table, familiar flavours and a better way to break the
              journey.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 border-y border-black/15 py-5 text-sm">
              <span>Breakfast</span>
              <span>Lunch</span>
              <span>Dinner</span>
              <span>Coffee &amp; refreshments</span>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex border border-[#17251f] px-6 py-3 text-xs uppercase tracking-[0.18em]"
            >
              View menu ↗
            </Link>
          </div>
        </div>
      </section>
      <section id="stay" className="bg-[#101512] py-24 text-white lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-amber-300">
                04 - Comfort
              </p>
              <h2 className="mt-5 text-5xl font-light sm:text-7xl">
                Pause. Recharge.
                <br />
                Continue.
              </h2>
            </div>
            <p className="max-w-sm text-white/60">
              Comfortable spaces designed for a better break on the road.
              Verified room details will be added here.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <div className="relative h-[28rem] overflow-hidden md:col-span-2">
              <Image
                src={hero}
                alt="Sampan Highway Inn stay"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-between border border-white/15 p-7">
              <p className="text-sm text-amber-300">Room essentials</p>
              <div className="space-y-4 text-white/70">
                <p>Comfortable bed</p>
                <p>Air conditioning</p>
                <p>Wi-Fi</p>
                <p>Room service</p>
              </div>
              <Link
                href="/contact"
                className="border border-amber-300 px-5 py-3 text-center text-xs uppercase tracking-[0.18em] text-amber-300"
              >
                Explore rooms
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f1e8] py-24 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-[0.32em] text-[#9c6a2c]">
            05 - Events
          </p>
          <div className="mt-6 grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <h2 className="text-4xl font-medium sm:text-6xl">
              Your occasion.
              <br />
              <span className="text-[#9c6a2c]">Your space.</span>
            </h2>
            <div>
              <p className="max-w-xl text-lg leading-8 text-black/60">
                Birthdays, corporate outings, reunions and private celebrations
                can be shaped around your occasion.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4 border-y border-black/15 py-6 text-sm sm:grid-cols-4">
                <span>Birthdays</span>
                <span>Corporate events</span>
                <span>Family gatherings</span>
                <span>Private celebrations</span>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex bg-[#9c6a2c] px-6 py-3 text-xs uppercase tracking-[0.18em] text-white"
              >
                Plan your event ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#101512] text-white">
        <Image
          src={hero}
          alt="Sampan Highway Inn"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101512] to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <p className="text-xs uppercase tracking-[0.32em] text-amber-300">
            06 - Make the stop worth it
          </p>
          <h2 className="mt-6 max-w-3xl text-6xl font-light leading-[0.9] sm:text-8xl">
            Stay.
            <br />
            Dine.
            <br />
            <span className="text-amber-300">Celebrate.</span>
          </h2>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#stay"
              className="border border-white/60 px-6 py-3 text-xs uppercase tracking-[0.18em]"
            >
              Stay
            </Link>
            <Link
              href="#dining"
              className="border border-white/60 px-6 py-3 text-xs uppercase tracking-[0.18em]"
            >
              Dine
            </Link>
            <Link
              href="/contact"
              className="bg-amber-300 px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#17251f]"
            >
              Get directions ↗
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f1e8] py-24 lg:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24 lg:px-12">
          <div className="relative h-[32rem] overflow-hidden">
            <Image
              src="/images/facilities/highway_inn/Official-Outing.png"
              alt="Official outing at Sampan Highway Inn"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#9c6a2c]">
              03 - Business &amp; official outings
            </p>
            <h2 className="mt-5 text-5xl font-light leading-none sm:text-7xl">
              Meet.
              <br />
              Think.
              <br />
              <span className="text-[#9c6a2c]">Connect.</span>
            </h2>
            <p className="mt-7 max-w-md text-lg leading-8 text-black/60">
              Sampan Highway Inn is an ideal setting for official outings,
              professional meetings and productive team gatherings.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex border border-[#17251f] px-6 py-3 text-xs uppercase tracking-[0.18em]"
            >
              Explore business events ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
