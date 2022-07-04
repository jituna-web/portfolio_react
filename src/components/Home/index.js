import './index.scss'
import Logo1 from '../../assets/images/logo1.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'


function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']



    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Vítám vás, <br /> jmenuji se
                    <img src={Logo1} alt="Web developer" />
                    <br />
                    a jsem
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={15} />
                </h1>
                <h2>Frontend / Backend </h2>
                <Link to="/contact" className='flat-button'>Napište  mi</Link>
            </div>
            <Logo/>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Home