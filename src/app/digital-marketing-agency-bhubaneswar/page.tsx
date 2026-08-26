import React from 'react';
import type { Metadata } from 'next';
import DigitalMarketingAgencyBhubaneswarPage from './DigitalMarketingAgencyBhubaneswarPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Bhubaneswar | Sociodigit',
  description: 'Premier digital marketing agency in Bhubaneswar, Odisha. We deliver performance SEO, ROI-focused Google & Meta Ads, content strategy, and AI-driven growth.',
  alternates: {
    canonical: 'https://sociodigit.in/digital-marketing-agency-bhubaneswar',
    languages: {
      'en': 'https://sociodigit.in/digital-marketing-agency-bhubaneswar',
      'x-default': 'https://sociodigit.in/digital-marketing-agency-bhubaneswar',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/digital-marketing-agency-bhubaneswar',
    title: 'Digital Marketing Agency in Bhubaneswar | Sociodigit',
    description: 'Premier digital marketing agency in Bhubaneswar, Odisha. We deliver performance SEO, ROI-focused Google & Meta Ads, content strategy, and AI-driven growth.',
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
    title: 'Digital Marketing Agency in Bhubaneswar | Sociodigit',
    description: 'Premier digital marketing agency in Bhubaneswar, Odisha. We deliver performance SEO, ROI-focused Google & Meta Ads, content strategy, and AI-driven growth.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://sociodigit.in/digital-marketing-agency-bhubaneswar#localbusiness",
    "name": "Sociodigit — Digital Marketing Agency Bhubaneswar",
    "url": "https://sociodigit.in/digital-marketing-agency-bhubaneswar",
    "logo": "https://sociodigit.in/logo-dark.png",
    "image": "https://sociodigit.in/og-banner.jpg",
    "description": "Full-service digital marketing company in Bhubaneswar providing performance SEO, Google Ads PPC management, Meta advertising, social media growth, and conversion rate optimization across Odisha.",
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
    "areaServed": [
      { "@type": "City", "name": "Bhubaneswar" },
      { "@type": "State", "name": "Odisha" },
      { "@type": "City", "name": "Cuttack" },
      { "@type": "City", "name": "Puri" },
      { "@type": "City", "name": "Rourkela" },
      { "@type": "Country", "name": "India" }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/sociodigit",
      "https://twitter.com/sociodigit",
      "https://www.instagram.com/sociodigit",
      "https://www.facebook.com/sociodigit"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/digital-marketing-agency-bhubaneswar#service",
    "name": "Digital Marketing Agency Services Bhubaneswar",
    "serviceType": "Digital Marketing, SEO, PPC & Performance Media",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bhubaneswar"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Solutions",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bhubaneswar Local SEO & Map 3-Pack Growth" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads & Meta Performance PPC Campaigns" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing & Social Media Brand Building" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Online Reputation Management & Brand Protection" } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/digital-marketing-agency-bhubaneswar#breadcrumb",
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
        "name": "Digital Marketing Agency Bhubaneswar",
        "item": "https://sociodigit.in/digital-marketing-agency-bhubaneswar"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://sociodigit.in/digital-marketing-agency-bhubaneswar#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Sociodigit the best digital marketing agency in Bhubaneswar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sociodigit delivers data-backed digital marketing that prioritizes verifiable revenue over vanity metrics. We combine technical SEO, targeted Google Ads & Meta PPC, conversion-optimized landing pages, and AI-driven growth strategies tailored to businesses across Odisha and India."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can digital marketing deliver leads for my Bhubaneswar business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Targeted Google Ads and Meta paid media can generate qualified customer leads within 24 to 48 hours of campaign launch. High-intent organic SEO and content campaigns deliver sustainable compounded traffic and local authority within 60 to 90 days."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer Google Ads (PPC) and Social Media Marketing in Bhubaneswar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we handle complete PPC campaign setup, A/B ad creative testing, conversion tracking, retargeting funnels, and continuous bid optimization across Google Search, Display, YouTube, LinkedIn, Facebook, and Instagram."
        }
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
      <DigitalMarketingAgencyBhubaneswarPage />
    </>
  );
}
