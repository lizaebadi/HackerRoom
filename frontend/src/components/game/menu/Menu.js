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
          <ul>
            <button className="menu-btn" onClick={logout}>Logout</button>
          </ul>

      </div>
    </>
  );
}

export default Menu;