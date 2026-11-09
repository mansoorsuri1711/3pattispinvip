/** Serve images from the same origin (public/) for teenpattispin-vip.com Image SEO. */
export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  return src;
}
