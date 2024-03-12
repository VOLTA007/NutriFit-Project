import { useState } from 'react'; 
import styles from '@/styles/Login.module.css';
import axios from 'axios';
import domain from '@/utils/Config';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handleClick() {

        setIsLoading(true);
        try {
            const response = await axios.post(`${domain}/UserSignup`, { email, password });
            const { success } = response.data;

            if (success) {
                alert('User Created successfully');
                // Redirect to the dashboard or another page
            } else {
                alert('Already Registered.');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                // Invalid email or password
                alert('Already Registered.');
            } else {
                console.error('Error Signing up:', error);
                alert('An error occurred while Signing up. Please try again later.');
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className={styles.conatiner}>
                <label className={`${styles.label} dark:text-white`}>Email :</label>
                <input onChange={(e) =>{
                    setEmail(e.target.value)
                    }}
                type="email" value={email} className={styles.input} placeholder="name@example.com"/>
            </div>
            <div className={styles.conatiner}>
                <label className={`${styles.label} dark:text-white`}>Password :</label>
                <input onChange={(e) =>{
                    setPassword(e.target.value)
                    }}
                type="password" value={password} className={styles.input} placeholder="Password"/>
            </div>
            <button className={`${styles.but} ${isLoading ? styles.loading : ''}`} onClick={handleClick} disabled={isLoading}>
             {isLoading ? (<div className="loader"></div>) : ('Signup')}
            </button>
        </>
    )
}