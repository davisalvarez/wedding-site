import React from 'react';
import img_regalo from "../../../../assets/img/regalo-de-bodas.png";

const InvitacionConfirmacion = () => {
    return (
        <>
            <div className={'centrar-content-vertical'}>
                <img className={'img-invitacion-lugar'} src={img_regalo} alt={'Icono de pin de mapa'} />
                <h4 className={'h4-alt'}>Presentes</h4>
                <p className={'text-invitacion-lugar'}>
                    Con mucho cariño, queremos compartir algunas ideas de regalos para nuestra boda. Así podremos evitar obsequios repetidos y asegurarnos de que cada detalle sea especial y útil en esta nueva etapa que comenzamos juntos. ¡Gracias por ser parte de este momento tan importante para nosotros!"
                </p>
                <button className={'btn-primary'}
                        onClick={()=>{
                            window.location.href = "https://maps.app.goo.gl/Qo96ZyqcmpbXwKCQ9"
                        }
                        }>
                    Sugerencias
                </button>

            </div>
        </>
    );
};

export default InvitacionConfirmacion;