import React from 'react';
import type { Metadata } from 'next';
import ContactPage from './ContactPage';

export const metadata: Metadata = {
  title: 'Contact Sociodigit | Bhubaneswar, Odisha AI Tech & SEO Agency',
  description: "Contact Sociodigit in Laxmisagar, Bhubaneswar, Odisha. Book a free 30-minute consultation for AI software development, cloud infrastructure, and local SEO ranking.",
  keywords: [
    'contact Sociodigit',
    'SEO agency Bhubaneswar contact',
    'software company Bhubaneswar office',
    'digital marketing agency Laxmisagar',
    'IT company phone number Bhubaneswar',
  ],
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
    title: 'Contact Sociodigit | Bhubaneswar, Odisha AI Tech & SEO Agency',
    description: "Contact Sociodigit in Laxmisagar, Bhubaneswar, Odisha. Book a free 30-minute consultation for AI software development, cloud infrastructure, and local SEO ranking.",
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
    title: 'Contact Sociodigit | Bhubaneswar, Odisha AI Tech & SEO Agency',
    description: "Contact Sociodigit in Laxmisagar, Bhubaneswar, Odisha. Book a free 30-minute consultation for AI software development, cloud infrastructure, and local SEO ranking.",
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://sociodigit.in/contact#contactpage",
    "url": "https://sociodigit.in/contact",
    "name": "Contact Sociodigit Bhubaneswar",
    "about": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://sociodigit.in/contact#localbusiness",
    "name": "Sociodigit — Bhubaneswar Office",
    "url": "https://sociodigit.in/contact",
    "telephone": "+91-7008381630",
    "email": "hi@sociodigit.in",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "HP4, Phase 2, Brit Colony, Laxmisagar",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Odisha",
      "postalCode": "751006",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.2724",
      "longitude": "85.8488"
    },
    "hasMap": "https://maps.google.com/?q=20.2724,85.8488",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:30",
      "closes": "18:30"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "64",
      "bestRating": "5"
    }
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
