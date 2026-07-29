import Navbar from "@/components/Navbar";
import ConcernCard from "@/components/ConcernCard";
import { concerns } from "@/data/concerns";

const categoryOrder = [
  "Hospitality & Leisure",
  "Automotive & Energy",
  "Retail & Consumer",
  "Development & Construction",
  "Agriculture",
  "Security",
  "Logistics",
];

export default function ConcernsPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-neutral-950">
      <Navbar />

      <section className="bg-neutral-950 px-6 pb-20 pt-40 text-white lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-300">
            Sampan Group
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-8xl">
            Our concerns
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
            Discover the businesses and ventures contributing to Sampan
            Group&apos;s growing presence across industries.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {categoryOrder.map((category) => {
          const categoryConcerns = concerns.filter(
            (concern) => concern.category === category,
          );

          if (categoryConcerns.length === 0) return null;

          return (
            <section key={category} className="mb-20 last:mb-0">
              <div className="mb-8 flex items-end justify-between gap-6 border-b border-neutral-300 pb-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-700">
                    Concern category
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                    {category}
                  </h2>
                </div>

                <span className="hidden text-sm text-neutral-500 sm:block">
                  {String(categoryConcerns.length).padStart(2, "0")} concerns
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {categoryConcerns.map((concern) => (
                  <ConcernCard key={concern.id} concern={concern} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
