import React from 'react'
import { Button } from '../../../Buttons/Buttons'
import './AzharDetalle.css'

const AzharDetalle = ({ handlePortal }) => {
    const handlePropagation = (e) => e.stopPropagation()
    return (
        <div className='container__plan' onClick={handlePropagation}>
            <h3 className='titulos__plan'>驴Qu茅 ofrecemos?</h3>
            <div className='container__detalle-plan' onClick={handlePropagation}>
                <p>馃崐 Diagn贸stico</p>
                <p>馃崐 4 reuniones mensuales.</p>
                <p>馃崐 Calendarizaci贸n .</p>
                <p>馃崐 Optimizaci贸n de la biograf铆a.</p>
                <p>馃崐 Gesti贸n de las historias destacadas.</p>
                <p>馃崐 4 a 5 publicaciones semanales.</p>
                <p>馃崐 Contenido semanal de historias (hasta 30 historias).</p>
                <p>馃崐 Gesti贸n de videos o reels (Hasta 8 mensuales).</p>
                <p>馃崐Administraci贸n de campa帽as y publicidades.</p>
                <p>馃崐 Copyright</p>
                <p>馃崐 Hashtracking personalizado</p>
                <p>馃崐 Creaci贸n de contenido.</p>
                <p>馃崐 Sesi贸n fotogr谩fica.</p>
                <p>馃崐 Responder mensajes y comentarios.</p>
                <p>馃崐 Informe de resultados.</p>
            </div>
            <div className='button__plan'>
                <Button text={'OK'} handlePortal={handlePortal} />
            </div>
        </div>
    )
}

export default AzharDetalle