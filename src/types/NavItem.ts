export type NavItem = {
  id: string;
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
  megaMenu?: MegaMenuColumn[];
};

export type MegaMenuColumn = {
  id: string;
  title: string;
  items: NavItem[];
};
