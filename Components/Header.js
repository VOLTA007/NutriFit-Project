import React, { useState } from 'react';
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

export async function getServerSideProps(context) {
    const userAgent = context.req.headers['user-agent'] || '';
    const mobileCheck = /Mobi/i.test(userAgent);
    return {
        props: {
            isMobile: mobileCheck,
        },
    };
}
