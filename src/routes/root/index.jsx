import App from '../../pages/App'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'

function Root() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root