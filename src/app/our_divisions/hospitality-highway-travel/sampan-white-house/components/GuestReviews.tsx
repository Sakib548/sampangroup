"use client";

import { useState } from "react";
import { FaStar, FaUserCheck, FaPlus, FaTimes, FaThumbsUp } from "react-icons/fa";

const reviewCategories = [
  { id: "all", label: "All Reviews (1,850+)" },
  { id: "family", label: "Family Road Trips" },
  { id: "whitehall", label: "White Hall Events" },
  { id: "overnight", label: "Motel Stays" },
  { id: "dining", label: "Garden Dining" },
];

const reviewsData = [
  {
    id: 1,
    author: "Barrister Mahmud Hasan",
    role: "Family Roadtrip Guest",
    category: "family",
    avatar: "MH",
    route: "Dhaka → Barishal",
    rating: 5,
    date: "3 days ago",
    verified: true,
    title: "Quiet, peaceful motel suite and warm hospitality",
    content:
      "We took a 6-hour day break here with our twin toddlers. The acoustic soundproofing in the room was truly impressive—we couldn't hear a single highway truck. Restrooms were spotless and tea service was fast.",
    stayType: "Day Stay Suite",
    helpful: 34,
  },
  {
    id: 2,
    author: "Farhana & Shahrier",
    role: "Wedding Hosts",
    category: "whitehall",
    avatar: "FS",
    route: "Faridpur District",
    rating: 5,
    date: "1 week ago",
    verified: true,
    title: "Our wedding reception in White Hall was unforgettable",
    content:
      "White Hall exceeded our expectations for our 250-guest reception. The lighting, crystal chandeliers, sound system, and delicious roast and kachchi mutton were praised by all our relatives.",
    stayType: "White Hall Grand Banquet",
    helpful: 47,
  },
  {
    id: 3,
    author: "Zakir Hossain",
    role: "Automotive Convoy Lead",
    category: "overnight",
    avatar: "ZH",
    route: "Dhaka → Kuakata",
    rating: 5,
    date: "2 weeks ago",
    verified: true,
    title: "Gated parking for 12 cars with full overnight security",
    content:
      "We organized a road club trip to Kuakata. The team arranged reserved convoy parking, and our overnight stay in the motel was extremely comfortable. Hot breakfast in the morning was fresh and filling.",
    stayType: "Overnight Motel Stay",
    helpful: 28,
  },
  {
    id: 4,
    author: "Dr. Anisur Rahman",
    role: "Corporate Outing Organizer",
    category: "whitehall",
    avatar: "AR",
    route: "Dhaka → Gopalganj",
    rating: 5,
    date: "3 weeks ago",
    verified: true,
    title: "Perfect highway offsite with generator backup",
    content:
      "Held an executive seminar for 35 doctors in White Hall. The HD projector, audio system, and dedicated buffet team ran seamlessly with zero power hiccups.",
    stayType: "Corporate Seminar Package",
    helpful: 22,
  },
  {
    id: 5,
    author: "Nasrin Akhter",
    role: "Solo Driver & Traveler",
    category: "dining",
    avatar: "NA",
    route: "Khulna → Dhaka",
    rating: 5,
    date: "1 month ago",
    verified: true,
    title: "Safe, welcoming garden dining for solo travelers",
    content:
      "Stopped alone for dinner and quick rest on my way back to Dhaka. The staff was polite, food was served piping hot in 15 minutes, and the well-lit compound felt completely safe.",
    stayType: "Garden Dining & Rest",
    helpful: 39,
  },
];

