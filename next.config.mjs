/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance optimizations
  compress: true, // Enable gzip compression

  // Optimize CSS and JS
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Custom headers for caching and performance
  async headers() {
    return [
      {
        source: '/assets/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  redirects: async () => {
    return [
      {
        source: '/cgpaCalculator',
        destination: '/cgpa-calculator',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/amjad992/',
        permanent: true,
      },
      {
        source: '/fb',
        destination: 'https://www.facebook.com/Amjad992',
        permanent: true,
      },
      {
        source: '/facebook',
        destination: 'https://www.facebook.com/Amjad992',
        permanent: true,
      },
      {
        source: '/x',
        destination: 'https://x.com/amjad992',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://x.com/amjad992',
        permanent: true,
      },
      {
        source: '/insta',
        destination: 'https://www.instagram.com/Amjad992/',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/Amjad992/',
        permanent: true,
      },
      {
        source: '/git',
        destination: 'https://github.com/Amjad992',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/Amjad992',
        permanent: true,
      },
      {
        source: '/upwork',
        destination: 'https://www.upwork.com/fl/amjad',
        permanent: true,
      },
      {
        source: '/fiverr',
        destination: 'https://www.fiverr.com/amjad992',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
