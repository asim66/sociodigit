import React from 'react';
import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import ClientLayout from '../components/ClientLayout';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

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
  const gscId = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Geo-Targeting for Bhubaneswar & Odisha Local Search */}
        <meta name="geo.region" content="IN-OR" />
        <meta name="geo.placename" content="Bhubaneswar, Odisha, India" />
        <meta name="geo.position" content="20.2724;85.8488" />
        <meta name="ICBM" content="20.2724, 85.8488" />
        {gscId && <meta name="google-site-verification" content={gscId} />}
      </head>
      <body suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KRR2NJB3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Non-blocking Analytics & Tag Manager: Loaded on first user interaction or when idle */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            (function() {
              var loaded = false;
              function loadGTM() {
                if (loaded) return;
                loaded = true;
                ['scroll', 'touchstart', 'pointerdown', 'keydown'].forEach(function(e) {
                  window.removeEventListener(e, loadGTM, { passive: true });
                });
                var f = document.getElementsByTagName('script')[0];
                var j = document.createElement('script');
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-KRR2NJB3';
                if (f && f.parentNode) {
                  f.parentNode.insertBefore(j, f);
                } else {
                  document.head.appendChild(j);
                }
              }
              ['scroll', 'touchstart', 'pointerdown', 'keydown'].forEach(function(e) {
                window.addEventListener(e, loadGTM, { passive: true, once: true });
              });
              if ('requestIdleCallback' in window) {
                requestIdleCallback(function() { setTimeout(loadGTM, 3500); }, { timeout: 4000 });
              } else {
                setTimeout(loadGTM, 3500);
              }
            })();
          `}
        </Script>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
