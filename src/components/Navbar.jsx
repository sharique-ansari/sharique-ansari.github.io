import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={`navbar glass animate-fade-in-up ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand">
        <NavLink 
          to="/" 
          className={`navbar-logo ${!scrolled && isHome ? 'large-logo' : ''}`}
        >
          Sharique Ansari
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink 
            to="/hire-me" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Hire Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
