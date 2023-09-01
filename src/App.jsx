import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import ListaDeTecnologias from '../public/jsons/ListaDeTecnologias.json';
import ProjectsCarousel from './components/CertificationCarousel/CertificationCarousel';
import { useState } from 'react';
import Button from './components/Button/Button';

function App() {

  const [position, setPosition] = useState(0)
  const [count, setCount] = useState(0)

  const cosas = [
    {
      projectName: "Pokedex App",
      projecImg: "https://64.media.tumblr.com/4779d457d8a2ab84d32a5a724ef4517f/a442ea7394a73e18-55/s2048x3072/82f0e310e6ff4f2ed9cf6dc2cd4626dd6179dee4.jpg",
      projectDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores sunt illum et accusamusquod, perspiciatis unde cum. Ducimus, voluptatem!",
    },
    {
      projectName: "Rick And MorTy App",
      projecImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshIlTW5LsRTn6fR4dMogCRemo8J6N27-NmuN8KAk80TCKiScM4cxiNzZ6G0I9I7-pt1Y&usqp=CAU",
      projectDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores sunt illum et accusamusquod, perspiciatis unde cum. Ducimus, voluptatem!",
    },
    {
      projectName: "Weather App",
      projecImg: "https://1.bp.blogspot.com/-RgtZb2h1f9Y/XIElskgH8sI/AAAAAAAAIbw/NlnGAhGWwpU2iOc0ZGiZjia3O0gFvQlNACLcBGAs/s1600/weather.png",
      projectDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores sunt illum et accusamusquod, perspiciatis unde cum. Ducimus, voluptatem!",
    },
  ]

  const cosas2 = [
    {
      certificationName: "Front end",
      certificationImg: "HolahBorrar esto",
      certificationDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores sunt illum et accusamusquod, perspiciatis unde cum. Ducimus, voluptatem! y puedes visitarlo ",
      certificationLink: "hBorrar esto",
    },
    {
      certificationName: "UX",
      certificationImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshIlTW5LsRTn6fR4dMogCRemo8J6N27-NmuN8KAk80TCKiScM4cxiNzZ6G0I9I7-pt1Y&usqp=CAU",
      certificationDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores sunt illum et accusamusquod, perspiciatis unde cum. Ducimus, voluptatem! y puedes visitarlo ",
      certificationLink: "hBorrar esto",
    },
    {
      certificationName: "Unimayor",
      certificationImg: "https://1.bp.blogspot.com/-RgtZb2h1f9Y/XIElskgH8sI/AAAAAAAAIbw/NlnGAhGWwpU2iOc0ZGiZjia3O0gFvQlNACLcBGAs/s1600/weather.png",
      certificationDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores sunt illum et accusamusquod, perspiciatis unde cum. Ducimus, voluptatem! y puedes visitarlo ",
      certificationLink: "hBorrar esto",
    },
  ]

  const types = ["Fornt-end", "UX"]

  const projects = [
    {
      projectName: "Pokedex app",
      projectDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quasi!",
      projectImg: "https://64.media.tumblr.com/4779d457d8a2ab84d32a5a724ef4517f/a442ea7394a73e18-55/s2048x3072/82f0e310e6ff4f2ed9cf6dc2cd4626dd6179dee4.jpg",
      projectLink: "https://es.wikipedia.org/wiki/Hola_mundo#Ada",
      projectGithub: "https://es.wikipedia.org/wiki/Hola_mundo#Ada",
      projectType: "Front-end"
    },
    {
      projectName: "Rick and Morthy App",
      projectDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quasi!",
      projectImg: "https://64.media.tumblr.com/4779d457d8a2ab84d32a5a724ef4517f/a442ea7394a73e18-55/s2048x3072/82f0e310e6ff4f2ed9cf6dc2cd4626dd6179dee4.jpg",
      projectLink: "https://es.wikipedia.org/wiki/Hola_mundo#Ada",
      projectGithub: "https://es.wikipedia.org/wiki/Hola_mundo#Ada",
      projectType: "Front-end"
    },
    {
      projectName: "App del clima",
      projectDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quasi!",
      projectImg: "https://64.media.tumblr.com/4779d457d8a2ab84d32a5a724ef4517f/a442ea7394a73e18-55/s2048x3072/82f0e310e6ff4f2ed9cf6dc2cd4626dd6179dee4.jpg",
      projectLink: "https://es.wikipedia.org/wiki/Hola_mundo#Ada",
      projectGithub: "https://es.wikipedia.org/wiki/Hola_mundo#Ada",
      projectType: "Front-end"
    },
    {
      projectName: "App del clima2",
      projectDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quasi!",
      projectImg: "https://64.media.tumblr.com/4779d457d8a2ab84d32a5a724ef4517f/a442ea7394a73e18-55/s2048x3072/82f0e310e6ff4f2ed9cf6dc2cd4626dd6179dee4.jpg",
      projectLink: "https://es.wikipedia.org/wiki/Hola_mundo#Ada",
      projectGithub: "https://es.wikipedia.org/wiki/Hola_mundo#Ada",
      projectType: "UX"
    },
    {
      projectName: "App del clima3",
      projectDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quasi!",
      projectImg: "https://64.media.tumblr.com/4779d457d8a2ab84d32a5a724ef4517f/a442ea7394a73e18-55/s2048x3072/82f0e310e6ff4f2ed9cf6dc2cd4626dd6179dee4.jpg",
      projectLink: "https://es.wikipedia.org/wiki/Hola_mundo#Ada",
      projectGithub: "https://es.wikipedia.org/wiki/Hola_mundo#Ada",
      projectType: "UX"
    },
  ]

  const nextPosition = () => {
    if (position < cosas.length - 1) setPosition(position + 1)
    if (position === cosas.length - 1) setPosition(0)
  }

  const lastPosition = () => {
    if (position <= cosas.length - 1 && position !== 0) setPosition(position - 1)
    if (position === 0) setPosition(cosas.length - 1)
  }


  return (
    <div className='app'>
      <section className='Projects__section'>
        <div className='Projects__search'>
          <form action="">
            <div className='Project__type-submut'>
              <input type="search" name="" id="" className='Project__type' />
              <button type="submit" className='Project_submit'><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <select name="" id="">
              <option value="">All</option>
              {types.map((type, index) => {
                return <option key={index} value={index}>{type}</option>
              })}
            </select>
          </form>
        </div>

        {/* <div className='Projects__container'>
          {projects.map((project) => {
            return <div key={project.projectName} className='project'>
              <h3>{project.projectName}</h3>
              <img src={project.projectImg} alt="" width="100px" />
            </div>
          })}
        </div> */}
        <div className='Projects__container'>
          {projects.map((project) => {
            return <div className="project" key={project.projectName}>
              <img src={project.projectImg} className='proyectImg' alt="" />
              <h3>{project.projectDescription}</h3>
            </div>
          })}
        </div>
        {/* <div className='Projects__container'>
          {projects.map((project) => {
            return <Card textOfTec={project.projectDescription} icon={project.projectImg} key={project.projectName}/>
          })}
        </div> */}
      </section>

      <Header />
      <section className="cards">
        <div className="cards__container">
          {ListaDeTecnologias.map((e) => {
            return <Card icon={e.icon} textOfTec={e.text} key={e.icon} />
          })}
        </div>
      </section>


      <section className='landing'>
        <ProjectsCarousel certificationName={cosas2[position].certificationName} certificationDescription={cosas2[position].certificationDescription} certificationImg={cosas2[position].certificationImg} certificationLink={cosas2[position].certificationLink} />
        <div className='landing__btns'>
          <button onClick={lastPosition}> {"<-"} </button>
          <Button text={"<-"} onClick={nextPosition}/>
          <button onClick={nextPosition}> {"->"} </button>
        </div>
      </section>

    </div>
  )
}

export default App
