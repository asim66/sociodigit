import React from 'react';
import type { Metadata } from 'next';
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: 'Sociodigit | Best AI Software, Cloud & Digital Marketing Agency Bhubaneswar',
  description: 'Sociodigit is an AI-driven technology & digital marketing agency headquartered in Bhubaneswar, Odisha. We deliver top Google rankings, custom software, cloud DevOps, and ROI marketing.',
  keywords: [
    'SEO agency Bhubaneswar',
    'best SEO company in Bhubaneswar',
    'digital marketing agency Bhubaneswar',
    'software development company Bhubaneswar',
    'web development company Odisha',
    'Generative Engine Optimization Bhubaneswar',
    'AI marketing agency Bhubaneswar',
    'Sociodigit',
  ],
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
    title: 'Sociodigit | Best AI Software, Cloud & Digital Marketing Agency Bhubaneswar',
    description: 'Sociodigit is an AI-driven technology & digital marketing agency headquartered in Bhubaneswar, Odisha. We deliver top Google rankings, custom software, cloud DevOps, and ROI marketing.',
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
    title: 'Sociodigit | Best AI Software, Cloud & Digital Marketing Agency Bhubaneswar',
    description: 'Sociodigit is an AI-driven technology & digital marketing agency headquartered in Bhubaneswar, Odisha. We deliver top Google rankings, custom software, cloud DevOps, and ROI marketing.',
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
      "name": "Sociodigit — Best AI-Powered Technology & Digital Agency in Bhubaneswar, Odisha",
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
      "description": "Sociodigit is an AI-powered IT & digital marketing agency in Bhubaneswar, Odisha engineering scalable software, cloud infrastructure, QA automation, and high-intent SEO. Trusted by 200+ companies globally.",
      "inLanguage": "en"
    },
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": "https://sociodigit.in/#organization",
      "name": "Sociodigit",
      "alternateName": "Sociodigit Bhubaneswar",
      "url": "https://sociodigit.in/",
      "description": "Premier AI-powered software engineering and digital marketing agency based in Bhubaneswar, Odisha. Delivering custom software, cloud & DevOps, QA automation, and top-ranking SEO.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sociodigit.in/logo-dark.png",
        "width": 200,
        "height": 60
      },
      "image": "https://sociodigit.in/logo-dark.png",
      "email": "hi@sociodigit.in",
      "telephone": "+91-7008381630",
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
      },
      "areaServed": [
        { "@type": "City", "name": "Bhubaneswar" },
        { "@type": "State", "name": "Odisha" },
        { "@type": "City", "name": "Cuttack" },
        { "@type": "City", "name": "Puri" },
        { "@type": "City", "name": "Rourkela" },
        { "@type": "Country", "name": "India" }
      ],
      "knowsAbout": [
        "Search Engine Optimization (SEO)",
        "Generative Engine Optimization (GEO)",
        "Core Web Vitals Optimization",
        "Custom Software Development",
        "Cloud Architecture and DevOps",
        "Google Ads and PPC Management",
        "Meta Ads and Social Media Marketing",
        "Bhubaneswar Digital Marketing"
      ],
      "sameAs": [
        "https://www.linkedin.com/company/sociodigit",
        "https://twitter.com/sociodigit",
        "https://www.instagram.com/sociodigit",
        "https://www.facebook.com/sociodigit",
        "https://github.com/sociodigit"
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
