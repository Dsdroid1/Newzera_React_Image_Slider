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
  //For form validation, to display error message
  const [errorMsg, setErrorMsg] = useState('');

  const [sendMessage] = useMutation(SEND_MESSAGE_MUTATION, {
    variables: {
      msg: formState.msg,
      email: formState.email
    },
    onError(err) {
      console.log(err);
      console.log('Cant mutate,error occured!');
      setErrorMsg('Cant mutate,error occured');
      //Now display this on popup
    }
  });
  //Get the function to perform the mutation, as well as error, if it occured during mutation

  // if (error) {
  //   console.log('Mutation error');

  // }

  return props.active ? ( //props.active check tells us whether we should render our Popup or not.
    <div className='popup-container'>
      {/*This is a container with absolute positioning, and it has its background transparency lowered
        so that it looks like the popup is the only active window.*/}
      <div className='popup-content'>
        <div
          className='close-btn'
          onClick={() => {
            setErrorMsg('');
            setFormState({
              msg: '',
              email: ''
            });
            props.openPopup(false);
          }}
        ></div>
        <div className='contact-heading'>Contact</div>
        <p>Lorem Ipsum is simply dummy text of the printing</p>
        <form
          onSubmit={async e => {
            e.preventDefault();
            //Include a validate function here, to verify the form data
            let valid = ValidateInput(formState.msg, formState.email);
            if (valid) {
              setDataValid(true);
              setErrorMsg('');

              await sendMessage();
              console.log('error message :' + errorMsg);
              if (errorMsg === '') {
                console.log('Data is sent to server');
                //console.log(errorMsg);
                props.openPopup(false);
                //console.log(errorMsg);
              }

              //Call the mutation to send data
            } else {
              //Display some error
              setDataValid(false);
              setErrorMsg('Invalid form data');
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
        {(!dataValid || errorMsg) && (
          <>
            <span
              style={{
                color: 'red',
                fontSize: '12px',
                position: 'relative',
                top: '20px'
              }}
            >
              {errorMsg}
            </span>
          </>
        )}
        {/* Above block is to display error messages, if any exist or if data is invalid*/}
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
