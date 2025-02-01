import React from 'react';
import './home.css'
import video from './../assets/videos/save the date.mp4'

const Home = ({version}) => {

    React.useEffect(()=>{

        if(version==="1")
            document.title = 'Mare & Davis'
        else if(version==="2")
            document.title = 'Aparta la Fecha'
        else
            document.title = 'Save the Date'
    })

    return (
        <>
            <div className={'home-container'}>
                <div className={'home-inner-container'}>
                    <video width="100%" height="100%" autoPlay loop muted className={'video-save'}>
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </>
    );
};

export default Home;