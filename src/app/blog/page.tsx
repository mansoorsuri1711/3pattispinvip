import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { BLOG_POSTS } from "@/lib/blog";
import { ROUTES } from "@/lib/routes";
import { SITE_ORIGIN, SITE_NAME } from "@/lib/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  buildSchemaGraph,
  collectionPageSchema,
  webPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: `Blog – ${SITE_NAME} Guides for Pakistan`,
  description:
    "3rr Game blog: registration & login, bonuses & VIP referrals, and a practical safety checklist for Pakistani Android players.",
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.blog}` },
};

export default function BlogPage() {
  const url = absoluteUrl(ROUTES.blog);
  const schema = buildSchemaGraph(
    breadcrumbSchema([
      { name: "Home", path: ROUTES.home },
      { name: "Blog", path: ROUTES.blog },
    ]),
    webPageSchema({
      url,
      name: `${SITE_NAME} Blog`,
      description: "Guides for 3rr Game registration, bonuses and safety in Pakistan.",
      pageId: `${url}#webpage`,
    }),
    collectionPageSchema({
      url,
      name: `${SITE_NAME} Blog`,
      description: "SERP-driven guides for 3rr Game players in Pakistan.",
      items: BLOG_POSTS.map((post) => ({
        name: post.title,
        url: absoluteUrl(`${ROUTES.blog}/${post.slug}`),
      })),
    })
  );

  return (
    <>
      <JsonLd id="blog-index-schema" data={schema} />
      <section className="relative py-10 md:py-14 px-4 md:px-8 bg-hero-glow border-b border-dark-red/40">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs
            items={[
              { name: "Home", path: ROUTES.home },
              { name: "Blog", path: ROUTES.blog },
            ]}
          />
          <div className="text-center mt-6 md:mt-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">3rr Game Blog</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Focused articles that support{" "}
              <Link href={ROUTES.home} className="text-accent hover:text-accent-light font-medium">
                3rr Game
              </Link>{" "}
              search intent — accounts, bonuses and safer play — without duplicating deposit or withdraw guides.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`${ROUTES.blog}/${post.slug}`}
              className="glass-card p-6 group block hover:border-accent/40 transition-colors"
            >
              <p className="text-accent text-xs font-semibold uppercase tracking-wide mb-2">
                {post.category} · {post.readTime}
              </p>
              <h2 className="text-lg font-bold text-white group-hover:text-accent transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm line-clamp-3">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
