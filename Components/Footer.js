import { motion } from 'framer-motion';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
    <motion.div className='h-full' initial={{y:"200vh"}} animate={{y:"0%"}} exit={{y:"-200vh"}} transition={{duration:0.5}}>
    <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800 bottom-0 ">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="/Home" class="hover:underline">NutriFit™</Link>. All Rights Reserved.
        </span>
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
    </motion.div>
    )
}