import { motion } from 'framer-motion';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setisLoading(false);
          }, 3000);
    
      return () => clearTimeout(timeoutId);
    }, [])
    

    return (
        <motion.div className='h-full' initial={{y:"200vh"}} animate={{y:"0%"}} exit={{y:"-200vh"}} transition={{duration:0.5}}>
        {isLoading ? (
            <div role="status" class="animate-pulse">
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                <div class="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
                <div class="flex items-center justify-center mt-4">
                    <svg class="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <div class="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
                    <div class="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <span class="sr-only">Loading...</span>
            </div>
        ) : (
            <footer class="bg-white rounded-lg shadow-lg m-4 dark:bg-gray-800 bottom-0 ">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="/Home" class="hover:underline">NutriFit™</Link>. All Rights Reserved.</span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <Link href="/About" className="hover:underline me-4 md:me-6">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link href="Login" className="hover:underline me-4 md:me-6">
                                Login/Signup
                            </Link>
                        </li>
                        <li>
                            <Link href="/Pricing" className="hover:underline me-4 md:me-6">
                                Pricing
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        )}
    </motion.div>
    )
}