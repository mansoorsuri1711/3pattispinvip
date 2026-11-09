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
    images: [{ url: `${SITE_ORIGIN}${IMAGES.app}`, width: APP_ICON_SIZE.width, height: APP_ICON_SIZE.height, alt: '3 Patti World official app icon for Pakistan' }],
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
  { id: 'overview', label: '3 Patti World Overview' },
  { id: 'what-is-3-patti-world', label: 'What Is 3 Patti World?' },
  { id: 'why-trending', label: 'Why It Trends in Pakistan' },
  { id: 'how-to-start', label: 'How to Start' },
  { id: 'features', label: 'Main Features' },
  { id: 'popular-games', label: 'Popular Games' },
  { id: 'bonuses', label: 'Bonuses & Invite Rewards' },
  { id: 'how-to-download', label: 'How to Download' },
  { id: 'system-requirements', label: 'Device Requirements' },
  { id: 'whats-new', label: 'What Changed in V1.169' },
  { id: 'register-login', label: 'Register & Login' },
  { id: 'payments', label: 'JazzCash & EasyPaisa' },
  { id: 'how-to-add-money', label: 'How to Add Money' },
  { id: 'how-to-withdraw', label: 'How to Withdraw' },
  { id: 'safety', label: 'Safety Checklist' },
  { id: 'support', label: 'Customer Support' },
  { id: 'smart-tips', label: 'Smarter Play Tips' },
  { id: 'pros-cons', label: 'Pros & Cons' },
  { id: 'guides', label: 'Helpful Guides' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const faqs = [
  {
    q: 'What is 3 Patti World?',
    a: '3 Patti World is an Android Teen Patti and multi-game app popular in Pakistan. The lobby mixes classic Teen Patti, Dragon vs Tiger, Rummy, slots, Ludo, Mines and more. Players fund wallets with JazzCash or EasyPaisa and can request withdrawals after verified play.',
  },
  {
    q: 'How do I download the 3 Patti World APK?',
    a: `Open ${SITE_DOMAIN}, tap Download Now, allow installs from that source, then open the APK and install. Full steps are on our download guide.`,
  },
  {
    q: 'What is the latest 3 Patti World version?',
    a: `The current guide covers ${APP_VERSION} (about ${APP_SIZE}). Always install from the official button on this site so you avoid renamed clone files.`,
  },
  {
    q: 'How do I add money in 3 Patti World?',
    a: 'Log in, open Deposit, choose JazzCash or EasyPaisa, enter the amount, approve with your wallet MPIN, then wait for the balance update. See the deposit guide for troubleshooting.',
  },
  {
    q: 'How do I withdraw money from 3 Patti World?',
    a: 'Open Wallet → Withdraw, select JazzCash or EasyPaisa, confirm bound details, submit the amount, and keep the transaction ID. Many cash-outs arrive within minutes after approval.',
  },
  {
    q: 'Is 3 Patti World free to download?',
    a: 'Yes. Downloading and registering is free (0 PKR). Real-money tables require a wallet deposit. There is no guaranteed income.',
  },
  {
    q: 'Can I play 3 Patti World on PC?',
    a: 'Yes. Install an Android emulator such as BlueStacks or LDPlayer on Windows, then install the same APK. Follow our PC version guide for a safer setup.',
  },
  {
    q: 'Is 3 Patti World available on iOS?',
    a: 'Not yet as a native App Store build in this guide. Use Android or a PC emulator until an official iOS release is confirmed.',
  },
  {
    q: 'Does 3 Patti World support JazzCash and EasyPaisa?',
    a: 'Yes. Both wallets are the main deposit and withdrawal methods for Pakistani players. Always match the number to your own account and test with a small amount first.',
  },
  {
    q: 'Is 3 Patti World safe?',
    a: 'Safety improves when you control the APK source, OTPs, and payment tests — but real-money play still carries financial and legal uncertainty. Read our safety guide before depositing larger amounts.',
  },
  {
    q: 'Can I play 3 Patti World without depositing?',
    a: 'Yes. Guest play, free chips, and daily login bonuses let you explore tables before funding a wallet. Real-cash rooms still need a deposit.',
  },
  {
    q: 'How do referral rewards work?',
    a: 'Open the invite or agent screen, copy your code or link, and share it with people who register themselves. Commission appears only after invited players meet the app’s activity rules.',
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
      "operatingSystem": "Android 5.0+",
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
      name: "How to Download 3 Patti World APK",
      description: "Install the official 3 Patti World APK on Android from teenpattiworld-vip.com.",
      steps: [...DOWNLOAD_STEPS],
      url: absoluteUrl(ROUTES.download),
    }),
    howToSchema({
      name: "How to Add Money in 3 Patti World",
      description: "Deposit PKR to your 3 Patti World wallet with JazzCash or EasyPaisa.",
      steps: [...DEPOSIT_STEPS],
      url: absoluteUrl(ROUTES.deposit),
    }),
    howToSchema({
      name: "How to Withdraw Money from 3 Patti World",
      description: "Cash out 3 Patti World winnings to JazzCash or EasyPaisa.",
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
                <span className="text-white">3 Patti World</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                <BrandText text="3 Patti World brings Teen Patti, Dragon vs Tiger, Rummy, slots and more to Android with JazzCash and EasyPaisa payouts for Pakistan. Use the button below for the official APK, then follow this guide for account setup, deposits, withdrawals and safety checks on version V1.169." />
              </p>
              <div id="download" className="flex justify-center lg:justify-start pt-2">
                <DownloadButton />
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 ring-4 ring-accent/40 rounded-3xl overflow-hidden shadow-glow-lg bg-black">
                <Image
                  src={IMAGES.app}
                  alt="3 Patti World official app icon for Pakistan Android download"
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
              <h2 className="section-heading">3 Patti World <span>Overview for Pakistani Players</span></h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Pakistani searchers looking for <strong className="text-white">3 Patti World</strong> usually want four answers fast: where to get the APK, how JazzCash and EasyPaisa work, whether cash-outs arrive, and which games sit inside the lobby. This homepage is built around those intents instead of stacking empty “secure and trusted” claims.
                </p>
                <p>
                  The wallet side matters just as much as the cards. Players can top up with JazzCash or EasyPaisa, track promo rebates, invite friends from the referral screen, and request withdrawals after binding payout details. If you want one APK for Teen Patti sessions plus faster games like Dragon vs Tiger, 3 Patti World is aimed at that routine.
                </p>
              </div>
            </section>

            <section id="what-is-3-patti-world">
              <h2 className="section-heading">What Is <span>3 Patti World</span> and Who Is It For?</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">3 Patti World</strong> is an Android real-money card and casino-style app built around Teen Patti and related titles. You choose from multiple games, add funds with JazzCash or EasyPaisa, and cash out winnings to the same methods. New players often see a deposit bonus; daily login and referral rewards add optional value.
                </p>
                <p>
                  The interface keeps menus clear: game categories, wallet, and promotions are easy to find. The app fits beginners who need simple tables, as well as regular players who check VIP progress, recharge rebates and invite commissions. Students and workers who prefer short mobile sessions often start with lower stakes, then move into cards or slots once they understand the lobby. Responsible limits should stay part of every 3 Patti World session.
                </p>
              </div>
            </section>

            <section id="why-trending">
              <h2 className="section-heading">Why <span>3 Patti World</span> Is Popular in Pakistan</h2>
              <div className="space-y-6">
                {[
                  {
                    num: '01',
                    title: 'Local Wallet Familiarity',
                    text: 'JazzCash and EasyPaisa already sit on most Pakistani phones. When deposit and withdraw screens reuse those wallets, onboarding feels familiar instead of asking players to learn a foreign payment rail first.',
                  },
                  {
                    num: '02',
                    title: 'Teen Patti Plus Faster Games',
                    text: 'Classic Teen Patti tables sit beside Dragon vs Tiger, Rummy, slots, Ludo and Mines. That mix keeps the APK useful on days when you want different pacing without installing multiple apps.',
                  },
                  {
                    num: '03',
                    title: 'Events and Invite Growth',
                    text: 'Promo tabs surface welcome offers, recharge rebates, VIP progress and referral commissions. The invite screen makes it easy to copy a code for WhatsApp sharing when friends want to register themselves.',
                  },
                  {
                    num: '04',
                    title: 'Focused Card-Room Feel',
                    text: 'Many players prefer a lobby that feels like a card room rather than a cluttered casino. Clear icons and table limits help beginners learn rules before raising stakes.',
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

            <section id="how-to-start">
              <h2 className="section-heading">How to Start with <span>3 Patti World</span></h2>
              <div className="glass-card p-6">
                <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                  {[
                    'Open the official website and download the APK to your Android device.',
                    'Allow installs from that source, then open the APK and complete installation.',
                    'Launch 3 Patti World and register with a mobile number or email (or explore as guest).',
                    'Claim any free chips or welcome prompts shown after first login.',
                    'Review Events before depositing, then pick a low-stake Teen Patti or Dragon vs Tiger table.',
                  ].map((step) => (
                    <li key={step} className="leading-relaxed">{step}</li>
                  ))}
                </ol>
              </div>
            </section>

            <section id="features">
              <h2 className="section-heading">Main Features Inside the <span>3 Patti World</span> App</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Real Cash Gameplay',
                    text: 'Teen Patti, Dragon vs Tiger, Rummy and other rooms can use a real wallet balance after you deposit. Practice lightly at first so you learn stake sizes before joining higher tables. Real-cash mode is optional entertainment — never a guaranteed salary.',
                  },
                  {
                    title: 'JazzCash & EasyPaisa Wallet Flow',
                    text: 'Deposit and withdraw screens surface Pakistan’s two most common mobile wallets. Matching the number to your own account and testing with a small amount first reduces most payment mistakes.',
                  },
                  {
                    title: 'Wide Game Lobby',
                    text: 'Teen Patti, Dragon vs Tiger, Rummy, poker-style rooms, slots, Ludo, Mines and more sit in one navigation. Variety is a major reason searchers compare 3 Patti World with thinner single-genre clones.',
                  },
                  {
                    title: 'Daily Bonuses and Events',
                    text: 'Daily login chips, welcome offers and seasonal promos live under Events. Checking the board before a deposit usually stretches a planned budget further than depositing blindly.',
                  },
                  {
                    title: 'Invite and Referral Earnings',
                    text: 'Copy a code, share a link or show a QR. When invited friends register and complete required activity, commission-style rewards can appear beside table results — without buying fake referrals.',
                  },
                  {
                    title: 'Clear Interface',
                    text: 'Bright categories, wallet shortcuts and promotion tabs keep the lobby readable. Sound and animations add atmosphere without hiding the controls you need mid-hand.',
                  },
                  {
                    title: 'Account Security Tools',
                    text: 'OTP binding, password login and profile details protect the wallet better than guest-only play. Bind early if you plan to deposit, and never share OTPs in chat groups.',
                  },
                  {
                    title: 'In-App Support Paths',
                    text: 'Live chat and help menus inside the app are the fastest place for deposit delays, login issues or withdrawal IDs. Keep screenshots ready before you open a ticket.',
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
              <h2 className="section-heading">Popular Games You Can Open in <span>3 Patti World</span></h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Teen Patti & Card Classics',
                    text: 'Classic Teen Patti tables and related card rooms suit players who like readable hand rankings and short rounds.',
                  },
                  {
                    title: 'Dragon vs Tiger & Fast Tables',
                    text: 'Dragon vs Tiger and similar quick games work when you only have a few minutes between tasks.',
                  },
                  {
                    title: 'Rummy, Slots, Ludo & Mines',
                    text: 'Rummy sessions, slot spins, Ludo boards and Mines expand the lobby beyond pure Teen Patti so the APK stays useful across moods.',
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
              <h2 className="section-heading">Bonuses, Rebates and Invite Rewards on <span>3 Patti World</span></h2>
              <p className="text-gray-300 mb-6">
                Offers change by campaign. Always read the live event card inside the app before you deposit. For a deeper walkthrough, see our{" "}
                <Link href={`${ROUTES.blog}/3-patti-world-bonuses-vip-guide`} className="text-accent hover:text-accent-light font-medium">
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
                    title: 'Recharge Rebate and Daily Rewards',
                    text: 'Rebates return a slice of eligible deposits. Daily login chips and member boosts can add more — check the board before topping up.',
                  },
                  {
                    num: '03',
                    title: 'Invite Friends and Referral Commission',
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
              <h2 className="section-heading">How to Download the Official <span>3 Patti World</span> APK</h2>
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
              <h2 className="section-heading">Device Requirements for <span>3 Patti World</span></h2>
              <div className="glass-card overflow-hidden">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>System</th>
                      <th>Minimum</th>
                      <th>Recommended</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Operating System', 'Android 5.0+', 'Android 8.0 or above'],
                      ['RAM', '2GB or more', '4GB or more'],
                      ['Storage', '500MB free', '1GB free space'],
                      ['Internet', 'Stable 3G / WiFi', 'Fast 4G or WiFi'],
                    ].map(([sys, min, rec]) => (
                      <tr key={sys}>
                        <td className="font-medium text-white">{sys}</td>
                        <td>{min}</td>
                        <td>{rec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="whats-new">
              <h2 className="section-heading">What Changed in the Latest <span>3 Patti World</span> Version</h2>
              <div className="glass-card p-6 space-y-3 text-gray-300 leading-relaxed">
                <p>
                  This site documents <strong className="text-white">{APP_VERSION}</strong> (~{APP_SIZE}). Recent builds in this line focus on smoother lobby graphics, clearer event tabs, faster JazzCash / EasyPaisa screens, and VIP rewards for active players.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {[
                    'Improved graphics and smoother table animations',
                    'Faster lobby load on mid-range Android phones',
                    'Clearer menus for new Teen Patti players',
                    'More game options including Dragon vs Tiger and Rummy',
                    'Updated deposit and withdrawal reliability for local wallets',
                    'Account security improvements and bug fixes',
                    'Fresh bonuses, referral rewards and VIP benefits',
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>
                  After updating, reopen Events and Wallet once to confirm promo cards and payout binding still look correct. If something looks wrong, reinstall from the official button on {SITE_DOMAIN} rather than hunting random APK mirrors.
                </p>
              </div>
            </section>

            <section id="register-login">
              <h2 className="section-heading">Create an Account and Login on <span>3 Patti World</span></h2>
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
                    <Link href={`${ROUTES.blog}/create-3-patti-world-account-and-login`} className="text-accent hover:text-accent-light">
                      account & login guide
                    </Link>
                    .
                  </p>
                </div>
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-accent mb-4">Login Steps</h3>
                  <ol className="space-y-2 text-gray-300 list-decimal list-inside text-sm">
                    {[
                      'Open the official 3 Patti World icon.',
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
              <h2 className="section-heading">JazzCash, EasyPaisa and Wallet Options in <span>3 Patti World</span></h2>
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
              <h2 className="section-heading">How to Add Money to Your <span>3 Patti World</span> Wallet</h2>
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
              <h2 className="section-heading">How to Withdraw Winnings from <span>3 Patti World</span></h2>
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

            <section id="safety">
              <h2 className="section-heading">Safety Checklist Before You Deposit</h2>
              <div className="glass-card p-6 space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Download only from this site’s official button, protect OTPs, and avoid sharing passwords in chats. Review withdrawal binding details with a small test cash-out before sending larger amounts. Real-money apps always carry risk, so set a budget and treat bonuses as optional value rather than guaranteed profit. The app is not listed as a standard Play Store title in this guide, so APK source discipline matters.
                </p>
                <p>
                  For a fuller checklist, read{" "}
                  <Link href={`${ROUTES.blog}/is-3-patti-world-safe-pakistan`} className="text-accent hover:text-accent-light font-medium">
                    Is 3 Patti World safe in Pakistan?
                  </Link>
                </p>
              </div>
            </section>

            <section id="support">
              <h2 className="section-heading">How to Contact <span>3 Patti World</span> Support</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'In-App Live Chat',
                    text: 'Open Help or Support inside the lobby for the fastest reply on deposit delays, login errors or withdrawal IDs.',
                  },
                  {
                    title: 'WhatsApp / In-App Numbers',
                    text: 'If the app lists a WhatsApp contact, send screenshots of the exact error and transaction ID — never share your MPIN or OTP.',
                  },
                  {
                    title: 'Website Contact',
                    text: 'For site questions about this guide, use our Contact page or email support@teenpattiworld-vip.com.',
                  },
                ].map(({ title, text }) => (
                  <div key={title} className="glass-card p-6">
                    <h3 className="text-lg font-semibold text-accent mb-3">{title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="smart-tips">
              <h2 className="section-heading">Practical Tips to Play Smarter on <span>3 Patti World</span></h2>
              <ul className="space-y-2 text-gray-300 list-disc list-inside glass-card p-6">
                {[
                  'Start with lower stakes until you understand each room’s pace.',
                  'Learn Teen Patti hand rankings before raising blinds.',
                  'Check Events before depositing so rebates are not left unused.',
                  'Keep one account per device and protect OTPs.',
                  'Use the official APK only — renamed clones are a common malware path.',
                  'Set a weekly PKR limit and stop when it is reached.',
                  'Do not chase losses after a cold session.',
                  'Cash out part of larger wins instead of replaying everything.',
                ].map((item) => (
                  <li key={item} className="leading-relaxed">{item}</li>
                ))}
              </ul>
              <p className="text-gray-400 mt-4 text-sm">
                More detail in our{" "}
                <Link href={`${ROUTES.blog}/3-patti-world-tips-to-win`} className="text-accent hover:text-accent-light font-medium">
                  tips to win guide
                </Link>
                .
              </p>
            </section>

            <section id="pros-cons">
              <h2 className="section-heading">Pros & <span>Cons</span></h2>
              <div className="pros-cons-grid">
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-emerald-glow mb-4">Pros</h3>
                  <ul className="pros-list space-y-2 text-gray-300 list-disc list-inside">
                    {[
                      'Teen Patti plus Dragon vs Tiger, Rummy, slots and more',
                      'JazzCash and EasyPaisa wallet flow',
                      'Clear lobby suited to Pakistani beginners',
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

            <section id="guides">
              <h2 className="section-heading">Helpful <span>3 Patti World</span> Guides</h2>
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
                    Download 3 Patti World APK guide
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.pc} className="glass-card block p-4 text-sm text-gray-200 hover:text-accent transition-colors">
                    Play 3 Patti World on PC
                  </Link>
                </li>
              </ul>
            </section>

            <section id="conclusion">
              <h2 className="section-heading"><span>Conclusion</span></h2>
              <div className="glass-card p-6">
                <p className="text-gray-300 leading-relaxed">
                  3 Patti World gives Pakistani Android users a Teen Patti-focused lobby with Dragon vs Tiger, Rummy, slots and more, plus JazzCash and EasyPaisa wallet support. Use the official APK from {SITE_DOMAIN}, bind your account carefully, test payments with small amounts, and keep a firm budget. When you are ready, download {APP_VERSION}, register, and explore the lobby at a pace that stays entertaining — not stressful.
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
