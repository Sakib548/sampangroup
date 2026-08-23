import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  image: string;
  hook: string;
  description: string;
  status?: string;
};

export default function ResidentialProject({
  name,
  image,
  hook,
  description,
  status = "Upcoming",
}: Props) {
  return (
    <section className="bg-[#f7f8f5] px-6 py-16 text-[#183b2b] sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 flex items-center justify-between gap-6 border-y border-[#183b2b]/15 py-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ef636b]">
            Sampan residential portfolio
          </p>
          <span className="shrink-0 rounded-full bg-[#dcecff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#245b91]">
            {status}
          </span>
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#dfe8df]">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
          <div>
            <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
              {name}
            </h2>
            <p className="mt-6 text-2xl leading-tight text-[#a27812]">{hook}</p>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#183b2b]/70">
              {description}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex border border-[#183b2b] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-[#183b2b] hover:text-white"
            >
              Register your interest →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
