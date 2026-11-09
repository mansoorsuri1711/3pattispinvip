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
    slug: "3rr-game-registration-login-guide",
    title: "3rr Game Registration and Login Guide for Pakistan",
    description:
      "Create a 3rr Game account and log in safely on Android. OTP binding, password tips, and fixes for common login errors in Pakistan.",
    datePublished: "2026-11-09",
    category: "Account",
    readTime: "7 min read",
    howToSteps: [
      "Install the official 3rr Game APK from 3rrgame.co",
      "Open Register and enter a reachable mobile number or email",
      "Verify with the OTP sent to your device",
      "Set a strong unique password and save it offline",
      "Bind profile details before larger deposits",
      "Use Login with the same credentials on return visits",
      "Reset via Forgot Password if access is lost",
    ],
  },
  {
    slug: "3rr-game-bonuses-vip-referral-guide",
    title: "3rr Game Bonuses, VIP Levels and Referral Guide",
    description:
      "Understand 3rr Game welcome offers, recharge rebates, VIP progress, and invite rewards — plus how to check promo terms before you deposit.",
    datePublished: "2026-11-09",
    category: "Bonuses",
    readTime: "8 min read",
    howToSteps: [
      "Open Events or Promo after logging into 3rr Game",
      "Read the welcome or first-deposit offer wording carefully",
      "Check recharge rebate percentages before topping up",
      "Open VIP or Member tabs to see level progress",
      "Copy your invite code from the referral or agent screen",
      "Share only with people who want to register themselves",
      "Track commission history before planning larger invites",
    ],
  },
  {
    slug: "is-3rr-game-safe-pakistan",
    title: "Is 3rr Game Safe in Pakistan? Checks and Risk Guide",
    description:
      "Practical 3rr Game safety checks for Pakistan: APK source, permissions, account security, payment records, legal uncertainty, and responsible limits.",
    datePublished: "2026-11-09",
    category: "Safety",
    readTime: "7 min read",
    howToSteps: [
      "Download only from the official button on 3rrgame.co",
      "Review Android install permissions before opening the APK",
      "Enable OTP binding and never share passwords in chats",
      "Test JazzCash or EasyPaisa with a small deposit first",
      "Run a small withdrawal to confirm payout binding",
      "Keep screenshots of every wallet transaction",
      "Set a weekly budget and stop when the limit is hit",
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
