import React from 'react';
import './InvitadosInvitacion.css'
import img_invitacion from "../../../../assets/img/invitacion-de-boda.png";
import img_vineta from "../../../../assets/img/logo-md/flor-vineta.jpg";

const InvitadosInvitacion = ({invitados}) => {

    React.useEffect(()=>{

        document.title = "Invitación | MD"
    }, [])


    return (
        <>
            <div className={'centrar-content-vertical'}>
                {invitados.map(a =>{
                    return(
                        <div  className={'div-invitados'}>
                            <img className={'img-vineta'} src={img_vineta}/>
                            <h3 key={a.nombre} className={'h3-text'}>
                                {a.nombre}
                            </h3>
                        </div>
                    )
                })}
            </div>
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