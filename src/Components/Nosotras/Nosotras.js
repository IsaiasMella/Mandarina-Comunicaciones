import React from 'react'
import './Nosotras.css'
import VideoPresentacion from '../../Video/conocenos.mp4'

export const Nosotras = () => {
    return (
        <div className='container__nosotras' name='nosotras'>
            <div className='video'>
                <video controls>
                    <source src={VideoPresentacion} type="video/mp4" />
                </video>
            </div>
            <div className='nosotras'>
                <div className='nosotras__text'>
                    <h2>¿Quienes Somos?</h2>
                    <p>Somos Mica y Nale, fundadoras de "Mandarina Comunicaciones", agencia de marketing digital dedicada a potenciar la comunicación de Pymes, MiPymes y emprendimientos a través de diferentes estrategias, por eso contamos con servicios como lo son asesoramiento personalizado, definición de estrategias, optimización de biografia, entre muchos mas. Nuestra mision es hacer crecer tus redes de una manera sustentable y atrayendo audiciencia de calidad.</p>
                </div>
            </div>
        </div>
    )
}
