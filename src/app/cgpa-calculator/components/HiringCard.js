'use client';
import {useState, useEffect} from 'react';
import './HiringCard.css';

export default function HiringCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show card after 2 seconds (no localStorage check)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    // Temporary hide only (no localStorage)
    setIsDismissed(true);
  };

  const handleApplyClick = () => {
    // Hide card when user clicks Apply Now
    handleDismiss();
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (isDismissed || !isVisible) return null;

  return (
    <>
      {/* Collapsed Icon */}
      {!isExpanded && (
        <button
          className="hiring-card-icon"
          onClick={toggleExpand}
          aria-label="Open hiring information"
        >
          <span className="hiring-icon-emoji">💼</span>
          <span className="hiring-icon-badge">We&apos;re Hiring!</span>
        </button>
      )}

      {/* Expanded Card */}
      {isExpanded && (
        <div className="hiring-card">
          <button
            className="hiring-card-close"
            onClick={handleDismiss}
            aria-label="Close hiring card"
          >
            ×
          </button>

          <button
            className="hiring-card-collapse"
            onClick={toggleExpand}
            aria-label="Minimize hiring card"
          >
            −
          </button>

          <div className="hiring-card-header">
            <div className="hiring-card-icon-large">💼</div>
            <h3>We&apos;re Hiring!</h3>
          </div>

          <div className="hiring-card-body">
            <p className="hiring-card-title">
              <strong>Computer Science Graduate?</strong>
            </p>
            <p className="hiring-card-description">
              Desol Int is looking for talented MERN Stack Developers
            </p>

            <div className="hiring-card-positions">
              <div className="position-badge">🟢 Junior Developers</div>
              <div className="position-badge">🔵 Senior Developers</div>
            </div>

            <p className="hiring-card-tech">
              <strong>Tech Stack:</strong> MongoDB, Express, React, Node.js
            </p>
          </div>

          <div className="hiring-card-footer">
            <a
              href="https://link.desolint.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="hiring-card-cta"
              onClick={handleApplyClick}
            >
              Apply Now →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
