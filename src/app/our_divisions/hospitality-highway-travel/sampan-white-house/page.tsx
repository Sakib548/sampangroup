import type { Metadata } from "next";
import SampanWhiteHouseClient from "./components/SampanWhiteHouseClient";

export const metadata: Metadata = {
  title: "Sampan Highway Hotel & Motel (White Hall) | Sampan Group",
  description:
    "A softer, luxurious highway pause offering quiet soundproof motel rooms, the iconic White Hall grand banquet ballroom, 24/7 garden dining, and gated parking.",
  openGraph: {
    title: "Sampan Highway Hotel & Motel (White Hall) | Sampan Group",
    description:
      "A softer, luxurious highway pause offering quiet soundproof motel rooms, the iconic White Hall grand banquet ballroom, 24/7 garden dining, and gated parking.",
    images: ["/images/projects/Sampan-White-House-&-Motel.png"],
  },
};

export default function HighwayMotelWhiteHousePage() {
  return <SampanWhiteHouseClient />;
}
