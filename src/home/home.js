import React from 'react';

import './home.css'
const Home = () => {
    const font_principal = 'mali-regular'
    return (
        <>
            {/* ______________________________________________________________________________________________________________*/}


                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                        <link
                            href="https://fonts.googleapis.com/css2?family=Lobster&family=Sora:wght@100..800&display=swap"
                            rel="stylesheet"/>


            {/* ______________________________________________________________________________________________________________*/}

            <div className={"div-test-fonts"}>

                <h1 className={"lobster-regular"}>Marely y Davis</h1>

                <h2 className={"sora"}>Nos complace invitarte a nuesta boda</h2>

            </div>

        </>
    );
};

export default Home;