import React, { useEffect, useState } from 'react'
import './CertificationCard.css'

const CertificationCard = ({ certification , moveNext, movePrev }) => {
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    console.log(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    console.log({endX, diff});
    

    if (diff > 50) {
      moveNext();
    } else if (diff < -50) {
      movePrev();
    }
  };
  

  const {certificationName, certificationDescription, certificationImg} = certification
  return (
    <div 
      className='card-certification'
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}>

      <div className='landing__1'>
        {/* <img src="/imgs/png_img/Frame 3532.png" alt="" class="back__landing"/> */}
        <img src="/imgs/png_img/Frame 3530.png" alt="" class="back__landing"/>
        <img src={`${certificationImg}`} alt="" className='img_landin' />
      </div>
      
      <article className='certification_text'>
        <h3> {certificationName} </h3>
        <p> {certificationDescription} </p>
      </article>
    </div>
  )
}

export default CertificationCard