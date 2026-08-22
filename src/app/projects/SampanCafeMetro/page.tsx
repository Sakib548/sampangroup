export default function SampanCafeMetroFeature() {
  return (
    <section className="relative left-1/2 min-h-[70svh] w-[100dvw] max-w-none -translate-x-1/2 isolate overflow-hidden bg-[#071b13] text-white lg:min-h-[650px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(168,223,115,0.18),transparent_30%),linear-gradient(135deg,#071b13,#123c2b)]" />

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

      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071b13]/60 via-transparent to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071b13]/90 via-[#071b13]/10 to-black/15" />

      <div className="relative z-10 flex min-h-[70svh] w-full flex-col justify-between px-6 py-12 sm:px-10 sm:py-14 lg:min-h-[650px] lg:px-16 lg:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-5">
          <div className="flex items-center gap-3 text-[0.64rem] font-bold uppercase tracking-[0.28em] text-[#a8df73]">
            <span className="h-px w-9 bg-current" />
            Coming soon
          </div>
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/50">
            A new Sampan experience
          </p>
        </div>

        <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-white/55">
              Coffee · Food · City life
            </p>
            <h2 className="max-w-[10ch] text-[clamp(4rem,9vw,10rem)] font-medium leading-[0.78] tracking-[-0.075em]">
              Sampan
              <span className="mt-2 block text-[#a8df73]">Cafe Metro.</span>
            </h2>
          </div>

          <p className="max-w-[20rem] border-l border-[#ef636b] pl-4 text-sm leading-6 text-white/65 sm:mb-2 sm:border-l-0 sm:border-r sm:pl-0 sm:pr-4 sm:text-right">
            A new place to pause, meet, and move with the rhythm of the city.
          </p>
        </div>
      </div>
    </section>
  );
}
