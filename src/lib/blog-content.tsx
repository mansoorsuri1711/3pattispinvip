import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { createSingleBrandLinker } from "@/components/BrandText";

export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  footerLink?: { href: string; label: string };
};

export const BLOG_ARTICLE_CONTENT: Record<string, { articleBody: string; sections: BlogSection[] }> = {
  "3rr-game-registration-login-guide": {
    articleBody:
      "Register on 3rr Game with a reachable phone or email, verify OTP, set a strong password, then log in the same way on every return visit. Binding profile details early reduces deposit and withdraw friction for Pakistani players.",
    sections: [
      {
        paragraphs: [
          "Most 3rr Game searches in Pakistan start with one practical question: how do I create an account and get back into it later without losing the wallet? Registration and login look simple, but small mistakes — wrong keyboard language, reused passwords, or skipping OTP binding — cause the majority of support tickets we see described across player forums.",
          "This guide walks through a clean first-time setup on Android, then covers daily login habits and recovery options. For the APK install path itself, use the dedicated download page and return here once the app opens.",
        ],
        footerLink: {
          href: ROUTES.download,
          label: "Download the official 3rr Game APK first",
        },
      },
      {
        heading: "How to Register a New 3rr Game Account",
        paragraphs: [
          "Open the freshly installed 3rr Game app on a stable Jazz, Zong, Telenor, or Ufone connection. Choose Register rather than guest play if you plan to deposit, because guest sessions are harder to recover after a reinstall.",
        ],
        list: [
          "Enter a mobile number or email you can open immediately for OTP",
          "Create a password that mixes letters, numbers, and at least one symbol",
          "Confirm OTP before leaving the registration screen",
          "Complete any profile or security prompts the lobby shows next",
          "Save your user ID offline — screenshots help if support ever asks",
        ],
      },
      {
        heading: "How to Log In to 3rr Game",
        paragraphs: [
          "On return visits, tap Login and use the same identifier you registered with. If the phone keeps switching to Urdu or another keyboard layout, switch back to English numbers before typing the password so digits are not mistyped.",
        ],
        list: [
          "Confirm you are opening the official 3rr Game icon, not a renamed clone",
          "Enter mobile/email and password carefully",
          "Avoid logging into multiple devices at the same moment if the app warns about sessions",
          "After login, open Wallet once to confirm the balance matches your last session",
        ],
        footerLink: {
          href: ROUTES.login,
          label: "Full 3rr Game login walkthrough",
        },
      },
      {
        heading: "Fix Common Registration and Login Problems",
        paragraphs: [
          "OTP delays usually come from weak signal or SMS filters. Wait a minute, request a new code, and keep the app in the foreground. If login fails after a password change, force-close the app, reopen it, and try again before clearing cache.",
        ],
        list: [
          "No OTP: switch between WiFi and mobile data, then resend",
          "Wrong password: use Forgot Password instead of creating a second account",
          "Account already exists: stop registering and recover the original login",
          "App closes on login: update to the latest APK from 3rrgame.co",
        ],
        footerLink: {
          href: `${ROUTES.blog}/is-3rr-game-safe-pakistan`,
          label: "Also read: is 3rr Game safe in Pakistan?",
        },
      },
      {
        heading: "Protect the Account Before You Deposit",
        paragraphs: [
          "Bind payout details only after you trust the login works. Never share OTPs in WhatsApp groups. Once the account is stable, follow the deposit guide for JazzCash and EasyPaisa steps, and keep one small test top-up before larger amounts.",
        ],
        footerLink: {
          href: ROUTES.deposit,
          label: "Continue to the 3rr Game deposit guide",
        },
      },
    ],
  },
  "3rr-game-bonuses-vip-referral-guide": {
    articleBody:
      "3rr Game bonuses usually include welcome or first-deposit offers, recharge rebates, VIP progress, and invite commissions. Always read event terms in the app before depositing, because percentages and wagering rules change by campaign.",
    sections: [
      {
        paragraphs: [
          "Players searching for 3rr Game bonuses want clarity, not vague promises of unlimited earnings. Inside the app, promotions typically live under Events, Promo, VIP, or Invite tabs. Each offer has its own timing, minimum deposit, and sometimes a playthrough requirement before withdrawal.",
          "Treat bonuses as optional value that can stretch a planned budget — never as guaranteed income. The sections below explain how the main reward types usually work so you can verify them against the live screens in your version of 3rr Game.",
        ],
      },
      {
        heading: "Welcome and First Deposit Offers",
        paragraphs: [
          "New accounts often see a starter pack or matched deposit after the first successful JazzCash or EasyPaisa top-up. The exact percentage appears only inside the current event card. Screenshot the offer before you pay so you can compare it with the credited bonus chips or cash.",
        ],
        list: [
          "Read whether the bonus is cash, chips, or event tickets",
          "Note the minimum deposit required to unlock it",
          "Check if the reward expires after a set number of hours",
          "Confirm credited amount in Wallet before starting high-stake tables",
        ],
      },
      {
        heading: "Recharge Rebates and Member-Day Boosts",
        paragraphs: [
          "Recharge rebates return a slice of eligible deposits as extra balance. Member-day or VIP day boosts may raise that percentage temporarily. Regular players who check the rebate board before topping up usually get more value than players who deposit blindly.",
        ],
        footerLink: {
          href: ROUTES.deposit,
          label: "See JazzCash & EasyPaisa deposit steps",
        },
      },
      {
        heading: "VIP Levels Inside 3rr Game",
        paragraphs: [
          "VIP or member progress usually tracks deposit volume or gameplay milestones. Higher levels can unlock better rebate rates, faster review on cash-outs, or exclusive event entries. Progress meters reset or tier up according to the rules shown in the VIP panel — always trust the in-app meter over third-party screenshots.",
        ],
      },
      {
        heading: "Invite Friends and Referral Rewards",
        paragraphs: [
          "The invite screen lets you copy a code, share a link, or show a QR. Rewards typically unlock when a new player registers through your invite and completes required activity such as a first deposit. Commission dashboards help you track which invites are active.",
        ],
        list: [
          "Share invites only with people who understand real-money risk",
          "Do not buy fake referrals — apps often claw back abuse",
          "Keep your own deposit habits separate from commission goals",
          "Withdraw referral earnings with the same JazzCash or EasyPaisa binding you already verified",
        ],
        footerLink: {
          href: ROUTES.withdraw,
          label: "How to withdraw 3rr Game winnings",
        },
      },
      {
        heading: "Bonus Mistakes to Avoid",
        paragraphs: [
          "Chasing every banner without reading terms is the fastest way to overspend. Stacking deposits just to hit a rebate threshold can erase the value of the rebate itself. If an offer looks unclear, skip it and play with a fixed budget instead.",
        ],
        footerLink: {
          href: `${ROUTES.blog}/is-3rr-game-safe-pakistan`,
          label: "Pair this with the 3rr safety checklist",
        },
      },
    ],
  },
  "is-3rr-game-safe-pakistan": {
    articleBody:
      "3rr Game can be used more safely when you control the APK source, permissions, OTPs, and payment records — but real-money play still carries financial and legal uncertainty in Pakistan. Use small tests, budgets, and verified JazzCash or EasyPaisa flows.",
    sections: [
      {
        paragraphs: [
          "Search interest around “is 3rr Game safe” usually mixes three concerns: malware in random APKs, whether withdrawals actually arrive, and whether real-money gaming is appropriate under local rules. No review site can remove those risks entirely. What we can do is show practical checks that reduce avoidable harm.",
          "This article is an editorial safety checklist for Pakistani Android users — not legal advice and not a guarantee of profit or payout speed.",
        ],
      },
      {
        heading: "1. Control the APK Source",
        paragraphs: [
          "Clone sites and Telegram forwards often rename APKs. Download only through the official button on 3rrgame.co, then verify the install prompt shows the expected 3rr Game name before you tap Install.",
        ],
        list: [
          "Avoid unknown drive links and “mod” packages that promise free balance",
          "Uninstall previous unofficial copies before installing a fresh APK",
          "Keep the file size roughly in line with the published 5.7MB build when possible",
        ],
        footerLink: {
          href: ROUTES.download,
          label: "Official 3rr Game download guide",
        },
      },
      {
        heading: "2. Review Permissions and Account Security",
        paragraphs: [
          "Grant only the permissions needed to install and run. After first launch, bind a reachable phone or email, enable OTP checks, and never paste passwords into chat support that messages you first.",
        ],
        footerLink: {
          href: `${ROUTES.blog}/3rr-game-registration-login-guide`,
          label: "Secure registration and login steps",
        },
      },
      {
        heading: "3. Test Payments with Small Amounts",
        paragraphs: [
          "Before depositing a full budget, send a small JazzCash or EasyPaisa top-up and confirm the wallet updates. Then request a small withdrawal to the same bound number. Keep screenshots of each stage — they are essential if support needs a transaction ID.",
        ],
        list: [
          "Match the wallet name and number to your own account",
          "Do not approve MPIN prompts you did not start inside 3rr Game",
          "Stop depositing if balances fail to update after several minutes",
        ],
        footerLink: {
          href: ROUTES.withdraw,
          label: "Withdrawal checklist for JazzCash & EasyPaisa",
        },
      },
      {
        heading: "4. Legal and Responsible Play Notes",
        paragraphs: [
          "Real-money gaming sits in a grey area for many users in Pakistan. You are responsible for understanding local rules that apply to you. Set a weekly spending limit, treat bonuses as optional, and stop when play stops feeling like entertainment.",
        ],
        list: [
          "No income is guaranteed — tables and slots can lose money quickly",
          "Do not play while stressed or trying to recover losses",
          "Keep 3rr Game off shared family phones if minors can open it",
        ],
      },
      {
        heading: "Bottom Line",
        paragraphs: [
          "3rr Game is safer when the APK path, account binding, and payment tests are under your control. It is never risk-free. If any check fails — unexpected permissions, missing balance, or pressure to deposit more — pause and reassess before continuing.",
        ],
        footerLink: {
          href: ROUTES.disclaimer,
          label: "Read the full site disclaimer",
        },
      },
    ],
  },
};

export function BlogArticleBody({ slug }: { slug: string }) {
  const content = BLOG_ARTICLE_CONTENT[slug];
  if (!content) return null;

  const Brand = createSingleBrandLinker();

  return (
    <>
      {content.sections.map((section, index) => (
        <section key={`${slug}-${index}`} className="space-y-4">
          {section.heading && (
            <h2 className="text-xl md:text-2xl font-semibold text-white">{section.heading}</h2>
          )}
          {section.paragraphs?.map((paragraph, pIndex) => (
            <p key={`${slug}-p-${index}-${pIndex}`}>
              <Brand text={paragraph} />
            </p>
          ))}
          {section.list && section.list.length > 0 && (
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {section.list.map((item) => (
                <li key={item} className="leading-relaxed">
                  <Brand text={item} />
                </li>
              ))}
            </ul>
          )}
          {section.footerLink && (
            <p>
              <Link
                href={section.footerLink.href}
                className="text-accent hover:text-accent-light font-medium"
              >
                {section.footerLink.label}
              </Link>
            </p>
          )}
        </section>
      ))}
    </>
  );
}
