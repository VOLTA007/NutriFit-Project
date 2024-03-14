import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import NavBar from './NavBar';
import NavbarDesktop from './NavbarDesktop';

export default function Header({ isMobile }) {
    return (
        <div className={styles.header1}>
            <p className={styles.paragraph1}>Welcome To Nutri Fit</p>
            {isMobile ? <NavBar /> : <NavbarDesktop />}
        </div>
    );
}

Header.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    const mobileCheck = /Mobi/i.test(userAgent);
    return { isMobile: mobileCheck };
};