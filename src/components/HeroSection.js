'use client';

import PropTypes from 'prop-types';
import Image from 'next/image';
import './HeroSection.css';

// Social Media Icons Component
const SocialIcon = ({href, bgColor, children, label}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
    style={{backgroundColor: bgColor}}
    aria-label={label}
  >
    {children}
  </a>
);

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

// Icons using simple SVG paths
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const UpworkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.002-2.439-5.439-5.439-5.439z" />
  </svg>
);

const FiverrIcon = () => (
  <svg width="20" height="20" viewBox="0 0 508.02 508.02" fill="currentColor">
    <circle cx="254.01" cy="254.01" r="254.01" />
    <circle fill="#1dbf73" cx="315.97" cy="162.19" r="26.87" />
    <path
      fill="#1dbf73"
      d="M345.87,207.66h-123V199.6c0-15.83,15.83-16.13,23.89-16.13,9.25,0,13.44.9,13.44.9v-43.6a155.21,155.21,0,0,0-19.71-1.19c-25.68,0-73.16,7.16-73.16,61.51V208h-22.4v40.31h22.4v85.1h-20.9v40.31H247.34V333.37H222.85v-85.1H290v85.1H269.13v40.31h97.65V333.37H345.87Z"
      transform="translate(-1.83 -0.98)"
    />
  </svg>
);

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          {/* Hero text and photo container */}
          <div className="hero-main">
            {/* Left side - Text content */}
            <div className="hero-text">
              <h1 className="hero-greeting">Hello World!</h1>
              <h2 className="hero-name">I am Amjad Majed</h2>
              <p className="hero-tagline">
                Helping business transform with technology, I lead the team in{' '}
                <span 
                  className="link-text"
                  onClick={() => window.open('https://desolint.com', '_blank')}
                >
                  desolint.com
                </span>
                {' '} to build scalable applications and deliver innovative, reliable solutions.
              </p>
            </div>

            {/* Right side - Personal photo */}
            <div className="hero-photo">
              <Image
                src="/assets/amjad-photo.jpg"
                alt="Amjad Majed"
                width={300}
                height={300}
                className="profile-image"
                priority
              />
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="sections-container">
            <div className="social-section">
              <h3 className="social-title">Connect with me on</h3>
              <div className="social-icons">
                <SocialIcon
                  href="https://www.linkedin.com/in/amjad992"
                  bgColor="var(--linkedin)"
                  label="LinkedIn"
                >
                  <LinkedInIcon />
                </SocialIcon>
                <SocialIcon
                  href="https://github.com/amjad992"
                  bgColor="var(--github)"
                  label="GitHub"
                >
                  <GitHubIcon />
                </SocialIcon>
              </div>
            </div>

            {/* Freelancing Platforms */}
            <div className="freelancing-section">
              <h3 className="freelancing-title">Hire me on</h3>
              <div className="freelancing-icons">
                <SocialIcon
                  href="https://www.upwork.com/freelancers/amjad"
                  bgColor="var(--upwork)"
                  label="Upwork"
                >
                  <UpworkIcon />
                </SocialIcon>
                <SocialIcon
                  href="https://www.fiverr.com/amjad992"
                  bgColor="var(--fiverr)"
                  label="Fiverr"
                >
                  <FiverrIcon />
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
