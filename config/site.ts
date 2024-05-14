export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Net Guru Solutions",
  description:
    "Net Guru Solutions is a software development company that provides web development, mobile app development, and digital marketing services.",
  navItems: [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
