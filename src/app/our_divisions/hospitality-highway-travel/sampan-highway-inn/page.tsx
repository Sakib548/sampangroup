import { Metadata } from "next";
import SampanHighwayInnClient from "./components/SampanHighwayInnClient";

export const metadata: Metadata = {
  title: "Sampan Highway Inn | Luxury Highway Transit & Hospitality Hub",
  description:
    "Bangladesh's premier highway stopover on the Dhaka–Khulna Corridor (KM 74). Featuring soundproof VVIP suites, 24/7 authentic farm-fresh dining, 120kW EV supercharging, and celebration banquet halls.",
  keywords: [
    "Sampan Highway Inn",
    "Dhaka Khulna Highway Hotel",
    "Padma Bridge Rest Stop",
    "Bhanga Highway Restaurant",
    "EV Charging Highway Bangladesh",
    "Sampan Group Hospitality",
    "Highway Inn Bangladesh",
    "Highway motel Bangladesh",
  ],
  openGraph: {
    title: "Sampan Highway Inn | Luxury Highway Transit & Hospitality Hub",
    description:
      "Where your journey pauses in luxury. Soundproof VVIP suites, 24/7 dining, 120kW EV supercharging, and event banquets directly on the Dhaka–Khulna Expressway.",
    images: [
      {
        url: "/images/projects/sampan-highway-inn.png",
        width: 1200,
        height: 630,
        alt: "Sampan Highway Inn",
      },
    ],
  },
};

export default function SampanHighwayInnPage() {
  return <SampanHighwayInnClient />;
}
