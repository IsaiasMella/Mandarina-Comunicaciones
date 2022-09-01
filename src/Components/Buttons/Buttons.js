import React, { useContext } from 'react'
import { Error } from '../Portals/Error/Error'
import './Buttons.css'
import PortalContext from '../../Context/contextPortal';

export const Button = ({ text, tipo }) => {

    const { handlePortal, portalAbierto } = useContext(PortalContext)

    const elegirPortal = (tipo) => {
        switch (tipo) {
            case "error":
                return <Error />
            default:
                break
        }
    }

    return (
        <>
            <a
                className='button custom-btn btn'
                onClick={() => handlePortal()}
            ><span>{text}</span></a>
            {portalAbierto && elegirPortal(tipo)}
        </>
    )
}
