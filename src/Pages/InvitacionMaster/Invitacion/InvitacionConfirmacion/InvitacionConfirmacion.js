import React from 'react';
import './InvitacionConfirmacion.css'
import img_regalo from "../../../../assets/img/regalo-de-bodas.png";
import img_flor from "../../../../assets/img/Ramo.png";


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
                            window.location.href = "https://www.cemaco.com/list/maredavis"
                        }
                        }>
                    Sugerencias
                </button>

                <div className={'col-3'}>

                    <p className={'text-leyenda centrar-text color-terracota-md'}>
                        “Amar cambia de casa el alma”
                        <br/>
                        <span>Constancio C. Vigil.</span>
                    </p>
                    <img className={'img-ramo-final'} src={img_flor}/>
                </div>
            </div>
        </>
    );
};

export default InvitacionConfirmacion;