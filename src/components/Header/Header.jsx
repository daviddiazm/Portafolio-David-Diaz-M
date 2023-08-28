import React from 'react'
import './Header.css'
import Nav from '../Nav/Nav'
import Button from '../Button/Button'
const Header = () => {
  return (
    <header>
      <Nav/>
      <div className='header__home'>
        <article className="header__1">
          <h2><span>Hi!</span> I'am a frontend developed.</h2>
          <h3>David Diaz Montenegro</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste reiciendis perferendis illo totam illum sit?
            Possimus debitis repudiandae asperiores quod, est libero praesentium recusandae natus?</p>
          <Button/>
        </article>
        <section className="header__2">
          <img src="../public/imgs/AREmoji_20230204_193331_24458.gif" alt="" />
        </section>
      </div>
    </header>
  )
}

export default Header