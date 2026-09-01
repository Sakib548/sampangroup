"use client";

import { useState } from "react";
import { FaFileDownload, FaPhoneAlt, FaCheckCircle, FaEnvelope } from "react-icons/fa";

export interface DownloadableBrochureCTAProps {
  projectName: string;
  brochurePdfUrl?: string;
  bgTheme?: "divisions-green" | "about-ivory" | "white";
}

export default function DownloadableBrochureCTA({
  projectName,
  brochurePdfUrl = "#",
  bgTheme = "divisions-green",
}: DownloadableBrochureCTAProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-y border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-y border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-y border-neutral-200",
  }[bgTheme];

  return (
    <section className={`py-16 relative overflow-hidden ${containerClasses}`}>
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border border-current/15 p-8 bg-white shadow-sm">
          
          <div className="space-y-2 max-w-xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#ca8a04]">
              Downloadable Documentation
            </span>
            <h3 className="text-2xl font-bold text-current">
              Download Official {projectName} Brochure PDF
            </h3>
            <p className="text-xs opacity-75 font-normal leading-relaxed">
              Includes master architectural plan, floor layouts, specs checklist, and payment schedule.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            {downloaded ? (
              <div className="inline-flex items-center gap-2 bg-emerald-700 text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider shadow-sm">
                <FaCheckCircle />
                <span>Brochure Download Started</span>
              </div>
            ) : (
              <a
                href={brochurePdfUrl}
                onClick={handleDownload}
                className="inline-flex items-center gap-3 bg-[#183b2b] hover:bg-[#ca8a04] text-white hover:text-neutral-950 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-md"
              >
                <FaFileDownload />
                <span>Download PDF Brochure</span>
              </a>
            )}

            <a
              href="tel:+8801929918408"
              className="inline-flex items-center gap-2 border border-current/20 hover:border-current px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-current transition-colors"
            >
              <FaPhoneAlt className="text-xs text-[#ca8a04]" />
              <span>Call Sales Desk</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
