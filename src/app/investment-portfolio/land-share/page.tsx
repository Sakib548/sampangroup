import type { Metadata } from "next";
import SampanDevelopmentsPage from "./components/LandSitePage";

export const metadata: Metadata = {
  title: "Premium Land Sites & Development | SAMPAN Group",
  description:
    "Explore premium land development sites by SAMPAN Group. Strategic locations, sustainable infrastructure, and high-return real estate investment opportunities.",
  keywords: [
    "SAMPAN land development",
    "Real estate Bangladesh",
    "Premium land sites",
    "Property investment",
    "Sampan Development Ltd",
  ],
  alternates: {
    canonical: "/land-site",
  },
  openGraph: {
    title: "Premium Land Sites & Development | SAMPAN Group",
    description:
      "Explore premium land development sites by SAMPAN Group. Strategic locations, sustainable infrastructure, and high-return real estate investment opportunities.",
    url: "https://www.sampangroup.com.bd/land-site",
    type: "website",
    images: [
      {
        url: "/images/projects/land-site-hero.png", // Ensure this image exists in your /public folder
        width: 1200,
        height: 630,
        alt: "SAMPAN Group Land Development Site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Land Sites & Development | SAMPAN Group",
    description:
      "Explore premium land development sites by SAMPAN Group. Strategic locations, sustainable infrastructure, and high-return real estate investment opportunities.",
    images: ["/images/projects/land-site-hero.png"],
  },
};

export default function Page() {
  return <SampanDevelopmentsPage />;
}
