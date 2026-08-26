import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, ChevronRight, Share2 } from 'lucide-react';
import { BLOG_POSTS, getBlogPostBySlug } from '../../../data/blogPosts';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Article Not Found | Sociodigit',
    };
  }

  const canonicalUrl = `https://sociodigit.in/blog/${post.slug}`;

  return {
    title: `${post.title} | Sociodigit Insights`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.isoDate,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = `https://sociodigit.in/blog/${post.slug}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${canonicalUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    mainEntityOfPage: canonicalUrl,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: {
        '@id': 'https://sociodigit.in/#organization',
      },
    },
    publisher: {
      '@id': 'https://sociodigit.in/#organization',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://sociodigit.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://sociodigit.in/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="pt-32 pb-24">
        {/* Header */}
        <section className="section-padding bg-surface/50 border-b border-primary/5">
          <div className="container-custom max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-bold text-primary/60 hover:text-secondary mb-8 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Insights
            </Link>

            <div className="inline-block px-4 py-1.5 glass rounded-full text-xs font-bold uppercase tracking-widest text-secondary mb-6">
              {post.category}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-primary/60 font-medium pt-4 border-t border-primary/10">
              <div className="flex items-center">
                <User size={16} className="mr-2 text-secondary" />
                <span>{post.author.name}</span>
                <span className="mx-2 text-primary/30">•</span>
                <span className="text-xs text-primary/50">{post.author.role}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-secondary" />
                {post.date}
              </div>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none text-primary/80 leading-relaxed space-y-6">
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="text-xl leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Author Card */}
            <div className="mt-16 p-8 glass rounded-3xl border border-primary/10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center font-bold text-2xl shrink-0">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-xl font-display font-bold mb-1">
                  Written by {post.author.name}
                </h4>
                <p className="text-primary/60 text-sm mb-3">
                  {post.author.role}
                </p>
                <p className="text-sm text-primary/70">
                  Sharing actionable engineering, cloud architecture, and organic search strategies for fast-growing digital brands.
                </p>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-24 pt-16 border-t border-primary/10">
              <h3 className="text-3xl font-display font-bold mb-8">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group block p-6 glass rounded-2xl border border-primary/5 hover:border-secondary/30 transition-all"
                  >
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">
                      {rel.category}
                    </span>
                    <h4 className="font-display font-bold text-lg mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-primary/60 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
