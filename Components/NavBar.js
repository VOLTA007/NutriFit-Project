import React, { useState } from 'react'; 
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
    const [showOverlay, setShowOverlay] = useState(false);

    // Function to toggle the overlay
    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    };

    return (
        <>
            <div className={styles.navcontainer}>
                <div className={styles.logomenu}>
                    <h1>Logo</h1>
                    <nav 
                        className={styles.hamburger}
                        onClick={toggleOverlay}
                    >
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </nav>
                    <div className={`${styles.sidemenu} ${showOverlay ? styles.active : ''}`}>
                        
                    </div>
                </div>
            </div>
            <div 
                className={`${styles.overlay} ${showOverlay ? styles.active : ''}`}
            ></div>
        </>
    )
}

