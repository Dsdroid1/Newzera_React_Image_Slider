import React,{useState} from 'react';
import Popup from './popup';
import './overlay.css';
function Overlay() {
    const [popupOn,setPopupon] = useState(false);
    return (  
        <React.Fragment>
        
        <ul className='navbar'>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li className='nav-pop' onClick={()=>setPopupon(true)}>Contact</li>
        </ul>
        
        <div className='text-heading'>
           Type Text
           <div className='text-content'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           </div>
        </div>

        <div className='bottom-icons'>
            <a href='https://www.facebook.com/'><div className='facebook icon'></div></a>
            <a href='https://www.linkedin.com/feed/'><div className='linkedin icon'></div></a>
            <a href='https://twitter.com/?lang=en'><div className='twitter icon'></div></a>
        </div>
        
        <Popup active={popupOn} closePopup={setPopupon}/>
        </React.Fragment>
    );
}
 
export default Overlay;