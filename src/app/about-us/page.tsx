import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Redirecting to About Us | Sociodigit',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://sociodigit.in/about',
  },
};

export default function AboutUsRedirect() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-32 bg-space-blue text-white">
      <meta httpEquiv="refresh" content="0;url=/about" />
      <h1 className="text-3xl font-display font-bold mb-4">Redirecting to About Us...</h1>
      <p className="text-white/60 mb-6">If you are not redirected automatically, please click below.</p>
      <Link href="/about" className="btn-primary">
        Go to About Us
      </Link>
    </div>
  );
}
