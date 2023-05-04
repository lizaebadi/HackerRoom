import React from 'react';
import './Intro.css'

const Intro = ({hideIntro}) => {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const username = userData.username;

  return (
    <div id='intro-container'>
      <div id='intro-text'>
        <h1 id='intro-title'>Welcome to HackerRoom {username}!</h1>
        <p>Get ready to hone your coding skills and knowledge while having fun.</p>
        <ul id="intro-list">
          <li> Esc key -  access the menu </li>
          <li> Space bar -  interact with objects</li>
          <li> Arrow keys -  move your character around the room</li>
        </ul>
        <button id='start-game' onClick={hideIntro}>Start Game</button>

       
      </div>
    </div>
  )

}

export default Intro;