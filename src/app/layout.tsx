// @ts-nocheck
import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import ClientLayout from '../components/ClientLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://sociodigit.in'),
  title: {
    default: 'Sociodigit | AI Software, Cloud & Digital Marketing Agency',
    template: '%s | Sociodigit Bhubaneswar',
  },
  description: 'Sociodigit is an AI-driven agency in Bhubaneswar, Odisha engineering scalable software, cloud DevOps, QA automation, and performance digital marketing.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-48.png', type: 'image/png', sizes: '48x48' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gscId = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KRR2NJB3');`,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Geo-Targeting for Bhubaneswar & Odisha Local Search */}
        <meta name="geo.region" content="IN-OR" />
        <meta name="geo.placename" content="Bhubaneswar, Odisha, India" />
        <meta name="geo.position" content="20.2724;85.8488" />
        <meta name="ICBM" content="20.2724, 85.8488" />
        {gscId && <meta name="google-site-verification" content={gscId} />}
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KRR2NJB3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
