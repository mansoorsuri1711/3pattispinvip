import { ROUTES } from "@/lib/routes";
import { BLOG_POSTS } from "@/lib/blog";

export function getRelatedPosts(slug: string, limit = 3) {
  const relatedMap: Record<string, string[]> = {
    "create-teen-patti-spin-account-and-login": [
      "is-teen-patti-spin-safe-pakistan",
      "teen-patti-spin-bonuses-vip-guide",
      "teen-patti-spin-tips-to-win",
    ],
    "teen-patti-spin-bonuses-vip-guide": [
      "create-teen-patti-spin-account-and-login",
      "teen-patti-spin-tips-to-win",
      "is-teen-patti-spin-safe-pakistan",
    ],
    "is-teen-patti-spin-safe-pakistan": [
      "create-teen-patti-spin-account-and-login",
      "teen-patti-spin-tips-to-win",
      "teen-patti-spin-bonuses-vip-guide",
    ],
    "teen-patti-spin-tips-to-win": [
      "teen-patti-spin-bonuses-vip-guide",
      "is-teen-patti-spin-safe-pakistan",
      "create-teen-patti-spin-account-and-login",
    ],
  };

  const slugs = relatedMap[slug] ?? BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, limit).map((p) => p.slug);
  return slugs
    .map((s) => BLOG_POSTS.find((p) => p.slug === s))
    .filter(Boolean)
    .slice(0, limit) as typeof BLOG_POSTS;
}

export const GUIDE_LINKS = [
  { href: ROUTES.download, label: "Download Teen Patti Spin APK" },
  { href: ROUTES.deposit, label: "Deposit Money Guide" },
  { href: ROUTES.withdraw, label: "Withdraw Money Guide" },
  { href: ROUTES.register, label: "Register Account" },
  { href: ROUTES.login, label: "Login Guide" },
  { href: ROUTES.pc, label: "Teen Patti Spin for PC" },
] as const;

export const HOMEPAGE_BLOG_LINKS = [
  { slug: "create-teen-patti-spin-account-and-login", label: "Account & Login Guide" },
  { slug: "teen-patti-spin-bonuses-vip-guide", label: "Bonuses, VIP & Referral Guide" },
  { slug: "is-teen-patti-spin-safe-pakistan", label: "Is Teen Patti Spin Safe in Pakistan?" },
  { slug: "teen-patti-spin-tips-to-win", label: "Tips to Play Smarter" },
] as const;
