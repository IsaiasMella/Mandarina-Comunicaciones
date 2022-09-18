import React from 'react'
import { Button } from '../../../Buttons/Buttons'
import './SemillitaDetalle.css'

export const SemillitaDetalle = ({ handlePortal }) => {
  const handlePropagation = (e) => e.stopPropagation()

  return (
    <div className='container__plan' onClick={handlePropagation}>
      <h3 className='titulos__plan'>¿Qué ofrecemos?</h3>
      <div className='container__detalle-plan'>
        <p>🍊Diagnóstico.</p>
        <p>🍊2 reuniones mensuales.</p>
        <p>🍊Calendarización de contenido.</p>
        <p>🍊2 a 3 publicaciones semanales.</p>
        <p>🍊2 a 3 contenidos semanales para historias.</p>
        <p>🍊2 reels al mes.</p>
        <p>🍊Administración de campaña.</p>
        <p>🍊Responder mensajes y comentarios.</p>
        <p>🍊Informe de resultados.¿Qué ofrecemos?</p>
      </div>
      <div className='button__plan'>
        <Button text={'OK'} handlePortal={handlePortal} />
      </div>
    </div>
  )
}