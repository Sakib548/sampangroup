import Image from "next/image";
import { AgroGolfModern } from "@/components/HospitalityDistinctPages";

const heroImage = "/images/featuredConcerns/sampan-agro-golf-resort.png";
const gallery = [
  heroImage,
  "/images/concerns/4-sampan-go-lfresort.png",
  "/images/concerns/3-sampan-eco-agro.png",
  "/images/facilities/highway_inn/all_day_comfort.png",
];

const amenities = [
  [
    "Golf course",
    "Enjoy the game of green across peaceful fairways and open landscapes.",
  ],
  [
    "Agro experience",
    "Discover fresh vegetables, fruits, flowers, fish, and cattle from our sustainable farm.",
  ],
  [
    "Luxury restaurant",
    "Relax over quality meals and refreshing drinks in a calm natural setting.",
  ],
  [
    "VVIP lounge",
    "A comfortable premium space for private gatherings and unhurried conversations.",
  ],
  [
    "Billiards & card room",
    "Play, relax, and compete with friends and family indoors.",
  ],
  [
    "Pool & recreation",
    "Unwind in refreshing water and spacious outdoor surroundings.",
  ],
  [
    "EV charging",
    "Convenient charging facilities for guests traveling by electric vehicle.",
  ],
  [
    "Automatic car wash",
    "Keep your vehicle refreshed before continuing your journey.",
  ],
];

export const metadata = {
  title: "Sampan Agro & Golf Resort | Sampan Group",
  description:
    "A serene destination where nature, comfort, and recreation come together.",
};

function LegacySampanAgroGolfResortPage() {
  return (
    <main className="bg-[#f7f5ec] text-[#253247]">
      <section className="relative flex min-h-screen items-end overflow-hidden px-8 pb-16 pt-32 text-white sm:px-12 lg:px-20 lg:pb-24">
        <Image
          src={heroImage}
          alt="Sampan Agro and Golf Resort"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-200">
            Hospitality, Leisure & Agro
          </p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.95] tracking-tight">
            Sampan Agro & Golf Resort
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Where nature, comfort, and recreation come together.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#experiences"
              className="inline-flex bg-emerald-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition hover:bg-emerald-600"
            >
              Explore the resort
            </a>
            <a
              href="mailto:info@sampangroup.com.bd"
              className="inline-flex border border-white/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition hover:bg-white hover:text-black"
            >
              Make an enquiry
            </a>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 sm:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Where nature meets luxury
            </p>
            <h2 className="mt-5 text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-tight tracking-tight">
              A green escape rooted in sustainable living.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              Sampan Agro & Golf Resort is a serene destination where lush
              landscapes, modern leisure, and agro-living create a refreshing
              escape from the city.
            </p>
            <p>
              Enjoy golf across scenic fairways, relax in comfortable spaces,
              share a meal with family, or explore a more sustainable way of
              living close to nature.
            </p>
          </div>
        </div>
      </section>

      <section
        id="experiences"
        className="bg-[#e4eee2] px-8 py-16 sm:px-12 lg:px-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">
            Resort experiences
          </p>
          <h2 className="mt-4 max-w-3xl text-[clamp(2.2rem,4vw,4rem)] font-semibold tracking-tight">
            Relax, play, and reconnect.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map(([title, description]) => (
              <article
                key={title}
                className="border border-emerald-900/15 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#123b2c]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#123b2c] px-8 py-16 text-white sm:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-200">
              Agro & sustainability
            </p>
            <h2 className="mt-4 text-[clamp(2.2rem,4vw,4rem)] font-semibold tracking-tight">
              A resort connected to the land.
            </h2>
          </div>
          <p className="text-base leading-8 text-white/70 sm:text-lg">
            Our agro experience brings guests closer to chemical-free farming,
            fresh produce, and the natural rhythms of rural life. It is a place
            to slow down, learn, and enjoy the landscape.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 sm:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                Resort gallery
              </p>
              <h2 className="mt-4 text-[clamp(2rem,3.4vw,3.5rem)] font-semibold tracking-tight">
                Moments in the green.
              </h2>
            </div>
            <a
              href="mailto:info@sampangroup.com.bd"
              className="hidden text-sm font-semibold uppercase tracking-[0.14em] text-red-600 hover:text-red-700 sm:block"
            >
              Plan a visit →
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className={`relative aspect-square overflow-hidden ${index === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <Image
                  src={image}
                  alt={`Resort gallery ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-emerald-900/10 bg-white px-8 py-16 sm:px-12 lg:px-20 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1200px] gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">
              Plan your escape
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Make room for nature.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
              Contact the Sampan team to learn more about the resort,
              facilities, visits, and future opportunities.
            </p>
          </div>
          <a
            href="mailto:info@sampangroup.com.bd"
            className="inline-flex bg-[#123b2c] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-emerald-800"
          >
            Contact the resort
          </a>
        </div>
      </section>
    </main>
  );
}

export default AgroGolfModern;
