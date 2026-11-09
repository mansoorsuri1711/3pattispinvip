import Image from "next/image";
import Link from "next/link";
import Script from 'next/script';
import { Metadata } from 'next';
import DownloadButton from '@/components/DownloadButton';
import BrandText from '@/components/BrandText';
import AppInfoTable from '@/components/AppInfoTable';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import { IMAGES, APP_ICON_SIZE } from '@/lib/images';
import {
  SITE_NAME,
  SITE_ORIGIN,
  SITE_DOMAIN,
  SITE_TITLE,
  SITE_META_DESCRIPTION,
  SEO_KEYWORDS,
  APP_VERSION,
  APP_SIZE,
  DOWNLOAD_URL,
  APP_RATING_VALUE,
  APP_RATING_COUNT,
} from '@/lib/site';
import { ROUTES } from '@/lib/routes';
import { DEPOSIT_STEPS, WITHDRAW_STEPS, DOWNLOAD_STEPS } from '@/lib/guide-steps';
import { HOMEPAGE_BLOG_LINKS } from '@/lib/internal-links';
import { breadcrumbSchema, buildSchemaGraph, faqPageSchema, howToSchema, webPageSchema, absoluteUrl } from '@/lib/schema';

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_META_DESCRIPTION,
  keywords: [...SEO_KEYWORDS],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_META_DESCRIPTION,
    images: [{ url: `${SITE_ORIGIN}${IMAGES.app}`, width: APP_ICON_SIZE.width, height: APP_ICON_SIZE.height, alt: '3rr Game official app icon for Pakistan' }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_META_DESCRIPTION,
    images: [`${SITE_ORIGIN}${IMAGES.app}`]
  }
};

