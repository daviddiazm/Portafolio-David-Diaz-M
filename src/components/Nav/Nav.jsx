import React, { useState } from 'react'
import "./Nav.css"

const Nav = () => {

  const [toggleClass, setToggleClass] = useState("")

  const changeToggle = () => {
    if(toggleClass) {
      setToggleClass("")
    } else {
      setToggleClass("nav__slide")
    }
  }

  return (
    // <nav className="nav__slide">
    <nav className="nav">
      <button className="nav__toggel" onClick={changeToggle} >
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul className={"nav__menu "+ toggleClass}>
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