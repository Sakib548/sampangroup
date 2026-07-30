"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { concerns } from "@/data/concerns";

const footerLinks = [
  { label: "About us", href: "/about" },
  { label: "Concerns", href: "/concerns" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const selectedConcernIds = [
  "sampan-auto",
  "sampan-highway-inn",
  "sampan-development-ltd",
  "sampan-eco-agro",
  "sampan-highway-motel",
  "sampan-sweets-box",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;

    // Connect this form to your API when the backend is ready.
    setSubmitted(true);
    setEmail("");
  }

  const selectedConcerns = selectedConcernIds
    .map((id) => concerns.find((concern) => concern.id === id))
    .filter((concern) => concern !== undefined);

  return (
    <footer className="bg-[#172536] text-white">
      <section className="border-b border-white/10 px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-300">
              Stay connected
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Stories, progress, and news from Sampan.
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-xl border border-white/20 bg-white/[0.06] p-1 focus-within:border-emerald-300/70"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setSubmitted(false);
              }}
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/40"
            />
            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="bg-emerald-700 px-5 text-sm font-semibold transition hover:bg-emerald-600"
            >
              Subscribe <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>

        {submitted && (
          <p className="mx-auto mt-4 max-w-7xl text-sm text-emerald-300">
            Thanks—your subscription request has been received.
          </p>
        )}
      </section>

      <section className="px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.7fr_1fr_1fr] lg:gap-16">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/60 text-sm font-semibold text-emerald-300">
                S
              </span>
              <span className="text-lg font-semibold tracking-[0.2em]">
                SAMPAN
              </span>
            </Link>

            <p className="mt-7 max-w-xs text-sm leading-7 text-white/55">
              A diversified group building opportunities across industries,
              communities, and generations.
            </p>

            <p className="mt-8 text-sm font-medium text-emerald-300">
              The village will be the city.
            </p>

            <div className="mt-8 flex gap-3">
              {["f", "in", "yt"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={`${social} social profile`}
                  className="flex h-10 min-w-10 items-center justify-center border border-white/20 px-3 text-xs font-semibold uppercase text-white/70 transition hover:border-emerald-300 hover:text-emerald-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <FooterHeading>Explore</FooterHeading>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/55 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <FooterHeading>Featured concerns</FooterHeading>
            <nav className="space-y-3">
              {selectedConcerns.slice(0, 3).map((concern) => (
                <Link
                  key={concern.id}
                  href={`/concerns#${concern.id}`}
                  className="block text-sm text-white/55 transition hover:text-white"
                >
                  {concern.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <FooterHeading>More from Sampan</FooterHeading>
            <nav className="space-y-3">
              {selectedConcerns.slice(3).map((concern) => (
                <Link
                  key={concern.id}
                  href={`/concerns#${concern.id}`}
                  className="block text-sm text-white/55 transition hover:text-white"
                >
                  {concern.name}
                </Link>
              ))}
              <Link
                href="/concerns"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition hover:gap-3"
              >
                View all concerns <span aria-hidden="true">→</span>
              </Link>
            </nav>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sampan Group. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-white">
      {children}
    </h2>
  );
}
