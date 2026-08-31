"use client";

import { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaHeart, FaComment, FaTimes } from "react-icons/fa";

const ugcPosts = [
  {
    id: 1,
    author: "@shafi.roadtrips",
    likes: 412,
    comments: 29,
    image: "/images/projects/Sampan-White-House-&-Motel.png",
    caption: "Midnight pitstop at Sampan White House. Cleanest motel rooms on the N8 route! 🚗🌙 #SampanWhiteHouse #HighwayStops",
  },
  {
    id: 2,
    author: "@tasnim_weddings",
    likes: 684,
    comments: 54,
    image: "/images/facilities/highway_inn/party_reservation.png",
    caption: "The crystal chandeliers in White Hall made our cousin's reception look like a royal palace! 👑✨ #WhiteHall #SampanEvents",
  },
  {
    id: 3,
    author: "@bengal_foodies",
    likes: 320,
    comments: 18,
    image: "/images/facilities/highway_inn/all_day_comfort.png",
    caption: "Piping hot mutton curry and tandoori roti at 2:30 AM in the garden veranda. Unmatched! ☕🍛 #HighwayDining",
  },
  {
    id: 4,
    author: "@ev_bangladesh",
    likes: 512,
    comments: 36,
    image: "/images/facilities/express_highway_inn/6.EV-Car-Charging.png",
    caption: "Supercharged in 22 mins while enjoying breakfast inside White House. Zero highway range anxiety! ⚡🔋 #EVLife",
  },
];

export default function UGCFeed() {
  const [selectedPost, setSelectedPost] = useState<typeof ugcPosts[0] | null>(null);

  return (
    <section className="bg-white py-24 sm:py-32 text-neutral-950 border-b border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#e8b84b]"></span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
                13 / Traveler Community
              </span>
            </div>
            <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
              #SampanWhiteHouse <br />
              <span className="text-[#ca8a04]">Guest moments &amp; stories.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-none bg-neutral-100 hover:bg-[#e8b84b] hover:text-neutral-950 px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-neutral-900 border border-neutral-200 transition-colors"
            >
              <FaInstagram className="text-base text-[#ca8a04]" />
              <span>Tag Us On Instagram</span>
            </a>
          </div>
        </div>

        {/* UGC Cards Grid (Square Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ugcPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative aspect-[4/5] overflow-hidden rounded-none bg-neutral-100 border border-neutral-200 hover:border-[#e8b84b] cursor-pointer shadow-sm transition-all duration-500 hover:-translate-y-1"
            >
              <Image
                src={post.image}
                alt={post.author}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#e8b84b] transition-all duration-500 group-hover:w-full z-10" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-[#e8b84b]">{post.author}</span>
                  <FaInstagram className="text-base" />
                </div>

                <div>
                  <p className="text-xs text-white/90 line-clamp-3 leading-relaxed font-normal">
                    {post.caption}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center gap-4 text-xs font-mono">
                    <span className="flex items-center gap-1.5"><FaHeart className="text-[#e8b84b]" /> {post.likes}</span>
                    <span className="flex items-center gap-1.5"><FaComment /> {post.comments}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Viewer */}
        {selectedPost && (
          <div
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full rounded-none border border-neutral-300 bg-white p-6 sm:p-8 text-neutral-950 shadow-2xl"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 text-neutral-500 hover:text-black p-2"
              >
                <FaTimes />
              </button>

              <div className="relative aspect-[16/10] w-full rounded-none overflow-hidden bg-black mb-6">
                <Image src={selectedPost.image} alt={selectedPost.author} fill className="object-contain" />
              </div>

              <div className="flex items-center justify-between border-b border-neutral-200 pb-3 mb-3">
                <span className="font-mono text-xs font-bold text-[#ca8a04]">{selectedPost.author}</span>
                <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
                  <span className="flex items-center gap-1"><FaHeart className="text-[#ca8a04]" /> {selectedPost.likes}</span>
                  <span className="flex items-center gap-1"><FaComment /> {selectedPost.comments}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                {selectedPost.caption}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
