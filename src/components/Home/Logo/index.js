import './index.scss'
import LogoBg from '../../../assets/images/logo-bg.png'

const Logo = () => {
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoBg} />
        </div>
    )
}

export default Logo