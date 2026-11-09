import { SITE_ORIGIN, SITE_NAME } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import { ROUTES } from "@/lib/routes";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  category: string;
  readTime: string;
  howToSteps: string[];
};

/** SERP-driven posts only — unique intents not covered by Download/Deposit/Withdraw/PC pages */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "create-teen-patti-spin-account-and-login",
    title: "How to Create a Teen Patti Spin Account and Login",
    description:
      "Create a Teen Patti Spin account and log in safely on Android. OTP binding, password tips, and fixes for common login errors in Pakistan.",
    datePublished: "2026-11-09",
    category: "Account",
    readTime: "7 min read",
    howToSteps: [
      "Install the official Teen Patti Spin APK from teenpattispin-vip.com",
      "Open Register and enter a reachable mobile number or email",
      "Verify with the OTP sent to your device",
      "Set a strong unique password and save it offline",
      "Bind profile details before larger deposits",
      "Use Login with the same credentials on return visits",
      "Reset via Forgot Password if access is lost",
    ],
  },
  {
    slug: "teen-patti-spin-bonuses-vip-guide",
    title: "Teen Patti Spin Bonuses, VIP Levels and Referral Guide",
    description:
      "Understand Teen Patti Spin welcome offers, 111 bonus, recharge rebates, VIP progress, spin wheel rewards, and invite commissions — plus how to check promo terms before you deposit.",
    datePublished: "2026-11-09",
    category: "Bonuses",
    readTime: "8 min read",
    howToSteps: [
      "Open Events or Promo after logging into Teen Patti Spin",
      "Read the welcome or first-deposit offer wording carefully",
      "Check recharge rebate percentages before topping up",
      "Open VIP or Member tabs to see level progress",
      "Try the spin wheel only with free or promo spins when available",
      "Copy your invite code from the referral or agent screen",
      "Track commission history before planning larger invites",
    ],
  },
  {
    slug: "is-teen-patti-spin-safe-pakistan",
    title: "Is Teen Patti Spin Safe in Pakistan? Checks and Risk Guide",
    description:
      "Practical Teen Patti Spin safety checks for Pakistan: APK source, permissions, account security, payment records, legal uncertainty, and responsible limits.",
    datePublished: "2026-11-09",
    category: "Safety",
    readTime: "7 min read",
    howToSteps: [
      "Download only from the official button on teenpattispin-vip.com",
      "Review Android install permissions before opening the APK",
      "Enable OTP binding and never share passwords in chats",
      "Test JazzCash or EasyPaisa with a small deposit first",
      "Run a small withdrawal to confirm payout binding",
      "Keep screenshots of every wallet transaction",
      "Set a weekly budget and stop when the limit is hit",
    ],
  },
  {
    slug: "teen-patti-spin-tips-to-win",
    title: "Teen Patti Spin Tips to Win: Smart Play for Pakistan",
    description:
      "Practical Teen Patti Spin tips for Classic, Joker, Muflis and AK47 tables, bankroll limits, bonus use, and avoiding common mistakes Pakistani players make.",
    datePublished: "2026-11-09",
    category: "Tips",
    readTime: "8 min read",
    howToSteps: [
      "Learn hand rankings before raising stakes on Teen Patti tables",
      "Start with lower blinds until you understand table pace",
      "Check Events for rebates before every deposit",
      "Set a session PKR limit and walk away when it is reached",
      "Avoid chasing losses after a cold streak",
      "Cash out part of larger wins instead of replaying everything",
      "Keep only the official APK installed on your phone",
    ],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function blogPostUrl(slug: string) {
  return `${ROUTES.blog}/${slug}`;
}

export const blogPublisher = {
  "@type": "Organization" as const,
  name: SITE_NAME,
  url: SITE_ORIGIN,
  logo: {
    "@type": "ImageObject" as const,
    url: `${SITE_ORIGIN}${IMAGES.app}`,
    ...imageObjectLicensing,
  },
};
