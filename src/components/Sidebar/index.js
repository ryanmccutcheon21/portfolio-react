import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import { Link, NavLink } from 'react-router-dom'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className="logo" to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="ryan" />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>

            <NavLink className='about-link' exact='true' activeclassname='active' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ryan-mccutcheon-185b261b8/'>
                    <FontAwesomeIcon icon={faLinkedin} colo='#4d4d4er' />
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/ryanmccutcheon21'>
                    <FontAwesomeIcon icon={faGithub} colo='#4d4d4er' />
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ryan-mccutcheon-185b261b8/'>
                    <FontAwesomeIcon icon={faYoutube} colo='#4d4d4er' />
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ryan-mccutcheon-185b261b8/'>
                    <FontAwesomeIcon icon={faSkype} colo='#4d4d4er' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar