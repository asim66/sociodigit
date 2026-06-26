import React from 'react';
import type { Metadata } from 'next';
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: 'Sociodigit — AI-Powered IT & Consulting Agency | Software, Cloud & Growth',
  description: 'Sociodigit is an AI-powered IT & consulting agency engineering scalable software, cloud infrastructure, QA automation, and data-driven digital marketing. Trusted by 200+ companies globally.',
  verification: {
    google: 'google6ad649de0cf7f95a',
  },
  alternates: {
    canonical: 'https://sociodigit.in',
    languages: {
      'en': 'https://sociodigit.in/',
      'x-default': 'https://sociodigit.in/',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/',
    title: 'Sociodigit — AI-Powered IT & Consulting Agency | Software, Cloud & Growth',
    description: 'Sociodigit is an AI-powered IT & consulting agency engineering scalable software, cloud infrastructure, QA automation, and data-driven digital marketing. Trusted by 200+ companies globally.',
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
    title: 'Sociodigit — AI-Powered IT & Consulting Agency | Software, Cloud & Growth',
    description: 'Sociodigit is an AI-powered IT & consulting agency engineering scalable software, cloud infrastructure, QA automation, and data-driven digital marketing. Trusted by 200+ companies globally.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://sociodigit.in/#webpage",
      "url": "https://sociodigit.in/",
      "name": "Sociodigit — AI-Powered IT & Consulting Agency | Software, Cloud & Growth",
      "isPartOf": {
        "@id": "https://sociodigit.in/#website"
      },
      "about": {
        "@id": "https://sociodigit.in/#organization"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://sociodigit.in/_next/static/media/home_hero_tech_render_1773750696589.fd497d27.png"
      },
      "description": "Sociodigit is an AI-powered IT & consulting agency engineering scalable software, cloud infrastructure, QA automation, and data-driven digital marketing. Trusted by 200+ companies globally.",
      "inLanguage": "en"
    },
    {
      "@type": "Organization",
      "@id": "https://sociodigit.in/#organization",
      "name": "Sociodigit",
      "url": "https://sociodigit.in/",
      "description": "AI-powered IT & consulting agency delivering software development, cloud & DevOps, QA automation, product design, and digital marketing to 200+ companies globally.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sociodigit.in/logo-dark.png",
        "width": 200,
        "height": 60
      },
      "image": "https://sociodigit.in/logo-dark.png",
      "email": "hi@sociodigit.in",
      "telephone": "+91-7008381630",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "HP4, Phase 2, Brit Colony, Laxmisagar",
        "addressLocality": "Bhubaneswar",
        "postalCode": "751006",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/sociodigit",
        "https://twitter.com/sociodigit",
        "https://www.instagram.com/sociodigit",
        "https://www.facebook.com/sociodigit"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://sociodigit.in/#website",
      "url": "https://sociodigit.in/",
      "name": "Sociodigit",
      "inLanguage": "en",
      "publisher": {
        "@id": "https://sociodigit.in/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://sociodigit.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
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
      <HomePage />
    </>
  );
}
