import type { Metadata } from "next";
import SampanDevelopmentLtd from "./SampanDevelopmentLtd";

export const metadata: Metadata = {
  title: "Sampan Development Ltd (SDL) | Real Estate & Land Investment",
  description:
    "Sampan Development Ltd (SDL) is the real estate arm of Sampan Group, specializing in land sales, land-share investments, and premium commercial, residential, and economical building construction.",
  keywords: [
    "Sampan Development Ltd",
    "SDL",
    "Real Estate Bangladesh",
    "Land Share Investment",
    "Commercial Construction",
    "Residential Building",
    "Sampan Group Real Estate",
  ],
  alternates: {
    canonical: "/divisions/real-estate/sampan-development-ltd",
  },
  openGraph: {
    title: "Sampan Development Ltd (SDL) | Real Estate & Land Investment",
    description:
      "Specializing in land sales, land-share investments, and premium commercial, residential, and economical building construction.",
    url: "https://www.sampangroup.com.bd/divisions/real-estate/sampan-development-ltd",
    type: "website",
    images: [
      {
        url: "/images/projects/sdl-hero.png", // Ensure this exists in /public
        width: 1200,
        height: 630,
        alt: "Sampan Development Ltd Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sampan Development Ltd (SDL) | Real Estate & Land Investment",
    description:
      "Specializing in land sales, land-share investments, and premium commercial, residential, and economical building construction.",
    images: ["/images/projects/sdl-hero.png"],
  },
};

export default function Page() {
  return <SampanDevelopmentLtd />;
}
