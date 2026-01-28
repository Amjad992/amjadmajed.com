import './globals.css';
import PropTypes from 'prop-types';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    {media: '(prefers-color-scheme: light)', color: '#ffffff'},
    {media: '(prefers-color-scheme: dark)', color: '#000000'},
  ],
};

export const metadata = {
  metadataBase: new URL('https://amjadmajed.com'),

  title: {
    default: 'Amjad Majed - Software Architect & Technology Leader',
    template: '%s | Amjad Majed',
  },

  description:
    'I help business transform with technology. I lead the team of Desol Int. where we work with clients to build innovative solutions that drive success.',

  keywords: [
    'Amjad Majed',
    'Software Architect',
    'Technology Leader',
    'Desol Int',
    'Software Development',
    'Web Development',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'CGPA Calculator',
    'Portfolio',
  ],

  authors: [{name: 'Amjad Majed', url: 'https://amjadmajed.com'}],
  creator: 'Amjad Majed',
  publisher: 'Amjad Majed',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amjadmajed.com',
    siteName: 'Amjad Majed',
    title: 'Amjad Majed - Software Architect & Technology Leader',
    description:
      'I help business transform with technology. I lead the team of Desol Int. where we work with clients to build innovative solutions that drive success.',
    images: [
      {
        url: '/assets/amjad-photo.jpg',
        width: 300,
        height: 300,
        alt: 'Amjad Majed - Software Architect',
      },
    ],
  },

  twitter: {
    card: 'summary',
    title: 'Amjad Majed - Software Architect & Technology Leader',
    description:
      'I help business transform with technology. I lead the team of Desol Int. where we work with clients to build innovative solutions that drive success.',
    creator: '@amjad992',
    images: ['/assets/amjad-photo.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      {url: '/favicon.ico'},
      {url: '/icon.png', type: 'image/png', sizes: '32x32'},
    ],
    apple: [{url: '/apple-icon.png', sizes: '180x180', type: 'image/png'}],
  },

  verification: {
    google: 'PLACEHOLDER_FOR_GOOGLE_SEARCH_CONSOLE',
  },
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
