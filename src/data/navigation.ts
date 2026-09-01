import { NavItem, MegaMenuColumn } from "@/types/NavItem";
import { concerns } from "@/data/concerns";
import { concerns2 } from "@/data/concerns2";
import { divisionGroups } from "@/data/divisions";

const concernCategories = [
  "Hospitality & Leisure",
  "Automotive & Energy",
  "Retail & Consumer",
  "Development & Construction",
  "Agriculture",
  "Security",
  "Logistics",
];

const concernMegaMenu: MegaMenuColumn[] = concernCategories.map((category) => ({
  id: category.toLowerCase().replaceAll(" ", "-"),
  title: category,
  items: concerns
    .filter((concern) => concern.category === category)
    .map((concern) => ({
      id: String(concern.id),
      label: concern.name,
      href: concern.href ?? `/concerns#${concern.id}`,
      external: concern.external ?? false,
    })),
}));

const divisionMegaMenu: MegaMenuColumn[] = divisionGroups.map((group) => ({
  id: group.id,
  title: group.title,
  href: group.href,
  items: group.items.map((item) => {
<<<<<<< HEAD
    const concern = concerns.find(
      (c) => String(c.id) === String(item.concernId),
    );
    return {
      id: String(item.id),
      label: concern?.name ?? group.title,
=======
    // ✅ FIX: Safely compare string/number ids
    const concern = concerns2.find(
      (c) => String(c.id) === String(item.concernId),
    );
    return {
      id: String(item.id), // ✅ FIX: Force string
      label: item.label ?? concern?.name ?? group.title,
>>>>>>> f9d196468a6220bbb9820a7e849545d851e5ae30
      href: item.href,
      external: false,
    };
  }),
}));

const whoAreWeMenu: MegaMenuColumn[] = [
  {
    id: "who-are-we",
    title: "Who Are We",
    items: [
      {
        id: "about-us",
        label: "About Us",
        href: "/about",
        description: "Our story, vision, mission & journey.",
      },
      {
        id: "newsroom",
        label: "Newsroom / Media",
        href: "/newsroom",
        description: "Latest news, announcements, media & updates.",
      },
      {
        id: "awards",
        label: "Accreditation, Honors & Awards",
        href: "/awards",
        description: "Recognition, awards & credentials.",
      },
      {
        id: "careers",
        label: "Careers",
        href: "/careers",
        description: "Build your future with Sampan Group.",
        comingSoon: true,
      },
    ],
  },
];

const investmentMenu: MegaMenuColumn[] = [
  {
    id: "investment-portfolio",
    title: "Investment Portfolio",
    items: [
      {
        id: "land-share",
        label: "Land Share",
        href: "/investments/land-share",
        description: "Real Estate Investment",
      },
      {
        id: "club-membership",
        label: "Club & Membership",
        href: "/investments/club-membership",
        description: "Lifestyle & Hospitality",
      },
      {
        id: "ship-space-share",
        label: "Ship Space Share",
        href: "/investments/ship-space-share",
        description: "Maritime Investment",
        comingSoon: true,
      },
    ],
  },
];

export const navItems: NavItem[] = [
  {
    id: "1",
    label: "Who Are We",
    href: "/about",
    layout: "corporate",
    megaMenu: whoAreWeMenu,
  },
  {
    id: "2",
    label: "Our Divisions",
    href: "/our_divisions",
    layout: "concerns", // Uses the same column layout as Concerns
    megaMenu: divisionMegaMenu,
  },
  {
    id: "3",
    label: "Our Concerns",
    href: "/concerns",
    layout: "concerns",
    megaMenu: concernMegaMenu,
  },
  {
    id: "4",
    label: "Investment Portfolio",
    href: "/projects",
    layout: "investment",
    megaMenu: investmentMenu,
  },
  { id: "5", label: "Contact", href: "/contact" },
];
