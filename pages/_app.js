import styles from '@/styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import MainLayout from '@/Components/MainLayout';


export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Check for the root path ('/') on initial server-side render
    if (router.asPath === '/') {
      router.push('/Home'); // Redirect to /Home on server-side (prevents client-side loop)
    }
  }, []);


  return<MainLayout>
      <AnimatePresence mode="wait">
        <motion.div key={router.pathname}>
          <Component {...pageProps} />

          <motion.div
            className="absolute top-0 left-0 w-full h-screen bg-black origin-bottom z-40 rounded-t-[100px]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1.5 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.div
            className="absolute top-0 left-0 w-full h-screen bg-black origin-top z-40 rounded-b-[100px]"
            initial={{ scaleY: 1.5 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </AnimatePresence>
    </MainLayout>
}
