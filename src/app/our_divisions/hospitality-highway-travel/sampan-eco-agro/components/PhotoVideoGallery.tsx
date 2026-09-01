"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay, FaExpand, FaTimes, FaAppleAlt, FaCamera, FaLeaf, FaVideo } from "react-icons/fa";

interface GalleryItem {
  id: string;
  title: string;
  category: "harvest" | "cottages" | "lake" | "video";
  categoryLabel: string;
  image: string;
  type: "image" | "video";
  videoUrl?: string;
  description: string;
  harvestBadge?: string;
}

const galleryItems: GalleryItem[] = [
  // Meet the Harvest Showcase Items
  {
    id: "harvest-1",
    title: "Fresh Mango & Seasonal Orchards",
    category: "harvest",
    categoryLabel: "Meet the Harvest",
    image: "/images/our_divisions/eco_agro/fruits.jpg",
    type: "image",
    description: "Tree-ripened organic mangoes harvested fresh daily without chemicals.",
    harvestBadge: "Organic Mango & Guava",
  },
  {
    id: "harvest-2",
    title: "Organic Winter Vegetables & Leafy Greens",
    category: "harvest",
    categoryLabel: "Meet the Harvest",
    image: "/images/our_divisions/eco_agro/veg.jpg",
    type: "image",
    description: "Soil-cultivated organic vegetables grown using natural compost.",
    harvestBadge: "Daily Farm Produce",
  },
  {
    id: "harvest-3",
    title: "Seasonal Fruit Yield & Fresh Honey",
    category: "harvest",
    categoryLabel: "Meet the Harvest",
    image: "/images/our_divisions/eco_agro/seasonal.jpg",
    type: "image",
    description: "Cold-harvested wild flower honey and seasonal citrus fruits.",
    harvestBadge: "Pure Farm Honey",
  },
  {
    id: "harvest-4",
    title: "Farm Fresh Produce Collection",
    category: "harvest",
    categoryLabel: "Meet the Harvest",
    image: "/images/concerns/eco-agro.png",
    type: "image",
    description: "Bountiful organic harvest directly from our 50+ acre farm fields.",
    harvestBadge: "Farm to Table",
  },

  // Video Showcase Item (YouTube Promo Video)
  {
    id: "video-1",
    title: "Shampan Eco & Agro Resort Official Video",
    category: "video",
    categoryLabel: "Video Showcase",
    image: "/images/concerns/eco-agro.png",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/Yp78pXRGWg8",
    description: "Take a aerial cinematic tour of our 50+ acre eco resort, lake cottages, and organic farm.",
  },

  // Resort & Cottages
  {
    id: "cottage-1",
    title: "Lakeview Bamboo & Timber Suite",
    category: "cottages",
    categoryLabel: "Resort & Cottages",
    image: "/images/concerns/3-sampan-eco-agro.png",
    type: "image",
    description: "Luxury eco-cottage featuring private balcony overlooking the calm lake.",
  },
  {
    id: "cottage-2",
    title: "Rustic Green Garden Villas",
    category: "cottages",
    categoryLabel: "Resort & Cottages",
    image: "/images/featuredConcerns/sampan-agro-golf-resort.png",
    type: "image",
    description: "Peaceful villa suites nestled amidst botanical garden pathways.",
  },

  // Lake & Activities
  {
    id: "lake-1",
    title: "Sunset Angling & Wooden Rowboats",
    category: "lake",
    categoryLabel: "Lake & Activities",
    image: "/images/concerns/eco-agro.png",
    type: "image",
    description: "Serene freshwater lake ideal for recreational angling and evening boat rides.",
  },
  {
    id: "lake-2",
    title: "Children's Petting Zoo & Planting Trails",
    category: "lake",
    categoryLabel: "Lake & Activities",
    image: "/images/our_divisions/eco_agro/seasonal.jpg",
    type: "image",
    description: "Educational nature trails and friendly farm animal encounters for families.",
  },
];

