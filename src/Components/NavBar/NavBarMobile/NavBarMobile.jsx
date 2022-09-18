import React from 'react'
import Naranja from '../../../Img/naranja-enzo-nav.png'
import { Link } from 'react-scroll'
import './NavBarMobile.css'
import { useModal } from '../../../Hooks/useModal'
import MenuMobile from '../../Portals/MenuMobile/MenuMobile'



const NavBarMobile = () => {
    const [portalAbierto, handlePortal] = useModal(false)

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
            <div className='container__menu-nav' onClick={handlePortal}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 24 24">
                    <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
                </svg>
            </div>
            <MenuMobile handlePortal={handlePortal} portalAbierto={portalAbierto} />
        </nav>
    )
}

export default NavBarMobile