import React from 'react'
import AzharDetalle from '../Portals/PlanesDetalle/AzharDetalle/AzharDetalle';
import GajitoDetalle from '../Portals/PlanesDetalle/GajitoDetalle/GajitoDetalle';
import Portals from '../Portals/Portals';
import { useModal } from '../../Hooks/useModal'
import { SemillitaDetalle } from '../Portals/PlanesDetalle/SemillitaDetalle/SemillitaDetalle';
import './Planes.css'

export const Planes = () => {
    const [portalAbiertoSemillita, handlePortalSemillita] = useModal(false)
    const [portalAbiertoAzhar, handlePortalAzhar] = useModal(false)
    const [portalAbiertoGajito, handlePortalGajito] = useModal(false)

    return (
        <>
            <div className='container__planes' name='planes'>
                <div className='planes'>
                    <h3>Semillita</h3>
                    <div className='container__planes-text semillita' onClick={handlePortalSemillita}>
                        <p>Es el plan adecuado para quienes están arrancando. <br />
                            <b>Organizarse</b> y <b>Planificar</b> es una de las primeras semillitas que debemos plantar
                        </p>
                    </div>
                    <Portals portalAbierto={portalAbiertoSemillita} handlePortal={handlePortalSemillita}>
                        <SemillitaDetalle handlePortal={handlePortalSemillita} />
                    </Portals>
                </div>
                <div className='planes'>
                    <h3>Azhar</h3>
                    <div className='container__planes-text' onClick={handlePortalAzhar}>
                        <p>Es el plan ideal para quienes buscan un <b>Plan de Comunicación</b> más completo y personalizado, para hacer florecer nuevas estrategías en sus redes sociales</p>
                    </div>
                    <Portals portalAbierto={portalAbiertoAzhar} handlePortal={handlePortalAzhar}>
                        <AzharDetalle handlePortal={handlePortalAzhar} />
                    </Portals>
                </div>
                <div className='planes'>
                    <h3>Gajito</h3>
                    <div className='container__planes-text' onClick={handlePortalGajito}>
                        <p>Es el plan perfecto para quienes llevan un tiempito en las redes sociales y están buscando
                            <b> Potenciar</b> y <b>Posicionar</b> su marca, exprimiendo al máximo el juguito de sus redes sociales
                        </p>
                    </div>
                    <Portals portalAbierto={portalAbiertoGajito} handlePortal={handlePortalGajito}>
                        <GajitoDetalle handlePortal={handlePortalGajito} />
                    </Portals>
                </div>
            </div>
        </>
    )
}