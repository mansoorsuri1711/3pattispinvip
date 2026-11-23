import { OFFICIAL_SITE_URL } from "@/lib/site";

const BRAND_MARKERS = ["Teen Patti Spin", "TeenPatti Spin"] as const;

type BrandMarker = (typeof BRAND_MARKERS)[number];

const brandLinkClassName = "text-accent hover:text-accent-light font-medium";

function BrandLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={OFFICIAL_SITE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={brandLinkClassName}
    >
      {children}
    </a>
  );
}

export function findFirstBrandMatch(text: string): { index: number; marker: BrandMarker } | null {
  let earliest = -1;
  let marker: BrandMarker | null = null;

  for (const name of BRAND_MARKERS) {
    const index = text.indexOf(name);
    if (index !== -1 && (earliest === -1 || index < earliest)) {
      earliest = index;
      marker = name;
    }
  }

  if (marker === null || earliest === -1) return null;
  return { index: earliest, marker };
}

/** Link the first brand mention in text to the official game site */
export default function BrandText({ text }: { text: string }) {
  const match = findFirstBrandMatch(text);
  if (!match) return <>{text}</>;

  const { index, marker } = match;
  return (
    <>
      {text.slice(0, index)}
      <BrandLink>{marker}</BrandLink>
      {text.slice(index + marker.length)}
    </>
  );
}

/** Render text with at most one brand link across repeated calls (for blog articles) */
export function createSingleBrandLinker() {
  let used = false;

  return function SingleBrandText({ text }: { text: string }) {
    if (used) return <>{text}</>;

    const match = findFirstBrandMatch(text);
    if (!match) return <>{text}</>;

    used = true;
    const { index, marker } = match;
    return (
      <>
        {text.slice(0, index)}
        <BrandLink>{marker}</BrandLink>
        {text.slice(index + marker.length)}
      </>
    );
  };
}
