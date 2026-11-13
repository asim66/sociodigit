import React from 'react';
import type { Metadata } from 'next';
import ProductManagementPage from './ProductManagementPage';

export const metadata: Metadata = {
  title: 'Product Management Consulting & Fractional CPO Services | Sociodigit',
  description: 'Outcome-driven product management, agile roadmaps, product discovery, sprint execution, and fractional CPO services for high-growth tech ventures.',
  alternates: {
    canonical: 'https://sociodigit.in/services/product-management',
    languages: {
      'en': 'https://sociodigit.in/services/product-management',
      'x-default': 'https://sociodigit.in/services/product-management',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/services/product-management',
    title: 'Product Management Consulting & Fractional CPO Services | Sociodigit',
    description: 'Outcome-driven product management, agile roadmaps, product discovery, sprint execution, and fractional CPO services for high-growth tech ventures.',
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
    title: 'Product Management Consulting & Fractional CPO Services | Sociodigit',
    description: 'Outcome-driven product management, agile roadmaps, product discovery, sprint execution, and fractional CPO services for high-growth tech ventures.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/services/product-management#main",
    "url": "https://sociodigit.in/services/product-management",
    "name": "Product Management",
    "serviceType": "Digital Product Management & Fractional CPO",
    "description": "Outcome-driven product management, agile roadmaps, product discovery, sprint backlog orchestration, and fractional CPO services for high-growth tech ventures.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/services/product-management#breadcrumb",
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
        "name": "Services",
        "item": "https://sociodigit.in/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Product Management",
        "item": "https://sociodigit.in/services/product-management"
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
      <ProductManagementPage />
    </>
  );
}
