import { useState } from 'react'; 
import styles from '@/styles/Login.module.css';
import axios from 'axios';
import domain from '@/utils/Config';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [notificationVisible, setNotificationVisible] = useState(false);
    const [message, setMessage] = useState('');
    const router = useRouter();
    const session = useSession();
    const status = session.status;

    if(status === 'authenticated'){
        router.push('/Home')
    }
    
    async function handleFormSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(`${domain}/UserLogin`, { email, password });
            const { success } = response.data;
    
            if (success) {
                setMessage('Logged in Successfully');
                setNotificationVisible(true);
                setTimeout(async () => {
                  setNotificationVisible(false);
                  await signIn('credentials', { email, password }); 
                }, 4250);
            } else {
                setNotificationVisible(true);
                setTimeout(() => {
                    setNotificationVisible(false);
                }, 5000);
                setMessage('Invalid email or password. Please try again.');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setNotificationVisible(true);
                setTimeout(() => {
                    setNotificationVisible(false);
                }, 5000);
                setMessage('Invalid Email or Password. Please try again.');
            } else {
                setNotificationVisible(true);
                setTimeout(() => {
                    setNotificationVisible(false);
                }, 5000);
                console.error('Error logging in:', error);
                setMessage('An error occurred while logging in. Please try again later.');
            }
        } finally {
            setTimeout(() => {
                setIsLoading(false); 
            }, 6000);
        }
    }

    return (
        <>
            <form onSubmit={handleFormSubmit} className={`${styles.loginForm} mx-auto max-w-[400px] w-45 h-[400px]`}>
                <h1 className="text-center">Login</h1>
                <div className={styles.inputcontainer}>
                    <input 
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                        value={email}
                        className={`${styles.input} rounded-md p-2`}
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        required
                    />
                    <img src="./email.png" className={styles.icon} alt="Email icon" />
                </div>
                <div className={styles.inputcontainer}>
                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" 
                        value={password} 
                        className={`${styles.input} rounded-md p-2`}
                        disabled={isLoading} />
                    <img src="./padlock.png" className={styles.icon} alt="Password icon" />
                </div>
                <div>
                    <p>Create Account Here!{' '}
                        <Link href="/Signup">
                            Signup
                        </Link>
                    </p>
                </div>
                <button 
                    className={`${styles.but} ${isLoading ? styles.loading : ''}`} 
                    type="submit" 
                    disabled={isLoading}>
                    {isLoading ? (<div className={styles.loader}></div>) : ('Login')}
                </button>
            </form>

            {notificationVisible && (
                <div className={`${styles.notification} ${notificationVisible ? styles.show : ''}`}>
                    {message}
                    <div className={styles.bar}></div>
                </div>
            )}
        </>
    )
}
