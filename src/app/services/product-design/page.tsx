import React from 'react';
import type { Metadata } from 'next';
import ProductDesignPage from './ProductDesignPage';

export const metadata: Metadata = {
  title: 'Digital Product Design & UI/UX Agency | Sociodigit',
  description: 'End-to-end product design, design systems, mobile app design, and high-converting SaaS user interfaces.',
  alternates: {
    canonical: 'https://sociodigit.in/services/product-design',
    languages: {
      'en': 'https://sociodigit.in/services/product-design',
      'x-default': 'https://sociodigit.in/services/product-design',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/services/product-design',
    title: 'Digital Product Design & UI/UX Agency | Sociodigit',
    description: 'End-to-end product design, design systems, mobile app design, and high-converting SaaS user interfaces.',
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
    title: 'Digital Product Design & UI/UX Agency | Sociodigit',
    description: 'End-to-end product design, design systems, mobile app design, and high-converting SaaS user interfaces.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/services/product-design#main",
    "url": "https://sociodigit.in/services/product-design",
    "name": "Product Design",
    "description": "End-to-end product design, design systems, mobile app design, and high-converting SaaS user interfaces.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/services/product-design#breadcrumb",
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
        "name": "Product Design",
        "item": "https://sociodigit.in/services/product-design"
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
      <ProductDesignPage />
    </>
  );
}
