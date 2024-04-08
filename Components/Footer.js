import { motion } from 'framer-motion'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Footer() {
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setisLoading(false)
        }, 4000)

        return () => clearTimeout(timeoutId)
    }, [])

    return (
        <motion.div
            className="h-full"
            initial={{ y: '200vh' }}
            animate={{ y: '0%' }}
            exit={{ y: '-200vh' }}
            transition={{ duration: 0.5 }}
        >
            
                <footer className="bg-white rounded-lg shadow-lg m-8 text-center dark:bg-gray-800 bottom-0  xl:mx-56">
                    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © 2024{' '}
                            <Link
                                href="/Home"
                                className="hover:underline text-center"
                            >
                                NutriFit™
                            </Link>
                            . All Rights Reserved.&nbsp;
                        </span>
                        <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                            <li>
                                <Link
                                    href="/About"
                                    className="hover:underline me-4 md:me-6"
                                >
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="Login"
                                    className="hover:underline me-4 md:me-6"
                                >
                                    Login/Signup
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/Pricing"
                                    className="hover:underline me-4 md:me-6"
                                >
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>
                </footer>
        </motion.div>
    )
}
