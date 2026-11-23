import React from 'react';
import type { Metadata } from 'next';
import KediaDentalCaseStudyPage from './KediaDentalCaseStudyPage';

export const metadata: Metadata = {
  title: 'Case Study: Scaling Kedia Dental Care into a Category-Leading Healthcare Brand | Sociodigit',
  description: 'How Sociodigit engineered a 0-to-scale digital patient growth engine for Kedia Dental Care in Bhubaneswar: +1,040% organic search, 1,602 GBP interactions, and 2.62M Meta Ads reach.',
  alternates: {
    canonical: 'https://sociodigit.in/case-studies/kedia-dental-care',
    languages: {
      'en': 'https://sociodigit.in/case-studies/kedia-dental-care',
      'x-default': 'https://sociodigit.in/case-studies/kedia-dental-care',
    },
  },
  authors: [{ name: 'Sociodigit Healthcare Growth Team' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'article',
    url: 'https://sociodigit.in/case-studies/kedia-dental-care',
    title: 'Case Study: Scaling Kedia Dental Care into a Category-Leading Healthcare Brand | Sociodigit',
    description: 'Explore the full-funnel digital strategy that delivered +1,040% organic patient traffic, 18+ Top-3 Google Maps keywords, and 2.6M+ Meta Ads reach for Dr. Shiv Dayal Kedia & Associates in Bhubaneswar.',
    siteName: 'Sociodigit',
    images: [{
      url: 'https://sociodigit.in/og-banner.jpg',
      width: 1200,
      height: 630,
      alt: 'Kedia Dental Care & Sociodigit Healthcare Growth Case Study',
    }],
    locale: 'en_US',
    publishedTime: '2026-11-23T09:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sociodigit',
    title: 'Case Study: Scaling Kedia Dental Care | Sociodigit',
    description: 'Verified growth blueprint: +1,040% search growth, 1,602 GBP patient actions, and 120+ Meta Ads inquiries/mo for Dr. Shiv Dayal Kedia in Bhubaneswar.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://sociodigit.in/case-studies/kedia-dental-care#article',
    'headline': 'Case Study: How Sociodigit Scaled Kedia Dental Care From Scratch Into a Category-Leading Healthcare Brand',
    'description': 'Full-funnel healthcare marketing and engineering case study for Kedia Dental Care (Dr. Shiv Dayal Kedia) in Bhubaneswar, Odisha.',
    'url': 'https://sociodigit.in/case-studies/kedia-dental-care',
    'datePublished': '2026-11-23T09:00:00Z',
    'dateModified': '2026-11-23T09:00:00Z',
    'publisher': {
      '@id': 'https://sociodigit.in/#organization',
    },
    'author': {
      '@type': 'Organization',
      'name': 'Sociodigit',
      'url': 'https://sociodigit.in',
    },
    'about': {
      '@type': 'Dentist',
      'name': 'Kedia Dental Care',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '2nd Floor, Shuvam Towers, Forest Park',
        'addressLocality': 'Bhubaneswar',
        'addressRegion': 'Odisha',
        'addressCountry': 'IN',
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': 'https://sociodigit.in/case-studies/kedia-dental-care#breadcrumb',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://sociodigit.in/',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Case Studies',
        'item': 'https://sociodigit.in/case-studies',
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Kedia Dental Care Case Study',
        'item': 'https://sociodigit.in/case-studies/kedia-dental-care',
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KediaDentalCaseStudyPage />
    </>
  );
}
