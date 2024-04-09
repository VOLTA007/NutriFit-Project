import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { motion } from 'framer-motion'
import Userwelcome from '@/Components/Userwelcome'
import dynamic from 'next/dynamic'

const Home = () => {
    const session = useSession()
    const status = session.status

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
                <div style={{ paddingTop: '80px' }}></div>
                <SimpleSlider />
            </motion.div>
        </>
    )
}

export default Home
