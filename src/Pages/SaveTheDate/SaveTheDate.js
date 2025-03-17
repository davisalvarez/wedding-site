import React from 'react';
import video from "../../assets/videos/save the date.mp4";

const SaveTheDate =({version}) => {

    React.useEffect(()=>{
        if (version!==undefined)
            document.title = version
    })

    return (
        <>
            <h1 className={'h1-md'}>{version}</h1>
            <video width="100%" height="100%" autoPlay loop controls="true" muted className={'video-save'}>
                <source src={video} type="video/mp4"/>
            </video>
        </>
    );
};

export default SaveTheDate;