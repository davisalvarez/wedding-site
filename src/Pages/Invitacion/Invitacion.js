import React, {Component} from 'react';
import "./Invitacion.css"
import TituloInvitacion from "./TituloInvitacion/TituloInvitacion";
import InvitadosInvitacion from "./InvitadosInvitacion/InvitadosInvitacion";
import InvitacionLugar from "./InvitacionLugar/InvitacionLugar";

const Invitacion = ()=> {

    const invitados = {
        "url": "familia-lemus",
        "adultos":[
            {
                "nombre": "Javi Lemus"
            },
            {
                "nombre": "July Lemus"
            }],
        "ninios":[
            {
                "nombre": "Marcela Lemus"
            }],

    }

    return (
        <>
            <TituloInvitacion />
            <InvitadosInvitacion adultos={invitados.adultos} ninios={invitados.ninios} />
            <InvitacionLugar />
        </>
    );
}

export default Invitacion;