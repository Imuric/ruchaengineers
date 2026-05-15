import type { Metadata } from 'next';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Rucha Engineers | Patterns, Dies & Castings – Kolhapur',
    template: '%s | Rucha Engineers',
  },
  description:
    'Leading manufacturer of all types of patterns & dies. Suppliers of all types of SG Iron & Cast Iron castings. Established 2016, Kolhapur, India.',
  keywords: [
    'Rucha Engineers',
    'Pattern shop Kolhapur',
    'Thermocol patterns',
    'Aluminium die',
    'CI casting',
    'SG Iron casting',
    'Pattern manufacturer India',
  ],
  openGraph: {
    title: 'Rucha Engineers – Patterns, Dies & Castings',
    description: 'Pioneer pattern shop in Kolhapur, serving 30+ foundries across India and USA.',
    locale: 'en_IN',
    type: 'website',
    url: 'https://www.ruchaengineers.com',
  },
  icons: {
    icon: '/logo-icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}