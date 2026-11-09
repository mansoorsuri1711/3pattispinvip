import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero, { GuideContent, StepList } from "@/components/GuidePage";
import PageSchemas from "@/components/PageSchemas";
import { SITE_ORIGIN } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import { REGISTER_STEPS } from "@/lib/guide-steps";
import { IMAGES, SCREENSHOT_SIZE } from "@/lib/images";

const PAGE_TITLE = "Register a Teen Patti Spin Account in Pakistan";
const PAGE_DESCRIPTION =
  "Create a Teen Patti Spin account with mobile or email OTP. Strong password tips and binding steps before your first JazzCash or EasyPaisa deposit.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.register}` },
};

const breadcrumbs = [
  { name: "Home", path: ROUTES.home },
  { name: "Register", path: ROUTES.register },
];

export default function RegisterPage() {
  return (
    <>
      <PageSchemas
        id="register-page-schema"
        breadcrumbs={breadcrumbs}
        page={{ path: ROUTES.register, title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
        howTo={{
          name: "How to Register on Teen Patti Spin",
          description: PAGE_DESCRIPTION,
          steps: [...REGISTER_STEPS],
        }}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        title="Register on Teen Patti Spin"
        description="Set up a recoverable Teen Patti Spin account before you deposit. Use a phone or email you can open for OTP, then bind profile details early."
      />
      <GuideContent>
        <div className="screenshot-card overflow-hidden my-2">
          <div className="screenshot-image-wrap">
            <Image
              src={IMAGES.account}
              alt="Teen Patti Spin account profile and wallet screen"
              width={SCREENSHOT_SIZE.width}
              height={SCREENSHOT_SIZE.height}
              className="screenshot-image"
            />
          </div>
        </div>
        <StepList title="Registration Steps" steps={[...REGISTER_STEPS]} />
        <p className="text-sm text-gray-400 text-center">
          Already registered?{" "}
          <Link href={ROUTES.login} className="text-accent hover:text-accent-light">
            Login guide
          </Link>{" "}
          · Deep dive:{" "}
          <Link href={`${ROUTES.blog}/create-teen-patti-spin-account-and-login`} className="text-accent hover:text-accent-light">
            full registration & login article
          </Link>
        </p>
      </GuideContent>
    </>
  );
}
