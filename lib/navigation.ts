export interface NavItem {
  name: string;
  href: string;
  description?: string;
}

export const NAVIGATION: NavItem[] = [
  { name: "Home", href: "/", description: "Back to home" },
  {
    name: "Experience",
    href: "/experience",
    description: "View my experience",
  },
  { name: "About", href: "/about", description: "Learn about me" },
  { name: "Projects", href: "/projects", description: "See my projects" },
  { name: "Contact", href: "/contact", description: "Get in touch" },
];
