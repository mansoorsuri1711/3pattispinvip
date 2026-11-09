import { Metadata } from "next";
import Link from "next/link";
import PageHero, { GuideContent, StepList } from "@/components/GuidePage";
import PageSchemas from "@/components/PageSchemas";
import { SITE_ORIGIN } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import { WITHDRAW_STEPS } from "@/lib/guide-steps";

const PAGE_TITLE = "Cash Out from 3 Patti World via JazzCash & EasyPaisa";
const PAGE_DESCRIPTION =
  "Withdraw 3 Patti World winnings to JazzCash or EasyPaisa. Binding tips, minimum checks, and how to keep a transaction ID for support in Pakistan.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.withdraw}` },
};

const breadcrumbs = [
  { name: "Home", path: ROUTES.home },
  { name: "Withdraw Guide", path: ROUTES.withdraw },
];

export default function WithdrawPage() {
  return (
    <>
      <PageSchemas
        id="withdraw-page-schema"
        breadcrumbs={breadcrumbs}
        page={{ path: ROUTES.withdraw, title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
        howTo={{
          name: "How to Withdraw Money from 3 Patti World",
          description: PAGE_DESCRIPTION,
          steps: [...WITHDRAW_STEPS],
        }}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        title="Withdraw Money from 3 Patti World"
        description="Cash out to the JazzCash or EasyPaisa number bound to your 3 Patti World account. Test with a small amount before larger withdrawals."
      />
      <GuideContent>
        <StepList
          title="Withdrawal Steps"
          intro="Many accounts allow cash-outs from around Rs 100 upward, but always trust the minimum shown in your app version."
          steps={[...WITHDRAW_STEPS]}
        />
        <div className="glass-card p-6 mb-6 space-y-3 text-gray-300 text-sm leading-relaxed">
          <h2 className="text-xl font-semibold text-accent mb-2">Before You Submit</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Confirm the payout name matches your wallet KYC name.</li>
            <li>Finish any required phone or identity binding first.</li>
            <li>Avoid stacking multiple withdraw requests at once.</li>
            <li>Screenshot the transaction ID until the money arrives.</li>
          </ul>
          <p>
            Need deposit help first? See the{" "}
            <Link href={ROUTES.deposit} className="text-accent hover:text-accent-light">
              deposit guide
            </Link>
            . For risk checks, read{" "}
            <Link href={`${ROUTES.blog}/is-3-patti-world-safe-pakistan`} className="text-accent hover:text-accent-light">
              is 3 Patti World safe in Pakistan
            </Link>
            .
          </p>
        </div>
      </GuideContent>
    </>
  );
}
