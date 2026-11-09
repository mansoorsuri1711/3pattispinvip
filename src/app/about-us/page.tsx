import { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_ORIGIN, SITE_DOMAIN, SUPPORT_EMAIL } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

const PAGE_TITLE = `About Teen Patti Spin – Pakistan Android Guide`;
const PAGE_DESCRIPTION = `About ${SITE_NAME} on ${SITE_DOMAIN}: independent guides for downloading the APK, JazzCash deposits, withdrawals, bonuses and safer play in Pakistan.`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/about-us` },
};

export default function AboutUsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-14">
      <nav className="breadcrumbs mb-8">
        <ol className="breadcrumbs-list">
          <li className="breadcrumbs-item">
            <Link href={ROUTES.home} className="breadcrumbs-link">Home</Link>
            <span className="breadcrumbs-separator">/</span>
          </li>
          <li className="breadcrumbs-item">
            <span className="breadcrumbs-current">About Us</span>
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        About <span className="text-accent">{SITE_NAME}</span>
      </h1>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">Who We Are</h2>
          <p>
            {SITE_DOMAIN} is an independent information site for Pakistani players searching for {SITE_NAME}. We publish practical guides on APK download, account setup, JazzCash and EasyPaisa wallet flows, bonuses, PC emulator play, and safety checks — written in clear English for mobile readers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">Our Mission</h2>
          <p>
            Our mission is to close the content gaps left by thin doorway pages: honest requirements, on-domain download guidance, verified schema, and guides that match real search intent instead of recycled filler. We do not promise income and we do not claim to operate the official Teen Patti Spin game servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">What We Cover</h2>
          <ul className="space-y-2 list-disc list-inside text-gray-300">
            <li>How to download the Teen Patti Spin APK on Android and PC</li>
            <li>How to register and log in safely</li>
            <li>How to deposit and withdraw with JazzCash and EasyPaisa</li>
            <li>Bonuses, VIP progress and referral basics</li>
            <li>Safety checks before larger deposits</li>
            <li>Version notes for the current APK line</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">Independence</h2>
          <p>
            This website is not the official developer of Teen Patti Spin. Download buttons may open a third-party distribution link used to obtain the APK. Read our{" "}
            <Link href="/disclaimer" className="text-accent hover:text-accent-light">Disclaimer</Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="text-accent hover:text-accent-light">Privacy Policy</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">Contact</h2>
          <p>
            Questions about our guides?{" "}
            <Link href="/contact-us" className="text-accent hover:text-accent-light">Contact us</Link>{" "}
            or email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:text-accent-light">{SUPPORT_EMAIL}</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
