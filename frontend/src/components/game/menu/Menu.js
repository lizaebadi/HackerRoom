import React from 'react';
import './Menu.css'

const Menu = ({ navigate }) => {

  const logout = () => {
    window.localStorage.removeItem("token")
    navigate('/login')
  }
  
  return (
    <>
      <div id='menu-container'>
          <h1>Menu</h1>
          <ul className='menu-btn'>
            <li><button>Settings</button></li>
            <li><button onClick={logout}>Quit</button></li>
          </ul>

      </div>
    </>
  );
}

export default Menu;