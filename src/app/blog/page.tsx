import React from 'react';
import type { Metadata } from 'next';
import BlogPage from './BlogPage';

export const metadata: Metadata = {
  title: 'Tech Insights & Digital Growth Strategies | Sociodigit Blog',
  description: "Expert perspectives on AI, SEO, SaaS architecture, DevOps, cloud, and QA automation. Stay ahead of the curve with actionable engineering and growth strategies from Sociodigit's team.",
  alternates: {
    canonical: 'https://sociodigit.in/blog',
    languages: {
      'en': 'https://sociodigit.in/blog',
      'x-default': 'https://sociodigit.in/blog',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/blog',
    title: 'Tech Insights & Digital Growth Strategies | Sociodigit Blog',
    description: "Expert perspectives on AI, SEO, SaaS architecture, DevOps, cloud, and QA automation. Stay ahead of the curve with actionable engineering and growth strategies from Sociodigit's team.",
    siteName: 'Sociodigit',
    images: [{
      url: 'https://sociodigit.in/og-banner.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sociodigit',
    title: 'Tech Insights & Digital Growth Strategies | Sociodigit Blog',
    description: "Expert perspectives on AI, SEO, SaaS architecture, DevOps, cloud, and QA automation. Stay ahead of the curve with actionable engineering and growth strategies from Sociodigit's team.",
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

export default function Page() {
  return <BlogPage />;
}
