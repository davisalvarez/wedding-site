import React from 'react';
import './home.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SaveTheDate from "../Pages/SaveTheDate/SaveTheDate";
import Timer from "../timer/Timer";
import InvitacionMaster from "../Pages/InvitacionMaster/InvitacionMaster";

const Home = ({version}) => {

    React.useEffect(()=>{
        document.title = version
    })

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home version={"Mare & Davis"}/>}/>

                    {/*<Route path={'/'} element={ <p>home home home home</p> }/>*/}
                    <Route path={'/save-the-date'} element={<SaveTheDate version={"Save the Date"} /> }/>
                    <Route path={'/aparta-la-fecha'} element={<SaveTheDate version={"Aparta la Fecha"} /> }/>


                    <Route path={'/invitacion/*'} element={<InvitacionMaster /> }/>

                    <Route path={'/timer'} element={<Timer /> } />


                    <Route path={'*'}  element={<SaveTheDate version={"Save the Date"} /> }/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Home;