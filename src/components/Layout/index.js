import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import MouseParticles from '../MouseParticles'

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <Outlet />
                <br />
            </div>
        </div>
    )
}

export default Layout