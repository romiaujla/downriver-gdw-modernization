export type SiteNavigationItem = {
  href: string;
  label: string;
  emphasize?: boolean;
};

export const siteNavigationItems: SiteNavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/punjabi-school", label: "Punjabi School" },
  { href: "/contact", label: "Contact", emphasize: true },
];
