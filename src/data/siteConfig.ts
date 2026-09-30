/**
 * Centralized business constants for schema markup, NAP consistency, and metadata.
 * ALL pages must import from here — never hardcode these values directly.
 *
 * IMPORTANT: reviewCount MUST match the real Google Business Profile review count.
 * Update this file whenever new reviews are received.
 */

export const BUSINESS = {
  name: 'Sociodigit',
  legalName: 'Sociodigit',
  alternateName: 'Sociodigit Bhubaneswar',
  url: 'https://sociodigit.in',
  email: 'hi@sociodigit.in',

  // NAP — must be identical everywhere (schema + visible HTML + citations)
  phone: '+91 7008381630',
  phoneTel: '+917008381630',   // for tel: href (no spaces/dashes)
  phoneSchema: '+91 7008381630', // for JSON-LD telephone field

  address: {
    streetAddress: 'HP4, Phase 2, Brit Colony, Laxmisagar',
    addressLocality: 'Bhubaneswar',
    addressRegion: 'Odisha',
    postalCode: '751006',
    addressCountry: 'IN',
    display: 'HP4, Phase 2, Brit Colony, Laxmisagar, Bhubaneswar, Odisha 751006',
  },

  geo: {
    latitude: '20.2724',
    longitude: '85.8488',
  },

  // Google Business Profile
  gbpCid: 'https://www.google.com/maps?cid=9060003420575086868',
  gbpPlaceId: 'ChIJs1vuqROnGTkRFLkztxubm30',
  gbpMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.736564207318!2d85.8568727!3d20.269757399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a713a9ee5bb3%3A0x7dbb991beb33b914!2sSociodigit!5e0!3m2!1sen!2sin',
  gbpWriteReview: 'https://search.google.com/local/writereview?placeid=ChIJs1vuqROnGTkRFLkztxubm30',

  openingHours: {
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:30',
    closes: '18:30',
    displayText: 'Mon–Fri: 9:30 AM – 6:30 PM IST',
  },

  // Aggregate Rating — update when GBP review count changes
  rating: {
    ratingValue: 4.9,          // number, not string
    reviewCount: 64,           // number — must match real GBP count
    bestRating: 5,             // number
  },

  priceRange: '₹₹₹',

  logo: {
    url: 'https://sociodigit.in/logo-dark.png',
    width: 200,
    height: 60,
  },

  ogBanner: {
    url: 'https://sociodigit.in/og-banner.jpg',
    width: 1200,
    height: 630,
  },

  social: {
    twitter: 'https://twitter.com/sociodigit',
    twitterHandle: '@sociodigit',
    linkedin: 'https://www.linkedin.com/company/sociodigit',
    instagram: 'https://www.instagram.com/sociodigit',
    facebook: 'https://www.facebook.com/sociodigit',
    github: 'https://github.com/sociodigit',
  },

  areaServed: {
    // For homepage + global schema
    global: [
      { '@type': 'City', name: 'Bhubaneswar' },
      { '@type': 'State', name: 'Odisha' },
      { '@type': 'City', name: 'Cuttack' },
      { '@type': 'City', name: 'Puri' },
      { '@type': 'City', name: 'Rourkela' },
      { '@type': 'Country', name: 'India' },
    ],
    // For hub pages — granular neighborhood coverage
    bhubaneswar: [
      { '@type': 'City', name: 'Bhubaneswar' },
      { '@type': 'AdministrativeArea', name: 'Patia, Bhubaneswar' },
      { '@type': 'AdministrativeArea', name: 'Saheed Nagar, Bhubaneswar' },
      { '@type': 'AdministrativeArea', name: 'Infocity, Bhubaneswar' },
      { '@type': 'AdministrativeArea', name: 'Laxmisagar, Bhubaneswar' },
      { '@type': 'AdministrativeArea', name: 'Jaydev Vihar, Bhubaneswar' },
      { '@type': 'AdministrativeArea', name: 'Chandrasekharpur, Bhubaneswar' },
      { '@type': 'City', name: 'Cuttack' },
      { '@type': 'City', name: 'Rourkela' },
      { '@type': 'City', name: 'Puri' },
      { '@type': 'State', name: 'Odisha' },
      { '@type': 'Country', name: 'India' },
    ],
  },

  sameAs: [
    'https://www.linkedin.com/company/sociodigit',
    'https://twitter.com/sociodigit',
    'https://www.instagram.com/sociodigit',
    'https://www.facebook.com/sociodigit',
    'https://github.com/sociodigit',
  ],
} as const;
