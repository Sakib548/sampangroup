import { NavItem } from "@/types/NavItem";
import { concerns } from "@/data/concerns";
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
      id: concern.id,
      label: concern.name,
      href: concern.href ?? `/concerns#${concern.id}`,
      external: concern.external ?? false,
    })),
}));

export const navItems: NavItem[] = [
  { id: "1", label: "About", href: "/about" },
  {
    id: "2",
    label: "Our Divisions",
    href: "/our_divisions",
    megaMenu: divisionGroups,
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
