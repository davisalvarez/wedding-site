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

                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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