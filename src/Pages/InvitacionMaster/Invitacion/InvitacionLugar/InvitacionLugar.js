import React from 'react';
import './InvitacionLugar.css'

const InvitacionLugar = () => {
    return (
        <>
            <div className={'centrar-content-vertical centrar-text'}>
                <p className={'txt-lugar-mes'}>
                    Abril
                </p>
                <div className={'fecha-invitacion'}>
                    <div className={'div-fecha'} style={{justifyContent: "flex-end" }}>
                        <div>
                            <p>Sábado</p>
                        </div>
                    </div>
                    <div>
                        <p className={'txt-dia-boda'}>05</p>
                    </div>
                    <div className={'div-fecha'} style={{justifyContent: "flex-start" }}>
                        <div>
                            <p>4:30pm</p>
                        </div>
                    </div>
                </div>
            </div>

            <h4 className={'h4-alt'}>Ceremonia</h4>
            <p>Life Church Guatemala</p>
            <button className={'btn-primary'}>Ubicación</button>
        </>
    );
};

export default InvitacionLugar;