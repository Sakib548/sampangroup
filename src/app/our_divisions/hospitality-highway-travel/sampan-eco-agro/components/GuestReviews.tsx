"use client";

import { useState } from "react";
import { FaStar, FaQuoteLeft, FaCheckCircle, FaFilter, FaUserCheck } from "react-icons/fa";

interface Review {
  id: string;
  name: string;
  location: string;
  category: "family" | "couple" | "corporate" | "day";
  categoryLabel: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  stayType: string;
}

const reviewsData: Review[] = [
  {
    id: "rev-1",
    name: "Tanvir Ahmed & Family",
    location: "Uttara, Dhaka",
    category: "family",
    categoryLabel: "Family Retreat",
    rating: 5,
    date: "February 2026",
    title: "An Incredible Farm-to-Table Experience for Children",
    comment: "We brought our kids for a weekend getaway. Plucking fresh mangoes and organic guavas straight from the trees was unforgettable! The lakeview cottages were sparkling clean and very comfortable.",
    stayType: "Lakeview Cottage Stay (2 Nights)",
  },
  {
    id: "rev-2",
    name: "Dr. Naila Karim",
    location: "Gulshan, Dhaka",
    category: "couple",
    categoryLabel: "Couples Weekend",
    rating: 5,
    date: "January 2026",
    title: "Peaceful Countryside Retreat Right Next to the Highway",
    comment: "Only 35 minutes from Dhaka! The quietness at night, the evening clay-oven BBQ by the lake, and the fresh herbal tea in the morning made this our favorite short escape.",
    stayType: "Eco Cottage Night Stay",
  },
  {
    id: "rev-3",
    name: "Mahmud Hasan",
    location: "HR Director, TechCorp BD",
    category: "corporate",
    categoryLabel: "Corporate Outing",
    rating: 5,
    date: "December 2025",
    title: "Outstanding Corporate Retreat Venue",
    comment: "We organized an annual team retreat for 65 delegates. The open green lawns, spacious catering pavilion, and organized farm challenges were handled seamlessly by the Sampan team.",
    stayType: "Corporate Eco Retreat Pass",
  },
  {
    id: "rev-4",
    name: "Saad & Friends",
    location: "Dhanmondi, Dhaka",
    category: "day",
    categoryLabel: "Day Traveler",
    rating: 5,
    date: "February 2026",
    title: "Best Highway Stopover on Dhaka-Mawa Expressway",
    comment: "Stopped for lunch while traveling toward Padma Bridge. The organic fish curry and fresh farm vegetables were delicious. Excellent clean washrooms and ample parking.",
    stayType: "Day-Long Harvest Pass",
  },
];

export default function GuestReviews() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredReviews = activeFilter === "all"
    ? reviewsData
    : reviewsData.filter(r => r.category === activeFilter);

  return (
    <section id="reviews" className="py-24 bg-[#f4f1e8] text-[#173326] relative border-b border-[#173326]/15">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#2f6b45]/30 bg-[#2f6b45]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#2f6b45] mb-4">
              <FaUserCheck className="text-xs" />
              <span>11 • Verified Visitor Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#173326]">
              Guest Reviews &amp; <span className="font-semibold text-[#2f6b45]">Ratings</span>
            </h2>
          </div>

          {/* Rating Scorecard */}
          <div className="border border-[#2f6b45]/30 bg-white p-6 flex items-center gap-6 shadow-sm">
            <div className="text-center border-r border-[#173326]/15 pr-6">
              <span className="text-4xl font-mono font-bold text-[#2f6b45]">4.9</span>
              <div className="flex text-[#2f6b45] text-xs justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-[#173326] uppercase">Overall Guest Satisfaction</p>
              <p className="text-xs text-[#173326]/60 mt-0.5">Based on 1,240+ verified guest reviews</p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-[#173326]/15 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#173326]/60 mr-4">
            <FaFilter className="text-[#2f6b45]" />
            <span>Filter Reviews:</span>
          </div>

          {[
            { id: "all", label: "All Reviews" },
            { id: "family", label: "Family Retreats" },
            { id: "couple", label: "Couples Weekend" },
            { id: "corporate", label: "Corporate Groups" },
            { id: "day", label: "Day Travelers" },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === f.id
                  ? "bg-[#173326] text-white shadow-md"
                  : "bg-white text-[#173326] hover:bg-[#2f6b45] hover:text-white border border-[#173326]/15"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="border border-[#173326]/20 bg-white p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#2f6b45] transition-all duration-500 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#2f6b45] text-xs">
                    {[...Array(rev.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#2f6b45] bg-[#eef4ea] border border-[#2f6b45]/30 px-2.5 py-1">
                    {rev.categoryLabel}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#173326] leading-snug">
                  "{rev.title}"
                </h3>

                <p className="text-xs text-[#173326]/80 leading-relaxed font-normal italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#173326]/10 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-[#173326] flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <FaCheckCircle className="text-[#2f6b45] text-[11px]" />
                  </p>
                  <p className="text-[11px] text-[#173326]/60">{rev.location}</p>
                </div>

                <div className="text-right font-mono text-[11px] text-[#173326]/60">
                  <p className="text-[#2f6b45] font-bold">{rev.stayType}</p>
                  <p>{rev.date}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
