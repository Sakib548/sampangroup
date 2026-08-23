import type { Metadata } from "next";
import "./globals.css";
import AnimationProvider from "@/components/providers/AnimationProvider";
import Navbar3 from "@/components/Navbar3";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";

// const SITE_URL = "https://www.sampangroup.com.bd";
const SITE_URL = "https://sampangroup.vercel.app";
const LOGO_URL = `${SITE_URL}/images/Sampan-Group.png`;

export const metadata: Metadata = {
  // FIX: metadataBase must be the root URL of your site, not an image path
  metadataBase: new URL(SITE_URL),
  // FIX: Explicitly define icons so Next.js doesn't look for src/app/favicon.ico
  icons: {
    icon: "/images/Sampan-Group.png",
    shortcut: "/images/Sampan-Group.png",
    apple: "/images/Sampan-Group.png",
  },
  title: {
    default: "SAMPAN Group | Diversified Business Conglomerate in Bangladesh",
    template: "%s | SAMPAN Group",
  },
  description:
    "Official website of SAMPAN Group, a diversified Bangladeshi business group. Explore our operations across real estate, construction, agriculture, and more.",
  keywords: [
    "SAMPAN Group",
    "SAMPAN Group Bangladesh",
    "Bangladeshi business group",
    "SAMPAN real estate",
    "SAMPAN construction",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SAMPAN Group | Diversified Business Conglomerate in Bangladesh",
    description:
      "Official website of SAMPAN Group, a diversified Bangladeshi business group.",
    // FIX: url should be the site URL
    url: SITE_URL,
    siteName: "SAMPAN Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        // Relative paths are fine here because metadataBase is set correctly
        url: "/images/Sampan-Group.png",
        width: 1200,
        height: 630,
        alt: "SAMPAN Group Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAMPAN Group | Diversified Business Conglomerate in Bangladesh",
    description:
      "Official website of SAMPAN Group, a diversified Bangladeshi business group.",
    images: ["/images/Sampan-Group.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // FIX: Updated schema URLs to use SITE_URL and LOGO_URL
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SAMPAN Group",
    url: SITE_URL,
    logo: LOGO_URL,
    sameAs: [
      // Add official social media links here once verified
      // e.g., "https://www.facebook.com/sampangroup",
      // "https://www.linkedin.com/company/sampangroup"
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SAMPAN Group",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        ></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <AnimationProvider>
          <Navbar2 />
          {children}
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
