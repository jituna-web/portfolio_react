import './index.scss'
import Loader from 'react-loaders'
import AnimateLetters from '../AnimatedLetters'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'



const Contact = () => {

    const [letterClass] = useState('text-animate')
    const refForm = useRef
/*
    useEffect(() => {
        return setTimeout (() =>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
  */
 /*
 const sendEmail = (e) => {
    e.preventDefault()

    emailjs
        .sendForm('','', refForm.current, '')

        .then( ()=> {
            alert('Zpráva byla odeslána')
            window.location.reload(false)
        },
        () => {
            alert('Odeslání se nezdařilo')
        }
    )
 }
*/

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                <AnimateLetters 
                letterClass={letterClass} 
                strArray={['K', 'o','n','t','a','k','t']}
                idx={15}
                />
                </h1>
                
                <span>Adresa:</span> <p>náměstí Přátelství 1518/2, 102 00 Praha </p>
                <span>IČ:</span> <p>88201856</p>
                <span>Telefon:</span> <p>+420 773 381 467</p>
                <span>Email:</span> <p>info@jh-design.cz</p>
            </div>
        </div>
        <div className='contact-form'>
                <form  /*ref={refForm} onSubmit={sendEmail}*/>
                    <h3>Kontaktní formulář</h3>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Zadejte jméno' required />
                        </li>
                        <li className='half'>
                            <input type='email' name='email' placeholder='Zadejte email' required />
                        </li>
                        <li>
                            <input  placeholder='Předmět' type='text' name='subject' required />
                        </li>
                        <li>
                            <textarea placeholder='Sem napište zprávu' name='message' required></textarea>
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value='odeslat' />
                        </li>
                    </ul>
                </form>
            </div>
        <Loader type='pacman' />
        </>
    )
}
export default Contact