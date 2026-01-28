import HeroSection from '../components/HeroSection';
import Script from 'next/script';

export default function Home() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Amjad Majed',
    jobTitle: 'Software Architect',
    worksFor: {
      '@type': 'Organization',
      name: 'Desol Int',
      url: 'https://desolint.com',
    },
    url: 'https://amjadmajed.com',
    sameAs: [
      'https://www.linkedin.com/in/amjad992',
      'https://github.com/amjad992',
      'https://www.upwork.com/freelancers/amjad',
      'https://www.fiverr.com/amjad992',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+923377232344',
      email: 'contact@amjadmajed.com',
      contactType: 'General Inquiry',
      availableLanguage: ['English'],
    },
    description:
      'Software architect and technology leader helping businesses transform with innovative solutions.',
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <main className="home-main">
        <HeroSection />
      </main>
    </>
  );
}
