import React from 'react';
import './Menu.css'

const Menu = ({ navigate }) => {

  const logout = () => {
    window.localStorage.removeItem("token")
    navigate('/login')
  }
  
  return (
    <div id='menu-container'>
      <div id='menu-list'>
          <h1 id='menu-title'>Menu</h1>
          <ul className='menu-btn'>
            <li><button>Settings</button></li>
            <li><button onClick={logout}>Log out</button></li>
          </ul>

      </div>
    </div>
  );
}

export default Menu;