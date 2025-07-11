import Navigation from '../../components/Navigation';
import './about.css';

export default function About() {
  return (
    <>
      <Navigation />
      <main className="about-page">
        <div className="container">
          {/* Hero Section */}
          <section className="about-hero">
            <h1>About Me</h1>
          </section>

          {/* Contact Section */}
          <section className="contact-section">
            <h2>Get In Touch</h2>
            <p>Let&apos;s connect and discuss how we can work together!</p>

            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <a href="tel:+923377232344">+92 3377 232344</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:contact@amjadmajed.com">
                    contact@amjadmajed.com
                  </a>
                  <a href="mailto:amjad@desolint.com">amjad@desolint.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Let&apos;s Connect</h4>
                  <p>Available for freelance projects and collaborations</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
