import React from 'react'
import './ProjectsCarousel.css'

const ProjectsCarousel = ({ nameProject, projectDescription, projectImg }) => {
  return (
    <div className='landing__container'>
      <section class="landing__1">
        <img src={projectImg} className='img_landin' />
        {/* <img
          src="https://browserstack.wpenginepowered.com/wp-content/uploads/2021/02/Screenshot-2021-02-01-at-3.36.05-PM.png"
          alt="" class="img_landin" /> */}
      </section>
      <article class="landing__2">
        <h2><span>{nameProject}</span> and website projects</h2>
        <p>{projectDescription}</p>
      </article>
    </div>
  )
}

export default ProjectsCarousel