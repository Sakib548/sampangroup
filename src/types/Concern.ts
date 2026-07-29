export type Concern = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  href?: string;
  logo?: string;
  logoTheme?: "light" | "dark" | "original";

  external?: boolean;
};
