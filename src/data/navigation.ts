import { NavItem } from "@/types/NavItem";
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

const concernMegaMenu = concernCategories.map((category) => ({
  id: category.toLowerCase().replaceAll(" ", "-"),
  title: category,
  items: concerns
    .filter((concern) => concern.category === category)
    .map((concern) => ({
      id: String(concern.id), // ✅ FIX: Force string
      label: concern.name,
      href: concern.href ?? `/concerns#${concern.id}`,
      external: concern.external ?? false,
    })),
}));

const divisionMegaMenu = divisionGroups.map((group) => ({
  id: group.id,
  title: group.title,
  href: group.href,
  items: group.items.map((item) => {
    // ✅ FIX: Safely compare string/number ids
    const concern = concerns2.find(
      (c) => String(c.id) === String(item.concernId),
    );
    return {
      id: String(item.id), // ✅ FIX: Force string
      label: item.label ?? concern?.name ?? group.title,
      href: item.href,
      external: false,
    };
  }),
}));

export const navItems: NavItem[] = [
  { id: "1", label: "About", href: "/about" },
  {
    id: "2",
    label: "Our Divisions",
    href: "/our_divisions",
    megaMenu: divisionMegaMenu,
  },
  {
    id: "3",
    label: "Concerns",
    href: "/concerns",
    megaMenu: concernMegaMenu,
  },
  { id: "4", label: "Projects", href: "/projects" },
  { id: "5", label: "Contact", href: "/contact" },
];
