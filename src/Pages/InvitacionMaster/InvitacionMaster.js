import React from 'react';
import {Route, Routes} from "react-router-dom";
import Invitacion from "./Invitacion/Invitacion";



/*const invitacion = {
    "url": "mare-y-davis",
    "invitados":[
        {"nombre": "Davis Alvarez"},
        {"nombre": "Marely Ramirez"},
        {"nombre": "Fermin Aldeguer"}
    ]
}*/
const InvitacionMaster = () => {
    return (
        <>
            <Routes>
                <Route path={"mare-y-davis"} element={<Invitacion  />} />
            </Routes>
        </>
    );
};

export default InvitacionMaster;