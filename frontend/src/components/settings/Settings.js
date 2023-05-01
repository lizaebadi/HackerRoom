import React, {useState} from 'react';
import { useLocation } from 'react-router';
import './Settings.css'

const Settings = ({ navigate }) => {
  const { state } = useLocation();
  const userData = state.userData;

  const [optionSelected, setOptionSeclected] = useState("Main")

  const updateUser = (field, value) => {
    const body = { id: userData._id };
    body[field] = value
    fetch('/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(() => {
      navigate('/game')
    })
    .catch(error => console.log(error));  
  }

  return (  
          <div id='settings-container'>
            <h1 id='settings-title'>Settings</h1>

            <div id="settings-form">
              <div id='settings-menu'>
                <button className="settings-btn" onClick={() => setOptionSeclected("Email")}>Change Email</button>
                <button className="settings-btn" onClick={() => setOptionSeclected("Username")}>Change Username</button>
                <button className="settings-btn" onClick={() => setOptionSeclected("Password")}>Change Password</button>
                <button className="settings-btn delete" onClick={() => setOptionSeclected("Delete")}>Delete Account</button>
              </div>
              <div id='account-page-menu-interaction'>

                <div id='account-page-menu-main' className={optionSelected === "Main" ? "show-menu" : "hide-menu"}>
                  <h2 className="menu-title">My information</h2>
                  <div>
                    <p className="info-details-title">My current email:</p>
                    <p className="info-details-value">{userData.email}</p>
                  </div>
                  <div>
                    <p className="info-details-title">My current username:</p>
                    <p className="info-details-value">{userData.username}</p>
                  </div>
                  <div>
                    <p className="info-details-title">My current password:</p>
                    <p className="info-details-value">********</p>
                  </div>
                </div>

                <div id='account-page-menu-email' className={optionSelected === "Email" ? "show-menu" : "hide-menu"}>
                  <h2 className="menu-title">Email</h2>
                  <div>
                    <p className="info-details-title">My current email:</p>
                    <p className="info-details-value">{userData.email}</p>
                  </div>
                  <EmailForm updateUser={updateUser} />
                </div>
                
                <div id='account-page-menu-username' className={optionSelected === "Username" ? "show-menu" : "hide-menu"}>
                  <h2 className="menu-title">Username</h2>
                  <div>
                    <p className="info-details-title">My current username:</p>
                    <p className="info-details-value">{userData.username}</p>
                  </div>
                  <UsernameForm updateUser={updateUser} />
                </div>

                <div id='account-page-menu-password' className={optionSelected === "Password" ? "show-menu" : "hide-menu"}>
                  <h2 className="menu-title">Password</h2>
                  <div>
                    <p className="info-details-title">My current password:</p>
                    <p className="info-details-value">********</p>
                  </div>
                  <PasswordForm />
                </div>
                <div id='account-page-menu-delete' className={optionSelected === "Delete" ? "show-menu" : "hide-menu"}>
                  <h2 className="menu-title">Are you sure?</h2>
                  <button type="submit" className="my-account-btn red-btn" onClick={deleteAccount}>Delete</button>
                </div>
              </div>
            </div>
            <p className='prompt-login-text'><a href="/posts" className='prompt-login-link'>Back</a></p>

          </div>

  );
}

export default Settings;