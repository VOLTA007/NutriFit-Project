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

                       <ul className={`${styles.ull} ${showOverlay ? '' : styles.hidden} flex flex-col items-center justify-center`}>
                            
                        <li className={`${styles.li} ${showOverlay ? '' : styles.hidden2}`}>
                        <Link href="/Home" onClick={toggleOverlay} className="flex items-center">Home
                            <span><img className="w-6" src='./icons8-home-48.png' 
                                alt="Home Icon"></img></span>
                        </Link>
                        </li>
                        <li className={`${styles.li} ${showOverlay ? '' : styles.hidden2}`}>
                        <Link href="/Login" onClick={toggleOverlay} className="flex items-center">Login
                            <span><img className="w-6" src='./icons8-login-91.png' 
                                alt="Login Icon"></img></span>
                        </Link>
                        </li>
                        <li className={`${styles.li} ${showOverlay ? '' : styles.hidden2}`}>
                        <Link href="/Signup" onClick={toggleOverlay} className="flex items-center">Signup
                            <span><img className="w-6" src='./icons8-sign-up-32.png' 
                                alt="Signup Icon"></img></span>
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
