export const ROUTES = {
  home: "/",
  download: "/download-teen-patti-spin",
  deposit: "/deposit-money-in-teen-patti-spin",
  withdraw: "/withdraw-money-from-teen-patti-spin",
  register: "/register-teen-patti-spin-account",
  login: "/login-teen-patti-spin",
  pc: "/teen-patti-spin-for-pc",
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
