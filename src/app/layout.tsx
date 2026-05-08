// @ts-nocheck
import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import ClientLayout from '../components/ClientLayout';

export const metadata: Metadata = {
  title: 'Sociodigit',
  description: 'Premium Technology & Design Agency',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {gscId && <meta name="google-site-verification" content={gscId} />}
      </head>
      <body>
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
