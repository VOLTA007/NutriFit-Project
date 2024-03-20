import { SessionProvider } from "next-auth/react"
import Footer from "./Footer"
import Header from "./Header"
import Toggler from "./Toggler"


export default function MainLayout(props) {
    return (
        <>
        <SessionProvider>
                <div style={{ paddingTop: '120px' }}></div>
                <Toggler />
                <Header />
                <div>{props.children}</div>
                <Footer />
            </SessionProvider>
        </>
    )
}