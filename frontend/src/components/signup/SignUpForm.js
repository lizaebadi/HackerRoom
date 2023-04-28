import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = ({ navigate }) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    if (!email || !password || !username) return

    event.preventDefault();

    fetch( '/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, email: email, password: password })
    })
      .then(response => {
        if(response.status === 201) {
          navigate('/login')
        } else {
          navigate('/signup')
        }
      })
  }

  return (
    <div id='signup-container'>
      <form id='signup-form' onSubmit={handleSubmit}>
          <h1 id='signup-title'>Signup</h1>
          <input placeholder="Username" id="username" className="form-field" type="text" value={ username } onChange={handleUsernameChange} />
          <input placeholder="Email" id="email" className="form-field"type='text' value={ email } onChange={handleEmailChange} />
          <input placeholder="Password" id="password" className="form-field" type='password' value={password} onChange={handlePasswordChange} />
          <input id='submit' className='signup-submit-btn' type="submit" value="Sign up" />
      </form>
    </div>
  );
}

export default SignUpForm