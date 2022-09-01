import React from 'react'
import './Home.css'
import Naranja from '../../Img/naranja-enzo.png'
import NaranjaLogo from '../../Img/mandarina-03.png'
import Services from '../../Components/Services/Services'
import { Planes } from '../../Components/Planes/Planes'
import { Nosotras } from '../../Components/Nosotras/Nosotras'
import { Footer } from '../../Components/Footer/Footer'
import { Link } from 'react-scroll'

export const Home = () => {
    return (
        <>
            <div className='container__home' name='home'>
                <div className='container__img'>
                    <img className='naranja' src={Naranja} alt='naranjita' />
                </div>
                <div className='container__text'>
                    <div className='container__title'>
                        <img className='naranja-logo' src={NaranjaLogo} alt='naranjita' />
                    </div>
                    <p>Somos una consultora dedicada a potenciar la comunicación de Pymes y MiPymes a través de diferentes estrategías</p>
                    <div className='container__buttons-home'>
                        <Link className='button custom-btn btn' to='servicios' spy={true} smooth={true} offset={-125} duration={500}><span>Servicios</span></Link>
                        <Link className='button custom-btn btn' to='contacto' spy={true} smooth={true} offset={0} duration={500}><span>Contacto</span></Link>
                    </div>
                </div>
            </div>
            <Services />
            <Planes />
            <Nosotras />
            <Footer />
        </>
    )
}