import type { Metadata } from "next";
import ClubAndMembershipShare from "./components/ClubAndMembershipShare";

export const metadata: Metadata = {
  title: "Sampan Club & Membership | Exclusive Hospitality & Leisure",
  description:
    "Discover exclusive membership opportunities at Sampan's premium hospitality, leisure, and lifestyle destinations. Explore the Express Highway Inn Club & Lounge and the Agro & Golf Club & Lounge.",
  keywords: [
    "Sampan Club & Membership",
    "Express Highway Inn Club & Lounge",
    "Agro & Golf Club & Lounge",
    "Premium hospitality Bangladesh",
    "Private club membership",
    "Leisure and lifestyle experiences",
    "Business networking club",
  ],
  alternates: {
    canonical: "/club-membership",
  },
  openGraph: {
    title: "Sampan Club & Membership | Exclusive Hospitality & Leisure",
    description:
      "Discover exclusive membership opportunities at Sampan's premium hospitality, leisure, and lifestyle destinations. Choose the experience that fits your lifestyle.",
    url: "https://www.sampangroup.com.bd/club-membership",
    type: "website",
    images: [
      {
        url: "/images/club/hero.png", // Ensure this image exists in your /public folder
        width: 1200,
        height: 630,
        alt: "Sampan Club & Membership Premium Lifestyle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sampan Club & Membership | Exclusive Hospitality & Leisure",
    description:
      "Discover exclusive membership opportunities at Sampan's premium hospitality, leisure, and lifestyle destinations.",
    images: ["/images/club/hero.png"],
  },
};

export default function Page() {
  return <ClubAndMembershipShare />;
}
