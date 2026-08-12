"use client";

import { FormEvent } from "react";
import { FaClock, FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa6";

const contactItems = [
  {
    title: "Email us",
    value: "info@sampangroup.com.bd",
    href: "mailto:info@sampangroup.com.bd",
    icon: FaEnvelope,
  },
  {
    title: "Call us",
    value: "+880 1929918400–11",
    href: "tel:+8801929918400",
    icon: FaPhone,
  },
  {
    title: "Visit us",
    value:
      "Sampan 21st Century, House-284, Block-B Road-1/A, Bashundhara, Dhaka-1229, Bangladesh.",
    icon: FaLocationArrow,
  },
  {
    title: "Office hours",
    value: "10:00 AM–06:00 PM",
    icon: FaClock,
  },
];

const locationContacts = [
  {
    name: "Express Highway Inn",
    type: "Hospitality & facilities",
    address: "Dhaka–Chattogram Highway, Bangladesh",
    phone: "+880 1700 000 001",
    email: "expressinn@example.com",
  },
  {
    name: "Sampan Highway Inn",
    type: "Hospitality & travel stop",
    address: "Sampan Highway Inn Road, Bangladesh",
    phone: "+880 1700 000 002",
    email: "highwayinn@example.com",
  },
];

export default function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="bg-[#f7f8f5] text-[#253247]">
      <section className="relative overflow-hidden px-8 pb-16 pt-32 text-white sm:px-12 lg:px-20 lg:pb-24 lg:pt-40">
        <img
          src="/images/sampan-4.png"
          alt="Sampan Group office"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#071b16]/75" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Sampan Group
          </p>
          <h1 className="mt-5 text-[clamp(2.75rem,5vw,5rem)] font-semibold leading-none tracking-tight">
            Contact us
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-base leading-7 text-white/80 sm:text-lg">
            At <strong className="text-[#253247]">SAMPAN Group</strong>, we
            value every opportunity to connect, collaborate, and grow together.
            Whether you have a question, a business inquiry, or seek to partner
            with us, our team is ready to assist you.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-base leading-7 text-white/75 sm:text-lg">
            Feel free to reach out through the following channels. We look
            forward to hearing from you.
          </p>
        </div>
        <div className="mx-auto mt-16 grid w-full max-w-[1200px] border-y border-slate-200 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-800 text-2xl text-white transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon aria-hidden="true" />
                </span>
                <h2 className="mt-6 text-xl font-semibold">{item.title}</h2>
                <p className="mx-auto mt-3 max-w-[18rem] text-sm leading-6 text-slate-500">
                  {item.value}
                </p>
              </>
            );

            return item.href ? (
              <a
                key={item.title}
                href={item.href}
                className="group border-b border-slate-200 px-6 py-10 text-center transition-colors hover:bg-white sm:nth-[odd]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                {content}
              </a>
            ) : (
              <div
                key={item.title}
                className="group border-b border-slate-200 px-6 py-10 text-center sm:nth-[odd]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#eef3ed] px-8 py-16 sm:px-12 lg:px-20 lg:py-20">
        <div className="mx-auto w-full max-w-[1200px]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Our locations
          </p>
          <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] font-semibold tracking-tight">
              Contact a Sampan destination.
            </h2>
            <p className="max-w-md text-sm leading-6 text-slate-500">
              Temporary contact details are shown below and will be replaced
              with the official location information.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {locationContacts.map((location) => (
              <article
                key={location.name}
                className="border border-emerald-900/15 bg-white p-7 sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                  {location.type}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#253247]">
                  {location.name}
                </h3>
                <div className="mt-6 space-y-2 text-sm leading-6 text-slate-500">
                  <p>{location.address}</p>
                  <p>
                    <a
                      href={`tel:${location.phone.replace(/\s/g, "")}`}
                      className="transition hover:text-emerald-800"
                    >
                      {location.phone}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${location.email}`}
                      className="transition hover:text-emerald-800"
                    >
                      {location.email}
                    </a>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-8 py-16 sm:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
            Start a conversation
          </p>
          <h2 className="mt-4 text-[clamp(2rem,3.5vw,3.5rem)] font-semibold tracking-tight">
            Tell us how we can help.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-500">
            Contact us about anything related to our company or services.
            We&apos;ll do our best to get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Phone number" name="phone" type="tel" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Company" name="company" />
              <Field label="Subject" name="subject" required />
            </div>
            <label
              className="block text-sm font-medium text-slate-600"
              htmlFor="question"
            >
              Question <span className="text-red-500">*</span>
              <textarea
                id="question"
                name="question"
                required
                rows={6}
                className="mt-2 block w-full resize-y border border-slate-300 bg-[#fbfcfa] px-4 py-3 text-base text-[#253247] outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
              />
            </label>
            <button
              type="submit"
              className="inline-flex bg-emerald-800 px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-emerald-900"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium text-slate-600" htmlFor={name}>
      {label} {required && <span className="text-red-500">*</span>}
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 block h-12 w-full border border-slate-300 bg-[#fbfcfa] px-4 text-base text-[#253247] outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
      />
    </label>
  );
}