export default function GuestReviews() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", route: "", rating: 5, comment: "", category: "family" });
  const [submittedReview, setSubmittedReview] = useState(false);

  const filteredReviews = activeCategory === "all"
    ? reviewsData
    : reviewsData.filter((r) => r.category === activeCategory);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedReview(true);
  };

  return (
    <section id="reviews" className="bg-[#F5F5F2] py-24 sm:py-32 text-neutral-950 border-b border-neutral-200 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#e8b84b]"></span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
                11 / Verified Guest Impressions
              </span>
            </div>
            <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
              Genuine journeys. <br />
              <span className="text-[#ca8a04]">Verified traveler reviews.</span>
            </h2>
          </div>

          <div>
            <button
              onClick={() => {
                setSubmittedReview(false);
                setIsModalOpen(true);
              }}
              className="inline-flex items-center gap-2.5 rounded-none bg-neutral-950 hover:bg-[#e8b84b] hover:text-neutral-950 text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <FaPlus className="text-xs" />
              <span>Write A Review</span>
            </button>
          </div>
        </div>

        {/* Rating Scorecard (Square & Light) */}
        <div className="rounded-none border border-neutral-200 bg-white p-8 sm:p-10 mb-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-neutral-200 pb-6 md:pb-0 md:pr-8">
              <div className="flex items-baseline justify-center md:justify-start gap-2">
                <span className="text-5xl sm:text-6xl font-bold text-neutral-950">4.8</span>
                <span className="text-xl text-neutral-500 font-mono">/ 5.0</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#e8b84b] text-base my-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-xs text-neutral-500 font-mono">Based on 1,850+ Google, Facebook &amp; Direct Reviews</p>
            </div>

            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
              <div className="p-4 bg-[#F5F5F2] border border-neutral-200 rounded-none">
                <p className="text-2xl font-bold text-[#ca8a04]">99.2%</p>
                <p className="text-[11px] text-neutral-600 mt-0.5">Quiet Soundproofing</p>
              </div>
              <div className="p-4 bg-[#F5F5F2] border border-neutral-200 rounded-none">
                <p className="text-2xl font-bold text-[#ca8a04]">98.7%</p>
                <p className="text-[11px] text-neutral-600 mt-0.5">Hygiene Rating</p>
              </div>
              <div className="p-4 bg-[#F5F5F2] border border-neutral-200 rounded-none">
                <p className="text-2xl font-bold text-[#ca8a04]">300+</p>
                <p className="text-[11px] text-neutral-600 mt-0.5">Events Hosted</p>
              </div>
              <div className="p-4 bg-[#F5F5F2] border border-neutral-200 rounded-none">
                <p className="text-2xl font-bold text-[#ca8a04]">100%</p>
                <p className="text-[11px] text-neutral-600 mt-0.5">Safe Parking</p>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Tabs (Square) */}
        <div className="flex flex-wrap gap-2 pb-4 mb-10 border-b border-neutral-200">
          {reviewCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-none font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-neutral-950 text-white shadow-sm"
                  : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <article
              key={rev.id}
              className="flex flex-col justify-between rounded-none border border-neutral-200 bg-white p-8 hover:border-[#e8b84b] shadow-sm transition-all duration-300"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-none bg-amber-50 border border-amber-300 text-[#ca8a04] flex items-center justify-center font-bold text-xs font-mono">
                      {rev.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-950 flex items-center gap-1.5">
                        <span>{rev.author}</span>
                        {rev.verified && <FaUserCheck className="text-[#ca8a04] text-xs" />}
                      </h4>
                      <p className="text-[11px] text-neutral-500">{rev.role}</p>
                    </div>
                  </div>

                  <span className="text-[10px] text-neutral-400 font-mono">{rev.date}</span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#e8b84b] text-xs mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="text-xs text-neutral-500 ml-2 font-mono">{rev.route}</span>
                </div>

                <h5 className="text-base font-bold text-neutral-950 leading-snug mb-2">&ldquo;{rev.title}&rdquo;</h5>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {rev.content}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                <span className="text-[#ca8a04] font-semibold">{rev.stayType}</span>
                <span className="flex items-center gap-1 hover:text-black cursor-pointer">
                  <FaThumbsUp className="text-[10px]" /> Helpful ({rev.helpful})
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for Submitting a Review */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-lg rounded-none border border-neutral-300 bg-white p-8 text-neutral-950 shadow-2xl">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-neutral-500 hover:text-black p-2"
              >
                <FaTimes />
              </button>

              {!submittedReview ? (
                <>
                  <h3 className="text-2xl font-bold text-neutral-950 mb-1">Write a Guest Review</h3>
                  <p className="text-xs text-neutral-500 mb-6">Share your motel stay or White Hall event experience.</p>

                  <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-700 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mahfuzar Rahman"
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        className="w-full bg-[#F5F5F2] border border-neutral-300 rounded-none p-3 text-neutral-950 focus:outline-none focus:border-[#e8b84b]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-700 mb-1">Travel Route / Event</label>
                        <input
                          type="text"
                          placeholder="e.g. Dhaka → Barishal"
                          value={newReview.route}
                          onChange={(e) => setNewReview({ ...newReview, route: e.target.value })}
                          className="w-full bg-[#F5F5F2] border border-neutral-300 rounded-none p-3 text-neutral-950 focus:outline-none focus:border-[#e8b84b]"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-700 mb-1">Rating</label>
                        <select
                          value={newReview.rating}
                          onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                          className="w-full bg-[#F5F5F2] border border-neutral-300 rounded-none p-3 text-neutral-950 focus:outline-none focus:border-[#e8b84b]"
                        >
                          <option value={5}>5 Stars - Outstanding</option>
                          <option value={4}>4 Stars - Very Good</option>
                          <option value={3}>3 Stars - Average</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-700 mb-1">Your Review</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about the quietness, room comfort, food quality, or White Hall banquet service..."
                        value={newReview.comment}
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                        className="w-full bg-[#F5F5F2] border border-neutral-300 rounded-none p-3 text-neutral-950 focus:outline-none focus:border-[#e8b84b]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-none bg-neutral-950 hover:bg-[#e8b84b] hover:text-neutral-950 text-white font-mono font-bold uppercase tracking-[0.2em] text-xs transition-colors cursor-pointer"
                    >
                      Publish Review
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <h4 className="text-xl font-bold text-neutral-950">Thank You for Your Feedback!</h4>
                  <p className="text-xs text-neutral-600 mt-2">
                    Your review has been submitted and will guide other travelers along the highway.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-6 px-6 py-2.5 rounded-none bg-neutral-950 text-white font-mono text-xs font-semibold uppercase tracking-wider"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
