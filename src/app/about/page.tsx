import React from 'react';
import type { Metadata } from 'next';
import AboutPage from './AboutPage';

export const metadata: Metadata = {
  title: 'About Sociodigit | Global Software & IT Consulting',
  description: 'Learn how Sociodigit engineers custom software, cloud DevOps, QA automation, and performance digital marketing with relentless technical excellence.',
  alternates: {
    canonical: 'https://sociodigit.in/about',
    languages: {
      'en': 'https://sociodigit.in/about',
      'x-default': 'https://sociodigit.in/about',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/about',
    title: 'About Sociodigit | Global Software & IT Consulting',
    description: 'Learn how Sociodigit engineers custom software, cloud DevOps, QA automation, and performance digital marketing with relentless technical excellence.',
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
    title: 'About Sociodigit | Global Software & IT Consulting',
    description: 'Learn how Sociodigit engineers custom software, cloud DevOps, QA automation, and performance digital marketing with relentless technical excellence.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://sociodigit.in/#organization",
    "name": "Sociodigit",
    "url": "https://sociodigit.in/",
    "email": "hi@sociodigit.in",
    "telephone": "+91 7008381630",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "HP4, Phase 2, Brit Colony, Laxmisagar",
      "addressLocality": "Bhubaneswar",
      "postalCode": "751006",
      "addressCountry": "IN"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://sociodigit.in/#website",
    "url": "https://sociodigit.in/",
    "name": "Sociodigit",
    "publisher": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://sociodigit.in/about#webpage",
    "url": "https://sociodigit.in/about",
    "name": "About Sociodigit",
    "description": "A team of passionate engineers, designers, and strategists dedicated to helping businesses build, scale, and market world-class digital products.",
    "about": {
      "@id": "https://sociodigit.in/#organization"
    },
    "isPartOf": {
      "@id": "https://sociodigit.in/#website"
    },
    "inLanguage": "en"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/about#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sociodigit.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://sociodigit.in/about"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutPage />
    </>
  );
}
