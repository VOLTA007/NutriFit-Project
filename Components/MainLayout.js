import { SessionProvider } from "next-auth/react"
import Footer from "./Footer"
import Header from "./Header"
import NavBarDesktop from './NavbarDesktop';
import NavBar from './NavBar';
import { useEffect, useState } from "react";


export default function MainLayout(props) {

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
        <>
            <SessionProvider>
                <Header />
                {isMobile ? <NavBar /> : <NavBarDesktop />}
                <div>{props.children}</div>
                <div style={{paddingTop: '120px'}}></div>
                <Footer />
            </SessionProvider>
        </>
    )
}
