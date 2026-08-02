"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const youtubeVideoId = "Ub9yFQIlOBo";

export default function FullWidthVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsModalOpen(false);
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-neutral-950">
        <div className="relative min-h-[50vh] w-full sm:min-h-[65vh] lg:min-h-[78vh]">
          <Image
            src="/images/projects/express-highway-inn.png"
            alt="Sampan Group visual presentation"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            aria-label="Play Sampan Group video"
            className="group absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-white shadow-2xl transition hover:scale-110 hover:bg-white-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-white-800"
          >
            <span
              aria-hidden="true"
              className="ml-1 h-0 w-0 border-y-[11px] border-l-[17px] border-y-transparent border-l-white transition-transform group-hover:scale-110"
            />
          </button>
        </div>
      </section>

      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Sampan Group video player"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-5 backdrop-blur-sm sm:p-10"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsModalOpen(false);
          }}
        >
          <div className="relative w-full max-w-5xl overflow-hidden bg-black shadow-2xl">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close video"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white transition hover:bg-white hover:text-black"
            >
              X
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                title="Sampan Group video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
