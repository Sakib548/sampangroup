import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      id="contact-cta"
      className="relative isolate overflow-hidden bg-emerald-800 px-6 py-24 text-white lg:px-10 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-24 h-[30rem] w-[30rem] rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100">
            Let&apos;s build what comes next
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Have a vision for tomorrow?
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Whether you are looking to work with Sampan, explore a concern, or
            start a conversation, our team is ready to hear from you.
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-between gap-8 bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-900 transition-colors hover:bg-neutral-950 hover:text-white"
          >
            Contact Sampan
            <span
              aria-hidden="true"
              className="text-lg transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>

          <Link
            href="/concerns"
            className="group inline-flex items-center justify-between gap-8 border border-white/50 px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Explore concerns
            <span
              aria-hidden="true"
              className="text-lg transition-transform duration-300 group-hover:translate-x-1"
            >
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
