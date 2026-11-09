export const ROUTES = {
  home: "/",
  download: "/download-3rr-game",
  deposit: "/deposit-money-in-3rr-game",
  withdraw: "/withdraw-money-from-3rr-game",
  register: "/register-3rr-game-account",
  login: "/login-3rr-game",
  pc: "/3rr-game-for-pc",
  blog: "/blog",
  about: "/about-us",
  contact: "/contact-us",
  privacy: "/privacy-policy",
  disclaimer: "/disclaimer",
} as const;

export const NAV_LINKS = [
  { href: ROUTES.home, label: "Home" },
  { href: ROUTES.download, label: "Download" },
  { href: ROUTES.register, label: "Register" },
  { href: ROUTES.login, label: "Login" },
  { href: ROUTES.deposit, label: "Deposit" },
  { href: ROUTES.withdraw, label: "Withdraw" },
  { href: ROUTES.pc, label: "PC Version" },
  { href: ROUTES.blog, label: "Blog" },
] as const;

export const FOOTER_GUIDE_LINKS = [
  { href: ROUTES.download, label: "Download Guide" },
  { href: ROUTES.register, label: "Register Account" },
  { href: ROUTES.login, label: "Login Guide" },
  { href: ROUTES.deposit, label: "Deposit Guide" },
  { href: ROUTES.withdraw, label: "Withdraw Guide" },
  { href: ROUTES.pc, label: "PC Version" },
  { href: ROUTES.blog, label: "Blog" },
] as const;

export const FOOTER_INFO_LINKS = [
  { href: ROUTES.about, label: "About Us" },
  { href: ROUTES.contact, label: "Contact Us" },
  { href: ROUTES.privacy, label: "Privacy Policy" },
  { href: ROUTES.disclaimer, label: "Disclaimer" },
] as const;
