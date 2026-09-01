"use client";

import { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaHeart, FaComment, FaTimes, FaCamera } from "react-icons/fa";

const ugcPosts = [
  {
    id: 1,
    handle: "@roadtrip_bangladesh",
    avatar: "RB",
    image: "/images/projects/sampan-highway-inn.png",
    likes: 842,
    comments: 64,
    caption: "Highway night aesthetics done right! Stopped at @SampanHighwayInn after crossing Padma Bridge. Zero noise inside the VVIP suite! 🌙✨ #SampanHighwayInn #RoadTripBD",
    location: "Sampan Highway Inn Plaza, KM 74",
  },
  {
    id: 2,
    handle: "@bangladesh_ev_club",
    avatar: "EV",
    image: "/images/facilities/express_highway_inn/6.EV-Car-Charging.png",
    likes: 629,
    comments: 48,
    caption: "120kW DC fast charge from 30% to 80% while having breakfast. The southern highway is now 100% EV ready! ⚡🔋 #EVMobility #SampanHighwayInn",
    location: "EV Supercharging Bay 02",
  },
  {
    id: 3,
    handle: "@dhaka_foodies_journal",
    avatar: "DF",
    image: "/images/facilities/express_highway_inn/1.Highway-Club-&-Lounge.png",
    likes: 915,
    comments: 82,
    caption: "Best mutton rezala and fresh hot naan on the entire Dhaka-Khulna corridor. 10/10 dining hygiene and incredible coffee. ☕🥘 #HighwayFood #FoodieBangladesh",
    location: "Gourmet Highway Restaurant",
  },
  {
    id: 4,
    handle: "@tahmid_overland",
    avatar: "TO",
    image: "/images/facilities/highway_inn/all_day_comfort.png",
    likes: 472,
    comments: 31,
    caption: "A 2-hour power nap in a soundproof room before the next 100km drive. Saved my energy completely. 🛌💯 #DriverSafety #SampanHighwayInn",
    location: "VVIP Soundproof Rest Suite",
  },
  {
    id: 5,
    handle: "@corp_trips_bd",
    avatar: "CT",
    image: "/images/facilities/highway_inn/Official-Outing.png",
    likes: 531,
    comments: 26,
    caption: "Team offsite halfway to our project site in Khulna. Great conference room setup with fiber optic Wi-Fi. 💼📊 #CorporateOuting #SampanGroup",
    location: "Executive Meeting Suite",
  },
  {
    id: 6,
    handle: "@biker_riders_club",
    avatar: "BR",
    image: "/images/facilities/express_highway_inn/7.Automatic-Car-Wash.png",
    likes: 718,
    comments: 55,
    caption: "Post-rain express automated wash before entering the city. Cleaned and dried in 10 minutes flat! 🏍️💦 #TouringBangladesh #CarWash",
    location: "Plaza Automated Wash",
  },
];

export default function UGCFeed() {
  const [selectedPost, setSelectedPost] = useState<typeof ugcPosts[0] | null>(null);

  return (
    <section id="ugc" className="bg-[#faf9f6] py-24 sm:py-32 text-[#1a1a1a] border-t border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-emerald-600" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-800">
                13 — Traveler Community (#StopAtSampan)
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
              Moments captured on the road.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-4 py-2 rounded-full flex items-center gap-2">
              <FaCamera className="text-emerald-700" />
              <span>Tag #SampanHighwayInn to get featured</span>
            </span>
          </div>
        </div>

        {/* UGC Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ugcPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative overflow-hidden rounded-3xl bg-white border border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between border-b border-neutral-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#070b09] text-white flex items-center justify-center text-xs font-bold font-mono">
                    {post.avatar}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#111111]">{post.handle}</h3>
                    <p className="text-[10px] text-neutral-400">{post.location}</p>
                  </div>
                </div>
                <FaInstagram className="text-neutral-400 group-hover:text-pink-600 transition-colors text-base" />
              </div>

              {/* Photo */}
              <div className="relative aspect-square overflow-hidden bg-neutral-100">
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Like Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white text-sm font-bold">
                  <span className="flex items-center gap-1.5">
                    <FaHeart className="text-red-500" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaComment /> {post.comments}
                  </span>
                </div>
              </div>

              {/* Caption Preview */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-neutral-700 line-clamp-2 leading-relaxed">
                  <strong className="text-black font-semibold mr-1">{post.handle}</strong>
                  {post.caption}
                </p>
                
                <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>View Post &amp; Comments</span>
                  <span className="text-emerald-700 font-bold">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Selected Post Modal */}
        {selectedPost && (
          <div
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden bg-white shadow-2xl grid grid-cols-1 md:grid-cols-12"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-20 text-neutral-500 hover:text-black p-2 bg-white/80 rounded-full"
              >
                <FaTimes />
              </button>

              <div className="md:col-span-7 relative aspect-square bg-neutral-900">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.caption}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-5 p-6 flex flex-col justify-between text-neutral-800">
                <div>
                  <div className="flex items-center gap-2.5 pb-4 border-b border-neutral-100">
                    <div className="w-9 h-9 rounded-full bg-[#070b09] text-white flex items-center justify-center text-xs font-bold font-mono">
                      {selectedPost.avatar}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-black">{selectedPost.handle}</h4>
                      <p className="text-[10px] text-neutral-400">{selectedPost.location}</p>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-700 mt-4 leading-relaxed">
                    {selectedPost.caption}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100">
                  <div className="flex items-center gap-4 text-xs font-bold text-neutral-600 mb-3">
                    <span className="flex items-center gap-1.5 text-red-500">
                      <FaHeart /> {selectedPost.likes} Likes
                    </span>
                    <span className="flex items-center gap-1.5 text-neutral-500">
                      <FaComment /> {selectedPost.comments} Comments
                    </span>
                  </div>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-center w-full py-2.5 rounded-xl bg-[#070b09] text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                  >
                    View on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
