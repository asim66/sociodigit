import React from 'react';
import type { Metadata } from 'next';
import SeoAgencyBhubaneswarPage from './SeoAgencyBhubaneswarPage';

export const metadata: Metadata = {
  title: 'Best SEO Agency in Bhubaneswar, Odisha | Sociodigit',
  description: 'Top SEO agency in Bhubaneswar, Odisha. We deliver Google Map 3-Pack rankings, technical Core Web Vitals, E-E-A-T authority, and Generative Engine Optimization.',
  alternates: {
    canonical: 'https://sociodigit.in/seo-agency-bhubaneswar',
    languages: {
      'en': 'https://sociodigit.in/seo-agency-bhubaneswar',
      'x-default': 'https://sociodigit.in/seo-agency-bhubaneswar',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/seo-agency-bhubaneswar',
    title: 'Best SEO Agency in Bhubaneswar, Odisha | Sociodigit',
    description: 'Top SEO agency in Bhubaneswar, Odisha. We deliver Google Map 3-Pack rankings, technical Core Web Vitals, E-E-A-T authority, and Generative Engine Optimization.',
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
    title: 'Best SEO Agency in Bhubaneswar, Odisha | Sociodigit',
    description: 'Top SEO agency in Bhubaneswar, Odisha. We deliver Google Map 3-Pack rankings, technical Core Web Vitals, E-E-A-T authority, and Generative Engine Optimization.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://sociodigit.in/seo-agency-bhubaneswar#localbusiness",
    "name": "Sociodigit — Best SEO Agency in Bhubaneswar",
    "url": "https://sociodigit.in/seo-agency-bhubaneswar",
    "logo": "https://sociodigit.in/logo-dark.png",
    "image": "https://sociodigit.in/og-banner.jpg",
    "description": "Premier AI-powered SEO agency in Bhubaneswar, Odisha. Specializing in Google Map 3-Pack ranking, Generative Engine Optimization (GEO), and technical SEO.",
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
      { "@type": "City", "name": "Rourkela" },
      { "@type": "City", "name": "Puri" },
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
    "@id": "https://sociodigit.in/seo-agency-bhubaneswar#service",
    "name": "SEO Agency Services in Bhubaneswar",
    "serviceType": "Search Engine Optimization & Generative Engine Optimization",
    "provider": {
      "@id": "https://sociodigit.in/seo-agency-bhubaneswar#localbusiness"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bhubaneswar"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO & GEO Services Catalog",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Business Profile & Map 3-Pack Optimization" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Generative Engine Optimization (GEO for ChatGPT & Perplexity)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical Core Web Vitals SEO Audit" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local Search Authority Link Building in Odisha" } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/seo-agency-bhubaneswar#breadcrumb",
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
        "name": "SEO Agency Bhubaneswar",
        "item": "https://sociodigit.in/seo-agency-bhubaneswar"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://sociodigit.in/seo-agency-bhubaneswar#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is Sociodigit recognized as the best SEO agency in Bhubaneswar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sociodigit is Odisha's pioneer in AI-powered search optimization. We combine technical Core Web Vitals mastery, rich JSON-LD schema graphs, high-intent local keyword targeting, and Generative Engine Optimization (GEO) to rank your brand on both Google SERPs and AI agents like ChatGPT & Perplexity."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to rank on Google for a business in Bhubaneswar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For local searches in Bhubaneswar (e.g., Google Map 3-Pack), noticeable improvements typically occur within 30 to 60 days. Competitive organic keywords across Odisha or India usually take 3 to 6 months of continuous technical optimization."
        }
      },
      {
        "@type": "Question",
        "name": "What is Generative Engine Optimization (GEO) and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GEO is the practice of optimizing your website's content and schema markup so that AI answer engines (ChatGPT, Google Gemini, Perplexity, SearchGPT) cite your brand as the primary recommendation."
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
      <SeoAgencyBhubaneswarPage />
    </>
  );
}
