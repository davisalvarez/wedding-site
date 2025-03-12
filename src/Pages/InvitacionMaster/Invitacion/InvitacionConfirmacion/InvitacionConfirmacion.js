import React from 'react';
import img_regalo from "../../../../assets/img/regalo-de-bodas.png";

const InvitacionConfirmacion = () => {
    return (
        <>
            <div className={'centrar-content-vertical'}>
                <img className={'img-invitacion-lugar'} src={img_regalo} alt={'Icono de pin de mapa'} />
                <h4 className={'h4-alt'}>Presentes</h4>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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