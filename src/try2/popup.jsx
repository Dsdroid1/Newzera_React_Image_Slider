import React, { useState } from 'react';
import './popup.css';
import { useMutation, gql } from '@apollo/client';

const SEND_MESSAGE_MUTATION = gql`
  mutation SendMessage($msg: String!, $email: String!) {
    sendMessage(msg: $msg, email: $email) {
      id
    }
  }
`;

function Popup(props) {
  const [formState, setFormState] = useState({
    msg: '',
    url: ''
  });

  const [sendMessage, { error }] = useMutation(SEND_MESSAGE_MUTATION, {
    variables: {
      msg: formState.msg,
      email: formState.email
    }
  });

  if (error)
    return (
      <div className='popup-container'>
        <div className='popup-content'>
          'Error Occured!Try Again'
          <div
            className='close-btn'
            onClick={() => props.closePopup(false)}
          ></div>
        </div>
      </div>
    );

  return props.active ? (
    <div className='popup-container'>
      <div className='popup-content'>
        <div
          className='close-btn'
          onClick={() => props.closePopup(false)}
        ></div>
        <div className='contact-heading'>Contact</div>
        <p>Lorem Ipsum is simply dummy text of the printing</p>
        <form
          onSubmit={e => {
            e.preventDefault();
            sendMessage();
            props.closePopup(false);
          }}
        >
          <div className='form-field'>
            <label for='name'>Name</label>
            <input type='text' name='name' placeholder='Enter your name here' />
          </div>
          <div className='form-field'>
            <label for='email'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Enter your e-mail address here'
              onChange={e => {
                setFormState({
                  ...formState,
                  email: e.target.value
                });
              }}
            />
          </div>
          <div className='form-field'>
            <label for='message'>Message</label>
            <input
              type='text'
              name='message'
              placeholder='Wanna share something with us?'
              onChange={e => {
                setFormState({
                  ...formState,
                  msg: e.target.value
                });
              }}
            />
          </div>
          <input
            style={{ position: 'absolute', right: '30px' }}
            type='submit'
            value='Submit'
          ></input>
        </form>
        <br />
        <br />
        <span
          style={{
            color: '#495057',
            fontSize: '12px',
            position: 'relative',
            top: '15px'
          }}
        >
          Need more info? hello@newzera.com
        </span>
        <a href='https://twitter.com/?lang=en'>
          <div className='twitter icons'></div>
        </a>
        <a href='https://www.linkedin.com/feed/'>
          <div className='linkedin icons'></div>
        </a>
        <a href='https://www.facebook.com/'>
          <div className='facebook icons'></div>
        </a>
      </div>
    </div>
  ) : (
    ''
  );
}

export default Popup;
