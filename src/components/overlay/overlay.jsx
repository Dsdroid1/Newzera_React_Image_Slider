import React, { useState } from 'react';
import Popup from '../popup/popup';
import './overlay.css';

function Overlay() {
  //NOTE: NOT RESPONSIVE YET
  //This component is the navbar and content which exists in the app over our image slider
  //The elements here are placed via relative positioning and using top and left,
  //Therefore, this works well on a laptop like screen, but fails for a mobile device.
  //To make responsive, use better CSS and positioning of elements.
  //Position : Absolute->Absolute positioning based on rendering window.
  //Position : Relative->Relative to the component in which it is placed.
  const [popupOn, setPopupon] = useState(false);
  //React state hook to control the popup for Contact in the navbar
  return (
    <React.Fragment>
      <ul className='navbar'>
        <li>
          <a href=''>About</a>
        </li>
        <li>
          <a href=''>Blog</a>
        </li>
        <li>
          <a href=''>Careers</a>
        </li>
        <li className='nav-pop' onClick={() => setPopupon(true)}>
          Contact
        </li>
      </ul>

      <div className='text-heading'>
        Type Text
        <div className='text-content'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>

      <div className='bottom-icons'>
        <a href='https://twitter.com/?lang=en'>
          <div className='twitter icon'></div>
        </a>
        <a href='https://www.linkedin.com/feed/'>
          <div className='linkedin icon'></div>
        </a>
        <a href='https://www.facebook.com/'>
          <div className='facebook icon'></div>
        </a>
      </div>

      <Popup active={popupOn} openPopup={setPopupon} />
    </React.Fragment>
  );
}

export default Overlay;
