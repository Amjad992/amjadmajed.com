'use client';
import {useState} from 'react';
import Link from 'next/link';
import './Navigation.css';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo/Brand */}
        <div className="nav-brand">
          <Link href="/" className="brand-link" onClick={closeMobileMenu}>
            Amjad Majed
          </Link>
        </div>

        {/* Navigation Links */}
        <div
          className={`nav-links ${
            isMobileMenuOpen ? 'nav-links-mobile-open' : ''
          }`}
        >
          <Link href="/about" className="nav-link" onClick={closeMobileMenu}>
            About Me
          </Link>
          <Link href="/awards" className="nav-link" onClick={closeMobileMenu}>
            Awards
          </Link>
          <Link
            href="/voluntary"
            className="nav-link"
            onClick={closeMobileMenu}
          >
            Voluntary Work
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-menu-toggle ${
            isMobileMenuOpen ? 'mobile-menu-toggle-open' : ''
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navigation;
