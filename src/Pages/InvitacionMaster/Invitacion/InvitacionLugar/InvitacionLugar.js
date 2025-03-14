import React from 'react';
import './InvitacionLugar.css'
import img_lugar from './../../../../assets/img/lugar-de-la-boda.png'
import img_tema from './../../../../assets/img/traje-de-boda.png'


const InvitacionLugar = () => {
    return (
        <>
            <div className={'centrar-content-vertical div-invitacion-lugar'}>
                <div className={'centrar-content-vertical centrar-text'}>
                    <p className={'txt-lugar-mes'}>
                        Abril
                    </p>
                    <div className={'fecha-invitacion'}>
                        <div className={'div-fecha'} style={{justifyContent: "flex-end" }}>
                            <div>
                                <p>Sábado</p>
                            </div>
                        </div>
                        <div>
                            <p className={'txt-dia-boda'}>05</p>
                        </div>
                        <div className={'div-fecha'} style={{justifyContent: "flex-start" }}>
                            <div>
                                <p>4:30pm</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img className={'img-invitacion-lugar'} src={img_lugar} alt={'Icono de pin de mapa'} />


                <p className={'text-invitacion-lugar'}>
                    Tanto la ceremonia como la recepción se celebrarán en el mismo lugar, por lo que queremos compartirte la ubicación para que llegues sin inconvenientes. El sitio cuenta con parqueo, así que no tendrás que preocuparte por eso.
                    Al llegar, solo menciona en garita que asistes a la boda, y te permitirán el acceso sin problema.
                </p>
                <button className={'btn-primary'}
                        onClick={()=>{
                            window.location.href = "https://maps.app.goo.gl/Qo96ZyqcmpbXwKCQ9"
                        }
                        }>
                    Ubicación
                </button>

                <img className={'img-invitacion-lugar'} src={img_tema} alt={'Icono de pin de mapa'} />

                <h4 className={'h4-alt'}>Nuestro tema</h4>

                <p className={'text-invitacion-lugar'}>
                    Para nuestra boda, hemos elegido una paleta de colores específica para la decoración.
                    Te agradeceríamos que evitaras estos tonos para que puedas destacar aún más en este día tan especial.
                    Y recuerda, solo una persona tiene el privilegio de vestir de blanco en esta ocasión: ¡La Novia!
                </p>

            </div>
        </>
    );
};

export default InvitacionLugar;