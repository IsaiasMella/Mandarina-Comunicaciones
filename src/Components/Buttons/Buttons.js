import React from 'react'
import './Buttons.css'

export const Button = ({ text, handlePortal }) => {
    return (
        <>
            <a
                className='button custom-btn btn'
                onClick={handlePortal}
            ><span>{text}</span>
            </a>
        </>  
    )
}
