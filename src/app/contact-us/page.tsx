import { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_ORIGIN, SUPPORT_EMAIL } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

const PAGE_TITLE = `Contact Us – ${SITE_NAME}`;
const PAGE_DESCRIPTION = `Contact the ${SITE_NAME} editorial team on teenpattiworld-vip.com for guide corrections, broken links, or content feedback.`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/contact-us` },
};

export default function ContactUsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-14">
      <nav className="breadcrumbs mb-8">
        <ol className="breadcrumbs-list">
          <li className="breadcrumbs-item">
            <Link href={ROUTES.home} className="breadcrumbs-link">Home</Link>
            <span className="breadcrumbs-separator">/</span>
          </li>
          <li className="breadcrumbs-item">
            <span className="breadcrumbs-current">Contact Us</span>
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Contact <span className="text-accent">Us</span>
      </h1>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <p>
            Reach out if a guide is outdated, a link is broken, or you want a new 3 Patti World topic covered. We respond to editorial questions about this website — not in-app account recovery.
          </p>
        </section>

        <section className="glass-card p-6 space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-accent mb-1">Email</h2>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-gray-300 hover:text-accent transition-colors">
              {SUPPORT_EMAIL}
            </a>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-accent mb-1">Website</h2>
            <a href={SITE_ORIGIN} className="text-gray-300 hover:text-accent transition-colors">
              {SITE_ORIGIN}
            </a>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-accent mb-1">Response Time</h2>
            <p className="text-gray-400 text-sm">We aim to respond within 24–48 hours.</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">What We Can Help With</h2>
          <ul className="space-y-2 list-disc list-inside text-gray-300">
            <li>Incorrect or outdated information on our guides</li>
            <li>Suggestions for new blog posts</li>
            <li>Reporting broken links or page errors</li>
            <li>General feedback about teenpattiworld-vip.com</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">For App Support</h2>
          <p className="text-sm text-gray-400">
            For account, deposit, or withdrawal issues inside 3 Patti World, use the official in-app Help / Support chat. This site cannot access game accounts or move wallet funds.
          </p>
          <p className="mt-3 text-sm">
            <Link href={ROUTES.blog} className="text-accent hover:text-accent-light">
              Browse our 3 Patti World guides →
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
