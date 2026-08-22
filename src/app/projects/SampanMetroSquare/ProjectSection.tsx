import SampanMetroSquarePage from "./page";
export default function SampanMetroSquare() {
  return (
    <section>
      <div className="mb-8 flex items-center justify-between gap-6 border-y border-[#183b2b]/15 py-8">
        <h3 className="text-4xl font-semibold tracking-[-0.04em] text-[#183b2b] sm:text-5xl">
          Sampan Metro Square
        </h3>
        <span className="shrink-0 rounded-full bg-amber-100 text-amber-800 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] ">
          Ongoing
        </span>
      </div>
      <SampanMetroSquarePage />
    </section>
  );
}
