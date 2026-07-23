import React from 'react';
import type { Metadata } from 'next';
import CsrPage from './CsrPage';

export const metadata: Metadata = {
  title: 'Corporate Social Responsibility (CSR) & Tech Impact | Sociodigit',
  description: 'Empowering communities through digital literacy programs, green computing practices, and social impact initiatives.',
  alternates: {
    canonical: 'https://sociodigit.in/csr',
    languages: {
      'en': 'https://sociodigit.in/csr',
      'x-default': 'https://sociodigit.in/csr',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/csr',
    title: 'Corporate Social Responsibility (CSR) & Tech Impact | Sociodigit',
    description: 'Empowering communities through digital literacy programs, green computing practices, and social impact initiatives.',
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
    title: 'Corporate Social Responsibility (CSR) & Tech Impact | Sociodigit',
    description: 'Empowering communities through digital literacy programs, green computing practices, and social impact initiatives.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sociodigit.in/csr#main",
    "url": "https://sociodigit.in/csr",
    "name": "CSR & Community Impact",
    "description": "Empowering communities through digital literacy programs, green computing practices, and social impact initiatives.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/csr#breadcrumb",
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
        "name": "CSR & Community Impact",
        "item": "https://sociodigit.in/csr"
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
      <CsrPage />
    </>
  );
}
