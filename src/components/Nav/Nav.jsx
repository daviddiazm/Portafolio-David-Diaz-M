import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <nav class="nav">
      <button class="nav__toggel">
        <i class="fa-solid fa-bars"></i>
      </button>
      <ul class="nav__menu">
        <li class="menu__item">
          <a href="#" class="menu__link">Home</a>
        </li>
        <li class="menu__item">
          <a href="#" class="menu__link">Service</a>
        </li>
        <li class="menu__item">
          <a href="#" class="menu__link">About us</a>
        </li>
        <li class="menu__item">
          <a href="#" class="menu__link">Contact us</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav