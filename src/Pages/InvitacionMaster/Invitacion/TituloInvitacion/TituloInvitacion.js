import React from 'react';
import './TituloInvitacion.css'
import img_davisymare from './../../../../assets/img/myd.JPG'
import img_davisymare2 from './../../../../assets/img/myd2.jpg'

const TituloInvitacion = () => {
    return (
        <>
            <div className={'centrar-content-vertical div-invitacion-titulo'} >
                <h1>M | D</h1>

                <p className={'leyenda-invitacion'}>
                    Este día es el inicio de un gran viaje que compartiremos unidos y llenos de amor
                </p>
                <p className={'leyenda-invitacion'}>
                    ¡Nos vamos a casar!
                </p>

                <img className={'foto-titulo'} src={img_davisymare} />

                <p className={'leyenda-invitacion'}>
                    Con la bendición de Dios y de nuestros padres
                </p>

                <h3 className={'centrar-text'}>
                    David Leonardo Alvarez Alvarez
                    <br/>
                    Edna Ruth Orozco Santos
                </h3>
                <p className={'y-invitacion'}>
                    &
                </p>
                <h3 className={'centrar-text'}>
                    Maria Lopez Aquino
                </h3>

                <p className={'leyenda-invitacion '}>
                    Nosotros
                </p>

                <h1 className={'centrar-text'}>Marely Andrea Ramirez Lopez</h1>
                <h3 className={''}>
                    &
                </h3>
                <h1 className={'centrar-text'}>Jonathan Davis Alvarez Orozco</h1>

                <img className={'foto-titulo-vertical'} src={img_davisymare2} />


                <p className={'leyenda-invitacion'}>
                    Tenemos el honor de invitarte a ti a celebrar nuestra boda
                </p>
            </div>

        </>
    );
};

export default TituloInvitacion;