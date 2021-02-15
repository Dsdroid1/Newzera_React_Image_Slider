import React, { useState } from 'react';
import './slider.css';
import Overlay from './overlay';
function Slider(){
    const [index,setIndex] = useState(0);
    let x_displace = -index*500
    const styles= {
        transform: `translate(${x_displace}px, 0px)` ,
        transition: `transform ease-out 1s`
    }
    
    return (
        <React.Fragment>
            <div className='slider-container'>
                
                <div className='slider-flex' style={styles}>
                    <div className='image_cont img1'></div>
                    <div className='image_cont img2'></div>
                
                </div>
                <div className='overlay_data'>
                    <div>Hello There,general Kenobi</div>
                    <Overlay/>
                </div>
                 
            </div>
            
            <button onClick={ () => setIndex(index===1?0:1)}>Next</button>
            <p>Current Image {index}</p>
            
        </React.Fragment>
    );
}

export default Slider;