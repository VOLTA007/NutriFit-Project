import Footer from "./Footer"
import Header from "./Header"
import Toggler from "./Toggler"


export default function MainLayout(props) {
    return (
        <>
            <div style={{ paddingTop: '120px' }}></div>
            <Toggler />
            <Header />
            <div>{props.children}</div>
            <Footer />
        </>
    )
}