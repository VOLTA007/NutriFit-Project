import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import NavBar from './NavBar';
import NavbarDesktop from './NavbarDesktop';

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if window is defined to ensure this code runs in the client-side only
        if (typeof window !== 'undefined') {
            const mobileCheck = /Mobi/i.test(navigator.userAgent);
            setIsMobile(mobileCheck);
        }
    }, []);

    console.log('isMobile:', isMobile);

    return (
        <div className={styles.header1}>
            <p className={styles.paragraph1}>Welcome To Nutri Fit</p>
            {isMobile ? <NavBar /> : <NavbarDesktop />}
        </div>
    );
}
