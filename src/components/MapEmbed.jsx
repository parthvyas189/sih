import React from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react'
 
function MapEmbed(props) {
    return (
        <div className='w-full h-full'>
            <Map
                google= {props.google}
                className='w-full h-full'
                // style={{width:'100%', height:'100%'}}
                zoom={10}
                initialCenter={
                    {
                        lat:19.07277126397019, 
                        lng:72.89994233819932
                    }
                }
            />  
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey:import.meta.env.VITE_GOOGLE_MAPS_API
})(MapEmbed);
