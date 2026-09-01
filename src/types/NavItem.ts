export type NavItem = {
  id: string;
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
  megaMenu?: MegaMenuColumn[];
  comingSoon?: boolean;
  description?: string;
  layout?: "concerns" | "corporate" | "investment";
};

export type MegaMenuColumn = {
  id: string;
  title: string;
  items: NavItem[];
};
