import './index.scss'
import {Link} from 'react-router-dom'
import Logo1 from '../../assets/images/logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'



const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo1} alt="logo" />
        </Link>
        <nav>
            <NavLink extract="true" activeclassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#FFFFF" />
            </NavLink>
            <NavLink extract="true" activeclassName="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#FFFFFF" />
            </NavLink>
            <NavLink extract="true" activeclassName="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#FFFFFF" />
            </NavLink>
            <NavLink extract="true" activeclassName="active" className="reference-link" to="/reference">
                <FontAwesomeIcon icon={faCode} color="#FFFFFF" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/jitka-hořavová-0510b81a4/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#D6A2E8" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/jituna-web'>
                    <FontAwesomeIcon icon={faGithub} color="#D6A2E8" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UC-xazVrZMe9wrg2ceYtUQ8w'>
                    <FontAwesomeIcon icon={faYoutube} color="#D6A2E8" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://wa.me/420773381467'>
                    <FontAwesomeIcon icon={faWhatsapp} color="#D6A2E8" />
                </a>
            </li>
        </ul>
    </div>
)


export default Sidebar 