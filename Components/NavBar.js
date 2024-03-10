import React, { useState } from 'react'; 
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [isXShape, setIsXShape] = useState(false); // New state to manage X shape

    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
        setIsXShape(!isXShape); // Toggle X shape state
    };

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
                    >
                        {/* Side menu content */}
                    </div>
                </div>
            </div>
            <div 
                className={`${styles.overlay} ${showOverlay ? styles.active : ''}`}
            ></div>
        </>
    );
}
