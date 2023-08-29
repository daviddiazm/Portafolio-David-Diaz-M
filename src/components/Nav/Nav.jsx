import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <nav className="nav">
      <button className="nav__toggel">
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul className="nav__menu">
        <li className="menu__item">
          <a href="#" className="menu__link">Home</a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">Service</a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">About us</a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">Contact us</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav