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
                                Queremos celebrar junto a nuestros familiares y amigos este momento tan especial y trascendental, en el que dejamos de ser dos para unirnos en santo matrimonio ante Dios. Con su bendición y la de todos ustedes, daremos inicio a esta nueva etapa como familia, convirtiéndonos en Esposo y Esposa.
                            </p>
                            <div className={'div-line-crono-terra'}></div>
                        </div>
                        <p className={'md-actividad-hora-left color-terracota-md'}>17:00 </p>
                    </div>
                    <img className={"cronograma-img-left"} src={img_novios} />
                </div>
                <div className={"md-actividad-right"}>
                    <img className={"cronograma-img-right"} src={img_banquete} />
                    <div className={'md-descripcion-right'}>
                        <p className={'md-actividad-hora-right color-morado-md'}>18:00 </p>
                        <div className={'md-actividad-texto-right'}>
                            <h5 className={'color-morado-md'}>Banquete</h5>
                            <p>
                                Queremos disfrutar de un momento especial de koinonía para celebrar nuestra unión. Nos encantaría compartir contigo un banquete especial, donde podremos seguir conviviendo y festejando juntos este día tan importante.
                            </p>
                            <div className={'div-line-crono-morada'}></div>
                        </div>
                    </div>
                </div>
                <div className={"md-actividad-left"}>
                    <div className={'md-descripcion-left'}>
                        <div className={'md-actividad-texto-left'}>
                            <h5 className={'color-verde-md'}>Brindis</h5>
                            <p>
                                El brindis es una hermosa tradición que nos permite expresar los buenos deseos y celebrar la unión de dos almas. Es un instante de alegría y conexión en el que todos los invitados se unen en un gesto de celebración.
                                Por ello, nos encantaría que nos acompañaras para compartir este emotivo momento
                            </p>
                            <div className={'div-line-crono-verde'}></div>
                        </div>
                        <p className={'md-actividad-hora-left color-verde-md'}>18:30 </p>
                    </div>
                    <img className={"cronograma-img-left"} src={img_copas} />
                </div>
                <div className={"md-actividad-right"}>
                    <img className={"cronograma-img-right"} src={img_pastel} />
                    <div className={'md-descripcion-right'}>
                        <p className={'md-actividad-hora-right color-terracota-md'}>19:30 </p>
                        <div className={'md-actividad-texto-right'}>
                            <h5 className={'color-terracota-md'}>Postre</h5>
                            <p>
                                Nos gustaría compartir contigo un momento especial al disfrutar juntos de un postre que simboliza nuestra primera tarea en equipo como esposos.
                                Como símbolo de unión, cortaremos la tarta juntos, dejando constancia del inicio de nuestra vida en común y caminando con decisión en la misma dirección.
                            </p>
                            <div className={'div-line-crono-terra'}></div>
                        </div>
                    </div>
                </div>
                <div className={"md-actividad-left"}>
                    <div className={'md-descripcion-left'}>
                        <div className={'md-actividad-texto-left'}>
                            <h5 className={'color-morado-md'}>Felices para siempre</h5>
                            <p>
                                Juntos despediremos a la nueva pareja de esposos, quienes inician un camino lleno de retos y alegrías. No es una despedida, sino el comienzo de una hermosa vida juntos.
                                ¡Gracias por ser parte de este momento tan especial!
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