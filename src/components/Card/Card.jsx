import React from 'react'
import './Card.css'

const Card = ({icon,textOfTec}) => {
  return (
    <div className="card">
      <i className={`${icon} card__icon`}></i>
      <h3>{textOfTec}</h3>
    </div>
  )
}

export default Card