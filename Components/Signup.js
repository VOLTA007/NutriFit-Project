import { useState } from 'react'; 
import styles from '@/styles/Login.module.css';
import axios from 'axios';
import domain from '@/utils/Config';
import { useRouter } from 'next/router'; 
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link';





export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [notificationVisible, setNotificationVisible] = useState(false);
    const [message, setMessage] = useState('')
    const router = useRouter();
    const session = useSession();
    const status = session.status;
    console.log(session);

    if(status === 'authenticated'){
        router.push('/Home')
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
    
        
    
        setIsLoading(true);
        try {
            const response = await axios.post(`${domain}/UserSignup`, { email, password });
            const { success } = response.data;
    
            if (success) {
                setMessage('User created successfully');
                setNotificationVisible(true);
                setTimeout(() => {
                    setNotificationVisible(false);
                    router.push('/Login');
                }, 5000);
            } else {
                setMessage('Already registered, please login');
                setNotificationVisible(true);
                setTimeout(() => {
                    setNotificationVisible(false);
                    router.push('/Login');
                }, 5000);
            }
        } catch (error) {
        if (error.response && error.response.status === 400) {
            // If the error status is 400 (Bad Request), it means password length is too short
            setMessage('Password must be at least 8 characters long.');
            setNotificationVisible(true);
            setTimeout(() => {
                setNotificationVisible(false);
            }, 5000);
        } else if (error.response && error.response.status === 401) {
            setMessage('Already registered, Please login');
            setNotificationVisible(true);
            setTimeout(() => {
                setNotificationVisible(false);
                router.push('/Login');
            }, 5000);
        } else {
            console.error('Error signing up:', error);
            setMessage('An error occurred while signing up. Please try again later.');
            setNotificationVisible(true);
            setTimeout(() => {
                setNotificationVisible(false);
            }, 5000);
        }
    } finally {
        // Delay for 5000ms before disabling isLoading state
        setTimeout(() => {
            setIsLoading(false); // Disable isLoading after 5000ms
        }, 5000);
    }
}

    return (
        <>
            <form onSubmit={handleFormSubmit} className="mx-auto max-w-[400px] w-45 h-[400px] bg-[#edfb14] rounded-xl
                 grid grid-rows-4 mt-[120px] m-8 p-5 gap-6">

                <h1 className="place-self-center text-center">Sign Up <span className="flex items-center justify-center"><img src='./icons8-sign-up-31.png'
                className="w-8 h-auto"></img></span>Welcome To Nutrifit :)</h1>
                <div className={styles.inputcontainer}>
                <input 
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    value={email}
                    className={`${styles.input} rounded-md p-2 dark:bg-[#0d121b] dark:text-gray-50 ${isLoading ? styles.disabled : ''}`} 
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    required
                />
                <img src="./email.png" className={styles.icon} style={{ maxHeight: '20px', maxWidth: '20px' }} alt="Email icon" />
                </div>

                <div className={styles.inputcontainer}>
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    value={password} 
                    className={`${styles.input} rounded-md dark:bg-[#0d121b] dark:text-gray-50 p-2 ${isLoading ? styles.disabled : ''}`}
                    disabled={isLoading} />
                <img src="./padlock.png" className={styles.icon} style={{ maxHeight: '20px', maxWidth: '20px' }} alt="Password icon" />
                </div>

                <div>
                    <p>Already Have an account? {' '}
                        <Link href="/Login">
                             Login
                        </Link>
                    </p>
                </div>

                <button 
                    className={`${styles.but} ${isLoading ? styles.loading : ''}`} 
                    type="submit" 
                    disabled={isLoading}>
                    {isLoading ? (<div className={styles.loader}></div>) : ('Signup')}
                </button>
            </form>

            {notificationVisible && (
                <div className={`${styles.notification} ${notificationVisible  ? styles.show : ''}`}>
                    {message}
                    <div className={styles.bar}></div>
                </div>
            )}
        </>
    )
}