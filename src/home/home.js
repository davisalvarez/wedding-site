import React from 'react';
import './home.css'
import video from './../assets/videos/save the date.mp4'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SaveTheDate from "../Pages/SaveTheDate/SaveTheDate";
import Invitacion from "../Pages/Invitacion/Invitacion";
import Timer from "../timer/Timer";

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


                    <Route path={'/invitacion/*'} element={<Invitacion /> }/>

                    <Route path={'/timer'} element={<Timer /> } />


                    <Route path={'*'}  element={<Home version={"Aparta la Fecha"}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Home;