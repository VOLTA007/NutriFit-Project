import { SessionProvider } from 'next-auth/react'
import Footer from './Footer'
import Header from './Header'
import NavBarDesktop from './NavbarDesktop'
import NavBar from './NavBar'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { NextUIProvider } from '@nextui-org/react'
import NavBar2 from './NavBar2'
import Innernav from './Innernav'




export default function MainLayout({ children }) {
    const router = useRouter()
    const [isMobile, setIsMobile] = useState(null)
    const [isactive, setIsactive] = useState(false)

    const variants = {
        open: {
            width: 480,
            height: 650,
            top: '-25px',
            right: '-25px',
            transition: {
                duration: 0.75,
                ease: [0.76, 0, 0.24, 1],
            },
        },
        closed: {
            width: 100,
            height: 40,
            top: '0px',
            right: '0px',
            transition: {
                duration: 0.75,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.35
            },
        },
    }

    useEffect(() => {
        const checkIsMobile = () => {
            const isMobileUserAgent =
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                )
            setIsMobile(isMobileUserAgent)
        }

        checkIsMobile()
    }, [])

    if (isMobile === null) {
        return <div></div>
    }

    const pathname = router.pathname
    return (
        <NextUIProvider>
            <SessionProvider>
                <AnimatePresence mode="wait">
                    <motion.div key={pathname}>
                        
                        
                        <Header />
                        {isMobile ? <div></div> : <NavBarDesktop />}
                        <div className="absolute right-0 z-10">
                            <motion.div
                                className="w-[480px] h-[650px] bg-[#c9fd74] rounded-[25px] relative"
                                variants={variants}
                                animate={isactive ? 'open' : 'closed'}
                                initial="closed"
                            >
                                <AnimatePresence>
                                    {isactive && <Innernav />}
                                </AnimatePresence>
                            </motion.div>
                            <NavBar2
                                isactive={isactive}
                                setIsactive={setIsactive}
                            />
                        </div>

                        <div>{children}</div>
                        <div style={{ paddingTop: '120px' }}></div>
                        <Footer />
                    </motion.div>
                </AnimatePresence>
            </SessionProvider>
        </NextUIProvider>
    )
}
