import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { motion } from 'framer-motion'
import Userwelcome from '@/Components/Userwelcome'
import dynamic from 'next/dynamic'

const Home = () => {
    const [isLoading, setIsLoading] = useState(true) // State to manage loading
    const session = useSession()
    const status = session.status

    useEffect(() => {
        // Set a timeout to change the loading state after 2 seconds
        const timeoutId = setTimeout(() => {
            setIsLoading(false)
        }, 1500)

        // Clear the timeout if the component unmounts or loading state changes
        return () => clearTimeout(timeoutId)
    }, [])

    const SimpleSlider = dynamic(() => import('@/Components/SimpleSlider'), {
        loading: () => <div></div>,
    })

    return (
        <>
        <motion.div
            className="h-full"
            initial={{ y: '200vh' }}
            animate={{ y: '0%' }}
            exit={{ y: '-200vh' }}
            transition={{ duration: 0.5 }}
        >
            <Userwelcome />
            <div style={{paddingTop: '80px'}}></div>
            {isLoading ? (
                // Render your loader while isLoading is true
                <motion.div
                    className="h-full"
                    initial={{ y: '200vh' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '-200vh' }}
                    transition={{ duration: 0.5 }}
                >
                    <div
                        role="status"
                        className=" max-w-screen-lg mx-auto p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                    >
                        <div className="flex items-center justify-center h-[400px] mb-4 bg-gray-300 rounded dark:bg-gray-700">
                            <svg
                                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 16 20"
                            >
                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                            </svg>
                        </div>
                        <span className="sr-only"></span>
                    </div>
                </motion.div>
                
            ) : (
                <>
                    <SimpleSlider />
                </>
            )}
            
        </motion.div>
        </>
    )
}

export default Home
