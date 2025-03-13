import React from 'react';
import "./Invitacion.css"
import TituloInvitacion from "./TituloInvitacion/TituloInvitacion";
import InvitadosInvitacion from "./InvitadosInvitacion/InvitadosInvitacion";
import InvitacionLugar from "./InvitacionLugar/InvitacionLugar";
import InvitacionActividades from "./InvitacionActividades/InvitacionActividades";
import InvitacionConfirmacion from "./InvitacionConfirmacion/InvitacionConfirmacion";

const Invitacion = ({invitados})=> {

    return (
        <>
            <TituloInvitacion />
            <InvitadosInvitacion invitados={invitados} />
            <InvitacionLugar />
            <InvitacionActividades />
            <InvitacionConfirmacion />
        </>
    );
}

export default Invitacion;