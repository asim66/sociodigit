// @ts-nocheck
import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import ClientLayout from '../components/ClientLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://sociodigit.in'),
  title: 'Sociodigit',
  description: 'Premium Technology & Design Agency',
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
  const reb2bId = process.env.NEXT_PUBLIC_REB2B_ID || 'EN4M0HJKVLOM';

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
        {reb2bId && (
          <Script id="reb2b-script" strategy="afterInteractive">
            {`
              !function(key) {if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("${reb2bId}");
            `}
          </Script>
        )}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
