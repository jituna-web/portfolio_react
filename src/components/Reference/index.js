import './index.scss'
import Loader from 'react-loaders'
import AnimateLetters from '../AnimatedLetters'
import { useState } from 'react'
import ImageSlider from '../ImageSlider'



const Reference = ()=> {
    const [letterClass] = useState('text-animate')

    const slides = [
        {url: 'http://localhost:8888/public/images/expa.png', title: 'Expandující fotogalerie'},
        {url: 'http://localhost:8888/public/images/food_restaurant.png', title: 'Food restaurant'},
        {url: 'http://localhost:8888/public/images/tetris.png', title: 'Tetris'}
]

  
    const containerStyles = {
        width: '700px',
        height: '480px',
        margin: '0 auto',
    }
  

    return (<>
        <div>
        <h1>
                <AnimateLetters 
                letterClass={letterClass} 
                strArray={['R', 'e','f','e','r','e','n', 'c', 'e']}
                idx={15}
                />
                </h1>
                <div style={containerStyles}>
                    <ImageSlider slides={slides} />




                </div>
        </div>

        <Loader type='pacman' />
    </>   
 )
}
export default Reference