import React from 'react'
import './Planes.css'

export const Planes = () => {

    return (
        <>
            <div className='container__planes' name='planes'>
                <div className='planes'>
                    <h3>Semillita</h3>
                    <div className='container__planes-text semillita'>
                        <p>Es el plan adecuado para quienes están arrancando. <br />
                            <b>Organizarse</b> y <b>Planificar</b> es una de las primeras semillitas que debemos plantar
                        </p>
                    </div>
                </div>
                <div className='planes'>
                    <h3>Azhar</h3>
                    <div className='container__planes-text'>
                        <p>Es el plan ideal para quienes buscan un <b>Plan de Comunicación</b> más completo y personalizado, para hacer florecer nuevas estrategías en sus redes sociales</p>
                    </div>
                </div>
                <div className='planes'>
                    <h3>Gajito</h3>
                    <div className='container__planes-text'>
                        <p>Es el plan perfecto para quienes llevan un tiempito en las redes sociales y están buscando
                            <b> Potenciar</b> y <b>Posicionar</b> su marca, exprimiendo al máximo el juguito de sus redes sociales
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}