import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import NavBar from './NavBar';
import NavBarDesktop from './NavbarDesktop';

function Header() {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileUserAgent);
    };

    checkIsMobile();
  }, []);

  if (isMobile === null) {
    return <div></div>; 
  }

  return (
    <div className={styles.header1}>
      <p className={styles.paragraph1}>Welcome To Nutri Fit</p>
      {isMobile ? <NavBar /> : <NavBarDesktop />}
    </div>
  );
}

export default Header;
