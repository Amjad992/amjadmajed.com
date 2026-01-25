import Link from 'next/link';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo/Brand */}
        <div className="nav-brand">
          <Link href="/" className="brand-link">
            Amjad Majed
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
