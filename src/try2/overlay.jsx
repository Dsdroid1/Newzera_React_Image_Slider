import React,{useState} from 'react';
import Popup from './popup';
import './overlay.css';
function Overlay() {
    const [popupOn,setPopupon] = useState(false);
    return (  
        <React.Fragment>
        <div className='nav-pop' onClick={()=>setPopupon(true)}>Open Popup</div>
        <Popup active={popupOn} closePopup={setPopupon}/>
        </React.Fragment>
    );
}
 
export default Overlay;