import React from 'react'
import './Error.css'
import { Button } from '../../Buttons/Buttons';

export const Error = ({ handlePortal }) => {
  const handlePropagation = (e) => e.stopPropagation()

  return (
    <div className='error' onClick={handlePropagation} >
      <p>De momento no se puede enviar el mail, <br />por favor intente mas tarde.</p>
      <span className='button__error'  >
        <Button text='OK' handlePortal={handlePortal} />
      </span>
    </div>
  )
}