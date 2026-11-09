import { ROUTES } from "@/lib/routes";
import { BLOG_POSTS } from "@/lib/blog";

export function getRelatedPosts(slug: string, limit = 3) {
  const relatedMap: Record<string, string[]> = {
    "create-3-patti-world-account-and-login": [
      "is-3-patti-world-safe-pakistan",
      "3-patti-world-bonuses-vip-guide",
      "3-patti-world-tips-to-win",
    ],
    "3-patti-world-bonuses-vip-guide": [
      "create-3-patti-world-account-and-login",
      "3-patti-world-tips-to-win",
      "is-3-patti-world-safe-pakistan",
    ],
    "is-3-patti-world-safe-pakistan": [
      "create-3-patti-world-account-and-login",
      "3-patti-world-tips-to-win",
      "3-patti-world-bonuses-vip-guide",
    ],
    "3-patti-world-tips-to-win": [
      "3-patti-world-bonuses-vip-guide",
      "is-3-patti-world-safe-pakistan",
      "create-3-patti-world-account-and-login",
    ],
  };

  const slugs = relatedMap[slug] ?? BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, limit).map((p) => p.slug);
  return slugs
    .map((s) => BLOG_POSTS.find((p) => p.slug === s))
    .filter(Boolean)
    .slice(0, limit) as typeof BLOG_POSTS;
}

export const GUIDE_LINKS = [
  { href: ROUTES.download, label: "Download 3 Patti World APK" },
  { href: ROUTES.deposit, label: "Deposit Money Guide" },
  { href: ROUTES.withdraw, label: "Withdraw Money Guide" },
  { href: ROUTES.register, label: "Register Account" },
  { href: ROUTES.login, label: "Login Guide" },
  { href: ROUTES.pc, label: "3 Patti World for PC" },
] as const;

export const HOMEPAGE_BLOG_LINKS = [
  { slug: "create-3-patti-world-account-and-login", label: "Account & Login Guide" },
  { slug: "3-patti-world-bonuses-vip-guide", label: "Bonuses, VIP & Referral Guide" },
  { slug: "is-3-patti-world-safe-pakistan", label: "Is 3 Patti World Safe in Pakistan?" },
  { slug: "3-patti-world-tips-to-win", label: "Tips to Play Smarter" },
] as const;
