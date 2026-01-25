/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
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
        source: '/twitter',
        destination: 'https://twitter.com/Amjad992',
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
    ];
  },
};

export default nextConfig;
