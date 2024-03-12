import React, { useState, useEffect, useRef } from 'react'; 
import styles from '../styles/NavBar.module.css';
import Link from 'next/link';

export default function NavBar() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [manualClose, setManualClose] = useState(false);
    const sideMenuRef = useRef(null);

    const isXShape = showOverlay;


    useEffect(() => {
        function handleClickOutside(event) {
            if (showOverlay && sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
                if (!manualClose) {
                    setShowOverlay(false);
                }
                setManualClose(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [showOverlay, manualClose]);


    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
        setManualClose(!showOverlay); 
    };

    return (
        <>
            <div className={styles.navcontainer}>
                <div className={styles.logomenu}>
                    <img className={styles.Logo} src='./Nutrifitlogo.jpg' alt='Logo'></img>
                    <nav 
                        className={`${styles.hamburger} ${isXShape ? styles.xShape : ''}`} 
                        onClick={toggleOverlay}
                    >
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </nav>
                    <div 
                        className={`${styles.sidemenu} ${showOverlay ? styles.active : ''}`}
                        ref={sideMenuRef}>

                       <ul className={`${styles.ull} ${showOverlay ? '' : styles.hidden}`}>
                        <li className={styles.li}>
                            <Link href="/Home" onClick={toggleOverlay}>
                                Home
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="/Login" onClick={toggleOverlay}>
                                Login
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="/Signup" onClick={toggleOverlay}>
                                Signup
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            <div 
                className={`${styles.overlay} ${showOverlay ? styles.active : ''}`}
            ></div>
        </>
    );
}
