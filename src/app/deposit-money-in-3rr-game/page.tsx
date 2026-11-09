import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero, { GuideContent, StepList } from "@/components/GuidePage";
import PageSchemas from "@/components/PageSchemas";
import { SITE_ORIGIN } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import { DEPOSIT_STEPS } from "@/lib/guide-steps";
import { IMAGES, SCREENSHOT_SIZE } from "@/lib/images";

const PAGE_TITLE = "Top Up 3rr Game Wallet with JazzCash & EasyPaisa";
const PAGE_DESCRIPTION =
  "Add PKR to your 3rr Game wallet using JazzCash or EasyPaisa. Step-by-step deposit guide for Pakistani players with safety tips and promo checks.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.deposit}` },
};

const breadcrumbs = [
  { name: "Home", path: ROUTES.home },
  { name: "Deposit Guide", path: ROUTES.deposit },
];

export default function DepositPage() {
  return (
    <>
      <PageSchemas
        id="deposit-page-schema"
        breadcrumbs={breadcrumbs}
        page={{ path: ROUTES.deposit, title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
        howTo={{
          name: "How to Deposit Money in 3rr Game",
          description: PAGE_DESCRIPTION,
          steps: [...DEPOSIT_STEPS],
        }}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        title="Deposit Money in 3rr Game"
        description="Fund your 3rr Game wallet with JazzCash or EasyPaisa. Check Events for rebates first, then deposit only what fits your weekly budget."
      />
      <GuideContent>
        <div className="screenshot-card overflow-hidden my-2">
          <div className="screenshot-image-wrap">
            <Image
              src={IMAGES.addMoney}
              alt="3rr Game deposit screen with JazzCash and EasyPaisa"
              width={SCREENSHOT_SIZE.width}
              height={SCREENSHOT_SIZE.height}
              className="screenshot-image"
            />
          </div>
        </div>
        <StepList
          title="Deposit Steps"
          intro="Use your own wallet number and keep the payment confirmation until the in-app balance updates."
          steps={[...DEPOSIT_STEPS]}
        />
        <div className="glass-card p-6 mb-6 space-y-3 text-gray-300 text-sm leading-relaxed">
          <h2 className="text-xl font-semibold text-accent mb-2">Deposit Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Read the current rebate or first-deposit card before paying.</li>
            <li>Start with a small test amount on a new account.</li>
            <li>Do not approve MPIN prompts you did not start inside 3rr Game.</li>
            <li>If balance is late, wait a few minutes, then contact in-app support with the wallet SMS.</li>
          </ul>
          <p>
            After funding, review{" "}
            <Link href={`${ROUTES.blog}/3rr-game-bonuses-vip-referral-guide`} className="text-accent hover:text-accent-light">
              bonuses and VIP offers
            </Link>{" "}
            or continue to the{" "}
            <Link href={ROUTES.withdraw} className="text-accent hover:text-accent-light">
              withdrawal guide
            </Link>
            .
          </p>
        </div>
      </GuideContent>
    </>
  );
}
