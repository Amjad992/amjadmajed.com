'use client';
import {useState, useEffect} from 'react';
import './HiringBanner.css';

export default function HiringBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the banner before
    const isDismissed = localStorage.getItem('hiring-banner-dismissed');
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('hiring-banner-dismissed', 'true');
    }, 300); // Match animation duration
  };

  if (!isVisible) return null;

  return (
    <div className={`hiring-banner ${isClosing ? 'closing' : ''}`}>
      <div className="hiring-banner-content">
        <div className="hiring-banner-icon">💼</div>
        <div className="hiring-banner-text">
          <strong>Computer Science Graduate?</strong>
          <span>
            Desol Int is hiring MERN Stack Developers (Junior & Senior)!
          </span>
        </div>
        <a
          href="https://link.desolint.com/apply"
          target="_blank"
          rel="noopener noreferrer"
          className="hiring-banner-cta"
        >
          Apply Now →
        </a>
        <button
          onClick={handleDismiss}
          className="hiring-banner-close"
          aria-label="Dismiss hiring banner"
        >
          ×
        </button>
      </div>
    </div>
  );
}
