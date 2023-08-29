import React from 'react'
import './CertificationCarousel.css'

const CertificationCarousel = ({ certificationName, certificationDescription, certificationImg }) => {
  return (
    <div className='landing__container'>
      <section className="landing__1">
        <img src={certificationImg} className='img_landin' />
      </section>
      <article className="landing__2">
        <h2><span>{certificationName}</span> and website projects</h2>
        <div className='description_block'>
          <p>{certificationDescription}</p><a href="https://certificates.academlo.com/en/verify/51074297467236">aqui!</a>
        </div>
      </article>
    </div>
  )
}

export default CertificationCarousel