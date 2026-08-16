import type { Metadata } from "next";
import ShipSharePage from "./components/ShipSharePage";

export const metadata: Metadata = {
  title: "Sampan Ship Share | Maritime Asset Investment",
  description:
    "Explore fractional ownership in commercial shipping with Sampan Ship Share. Secure, asset-backed investments in the maritime logistics and shipping sector.",
  keywords: [
    "Ship Share",
    "Maritime investment",
    "Commercial shipping assets",
    "Fractional ship ownership",
    "Logistics investment Bangladesh",
    "Sampan maritime",
  ],
  alternates: {
    canonical: "/ship-share",
  },
  openGraph: {
    title: "Sampan Ship Share | Maritime Asset Investment",
    description:
      "Explore fractional ownership in commercial shipping with Sampan Ship Share. Secure, asset-backed investments in the maritime logistics sector.",
    url: "https://www.sampangroup.com.bd/ship-share",
    type: "website",
    images: [
      {
        url: "/images/projects/ship-share-hero.png", // Ensure this exists in /public
        width: 1200,
        height: 630,
        alt: "Sampan Ship Share Maritime Investment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sampan Ship Share | Maritime Asset Investment",
    description:
      "Explore fractional ownership in commercial shipping with Sampan Ship Share. Secure, asset-backed investments in the maritime logistics sector.",
    images: ["/images/projects/ship-share-hero.png"],
  },
};

export default function Page() {
  return <ShipSharePage />;
}
