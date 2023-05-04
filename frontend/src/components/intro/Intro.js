import React from 'react';
import './Intro.css'

const Intro = () => {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const username = userData.username;

  return (
    <div id='intro-container'>
      <h1>Welcome {username}!</h1>
      <p>Get ready to hone your coding skills and knowledge while having fun.</p>
      <p>Use the Arrow keys to move your character around the room</p>
      <p>Use the Space bar to interact with objects</p>
      <p>Use the Esc key to access the menu </p>
      <p>Enjoy HackerRoom</p>
    </div>
  )

}

export default Intro;