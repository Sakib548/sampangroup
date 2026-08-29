export const expressHighwayStoryContent = {
  eyebrow: "A Modern Highway Destination",
  title: "Express Highway Inn",
  description:
    "A modern, premium evolution of the Sampan Highway Inn, designed for everyone seeking elevated comfort, convenience, and hospitality.",
  cta: "Membership Offer",
  href: "/contact",
} as const;

export const expressHighwayFeatures = [
  {
    id: "highway-restaurant",
    title: "Highway Restaurant",
    copy: "Express Highway Inn 24/7",
  },
  {
    id: "vvip-lounge",
    title: "VVIP Lounge",
    copy: "Premium Accommodation Room",
  },
  {
    id: "billiards",
    title: "Billiards & Card Room",
    copy: "Play, Relax, Compete",
  },
  {
    id: "super-shop",
    title: "Super Shop",
    copy: "Sampan Mart 24/7",
  },
  {
    id: "ev-car-charging",
    title: "EV Car Charging",
    copy: "All kinds of Electric Car Charging",
  },
  {
    id: "automatic-car-wash",
    title: "Automatic Car Wash",
    copy: "",
  },
] as const;

export function getExpressHighwayStoryLayout() {
  return {
    accentColor: "#58b9eb",
    contentMaxWidth: 1400,
    contentFlowClass: "my-auto",
    mobileGridClass: "grid-cols-2",
    desktopGridClass: "lg:grid-cols-6",
  } as const;
}
