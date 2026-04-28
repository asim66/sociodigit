// @ts-nocheck
import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
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
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
