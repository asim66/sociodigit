import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-900 px-6 text-center pt-24">
      <h1 className="text-6xl md:text-8xl font-display font-black text-brand-orange mb-4">404</h1>
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-slate-600 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="btn-primary">
        Return to Home
      </Link>
    </div>
  );
}
