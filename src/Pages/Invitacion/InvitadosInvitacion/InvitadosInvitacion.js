import React from 'react';

const InvitadosInvitacion = ({adultos, ninios}) => {



    return (
        <>

            {adultos.map(a =>{
                return(
                    <h3 key={a.nombre} className={'centrar-text'}>
                        {a.nombre}
                    </h3>
                )
            })}


            <p className={'y-invitacion centrar-text'}>
                &
            </p>

            {ninios.map(n =>{
                return(
                    <h3 key={n.nombre} className={'centrar-text'}>
                        {n.nombre}
                    </h3>
                )
            })}



        </>
    );
};

export default InvitadosInvitacion;