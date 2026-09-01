"use client";

import { useState } from "react";
import { FaStar, FaUserCheck, FaPlus, FaTimes, FaThumbsUp } from "react-icons/fa";

const reviewCategories = [
  { id: "all", label: "All Reviews (2,400+)" },
  { id: "family", label: "Family Roadtrips" },
  { id: "business", label: "Business & Solo" },
  { id: "ev", label: "EV Drivers" },
  { id: "dining", label: "Dining & Events" },
];

const reviewsData = [
  {
    id: 1,
    author: "Engr. Tanvir Ahmed",
    role: "Family Roadtrip Traveler",
    category: "family",
    avatar: "TA",
    route: "Dhaka → Barishal",
    rating: 5,
    date: "2 days ago",
    verified: true,
    title: "Best highway stop in Bangladesh hands down!",
    content:
      "We stopped with our 2 kids and elderly parents on our way to Barishal. The cleanliness of the washrooms was 5-star hotel standard. Food was fresh and served in less than 15 minutes. The soundproof rest room allowed my father to take an hour's nap peacefully.",
    stayType: "Day Pass Suite & Lunch",
    helpful: 42,
  },
  {
    id: 2,
    author: "Zubair Rahman",
    role: "BYD Seal EV Owner",
    category: "ev",
    avatar: "ZR",
    route: "Dhaka → Khulna",
    rating: 5,
    date: "1 week ago",
    verified: true,
    title: "Stress-free 120kW DC charging while dining",
    content:
      "Driving an electric vehicle beyond Padma Bridge used to cause range anxiety. Sampan Highway Inn's 120kW dual gun charger got my battery from 24% to 85% while I enjoyed an espresso and grilled chicken. The staff assisted with plugging in. Truly revolutionary.",
    stayType: "EV Supercharge & Cafe",
    helpful: 38,
  },
  {
    id: 3,
    author: "Nabila Farzana",
    role: "Corporate Executive",
    category: "business",
    avatar: "NF",
    route: "Gopalganj → Dhaka",
    rating: 5,
    date: "2 weeks ago",
    verified: true,
    title: "Quiet workstation with rock-solid fiber Wi-Fi",
    content:
      "I had an urgent Zoom client presentation while driving back to Dhaka. The Executive Lounge provided a pristine, quiet desk, high-speed fiber internet, and fresh coffee. Zero highway noise reached inside.",
    stayType: "Executive Lounge Pass",
    helpful: 29,
  },
  {
    id: 4,
    author: "Dr. Kazi Mahbubur",
    role: "Reunion Organizer",
    category: "dining",
    avatar: "KM",
    route: "Faridpur District",
    rating: 5,
    date: "3 weeks ago",
    verified: true,
    title: "Flawless alumni reunion banquet setup",
    content:
      "We hosted a 60-person medical batch reunion in the Celebration Banquet Hall. The traditional mutton rezala, kachchi, and dessert buffet was exceptional. Ample parking for everyone with full security.",
    stayType: "Celebration Banquet Hall",
    helpful: 51,
  },
  {
    id: 5,
    author: "Sadia Chowdhury",
    role: "Overnight Guest",
    category: "family",
    avatar: "SC",
    route: "Dhaka → Kuakata",
    rating: 5,
    date: "1 month ago",
    verified: true,
    title: "VVIP Suite was luxurious and soundproof",
    content:
      "We broke our long journey to Kuakata by spending the night here. The bed was remarkably comfortable, hot rain shower had great pressure, and complimentary breakfast in the morning gave us high energy for the rest of the drive.",
    stayType: "Deluxe Overnight Suite",
    helpful: 33,
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
              <span className="h-px w-10 bg-emerald-700" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
                11 / Verified Traveler Feedback
              </span>
            </div>
            <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
              Real journeys. <br />
              <span className="text-emerald-700">Genuine impressions.</span>
            </h2>
          </div>

          <div>
            <button
              onClick={() => {
                setSubmittedReview(false);
                setIsModalOpen(true);
              }}
              className="inline-flex items-center gap-2.5 rounded-none bg-neutral-950 hover:bg-emerald-700 text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <FaPlus className="text-xs" />
              <span>Share Your Experience</span>
            </button>
          </div>
        </div>

        {/* Rating Summary Scorecard (Square & Light) */}
        <div className="rounded-none border border-neutral-200 bg-white p-8 sm:p-10 mb-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-neutral-200 pb-6 md:pb-0 md:pr-8">
              <div className="flex items-baseline justify-center md:justify-start gap-2">
                <span className="text-5xl sm:text-6xl font-bold text-neutral-950">4.9</span>
                <span className="text-xl text-neutral-500 font-mono">/ 5.0</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-amber-500 my-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-base" />
                ))}
              </div>
              <p className="text-xs text-neutral-500 font-mono">Based on 2,400+ verified Google, Facebook &amp; Direct Reviews</p>
            </div>

            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
              <div className="p-4 bg-[#F5F5F2] border border-neutral-200 rounded-none">
                <p className="text-2xl font-bold text-emerald-800">99.4%</p>
                <p className="text-[11px] text-neutral-600 mt-0.5">Restroom Cleanliness</p>
              </div>
              <div className="p-4 bg-[#F5F5F2] border border-neutral-200 rounded-none">
                <p className="text-2xl font-bold text-emerald-800">15 min</p>
                <p className="text-[11px] text-neutral-600 mt-0.5">Avg Dining Speed</p>
              </div>
              <div className="p-4 bg-[#F5F5F2] border border-neutral-200 rounded-none">
                <p className="text-2xl font-bold text-emerald-800">98.2%</p>
                <p className="text-[11px] text-neutral-600 mt-0.5">Recommend</p>
              </div>
              <div className="p-4 bg-[#F5F5F2] border border-neutral-200 rounded-none">
                <p className="text-2xl font-bold text-emerald-800">100%</p>
                <p className="text-[11px] text-neutral-600 mt-0.5">EV Uptime</p>
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
              className="flex flex-col justify-between rounded-none border border-neutral-200 bg-white p-8 hover:border-emerald-700 shadow-sm transition-all duration-300"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-none bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-center justify-center font-bold text-xs font-mono">
                      {rev.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-950 flex items-center gap-1.5">
                        <span>{rev.author}</span>
                        {rev.verified && <FaUserCheck className="text-emerald-700 text-xs" />}
                      </h4>
                      <p className="text-[11px] text-neutral-500">{rev.role}</p>
                    </div>
                  </div>

                  <span className="text-[10px] text-neutral-400 font-mono">{rev.date}</span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-500 text-xs mb-3">
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
                <span className="text-emerald-800 font-semibold">{rev.stayType}</span>
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
                  <p className="text-xs text-neutral-500 mb-6">Help fellow highway travelers know what to expect.</p>

                  <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-700 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mahfuzar Rahman"
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        className="w-full bg-[#F5F5F2] border border-neutral-300 rounded-none p-3 text-neutral-950 focus:outline-none focus:border-emerald-700"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-700 mb-1">Travel Route</label>
                        <input
                          type="text"
                          placeholder="e.g. Dhaka → Khulna"
                          value={newReview.route}
                          onChange={(e) => setNewReview({ ...newReview, route: e.target.value })}
                          className="w-full bg-[#F5F5F2] border border-neutral-300 rounded-none p-3 text-neutral-950 focus:outline-none focus:border-emerald-700"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-700 mb-1">Rating</label>
                        <select
                          value={newReview.rating}
                          onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                          className="w-full bg-[#F5F5F2] border border-neutral-300 rounded-none p-3 text-neutral-950 focus:outline-none focus:border-emerald-700"
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
                        placeholder="Tell us about the hygiene, food, EV charging, rooms or hospitality..."
                        value={newReview.comment}
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                        className="w-full bg-[#F5F5F2] border border-neutral-300 rounded-none p-3 text-neutral-950 focus:outline-none focus:border-emerald-700"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-none bg-neutral-950 hover:bg-emerald-700 text-white font-mono font-bold uppercase tracking-[0.2em] text-xs transition-colors cursor-pointer"
                    >
                      Publish Review
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <h4 className="text-xl font-bold text-neutral-950">Thank You for Your Review!</h4>
                  <p className="text-xs text-neutral-600 mt-2">
                    Your feedback helps us continuously elevate Bangladesh&apos;s highway hospitality standards.
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
