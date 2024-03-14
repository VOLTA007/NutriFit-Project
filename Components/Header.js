import React from 'react';
import styles from '../styles/Header.module.css';
import NavBar from './NavBar';
import NavbarDesktop from './NavbarDesktop';

function Header({ isMobile = false }) { // Optional default prop for isMobile

  // Client-side detection using a reliable regular expression
  const [isMobileClient, setIsMobileClient] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      const userAgent = navigator.userAgent;
      const mobileRegEx = /(android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini)/i;
      setIsMobileClient(mobileRegEx.test(userAgent));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to prevent memory leaks
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prioritize server-side provided isMobile for accurate initial rendering
  const combinedIsMobile = isMobile !== undefined ? isMobile : isMobileClient;

  return (
    <div className={styles.header1}>
      <p className={styles.paragraph1}>Welcome To Nutri Fit</p>
      {combinedIsMobile ? <NavBar /> : <NavbarDesktop />}
    </div>
  );
}

export default Header;

// Server-side detection using `getStaticProps` or `getServerSideProps` (optional)
// Example using getStaticProps
export async function getStaticProps(context) {
  const req = context.req;
  const userAgent = req.headers['user-agent'];

  // Refined logic to detect mobile devices (can be improved further)
  const isMobile = userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i);

  return {
    props: {
      isMobile,
    },
  };
}