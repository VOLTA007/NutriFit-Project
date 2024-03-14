import React from 'react';
import styles from '../styles/Header.module.css';
import NavBar from './NavBar';
import NavbarDesktop from './NavbarDesktop';

export default function Header({ isMobile = false }) { // Optional default prop for isMobile

  // Utilize a reliable library for client-side detection (if needed)
  const [isMobileClient, setIsMobileClient] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      const userAgent = navigator.userAgent;
      const mobileRegEx = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobileClient(mobileRegEx.test(userAgent));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to prevent memory leaks
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const combinedIsMobile = isMobile !== undefined ? isMobile : isMobileClient; // Prioritize SSR provided value

  return (
    <div className={styles.header1}>
      <p className={styles.paragraph1}>Welcome To Nutri Fit</p>
      {combinedIsMobile ? <NavBar /> : <NavbarDesktop />}
    </div>
  );
}