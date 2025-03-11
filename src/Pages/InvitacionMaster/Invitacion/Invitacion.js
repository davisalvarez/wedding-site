import React from 'react';
import "./Invitacion.css"
import TituloInvitacion from "./TituloInvitacion/TituloInvitacion";
import InvitadosInvitacion from "./InvitadosInvitacion/InvitadosInvitacion";
import InvitacionLugar from "./InvitacionLugar/InvitacionLugar";
import InvitacionActividades from "./InvitacionActividades/InvitacionActividades";

const Invitacion = ({invitados})=> {

    return (
        <>
            {/*<TituloInvitacion />
            <InvitadosInvitacion invitados={invitados} />*/}
            <InvitacionLugar />
            {/*<InvitacionActividades />*/}
        </>
    );
}

export default Invitacion;