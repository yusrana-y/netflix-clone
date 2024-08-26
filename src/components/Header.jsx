import React from 'react';
import logo from '../assets/netflix-logo-0.png'
import './Header.css';

function Header() {
  return (
    <>
         <header className="header">
      <div className="logo">
        <img src="logo" alt="" />
      </div>
      <div className="buttons">
        <button className="button">Button 1</button>
        <button className="button">Button 2</button>
      </div>
    </header>
    </>
  )
}

export default Header