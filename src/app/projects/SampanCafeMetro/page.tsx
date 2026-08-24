const cafeHighlights = [
  {
    number: "01",
    title: "Freshly Crafted",
    copy: "Coffee and casual food thoughtfully prepared for every part of the day.",
  },
  {
    number: "02",
    title: "Made to Meet",
    copy: "A welcoming city space for quick stops, conversations, and time together.",
  },
  {
    number: "03",
    title: "City Rhythm",
    copy: "Contemporary convenience designed around people and life on the move.",
  },
] as const;

export default function SampanCafeMetroFeature() {
  return (
    <section className="relative left-1/2 isolate min-h-[70svh] w-[100dvw] max-w-none -translate-x-1/2 overflow-hidden bg-[#071b13] text-white lg:min-h-[720px]">
      {/* Background fallback */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(168,223,115,0.18),transparent_30%),linear-gradient(135deg,#071b13,#123c2b)]" />

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/cafe-metro.mp4" type="video/mp4" />
      </video>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071b13]/65 via-[#071b13]/10 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071b13]/95 via-[#071b13]/15 to-black/20" />

      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-[#a8df73]/10 blur-[120px]"
      />

      <div className="relative z-10 flex min-h-[70svh] w-full flex-col px-6 py-12 sm:px-10 sm:py-14 lg:min-h-[720px] lg:px-16 lg:py-16">
        {/* Top label */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-5">
          <div className="flex items-center gap-3 text-[0.64rem] font-bold uppercase tracking-[0.28em] text-[#a8df73]">
            <span className="h-px w-9 bg-current" />
            Coming soon
          </div>

          {/* <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/50">
            A new Sampan experience
          </p> */}
        </div>

        <div className="mt-auto pt-20">
          {/* Main content */}
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-white/55">
                Coffee · Food · City life
              </p>

              <h2 className="max-w-[10ch] text-[clamp(4rem,9vw,10rem)] font-medium leading-[0.78] tracking-[-0.075em]">
                Sampan
                <span className="mt-2 block text-[#a8df73]">Cafe Metro.</span>
              </h2>
            </div>

            <p className="max-w-[20rem] border-l-2 border-[#ef636b] pl-4 text-sm leading-6 text-white/65 sm:mb-2 sm:border-l-0 sm:border-r-2 sm:pl-0 sm:pr-4 sm:text-right">
              A new place to pause, meet, and move with the rhythm of the city.
            </p>
          </div>

          {/* Feature pillars */}
          <div className="mt-10 grid overflow-hidden border-y border-white/15 bg-[#071b13]/30 backdrop-blur-xl sm:grid-cols-3">
            {cafeHighlights.map((highlight) => (
              <article
                key={highlight.number}
                className="group relative border-b border-white/15 px-5 py-5 last:border-b-0 sm:min-h-[9.5rem] sm:border-b-0 sm:border-r sm:px-6 sm:py-6 sm:last:border-r-0"
              >
                {/* Hover accent */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#a8df73] transition-transform duration-500 group-hover:scale-x-100"
                />

                <div className="flex items-center gap-3">
                  <span className="font-mono text-[0.58rem] font-bold tracking-[0.16em] text-[#ef636b]">
                    {/* {highlight.number} */}
                  </span>
                  <span className="h-px w-7 bg-white/25" />
                </div>

                <h3 className="mt-4 text-xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-2xl">
                  {highlight.title}
                </h3>

                <p className="mt-2 max-w-sm text-xs leading-5 text-white/55 sm:text-sm sm:leading-6">
                  {highlight.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
