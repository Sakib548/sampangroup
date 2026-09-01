"use client";

import Image from "next/image";
import { FaInstagram, FaHeart, FaComment, FaHashtag, FaExternalLinkAlt } from "react-icons/fa";

interface UGCPost {
  id: string;
  handle: string;
  avatar: string;
  image: string;
  likes: string;
  comments: string;
  caption: string;
  tag: string;
}

const ugcPosts: UGCPost[] = [
  {
    id: "post-1",
    handle: "@rafiq_travels",
    avatar: "/images/concerns/eco-agro.png",
    image: "/images/our_divisions/eco_agro/fruits.jpg",
    likes: "482",
    comments: "34",
    caption: "Picked organic mangoes straight from the tree at #SampanEcoAgro 🥭 Perfect highway weekend escape!",
    tag: "#FarmToTable",
  },
  {
    id: "post-2",
    handle: "@sabrina_vlogs",
    avatar: "/images/concerns/3-sampan-eco-agro.png",
    image: "/images/concerns/3-sampan-eco-agro.png",
    likes: "890",
    comments: "62",
    caption: "Waking up to this lake view at Sampan Eco Cottages 🌅 Countryside bliss just 35 mins from Dhaka.",
    tag: "#EcoResortBD",
  },
  {
    id: "post-3",
    handle: "@foodie_bengal",
    avatar: "/images/our_divisions/eco_agro/veg.jpg",
    image: "/images/our_divisions/eco_agro/veg.jpg",
    likes: "1,240",
    comments: "98",
    caption: "Organic farm lunch feast! Fresh lake rui fish and homegrown winter greens 🥗🔥",
    tag: "#OrganicDining",
  },
  {
    id: "post-4",
    handle: "@dhaka_explorers",
    avatar: "/images/featuredConcerns/sampan-agro-golf-resort.png",
    image: "/images/concerns/eco-agro.png",
    likes: "610",
    comments: "41",
    caption: "Sunset boat ride at Sampan Eco Lake 🛶 Nothing beats freshwater angling and fresh air.",
    tag: "#LakeView",
  },
];

export default function UGCFeed() {
  return (
    <section id="ugc-feed" className="py-24 bg-[#10251b] text-white relative border-b border-white/10">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#b9e583]/40 bg-[#b9e583]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#b9e583] mb-4">
              <FaInstagram className="text-xs" />
              <span>13 • #SampanEcoAgro Community Feed</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Visitor Moments &amp; <span className="font-semibold text-[#b9e583]">Social Feed</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/70 leading-relaxed font-normal">
            Tag <span className="text-[#b9e583] font-bold font-mono">#SampanEcoAgro</span> on Instagram or Facebook to be featured in our official traveler gallery!
          </p>
        </div>

        {/* UGC Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="group border border-white/15 bg-[#0c1c14] relative overflow-hidden flex flex-col justify-between hover:border-[#b9e583]/60 transition-all duration-500"
            >
              <div>
                {/* Header Profile */}
                <div className="p-4 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="h-7 w-7 rounded-full bg-[#b9e583] text-[#0c1c14] flex items-center justify-center font-bold font-mono text-xs">
                      {post.handle[1].toUpperCase()}
                    </div>
                    <span className="font-mono text-xs font-bold text-white group-hover:text-[#b9e583] transition-colors">
                      {post.handle}
                    </span>
                  </div>
                  <FaInstagram className="text-white/40 group-hover:text-[#b9e583] transition-colors" />
                </div>

                {/* Main Photo */}
                <div className="relative h-64 w-full overflow-hidden bg-black">
                  <Image
                    src={post.image}
                    alt={post.caption}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                  {/* Likes Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <FaHeart className="text-[#b9e583]" />
                        <span>{post.likes}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <FaComment className="text-white/70" />
                        <span>{post.comments}</span>
                      </span>
                    </div>
                    <span className="bg-[#b9e583] text-[#0c1c14] text-[10px] font-bold px-2 py-0.5">
                      {post.tag}
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-5">
                  <p className="text-xs text-white/80 leading-relaxed font-normal">
                    {post.caption}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase text-[#b9e583] hover:text-white transition-colors"
                >
                  <span>View Original Post</span>
                  <FaExternalLinkAlt className="text-[9px]" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
