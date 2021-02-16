import React, { useState,useRef,useEffect } from 'react';
import './slider.css';
import Overlay from './overlay';
function Slider(){
    const [index,setIndex] = useState(0);
    let x_displace = -index*500
    const styles= {
        transform: `translate(${x_displace}px, 0px)` ,
        transition: `transform ease-out 1s`
    }
    const autoplayref = useRef()

    useEffect(() => {
        autoplayref.current=()=>{
            return setIndex(index===1?0:1)
        }
    })
    
    useEffect(() => {
        const play = () => {
          autoplayref.current()
        }
    
        const interval = setInterval(play, 10 * 1000)
        return () => clearInterval(interval)
      }, [])


    return (
        <React.Fragment>
            <div className='slider-container'>
                
                <div className='slider-flex' style={styles}>
                    <div className='image_cont img1'></div>
                    <div className='image_cont img2'></div>
                
                </div>
                <div className='overlay_data'>
                    <Overlay/>
                    
                </div>
                <div className='progress'>
                    {
                    [...Array(2)].map((e,i)=>  {
                        if(i===index)
                            return <span className='dotfill' key={i}></span>
                        else
                            return <span className='dot' key={i}></span>
                    })
                    }
                    </div>
            </div>
            
            <button onClick={ () => setIndex(index===1?0:1)}>Next</button>
            <p>Current Image {index}</p>
            
        </React.Fragment>
    );
}

export default Slider;