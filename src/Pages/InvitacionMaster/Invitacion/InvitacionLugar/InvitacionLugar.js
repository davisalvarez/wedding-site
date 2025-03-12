import React from 'react';
import './InvitacionLugar.css'
import img_lugar from './../../../../assets/img/lugar-de-la-boda.png'


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


                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <button className={'btn-primary'}
                        onClick={()=>{
                            window.location.href = "https://maps.app.goo.gl/Qo96ZyqcmpbXwKCQ9"
                        }
                        }>
                    Ubicación
                </button>

            </div>
        </>
    );
};

export default InvitacionLugar;