import { ROUTES } from "@/lib/routes";
import { BLOG_POSTS } from "@/lib/blog";

export function getRelatedPosts(slug: string, limit = 3) {
  const relatedMap: Record<string, string[]> = {
    "3rr-game-registration-login-guide": [
      "is-3rr-game-safe-pakistan",
      "3rr-game-bonuses-vip-referral-guide",
    ],
    "3rr-game-bonuses-vip-referral-guide": [
      "3rr-game-registration-login-guide",
      "is-3rr-game-safe-pakistan",
    ],
    "is-3rr-game-safe-pakistan": [
      "3rr-game-registration-login-guide",
      "3rr-game-bonuses-vip-referral-guide",
    ],
  };

  const slugs = relatedMap[slug] ?? BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, limit).map((p) => p.slug);
  return slugs
    .map((s) => BLOG_POSTS.find((p) => p.slug === s))
    .filter(Boolean)
    .slice(0, limit) as typeof BLOG_POSTS;
}

export const GUIDE_LINKS = [
  { href: ROUTES.download, label: "Download 3rr Game APK" },
  { href: ROUTES.deposit, label: "Deposit Money Guide" },
  { href: ROUTES.withdraw, label: "Withdraw Money Guide" },
  { href: ROUTES.register, label: "Register Account" },
  { href: ROUTES.login, label: "Login Guide" },
  { href: ROUTES.pc, label: "3rr Game for PC" },
] as const;

export const HOMEPAGE_BLOG_LINKS = [
  { slug: "3rr-game-registration-login-guide", label: "Registration & Login Guide" },
  { slug: "3rr-game-bonuses-vip-referral-guide", label: "Bonuses, VIP & Referral Guide" },
  { slug: "is-3rr-game-safe-pakistan", label: "Is 3rr Game Safe in Pakistan?" },
] as const;
