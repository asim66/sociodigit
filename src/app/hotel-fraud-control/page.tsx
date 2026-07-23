import React from 'react';
import type { Metadata } from 'next';
import HotelFraudControlPage from './HotelFraudControlPage';

export const metadata: Metadata = {
  title: 'Hotel OTA Fraud Control & Revenue Protection System | Sociodigit',
  description: 'AI-powered fraud detection and OTA channel monitoring protecting hotel revenues from unauthorized rate manipulation and fake bookings.',
  alternates: {
    canonical: 'https://sociodigit.in/hotel-fraud-control',
    languages: {
      'en': 'https://sociodigit.in/hotel-fraud-control',
      'x-default': 'https://sociodigit.in/hotel-fraud-control',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/hotel-fraud-control',
    title: 'Hotel OTA Fraud Control & Revenue Protection System | Sociodigit',
    description: 'AI-powered fraud detection and OTA channel monitoring protecting hotel revenues from unauthorized rate manipulation and fake bookings.',
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
    title: 'Hotel OTA Fraud Control & Revenue Protection System | Sociodigit',
    description: 'AI-powered fraud detection and OTA channel monitoring protecting hotel revenues from unauthorized rate manipulation and fake bookings.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sociodigit.in/hotel-fraud-control#main",
    "url": "https://sociodigit.in/hotel-fraud-control",
    "name": "Hotel OTA Fraud Control",
    "description": "AI-powered fraud detection and OTA channel monitoring protecting hotel revenues from unauthorized rate manipulation and fake bookings.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/hotel-fraud-control#breadcrumb",
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
        "name": "Hotel OTA Fraud Control",
        "item": "https://sociodigit.in/hotel-fraud-control"
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
      <HotelFraudControlPage />
    </>
  );
}
