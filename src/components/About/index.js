import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from '../Home/LogoAbout'
import {  useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaravel,
faPhp,
faReact,
faHtml5,
faCss3,
faSass, } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const About = () => {
    const[ letterClass] = useState('text-animate')
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    setLetterClass={letterClass}
                    strArray={['O', ' ', 'm', 'n', 'ě']}
                    idx={15}
                    />
                </h1>
                <br/>
                <h2>
                    Technologie, kterými se zabývám
                </h2>
                <br/>
                <h3>Frontend</h3>
               <ul>
                <li>Html5, css3</li>
                <li>Sass</li>
                <li>Javascript</li>
                <li>React</li>
               </ul>
                <br/>
                <h3>Backend</h3>
                <ul>
                <li>Php 7, php 8</li>
                <li>Laravel</li>
                <li>MySql</li>
               </ul>
               <br/>         
            </div>
            <Logo/>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faLaravel} color='#FF0000' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faPhp} color='#8892bf' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color='#61DBFB' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faSass} color='#cc6699' />
                    </div>





                </div>

            </div>
        </div>
        <Loader type='pacman' />

        </>
        
    )
}

export default About