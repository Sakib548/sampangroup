import Image from "next/image";
import Link from "next/link";

import {
  expressHighwayFeatures,
  expressHighwayStoryContent,
  getExpressHighwayStoryLayout,
} from "./express-highway-story-data";

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current stroke-[1.8] transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function ExpressHighwayStory() {
  const layout = getExpressHighwayStoryLayout();

  return (
    <section
      aria-labelledby="express-highway-title"
      className="relative left-1/2 isolate min-h-[100svh] w-[100dvw] max-w-none -translate-x-1/2 overflow-hidden bg-[#071b13] text-white"
    >
      <Image
        src="/images/projects/express-highway-inn.jpg"
        alt="Express Highway Inn"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#071b13]/20" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,19,0.68)_0%,rgba(7,27,19,0.10)_32%,rgba(7,27,19,0.38)_58%,rgba(7,27,19,0.96)_100%),linear-gradient(90deg,rgba(7,27,19,0.78)_0%,rgba(7,27,19,0.34)_45%,rgba(7,27,19,0.08)_78%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,.36)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.36)_1px,transparent_1px)] [background-size:72px_72px]"
      />

      <div className="relative z-10 flex min-h-[100svh] w-full flex-col px-5 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        <div
          className="mx-auto flex w-full flex-1 flex-col"
          style={{ maxWidth: `${layout.contentMaxWidth}px` }}
        >
          <div
            className={`${layout.contentFlowClass} max-w-3xl py-12 lg:py-10`}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-[#ef636b]" />
              <p
                className="text-[0.66rem] font-bold uppercase tracking-[0.24em]"
                style={{ color: layout.accentColor }}
              >
                {expressHighwayStoryContent.eyebrow}
              </p>
            </div>

            <h2
              id="express-highway-title"
              className="text-[clamp(3rem,5vw,5.75rem)]  font-medium leading-[0.8] tracking-[-0.07em] text-balance"
            >
              Express
              <span className="mt-2 block">Highway Inn.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              {expressHighwayStoryContent.description}
            </p>

            <Link
              href={expressHighwayStoryContent.href}
              className="group mt-9 inline-flex min-h-12 items-center gap-6 border border-[#00a174]/55 bg-[#00a174]/24 px-5 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl transition duration-300 hover:border-[#00a174]/80 hover:bg-[#00a174]/38"
            >
              {expressHighwayStoryContent.cta}
              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: layout.accentColor }}
              >
                <Arrow />
              </span>
            </Link>
          </div>

          <div
            className={`grid ${layout.mobileGridClass} border-l border-t border-white/16 bg-[#071b13]/42 backdrop-blur-xl ${layout.desktopGridClass}`}
            aria-label="Express Highway Inn facilities"
          >
            {expressHighwayFeatures.map((feature) => (
              <article
                key={feature.id}
                className="group relative min-h-[8.25rem] border-b border-r border-white/16 p-4 transition-colors duration-300 hover:bg-white/[0.055] sm:p-5 lg:min-h-[9rem]"
              >
                <span className="block h-1.5 w-1.5 bg-[#ef636b]/80 transition-transform duration-300 group-hover:scale-150" />

                <h3 className="mt-5 max-w-[16ch] text-[0.72rem] font-bold uppercase leading-5 tracking-[0.13em] text-white">
                  {feature.title}
                </h3>

                {feature.copy && (
                  <p className="mt-2 max-w-[23ch] text-xs leading-5 text-white/48">
                    {feature.copy}
                  </p>
                )}

                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#58b9eb] transition-transform duration-500 group-hover:scale-x-100"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}