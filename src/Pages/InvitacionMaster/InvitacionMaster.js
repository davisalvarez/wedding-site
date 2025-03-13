import React from 'react';
import {Route, Routes} from "react-router-dom";
import Invitacion from "./Invitacion/Invitacion";
import SaveTheDate from "../SaveTheDate/SaveTheDate";



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
                <Route path={'/'}  element={<SaveTheDate version={"Save the Date"} /> }/>

                <Route path={"/mare-y-davis"} element={<Invitacion  />} />

                <Route path={'*'}  element={<SaveTheDate version={"Save the Date"} /> }/>
            </Routes>
        </>
    );
};

export default InvitacionMaster;