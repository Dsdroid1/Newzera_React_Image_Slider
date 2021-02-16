import React from 'react';
import './popup.css';
function Popup(props){

    return (props.active) ? (
        <div className='popup-container'>
            <div className='popup-content'>
                <div className='close-btn' onClick={()=>props.closePopup(false)}></div>
                <div className='contact-heading'>Contact</div>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
                <form>
                <label for='name'  >Name    :</label>
                <input type='text' name='name' placeholder='Enter your name here'/>
                <br/>
                <br/>
                <label for='email'  >Email  :</label>
                <input type='email' name='email' placeholder='Enter your email here'/>
                <br/>
                <br/>
                <label for='message'>Message:</label>
                <input type='text' name='message' placeholder='Enter your message here'/>
                <br/>
                <br/>
                <input style={{ position:'absolute',right:'30px'}} type='submit' value='Submit'></input>
                </form>
                <br/>
                <br/>
                <span style={{color: '#495057', fontSize: '12px'}}>Need more info? hello@newzera.com</span>
                <a href='https://twitter.com/?lang=en'><div className='twitter icons'></div></a>
                <a href='https://www.linkedin.com/feed/'><div className='linkedin icons'></div></a>
                <a href='https://www.facebook.com/'><div className='facebook icons'></div></a>
                
            </div>
        </div>
    ):'';
}

export default Popup; 