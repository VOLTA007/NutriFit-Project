import { SessionProvider } from 'next-auth/react'
import Footer from './Footer'
import Header from './Header'
import NavBarDesktop from './NavbarDesktop'
import NavBar from './NavBar'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import { NextUIProvider } from '@nextui-org/react'

export default function MainLayout({ children }) {
    const router = useRouter()
    const [isMobile, setIsMobile] = useState(null)
    const pathname = usePathname()

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


    return (
        <NextUIProvider>
            <SessionProvider>
                <AnimatePresence mode="wait">
                    <motion.div key={pathname}>
                        <motion.div
                            className="absolute top-0 left-0 w-full h-screen bg-black origin-bottom z-40 rounded-t-[100px]"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 0 }}
                            exit={{ scaleY: 1.5 }}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        />

                        <motion.div
                            className="absolute top-0 left-0 w-full h-screen bg-black origin-top z-40 rounded-b-[100px]"
                            initial={{ scaleY: 1.5 }}
                            animate={{ scaleY: 0 }}
                            exit={{ scaleY: 0 }}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        />
                        <Header />
                        {isMobile ? <NavBar /> : <NavBarDesktop />}
                        <div>{children}</div>
                        <div style={{ paddingTop: '120px' }}></div>
                        <Footer />
                    </motion.div>
                </AnimatePresence>
            </SessionProvider>
        </NextUIProvider>
    )
}
