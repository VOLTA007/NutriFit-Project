import styles from '@/styles/globals.css'
import '@/styles/Flickity.modules.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import MainLayout from '@/Components/MainLayout'


export default function App({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        // Check for the root path ('/') on initial server-side render
        if (router.asPath === '/') {
            router.push('/Home') // Redirect to /Home on server-side (prevents client-side loop)
        }
    }, [])

    return (
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
    )
}
