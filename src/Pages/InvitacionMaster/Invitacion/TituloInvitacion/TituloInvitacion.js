import React from 'react';
import './TituloInvitacion.css'

const TituloInvitacion = () => {
    return (
        <>
            <div className={'centrar-content-vertical div-invitacion-titulo'} >
                <h1>M | D</h1>

                <p className={'leyenda-invitacion'}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p className={'leyenda-invitacion'}>
                    ¡Nos casamos!
                </p>

                <img className={'foto-titulo'} src={'https://cdn0.matrimonio.com.co/article-vendor/4333/3_2/1280/jpg/-j9a7130_10_124333-1562127681.webp'} />

                <p className={'leyenda-invitacion'}>
                    Con nuestro amor, la bendición de Dios y de nuestro padres
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

                <img className={'foto-titulo'} src={'https://cdn0.matrimonio.com.co/article-vendor/4333/3_2/1280/jpg/-j9a7130_10_124333-1562127681.webp'} />


                <p className={'leyenda-invitacion'}>
                    Tenemos el honor de invitarte ti a celebrar nuestra boda
                </p>
            </div>

        </>
    );
};

export default TituloInvitacion;