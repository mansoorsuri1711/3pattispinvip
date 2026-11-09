import { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_ORIGIN, SITE_DOMAIN, SUPPORT_EMAIL } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

const PAGE_TITLE = `Disclaimer – ${SITE_NAME}`;
const PAGE_DESCRIPTION = `Disclaimer for ${SITE_NAME} on ${SITE_DOMAIN}. Independent informational site — not the official 3 Patti World developer.`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-14">
      <nav className="breadcrumbs mb-8">
        <ol className="breadcrumbs-list">
          <li className="breadcrumbs-item">
            <Link href={ROUTES.home} className="breadcrumbs-link">Home</Link>
            <span className="breadcrumbs-separator">/</span>
          </li>
          <li className="breadcrumbs-item">
            <span className="breadcrumbs-current">Disclaimer</span>
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
        <span className="text-accent">Disclaimer</span>
      </h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: November 9, 2026</p>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <p>
            Please read this disclaimer before using <strong className="text-white">{SITE_DOMAIN}</strong>. By continuing, you agree to the limits described below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">1. Independent Website</h2>
          <p>
            <strong className="text-white">{SITE_NAME}</strong> on {SITE_DOMAIN} is an independent informational website. We are <strong className="text-white">not</strong> the official developers, owners, or operators of the 3 Patti World application. We cannot reset passwords, reverse payments, or unlock accounts.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">2. No Income Guarantees</h2>
          <p>
            Guides that mention bonuses, referrals or cash-outs describe how features typically appear inside the app. They are not promises of profit. Real-money games can result in losses.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">3. Legal Responsibility</h2>
          <p>
            Online real-money gaming may be restricted or uncertain under local rules that apply to you in Pakistan or elsewhere. You are responsible for understanding and following the laws that apply to your situation. This site does not provide legal advice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">4. Downloads and Third Parties</h2>
          <p>
            APK downloads may be delivered through third-party distribution links. Install software only if you accept the risks of sideloading Android packages. Always review permissions before installing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">5. Accuracy</h2>
          <p>
            App menus, limits and offers change. We update guides when we can, but screenshots and steps may lag behind the live app. Cross-check important payment details inside 3 Patti World before depositing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">6. Contact</h2>
          <p>
            Editorial questions:{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:text-accent-light">{SUPPORT_EMAIL}</a>
            . Also read our{" "}
            <Link href={ROUTES.privacy} className="text-accent hover:text-accent-light">Privacy Policy</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
