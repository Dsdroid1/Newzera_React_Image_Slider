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
//Above is the GraphQL query to send the message to our database

function Popup(props) {
  const [formState, setFormState] = useState({
    msg: '',
    url: ''
  });
  //To keep track of the values in the form, we use the useState hook.

  const [dataValid, setDataValid] = useState(true);

  const [sendMessage, { error }] = useMutation(SEND_MESSAGE_MUTATION, {
    variables: {
      msg: formState.msg,
      email: formState.email
    }
  });
  //Get the function to perform the mutation, as well as error, if it occured during mutation

  if (error)
    return (
      <div className='popup-container'>
        <div className='popup-content'>
          'Error Occured!Try Again'
          <div
            className='close-btn'
            onClick={() => props.openPopup(false)}
          ></div>
        </div>
      </div>
    );

  return props.active ? ( //props.active check tells us whether we should render our Popup or not.
    <div className='popup-container'>
      {/*This is a container with absolute positioning, and it has its background transparency lowered
        so that it looks like the popup is the only active window.*/}
      <div className='popup-content'>
        <div className='close-btn' onClick={() => props.openPopup(false)}></div>
        <div className='contact-heading'>Contact</div>
        <p>Lorem Ipsum is simply dummy text of the printing</p>
        <form
          onSubmit={e => {
            e.preventDefault();
            //Include a validate function here, to verify the form data
            let valid = ValidateInput(formState.msg, formState.email);
            if (valid) {
              setDataValid(true);
              sendMessage();
              setFormState({
                msg: '',
                email: ''
              });
              console.log('Data is sent to server');
              props.openPopup(false);
              //Call the mutation to send data
            } else {
              //Display some error
              setDataValid(false);
              console.log('Data not sent');
            }
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
        {!dataValid && (
          <>
            <span
              style={{
                color: 'red',
                fontSize: '12px',
                position: 'relative',
                top: '20px'
              }}
            >
              Invalid form data
            </span>
          </>
        )}
        <br />
        <span
          style={{
            color: '#495057',
            fontSize: '12px',
            position: 'relative',
            top: '15px'
          }}
        >
          Need more info? hello@newzera.com{/* Can be link(anchor tag) */}
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

const ValidateInput = (msg, email) => {
  if (msg === '' || email === '') {
    //Any blank field
    return false;
  }
  //Do email syntax check here
  return true;
};

export default Popup;
