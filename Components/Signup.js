import { useState } from 'react'; 
import styles from '@/styles/Login.module.css';
import axios from 'axios';
import domain from '@/utils/Config';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handleFormSubmit() {
        e.preventDefault();

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
            <form onSubmit={handleFormSubmit} className="mx-auto max-w-[400px] w-45 h-80 bg-[#edfb14] rounded-xl
                 grid grid-rows-4 mt-24 m-8 p-5 gap-6">

                <h1 className="place-self-center text-center">Signup <span className="flex items-center justify-center"><img src='./icons8-sign-up-31.png'
                className="w-8 h-auto"></img></span>Welcome To Nutrifit :)</h1>
                <input 
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    value={email} 
                    className={`${styles.input} rounded-md dark:bg-[#0d121b] dark:text-gray-50`} 
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    required />

                <input onChange={(e) =>{setPassword(e.target.value)}}
                    e="password" value={password} className={`${styles.input} rounded-md 
                    dark:bg-[#0d121b] dark:text-gray-50`}>
                </input>

                <button className={`${styles.but} ${isLoading ? styles.loading : ''}`} type="submit" disabled={isLoading}>
                    {isLoading ? (<div className="loader"></div>) : ('Signup')}
                </button>

            </form>
        </>
    )
}