const tocItems = [
  { id: 'overview', label: '3rr Game Overview' },
  { id: 'what-is-3rr-game', label: 'What Is 3rr Game?' },
  { id: 'why-trending', label: 'Why It Trends in Pakistan' },
  { id: 'features', label: 'Main Features' },
  { id: 'popular-games', label: 'Popular Games' },
  { id: 'bonuses', label: 'Bonuses & Invite Rewards' },
  { id: 'how-to-download', label: 'How to Download' },
  { id: 'system-requirements', label: 'Device Requirements' },
  { id: 'register-login', label: 'Register & Login' },
  { id: 'payments', label: 'JazzCash & EasyPaisa' },
  { id: 'how-to-add-money', label: 'How to Add Money' },
  { id: 'how-to-withdraw', label: 'How to Withdraw' },
  { id: 'smart-tips', label: 'Smarter Play Tips' },
  { id: 'version', label: 'What Changed in V1.0.36' },
  { id: 'pros-cons', label: 'Pros & Cons' },
  { id: 'safety', label: 'Safety Checklist' },
  { id: 'guides', label: 'Helpful Guides' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const faqs = [
  {
    q: 'What is 3rr Game?',
    a: '3rr Game is an Android real-money gaming app popular in Pakistan. One lobby mixes slots, card tables, fishing rooms and live-style games. Players fund wallets with JazzCash or EasyPaisa and can request withdrawals after verified play.',
  },
  {
    q: 'How do I download the 3rr Game APK?',
    a: `Open ${SITE_DOMAIN}, tap Download Now, allow installs from that source, then open the APK and install. Full steps are on our download guide.`,
  },
  {
    q: 'What is the latest 3rr Game version?',
    a: `The current guide covers ${APP_VERSION} (about ${APP_SIZE}). Always install from the official button on this site so you avoid renamed clone files.`,
  },
  {
    q: 'How do I add money in 3rr Game?',
    a: 'Log in, open Deposit, choose JazzCash or EasyPaisa, enter the amount, approve with your wallet MPIN, then wait for the balance update. See the deposit guide for troubleshooting.',
  },
  {
    q: 'How do I withdraw money from 3rr Game?',
    a: 'Open Wallet → Withdraw, select JazzCash or EasyPaisa, confirm bound details, submit the amount, and keep the transaction ID. Many cash-outs arrive within minutes after approval.',
  },
  {
    q: 'Is 3rr Game free to download?',
    a: 'Yes. Downloading and registering is free (0 PKR). Real-money tables and slots require a wallet deposit. There is no guaranteed income.',
  },
  {
    q: 'Can I play 3rr Game on PC?',
    a: 'Yes. Install an Android emulator such as BlueStacks or LDPlayer on Windows, then install the same APK. Follow our PC version guide for a safer setup.',
  },
  {
    q: 'Is 3rr Game available on iOS?',
    a: 'Not yet as a native App Store build in this guide. Use Android or a PC emulator until an official iOS release is confirmed.',
  },
  {
    q: 'Does 3rr Game support JazzCash and EasyPaisa?',
    a: 'Yes. Both wallets are the main deposit and withdrawal methods for Pakistani players. Always match the number to your own account and test with a small amount first.',
  },
  {
    q: 'Is 3rr Game safe?',
    a: 'Safety improves when you control the APK source, OTPs, and payment tests — but real-money play still carries financial and legal uncertainty. Read our safety guide before depositing larger amounts.',
  },
];

export default function Home() {
  const schemaData = buildSchemaGraph(
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      "url": `${SITE_ORIGIN}/`,
      "name": SITE_NAME,
      "description": SITE_META_DESCRIPTION,
      "inLanguage": "en-US",
      "publisher": { "@id": `${SITE_ORIGIN}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_ORIGIN}/#organization`,
      "name": SITE_NAME,
      "url": SITE_ORIGIN,
      "logo": `${SITE_ORIGIN}${IMAGES.app}`,
    },
    breadcrumbSchema([{ name: "Home", path: ROUTES.home }]),
    webPageSchema({
      url: SITE_ORIGIN,
      name: SITE_TITLE,
      description: SITE_META_DESCRIPTION,
      pageId: `${SITE_ORIGIN}/#webpage`,
    }),
    {
      "@type": "SoftwareApplication",
      "name": SITE_NAME,
      "operatingSystem": "Android 6.0+",
      "applicationCategory": "GameApplication",
      "softwareVersion": APP_VERSION,
      "fileSize": APP_SIZE,
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PKR" },
      "downloadUrl": DOWNLOAD_URL,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": APP_RATING_VALUE,
        "bestRating": "5",
        "ratingCount": APP_RATING_COUNT,
      },
    },
    faqPageSchema(faqs.map(({ q, a }) => ({ question: q, answer: a }))),
    howToSchema({
      name: "How to Download 3rr Game APK",
      description: "Install the official 3rr Game APK on Android from 3rrgame.co.",
      steps: [...DOWNLOAD_STEPS],
      url: absoluteUrl(ROUTES.download),
    }),
    howToSchema({
      name: "How to Add Money in 3rr Game",
      description: "Deposit PKR to your 3rr Game wallet with JazzCash or EasyPaisa.",
      steps: [...DEPOSIT_STEPS],
      url: absoluteUrl(ROUTES.deposit),
    }),
    howToSchema({
      name: "How to Withdraw Money from 3rr Game",
      description: "Cash out 3rr Game winnings to JazzCash or EasyPaisa.",
      steps: [...WITHDRAW_STEPS],
      url: absoluteUrl(ROUTES.withdraw),
    }),
  );

  return (
    <>
      <Script id="homepage-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <section className="relative py-12 md:py-20 px-4 md:px-8 bg-hero-glow">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2 space-y-6">
              <p className="text-sm font-semibold tracking-wide text-coral uppercase">
                Free · Android · Game · {APP_RATING_VALUE}★ ({Number(APP_RATING_COUNT).toLocaleString()}+)
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-white">3rr Game Download APK — </span>
                <span className="text-accent">Pakistan Real Money Lobby 2026</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                <BrandText text="3rr Game is a rising Android earning app in Pakistan with slots, card tables, fishing rooms and live-style games in one lobby. Fund your wallet with JazzCash or EasyPaisa, claim event bonuses, and withdraw winnings after verified play. This guide covers the official APK path, account setup, payments and safety checks for version 1.0.36." />
              </p>
              <div id="download" className="flex justify-center lg:justify-start pt-2">
                <DownloadButton />
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 ring-4 ring-accent/40 rounded-3xl overflow-hidden shadow-glow-lg bg-black">
                <Image
                  src={IMAGES.app}
                  alt="3rr Game official app icon for Pakistan Android download"
                  fill
                  className="object-contain p-2"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
          </div>

          <AppInfoTable />
          <ScreenshotGallery />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="lg:flex lg:gap-12">
          <aside className="hidden lg:block lg:w-72 flex-shrink-0">
            <nav className="sticky top-24 glass-card p-5">
              <h2 className="text-accent font-bold mb-4 text-sm uppercase tracking-wider">Table of Contents</h2>
              <ul className="space-y-1 max-h-[70vh] overflow-y-auto">
                {tocItems.map(({ id, label }) => (
                  <li key={id}>
                    <a href={`#${id}`} className="toc-link">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="flex-1 min-w-0 space-y-16">
            <nav className="lg:hidden glass-card p-5">
              <h2 className="text-accent font-bold mb-4">Table of Contents</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {tocItems.map(({ id, label }) => (
                  <li key={id}>
                    <a href={`#${id}`} className="toc-link text-xs">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <section id="overview">
              <h2 className="section-heading">3rr Game <span>Overview for Pakistani Players</span></h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Pakistani searchers looking for <strong className="text-white">3rr Game</strong> usually want four answers fast: where to get the APK, how JazzCash and EasyPaisa work, whether cash-outs arrive, and which games sit inside the lobby. This homepage is built around those intents instead of stacking empty “secure and trusted” claims.
                </p>
                <p>
                  The wallet side matters just as much as the games. Players can top up with JazzCash or EasyPaisa, track promo rebates, invite friends from the agent-style invite screen, and request withdrawals after binding payout details. If you want one compact APK for both short entertainment sessions and local-wallet cash play, 3rr Game is aimed at that routine.
                </p>
              </div>
            </section>

            <section id="what-is-3rr-game">
              <h2 className="section-heading">What Is <span>3rr Game</span> and Who Is It For?</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">3rr Game</strong> is an Android real-money gaming app for users who want quick sessions with a withdrawable balance. Unlike single-genre Teen Patti-only clones that dominate doorway SERPs, the lobby mixes Hot games, sports-style rooms, slots, cards, fishing, live casino and mini games.
                </p>
                <p>
                  The app fits beginners who need simple menus, as well as regular players who check VIP progress, recharge rebates and invite commissions. Students and workers who prefer short mobile sessions often start with lower stakes, then move into cards or slots once they understand the lobby. Responsible limits should stay part of every 3rr Game session.
                </p>
              </div>
            </section>

            <section id="why-trending">
              <h2 className="section-heading">Why <span>3rr Game</span> Is Trending in Pakistan</h2>
              <div className="space-y-6">
                {[
                  {
                    num: '01',
                    title: 'Local Wallet Familiarity',
                    text: 'JazzCash and EasyPaisa already sit on most Pakistani phones. When deposit and withdraw screens reuse those wallets, onboarding feels familiar instead of asking players to learn a foreign payment rail first.',
                  },
                  {
                    num: '02',
                    title: 'One Lobby, Many Session Lengths',
                    text: 'A five-minute slot spin and a longer card table can live in the same APK. That variety keeps the app useful on days when you want different pacing without installing multiple earning apps.',
                  },
                  {
                    num: '03',
                    title: 'Events and Invite Growth',
                    text: 'Promo tabs surface lucky spins, member-day deposit boosts, recharge rebates and VIP progress. The invite screen makes it easy to copy a code or QR for WhatsApp sharing when friends want to register themselves.',
                  },
                  {
                    num: '04',
                    title: 'Light APK Footprint',
                    text: `At roughly ${APP_SIZE}, the current ${APP_VERSION} build is easier to keep on mid-range Android phones that already store messaging and banking apps. A smaller package also makes reinstalls after a cache clear less painful.`,
                  },
                ].map(({ num, title, text }) => (
                  <div key={num} className="glass-card p-6 flex gap-4">
                    <span className="feature-number">{num}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                      <p className="text-gray-300 leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="features">
              <h2 className="section-heading">Main Features Inside the <span>3rr Game</span> App</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Real Cash Gameplay',
                    text: 'Tables and slots can use a real wallet balance after you deposit. Practice lightly at first so you learn stake sizes before joining higher rooms. Real-cash mode is optional entertainment — never a guaranteed salary.',
                  },
                  {
                    title: 'JazzCash & EasyPaisa Wallet Flow',
                    text: 'Deposit and withdraw screens surface Pakistan’s two most common mobile wallets. Matching the number to your own account and testing with a small amount first reduces most payment mistakes.',
                  },
                  {
                    title: 'Wide Game Lobby',
                    text: 'Hot games, cards, slots, fishing, live-style rooms and mini games sit in one navigation. Variety is a major reason searchers compare 3rr Game with thinner single-genre clones.',
                  },
                  {
                    title: 'Events, VIP and Rebate Hub',
                    text: 'Promo tabs collect lucky spins, member-day boosts, recharge rebates and VIP meters. Checking events before a deposit usually stretches a planned budget further than depositing blindly.',
                  },
                  {
                    title: 'Invite and Agent Earnings',
                    text: 'Copy a code, share a link or show a QR. When invited friends register and complete required activity, commission-style rewards can appear beside table results — without buying fake referrals.',
                  },
                  {
                    title: 'Light APK and Smooth Lobby',
                    text: `The compact ${APP_SIZE} package helps mid-range phones keep the lobby responsive. Regular updates in the ${APP_VERSION} line focus on payment screens and event stability.`,
                  },
                  {
                    title: 'Account Security Tools',
                    text: 'OTP binding, password login and profile details protect the wallet better than guest-only play. Bind early if you plan to deposit, and never share OTPs in chat groups.',
                  },
                  {
                    title: '24/7 In-App Support Paths',
                    text: 'Help or Support inside the app is the fastest place for deposit delays, login issues or withdrawal IDs. Keep screenshots ready before you open a ticket.',
                  },
                ].map(({ title, text }) => (
                  <div key={title} className="glass-card p-6">
                    <h3 className="text-lg font-semibold text-accent mb-3">{title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="popular-games">
              <h2 className="section-heading">Popular Games You Can Open in <span>3rr Game</span></h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Cards & Table Classics',
                    text: 'Teen Patti-style tables, Dragon vs Tiger and other quick card rooms suit players who like readable odds and short rounds.',
                  },
                  {
                    title: 'Slots & Hot Arcade Titles',
                    text: 'Slot rows and hot arcade picks work for short sessions when you only have a few minutes between tasks.',
                  },
                  {
                    title: 'Fishing, Live & Sports-Style Rooms',
                    text: 'Fishing rooms, live-style entries and sports-style boards expand the lobby beyond pure cards so the APK stays useful across moods.',
                  },
                ].map(({ title, text }) => (
                  <div key={title} className="glass-card p-6">
                    <h3 className="text-lg font-semibold text-accent mb-3">{title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="bonuses">
              <h2 className="section-heading">Bonuses, Rebates and Invite Rewards on <span>3rr Game</span></h2>
              <p className="text-gray-300 mb-6">
                Offers change by campaign. Always read the live event card inside the app before you deposit. For a deeper walkthrough, see our{" "}
                <Link href={`${ROUTES.blog}/3rr-game-bonuses-vip-referral-guide`} className="text-accent hover:text-accent-light font-medium">
                  bonuses, VIP and referral guide
                </Link>
                .
              </p>
              <div className="space-y-4">
                {[
                  {
                    num: '01',
                    title: 'New Player and First Deposit Offers',
                    text: 'Starter packs or matched deposits may credit after your first successful JazzCash or EasyPaisa top-up. Screenshot the offer wording so you can compare it with the credited amount.',
                  },
                  {
                    num: '02',
                    title: 'Recharge Rebate and Member Day Boosts',
                    text: 'Rebates return a slice of eligible deposits. Member-day boosts can raise that percentage temporarily — check the board before topping up.',
                  },
                  {
                    num: '03',
                    title: 'Invite Friends and Agent Commission',
                    text: 'Share your invite only with people who understand real-money risk. Track commission history in the invite dashboard before planning larger outreach.',
                  },
                ].map(({ num, title, text }) => (
                  <div key={num} className="glass-card p-5 flex gap-4">
                    <span className="feature-number">{num}</span>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="how-to-download">
              <h2 className="section-heading">How to Download the Official <span>3rr Game</span> APK</h2>
              <div className="glass-card p-6 mb-6">
                <h3 className="text-xl font-semibold text-accent mb-4">For Android</h3>
                <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                  {DOWNLOAD_STEPS.map((step, i) => (
                    <li key={i} className="leading-relaxed">{step}</li>
                  ))}
                </ol>
                <p className="text-gray-400 mt-4 text-sm">
                  Need a longer walkthrough? Visit the{" "}
                  <Link href={ROUTES.download} className="text-accent hover:text-accent-light font-medium">
                    dedicated download page
                  </Link>
                  .
                </p>
              </div>
              <div className="glass-card p-6 mb-6">
                <h3 className="text-xl font-semibold text-accent mb-4">
                  For iOS
                  <span className="ml-2 text-xs font-bold uppercase tracking-wide text-black bg-accent px-2 py-0.5 rounded-full align-middle">
                    Coming Soon
                  </span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  A native iPhone build is not confirmed in this guide. Use Android or follow the{" "}
                  <Link href={ROUTES.pc} className="text-accent hover:text-accent-light font-medium">
                    PC emulator guide
                  </Link>{" "}
                  until an official iOS release appears.
                </p>
              </div>
              <div className="flex justify-center mt-8">
                <DownloadButton />
              </div>
            </section>

            <section id="system-requirements">
              <h2 className="section-heading">Device Requirements for <span>3rr Game</span></h2>
              <div className="glass-card overflow-hidden">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>System</th>
                      <th>Android</th>
                      <th>iOS</th>
                      <th>PC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Operating System', 'Android 6.0+', 'Coming Soon', 'Windows 10 or 11'],
                      ['RAM', '2GB+', '—', '4GB+'],
                      ['Storage', '100MB free', '—', '2GB free for emulator'],
                      ['Internet', 'Stable 4G / WiFi', '—', 'Stable broadband'],
                    ].map(([sys, android, ios, pc]) => (
                      <tr key={sys}>
                        <td className="font-medium text-white">{sys}</td>
                        <td>{android}</td>
                        <td>{ios}</td>
                        <td>{pc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="register-login">
              <h2 className="section-heading">Create an Account and Login on <span>3rr Game</span></h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-accent mb-4">Registration Steps</h3>
                  <ol className="space-y-2 text-gray-300 list-decimal list-inside text-sm">
                    {[
                      'Install the official APK from this site.',
                      'Open Register and enter a reachable mobile number or email.',
                      'Verify with OTP and set a strong unique password.',
                      'Bind profile details before larger deposits.',
                      'Open the lobby and review events first.',
                    ].map((step, i) => (
                      <li key={i} className="leading-relaxed">{step}</li>
                    ))}
                  </ol>
                  <p className="text-gray-400 mt-4 text-sm">
                    Full detail:{" "}
                    <Link href={`${ROUTES.blog}/3rr-game-registration-login-guide`} className="text-accent hover:text-accent-light">
                      registration & login guide
                    </Link>
                    .
                  </p>
                </div>
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-accent mb-4">Login Steps</h3>
                  <ol className="space-y-2 text-gray-300 list-decimal list-inside text-sm">
                    {[
                      'Open the official 3rr Game icon.',
                      'Tap Login and enter the same mobile/email.',
                      'Type your password carefully.',
                      'Use Forgot Password + OTP if access is lost.',
                      'Confirm wallet balances after you enter.',
                    ].map((step, i) => (
                      <li key={i} className="leading-relaxed">{step}</li>
                    ))}
                  </ol>
                  <p className="text-gray-400 mt-4 text-sm">
                    Also see the{" "}
                    <Link href={ROUTES.login} className="text-accent hover:text-accent-light">
                      login page
                    </Link>{" "}
                    and{" "}
                    <Link href={ROUTES.register} className="text-accent hover:text-accent-light">
                      register page
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            <section id="payments">
              <h2 className="section-heading">JazzCash, EasyPaisa and Wallet Options in <span>3rr Game</span></h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'JazzCash',
                    text: 'Use your own JazzCash number, approve the MPIN only for deposits you started, and keep the SMS confirmation.',
                  },
                  {
                    title: 'EasyPaisa',
                    text: 'Same rule as JazzCash — match the name and number, avoid third-party “agent deposit” chats, and verify the credit in Wallet.',
                  },
                  {
                    title: 'Scan / Online Wallet Options',
                    text: 'If the app shows scan or online wallet rails, treat them like any other payment: confirm the amount on-screen before approving.',
                  },
                ].map(({ title, text }) => (
                  <div key={title} className="glass-card p-6">
                    <h3 className="text-lg font-semibold text-accent mb-3">{title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="how-to-add-money">
              <h2 className="section-heading">How to Add Money to Your <span>3rr Game</span> Wallet</h2>
              <div className="glass-card p-6">
                <p className="text-gray-400 mb-4 text-sm">
                  Full screenshots and troubleshooting live on the{" "}
                  <Link href={ROUTES.deposit} className="text-accent hover:text-accent-light font-medium">
                    deposit money guide →
                  </Link>
                </p>
                <ol className="space-y-2 text-gray-300 list-decimal list-inside text-sm">
                  {DEPOSIT_STEPS.map((step, i) => (
                    <li key={i} className="leading-relaxed">{step}</li>
                  ))}
                </ol>
              </div>
            </section>

            <section id="how-to-withdraw">
              <h2 className="section-heading">How to Withdraw Winnings from <span>3rr Game</span></h2>
              <div className="glass-card p-6">
                <p className="text-gray-400 mb-4 text-sm">
                  See limits, binding tips and cash-out checks on the{" "}
                  <Link href={ROUTES.withdraw} className="text-accent hover:text-accent-light font-medium">
                    withdrawal guide →
                  </Link>
                </p>
                <ol className="space-y-2 text-gray-300 list-decimal list-inside text-sm">
                  {WITHDRAW_STEPS.map((step, i) => (
                    <li key={i} className="leading-relaxed">{step}</li>
                  ))}
                </ol>
              </div>
            </section>

            <section id="smart-tips">
              <h2 className="section-heading">Practical Tips to Play Smarter on <span>3rr Game</span></h2>
              <ul className="space-y-2 text-gray-300 list-disc list-inside glass-card p-6">
                {[
                  'Start with lower stakes until you understand each room’s pace.',
                  'Check Events before depositing so rebates are not left unused.',
                  'Keep one account per device and protect OTPs.',
                  'Use the official APK only — renamed clones are a common malware path.',
                  'Set a weekly PKR limit and stop when it is reached.',
                  'Do not chase losses after a cold session.',
                ].map((item) => (
                  <li key={item} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </section>

            <section id="version">
              <h2 className="section-heading">What Changed in the Latest <span>3rr Game</span> Version</h2>
              <div className="glass-card p-6 space-y-3 text-gray-300 leading-relaxed">
                <p>
                  This site documents <strong className="text-white">{APP_VERSION}</strong> (~{APP_SIZE}). Recent builds in this line focus on a lighter package, clearer event tabs, and more reliable JazzCash / EasyPaisa screens for Pakistani wallets.
                </p>
                <p>
                  After updating, reopen Events and Wallet once to confirm promo cards and payout binding still look correct. If something looks wrong, reinstall from the official button on {SITE_DOMAIN} rather than hunting random APK mirrors.
                </p>
              </div>
            </section>

            <section id="pros-cons">
              <h2 className="section-heading">Pros & <span>Cons</span></h2>
              <div className="pros-cons-grid">
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-emerald-glow mb-4">Pros</h3>
                  <ul className="pros-list space-y-2 text-gray-300 list-disc list-inside">
                    {[
                      'Mixed lobby: slots, cards, fishing and live-style rooms',
                      'JazzCash and EasyPaisa wallet flow',
                      'Compact APK suitable for everyday Android phones',
                      'Events, VIP meters and invite commissions in one place',
                      'PC play possible via Android emulator',
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-red-400 mb-4">Cons</h3>
                  <ul className="cons-list space-y-2 text-gray-300 list-disc list-inside">
                    {[
                      'Android APK install needs unknown-source permission',
                      'No native iOS app in this guide yet',
                      'Real-money play can lose funds quickly',
                      'Legal status can be uncertain depending on local rules',
                      'Clone APKs and fake bonus links are common online',
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="safety">
              <h2 className="section-heading">Safety Checklist Before You Deposit</h2>
              <div className="glass-card p-6 space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Download only from this site’s official button, protect OTPs, and avoid sharing passwords in chats. Review withdrawal binding details with a small test cash-out before sending larger amounts. Real-money apps always carry risk, so set a budget and treat bonuses as optional value rather than guaranteed profit.
                </p>
                <p>
                  For a fuller checklist, read{" "}
                  <Link href={`${ROUTES.blog}/is-3rr-game-safe-pakistan`} className="text-accent hover:text-accent-light font-medium">
                    Is 3rr Game safe in Pakistan?
                  </Link>
                </p>
              </div>
            </section>

            <section id="guides">
              <h2 className="section-heading">Helpful <span>3rr Game</span> Guides</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {HOMEPAGE_BLOG_LINKS.map(({ slug, label }) => (
                  <li key={slug}>
                    <Link
                      href={`${ROUTES.blog}/${slug}`}
                      className="glass-card block p-4 text-sm text-gray-200 hover:text-accent transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href={ROUTES.download} className="glass-card block p-4 text-sm text-gray-200 hover:text-accent transition-colors">
                    Download 3rr Game APK guide
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.pc} className="glass-card block p-4 text-sm text-gray-200 hover:text-accent transition-colors">
                    Play 3rr Game on PC
                  </Link>
                </li>
              </ul>
            </section>

            <section id="conclusion">
              <h2 className="section-heading"><span>Conclusion</span></h2>
              <div className="glass-card p-6">
                <p className="text-gray-300 leading-relaxed">
                  3rr Game gives Pakistani Android users a compact lobby with slots, cards, fishing and live-style rooms, plus JazzCash and EasyPaisa wallet support. Use the official APK from {SITE_DOMAIN}, bind your account carefully, test payments with small amounts, and keep a firm budget. When you are ready, download {APP_VERSION}, register, and explore the lobby at a pace that stays entertaining — not stressful.
                </p>
              </div>
              <div className="flex justify-center mt-8">
                <DownloadButton />
              </div>
            </section>

            <section id="faq">
              <h2 className="section-heading">Frequently Asked <span>Questions</span></h2>
              <div className="space-y-4">
                {faqs.map(({ q, a }) => (
                  <div key={q} className="faq-item">
                    <h3 className="font-semibold text-white mb-2">{q}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
