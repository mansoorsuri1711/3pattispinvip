import { Metadata } from "next";
import Link from "next/link";
import PageHero, { GuideContent, StepList } from "@/components/GuidePage";
import AppInfoTable from "@/components/AppInfoTable";
import PageSchemas from "@/components/PageSchemas";
import { SITE_ORIGIN, SITE_DOMAIN, APP_VERSION, APP_SIZE } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import { DOWNLOAD_STEPS } from "@/lib/guide-steps";

const PAGE_TITLE = "Download Teen Patti Spin APK v1.234 for Android Pakistan";
const PAGE_DESCRIPTION =
  "Download Teen Patti Spin APK for Android in Pakistan. Official install steps, unknown-source settings, system requirements, and PC emulator notes for version v1.234.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.download}` },
};

const iosComingSoonMessage =
  "Teen Patti Spin does not yet ship a native iOS App Store build in this guide. Use Android or follow the PC emulator guide until an official iPhone release is confirmed.";

const breadcrumbs = [
  { name: "Home", path: ROUTES.home },
  { name: "Download Guide", path: ROUTES.download },
];

export default function DownloadPage() {
  return (
    <>
      <PageSchemas
        id="download-page-schema"
        breadcrumbs={breadcrumbs}
        page={{ path: ROUTES.download, title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
        howTo={{
          name: "How to Download Teen Patti Spin APK on Android",
          description: PAGE_DESCRIPTION,
          steps: [...DOWNLOAD_STEPS],
        }}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        title="Download Teen Patti Spin APK"
        description={`Get the official ${APP_VERSION} build (~${APP_SIZE}) for Android from ${SITE_DOMAIN}. Avoid renamed Telegram APKs and always install from the Download Now button on this site.`}
        downloadHref={ROUTES.home}
      />
      <GuideContent>
        <AppInfoTable />
        <StepList
          title="For Android"
          intro="Follow these steps to install Teen Patti Spin safely on your Android phone:"
          steps={[...DOWNLOAD_STEPS]}
        />
        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-semibold text-accent mb-4">
            For iOS
            <span className="ml-2 text-xs font-bold uppercase tracking-wide text-black bg-accent px-2 py-0.5 rounded-full align-middle">
              Coming Soon
            </span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">{iosComingSoonMessage}</p>
        </div>
        <div className="glass-card overflow-hidden mb-6">
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
                ["Operating System", "Android 5.0+", "Coming Soon", "Windows 10 or 11"],
                ["RAM", "2GB+", "—", "4GB+"],
                ["Storage", "500MB free", "—", "2GB free for emulator"],
                ["Internet", "Stable 4G / WiFi", "—", "Stable broadband"],
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
        <p className="text-sm text-gray-400 text-center">
          Install issues? Read{" "}
          <Link href={`${ROUTES.blog}/is-teen-patti-spin-safe-pakistan`} className="text-accent hover:text-accent-light">
            is Teen Patti Spin safe
          </Link>{" "}
          or play via the{" "}
          <Link href={ROUTES.pc} className="text-accent hover:text-accent-light">
            PC version guide
          </Link>
          .
        </p>
      </GuideContent>
    </>
  );
}
