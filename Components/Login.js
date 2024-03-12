import { useState } from 'react'; 
import styles from '@/styles/Login.module.css';
import axios from 'axios';
import domain from '@/utils/Config';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
  

    async function handleFormSubmit(e) {
        e.preventDefault();

        setIsLoading(true);

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
            
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>

            
            <form onSubmit={handleFormSubmit}>
                <label className={`${styles.label} dark:text-white`}>Email :</label>
                <input 
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    value={email} 
                    className={styles.input} 
                    placeholder="name@example.com"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    required 
                />
                <label className={`${styles.label} dark:text-white`}>Password :</label>
                <input onChange={(e) =>{setPassword(e.target.value)}}
                type="password" value={password} className={styles.input} placeholder="Password"/>
                <button className={`${styles.but} ${isLoading ? styles.loading : ''}`} type="submit" disabled={isLoading}>
                    {isLoading ? (<div className="loader"></div>) : ('Login')}
                </button>
            </form>
        </>
    )
}