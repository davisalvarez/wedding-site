import React from 'react';
import './InvitacionActividades.css'
import img_novios from './../../../../assets/img/boda.png'
import img_arco from './../../../../assets/img/arco.png'
import img_copas from './../../../../assets/img/copas-de-champan.png'
import img_banquete from './../../../../assets/img/banquete.png'
import img_pastel from './../../../../assets/img/pastel.png'
import img_carrito from './../../../../assets/img/coche.png'

const InvitacionActividades = () => {
    return (
        <>
            <div className={"md-cronograma-container"}>
                <h3 className={'centrar-text h3-text'} >
                    Actividades
                </h3>
                <div className={"md-actividad-right"}>
                    <img className={"cronograma-img-right"} src={img_arco} />
                    <div className={'md-descripcion-right'}>
                        <p className={'md-actividad-hora-right color-verde-md'}>16:30 </p>
                        <div className={'md-actividad-texto-right'}>
                            <h5 className={'color-verde-md'}>Bienvenida</h5>
                            <p>
                                Queremos que disfrutes el inicio del evento sin prisas ni distracciones, por eso comenzaremos con una pequeña recepción. Será el momento perfecto para ponerte cómodo y compartir con los demás invitados antes de dar inicio a la ceremonia
                            </p>
                            <div className={'div-line-crono-verde'}></div>
                        </div>
                    </div>
                </div>
                <div className={"md-actividad-left"}>
                    <div className={'md-descripcion-left'}>
                        <div className={'md-actividad-texto-left'}>
                            <h5 className={'color-terracota-md'}>Ceremonia</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <div className={'div-line-crono-terra'}></div>
                        </div>
                        <p className={'md-actividad-hora-left color-terracota-md'}>17:00 </p>
                    </div>
                    <img className={"cronograma-img-left"} src={img_novios} />
                </div>
                <div className={"md-actividad-right"}>
                    <img className={"cronograma-img-right"} src={img_copas} />
                    <div className={'md-descripcion-right'}>
                        <p className={'md-actividad-hora-right color-morado-md'}>18:00 </p>
                        <div className={'md-actividad-texto-right'}>
                            <h5 className={'color-morado-md'}>Recepción</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <div className={'div-line-crono-morada'}></div>
                        </div>
                    </div>
                </div>
                <div className={"md-actividad-left"}>
                    <div className={'md-descripcion-left'}>
                        <div className={'md-actividad-texto-left'}>
                            <h5 className={'color-verde-md'}>Ceremonia</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <div className={'div-line-crono-verde'}></div>
                        </div>
                        <p className={'md-actividad-hora-left color-verde-md'}>18:30 </p>
                    </div>
                    <img className={"cronograma-img-left"} src={img_banquete} />
                </div>
                <div className={"md-actividad-right"}>
                    <img className={"cronograma-img-right"} src={img_pastel} />
                    <div className={'md-descripcion-right'}>
                        <p className={'md-actividad-hora-right color-terracota-md'}>19:30 </p>
                        <div className={'md-actividad-texto-right'}>
                            <h5 className={'color-terracota-md'}>Recepción</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <div className={'div-line-crono-terra'}></div>
                        </div>
                    </div>
                </div>
                <div className={"md-actividad-left"}>
                    <div className={'md-descripcion-left'}>
                        <div className={'md-actividad-texto-left'}>
                            <h5 className={'color-morado-md'}>Ceremonia</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <div className={'div-line-crono-morada'}></div>
                        </div>
                        <p className={'md-actividad-hora-left color-morado-md'}>21:00 </p>
                    </div>
                    <img className={"cronograma-img-left"} src={img_carrito} />
                </div>
            </div>
        </>
    );
};

export default InvitacionActividades;