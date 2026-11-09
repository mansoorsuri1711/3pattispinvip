import { Metadata } from "next";
import Link from "next/link";
import PageHero, { GuideContent, StepList } from "@/components/GuidePage";
import PageSchemas from "@/components/PageSchemas";
import { SITE_ORIGIN } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

const PAGE_TITLE = "Play 3 Patti World on PC with Android Emulator";
const PAGE_DESCRIPTION =
  "Install 3 Patti World on Windows with BlueStacks, LDPlayer or Nox. Step-by-step PC setup using the same official Android APK.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.pc}` },
};

const pcSteps = [
  "Download a trusted Android emulator (BlueStacks, LDPlayer, or Nox) from its official website.",
  "Install the emulator on Windows 10 or 11 and complete the first-run setup.",
  "Inside the emulator, open its browser or file installer tools.",
  "Download the official 3 Patti World APK from teenpattiworld-vip.com using the Download Now button.",
  "Install the APK inside the emulator and allow unknown sources if prompted.",
  "Launch 3 Patti World, register or log in, then test JazzCash or EasyPaisa with a small amount if you deposit.",
];

const breadcrumbs = [
  { name: "Home", path: ROUTES.home },
  { name: "PC Version", path: ROUTES.pc },
];

export default function PcPage() {
  return (
    <>
      <PageSchemas
        id="pc-page-schema"
        breadcrumbs={breadcrumbs}
        page={{ path: ROUTES.pc, title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
        howTo={{
          name: "How to Play 3 Patti World on PC",
          description: PAGE_DESCRIPTION,
          steps: pcSteps,
        }}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        title="3 Patti World for PC"
        description="There is no separate Windows installer. Use an Android emulator and the same official APK you would install on a phone."
      />
      <GuideContent>
        <StepList
          title="PC Setup Steps"
          intro="Allocate at least 4GB RAM to the emulator and keep a stable broadband connection for payment popups."
          steps={pcSteps}
        />
        <p className="text-sm text-gray-400 text-center">
          Need the APK first?{" "}
          <Link href={ROUTES.download} className="text-accent hover:text-accent-light">
            Android download guide
          </Link>
          .
        </p>
      </GuideContent>
    </>
  );
}
