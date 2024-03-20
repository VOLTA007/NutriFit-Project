import { useState, useEffect } from 'react'; 
import styles from '@/styles/Login.module.css';
import axios from 'axios';
import domain from '@/utils/Config';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react'


export default function Login() {
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
            const response = await axios.post(`${domain}/UserLogin`, { email, password });
            const { success } = response.data;
    
            if (success) {
                setMessage('Logged in Successfully'); // Set success message
                setNotificationVisible(true); // Show notification bar
                setTimeout(async () => {
                  setNotificationVisible(false);
                  await signIn('credentials', { email, password }); 
                }, 4150);
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
                setMessage('Invalid Email or Password. Please try again.'); // Set error message
            } else {
                setNotificationVisible(true);
                setTimeout(() => {
                    setNotificationVisible(false);
                }, 5000);
                console.error('Error logging in:', error);
                setMessage('An error occurred while logging in. Please try again later.'); // Set error message
            }
        } finally {
            // Delay for 5000ms before disabling isLoading state and signing in
            setTimeout(async () => {
                setIsLoading(false); 
            }, 6000);
        }
        
    }

    return (
        <>
            <form onSubmit={handleFormSubmit} className="mx-auto max-w-[400px] w-45 h-80 bg-[#edfb14] rounded-xl
                 grid grid-rows-4 mt-24 m-8 p-5 gap-6">

                <h1 className="place-self-center text-center">Login <span className="flex items-center justify-center"><img src='./icons8-login-90.png'
                className="w-8 h-auto"></img></span>Welcome To Nutrifit :)</h1>
                <input 
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    value={email}
                    className={`${styles.input} rounded-md p-2 dark:bg-[#0d121b] dark:text-gray-50 ${isLoading ? styles.disabled : ''}`} 
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    required
                    disabled={isLoading} />

                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    value={password} 
                    className={`${styles.input} rounded-md dark:bg-[#0d121b] dark:text-gray-50 p-2 ${isLoading ? styles.disabled : ''}`}
                    disabled={isLoading} />

                <button 
                    className={`${styles.but} ${isLoading ? styles.loading : ''}`} 
                    type="submit" 
                    disabled={isLoading}>
                    {isLoading ? (<div className="loader"></div>) : ('Login')}
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



/*

try {
            const response = await axios.post(`${domain}/UserLogin`, { email, password });
            const { success } = response.data;
    
            if (success) {
                setMessage('Logged in Successfully'); // Set success message
                setNotificationVisible(true); // Show notification bar
                setTimeout(() => {
                    setNotificationVisible(false); // Hide notification bar after 5000ms
                    router.push('/Home'); // Redirect to Home after 5000ms
                }, 5000);
            } else {
                setNotificationVisible(true);
                setTimeout(() => {
                    setNotificationVisible(false);
                }, 5000);
                setMessage('Invalid email or password. Please try again.'); // Set error message
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setNotificationVisible(true);
                setTimeout(() => {
                    setNotificationVisible(false);
                }, 5000);
                setMessage('Invalid Email or Password. Please try again.'); // Set error message
            } else {
                setNotificationVisible(true);
                setTimeout(() => {
                    setNotificationVisible(false);
                }, 5000);
                console.error('Error logging in:', error);
                setMessage('An error occurred while logging in. Please try again later.'); // Set error message
            }
        } finally {
            // Delay for 5000ms before disabling isLoading state
            setTimeout(() => {
                setIsLoading(false); // Disable isLoading after 5000ms
            }, 5000);
        }
    }

    */
