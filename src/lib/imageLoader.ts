/** Serve images from 3pattiworldapp.com.pk for consistent CDN URLs in HTML + Image SEO. */
const IMAGE_CDN_ORIGIN = "https://3pattiworldapp.com.pk";

export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  return `${IMAGE_CDN_ORIGIN}${src}`;
}
