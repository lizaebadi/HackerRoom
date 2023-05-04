import React from 'react';
import './Intro.css'

const Intro = ({hideIntro}) => {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const username = userData.username;

  return (
    <div id='intro-container'>
      <div id='intro-text'>
        <h1 id='intro-title'>Welcome to HackerRoom {username}!</h1>
        <ul>
          <p>Get ready to hone your coding skills and knowledge while having fun.</p>
          <li>Use the Arrow keys to move your character around the room</li>
          <li>Use the Space bar to interact with objects</li>
          <li>Use the Esc key to access the menu </li>
          <li><button id='start-game' onClick={hideIntro}>Start Game</button></li>
        </ul>

       
      </div>
    </div>
  )

}

export default Intro;