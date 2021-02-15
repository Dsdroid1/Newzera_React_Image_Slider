import React from 'react';
import './popup.css';
function Popup(props){

    return (props.active) ? (
        <div className='popup-container'>
            <div className='popup-content'>
                It's a me-Mario!
                <button onClick={()=>props.closePopup(false)}>Close Me</button>
            </div>
        </div>
    ):'';
}

export default Popup; 