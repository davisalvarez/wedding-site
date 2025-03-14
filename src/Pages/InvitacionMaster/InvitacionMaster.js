import React from 'react';
import {Route, Routes} from "react-router-dom";
import Invitacion from "./Invitacion/Invitacion";
import SaveTheDate from "../SaveTheDate/SaveTheDate";

import lista from "./lista_invitados";

const InvitacionMaster = () => {
    return (
        <>
            <Routes>
                {
                    lista.lista_invitados.map(inv =>{
                        return(
                            <Route path={inv.url}
                                   element={<Invitacion invitados={inv.invitados} />} />
                        )
                    })
                }
            </Routes>

        </>
    );
};

export default InvitacionMaster;