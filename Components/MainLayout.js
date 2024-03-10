import Footer from "./Footer"
import Header from "./Header"
import NavBar from "./NavBar"

export default function MainLayout(props) {
    return (
        <>
            <Header />
            <div style={{ paddingTop: '120px' }}>{props.children}</div>
            <Footer />
        </>
    )
}