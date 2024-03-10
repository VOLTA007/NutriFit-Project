import React, { useState, useEffect, useRef } from 'react'; 
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [isXShape, setIsXShape] = useState(false); 
    const sideMenuRef = useRef(null);

    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
        setIsXShape(!isXShape); 
    };

    const handleOutsideClick = (event) => {
        if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
            setShowOverlay(false);
            setIsXShape(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('touchstart', handleOutsideClick);
        };
    }, []);

    return (
        <>
            <div className={styles.navcontainer}>
                <div className={styles.logomenu}>
                    <h1>Logo</h1>
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
                        ref={sideMenuRef}
                    >
                    </div>
                </div>
            </div>
            <div 
                className={`${styles.overlay} ${showOverlay ? styles.active : ''}`}
            ></div>
        </>
    );
}
