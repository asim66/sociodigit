import React from 'react';
import type { Metadata } from 'next';
import EcommercePage from './EcommercePage';

export const metadata: Metadata = {
  title: 'E-Commerce Software & Platform Engineering | Sociodigit',
  description: 'Custom e-commerce platforms, headless Shopify solutions, payment gateway integration, and conversion optimization.',
  alternates: {
    canonical: 'https://sociodigit.in/industries/ecommerce',
    languages: {
      'en': 'https://sociodigit.in/industries/ecommerce',
      'x-default': 'https://sociodigit.in/industries/ecommerce',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/industries/ecommerce',
    title: 'E-Commerce Software & Platform Engineering | Sociodigit',
    description: 'Custom e-commerce platforms, headless Shopify solutions, payment gateway integration, and conversion optimization.',
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
    title: 'E-Commerce Software & Platform Engineering | Sociodigit',
    description: 'Custom e-commerce platforms, headless Shopify solutions, payment gateway integration, and conversion optimization.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sociodigit.in/industries/ecommerce#main",
    "url": "https://sociodigit.in/industries/ecommerce",
    "name": "E-Commerce Solutions",
    "description": "Custom e-commerce platforms, headless Shopify solutions, payment gateway integration, and conversion optimization.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/industries/ecommerce#breadcrumb",
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
        "name": "E-Commerce Solutions",
        "item": "https://sociodigit.in/industries/ecommerce"
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
      <EcommercePage />
    </>
  );
}
