import { SessionProvider } from "next-auth/react"
import Footer from "./Footer"
import Header from "./Header"



export default function MainLayout(props) {
    return (
        <>
        <SessionProvider>
                <div style={{ paddingTop: '112px' }}></div>
                <Header />
                <div>{props.children}</div>
                <Footer />
            </SessionProvider>
        </>
    )
}