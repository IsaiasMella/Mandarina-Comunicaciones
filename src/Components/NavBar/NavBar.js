import React from 'react'
import Naranja from '../../Img/naranja-enzo-nav.png'
import { Link } from 'react-scroll'
import './NavBar.css'

export const NavBar = () => {
    return (
        <nav className='container__nav'>
            <div className='container__logo-nav'>
                <Link
                    className='naranja__nav-link'
                    activeClass="activate"
                    to='home'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-125}>
                    <img className='naranja-nav' src={Naranja} alt='naranjita' />
                </Link>
            </div>

            <ul className='lista'>
                <li><Link
                    activeClass="active"
                    to='servicios'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-125}
                >SERVICIOS</Link></li>
                <li><Link
                    activeClass="active"
                    to='planes'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-125}
                >PLANES</Link></li>
                <li><Link
                    activeClass="active"
                    to='nosotras'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-60}
                >NOSOTRAS</Link></li>
                <li><Link
                    activeClass="active"
                    to='contacto'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                >CONTACTO</Link></li>
            </ul>
        </nav>
    )
}
