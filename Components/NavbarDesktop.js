import React, { useState, useEffect } from 'react';
import styles from '../styles/NavbarDesktop.module.css';
import Link from 'next/link';

const NavbarDesktop = () => {
  return (
        <>
            <div className={styles.navcontainer}>
                <div className={styles.logomenu}>
                    <img className={styles.Logo} src='./Nutrifitlogo.jpg' alt='Logo'></img>
                    <nav>
                        <div className={styles.sidemenu}>
                            <ul className={`${styles.ull} flex flex-col items-center justify-center`}>
                                <li className={`${styles.li}`}>
                                    <Link href="/Home" className="flex items-center">Home
                                        <span><img className="w-6" src='./icons8-home-48.png' 
                                            alt="Home Icon"></img></span>
                                    </Link>
                                    </li>
                                    <li className={`${styles.li}`}>
                                    <Link href="/Login" className="flex items-center">Login
                                        <span><img className="w-6" src='./icons8-login-91.png' 
                                            alt="Login Icon"></img></span>
                                    </Link>
                                    </li>
                                    <li className={`${styles.li}`}>
                                    <Link href="/Signup" className="flex items-center">Signup
                                        <span><img className="w-6" src='./icons8-sign-up-32.png' 
                                            alt="Signup Icon"></img></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
  }

export default NavbarDesktop