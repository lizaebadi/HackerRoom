import React, { useState } from 'react';
import './LogInForm.css';

const LogInForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    if (!email || !password ) return

    event.preventDefault();

    let response = await fetch( '/tokens', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password })
    })

    if (response.status === 401) {
        setErrorMessage('Email address is incorrect. Try again!');
    } else if (response.status === 402) {
        setErrorMessage('Password is incorrect. Try again!');
    } else {
        let data = await response.json()
        console.log(data)
        console.log('Login Successful')
    }
  }

  return (
    <>
      <h1>Escape Room</h1>
      <h1>Login</h1>
      <form id='signup-form' onSubmit={handleSubmit}>
          <input placeholder='Enter your email address' id="email" className="form-field" type='text' value={ email } onChange={handleEmailChange} />
          <input placeholder='Enter your password' id="password" className="form-field" type='password' value={ password } onChange={handlePasswordChange} />
          <input id='submit' className='signup-submit-btn' type="submit" value="Login" /> 
      </form>
      {errorMessage && <p className="signup-error-message">{errorMessage}</p>}
    </>
  );
}

export default LogInForm;