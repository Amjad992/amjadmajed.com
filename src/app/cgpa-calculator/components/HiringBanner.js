'use client';
import {useState, useEffect} from 'react';
import './HiringBanner.css';

export default function HiringBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleHide = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
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
          onClick={handleHide}
          className="hiring-banner-hide"
          aria-label="Hide hiring banner"
        >
          Hide
        </button>
      </div>
    </div>
  );
}
