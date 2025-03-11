import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Home from "./home/home";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Timer from "./timer/Timer";
import Invitacion from "./Pages/Invitacion/Invitacion";
import SaveTheDate from "./Pages/SaveTheDate/SaveTheDate";
import video from "./assets/videos/save the date.mp4";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header/>

      <div className={'home-container'}>
          <div className={'home-inner-container'}>
              <Home />
          </div>
      </div>
      <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
