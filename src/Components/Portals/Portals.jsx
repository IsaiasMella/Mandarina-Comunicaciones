import React from 'react'
import ReactDOM from 'react-dom';
import './Portals.css'

const Portals = ({ children, portalAbierto, handlePortal }) => {

    return ReactDOM.createPortal(
        <div className={`container__portal ${portalAbierto && 'is-open'}`} onClick={handlePortal}>
            {children}
        </div>,
        document.getElementById('portal')
    )
}

export default Portals