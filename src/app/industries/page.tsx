import React from 'react';
import type { Metadata } from 'next';
import IndustriesPage from './IndustriesPage';

export const metadata: Metadata = {
  title: 'Industry-Specific Digital Solutions for SaaS, FinTech, Healthcare & More | Sociodigit',
  description: "Sociodigit delivers specialized technology solutions across SaaS, e-commerce, FinTech, healthcare, education, hospitality, startups, enterprises, and non-profits. Deep domain expertise, zero guesswork.",
  alternates: {
    canonical: 'https://sociodigit.in/industries',
    languages: {
      'en': 'https://sociodigit.in/industries',
      'x-default': 'https://sociodigit.in/industries',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/industries',
    title: 'Industry-Specific Digital Solutions for SaaS, FinTech, Healthcare & More | Sociodigit',
    description: "Sociodigit delivers specialized technology solutions across SaaS, e-commerce, FinTech, healthcare, education, hospitality, startups, enterprises, and non-profits. Deep domain expertise, zero guesswork.",
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
    title: 'Industry-Specific Digital Solutions for SaaS, FinTech, Healthcare & More | Sociodigit',
    description: "Sociodigit delivers specialized technology solutions across SaaS, e-commerce, FinTech, healthcare, education, hospitality, startups, enterprises, and non-profits. Deep domain expertise, zero guesswork.",
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

export default function Page() {
  return <IndustriesPage />;
}
