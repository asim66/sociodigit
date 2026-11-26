import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getBlogPostBySlug } from '../../../data/blogPosts';
import BlogPostArticle from './BlogPostArticle';

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
      images: [
        {
          url: post.image || 'https://sociodigit.in/og-banner.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image || 'https://sociodigit.in/og-banner.jpg'],
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
    image: post.image || 'https://sociodigit.in/og-banner.jpg',
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
      <BlogPostArticle post={post} relatedPosts={relatedPosts} />
    </>
  );
}
