import React from 'react';
import type { Metadata } from 'next';
import ContactPage from './ContactPage';

export const metadata: Metadata = {
  title: 'Get in Touch — Start Your Project with Sociodigit | Free Consultation',
  description: "Ready to build something extraordinary? Contact Sociodigit's engineering and strategy team for a free 30-minute consultation. Bhubaneswar-based, globally delivered.",
  alternates: {
    canonical: 'https://sociodigit.in/contact',
    languages: {
      'en': 'https://sociodigit.in/contact',
      'x-default': 'https://sociodigit.in/contact',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/contact',
    title: 'Get in Touch — Start Your Project with Sociodigit | Free Consultation',
    description: "Ready to build something extraordinary? Contact Sociodigit's engineering and strategy team for a free 30-minute consultation. Bhubaneswar-based, globally delivered.",
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
    title: 'Get in Touch — Start Your Project with Sociodigit | Free Consultation',
    description: "Ready to build something extraordinary? Contact Sociodigit's engineering and strategy team for a free 30-minute consultation. Bhubaneswar-based, globally delivered.",
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://sociodigit.in/contact#contactpage",
    "url": "https://sociodigit.in/contact",
    "name": "Contact Us",
    "about": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://sociodigit.in/#organization",
    "name": "Sociodigit",
    "url": "https://sociodigit.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "HP4, Phase 2, Brit Colony, Laxmisagar",
      "addressLocality": "Bhubaneswar",
      "postalCode": "751006"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "hi@sociodigit.in",
        "telephone": "+91 7008381630",
        "url": "https://sociodigit.in/contact"
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
      <ContactPage />
    </>
  );
}
