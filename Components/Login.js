import { useState } from 'react'; 
import styles from '@/styles/Login.module.css';
import axios from 'axios';
import domain from '@/utils/Config';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleClick() {
        try {
            const response = await axios.post(`${domain}/UserLogin`, { email, password });
            const { success } = response.data;
    
            if (success) {
                alert('User logged in successfully');
            } else {
                alert('Invalid email or password. Please try again.');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                // Invalid email or password
                alert('Invalid email or password. Please try again.');
            } else {
                console.error('Error logging in:', error);
                alert('An error occurred while logging in. Please try again later.');
            }
        }
    }

    return (
        <>
            <div className={styles.conatiner}>
                <label className={styles.label}>Email :</label>
                <input onChange={(e) =>{
                    setEmail(e.target.value)
                    }}
                type="email" value={email} className={styles.input} placeholder="name@example.com"/>
            </div>
            <div className={styles.conatiner}>
                <label className={styles.label}>Password :</label>
                <input onChange={(e) =>{
                    setPassword(e.target.value)
                    }}
                type="password" value={password} className={styles.input} placeholder="Password"/>
            </div>
            <button onClick={handleClick} className={styles.but}>Login</button>
        </>
    )
}