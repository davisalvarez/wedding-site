import React from 'react';
import {Route, Routes} from "react-router-dom";
import Invitacion from "./Invitacion/Invitacion";



const invitacion = {
    "url": "familia-lemus",
    "invitados":[
        {"nombre": "Titulo Uno"},
        {"nombre": "Titulo Dos"},
        {"nombre": "Titulo Tres"}
    ]
}
const InvitacionMaster = () => {
    return (
        <>
            <Routes>
                <Route path={invitacion.url} element={<Invitacion invitados={invitacion.invitados} />} />
            </Routes>
        </>
    );
};

export default InvitacionMaster;