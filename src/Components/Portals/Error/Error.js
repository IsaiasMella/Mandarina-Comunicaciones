import React from 'react'
import './Error.css'
import ReactDOM from 'react-dom';
import { Button } from '../../Buttons/Buttons';

export const Error = () => {
  return ReactDOM.createPortal(
    <div className='container__error'>
      <div className='error'>
        <p>De momento no se puede enviar el mail, <br />por favor intente mas tarde.</p>
        <span className='button__error'  >
          <Button text='OK' />
        </span>
      </div>
    </div>,
    document.getElementById('portal')
  )
}