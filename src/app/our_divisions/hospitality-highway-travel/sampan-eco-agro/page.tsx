import type { Metadata } from "next";
import SampanEcoAgroClient from "./components/SampanEcoAgroClient";

export const metadata: Metadata = {
  title: "Sampan Eco & Agro Resort | Organic Farming, Eco-Cottages & Highway Dining",
  description:
    "Discover 50+ acres of organic orchards, pick-your-own harvests, lakeview eco luxury cottages, authentic farm-to-table dining, and green event grounds on the Dhaka Expressway corridor.",
  keywords: [
    "Sampan Eco and Agro Resort",
    "Agritourism Bangladesh",
    "Dhaka Mawa Expressway Resort",
    "Organic Farm Bangladesh",
    "Lakeview Eco Cottage",
    "Farm to Table Dining Bangladesh",
    "Sampan Group Hospitality",
  ],
  openGraph: {
    title: "Sampan Eco & Agro Resort | Organic Farming & Eco-Cottage Retreat",
    description:
      "A 50+ acre organic farm sanctuary along the expressway corridor. Organic fruit picking, lakefront eco-cottages, 360° virtual tours, and authentic farm-to-table dining.",
    images: [
      {
        url: "/images/concerns/eco-agro.png",
        width: 1200,
        height: 630,
        alt: "Sampan Eco & Agro Resort",
      },
    ],
  },
};

export default function SampanEcoAgroPage() {
  return <SampanEcoAgroClient />;
}
