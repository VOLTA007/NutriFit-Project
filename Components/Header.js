import styles from '../styles/Header.module.css';
import NavBar from './NavBar';

export default function Header() {
    return (
        <div className={styles.Header}>
            <p className={styles.paragraph1}>Welcome To Nutri Fit</p>
            <NavBar />
        </div>
    );
}