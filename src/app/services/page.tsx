import React from 'react';
import type { Metadata } from 'next';
import ServicesPage from './ServicesPage';

export const metadata: Metadata = {
  title: 'Full-Stack Digital & Engineering Services | Sociodigit',
  description: "Explore Sociodigit's service suite: custom software development, cloud DevOps, QA testing, UI/UX design, digital marketing, and IT consulting.",
  alternates: {
    canonical: 'https://sociodigit.in/services',
    languages: {
      'en': 'https://sociodigit.in/services',
      'x-default': 'https://sociodigit.in/services',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/services',
    title: 'Full-Stack Digital & Engineering Services | Sociodigit',
    description: "Explore Sociodigit's service suite: custom software development, cloud DevOps, QA testing, UI/UX design, digital marketing, and IT consulting.",
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
    title: 'Full-Stack Digital & Engineering Services | Sociodigit',
    description: "Explore Sociodigit's service suite: custom software development, cloud DevOps, QA testing, UI/UX design, digital marketing, and IT consulting.",
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://sociodigit.in/services#collection",
      "url": "https://sociodigit.in/services",
      "name": "Full-Stack Digital & Engineering Services | Sociodigit",
      "description": "Explore Sociodigit's complete service suite covering software development, DevOps, QA testing, UI/UX design, digital marketing, and IT consulting.",
      "publisher": {
        "@id": "https://sociodigit.in/#organization"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://sociodigit.in/services#itemlist",
      "name": "Sociodigit Digital Services",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://sociodigit.in/services/software-development", "name": "Software Development" },
        { "@type": "ListItem", "position": 2, "url": "https://sociodigit.in/services/devops", "name": "Cloud & DevOps" },
        { "@type": "ListItem", "position": 3, "url": "https://sociodigit.in/services/qa-automation", "name": "QA Automation" },
        { "@type": "ListItem", "position": 4, "url": "https://sociodigit.in/services/digital-marketing", "name": "Digital Marketing" },
        { "@type": "ListItem", "position": 5, "url": "https://sociodigit.in/services/security-consulting", "name": "Security Consulting" },
        { "@type": "ListItem", "position": 6, "url": "https://sociodigit.in/services/content-strategy", "name": "Content Strategy" },
        { "@type": "ListItem", "position": 7, "url": "https://sociodigit.in/services/digital-transformation", "name": "Digital Transformation" },
        { "@type": "ListItem", "position": 8, "url": "https://sociodigit.in/services/user-experience", "name": "User Experience" },
        { "@type": "ListItem", "position": 9, "url": "https://sociodigit.in/services/consulting", "name": "Software Consulting" },
        { "@type": "ListItem", "position": 10, "url": "https://sociodigit.in/services/product-design", "name": "Product Design" },
        { "@type": "ListItem", "position": 11, "url": "https://sociodigit.in/services/custom-apps", "name": "Custom Apps" },
        { "@type": "ListItem", "position": 12, "url": "https://sociodigit.in/services/infrastructure", "name": "Infrastructure" },
        { "@type": "ListItem", "position": 13, "url": "https://sociodigit.in/services/strategy-roadmap", "name": "Strategy & Roadmap" },
        { "@type": "ListItem", "position": 14, "url": "https://sociodigit.in/services/tech-audit", "name": "Tech Audit" }
      ]
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
      <ServicesPage />
    </>
  );
}
