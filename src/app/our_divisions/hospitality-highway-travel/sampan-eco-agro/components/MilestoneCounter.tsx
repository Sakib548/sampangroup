"use client";

import { FaTree, FaSmile, FaAppleAlt, FaSeedling, FaAward } from "react-icons/fa";

interface Metric {
  id: string;
  value: string;
  label: string;
  subtitle: string;
  icon: any;
}

const metrics: Metric[] = [
  {
    id: "acres",
    value: "50+",
    label: "Organic Cultivated Acres",
    subtitle: "100% Chemical & Pesticide Free",
    icon: FaTree,
  },
  {
    id: "guests",
    value: "120,000+",
    label: "Eco Visitors Welcomed",
    subtitle: "Families & Highway Travelers",
    icon: FaSmile,
  },
  {
    id: "varieties",
    value: "45+",
    label: "Crop & Fruit Varieties",
    subtitle: "Mango, Guava, Organic Veggies",
    icon: FaAppleAlt,
  },
  {
    id: "cottages",
    value: "15+",
    label: "Lakeview Eco Luxury Cottages",
    subtitle: "Crafted from Bamboo & Wood",
    icon: FaSeedling,
  },
];

export default function MilestoneCounter() {
  return (
    <section id="milestones" className="py-20 bg-[#0c1c14] text-white relative border-b border-white/10">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                className="border border-white/15 bg-[#10251b] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#b9e583]/60 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-[#b9e583]" />
                
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 bg-[#b9e583]/15 border border-[#b9e583]/40 text-[#b9e583] flex items-center justify-center font-bold">
                    <Icon className="text-xl" />
                  </div>
                  <FaAward className="text-white/20 text-lg group-hover:text-[#b9e583] transition-colors" />
                </div>

                <div>
                  <span className="text-4xl sm:text-5xl font-mono font-bold text-white group-hover:text-[#b9e583] transition-colors tracking-tight">
                    {m.value}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-2 leading-snug">
                    {m.label}
                  </h3>
                  <p className="text-xs text-white/50 mt-1 font-mono">
                    {m.subtitle}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
