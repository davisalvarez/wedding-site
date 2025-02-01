import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Home from "./home/home";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Header/>
          <Routes>
              {/*<Route path={'/'} element={ <p>home home home home</p> }/>*/}
              <Route path={'/'} element={<Home version={"Mare & Davis"}/>}/>
              <Route path={'/aparta-la-fecha'} element={<Home version={"Aparta la Fecha"}/>}/>
              <Route path={'/save-the-date'} element={<Home version={"Save the Date"}/>}/>
              <Route path={'*'}  element={<Home version={"Aparta la Fecha"}/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
