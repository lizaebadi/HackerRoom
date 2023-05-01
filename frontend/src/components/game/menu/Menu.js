import React from 'react';
import './Menu.css'

const Menu = ({ navigate }) => {

  const logout = () => {
    window.localStorage.removeItem("token")
    navigate('/login')
  }

  const settings = () => {
    navigate('/settings')
  }
  
  return (
    <div id='menu-container'>
      <div id='menu-list'>
          <h1 id='menu-title'>Menu</h1>
          <ul>
            <li><button className='menu-btn' onClick={settings}>Settings</button></li>
            <li><button className='menu-btn' onClick={logout}>Log out</button></li>
          </ul>

      </div>
    </div>
  );
}

export default Menu;