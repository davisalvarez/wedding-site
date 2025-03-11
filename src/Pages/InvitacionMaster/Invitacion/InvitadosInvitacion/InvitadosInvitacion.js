import React from 'react';

const InvitadosInvitacion = ({invitados}) => {



    return (
        <>
            {invitados.map(a =>{
                return(
                    <h3 key={a.nombre} className={'centrar-text'}>
                        {a.nombre}
                    </h3>
                )
            })}
        </>
    );
};

export default InvitadosInvitacion;