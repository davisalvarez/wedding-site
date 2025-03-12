import React from 'react';
import './InvitacionActividades.css'
import img_recepcion from './../../../../assets/img/traje-de-boda.png'
import img_arco from './../../../../assets/img/arco.png'
import img_copas from './../../../../assets/img/copas-de-champan.png'
import img_banquete from './../../../../assets/img/banquete.png'
import img_pastel from './../../../../assets/img/pastel.png'
import img_carrito from './../../../../assets/img/coche.png'

const InvitacionActividades = () => {
    return (
        <>
            <div className={"md-cronograma-container"}>
                <div className={"md-actividad-right"}>
                    <img className={"cronograma-img-right"} src={img_recepcion} />
                    <div className={'md-descripcion-right'}>
                        <p className={'md-actividad-hora-right'}>16:30 </p>
                        <div className={'md-actividad-texto-right'}>
                            <h5>Recepción</h5>
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
                            <h5>Ceremonia</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <div className={'div-line-crono'}></div>
                        </div>
                        <p className={'md-actividad-hora-left'}>17:00 </p>
                    </div>
                    <img className={"cronograma-img-left"} src={img_arco} />
                </div>
                <div className={"md-actividad-right"}>
                    <img className={"cronograma-img-right"} src={img_copas} />
                    <div className={'md-descripcion-right'}>
                        <p className={'md-actividad-hora-right'}>18:00 </p>
                        <div className={'md-actividad-texto-right'}>
                            <h5>Recepción</h5>
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
                            <h5>Ceremonia</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <div className={'div-line-crono'}></div>
                        </div>
                        <p className={'md-actividad-hora-left'}>18:30 </p>
                    </div>
                    <img className={"cronograma-img-left"} src={img_banquete} />
                </div>
                <div className={"md-actividad-right"}>
                    <img className={"cronograma-img-right"} src={img_pastel} />
                    <div className={'md-descripcion-right'}>
                        <p className={'md-actividad-hora-right'}>19:30 </p>
                        <div className={'md-actividad-texto-right'}>
                            <h5>Recepción</h5>
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
                            <h5>Ceremonia</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <div className={'div-line-crono'}></div>
                        </div>
                        <p className={'md-actividad-hora-left'}>21:00 </p>
                    </div>
                    <img className={"cronograma-img-left"} src={img_carrito} />
                </div>
            </div>
        </>
    );
};

export default InvitacionActividades;