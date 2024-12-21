import React from 'react'
import './CardProject.css'

const CardProject = ({ project }) => {
  const tecnology = project.projectLengauge
  const tecList = {
    React: "https://duckduckgo.com/i/77b282252da85797.png",
    Vue: "https://duckduckgo.com/i/ce95ecdf8fc6089a.png",
    Angular: "https://avatars.githubusercontent.com/u/139426?s=48&v=4",
  }
  const tecnologyIcon = (tecnology) => {

  }

  return (
    <div className='project'>
      <img src={project.projectImg} alt="" className='project-img' />
      <h4> {project.projectName} </h4>
      <p> {project.projectDescription} </p>
      <ul>
        <li>
          <a 
            href={project.projectLink} 
            target="_blank" 
            rel="noopener noreferrer">
              <i className="fa-solid fa-globe"></i>
            </a>
        </li>
        <li>
          <a 
            href={project.projectGithub} 
            target="_blank" 
            rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
        </li>
      </ul>
      <img src={tecList[tecnology]} alt="" className='img__tecnology' />
    </div>
  )
}

export default CardProject