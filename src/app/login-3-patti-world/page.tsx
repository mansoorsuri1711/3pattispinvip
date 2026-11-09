import { Metadata } from "next";
import Link from "next/link";
import PageHero, { GuideContent, StepList } from "@/components/GuidePage";
import PageSchemas from "@/components/PageSchemas";
import { SITE_ORIGIN } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import { LOGIN_STEPS } from "@/lib/guide-steps";

const PAGE_TITLE = "3 Patti World Login Guide for Android";
const PAGE_DESCRIPTION =
  "Log in to 3 Patti World safely on Android. Password tips, Forgot Password OTP reset, and checks after you enter the lobby in Pakistan.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.login}` },
};

const breadcrumbs = [
  { name: "Home", path: ROUTES.home },
  { name: "Login", path: ROUTES.login },
];

export default function LoginPage() {
  return (
    <>
      <PageSchemas
        id="login-page-schema"
        breadcrumbs={breadcrumbs}
        page={{ path: ROUTES.login, title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
        howTo={{
          name: "How to Login to 3 Patti World",
          description: PAGE_DESCRIPTION,
          steps: [...LOGIN_STEPS],
        }}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        title="Login to 3 Patti World"
        description="Use the same mobile number or email you registered with. If login fails, reset with OTP instead of creating a second account."
      />
      <GuideContent>
        <StepList title="Login Steps" steps={[...LOGIN_STEPS]} />
        <div className="glass-card p-6 text-sm text-gray-300 leading-relaxed space-y-2">
          <h2 className="text-xl font-semibold text-accent mb-2">Login Troubleshooting</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Switch keyboard language if digits look wrong.</li>
            <li>Force-close the app before retrying a failed password.</li>
            <li>Update to the latest APK from the download page if the app crashes on login.</li>
          </ul>
          <p>
            New here?{" "}
            <Link href={ROUTES.register} className="text-accent hover:text-accent-light">
              Register first
            </Link>{" "}
            or read the{" "}
            <Link href={`${ROUTES.blog}/create-3-patti-world-account-and-login`} className="text-accent hover:text-accent-light">
              full account guide
            </Link>
            .
          </p>
        </div>
      </GuideContent>
    </>
  );
}