export default function PhotoVideoGallery() {
  const [activeTab, setActiveTab] = useState<string>("harvest");
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);

  const filteredItems = activeTab === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-[#f4f1e8] text-[#173326] relative border-b border-[#173326]/15">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#2f6b45]/30 bg-[#2f6b45]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#2f6b45] mb-4">
              <FaLeaf className="text-xs" />
              <span>05 • Visual Experience &amp; Harvest Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#173326]">
              Meet the Harvest &amp; <span className="font-semibold text-[#2f6b45]">Resort Showcase</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#173326]/75 leading-relaxed font-normal">
            Explore our daily organic yield, pristine lakeview eco-cottages, and watch our featured YouTube documentary.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-[#173326]/15 pb-6">
          {[
            { id: "harvest", label: "🌾 Meet the Harvest", icon: FaAppleAlt },
            { id: "video", label: "🎬 Video Showcase", icon: FaVideo },
            { id: "cottages", label: "🏡 Resort & Cottages", icon: FaCamera },
            { id: "lake", label: "🛶 Lake & Activities", icon: FaCamera },
            { id: "all", label: "📸 View All Media", icon: FaCamera },
          ].map((tab) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#173326] text-white shadow-md"
                    : "bg-white text-[#173326] hover:bg-[#2f6b45] hover:text-white border border-[#173326]/15"
                }`}
              >
                <TabIcon className="text-xs" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Special Featured Video Banner if Video tab selected */}
        {activeTab === "video" && (
          <div className="mb-12 border border-[#2f6b45]/30 bg-white p-6 lg:p-8 shadow-sm">
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#2f6b45] uppercase tracking-widest font-bold">Featured Video Documentary</span>
                <span className="font-mono text-xs text-[#173326]/60">Source: YouTube Official</span>
              </div>
              <h3 className="text-2xl font-bold text-[#173326]">Shampan Eco &amp; Agro Resort | Sampan Group</h3>
              
              <div className="aspect-video w-full border border-black/20 bg-black overflow-hidden relative shadow-lg">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/Yp78pXRGWg8?autoplay=0"
                  title="Shampan Echo and Agro Resort | Sampan Group"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-xs text-[#173326]/75 leading-relaxed font-normal">
                Watch our official video overview showcasing the organic orchards, lakefront cottages, fish cultivation ponds, and countryside hospitality.
              </p>
            </div>
          </div>
        )}

        {/* Masonry / Grid Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="group border border-[#173326]/20 bg-white relative overflow-hidden cursor-pointer hover:border-[#2f6b45] transition-all duration-500 shadow-sm hover:shadow-lg"
            >
              <div className="relative h-64 w-full overflow-hidden bg-neutral-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173326] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-white/95 border border-[#2f6b45]/30 text-[#2f6b45] font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 backdrop-blur-md shadow-sm">
                    {item.categoryLabel}
                  </span>
                  {item.harvestBadge && (
                    <span className="bg-[#2f6b45] text-white font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 shadow-md">
                      {item.harvestBadge}
                    </span>
                  )}
                </div>

                {/* Hover Play / Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="h-12 w-12 bg-[#b9e583] text-[#0c1c14] flex items-center justify-center font-bold shadow-xl">
                    {item.type === "video" ? <FaPlay className="ml-1 text-base" /> : <FaExpand className="text-base" />}
                  </div>
                </div>
              </div>

              {/* Title & Caption */}
              <div className="p-5">
                <h3 className="text-sm font-bold text-[#173326] group-hover:text-[#2f6b45] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#173326]/70 mt-2 line-clamp-2 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="relative w-full max-w-4xl bg-[#0c1c14] border border-[#b9e583]/40 p-6 shadow-2xl text-white">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors bg-black/60 p-2 border border-white/20"
            >
              <FaTimes className="text-lg" />
            </button>

            <div className="space-y-4">
              <span className="font-mono text-xs text-[#b9e583] uppercase tracking-wider">
                {selectedMedia.categoryLabel}
              </span>
              <h3 className="text-2xl font-bold text-white">{selectedMedia.title}</h3>

              {selectedMedia.type === "video" && selectedMedia.videoUrl ? (
                <div className="aspect-video w-full border border-white/20 bg-black overflow-hidden">
                  <iframe
                    className="h-full w-full"
                    src={`${selectedMedia.videoUrl}?autoplay=1`}
                    title={selectedMedia.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative aspect-[16/10] w-full border border-white/20 overflow-hidden bg-black">
                  <Image
                    src={selectedMedia.image}
                    alt={selectedMedia.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <p className="text-xs text-white/80 leading-relaxed font-normal pt-2">
                {selectedMedia.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
