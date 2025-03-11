import React from 'react';
import './InvitacionActividades.css'
import img1 from './img/cards verano_BELICE.png'
const InvitacionActividades = () => {
    return (
        <>
            <div className={"md-cronograma-container"}>
                <div className={"md-actividad-right"}>
                    <img className={"cronograma-img-right"} src={img1} />
                    <div className={'md-descripcion-right'}>
                        <p className={'md-actividad-hora-right'}>12:00 </p>
                        <div className={'md-actividad-texto-right'}>
                            <h5>Titulo aqui</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <div className={'div-line-crono'}></div>
                        </div>
                    </div>
                </div>
                <div className={"md-actividad-left"}>
                    <div className={'md-descripcion-left'}>
                        <div className={'md-actividad-texto-left'}>
                            <h5>Titulo aqui</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <div className={'div-line-crono'}></div>
                        </div>
                        <p className={'md-actividad-hora-left'}>13:00 </p>
                    </div>
                    <img className={"cronograma-img-left"} src={img1} />
                </div>
            </div>
        </>
    );
};

export default InvitacionActividades;