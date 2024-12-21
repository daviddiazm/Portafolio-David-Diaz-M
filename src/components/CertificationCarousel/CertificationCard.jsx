import React from 'react'
import './CertificationCard.css'

const CertificationCard = ({ certificationName, certificationDescription, certificationImg }) => {
  return (
    <div className='card-certification'>
      <img src={`${certificationImg}`} alt="" />
      <article className='certification_text'>
        <h3> {certificationName} </h3>
        <p> {certificationDescription} </p>
      </article>
    </div>
  )
}

export default CertificationCard