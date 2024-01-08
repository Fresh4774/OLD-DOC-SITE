import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [navbarStyle, setNavbarStyle] = useState({});
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight
      - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      if (scrollPercentage >= 2) {
        setScroll(true);

        setNavbarStyle({
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        });
      } else {
        setNavbarStyle({});
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <nav style={navbarStyle} className={`navbar ${open ? 'nav-open' : ''} ${scroll ? 'scrolled' : ''}`}>
        <div className="tophead">
          <h1>
            <Link className="name-logo" spy smooth offset={50} duration={500} to="home">
              Aquin Zone
            </Link>
            {' '}
            <span className="blink" />
          </h1>
        </div>
      </nav>
  );
};

export default NavBar;
