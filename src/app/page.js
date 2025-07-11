import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="home-main">
        <HeroSection />
      </main>
    </>
  );
}
