import React from 'react';
import type { Metadata } from 'next';
import IndustriesPage from './IndustriesPage';

export const metadata: Metadata = {
  title: 'Industry-Specific Digital & Software Solutions | Sociodigit',
  description: "Sociodigit delivers specialized software engineering and digital solutions across SaaS, FinTech, healthcare, e-commerce, and enterprise domains.",
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
    title: 'Industry-Specific Digital & Software Solutions | Sociodigit',
    description: "Sociodigit delivers specialized software engineering and digital solutions across SaaS, FinTech, healthcare, e-commerce, and enterprise domains.",
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
    title: 'Industry-Specific Digital & Software Solutions | Sociodigit',
    description: "Sociodigit delivers specialized software engineering and digital solutions across SaaS, FinTech, healthcare, e-commerce, and enterprise domains.",
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://sociodigit.in/industries#collection",
      "url": "https://sociodigit.in/industries",
      "name": "Industry-Specific Digital & Software Solutions | Sociodigit",
      "description": "Sociodigit delivers specialized technology solutions across SaaS, e-commerce, FinTech, healthcare, education, hospitality, startups, enterprises, and non-profits.",
      "publisher": {
        "@id": "https://sociodigit.in/#organization"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://sociodigit.in/industries#itemlist",
      "name": "Target Industries",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://sociodigit.in/industries/saas", "name": "SaaS & Tech" },
        { "@type": "ListItem", "position": 2, "url": "https://sociodigit.in/industries/ecommerce", "name": "E-Commerce" },
        { "@type": "ListItem", "position": 3, "url": "https://sociodigit.in/industries/fintech", "name": "FinTech" },
        { "@type": "ListItem", "position": 4, "url": "https://sociodigit.in/industries/healthcare", "name": "Healthcare" },
        { "@type": "ListItem", "position": 5, "url": "https://sociodigit.in/industries/education", "name": "Education" },
        { "@type": "ListItem", "position": 6, "url": "https://sociodigit.in/industries/hospitality-hotels", "name": "Hospitality & Hotels" },
        { "@type": "ListItem", "position": 7, "url": "https://sociodigit.in/industries/startups", "name": "Startups" },
        { "@type": "ListItem", "position": 8, "url": "https://sociodigit.in/industries/enterprises", "name": "Enterprises" },
        { "@type": "ListItem", "position": 9, "url": "https://sociodigit.in/industries/non-profits", "name": "Non-Profits" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustriesPage />
    </>
  );
}
