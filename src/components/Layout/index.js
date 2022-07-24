import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import Hamburger from '../Hamburger/Hamburger'
import MouseParticles from '../MouseParticles'

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>
                <Outlet />
                <span className='tags bottom-tags'>&lt;/body&gt;
                    <br />
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>
            {/* <MouseParticles /> */}
            {/* <Hamburger /> */}
        </div>
    )
}

export default Layout