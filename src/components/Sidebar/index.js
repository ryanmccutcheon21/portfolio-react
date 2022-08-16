import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faHome, faTools, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className="logo" to='/'>
            <p>R</p>
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>

            <NavLink className='about-link' exact='true' activeclassname='active' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='skills-link' to='/skills'>
                <FontAwesomeIcon icon={faTools} color='#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='work-link' to='/work'>
                <FontAwesomeIcon icon={faBriefcase} color='#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ryan-mccutcheon-185b261b8/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/ryanmccutcheon21'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>

            {/* <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ryan-mccutcheon-185b261b8/'>
                    <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
                </a>
            </li> */}
        </ul>
    </div>
)

export default Sidebar