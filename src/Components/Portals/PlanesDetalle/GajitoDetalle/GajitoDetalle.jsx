import React from 'react'
import { Button } from '../../../Buttons/Buttons'
import './GajitoDetalle.css'

const GajitoDetalle = ({handlePortal}) => {
    const handlePropagation = (e) => e.stopPropagation()
    return (
        <div className='container__plan' onClick={handlePropagation}>
            <h3 className='titulos__plan'>¿Qué ofrecemos?</h3>
            <div className='container__detalle-plan'>
                <p>🍊 Diagnóstico</p>
                <p>🍊 Hasta 4 reuniones mensuales.</p>
                <p>🍊 Calendarización .</p>
                <p>🍊 4 reels al mes</p>
                <p>🍊 Optimización de la biografía.</p>
                <p>🍊 4 a 5 publicaciones semanales.</p>
                <p>🍊 Contenido semanal de historias (hasta 30 historias).</p>
                <p>🍊 Gestión de videos o reels (Hasta 4 mensuales).</p>
                <p>🍊 Administración de campañas.</p>
                <p>🍊 Creación de contenido.</p>
                <p>🍊 Sesión fotográfica.</p>
                <p>🍊 Responder mensajes y comentarios.</p>
                <p>🍊 Informe de resultados.</p>
            </div>
            <div className='button__plan'>
                <Button text={'OK'} handlePortal={handlePortal} />
            </div>
        </div>
    )
}

export default GajitoDetalle