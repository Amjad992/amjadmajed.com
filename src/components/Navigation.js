import Link from 'next/link';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo/Brand */}
        <div className="nav-brand">
          <a href="/" className="brand-link">
            Amjad Majed
          </a>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link href="/about" className="nav-link">
            About Me
          </Link>
          <Link href="/awards" className="nav-link">
            Awards
          </Link>
          <Link href="/voluntary" className="nav-link">
            Voluntary Work
          </Link>
        </div>

        {/* Mobile Menu Toggle (for future mobile optimization) */}
        <div className="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
