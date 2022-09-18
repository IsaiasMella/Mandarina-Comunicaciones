import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-scroll'
import './MenuMobile.css'

const MenuMobile = ({ handlePortal, portalAbierto }) => {

    return ReactDOM.createPortal(
        <div className={`container__portal-menu-mob ${portalAbierto ? 'is-open' : ''}`}>
            <div className='menu-mob'>
                <Link
                    className='link-nav-mob'
                    activeClass="active"
                    to='home'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-125}
                    onClick={handlePortal}
                >INICIO</Link>
                <Link
                    className='link-nav-mob'
                    activeClass="active"
                    to='servicios'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={handlePortal}
                >SERVICIOS</Link>
                <Link
                    className='link-nav-mob'
                    activeClass="active"
                    to='planes'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={handlePortal}
                >PLANES</Link>
                <Link
                    className='link-nav-mob'
                    activeClass="active"
                    to='nosotras'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={handlePortal}
                >NOSOTRAS</Link>
                <Link
                    className='link-nav-mob'
                    activeClass="active"
                    to='contacto'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                    onClick={handlePortal}
                >CONTACTO</Link>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default MenuMobile