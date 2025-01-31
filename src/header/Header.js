import React from 'react';
import "./Header.css"

import logo_navbar from "./../assets/img/logo-md/logo-md-white.svg"

const Header = () => {
    return (
        <>
            <div className={"navbar-md bg-verde-md "}>
                <img src={logo_navbar} className={"logo-navbar"} alt={"hola"}/>
            </div>
        </>
    );
};

export default Header;