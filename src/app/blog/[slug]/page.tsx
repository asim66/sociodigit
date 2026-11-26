import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, ChevronRight, Share2, CheckCircle2 } from 'lucide-react';
import { BLOG_POSTS, getBlogPostBySlug } from '../../../data/blogPosts';

export const dynamic = 'force-static';

function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const regex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    if (match[2] && match[3]) {
      const linkText = match[2];
      const linkUrl = match[3];
      const isInternal = linkUrl.startsWith('/') || linkUrl.includes('sociodigit.in');
      const href = linkUrl.replace('https://sociodigit.in', '') || linkUrl;
      parts.push(
        <Link
          key={match.index}
          href={href.startsWith('/') ? href : linkUrl}
          className="text-secondary font-semibold hover:underline"
          {...(!isInternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {linkText}
        </Link>
      );
    } else if (match[4]) {
      parts.push(
        <strong key={match.index} className="font-bold text-white">
          {match[4]}
        </strong>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

function renderContentBlock(block: string, idx: number) {
  // 1. Image: ![alt](url)
  const imgMatch = block.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
  if (imgMatch) {
    const alt = imgMatch[1];
    const src = imgMatch[2];
    return (
      <div key={idx} className="my-8 overflow-hidden rounded-2xl border border-primary/10 bg-surface/50">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover max-h-[500px]"
          loading="lazy"
        />
      </div>
    );
  }

  // 2. Heading 2: ## ...
  if (block.startsWith('## ')) {
    return (
      <h2 key={idx} className="text-2xl md:text-3xl font-display font-bold text-white mt-12 mb-4 pt-6 border-t border-primary/10">
        {renderInline(block.replace(/^## /, ''))}
      </h2>
    );
  }

  // 3. Heading 3: ### ...
  if (block.startsWith('### ')) {
    return (
      <h3 key={idx} className="text-xl md:text-2xl font-display font-bold text-white/95 mt-8 mb-3 text-secondary">
        {renderInline(block.replace(/^### /, ''))}
      </h3>
    );
  }

  // 4. Markdown Table: rows with | ... |
  if (block.includes('|') && block.split('\n').filter(r => r.trim().startsWith('|')).length > 1) {
    const rows = block.split('\n').map(r => r.trim()).filter(r => r.startsWith('|') && r.endsWith('|'));
    const headerRow = rows[0]?.split('|').map(c => c.trim()).filter(Boolean);
    const bodyRows = rows.slice(2).map(r => r.split('|').map(c => c.trim()).filter(Boolean));
    return (
      <div key={idx} className="my-8 overflow-x-auto rounded-2xl border border-primary/10 bg-surface/50 shadow-xl">
        <table className="w-full text-left text-sm md:text-base">
          <thead className="bg-primary/5 text-white font-mono uppercase text-xs border-b border-primary/10">
            <tr>
              {headerRow?.map((h, i) => (
                <th key={i} className="py-3 px-4 font-bold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-primary/5 text-primary/80">
            {bodyRows.map((r, ri) => (
              <tr key={ri} className="hover:bg-primary/[0.02]">
                {r.map((cell, ci) => (
                  <td key={ci} className="py-3 px-4">{renderInline(cell)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // 5. Unordered list of lines starting with -
  if (block.includes('\n- ') || block.startsWith('- ')) {
    const lines = block.split('\n');
    const headerLine = !lines[0].startsWith('- ') ? lines[0] : null;
    const items = lines.filter(l => l.trim().startsWith('- '));
    return (
      <div key={idx} className="my-4 space-y-3">
        {headerLine && (
          <p className="text-lg md:text-xl text-primary/90 font-medium">
            {renderInline(headerLine)}
          </p>
        )}
        <ul className="space-y-2 list-none">
          {items.map((item, li) => (
            <li key={li} className="flex items-start text-base md:text-lg text-primary/80">
              <span className="text-secondary mr-2.5 mt-1">•</span>
              <span>{renderInline(item.replace(/^- /, ''))}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // 6. Normal paragraph
  return (
    <p key={idx} className="text-lg md:text-xl text-primary/80 leading-relaxed">
      {renderInline(block)}
    </p>
  );
}

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
      '@type': post.author.name === 'Sociodigit' ? 'Organization' : 'Person',
      name: post.author.name,
      ...(post.author.name === 'Sociodigit' ? {} : { jobTitle: post.author.role }),
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
          <div className="container-custom max-w-4xl mx-auto">
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
          <div className="container-custom max-w-4xl mx-auto">
            <div className="max-w-none space-y-6">
              {post.content.map((block, idx) => renderContentBlock(block, idx))}
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
