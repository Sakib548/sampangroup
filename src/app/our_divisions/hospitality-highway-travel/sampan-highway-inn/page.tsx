import Image from "next/image";
import Link from "next/link";
import { highwayInnFacilities } from "@/data/highwayInnFacility";

const heroImage = "/images/projects/sampan-highway-inn.png";
const galleryImages = [
  heroImage,
  ...highwayInnFacilities.map((facility) => facility.image),
];

export const metadata = {
  title: "Sampan Highway Inn | Sampan Group",
  description:
    "A comfortable stopover for rooms, dining, celebrations, and official outings on the Dhaka–Khulna Highway.",
};

export default function SampanHighwayInnPage() {
  return (
    <main className="bg-[#080808] text-white">
      <section className="relative flex min-h-[78vh] items-end overflow-hidden px-8 pb-16 pt-32 sm:px-12 lg:px-20 lg:pb-24">
        <Image
          src={heroImage}
          alt="Sampan Highway Inn"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-300">
            Hospitality & Highway Travel
          </p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.35rem,4.8vw,4.75rem)] font-semibold leading-[0.98] tracking-tight">
            Sampan Highway Inn
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
            Your perfect stopover on the Dhaka–Khulna Highway—comfortable rooms,
            delicious meals, and peaceful surroundings for every journey.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+8801929918408"
              className="inline-flex items-center bg-emerald-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition hover:bg-emerald-600"
            >
              Call to reserve
            </a>
            <a
              href="https://www.google.com/maps/place/Sampan+Highway+Inn+Restaurant+%26+Party+Centre/@23.2604651,89.7659791"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center border border-white/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition hover:bg-white hover:text-black"
            >
              View location
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#E8EFE9] px-8 py-16 text-[#253247] sm:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">
              Your perfect stopover
            </p>
            <h2 className="mt-5 text-[clamp(2rem,3.3vw,3.5rem)] font-semibold leading-tight tracking-tight">
              Rest, refresh, and continue your journey.
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              Take a break from the road and unwind in comfort at Sampan Highway
              Inn. Our welcoming destination is designed for travelers who need
              a peaceful place to refresh, dine, meet, or celebrate.
            </p>
            <p>
              Whether you are traveling with family, planning an official outing,
              or arranging a party, our team is ready to make your stop simple
              and memorable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8f5] px-8 py-16 text-[#253247] sm:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                What we offer
              </p>
              <h2 className="mt-4 text-[clamp(2rem,3.3vw,3.5rem)] font-semibold tracking-tight">
                Everything you need, all in one place.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-500">
              Comfortable spaces and thoughtful service for work, celebration,
              and rest.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {highwayInnFacilities.map((facility) => (
              <article key={facility.id} className="group overflow-hidden border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[1.2] overflow-hidden">
                  <Image src={facility.image} alt={facility.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">0{facility.id}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">{facility.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{facility.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#123b2c] px-8 py-16 sm:px-12 lg:px-20 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1200px] gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-200">Planning an event?</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Make your celebration memorable.</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/70">From birthdays and reunions to corporate gatherings, our flexible spaces and attentive service are ready for your next event.</p>
          </div>
          <div className="flex items-center md:justify-end">
            <a href="tel:+8801929918408" className="inline-flex border border-white/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition hover:bg-white hover:text-[#123b2c]">Reserve a party</a>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8f5] px-8 py-16 text-[#253247] sm:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Gallery</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">A place to pause.</h2>
            </div>
            <Link href="/contact" className="hidden text-sm font-semibold uppercase tracking-[0.14em] text-red-600 hover:text-red-700 sm:block">Contact us →</Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div key={`${image}-${index}`} className={`relative aspect-square overflow-hidden ${index === 0 ? "col-span-2 row-span-2" : ""}`}>
                <Image src={image} alt={`Sampan Highway Inn gallery ${index + 1}`} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
