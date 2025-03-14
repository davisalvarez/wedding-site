import React from 'react';
import './InvitadosInvitacion.css'
import img_invitacion from "../../../../assets/img/invitacion-de-boda.png";

const InvitadosInvitacion = ({invitados}) => {



    return (
        <>
            {invitados.map(a =>{
                return(
                    <h3 key={a.nombre} className={'centrar-text h3-text'}>
                        {a.nombre}
                    </h3>
                )
            })}
            <div className={'centrar-content-vertical'}>
                <img className={'img-invitacion-lugar'} src={img_invitacion} alt={'Icono de pin de mapa'} />

                <p  className={'text-invitacion-lugar'}>
                    Este día será muy especial para nosotros, y queremos asegurarnos de recibirte de la mejor manera.
                    Por eso, te pedimos que confirmes tu asistencia antes del 21 de marzo. ¡Esperamos contar contigo!"
                </p>
                <button className={'btn-primary'}
                        onClick={()=>{
                            window.location.href = "https://forms.office.com/r/zrPxsU3T1k?origin=lprLink"
                        }
                        }>
                    Confirmar
                </button>
            </div>
        </>
    );
};

export default InvitadosInvitacion;